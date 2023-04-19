async function getSynonyms() {
    let query = document.getElementById('searchQuery').value;
    let url = `https://www.openthesaurus.de/synonyme/​search?q=${query}&format=applin/json`;
    let response = await fetch(url);
    let responseAsJson = await response.json();
    let synsets = responseAsJson['synsets'];
    renderSynsets(synsets);
}

function renderSynsets(synsets) {
    let container = document.getElementById('container');
    
    container.innerHTML = `<div> Er wurden <b>${synsets.length}</b> Synonym-Sets geladen`;

    for (let i = 0; i < synsets.length; i++) {
        const synset = synsets[i];
        let terms = synset [`term`];
        container.innerHTML += `<h2>Synonym-Set mit der ID ${synset['id']}</h2>`
        
        for (let j = 0; j < terms.length; j++) {
            const term = terms[j];
           container.innerHTML += `<div>${term['term']} `
            
        }
    }
}