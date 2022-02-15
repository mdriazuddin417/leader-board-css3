document.getElementById("top-players").style.color = "rgba(173, 49, 245, 0.78)";
document.getElementById("top-blogs").style.color = "rgba(173, 49, 245, 0.78)";
const players = document.getElementsByClassName("player");
for (const player of players) {
  player.style.backgroundColor = "rgba(40, 86, 240, 0.87)";
  player.style.color = "white";
  player.style.borderRadius = "10px";
  player.style.margin = "10px";
  player.style.padding = "10px";
}

document.getElementById("add-btn").addEventListener("click", function (event) {
  debugger;
  const ul = document.getElementById("fruits");
  const li = document.createElement("li");
  li.classList.add("fruit");
  li.innerText = "New item";
  ul.appendChild(li);
  const count = document.getElementById("input-count");
  let number = parseInt(count.value);
  number = number + 1;
  if (number == 5) {
    button = document.getElementById("add-btn");
    button.setAttribute("disabled", true);
  }
  count.value = number;
});
