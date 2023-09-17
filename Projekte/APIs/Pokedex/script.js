let load = 25;
let currentLoad = 0;
let allPokemons = [];
let currentPokemonIndex = -1;
let initLoaded = false;
async function init() {
  await loadPokemon();
}

function loadMore() {
  load += 20;
  loadCartContent();
}

async function loadPokemon() {
  if (initLoaded === false) {
    initLoaded = true;
    let url = `https://pokeapi.co/api/v2/pokemon/?limit=100000&offset=0`;
    let response = await fetch(url);
    let respondPokemon = await response.json();
    allPokemons = respondPokemon.results;
    loadCartContent();
  }
}

async function loadCartContent() {
  for (let i = currentLoad; i < load; i++) {
    if (i >= allPokemons.length) {
      return;
    }
    currentLoad++;
    let thisPokemonUrl = allPokemons[i].url;
    let thisPokemon = await fetch(thisPokemonUrl);
    let currentPokemon = await thisPokemon.json();
    rendercard(currentPokemon, i);
  }
}


function rendercard(currentPokemon, index) {
    console.log("Current", currentPokemon)
  let cardContainer = document.getElementById("pokemon");
  let card = document.createElement("div");
  card.className = "card";
  card.setAttribute("data-url", currentPokemon.url); // Um die URL des Pokémon zu speichern
  card.innerHTML = `
    <div class="cHead">
      <h2 class="pName">${currentPokemon.name}</h2>
      <h4>${"#" + currentPokemon.id}</h4>
    </div>
    <img src="${currentPokemon.sprites.other["official-artwork"].front_default}" alt="IMG" />
  `;
  card.addEventListener("click", function () {
    popup(currentPokemon, index);
  });
  cardContainer.appendChild(card);
}

function popup(currentPokemon, index) {
  let popupContainer = document.getElementById("details");
  popupContainer.innerHTML = renderinfo(currentPokemon);
  currentPokemonIndex = index;
  document.getElementById("pokemon").classList.add("d-none");
  popupContainer.classList.remove("d-none");
}

function closePopup() {
  document.getElementById("pokemon").classList.remove("d-none");
  document.getElementById("details").classList.add("d-none");
}

function navigateNext() {
  if (currentPokemonIndex < currentLoad - 1) {
    currentPokemonIndex++;
    let nextPokemonUrl = allPokemons[currentPokemonIndex].url;
    fetch(nextPokemonUrl)
      .then(response => response.json())
      .then(data => popup(data, currentPokemonIndex));
  }
}

function navigatePrevious() {
  if (currentPokemonIndex > 0) {
    currentPokemonIndex--;
    let previousPokemonUrl = allPokemons[currentPokemonIndex].url;
    fetch(previousPokemonUrl)
      .then(response => response.json())
      .then(data => popup(data, currentPokemonIndex));
  }
}

function renderinfo(currentPokemon) {
  const types = currentPokemon.types.map(type => type.type.name);
  const stats = currentPokemon.stats;

  return `
    <div>
      <div class="dHead">${currentPokemon.name}#${currentPokemon.id}</div>
      <img src="${currentPokemon.sprites.other["official-artwork"].front_default}" alt="" />
      <div class="dAbout">Größe: ${currentPokemon.height}, Gewicht: ${currentPokemon.weight}</div>
      <div class="dStats">
        HP: ${stats[0].base_stat} <progress value="${stats[0].base_stat}" max="255"></progress><br />
        Attack: ${stats[1].base_stat} <progress value="${stats[1].base_stat}" max="255"></progress><br />
        Defense: ${stats[2].base_stat} <progress value="${stats[2].base_stat}" max="255"></progress><br />
        Special Attack: ${stats[3].base_stat} <progress value="${stats[3].base_stat}" max="255"></progress><br />
        Special Defense: ${stats[4].base_stat} <progress value="${stats[4].base_stat}" max="255"></progress><br />
        Speed: ${stats[5].base_stat} <progress value="${stats[5].base_stat}" max="255"></progress><br />
      </div>
      <div class="dTypes">
        ${types.length === 1 ? `<div class="type uppercase">${types[0]}</div>` :
                              `<div class="type uppercase">${types[0]}</div>
                               <div class="type uppercase">${types[1]}</div>`}
      </div>
      <button onclick="navigatePrevious()">Previous</button>
      <button onclick="closePopup()">Close</button>
      <button onclick="navigateNext()">Next</button>
    </div>
  `;
}

// Initialisierung
init();