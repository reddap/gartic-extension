// adaptando à extensão geral
// https://user-images.githubusercontent.com/70059776/152645899-c65ac090-500e-4386-b17c-25ce5f4e1f8c.png

/*
// parte de código inutilizado/não alterado (eu acho...)
function resposta(a) {
    ($("resposta" + a).style.display = "block"),
        ($("respostaLink" + a).innerHTML = '-&nbsp;<a href="#" onclick="cancelarResposta(' + a + '); return false;">Cancelar resposta</a>'),
        0 != ultimaResposta && ultimaResposta != a && cancelarResposta(ultimaResposta),
        (ultimaResposta = a);
}
function cancelarResposta(a) {
    ($("resposta" + a).style.display = "none"), ($("respostaLink" + a).innerHTML = '<a href="#responder' + a + '" onclick="resposta(' + a + ');"><img src="/imgs/novo/icon_scrap_reply.png" alt="" width="12" height="13" /> Responder</a>');
}
function respostaEnviar(a, e) {
    ($("responder" + a).style.display = "none"),
        ($("respostaStatus" + a).style.display = "block"),
        ($("respostaStatus" + a).style.color = "#32D54A"),
        ($("blocoRec" + a).style.display = "none"),
        ($("tamanho" + a).className = "recadoLinks tamanhoParcial"),
        ($("respostaStatus" + a).innerHTML = "Enviando...");
    var s = $("respostaCampo" + a).value;
    ajax.chamada("/perfil_recado.php", "recado=" + s + "&loginDestino=" + e + "&id=" + a + "&ajax=true", "respostaEnviarRetorno");
}
function respostaEnviarRetorno(a) {
    var e = a.split("@");
    $("respostaStatus" + e[0]).innerHTML = "undefined" == typeof mobile ? e[1] : "Respondido";
}
function denunciarRecado(a) {
    ajax.chamada("/denunciar_recado.php", "id_recado=" + a, "retornoDenuncia");
}
function retornoDenuncia(a) {
    abrirJanela(a);
}

*/

// reformulado
function ajaxRecado(profile, username, func2) {
  ultimaResposta = 0;
  location.href = "#......padder#7724.....no.....Discord.....:).....♥";
  $("recadosDetalhes").innerHTML = "https://github.com/reddap/gartic-extension/";
  ajax.chamada(profile, username, func2, true);
}
// return false;

function retornoAjaxRecado(recados) {
  $("recadosDetalhes").innerHTML = recados;
}
var ultimaResposta = 0;

// [ erros mínimos ] (linha 38?)
// ERR_INVALID_REDIRECT 
// ainda não se sabe o motivo;
// pode-se ajeitar redirecionando à alguma página de "padder";


