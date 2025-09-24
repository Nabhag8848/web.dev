const list = document.getElementById("avialable-list");
list.setAttribute("style", `list-style-type: none; color: orange;`);

list.addEventListener("change", (event) => {
  const changeList = document.getElementById("change-list");
  changeList.setAttribute("style", `list-style-type: ${event.target.value}`);
});
