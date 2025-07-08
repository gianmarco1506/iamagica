/* 
VÁRIAVEIS - Um pedacinho de memória do computador
que eu posso guardar o que eu quiser.

FUNCOES
É um pedacinho de código QUE, só executa 
Quando é chamado.

documet = HTML
querySelector = buscar alguém no HTML

fetch - ferramenta para se comunicar com algo fora do codigo

[x] Descobrir quando o botão foi clicado
[x] Pegar o que foi escrito no Input
[x] Enviar para o N8N
[x] Receber o que o N8N Respondeu
[x] Colocar na Tela o que ele respondeu    

*/
let webhook = "https://gian1506.app.n8n.cloud/webhook/animacao-css";
// funcao assincrona
async function cliqueiNoBotao() {
  let textoInput = document.querySelector(".input-animacao").value;
  let codigo = document.querySelector(".area-codigo");
  let areaResultado = document.querySelector(".area-resultado");

  let botao = document.querySelector(".botao-magica")

  botao.disabled = true;
  botao.textContent = "Criando...";
  botao.style.background = "#888";


  // fetch - 1) O endereco 2) configuracoes 3) os dados
  // JSON - O formato de dados que usamos na internet

  let resposta = await fetch(webhook, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ pergunta: textoInput }),
  });

  let resultado = await resposta.json();
  console.log(resultado);
  let info = JSON.parse(resultado.resposta);

  console.log(info);

  codigo.innerHTML = info.code;

  areaResultado.innerHTML = info.preview;

  document.head.insertAdjacentHTML(
    "beforeend",
    "<style>" + info.style + "</style>"
  );

  botao.disabled = false;
  botao.textContent = "Criar Mágica ✨";
  botao.style.background = "#37E359";
}
