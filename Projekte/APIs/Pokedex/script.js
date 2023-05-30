function init(){
  
}




async function loadPokemon() {
  let url = "https://pokeapi.co/api/v2/pokemon/bulbasaur";
  let response = await fetch(url);
  currentPokemon = await response.json();
  console.log("loaded", currentPokemon);

  renderPokemon();
}

function renderPokemon() {
  document.getElementById("pokeName").innerHTML = currentPokemon["name"];
  document.getElementById("pokeNum").innerHTML = currentPokemon["order"];
  document.getElementById("pokeImg").src =
    currentPokemon["sprites"]["other"]["official-artwork"]["front_default"];
  document.getElementById("typesOne").innerHTML =
    currentPokemon["types"][0]["type"]["name"];
  document.getElementById("typesTwo").innerHTML =
    currentPokemon["types"][1]["type"]["name"];

    document.getElementById("pokeHeight").innerHTML = currentPokemon["height"];
    document.getElementById("pokeWeight").innerHTML = currentPokemon["weight"];
    
}
