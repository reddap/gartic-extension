// get mouse coords while is mousedown https://stackoverflow.com/a/41067865
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




// update: adaptado à nova ordem de coordenadas
// 1020 e 606 é o tamanho da tela de desenho
function eventos(e, x, y) {
	return new MouseEvent(e, {
		bubbles: !0,
		clientX: x * t.width / 1020 + t.x,
		clientY: y * t.height / 606 + t.y,
		button: 0
	})
}
for (var canvas = document.querySelector("canvas"),
     t = canvas.getBoundingClientRect(),
     i = 0; i < c.e.length;)
	canvas.dispatchEvent(eventos(c.e[i],
	c.x[i], c.y[i])), i++;



/*
♣ detecção de palavras must be diferente;
♣ me parece que o canvas nao é definido no início;
♣ lápis; linha; dots. ♀
♣ como brincar com um canvas contexto 2d em um fonógrafo ♀
*/

