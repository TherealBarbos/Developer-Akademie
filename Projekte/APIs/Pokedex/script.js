let load = 25;
let currentLoad = 0;
let allPokemons = [];
let currentPokemonIndex = -1;
let initLoaded = false;

const typeColors = {
  normal: '#A8A878',
  fire: '#F08030',
  water: '#6890F0',
  electric: '#F8D030',
  grass: '#78C850',
  ice: '#98D8D8',
  fighting: '#C03028',
  poison: '#A040A0',
  ground: '#E0C068',
  flying: '#A890F0',
  psychic: '#F85888',
  bug: '#A8B820',
  rock: '#B8A038',
  ghost: '#705898',
  steel: '#B8B8D0',
  dragon: '#7038F8',
  dark: '#705848',
  fairy: '#EE99AC',
};

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
  document.getElementById("buttons").classList.add("d-none");
   popupContainer.classList.remove("d-none");
}

function closePopup() {
  document.getElementById("pokemon").classList.remove("d-none");
  document.getElementById("buttons").classList.remove("d-none");
  document.getElementById("details").classList.add("d-none");
}

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth" // Für einen sanften Bildlauf (optional)
  });
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

  // Umrechnung der Größen- und Gewichtswerte
  const heightInMeters = currentPokemon.height / 10; // Umrechnung von dm in m
  const weightInKilograms = currentPokemon.weight / 10; // Umrechnung von hg in kg

  // Verwende nur den ersten Typ für den Hintergrund
  const firstType = types[0];
  const backgroundColor = typeColors[firstType] || '#FFF';

  return `
  <div class="controlls"> <img onclick="navigatePrevious()" src="img/arrow-92-32.png"></div>
  <div class="dCard" style="background-color: ${backgroundColor};"> <!-- Hier das style-Attribut hinzufügen -->
      <div class="dHead"><div class="uppercase">${currentPokemon.name}</div><div>#${currentPokemon.id}</div></div>
      <div class="dImage"><img src="${currentPokemon.sprites.other["official-artwork"].front_default}" alt="" /></div>
      <div class="dInfos">
         <div class="dAbout">Größe: ${heightInMeters} m, Gewicht: ${weightInKilograms} kg</div>
         <div class="dStats">
          <div class="dStat">HP: ${stats[0].base_stat} <progress value="${stats[0].base_stat}" max="255"></progress></div>
          <div class="dStat">Attack: ${stats[1].base_stat} <progress value="${stats[1].base_stat}" max="255"></progress></div>
          <div class="dStat">Defense: ${stats[2].base_stat} <progress value="${stats[2].base_stat}" max="255"></progress></div>
          <div class="dStat">Special Attack: ${stats[3].base_stat} <progress value="${stats[3].base_stat}" max="255"></progress></div>
          <div class="dStat">Special Defense: ${stats[4].base_stat} <progress value="${stats[4].base_stat}" max="255"></progress></div>
          <div class="dStat">Speed: ${stats[5].base_stat} <progress value="${stats[5].base_stat}" max="255">${stats[5].base_stat}</progress></div>
      </div>
      <div class="dTypes"">
        ${types.length === 1 ? `<div class="type uppercase">${types[0]}</div>` :
                              `<div class="type uppercase">${types[0]}</div>
                               <div class="type uppercase">${types[1]}</div>`}
      </div>
    </div>
  </div>
    
    <div class="controlls"> <img onclick="navigateNext()" src="img/arrow-28-32.png"></div>
    <div class="controlls"> <img onclick="closePopup()" src="img/x-mark-4-32.png"></div>
  `;
}



// Initialisierung
init();