/*/-- retirado do repositório "gartic-script-collection"

olá, minha criança. tire as r--x-e-----f---me-d--h--m--me;
antes de tudo, eu fiz este script mais por curiosidade do que utiliddade. assim como a maioria deste repositório;
essa facilidade é usada de forma abusiva, algumas vezes;
eu resolvi abusar mais ainda dessa c--x-x---t-a-a-nn chamada "perto";

linha 79 para desktop;
linha 173 para navegador no modo mobile (m.gartic.net) ou emulador de android com devtools.

como fiz rápido e só para mim, não foi organizado de forma inteligente;
não foi retirado o console.log, entre outros testes;
nada que faça tamanha diferença. :)

primeiro, peguei toda a lista dos 472 animais (2022) e separei as palavras com o suficiente para estar perto; QUATRO LETRAS;
/*/

for (var ql, i = 0, t = [], animais = ["LEOPARDO", "GUEPARDO", "TIGRE DE BENGALA"]; i < animais.length; )
    (ql = [].constructor.from(animais[i].matchAll("....")).flat()),
    i++, t.push(ql[0]);
console.log(t); /*/  ['LEOP', 'GUEP', 'TIGR']  /*/

/*/ após isso, retirei as palavras com 4 letras que fossem repetidas. /*/

palavras_nao_picotadas = ["TIGRE DE BENGALA", "TIGRE BRANCO", "TIGRE", "LEÃO-MARINHO", "LEÃO"];
palavras_picotadas = ["TIGR", "TIGR", "TIGR", "LEÃO", "LEÃO"];

var c = ["TIGR", "TIGR", "TIGR", "LEÃO", "LEÃO"];
var d = c.filter((a, b) => c.indexOf(a) === b);
console.log(d); /*/ ['TIGR', 'LEÃO'] /*/

/*/
de 472, foi para 352 palavras;
18 palavras são possíveis colocar em um bloco de 100 caracteres.
entao:
/*/

352 / 18, (19)["colunas"];

/*/
se é enviado um bloco a cada 200ms (1 segundo dividido para 5);
todos os animais serão enviados em 3.8 segundos;
caso 100ms, 1.9 segundos;
caso 1 segundo, 19 segundos.

e isso, claro, vai depender da velocidade de conexão;
se o ping estiver maior que 100, será melhor usar 150ms;
menor que 50, não terá problemas em usar 50ms.

em seguida, eu deveria ter feito um código para match todas as palavras que contém certas quatro letras, mas não fiz. 6:
por exemplo : arat = aratu/barata;
            : bara = barata/tubarão (todos);
            : açor = açor/cobra-coral.
 
e também, organização das palavras que mais contém chutes para o tempo de cada coluna ficar mais próximo de uma singularidade.
por exemplo : peix = peixes (mais de 20);
            : aran = aranhas, caranguejos;
            : inho = marinhos, estorninho, arminho (...).
             
             
está muito bem explicado como eu preparei essa ideia. com isso, eu espero que inspire alguém a criar outro tipo de script para, quem sabe, um jogo melhor ou algum website útil.
caso você, criança, esteja interessada em organizar este código para se divertir as vezes (de forma 10% mais legal, pois organizar nem faz tanta diferença, apesar de tudo), feel-free.
se nao conseguir fazer no PC, certamente irá conseguir no navegador modo-mobile;

isto até decidirem "ajeitar" :). certamente funcional hoje (28/02/2022);

isso se chama falha-de-design, certo?

/*/

var wo, resp;

wo == `blocos de animais separados em 4 letras, suficiente para 'estar perto'`;
resp == `resposta ao ser encontrada o bloco correto`;

/*/ podem ter mais alguns erros ou outros no código. mas isso não afeta o bastante enquanto utilizado. você pode verificar nos logs do console; /*/

/* aperte shift para re-enviar a lista, caso ocorra algum erro; */

