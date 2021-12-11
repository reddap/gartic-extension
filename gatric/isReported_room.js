/*
14: mostra salas denunciadas dentro de uma sala utilizando elemento iframe
26: o fundo da sala vai mudar de cor caso esta sala denunciada
31: verificando a cada 5 segundos
*/
var valor;
var reported;
var i = document.createElement("iframe");
function report() {
  valor = 0;
  reported = [];
  for (; valor < i.contentDocument.getElementsByClassName("sala").length;) {
    if ("reported" == i.contentDocument.getElementsByClassName("sala")[valor].id) {
      reported.push(i.contentDocument.getElementsByClassName("sala")[valor].firstChild.textContent);
    }
    valor++;
  }
}
i.style.width = "0", i.style.height = "0", i.src = "https://gartic.com.br/", document.body.appendChild(i);
var it;
function salacolor() {
  it=0;
  report();
  for (; it < reported.length;) {
    if (document.title.includes(reported[it])) {
      document.getElementById("limite").style.backgroundImage = "url('https://i.imgur.com/X7Lv55v.png')";
    }
    it++;
  }
}
setInterval(() => {
  salacolor();
}, 5e3);
