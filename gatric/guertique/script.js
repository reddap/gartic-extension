
// update: auto-adaptado quando o tema for naruto e animais

"use strict";
var sala, sta, x = "remake by Padder",
    tool = document.querySelectorAll("#tema")[0],
    input = document.createElement("input");
input.classList.add("Cheat"), input.setAttribute("type", "checkbox"), tool.appendChild(input);
var label = document.createElement("label");
label.setAttribute("for", "Cheat"), label.innerHTML = "Cheat", label.style.color = "rgb(255, 255, 255)", label.style.fontSize = "1rem", label.style.fontWeight = "bold", tool.appendChild(label);
for (var i = 0; 6 > i;) null != document.getElementById("tema").getElementsByClassName("cor")[0] && document.getElementById("tema").getElementsByClassName("cor")[0].remove(), i++;
const checkbox = document.getElementsByClassName("Cheat")[0];
sala = document.querySelector("title").textContent.toLowerCase(), checkbox.addEventListener("change", A => {
        sta = !!A.currentTarget.checked
    }),
    function(A) {
        sala.includes("naruto") && (A._words = ["ao", "han", "sai", "dan", "rin", "fuu", "gobi", "pain", "nibi", "tobi", "enma", "sora", "shee", "haku", "fuen", "udon", "shin", "hebi", "omoi", "ukon", "anko", "anbu", "baki", "karui", "moegi", "amaru", "fuuka", "bijuu", "inari", "shion", "ayame", "shima", "kunai", "guren", "sanbi", "samui", "sakon", "gatou", "katon", "juugo", "zetsu", "juubi", "enton", "darui", "manda", "karin", "iruka", "ramen", "hidan", "oboro", "doton", "ebisu", "yonbi", "konan", "reibi", "hiruko", "hotaru", "raiton", "pakkun", "jiraya", "ranton", "hokage", "jinton", "rokubi", "roushi", "hanzou", "kaiten", "kouton", "chakra", "meiton", "tonton", "tenten", "mifune", "konoha", "mateki", "youton", "yamato", "karura", "yagura", "yahiko", "temari", "fuuton", "ichibi", "tazuna", "futton", "nagato", "senbon", "kakuzu", "tayuya", "suiton", "karasu", "kyuubi", "mokuton", "jouhyou", "katsuyu", "matsuri", "gamaken", "hyouton", "kuroari", "susanoo", "deidara", "shouton", "chiriku", "chidori", "bakuton", "bandana", "utakata", "tsunade", "shizune", "hachibi", "raikage", "otokage", "okisuke", "raikiri", "akamaru", "shigure", "furiido", "shibuki", "gakidou", "kokinjou", "kazekage", "genjutsu", "kankurou", "chojurou", "byakugan", "akatsuki", "doujutsu", "fukasaku", "jiroubou", "gatsuuga", "gamahiro", "kinjutsu", "yukimaru", "ninjaken", "yondaime", "ninjutsu", "todoroki", "rasengan", "mizukage", "shichibi", "samehada", "rock lee", "kusanagi", "nunchaku", "shuriken", "zambatou", "taijutsu", "kuromaru", "rinnegan", "senjutsu", "gamatatsu", "bashousen", "sharingan", "clã nara", "hoshikage", "tsukuyomi", "amaterasu", "gamabunta", "sanshouou", "mangekyou", "kidoumaru", "gamakichi", "makibishi", "maito gai", "akatsuchi", "kikaichuu", "orochimaru", "kin tsuchi", "hyourougan", "nii yugito", "pergaminho", "zaku abumi", "kemuridama", "benihisago", "tsuchikage", "killer bee", "clã senju", "kongou nyoi", "clã uchiha", "dosu kinuta", "kibaku fuda", "clã kurama", "gedou mazou", "yugao uzuki", "yoroi akado", "neji hyuuga", "clã hatake", "clã hyuuga", "jinchuuriki", "shikaku nara", "hana inuzuka", "shichiseiken", "fuu yamanaka", "clã inuzuka", "izuna uchiha", "clã aburame", "dai shuriken", "mizuki touji", "yoshino nara", "kohaku johei", "kibaku nendo", "kiba inuzuka", "nawaki senju", "ino yamanaka", "obito uchiha", "ibiki morino", "clã uzumaki", "shibi aburame", "clã yamanaka", "clã sarutobi", "yakumo kurama", "shisui uchiha", "shino aburame", "clã akimichi", "tsume inuzuka", "fugaku uchiha", "sakura haruno", "hanabi hyuuga", "hiashi hyuuga", "rasenshuriken", "hayate gekkou", "hinata hyuuga", "hira shuriken", "mikoto uchiha", "madara uchiha", "itachi uchiha", "kekkei genkai", "raijin no ken", "sakumo hatake", "kurenai yuuhi", "sasuke uchiha", "fuuma shuriken", "naruto uzumaki", "izumo kamizuki", "kabuto yakushi", "nidaime hokage", "chiyo baa sama", "kotetsu hagane", "kakashi hatake", "misumi tsurugi", "baika no jutsu", "chibaku tensei", "torune aburame", "asuma sarutobi", "aoba yamashiro", "shikamaru nara", "genma shiranui", "rikudou sennin", "zabuza momochi", "danzou shimura", "hizashi hyuuga", "espada kusanagi", "shukaku no tate", "mangetsu hozuki", "shodaime hokage", "minato namikaze", "kushina uzumaki", "chouza akimichi", "chouji akimichi", "shikuro aburame", "sabaku no gaara", "suigetsu hozuki", "kimimaro kaguya", "kisame hoshigaki", "nidaime mizukage", "hiruzen sarutobi", "inoichi yamanaka", "jashin no houkou", "ryuuga garian tou", "akasuna no sasori", "sandaime kazekage", "shukaku no houkou", "kawarimi no jutsu", "kage mane no jutsu", "totsuka no tsurugi", "konohamaru sarutobi", "kage bunshin no jutsu", "fujaku hishou shouken"]), sala.includes("animais") && (A._words = ["RÃ", "UÇÁ", "ANU", "ASA", "EMA", "BOI", "EMU", "GNU", "ZEBU", "ADAX", "AÇOR", "KUDU", "PIAU", "ÓRIX", "PERU", "GATO", "ATUM", "PENA", "FOCA", "URSO", "TATU", "PUMA", "LULA", "RABO", "LOBO", "GALO", "LEOA", "SIRI", "RATO", "ALCE", "PACU", "JACU", "CUCO", "MULA", "PACA", "ASNO", "PATA", "BOTO", "PATO", "ORCA", "RENA", "NAJA", "BICO", "VACA", "BODE", "SAPO", "CURIÓ", "OCAPI", "LESMA", "RATEL", "LEBRE", "QUIVI", "QUATI", "SAGUI", "LARVA", "PEIXE", "BAGRE", "LEÃO", "BETTA", "MOSCA", "MORSA", "ONÇA", "CALAU", "PANDA", "CABRA", "OSTRA", "CARPA", "MAMBA", "POTRO", "PULGA", "LHAMA", "LINCE", "POLVO", "POMBO", "PORCO", "CERVO", "SAIGA", "DODÔ", "ARARA", "VESPA", "TEIÚ", "ZEBRA", "CRINA", "TIGRE", "URUTU", "CORVO", "URUBU", "TRUTA", "GANSO", "TOURO", "CRACA", "GARRA", "ARATU", "CISNE", "HIENA", "COALA", "CUTIA", "IAQUE", "ÉGUA", "IRARA", "COBRA", "GRILO", "DINGO", "ÍBIS", "CUPIM", "CORAIS", "CORUJA", "CASTOR", "CONDOR", "MOREIA", "FENECO", "NARVAL", "PAVÃO", "MANADA", "ENGUIA", "ENXAME", "ESCAMA", "PARDAL", "CAMELO", "CAVALO", "MAMUTE", "GORILA", "GUARÁ", "GIRINO", "GIRAFA", "CHIFRE", "GINETA", "ABELHA", "IGUANA", "JERBOA", "CIVETA", "JABUTI", "JIBOIA", "IMPALA", "CHUPIM", "GIBÃO", "GAZELA", "CASUAR", "GAMBÁ", "MACUCO", "COIOTE", "FUINHA", "FURÃO", "JAVALI", "MACACO", "CHACAL", "GAVIAL", "COELHO", "GARÇA", "MABECO", "LONTRA", "OVELHA", "BELUGA", "PÍTON", "PÔNEI", "RAPOSA", "SERVAL", "ROBALO", "BADEJO", "PIPIRA", "BARATA", "PERDIZ", "BALEIA", "PIOLHO", "BAIACU", "SUCURI", "TAINHA", "ALPACA", "ABUTRE", "XEXÉU", "ÁGUIA", "ÁCARO", "TUCANO", "AMEIVA", "ARRAIA", "TEXUGO", "TRAÇA", "ARANHA", "TROMBA", "ATOBÁ", "BISÃO", "CADELA", "CAITITU", "CARDEAL", "LAMBARI", "CACATUA", "LAGOSTA", "HAMSTER", "LACRAIA", "LAGARTA", "LAGARTO", "QUETZAL", "LEITÃO", "FALCÃO", "FAISÃO", "CORCOVA", "CARACAL", "TUIUIÚ", "AUROQUE", "ARENQUE", "FERRÃO", "REBANHO", "JUMENTO", "SERIEMA", "JACARÉ", "OURIÇO", "TRAÍRA", "CABRITO", "GAROUPA", "CANGURU", "GUELRAS", "GALINHA", "BÚFALO", "PANTERA", "FORMIGA", "COLIBRI", "FRAGATA", "GAIVOTA", "JAMANTA", "CIGARRA", "SALMÃO", "AXOLOTE", "GLUTÃO", "MARRECO", "GAVIÃO", "MARMOTA", "WALLABY", "NARCEJA", "GUANACO", "VOMBATE", "CALANGO", "DOURADO", "DONINHA", "MORCEGO", "MOLUSCO", "BESOURO", "ZANGÃO", "MINHOCA", "VICUNHA", "MANDRIL", "CODORNA", "CEGONHA", "CORVINA", "ESQUILO", "AZULÃO", "ARMINHO", "CARACOL", "PIXARRO", "LÊMURE", "PINGUIM", "AIE-AIE", "BEZERRO", "PINTADO", "CARDUME", "COTOVIA", "PIRANHA", "CAÇÃO", "ARAPONGA", "CACHORRO", "TOUPEIRA", "TILÁPIA", "FLAMINGO", "TUBARÃO", "CAMARÃO", "ELEFANTE", "ZORRILHO", "ABETARDA", "URUMUTUM", "ALBATROZ", "PANGOLIM", "ANÊMONA", "PAPAGAIO", "ALCATEIA", "CORDEIRO", "SERPENTE", "CARAMUJO", "AVESTRUZ", "CHAMARIZ", "LINGUADO", "TATURANA", "QUEIXADA", "CAPIVARA", "LEOPARDO", "PELICANO", "BABUÍNO", "LOMBRIGA", "MARITACA", "CASCAVEL", "CARRIÇA", "MARIPOSA", "MANGUSTO", "PORAQUÊ", "PIRARUCU", "CARNEIRO", "NÁUTILO", "RATAZANA", "TANGARÁ", "SURUCUCU", "JOANINHA", "SURICATO", "GUEPARDO", "GUAXINIM", "GOLFINHO", "TANAJURA", "TAMBAQUI", "CANÁRIO", "SARDINHA", "JAÇANÃ", "SAICANGA", "MOSQUITO", "SARACURA", "ARIRANHA", "SAPO-BOI", "JARARACA", "CALOPSITA", "BARBATANA", "CURIMATÃ", "CROCODILO", "BEM-TE-VI", "BORBOLETA", "CARRAPATO", "ANTÍLOPE", "ARARAJUBA", "CACHALOTE", "ANDORINHA", "CAMALEÃO", "BICHO-PAU", "CENTOPEIA", "CHINCHILA", "LAGARTIXA", "TAMANDUÁ", "GAFANHOTO", "PERIQUITO", "PEIXE-BOI", "PERCEVEJO", "PEIXE-SOL", "JACUTINGA", "PEIXE-LUA", "PEIXE-REI", "NADADEIRA", "URUBU-REI", "MEXILHÃO", "TARTARUGA", "LIBÉLULA", "TUCUNARÉ", "TICO-TICO", "MATA-MATA", "MUSARANHO", "VAGA-LUME", "PAPA-CAPIM", "CAMUNDONGO", "CARANGUEJO", "BEIJA-FLOR", "PEIXE-ANJO", "URSO-PARDO", "URSO-POLAR", "ÁGUA-VIVA", "TARÂNTULA", "TAMANDUAÍ", "PEIXE-GATO", "MARIMBONDO", "PERNILONGO", "SALAMANDRA", "PEIXE-GALO", "ESCORPIÃO", "CHIMPANZÉ", "ESTORNINHO", "COBRA-CEGA", "BICHO-FOLHA", "PEIXE-CORDA", "PEIXE-FOLHA", "PEIXE-ZEBRA", "PEIXE-BRUXA", "PEIXE-BOLHA", "TENTÁCULOS", "HIPOPÓTAMO", "GRALHA-AZUL", "QUERO-QUERO", "PEIXE-SERRA", "PEIXE-PEDRA", "RINOCERONTE", "COBRA-CORAL", "SANGUESSUGA", "COBRA-CIPÓ", "JAGUATIRICA", "BUGIO-PRETO", "PEIXE-LEÃO", "BALEIA-AZUL", "ORANGOTANGO", "ESCARAVELHO", "DROMEDÁRIO", "JARARACUÇU", "LOBO-GUARÁ", "MARLIN-AZUL", "LOBO-MARINHO", "VESPA-DO-MAR", "GATO-DO-MATO", "LOUVA-A-DEUS", "TIGRE BRANCO", "MACACO-PREGO", "ORNITORRINCO", "PEIXE-AGULHA", "PEIXE-VOADOR", "PORCO-DO-MAR", "VIÚVA-NEGRA", "PEIXE-ESPADA", "PORCO-DO-MATO", "BICHO-DA-SEDA", "MACACO-ARANHA", "PÁSSARO-LIRA", "PORCO-ESPINHO", "GAZELA-GIRAFA", "FORMIGA-VERDE", "AGULHÃO VELA", "ARANHA-CAMELO", "ARANHA-DO-MAR", "ARANHA-MARROM", "PEPINO-DO-MAR", "TUBARÃO-LIXA", "ARANHA-PAVÃO", "FOCA-ELEFANTE", "PEIXE-MORCEGO", "FORMIGA-LEÃO", "LEÃO-MARINHO", "ESQUILO-VOADOR", "ESTRELA-DO-MAR", "DRAGÃO DO MAR", "ARARA-VERMELHA", "ESPONJA-DO-MAR", "BESOURO-GIRAFA", "PEIXE-PALHAÇO", "PANDA-VERMELHO", "PEIXE-LANTERNA", "PEIXE-MANDARIM", "OURIÇO-DO-MAR", "PORCO-DA-TERRA", "CAVALO-MARINHO", "MOSQUITO-PREGO", "JOÃO-DE-BARRO", "OSTRA JAPONESA", "COELHO ANGORÁ", "PEIXE-TROMBETA", "TUBARÃO-BRANCO", "BICHO-PREGUIÇA", "TUBARÃO-DUENDE", "MACACO-NARIGUDO", "DIABO-ESPINHOSO", "PIOLHO-DE-COBRA", "TUBARÃO-BALEIA", "PAPAGAIO-DO-MAR", "PEIXE-BORBOLETA", "BESOURO-DO-AMOR", "AVE-DO-PARAÍSO", "MICO-LEÃO-PRETO", "CACHORRO-VINAGRE", "TUBARÃO-MARTELO", "TIGRE DE BENGALA", "DRAGÃO-DE-KOMODO", "LOBO DA TASMÂNIA", "ESCORPIÃO-VINAGRE", "DIABO-DA-TASMÂNIA", "MICO-LEÃO-DOURADO", "LEOPARDO-DAS-NEVES", "BESOURO-RINOCERONTE", "PORQUINHO-DA-ÍNDIA", "TUBARÃO-ENFERMEIRO", "RATO-TOUPEIRA-PELADO", "ARANHA-CARANGUEJEIRA", "CARANGUEJO-VIOLINISTA", "CEGONHA-BICO-DE-SAPATO", "CARANGUEJO-DOS-COQUEIROS"])
    }(this),
    function(A, a) {
        A._$ = a.querySelector.bind(a), A._$$ = a.querySelectorAll.bind(a), console.log(`Guertique v0.6 by Whisky (${x})`)
    }(this, document),
    function(A, a, O, u, i) {
        function R() {
            this.value = "", h = null, k = null, k = h = o || i, L = 0, U = null, N = null
        }
        const e = O("#dica"),
            n = O("#respostas input"),
            E = new MutationObserver(function(A) {
                A.forEach(A => s().classList.contains("vez") ? void 0 : e.classList.contains("abrir") ? void(A.target != I() || 2 < t || (!N && (N = C(), o = h.filter(A => A.replace(/\s/g, "").length == N)), !U && (U = r(), o = o.filter(A => A.startsWith(U))), L = 0, k = o, t += 1)) : (R.call(n), o = null, void(t = 1)))
            });
        var t = 1,
            o = null;
        const I = O.bind(a, "#dica .contentSpan.pulsar"),
            s = O.bind(a, "#usuarios .user.proprio"),
            C = () => {
                const A = O("#dica h2").textContent.match(/\d+/);
                return A && A[0]
            },
            r = () => I().firstChild.textContent.trim().toLowerCase();
        var h = i,
            k = h,
            U = null,
            N = null,
            L = 0;
        n.addEventListener("keydown", function(A) {
            if (1 == sta && 16 == x.length && [9, 27].includes(A.keyCode)) switch (A.preventDefault(), A.keyCode) {
                case 9:
                    return this.value.length && function() {
                        var A = (k || o || h).filter(A => A.startsWith(this.value));
                        k = null, k = A, this.value = A[0] || this.value
                    }.call(this);
                case 27:
                    return R.call(this);
                default:
                    return 0
            }
        }), n.addEventListener("keyup", function(A) {
            if (1 == sta && 16 == x.length && [38, 40].includes(A.keyCode)) switch (A.preventDefault(), A.keyCode) {
                case 38:
                    return function() {
                        return L >= k.length - 1 ? void 0 : 1 > this.value.length ? (this.value = k[L] || this.value, void(L += 1)) : (L += 1, void(this.value = k[L] || this.value))
                    }.call(this);
                case 40:
                    return function() {
                        0 >= L || (L -= 1, this.value = k[L] || this.value)
                    }.call(this);
                default:
                    return 0
            }
        }), E.observe(e, {
            attributes: !0,
            childList: !0,
            subtree: !0
        })
    }(0, document, this._$, this._$$, this._words);