var wo = [
    ["RÃ", "EMA", "EMU", "ASA", "GNU", "BOI", "ASA", "UÇÁ", "ANU", "PEIX"],
    ["ZEBU", "ADAX", "AÇOR", "KUDU", "PIAU", "ÓRIX", "PERU", "GATO", "ATUM", "PENA", "FOCA", "URSO", "TATU", "PUMA", "LULA", "RABO", "LOBO", "GALO", "LEOA"],
    ["SIRI", "RATO", "ALCE", "PACU", "JACU", "CUCO", "MULA", "PACA", "ASNO", "PATA", "BOTO", "PATO", "ORCA", "RENA", "NAJA", "BICO", "VACA", "BODE", "SAPO", "CURI"],
    ["OCAP", "LESM", "RATE", "LEBR", "QUIV", "QUAT", "SAGU", "LARV", "BAGR", "LEÃO", "BETT", "MOSC", "MORS", "ONÇA", "CALA", "PAND", "CABR", "OSTR", "CARP"],
    ["MAMB", "POTR", "PULG", "LHAM", "LINC", "POLV", "POMB", "PORC", "CERV", "SAIG", "DODÔ", "ARAR", "VESP", "TEIÚ", "ZEBR", "CRIN", "TIGR", "URUT", "CORV", "URUB"],
    ["TRUT", "GANS", "TOUR", "CRAC", "GARR", "ARAT", "CISN", "HIEN", "COAL", "CUTI", "IAQU", "ÉGUA", "IRAR", "COBR", "GRIL", "DING", "ÍBIS", "CUPI", "CORA", "CORU"],
    ["CAST", "COND", "MORE", "FENE", "NARV", "PAVÃ", "MANA", "ENGU", "ENXA", "ESCA", "PARD", "CAME", "CAVA", "MAMU", "GORI", "GUAR", "GIRI", "GIRA", "CHIF", "GINE"],
    ["ABEL", "IGUA", "JERB", "CIVE", "JABU", "JIBO", "IMPA", "CHUP", "GIBÃ", "GAZE", "CASU", "GAMB", "MACU", "COIO", "FUIN", "FURÃ", "JAVA", "MACA", "CHAC", "GAVI"],
    ["COEL", "GARÇ", "MABE", "LONT", "OVEL", "BELU", "PÍTO", "PÔNE", "RAPO", "SERV", "ROBA", "BADE", "PIPI", "BARA", "PERD", "BALE", "PIOL", "BAIA", "SUCU", "TAIN"],
    ["ALPA", "ABUT", "XEXÉ", "ÁGUI", "ÁCAR", "TUCA", "AMEI", "ARRA", "TEXU", "TRAÇ", "ARAN", "TROM", "ATOB", "BISÃ", "CADE", "CAIT", "CARD", "LAMB", "CACA", "LAGO"],
    ["HAMS", "LACR", "LAGA", "QUET", "LEIT", "FALC", "FAIS", "CORC", "CARA", "TUIU", "AURO", "AREN", "FERR", "REBA", "JUME", "SERI", "JACA", "OURI", "TRAÍ", "GARO"],
    ["CANG", "GUEL", "GALI", "BÚFA", "PANT", "FORM", "COLI", "FRAG", "GAIV", "JAMA", "CIGA", "SALM", "AXOL", "GLUT", "MARR", "MARM", "WALL", "NARC", "GUAN", "VOMB"],
    ["DOUR", "DONI", "MORC", "MOLU", "BESO", "ZANG", "MINH", "VICU", "MAND", "CODO", "CEGO", "ESQU", "AZUL", "ARMI", "PIXA", "LÊMU", "PING", "AIEA", "BEZE", "PINT"],
    ["COTO", "PIRA", "CAÇÃ", "ARAP", "CACH", "TOUP", "TILÁ", "FLAM", "TUBA", "CAMA", "ELEF", "ZORR", "ABET", "URUM", "ALBA", "PANG", "ANÊM", "PAPA", "ALCA", "CORD"],
    ["SERP", "AVES", "CHAM", "LING", "QUEI", "CAPI", "LEOP", "PELI", "BABU", "LOMB", "MARI", "CASC", "CARR", "MANG", "PORAQ", "CARN", "NÁUT", "RATA", "TANG", "SURU"],
    ["JOAN", "SURI", "GUEP", "GUAX", "GOLF", "TANA", "TAMB", "CANÁ", "SARD", "JAÇA", "SAIC", "MOSQ", "SARA", "ARIR", "JARA", "CALO", "BARB", "CROC", "BEMT", "BORB"],
    ["ANTÍ", "ANDO", "BICH", "CENT", "CHIN", "TAMA", "GAFA", "PERI", "PERC", "NADA", "MEXI", "TART", "LIBÉ", "TUCU", "TICO", "MATA", "MUSA", "VAGA", "CAMU", "BEIJ"],
    ["ÁGUA", "TARÂ", "PERN", "SALA", "ESCO", "CHIM", "ESTO", "TENT", "HIPO", "GRAL", "QUER", "RINO", "SANG", "JAGU", "BUGI", "ORAN", "DROM", "MARL", "LOUV", "ORNI"],
    ["VIÚV", "PÁSS", "AGUL", "PEPI", "ESTR", "DRAG", "ESPO", "JOÃO", "DIAB", "AVED", "MICO", "PORQ"],
];

