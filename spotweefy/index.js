// definir o estilo da pagina de login
const botaoEntrar = document.getElementById('botaoEntrar');
const botaoCriar = document.getElementById('botaoCriar');
const entrarForm = document.getElementById('entrar');
const criarForm = document.getElementById('criar'); 

botaoCriar.addEventListener('click', function(){
    entrarForm.style.display = "none";
    criarForm.style.display = "grid";
});

botaoEntrar.addEventListener('click', function(){
    entrarForm.style.display = "grid";
    criarForm.style.display = "none";
});

// alterar a opção de ver a senha