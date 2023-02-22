/* include html  header/footer */

async function includeHTML() {
  let includeElements = document.querySelectorAll('[w3-include-html]');
  for (let i = 0; i < includeElements.length; i++) {
    const element = includeElements[i];
    file = element.getAttribute("w3-include-html"); // "includes/header.html"
    let resp = await fetch(file);
    if (resp.ok) {
      element.innerHTML = await resp.text();
    } else {
      element.innerHTML = 'Page not found';
    }
  }
}

/* onload*/

let list = ["./img/cookies-g8920332ec_1280.jpg", "./img/fig-gab98270d6_1280.jpg", "./img/pizza-ge5d0e3bbc_1280.jpg", "./img/salad-g73455433f_1280.jpg", "./img/vegetable-skewer-g2f8e83e55_1280.jpg"]
let hline = ["<h1>Cookies</h1>", "<h1>Snack</h1>", "<h1>Pizza</h1>", "<h1>Salat</h1>", "<h1>Veggi Spieße</h1>"]
let paragraph = ["American style cookis schnell und einfach selber machen", "lecker snack den man mit fast allem belegen kann", "leckere Pizza mit nur 234 zutaten", "erfrischender salat für die heisen tagen", "leckere Vegitarische spieße für grill oder pfanne"]

let index = random();

function onload() {
  document.getElementById('f-big-img').src = list[index];
  document.getElementById('f-big-hline').innerHTML = hline[index];
  document.getElementById('f-big-para').innerHTML = paragraph[index];

}





/* zufall */

function random() {
  let i = Math.floor(Math.random() * list.length);
  if (i < 0) return random();
  return i;
}


/* todo */

let todos = ['einkauf', 'wäsche', 'kochen', 'putzen'];

function showtodo() {
  document.getElementById('mylist').innerHTML = '';

  for (let i = 0; i < todos.length; i++) {
    document.getElementById('mylist').innerHTML += 
    `<li>${todos[i]} <button onclick="deletetodo(${i})">Löschen</button></li>`;
  }


}
/* in array hinzufügen*/
function addtodo() {
  let todo = document.getElementById('myinput').value;
  todos.push(todo);
  showtodo();
  document.getElementById('myinput').value = '';

}
/* aus array löschen*/
function deletetodo(position) {
  todos.splice(position, 1);
  showtodo();
}
