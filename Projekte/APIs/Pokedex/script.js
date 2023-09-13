let load = 25;
let currentLoad = 0;

async function init() {
  loadPokemon();
}
function loadMore() {
  load = load + 20;
  loadCartContent();
}

async function loadPokemon() {
  let url = `https://pokeapi.co/api/v2/pokemon/?limit=100000&offset=0`;
  let response = await fetch(url);
  let respondPokemon = await response.json();
  let allPokemon = respondPokemon["results"];
  globalThis.allPokemons = allPokemon;
  loadCartContent();
}

async function loadCartContent() {
  for (let i = currentLoad; i < load; i++) {
    currentLoad++;
    let thisPokemonUrl = allPokemons[i]["url"];
    let thisPokemon = await fetch(thisPokemonUrl);
    let currentPokemon = await thisPokemon.json();
    rendercard(currentPokemon);
   }
}
function rendercard(currentPokemon) {
  document.getElementById("pokemon").innerHTML += `
    <div class="card" id="card" onclick="popup(${currentPokemon})" >
      <div class="cHead">
         <h2 id="pokeName" class="pName">${currentPokemon["name"]}</h2>
         <h4 id="pokeNum">${"#" + currentPokemon["id"]}</h4>
       </div>
      <img id="pokeImg" src="${
        currentPokemon["sprites"]["other"]["official-artwork"]["front_default"]
      }" alt="IMG" />
      <div class="cType">
    </div> `;
}
// pokemoninfo/typen muss noch gefixed werden
// <div id="typesOne" class="type uppercase">${currentPokemon["types"][0]["type"]["name"]}</div>
// <div id="typesTwo" class="type uppercase">${currentPokemon["types"][1]["type"]["name"]}</div>
// <div>
// <span>Height: <b id="pokeHeight">${currentPokemon["height"]}</b></span>
// <span>Height: <b id="pokeWeight">${currentPokemon["weight"]}</b></span>
// </div>

function popup(currentPokemon) {

  let popupPokemon = currentPokemon[i]

  document.getElementById('pokemon').classList.add('d-none');
  document.getElementById('details').classList.remove('d-none');
  document.getElementById('details').innerHTML = renderinfo(popupPokemon, i);

}
function renderinfo() 
{
  document.getElementById("details").innerHTML += `
      <div>
        <div class="dHead">${popupPokemon["name"]}${popupPokemon["id"]} </div>
        <img src="${
          popupPokemon["sprites"]["other"]["official-artwork"]["front_default"]
        }" alt="" />
        <div class="dAbout">größe gewicht</div>
        <div class="dStats">
          HP 
          Attack 
          Defense 
          Special-Attack 
          Special-Defense 
          Speed
          <div id="pHP" class="progress-bar" role="progressbar" style="width: 25%;" aria-valuenow="25" aria-valuemin="0"
                    aria-valuemax="100">100</div>
        </div>
      </div>
    </div>
  `
  
}