/*// JAVASCRIPT - é uma linguagem de programação
//VARIAVEIS - Um pedacinho de memoria do computador 
//que eu posso guardar o que eu quiser.
let numeros = 10;
let nome = "Gian Marco";

*/


   /*
    fetch - chamar algo de fora do meu codigo

      [x] Descobri quando o botão foi clicado
      [x] Pegar o que foi escrito no  Input
      [ ] Enviar para o N8N
      [ ] Receber o que o N8N Respondeu
      [ ] Colocar na tela o que ele reespondeu 
     */


/*
FUNÇÕES - é um pedacinho e código QUE,
 só executa quando é chamado.
function nomeDaFuncao() {
    console.log("Olá, Mundo!");
}
    
*/

// document = HTML do navegador
// querySelector = buscar alguém no HTML

//console.log("E ai, ja deu like ?😎");
//console.log() mostra algo que eu quero na tela
// JS - toda vez que eu quero digitar um texto, "" ou ''
let webhook = "https://gian1506.app.n8n.cloud/webhook-test/animação-css"

function cliqueiNoBotao() {
  let textoInput = document.querySelector(".input-animacao").value;
  let  button = document.querySelector(".botao-magica")
  
  let resposta = fetch(webhook, {
      method: 'POST', 
      headers: { 'content-Type': 'application/json' },
      body: JSON.stringify({ pergunda: textoInput})
     })


  }


  //JSON

 console.log(textoInput) 

    // Aqui eu vou pegar o valor do input
  //ENVIAR PARA IA