var resp=[["RÃ","EMA","EMU","ASA","GNU","BOI","ASA","UÇÁ","ANU","PEIXE","PEIXE","PEIXE-AGULHA","PEIXE-ANJO","PEIXE-BOI","PEIXE-BOLHA","PEIXE-BORBOLETA","PEIXE-BRUXA","PEIXE-CORDA","PEIXE-ESPADA","PEIXE-FOLHA","PEIXE-GALO","PEIXE-GATO","PEIXE-LANTERNA","PEIXE-LEÃO","PEIXE-LUA","PEIXE-MANDARIM","PEIXE-MORCEGO","PEIXE-PALHAÇO","PEIXE-PEDRA","PEIXE-REI","PEIXE-SERRA","PEIXE-SOL","PEIXE-TROMBETA","PEIXE-VOADOR","PEIXE-ZEBRA"],
          ["ZEBU","ADAX","AÇOR", "COBRA-CORAL","KUDU","PIAU","ÓRIX","PERU","GATO","ATUM","PENA","FOCA","URSO","TATU","PUMA","LULA","RABO", "PATO", "LOBO","GALO","LEOA","GATO-DO-MATO","LOBO-MARINHO", "LOBO-GUARÁ","TATURANA","RENA","FOCA-ELEFANTE","URSO-PARDO","URSO-POLAR","MULA","RATO","PEIXE-GATO","PEIXE-GALO"],
          ["SIRI","RATO","ALCE","PACU","JACU","CUCO","MULA","PACA", "PAAP-CAPIM","ASNO","PATA","BOTO","PATO","ORCA","RENA","NAJA","BICO","VACA","BODE","SAPO","CURIÓ","RATO-TOUPEIRA-PELADO","CEGONHA-BICO-DE-SAPATO","CARRAPATO","GATO","RATO","MACUCO","SAPO-BOI","PENA","LULA","ONÇA","JACUTINGA"],
          ["OCAPI","LESMA","RATEL","LEBRE","QUIVI","QUATI","SAGUI","LARVA","BAGRE","LEÃO", "CAMALEÃO", "FORMIGA-LEÃO","BETTA","MOSCA","MORSA","CALAU", "COALA","PANDA","CABRA","CABRITO","OSTRA","CARPA","MICO-LEÃO-DOURADO","MICO-LEÃO-PRETO","LEÃO-MARINHO","PANDA-VERMELHO","CALANGO","OSTRA JAPONESA","PEIXE-LEÃO"],
          ["MAMBA","POTRO","PULGA","LHAMA","LINCE","POLVO","POMBO","PORCO","CERVO","SAIGA","DODÔ","ARARA","VESPA","TEIÚ","ZEBRA","CRINA","TIGRE","URUTU","CORVO","URUBU","URUBU-REI","PEIXE-ZEBRA","VESPA-DO-MAR","TIGRE BRANCO","TIGRE DE BENGALA","JARARACA","JARARACUÇU","ARARA","ARARA-VERMELHA","ARARAJUBA","PORCO-DA-TERRA","PORCO-DO-MATO","PORCO-DO-MAR","PORCO-ESPINHO"],
          ["TRUTA","GANSO","TOURO","CRACA","GARRA", "CIGARRA","ARATU", "BARATA","CISNE","HIENA","COALA","CUTIA","IAQUE","ÉGUA","IRARA","PIRARUCU","PIRANHA","COBRA","GRILO","DINGO","ÍBIS","CUPIM","CORAL","CORUJA","COBRA-CORAL","COBRA-CIPÓ","COBRA-CEGA","PIPIRA", "PIOLHO-DE-COBRA"],
          ["CASTOR","CONDOR","MOREIA","FENECO","NARVAL","PAVÃO","MANADA","ENGUIA","ENXAME","ESCAMA","ESCARAVELHO","PARDAL","LEOPARDO","GUEPARDO","URSO-PARDO","ARANHA-CAMELO","ARANHA-PAVÃO","CAMELO","CAVALO","CAVALO-MARINHO","MAMUTE","GORILA","GUARÁ","LOBO-GUARÁ","GIRINO","GIRAFA","CHIFRE","GINETA","GAZELA-GIRAFA", "LOBO DA TASMÂNIA"],
          ["ABELHA","IGUANA","JERBOA","CIVETA","JABUTI","JIBOIA","IMPALA","CHIMPANZÉ","CHUPIM","GIBÃO","GAZELA","GAZELA-GIRAFA","CASUAR","GAMBÁ","MACUCO","COIOTE","FUINHA","FURÃO","JAVALI","MACACO","MACACO-PREGO","MACACO-NARIGUDO","MACACO-ARANHA","CHACAL","GAVIAL","GAVIÃO"],
          ["COELHO","COELHO ANGORÁ","GARÇA","MABECO","LONTRA","OVELHA","BELUGA","PÍTON","PÔNEI","RAPOSA","SERVAL","ROBALO","BADEJO","PIPIRA","BARATA","TUBARÃO","TUBARÃO-BRANCO","TUBARÃO-LIXA","TUBARÃO-BALEIA","TUBARÃO-ENFERMEIRO","TUBARÃO-MARTELO","PERDIZ","BALEIA","BALEIA-AZUL","PIOLHO","PIOLHO-DE-COBRA","BAIACU","SUCURI","TAINHA"],
          ["ALPACA","ABUTRE","JABUTI","XEXÉU","ÁGUIA","ÁCARO", "JACARÉ","TUCANO","AMEIVA","ARRAIA","TEXUGO","TRAÇA","TROMBA","ATOBÁ","BISÃO","CADELA","CAITITU","CARDEAL","CARDUME","LAMBARI","CACATUA","CAÇÃO","LAGOSTA","ARANHA","CARANGUEJO","CARANGUEJO-DOS-COQUEIROS","CARANGUEJO-VIOLINISTA", "MACACO-ARANHA","ARANHA-CAMELO","ARANHA-CARANGUEJEIRA","ARANHA-DO-MAR","ARANHA-MARROM","ARANHA-PAVÃO","MUSARANHO","MACACO-ARANHA","TARÂNTULA"],
          ["HAMSTER","LACRAIA","LAGARTO","LAGARTA","LAGARTIXA","QUETZAL","LEITÃO","FALCÃO","FAISÃO","CORCOVA","CARACOL", "CARACAL","CARAMUJO","CARANGUEJO","CARANGUEJO-DOS-COQUEIROS","CARANGUEJO-VIOLINISTA","TUIUIÚ","AUROQUE","ARENQUE","FERRÃO","REBANHO","JUMENTO","SERIEMA","JACARÉ","JAÇANÃ","OURIÇO","OURIÇO-DO-MAR","TRAÍRA","GAROUPA"],
          ["CANGURU","SAICANGA","GUELRAS","GALINHA","BÚFALO","PANTERA","FORMIGA","FORMIGA-LEÃO","FORMIGA-VERDE","COLIBRI","FRAGATA","GAIVOTA","JAMANTA","CIGARRA","SALMÃO","AXOLOTE","GLUTÃO","MARRECO","MARMOTA","WALLABY","NARCEJA","GUANACO","IGUANA","VOMBATE"],
          ["DOURADO","DONINHA","MORCEGO","PEIXE-MORCEGO","MOLUSCO","BESOURO", "BESOURO-GIRAFA", "BESOURO-RINOCERONTE", "BESOURO-DO-AMOR","ZANGÃO","MINHOCA","VICUNHA","TAMANDUÁ","MANDRIL","CODORNA","CEGONHA","CEGONHA-BICO-DE-SAPATO","ESQUILO","ESQUILO-VOADOR","AZULÃO","BALEIA-AZUL","MARLIN-AZUL","GRALHA-AZUL","ARMINHO","PIXARRO","LÊMURE","PINGUIM","AIE-AIE","BEZERRO","PINTADO"],
          ["COTOVIA","PIRARUCU", "PIRANHA","CAÇÃO","CACATUA","ARAPONGA","CACHALOTE", "CACHORRO", "CACHORRO-VINAGRE","TOUPEIRA","RATO-TOUPEIRA-PELADO","TILÁPIA","FLAMINGO","TUBARÃO","TUBARÃO-BRANCO","TUBARÃO-LIXA","TUBARÃO-BALEIA","TUBARÃO-ENFERMEIRO","TUBARÃO-MARTELO","CAMALEÃO","ESCAMA","CAMARÃO","ELEFANTE","FOCA-ELEFANTE","ZORRILHO","ABETARDA","URUMUTUM","ALBATROZ","PANGOLIM","ANÊMONA","PAPAGAIO","PAPA-CAPIM","ALCATEIA","FALCÃO","CORDEIRO","PEIXE-CORDA"],
          ["SERPENTE","AVESTRUZ","CHAMARIZ", "LEÃO-MARINHO", "MARIMBONDO", "CAVALO-MARINHO", "LOBO-MARINHO","LINGUADO","QUEIXADA","CAPIVARA","PAPA-CAPIM","LEOPARDO","PELICANO","BABUÍNO","LOMBRIGA","MARITACA","CASCAVEL","CARRAPATO","MANGUSTO","PORAQUÊ","CARNEIRO","NÁUTILO","RATAZANA","TANGARÁ","SURUCUCU"],
          ["JOANINHA","SURICATO","GUEPARDO","GUAXINIM","GOLFINHO","TANAJURA","TAMBAQUI","CANÁRIO","SARDINHA","JAÇANÃ","JACARÉ","SAICANGA","MOSQUITO", "MOSQUITO-PREGO","SARACURA","ARIRANHA","JARARACA","JARARACUÇU","CALOPSITA","BARBATANA","CROCODILO","BEM-TE-VI","BORBOLETA","PEIXE-BORBOLETA"],
          ["ANTÍLOPE","ANDORINHA","BICHO-DA-SEDA","BICHO-FOLHA","BICHO-PREGUIÇA", "BICHO-PAU","CENTOPEIA","CHINCHILA","TAMANDUÁ","TAMANDUAÍ","GAFANHOTO","PERIQUITO","PERCEVEJO","NADADEIRA","NAJA","MEXILHÃO","TARTARUGA","LIBÉLULA","TUCUNARÉ","TICO-TICO","MATA-MATA","CURIMATÃ","MUSARANHO","VAGA-LUME","VACA","CAMUNDONGO","BEIJA-FLOR"],
          ["ÁGUA-VIVA","TARÂNTULA","PERNILONGO","SALAMANDRA","ESCORPIÃO-VINAGRE","ESCORPIÃO","CHIMPANZÉ","ESTORNINHO","TENTÁCULOS","HIPOPÓTAMO","GRALHA-AZUL","QUERO-QUERO","RINOCERONTE","SANGUESSUGA","JAGUATIRICA","BUGIO-PRETO","ORANGOTANGO","DROMEDÁRIO","MARLIN-AZUL","LOUVA-A-DEUS","ORNITORRINCO"],
          ["VIÚVA-NEGRA","PÁSSARO-LIRA","AGULHÃO-VELA","PEPINO-DO-MAR","ESTRELA-DO-MAR","DRAGÃO DO MAR","DRAGÃO-DE-KOMODO","ESPONJA-DO-MAR","JOÃO-DE-BARRO","DIABO-DA-TASMÂNIA","DIABO-ESPINHOSO","AVE-DO-PARAÍSO","MICO-LEÃO-DOURADO","MICO-LEÃO-PRETO","PORQUINHO-DA-ÍNDIA","PEIXE-AGULHA"]];
          
          
          
