"use strict";
async function ping() {
	let t = Date.now();
	await fetch("https://gartic.com.br/");
	return `${Date.now()-t}ms`
}
setInterval(() => {
	
	document.querySelector("#tema > input.boxvets").disabled = true;
	
	ping().then(t => {
		1 == document.location.href.startsWith("https://gartic.com.br/0") &&
      (document.querySelectorAll("input")[8].attributes[0].textContent = t;
  })
	})
}, 3e3);

