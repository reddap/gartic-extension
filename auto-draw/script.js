// get mouse coords https://stackoverflow.com/a/41067865
// update: agora pega o nome dos eventos junto às coordenadas.
var c, mouseDown = !1,
	eventName = [],
	cordX = [],
	cordY = [];
window.addEventListener("mousedown", function(e) {
	mouseDown = !0, eventName.push(e.type), cordX.push(e.clientX), cordY.push(e.clientY)
}), window.addEventListener("mouseup", function(e) {
	mouseDown = !1, eventName.push(e.type), cordX.push(e.clientX), cordY.push(e.clientY)
}), window.addEventListener("mousemove", function(e) {
	mouseDown && (eventName.push(e.type), cordX.push(e.clientX), cordY.push(e.clientY))
}), c = {
	e: eventName,
	x: cordX,
	y: cordY
};





// fix em falta
async function d(cordinha) {
	var t = document.querySelector("canvas"),
		n = t.getBoundingClientRect();

	function eventos(e, x, y) {
		return new MouseEvent(e, {
			bubbles: !0,
			clientX: x * n.width / 1020 + n.x,
			clientY: y * n.height / 606 + n.y,
			button: 0
		})
	}
	t.dispatchEvent(eventos("mousedown", cordinha.x[0], cordinha.y[0]));
	for (var i = 0; i < cordinha.x.length;) t.dispatchEvent(eventos("mousemove", cordinha.x[i], cordinha.y[i])), i++, await new Promise(wait => setTimeout(wait, 50));
	t.dispatchEvent(eventos("mouseup", cordinha.x[cordinha.x.length - 1], cordinha.y[cordinha.y.length - 1]))
}


/*
♣ detecção de palavras must be diferente;
♣ me parece que o canvas nao é definido no início;
♣ lápis; linha; dots. ♀
♣ como brincar com um canvas contexto 2d em um fonógrafo ♀
*/