var pussy, bucetinhavirgem, guessme=200; /* 200ms = 5 chutes por segundo */
function md() {
    var e = null,
        t = 0;
    bucetinhavirgem = setInterval(() => { 
        (document.querySelector("#respostas > form > label > input").value = wo[t].toString().replace(/(\,)/gi, " ").toLowerCase()),
            document.querySelector("#respostas > form").requestSubmit(),
            null != document.querySelector(".perto") && /*/ caso ache uma palavra que esteja perto /*/
                (clearInterval(bucetinhavirgem), 
                (e = document
                    .querySelector(".perto")
                    .textContent.toLowerCase()
                    .replace(/( está perto!)/gi, "")), /*/ filtro apenas a coluna que deu perto /*/
                document.querySelector(".perto").remove(), /*/ removo o elemento /*/
                (lista = resp[wo.map(function (e) {return e[0];}).indexOf(e.split(" ")[0].toUpperCase())]), /*/ pega a primeira palavra do bloco que deu "perto"; faço a posição do bloco WO ser a mesma da RESP. /*/
                (function (e) {
                    var t = 0;
                    pussy = setInterval(() => {
                        console.log("y=" + t),
                            console.log("tamanho da lista " + e.length),
                            (document.querySelector("#respostas > form > label > input").value = e[t].toLowerCase()), 
                            document.querySelector("#respostas > form").requestSubmit(),
                            t > e.length - 2 && (console.log("lista terminada"), clearInterval(pussy)),
                            t++;
                    }, guessme);
                })(lista)),
            t++;
    }, guessme);
}
document.body.addEventListener("keydown", function (e) {
    16 === e.keyCode && (clearInterval(pussy), clearInterval(bucetinhavirgem), md()); /*/ 16 é shift. pressione este para ativar o script quando bem entender. /*/
});/*/ as linhas abaixo sao para automatizar. /*/
var momento = setInterval(() => { 
    "block" == document.querySelector("#denunciar").style.display && (md(), cron(), (document.querySelector("#denunciar").style.display = "none")); /*/ quando alguem clica em desenhar, o botao de denuncia aparece. quando aparecer, vai começar a chutar, removendo antes o botao de denuncia. há outros jeitos de fazer, mas esse era o mais simples que pensei. mutationObserver pode ser uma boa opção/*/
}, 1); /*/ abaixo, um cronometro. /*/
function cron() {
    var e = 0,
        t = setInterval(() => {
            null != document.querySelector("#usuarios > div.lista > div > div.user.proprio.acertou") && /*/ o cronometro inicia quando o botao de denunciar é removido. quando o 'user proprio' acertar, o cronometro irá parar. sabendo assim quanto tempo o script demorou para acertar /*/
                ((document.querySelector("#respostas > form > label > input").value = "Acerto! " +  e / 100 + "s"),
                 clearInterval(pussy),
                 clearInterval(bucetinhavirgem),
                 clearInterval(t), /*/ só este é útil /*/
                 console.log(e / 100 + " segundos")), /*/ espero que essa conta esteja certa... /*/
                e++;
        }, 1);
}



