function insertd() {
    for (let o = 0; o < 100; o++) {
      document.getElementById(
        "boody"
      ).innerHTML += `<a href src="" class="field">${o + 1}</a>`;
    }
  }
  function roll1() {
    let r = Math.floor(Math.random() * 6);
    document.getElementById("dice1").innerHTML = `<img src="./img/${r+1}.png" alt="1" id="diceimg" />`;
  }
  function roll2() {
    let r = Math.floor(Math.random() * 6);
    document.getElementById("dice2").innerHTML = `<img src="./img/${r+1}.png" alt="1" id="diceimg" />`;
  }