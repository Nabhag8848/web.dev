const select = document.getElementById("select");
const root = document.documentElement;

select.addEventListener("change", (event) => {
  root.style.setProperty("--var-col", event.target.value);
});
