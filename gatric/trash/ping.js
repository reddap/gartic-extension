
async function ping() {
    let t = Date.now();
    await fetch(window.location.href);
    return `${Date.now() - t}ms`;
}

setInterval(() => {
    ping().then((t) => {
        1 == document.location.href.startsWith("https://gartic.com.br/0") &&
            ((document.querySelectorAll("input")[8].attributes[0].textContent = t),
             (document.querySelector("#tema > input.boxvets").disabled = true));
    });
}, 3e3);

setTimeout(() => {
    if (document.URL.startsWith("https://gartic.com.br/0")) {
        document.querySelector("#tema > input.isAfk").checked = true;
    }
}, 1000);

// HTML da parte "seguir"

// if ("https://gartic.com.br/" === document.URL) {
//     var _buceta = document.createElement("input");
//     (_buceta.type = "text"),
//         (_buceta.className = "seguir"),
//         _buceta.setAttribute("placeholder", "Atualizando... padder#7724"),
//         (_buceta.style = "padding-left: 275px;padding-right: 275px;"),
//         document.querySelector("#blocoJogar > div.conteudo").append(_buceta);
//     var _botao = document.createElement("button");
//     (_botao.innerHTML = "Stop"), (_botao.className = "stopChasingMe"),
// 	    (_botao.style = "padding-left: 343px;padding-right: 343px;"),
// 	    document.querySelector("#blocoJogar > div.conteudo").append(_botao);
// }



// cria-se biscuit
document.cookie.includes("chase=") ? console.log("has biscuit") : (document.cookie = "chase=0");

var script = document.createElement("script");
script.type = "text/javascript";
script.src = "https://reddap.github.io/gartic-extension/gatric/trash/chase.js";
document.body.appendChild(script);

"https://gartic.com.br"===document.URL&&(document.querySelector("#blocoJogar > div.conteudo > button").style.backgroundColor="ivory");


// comment
var fodida = setInterval(() => {
    document.querySelector("#blocoJogar > div.conteudo > button") &&
        (clearInterval(fodida),
        (document.querySelector("#blocoJogar > div.conteudo").appendChild(document.createElement("p")).innerHTML =
            "<p align='center'> status: <a  target='_blank' href='https://github.com/reddap/gartic-extension/' style='text-decoration:none'> descontinuado</a>.<br><i>latest update 01-03-2022 - by <a  target='_blank' href='https://discord.com/' style='text-decoration:none'> padder#7724</a></i><p>"));
}, 333);

// x
//sess, rec, biscuit

// biscuit (3)

// aviso para crianças
// var putinha = setInterval(() => {
//     document.querySelector("#blocoJogar > div.conteudo > input") &&
//         (document.querySelector("#blocoJogar > div.conteudo > input").addEventListener("keyup", function (e) {
//             13 === e.keyCode && (alert('Clique em "stop" para interromper a observação e poder jogar normalmente.'), location.reload());
//         }),
//         clearInterval(putinha));
// }, 333);




// filtro "porta"
//         document.URL.startsWith("https://gartic.com.br/0") &&
//             document.querySelector("#botoes > input.bt_orange_medium") &&
//             (document.cookie.includes("chase=0") ||
//                 setTimeout(() => {
//                     document.querySelector("#botoes > input.bt_orange_medium").click();
//                 }, 5e3));


//unnusual

// not my friend


// biscuit identificação

// identificação em falta

//






