
// adaptado para o tema "naruto", pode-se mudar o tema ao mudar o array.
// document.querySelector("title").textContent.toLowerCase().includes(sala);

"use strict";
var sta, x = "remake by Padder",
    tool = document.querySelectorAll("#tema")[0],
    input = document.createElement("input");
input.classList.add("Cheat"), input.setAttribute("type", "checkbox"), tool.appendChild(input);
var label = document.createElement("label");
label.setAttribute("for", "Cheat"), label.innerHTML = "Cheat", label.style.color = "rgb(255, 255, 255)", label.style.fontSize = "1rem", label.style.fontWeight = "bold", tool.appendChild(label);
for (var i = 0; 6 > i;) null != document.getElementById("tema").getElementsByClassName("cor")[0] && document.getElementById("tema").getElementsByClassName("cor")[0].remove(), i++;
const checkbox = document.getElementsByClassName("Cheat")[0];
checkbox.addEventListener("change", a => {
        sta = !!a.currentTarget.checked
    }),
    function(a) {
        a._words = ["ao", "han", "sai", "dan", "rin", "fuu", "gobi", "pain", "nibi", "tobi", "enma", "sora", "shee", "haku", "fuen", "udon", "shin", "hebi", "omoi", "ukon", "anko", "anbu", "baki", "karui", "moegi", "amaru", "fuuka", "bijuu", "inari", "shion", "ayame", "shima", "kunai", "guren", "sanbi", "samui", "sakon", "gatou", "katon", "juugo", "zetsu", "juubi", "enton", "darui", "manda", "karin", "iruka", "ramen", "hidan", "oboro", "doton", "ebisu", "yonbi", "konan", "reibi", "hiruko", "hotaru", "raiton", "pakkun", "jiraya", "ranton", "hokage", "jinton", "rokubi", "roushi", "hanzou", "kaiten", "kouton", "chakra", "meiton", "tonton", "tenten", "mifune", "konoha", "mateki", "youton", "yamato", "karura", "yagura", "yahiko", "temari", "fuuton", "ichibi", "tazuna", "futton", "nagato", "senbon", "kakuzu", "tayuya", "suiton", "karasu", "kyuubi", "mokuton", "jouhyou", "katsuyu", "matsuri", "gamaken", "hyouton", "kuroari", "susanoo", "deidara", "shouton", "chiriku", "chidori", "bakuton", "bandana", "utakata", "tsunade", "shizune", "hachibi", "raikage", "otokage", "okisuke", "raikiri", "akamaru", "shigure", "furiido", "shibuki", "gakidou", "kokinjou", "kazekage", "genjutsu", "kankurou", "chojurou", "byakugan", "akatsuki", "doujutsu", "fukasaku", "jiroubou", "gatsuuga", "gamahiro", "kinjutsu", "yukimaru", "ninjaken", "yondaime", "ninjutsu", "todoroki", "rasengan", "mizukage", "shichibi", "samehada", "rock lee", "kusanagi", "nunchaku", "shuriken", "zambatou", "taijutsu", "kuromaru", "rinnegan", "senjutsu", "gamatatsu", "bashousen", "sharingan", "clã nara", "hoshikage", "tsukuyomi", "amaterasu", "gamabunta", "sanshouou", "mangekyou", "kidoumaru", "gamakichi", "makibishi", "maito gai", "akatsuchi", "kikaichuu", "orochimaru", "kin tsuchi", "hyourougan", "nii yugito", "pergaminho", "zaku abumi", "kemuridama", "benihisago", "tsuchikage", "killer bee", "clã senju", "kongou nyoi", "clã uchiha", "dosu kinuta", "kibaku fuda", "clã kurama", "gedou mazou", "yugao uzuki", "yoroi akado", "neji hyuuga", "clã hatake", "clã hyuuga", "jinchuuriki", "shikaku nara", "hana inuzuka", "shichiseiken", "fuu yamanaka", "clã inuzuka", "izuna uchiha", "clã aburame", "dai shuriken", "mizuki touji", "yoshino nara", "kohaku johei", "kibaku nendo", "kiba inuzuka", "nawaki senju", "ino yamanaka", "obito uchiha", "ibiki morino", "clã uzumaki", "shibi aburame", "clã yamanaka", "clã sarutobi", "yakumo kurama", "shisui uchiha", "shino aburame", "clã akimichi", "tsume inuzuka", "fugaku uchiha", "sakura haruno", "hanabi hyuuga", "hiashi hyuuga", "rasenshuriken", "hayate gekkou", "hinata hyuuga", "hira shuriken", "mikoto uchiha", "madara uchiha", "itachi uchiha", "kekkei genkai", "raijin no ken", "sakumo hatake", "kurenai yuuhi", "sasuke uchiha", "fuuma shuriken", "naruto uzumaki", "izumo kamizuki", "kabuto yakushi", "nidaime hokage", "chiyo baa sama", "kotetsu hagane", "kakashi hatake", "misumi tsurugi", "baika no jutsu", "chibaku tensei", "torune aburame", "asuma sarutobi", "aoba yamashiro", "shikamaru nara", "genma shiranui", "rikudou sennin", "zabuza momochi", "danzou shimura", "hizashi hyuuga", "espada kusanagi", "shukaku no tate", "mangetsu hozuki", "shodaime hokage", "minato namikaze", "kushina uzumaki", "chouza akimichi", "chouji akimichi", "shikuro aburame", "sabaku no gaara", "suigetsu hozuki", "kimimaro kaguya", "kisame hoshigaki", "nidaime mizukage", "hiruzen sarutobi", "inoichi yamanaka", "jashin no houkou", "ryuuga garian tou", "akasuna no sasori", "sandaime kazekage", "shukaku no houkou", "kawarimi no jutsu", "kage mane no jutsu", "totsuka no tsurugi", "konohamaru sarutobi", "kage bunshin no jutsu", "fujaku hishou shouken"]
    }(this),
    function(a, u) {
        a._$ = u.querySelector.bind(u), a._$$ = u.querySelectorAll.bind(u), console.log(`Guertique v0.6 by Whisky (${x})`)
    }(this, document),
    function(a, u, i, e, n) {
        function t() {
            this.value = "", g = null, b = null, b = g = r || n, z = 0, y = null, f = null
        }
        const o = i("#dica"),
            s = i("#respostas input"),
            h = new MutationObserver(function(a) {
                a.forEach(a => c().classList.contains("vez") ? void 0 : o.classList.contains("abrir") ? void(a.target != l() || 2 < k || (!f && (f = m(), r = g.filter(a => a.replace(/\s/g, "").length == f)), !y && (y = d(), r = r.filter(a => a.startsWith(y))), z = 0, b = r, k += 1)) : (t.call(s), r = null, void(k = 1)))
            });
        var k = 1,
            r = null;
        const l = i.bind(u, "#dica .contentSpan.pulsar"),
            c = i.bind(u, "#usuarios .user.proprio"),
            m = () => {
                const a = i("#dica h2").textContent.match(/\d+/);
                return a && a[0]
            },
            d = () => l().firstChild.textContent.trim().toLowerCase();
        var g = n,
            b = g,
            y = null,
            f = null,
            z = 0;
        s.addEventListener("keydown", function(a) {
            if (1 == sta && 16 == x.length && [9, 27].includes(a.keyCode)) switch (a.preventDefault(), a.keyCode) {
                case 9:
                    return this.value.length && function() {
                        var a = (b || r || g).filter(a => a.startsWith(this.value));
                        b = null, b = a, this.value = a[0] || this.value
                    }.call(this);
                case 27:
                    return t.call(this);
                default:
                    return 0
            }
        }), s.addEventListener("keyup", function(a) {
            if (1 == sta && 16 == x.length && [38, 40].includes(a.keyCode)) switch (a.preventDefault(), a.keyCode) {
                case 38:
                    return function() {
                        return z >= b.length - 1 ? void 0 : 1 > this.value.length ? (this.value = b[z] || this.value, void(z += 1)) : (z += 1, void(this.value = b[z] || this.value))
                    }.call(this);
                case 40:
                    return function() {
                        0 >= z || (z -= 1, this.value = b[z] || this.value)
                    }.call(this);
                default:
                    return 0
            }
        }), h.observe(o, {
            attributes: !0,
            childList: !0,
            subtree: !0
        })
    }(0, document, this._$, this._$$, this._words);
