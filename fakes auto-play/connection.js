var owner = document.querySelector('.user.proprio').querySelector('span').textContent
var bots;
function createUsers() {
	var i = 0;
	for (bots = []; i < document.getElementsByClassName("user").length;)
    bots.push(document.getElementsByClassName("user")[i].querySelector("span").textContent),
    i++
}
createUsers();
