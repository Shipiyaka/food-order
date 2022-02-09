var color = ["red", "blue", "yellow", "green"];
document.addEventListener("DOMContentLoaded", function (event) {
  start();
});
function start() {
  document.getElementById("categorie--card").style.backgroundColor =
    color[Math.floor(Math.random() * color.length)];
}
