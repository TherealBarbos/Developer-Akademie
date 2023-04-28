async function loadPokemon() {
    let url = 'https://pokeapi.co/api/v2/pokemon/bulbasaur';
    let response = await fetch(url);
    currentPokemon = await response.json();
    console.log ('loaded', currentPokemon);

    renderPokemon();

}

function renderPokemon() {
    document.getElementById('pokeName').innerHTML = currentPokemon['name'];
    document.getElementById('pokeNum').innerHTML = currentPokemon['order'];
    document.getElementById('pokeImg').src = currentPokemon['sprites']['front_default'];
    document.getElementById('pokeImgShiny').src = currentPokemon['sprites']['front_shiny'];
}