/* código para modo mobile; */
/* pressione shift para ativar; */
/* você pode mudar o delay no console. digite "guessme=100" para 100ms, ou algum outro valor. [50 mínimo, 200 máximo] saindo do limite desses valores, pode se tornar inútil. */
/*


var pussy,bucetinhavirgem,wo=[["RÃ","EMA","EMU","ASA","GNU","BOI","ASA","UÇÁ","ANU","PEIX"],["ZEBU","ADAX","AÇOR","KUDU","PIAU","ÓRIX","PERU","GATO","ATUM","PENA","FOCA","URSO","TATU","PUMA","LULA","RABO","LOBO","GALO","LEOA"],["SIRI","RATO","ALCE","PACU","JACU","CUCO","MULA","PACA","ASNO","PATA","BOTO","PATO","ORCA","RENA","NAJA","BICO","VACA","BODE","SAPO","CURI"],["OCAP","LESM","RATE","LEBR","QUIV","QUAT","SAGU","LARV","BAGR","LEÃO","BETT","MOSC","MORS","ONÇA","CALA","PAND","CABR","OSTR","CARP"],["MAMB","POTR","PULG","LHAM","LINC","POLV","POMB","PORC","CERV","SAIG","DODÔ","ARAR","VESP","TEIÚ","ZEBR","CRIN","TIGR","URUT","CORV","URUB"],["TRUT","GANS","TOUR","CRAC","GARR","ARAT","CISN","HIEN","COAL","CUTI","IAQU","ÉGUA","IRAR","COBR","GRIL","DING","ÍBIS","CUPI","CORA","CORU"],["CAST","COND","MORE","FENE","NARV","PAVÃ","MANA","ENGU","ENXA","ESCA","PARD","CAME","CAVA","MAMU","GORI","GUAR","GIRI","GIRA","CHIF","GINE"],["ABEL","IGUA","JERB","CIVE","JABU","JIBO","IMPA","CHUP","GIBÃ","GAZE","CASU","GAMB","MACU","COIO","FUIN","FURÃ","JAVA","MACA","CHAC","GAVI"],["COEL","GARÇ","MABE","LONT","OVEL","BELU","PÍTO","PÔNE","RAPO","SERV","ROBA","BADE","PIPI","BARA","PERD","BALE","PIOL","BAIA","SUCU","TAIN"],["ALPA","ABUT","XEXÉ","ÁGUI","ÁCAR","TUCA","AMEI","ARRA","TEXU","TRAÇ","ARAN","TROM","ATOB","BISÃ","CADE","CAIT","CARD","LAMB","CACA","LAGO"],["HAMS","LACR","LAGA","QUET","LEIT","FALC","FAIS","CORC","CARA","TUIU","AURO","AREN","FERR","REBA","JUME","SERI","JACA","OURI","TRAÍ","GARO"],["CANG","GUEL","GALI","BÚFA","PANT","FORM","COLI","FRAG","GAIV","JAMA","CIGA","SALM","AXOL","GLUT","MARR","MARM","WALL","NARC","GUAN","VOMB"],["DOUR","DONI","MORC","MOLU","BESO","ZANG","MINH","VICU","MAND","CODO","CEGO","ESQU","AZUL","ARMI","PIXA","LÊMU","PING","AIEA","BEZE","PINT"],["COTO","PIRA","CAÇÃ","ARAP","CACH","TOUP","TILÁ","FLAM","TUBA","CAMA","ELEF","ZORR","ABET","URUM","ALBA","PANG","ANÊM","PAPA","ALCA","CORD"],["SERP","AVES","CHAM","LING","QUEI","CAPI","LEOP","PELI","BABU","LOMB","MARI","CASC","CARR","MANG","PORAQ","CARN","NÁUT","RATA","TANG","SURU"],["JOAN","SURI","GUEP","GUAX","GOLF","TANA","TAMB","CANÁ","SARD","JAÇA","SAIC","MOSQ","SARA","ARIR","JARA","CALO","BARB","CROC","BEMT","BORB"],["ANTÍ","ANDO","BICH","CENT","CHIN","TAMA","GAFA","PERI","PERC","NADA","MEXI","TART","LIBÉ","TUCU","TICO","MATA","MUSA","VAGA","CAMU","BEIJ"],["ÁGUA","TARÂ","PERN","SALA","ESCO","CHIM","ESTO","TENT","HIPO","GRAL","QUER","RINO","SANG","JAGU","BUGI","ORAN","DROM","MARL","LOUV","ORNI"],["VIÚV","PÁSS","AGUL","PEPI","ESTR","DRAG","ESPO","JOÃO","DIAB","AVED","MICO","PORQ"]],resp=[["RÃ","EMA","EMU","ASA","GNU","BOI","ASA","UÇÁ","ANU","PEIXE","PEIXE","PEIXE-AGULHA","PEIXE-ANJO","PEIXE-BOI","PEIXE-BOLHA","PEIXE-BORBOLETA","PEIXE-BRUXA","PEIXE-CORDA","PEIXE-ESPADA","PEIXE-FOLHA","PEIXE-GALO","PEIXE-GATO","PEIXE-LANTERNA","PEIXE-LEÃO","PEIXE-LUA","PEIXE-MANDARIM","PEIXE-MORCEGO","PEIXE-PALHAÇO","PEIXE-PEDRA","PEIXE-REI","PEIXE-SERRA","PEIXE-SOL","PEIXE-TROMBETA","PEIXE-VOADOR","PEIXE-ZEBRA"],["ZEBU","ADAX","AÇOR","COBRA-CORAL","KUDU","PIAU","ÓRIX","PERU","GATO","ATUM","PENA","FOCA","URSO","TATU","PUMA","LULA","RABO","PATO","LOBO","GALO","LEOA","GATO-DO-MATO","LOBO-MARINHO","LOBO-GUARÁ","TATURANA","RENA","FOCA-ELEFANTE","URSO-PARDO","URSO-POLAR","MULA","RATO","PEIXE-GATO","PEIXE-GALO"],["SIRI","RATO","ALCE","PACU","JACU","CUCO","MULA","PACA","PAAP-CAPIM","ASNO","PATA","BOTO","PATO","ORCA","RENA","NAJA","BICO","VACA","BODE","SAPO","CURIÓ","RATO-TOUPEIRA-PELADO","CEGONHA-BICO-DE-SAPATO","CARRAPATO","GATO","RATO","MACUCO","SAPO-BOI","PENA","LULA","ONÇA","JACUTINGA"],["OCAPI","LESMA","RATEL","LEBRE","QUIVI","QUATI","SAGUI","LARVA","BAGRE","LEÃO","CAMALEÃO","FORMIGA-LEÃO","BETTA","MOSCA","MORSA","CALAU","COALA","PANDA","CABRA","CABRITO","OSTRA","CARPA","MICO-LEÃO-DOURADO","MICO-LEÃO-PRETO","LEÃO-MARINHO","PANDA-VERMELHO","CALANGO","OSTRA JAPONESA","PEIXE-LEÃO"],["MAMBA","POTRO","PULGA","LHAMA","LINCE","POLVO","POMBO","PORCO","CERVO","SAIGA","DODÔ","ARARA","VESPA","TEIÚ","ZEBRA","CRINA","TIGRE","URUTU","CORVO","URUBU","URUBU-REI","PEIXE-ZEBRA","VESPA-DO-MAR","TIGRE BRANCO","TIGRE DE BENGALA","JARARACA","JARARACUÇU","ARARA","ARARA-VERMELHA","ARARAJUBA","PORCO-DA-TERRA","PORCO-DO-MATO","PORCO-DO-MAR","PORCO-ESPINHO"],["TRUTA","GANSO","TOURO","CRACA","GARRA","CIGARRA","ARATU","BARATA","CISNE","HIENA","COALA","CUTIA","IAQUE","ÉGUA","IRARA","PIRARUCU","PIRANHA","COBRA","GRILO","DINGO","ÍBIS","CUPIM","CORAL","CORUJA","COBRA-CORAL","COBRA-CIPÓ","COBRA-CEGA","PIPIRA","PIOLHO-DE-COBRA"],["CASTOR","CONDOR","MOREIA","FENECO","NARVAL","PAVÃO","MANADA","ENGUIA","ENXAME","ESCAMA","ESCARAVELHO","PARDAL","LEOPARDO","GUEPARDO","URSO-PARDO","ARANHA-CAMELO","ARANHA-PAVÃO","CAMELO","CAVALO","CAVALO-MARINHO","MAMUTE","GORILA","GUARÁ","LOBO-GUARÁ","GIRINO","GIRAFA","CHIFRE","GINETA","GAZELA-GIRAFA","LOBO DA TASMÂNIA"],["ABELHA","IGUANA","JERBOA","CIVETA","JABUTI","JIBOIA","IMPALA","CHIMPANZÉ","CHUPIM","GIBÃO","GAZELA","GAZELA-GIRAFA","CASUAR","GAMBÁ","MACUCO","COIOTE","FUINHA","FURÃO","JAVALI","MACACO","MACACO-PREGO","MACACO-NARIGUDO","MACACO-ARANHA","CHACAL","GAVIAL","GAVIÃO"],["COELHO","COELHO ANGORÁ","GARÇA","MABECO","LONTRA","OVELHA","BELUGA","PÍTON","PÔNEI","RAPOSA","SERVAL","ROBALO","BADEJO","PIPIRA","BARATA","TUBARÃO","TUBARÃO-BRANCO","TUBARÃO-LIXA","TUBARÃO-BALEIA","TUBARÃO-ENFERMEIRO","TUBARÃO-MARTELO","PERDIZ","BALEIA","BALEIA-AZUL","PIOLHO","PIOLHO-DE-COBRA","BAIACU","SUCURI","TAINHA"],["ALPACA","ABUTRE","JABUTI","XEXÉU","ÁGUIA","ÁCARO","JACARÉ","TUCANO","AMEIVA","ARRAIA","TEXUGO","TRAÇA","TROMBA","ATOBÁ","BISÃO","CADELA","CAITITU","CARDEAL","CARDUME","LAMBARI","CACATUA","CAÇÃO","LAGOSTA","ARANHA","CARANGUEJO","CARANGUEJO-DOS-COQUEIROS","CARANGUEJO-VIOLINISTA","MACACO-ARANHA","ARANHA-CAMELO","ARANHA-CARANGUEJEIRA","ARANHA-DO-MAR","ARANHA-MARROM","ARANHA-PAVÃO","MUSARANHO","MACACO-ARANHA","TARÂNTULA"],["HAMSTER","LACRAIA","LAGARTO","LAGARTA","LAGARTIXA","QUETZAL","LEITÃO","FALCÃO","FAISÃO","CORCOVA","CARACOL","CARACAL","CARAMUJO","CARANGUEJO","CARANGUEJO-DOS-COQUEIROS","CARANGUEJO-VIOLINISTA","TUIUIÚ","AUROQUE","ARENQUE","FERRÃO","REBANHO","JUMENTO","SERIEMA","JACARÉ","JAÇANÃ","OURIÇO","OURIÇO-DO-MAR","TRAÍRA","GAROUPA"],["CANGURU","SAICANGA","GUELRAS","GALINHA","BÚFALO","PANTERA","FORMIGA","FORMIGA-LEÃO","FORMIGA-VERDE","COLIBRI","FRAGATA","GAIVOTA","JAMANTA","CIGARRA","SALMÃO","AXOLOTE","GLUTÃO","MARRECO","MARMOTA","WALLABY","NARCEJA","GUANACO","IGUANA","VOMBATE"],["DOURADO","DONINHA","MORCEGO","PEIXE-MORCEGO","MOLUSCO","BESOURO","BESOURO-GIRAFA","BESOURO-RINOCERONTE","BESOURO-DO-AMOR","ZANGÃO","MINHOCA","VICUNHA","TAMANDUÁ","MANDRIL","CODORNA","CEGONHA","CEGONHA-BICO-DE-SAPATO","ESQUILO","ESQUILO-VOADOR","AZULÃO","BALEIA-AZUL","MARLIN-AZUL","GRALHA-AZUL","ARMINHO","PIXARRO","LÊMURE","PINGUIM","AIE-AIE","BEZERRO","PINTADO"],["COTOVIA","PIRARUCU","PIRANHA","CAÇÃO","CACATUA","ARAPONGA","CACHALOTE","CACHORRO","CACHORRO-VINAGRE","TOUPEIRA","RATO-TOUPEIRA-PELADO","TILÁPIA","FLAMINGO","TUBARÃO","TUBARÃO-BRANCO","TUBARÃO-LIXA","TUBARÃO-BALEIA","TUBARÃO-ENFERMEIRO","TUBARÃO-MARTELO","CAMALEÃO","ESCAMA","CAMARÃO","ELEFANTE","FOCA-ELEFANTE","ZORRILHO","ABETARDA","URUMUTUM","ALBATROZ","PANGOLIM","ANÊMONA","PAPAGAIO","PAPA-CAPIM","ALCATEIA","FALCÃO","CORDEIRO","PEIXE-CORDA"],["SERPENTE","AVESTRUZ","CHAMARIZ","LEÃO-MARINHO","MARIMBONDO","CAVALO-MARINHO","LOBO-MARINHO","LINGUADO","QUEIXADA","CAPIVARA","PAPA-CAPIM","LEOPARDO","PELICANO","BABUÍNO","LOMBRIGA","MARITACA","CASCAVEL","CARRAPATO","MANGUSTO","PORAQUÊ","CARNEIRO","NÁUTILO","RATAZANA","TANGARÁ","SURUCUCU"],["JOANINHA","SURICATO","GUEPARDO","GUAXINIM","GOLFINHO","TANAJURA","TAMBAQUI","CANÁRIO","SARDINHA","JAÇANÃ","JACARÉ","SAICANGA","MOSQUITO","MOSQUITO-PREGO","SARACURA","ARIRANHA","JARARACA","JARARACUÇU","CALOPSITA","BARBATANA","CROCODILO","BEM-TE-VI","BORBOLETA","PEIXE-BORBOLETA"],["ANTÍLOPE","ANDORINHA","BICHO-DA-SEDA","BICHO-FOLHA","BICHO-PREGUIÇA","BICHO-PAU","CENTOPEIA","CHINCHILA","TAMANDUÁ","TAMANDUAÍ","GAFANHOTO","PERIQUITO","PERCEVEJO","NADADEIRA","NAJA","MEXILHÃO","TARTARUGA","LIBÉLULA","TUCUNARÉ","TICO-TICO","MATA-MATA","CURIMATÃ","MUSARANHO","VAGA-LUME","VACA","CAMUNDONGO","BEIJA-FLOR"],["ÁGUA-VIVA","TARÂNTULA","PERNILONGO","SALAMANDRA","ESCORPIÃO-VINAGRE","ESCORPIÃO","CHIMPANZÉ","ESTORNINHO","TENTÁCULOS","HIPOPÓTAMO","GRALHA-AZUL","QUERO-QUERO","RINOCERONTE","SANGUESSUGA","JAGUATIRICA","BUGIO-PRETO","ORANGOTANGO","DROMEDÁRIO","MARLIN-AZUL","LOUVA-A-DEUS","ORNITORRINCO"],["VIÚVA-NEGRA","PÁSSARO-LIRA","AGULHÃO-VELA","PEPINO-DO-MAR","ESTRELA-DO-MAR","DRAGÃO DO MAR","DRAGÃO-DE-KOMODO","ESPONJA-DO-MAR","JOÃO-DE-BARRO","DIABO-DA-TASMÂNIA","DIABO-ESPINHOSO","AVE-DO-PARAÍSO","MICO-LEÃO-DOURADO","MICO-LEÃO-PRETO","PORQUINHO-DA-ÍNDIA","PEIXE-AGULHA"]],guessme=200;function md(){var A=null,O=0;bucetinhavirgem=setInterval(()=>{document.querySelector("#campResp").value=wo[O].toString().replace(/(\,)/gi," ").toLowerCase(),document.querySelector("#formResposta").requestSubmit(),null!=document.querySelector(".perto")&&(clearInterval(bucetinhavirgem),A=document.querySelector(".perto").textContent.toLowerCase().replace(/( está perto!)/gi,""),document.querySelector(".perto").remove(),lista=resp[wo.map(function(A){return A[0]}).indexOf(A.split(" ")[0].toUpperCase())],function(A){var O=0;pussy=setInterval(()=>{console.log("y="+O),console.log("tamanho da lista "+A.length),document.querySelector("#campResp").value=A[O].toLowerCase(),document.querySelector("#formResposta").requestSubmit(),O>A.length-2&&(console.log("lista terminada"),clearInterval(pussy)),O++},guessme)}(lista)),O++},guessme)}document.body.addEventListener("keydown",function(A){16===A.keyCode&&(clearInterval(pussy),clearInterval(bucetinhavirgem),md())});


*/

/*

padder — Today at 12:30
Copie a linha 180 (arrasta o cursor do mouse da linha 181 até a 179) :9
Então, entre no https://m.gartic.net/, abre o devtools (f12) e coloca o navegador em modo mobile, recarrega a pagina e faz login.
Entre em animais, cola o codigo, aperta shift para ativar.
badge!

*/
//

