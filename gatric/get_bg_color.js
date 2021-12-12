/*
"color" são os fundos de desenhos vet em animais.
aprendido aqui :)
https://www.w3schools.com/tags/canvas_getimagedata.asp

*precisa-se colocar outras coordenadas
*/

let bgr;
var colour = 0,
	color = ["blue", "black", "cyan", "brown", "orange", "pink", "green", "yellow", "red"],
	background = {
		blue: "0 0 255 255",
		black: "0 0 0 255",
		cyan: "0 255 255 255",
		brown: "140 69 0 255",
		orange: "255 127 0 255",
		pink: "255 0 147 255",
		green: "0 140 0 255",
		yellow: "255 255 0 255",
		red: "255 0 0 255"
	};
setInterval(() => {
	var canvas = document.querySelector("canvas"),
		a = canvas.getContext("2d").getImageData(0, 0, canvas.width, canvas.height);
	red = a.data[0],
  green = a.data[1],
  blue = a.data[2],
  alpha = a.data[3],
  red + " " + green + " " + blue + " " + alpha == background[color[colour]] &&
  (bgr = Object.getOwnPropertyNames(background)[colour]), ++colour > color.length &&
  (colour = 0)
}, 100);


/*

// contém apenas os mais comuns (iniciais), já que, como seria uma sala vet, poderia atrasar caso for 5+ chutes.
// nesta ordem

	blue: ["corais", "arraia", "enguia"],
	black: ["ovelha", "carneiro", "vaga-lume", "cordeiro", "rebanho"],
	cyan: ["gaivota", "andorinha", "albatroz"],
	brown: ["minhoca"],
	orange: ["tigre", "tigre de bengala"],
	pink: ["pantera"],
	green: ["quero-quero"],
	yellow: ["onça", "leopardo", "guepardo", "jaguatirica", "leopardo-das-neves"],
	red: ["camaleão"]

*/
