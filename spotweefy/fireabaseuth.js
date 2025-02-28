
  // Import the functions you need from the SDKs you need

  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";
  import {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/11.0.2/firebase-auth.js";
  import {getFirestore, doc, setDoc} from "https://www.gstatic.com/firebasejs/11.0.2/firebase-firestore.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  
  const firebaseConfig = {
    apiKey: "AIzaSyBdDNX_qMLsnKMoyfTBGe0bZOjD6BNqVUw",
    authDomain: "spotweefy-92a8d.firebaseapp.com",
    projectId: "spotweefy-92a8d",
    storageBucket: "spotweefy-92a8d.firebasestorage.app",
    messagingSenderId: "896170828673",
    appId: "1:896170828673:web:e2567aacd89dd37da4be80"
  };

  // Initialize Firebase
  
  const app = initializeApp(firebaseConfig);

  function mostrarMensagem(mensagem, divId) {
    var mensagemDiv = document.getElementById(divId);
    mensagemDiv.style.display = "block";
    mensagemDiv.innerHTML=mensagem;
    mensagemDiv.style.opacity=1;
    setTimeout(function() {
      mensagemDiv.style.opacity=0;

    }, 5000);
  }
  const criar = document.getElementById('formCriar');
  criar.addEventListener('click', (event)=> {
    event.preventDefault();
    const primeiroNome = document.getElementById('nome').value;
    const nomeDeUsuario = document.getElementById('nomeDeUsuario').value;
    const email = document.getElementById('Cemail').value;
    const senha = document.getElementById('Csenha').value;

      const auth = getAuth();
      const db = getFirestore();

    createUserWithEmailAndPassword(auth, email, senha)
    .then((Usuario)=> {
      const user=Usuario.user;
      const dados = {
        email: email,
        primeiroNome: primeiroNome,
        nomeDeUsuario: nomeDeUsuario,
        senha: senha,
      };
      mostrarMensagem('Conta Criada com sucesso!', 'mensagemCriar');
      const docRef = doc(db, 'users', user.uid);
      setDoc(docRef, dados)
      .then(()=> {
        window.location.href='index.html';
      })
      .catch((erro)=> {
        console.error('erro criando a conta', erro)
      });
    })
    .catch((erro) => {
      const erroCode = erro.code;
      if (erroCode=='auth/email-already-in-use') {
        mostrarMensagem('Email já em uso!', 'mensagemCriar')
      }
        else {
          mostrarMensagem('Não foi possível criar a conta!', 'mensagemCriar')
        }
    })
  })

  const entrar = document.getElementById('formEntrar')
  entrar.addEventListener('click', (event)=> {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;
    const auth = getAuth();

    signInWithEmailAndPassword(auth, email, senha)
    .then((Usuario) => {
      mostrarMensagem('Login feito com sucesso!', 'mensagemEntrar');
      const user = Usuario.user;
      localStorage.setItem('entrouId', user.uid);
      window.location.href='homepage.html';
    })
    .catch((erro) => {
      const erroCode = erro.code;
      if (erroCode === 'auth/wrong-password') {
        mostrarMensagem('Senha incorreta!', 'mensagemEntrar');
      }
      else {
        mostrarMensagem('Conta não existe!', 'mensagemEntrar');
      }
    }) 
  })