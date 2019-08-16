function dice() {
  var value1 = Math.floor(Math.random() * 6) + 1;
  document.querySelector("img.img1").setAttribute("src", "images/dice" + value1 + ".png");

  var value2 = Math.floor(Math.random() * 6) + 1;
  document.querySelector("img.img2").setAttribute("src", "images/dice" + value2 + ".png");

  if (value1 > value2) {
    document.querySelector("h1").textContent = "Player 1 wins!";
  } else if (value1 < value2) {
    document.querySelector("h1").textContent = "Player 2 wins!";
  } else {
    document.querySelector("h1").textContent = "Draw! O.o";
  }
}
