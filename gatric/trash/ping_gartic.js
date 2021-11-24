'use strict';
async function ping() {
  let start = Date.now();
  let promise = await fetch("https://gartic.com.br/");
  let rightValue = Date.now();
  return `${rightValue - start}ms`;
  ping().then(async(animate_param) => {
    console.log(animate_param);
  });
}
setInterval(() => {
  ping().then((b) => {
    if (document.location.href.includes("https://gartic.com.br/0") == true) {
      document.querySelectorAll("input")[8].attributes[0].textContent = b;
    }
  });
}, 3000);
