var persist = document.querySelector("#seguir");
  persist.addEventListener("keydown", e => {
	13 == e.keyCode && 0 !== persist.value.length &&
    (persist.disabled = !0,
    alert("Mantenha esta página em foco."),
    persist.placeholder = `Observando "${persist.value}"`,
    seguir(persist.value), persist.value = "")
});
