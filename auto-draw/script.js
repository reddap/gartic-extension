// md
var c, mouseDown = !1,eventName = [],cordX = [],cordY = [];
window.addEventListener("mousedown", function(e) {mouseDown = !0, eventName.push(e.type), cordX.push(e.clientX), cordY.push(e.clientY)}),window.addEventListener("mouseup", function(e) {mouseDown = !1, eventName.push(e.type), cordX.push(e.clientX), cordY.push(e.clientY)}),window.addEventListener("mousemove", function(e) {mouseDown && (eventName.push(e.type), cordX.push(e.clientX), cordY.push(e.clientY))
}), c = {e:eventName,x:cordX,y:cordY};
function eventos(e, x, y) {
return new MouseEvent(e, {bubbles: !0,clientX: x * t.width / 1020 + t.x,clientY: y * t.height / 606 + t.y,button: 0})}
var canvas = document.querySelector("canvas"),t = canvas.getBoundingClientRect();
for (let i = 0; i < c.e.length; i++) setTimeout(function() {canvas.dispatchEvent(eventos(c.e[i], c.x[i], c.y[i]))}, 10 * i);
