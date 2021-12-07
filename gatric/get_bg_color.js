// "color" de desenhos vet em animais.

let bgr;
var colour = 0,
	color = ["blue", "black", "cyan", "brown", "orange", "pink", "green", "yellow"],
	background = {
		blue: "0 0 255 255",
		black: "0 0 0 255",
		cyan: "0 255 255 255",
		brown: "140 69 0 255",
		orange: "255 127 0 255",
		pink: "255 0 147 255",
		green: "0 140 0 255",
		yellow: "255 255 0 255"
	};
setInterval(() => {
	var e = document.querySelector("canvas"),
		a = e.getContext("2d").getImageData(0, 0, e.width, e.height);
	red = a.data[0],
  green = a.data[1],
  blue = a.data[2],
  alpha = a.data[3],
  red + " " + green + " " + blue + " " + alpha == background[color[colour]] &&
  (bgr = Object.getOwnPropertyNames(background)[colour]), ++colour > color.length &&
  (colour = 0)
}, 100);
