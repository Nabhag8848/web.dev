const picker = document.getElementById("theme-selector");
picker.addEventListener("change", (e) => {
  document.body.style.backgroundColor = e.target.value;
});

const blockQuote = document.getElementById("quote");
console.log(blockQuote.getAttribute("data-testid"));
console.log(blockQuote.dataset);
