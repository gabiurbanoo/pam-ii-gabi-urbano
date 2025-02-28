import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";
import { getAuth, onAuthStateChanged, signOut, deleteUser,  reauthenticateWithCredential, EmailAuthProvider } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-auth.js";
import { getFirestore, doc, getDoc, updateDoc } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-firestore.js";
import { getDatabase, ref, set, serverTimestamp, onChildAdded } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-database.js";

// Configuração do Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBdDNX_qMLsnKMoyfTBGe0bZOjD6BNqVUw",
  authDomain: "spotweefy-92a8d.firebaseapp.com",
  projectId: "spotweefy-92a8d",
  storageBucket: "spotweefy-92a8d.firebasestorage.app",
  messagingSenderId: "896170828673",
  appId: "1:896170828673:web:e2567aacd89dd37da4be80"
};

// Inicialização do Firebase e amostra do nome de usuário e nome
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore();



// Verifica o estado de autenticação
onAuthStateChanged(auth, (Usuario) => {
  if (Usuario) {
    // Busca os dados do usuário no Firestore
    const docRef = doc(db, 'users', Usuario.uid);
    getDoc(docRef)
      .then((docSnap) => {
        if (docSnap.exists()) {
          const dadosUsuario = docSnap.data();
          document.getElementById('nome').innerHTML = dadosUsuario.primeiroNome;
          document.getElementById('nomeDeUsuario').innerHTML = dadosUsuario.nomeDeUsuario;

          // Adiciona o evento de trocar nome
          document.getElementById('trocar').addEventListener('click', () => {
            trocarNome(Usuario.uid);
          });
        } else {
          console.error('Documento não encontrado no Firestore.');
        }
      })
      .catch((erro) => {
        console.error('Erro ao buscar documento:', erro);
      });
  } else {
    console.log('Usuário não autenticado.');
  }
});

// Terceiro passo do CRUD: Update
function trocarNome(userId) {
  const nomeSpan = document.getElementById('nome');
  const botaoTrocar = document.getElementById('trocar');

  // Troca o <span> por um campo de input
  const input = document.createElement('input');
  input.type = 'text';
  input.value = nomeSpan.innerHTML;

  // Troca o botão "Trocar" por "Salvar"
  const botaoSalvar = document.createElement('button');
  botaoSalvar.classList.add('salvar')
  botaoSalvar.textContent = 'Salvar';

  // Substitui os elementos no DOM
  nomeSpan.replaceWith(input);
  botaoTrocar.replaceWith(botaoSalvar);

  // Evento de salvar o novo nome
  botaoSalvar.addEventListener('click', () => {
    const novoNome = input.value;

    // Atualiza o Firestore com o novo nome
    const docRef = doc(db, 'users', userId);
    updateDoc(docRef, { primeiroNome: novoNome })
      .then(() => {
        // Substitui o input de volta pelo nome atualizado
        input.replaceWith(nomeSpan);
        nomeSpan.innerHTML = novoNome;

        // Substitui o botão de volta para "Trocar"
        botaoSalvar.replaceWith(botaoTrocar);
        botaoTrocar.textContent = 'Trocar';
        botaoTrocar.addEventListener('click', () => {
          trocarNome(userId);
        });
      })
      .catch((erro) => {
        console.error('Erro ao atualizar nome:', erro);
        alert('Erro ao atualizar nome.');
      });
  });
}

const logoutButton=document.getElementById('deslogar');

  logoutButton.addEventListener('click',()=>{
    localStorage.removeItem('dadosUsuario');
    signOut(auth)
    .then(()=>{
        window.location.href='index.html';
    })
    .catch((error)=>{
        console.error('Error Signing out:', error);
    })
  })

  // primeiro passo do CRUD: Create
  const bd = getDatabase(app);

  // Referencie o formulário e elementos necessários
  const reviewForm = document.getElementById("reviewForm");
  const post = document.getElementById("review");
  const hiddenIdInput = document.getElementById("hiddenId");
  const posts = document.getElementById('posts')
  
  if (reviewForm) {
    // Adiciona o evento de submit no formulário
    reviewForm.addEventListener("submit", (e) => {
      e.preventDefault(); // Impede o comportamento padrão de enviar o formulário
  // Gera um ID único para o post ou usa o ID oculto se fornecido
      const id = hiddenIdInput.value || Date.now();
  // Obtem os valores necessários
      const checkPost = post.value;
       if (!checkPost.trim()) {
        console.error("O conteúdo do review está vazio!");
        return;
      }
  
      // Cria a referência no Realtime Database para salvar o post
      const reviewRef = ref(bd, `reviews/${id}`);
    

      set(reviewRef, {
        // nomeDeUsuario: doc(db, 'users', nomeDeUsuario), // Evita erros se `nomeDeUsuario` não existir
        post: checkPost,
        createdAt: serverTimestamp(), // Adiciona o timestamp do servidor
      })
        .then(() => {
          console.log("Review salvo com sucesso!");
          post.value = ""; // Limpa o campo de texto após salvar
          hiddenIdInput.value = ""; // Reseta o campo hidden
        })
        .catch((erro) => {
          console.error("Erro ao salvar o review:", erro);
        });
    });
  }
  const reviewRef = ref(bd, `reviews`);
  
  // segundo passo do CRUD: Read
  
  onChildAdded(reviewRef, (data) => {
    var li = document.createElement('li'); // Cria um elemento <li>
    li.id = data.key; // Define o ID como a chave do nó
    li.innerHTML = "<li><span id='nomeDeUsuario'>. </span>" + data.val().post + "</li>"; // Define o texto como o valor do campo `checkPost`
    
    posts.appendChild(li); // Adiciona o <li> como filho de `checkPost`
  });

  // Quarto e ultimo passo do CRUD: Delete
  const deleteAccountButton = document.getElementById("apagar");
  
  // Verifica o estado de autenticação
  onAuthStateChanged(auth, (user) => {
    if (user) {
      deleteAccountButton.addEventListener("click", () => {
        // Solicita as credenciais do usuário
        const email = user.email; // Obtém o email do usuário logado
        const password = prompt("Por favor, insira sua senha para confirmar."); // Simples caixa de senha
        
        if (!password) {
          console.error("Senha não fornecida. Ação cancelada.");
          return;
        }
  
        // Cria as credenciais para reautenticação
        const credential = EmailAuthProvider.credential(email, password);
  
        reauthenticateWithCredential(user, credential)
          .then(() => {
            // Após reautenticar, apaga o usuário
            deleteUser(user)
              .then(() => {
                console.log("Conta apagada com sucesso!");
                window.location.href = "index.html"; // Redireciona para a página inicial
              })
              .catch((error) => {
                console.error("Erro ao apagar a conta:", error.message);
              });
          })
          .catch((error) => {
            console.error("Erro ao reautenticar o usuário:", error.message);
          });
      });
    } else {
      console.error("Nenhum usuário autenticado para apagar a conta.");
    }
  });
