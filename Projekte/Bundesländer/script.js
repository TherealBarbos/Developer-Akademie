let bundeslaender = [
    {
        "name": "Baden-Württemberg",
        "population": 11.1,
        "url": "https://www.baden-wuerttemberg.de/de/startseite/",
        "img": "img/Baden-Württemberg.svg.png",
        "comments": ['Schönstes Land im ganzen Land']
    },
    {
        "name": "Bayern",
        "population": 13.1,
        "url": "https://www.bayern.de/",
        "img": "img/Bavaria.svg.png",
        "comments": ['Tolles Wetter und gute Wander-Routen', 'München ist eine schöne Stadt']
    },
    {
        "name": "Berlin",
        "population": 3.7,
        "url": "https://www.berlin.de/",
        "img": "img/Berlin.svg.png",
        "comments": []
    },
    {
        "name": "Brandenburg",
        "population": 2.5,
        "url": "https://www.brandenburg.de/",
        "img": "img/DEU_Brandenburg_COA.svg.png",
        "comments": []
    },
    {
        "name": "Bremen",
        "population": 0.7,
        "url": "https://www.bremen.de/",
        "img": "img/1024px-Bremen_greater_coat_of_arms.svg.png",
        "comments": ['Die Stadtmusikanten haben mir schon immer gefallen!']
    },
    {
        "name": "Hamburg",
        "population": 1.8,
        "url": "https://www.hamburg.de/",
        "img": "img/800px-Wappen_der_Hamburgischen_Bürgerschaft.svg.png",
        "comments": ['Ein wirklich tolles Bundesland']
    },
    {
        "name": "Hessen",
        "population": 6.3,
        "url": "https://www.hessen.de/",
        "img": "img/800px-Coat_of_arms_of_Hesse.svg.png",
        "comments": []
    },
    {
        "name": "Mecklenburg-Vorpommern",
        "population": 1.6,
        "url": "https://www.mecklenburg-vorpommern.de/startseite/",
        "img": "img/Coat_of_arms_of_Mecklenburg-Western_Pomerania_(great).svg.png",
        "comments": []
    },
    {
        "name": "Niedersachsen",
        "population": 8,
        "url": "https://www.niedersachsen.de/startseite/",
        "img": "img/Wappen_von_Niedersachsen.svg.png",
        "comments": []
    },
    {
        "name": "Nordrhein-Westfalen",
        "population": 17.9,
        "url": "https://www.land.nrw/",
        "img": "img/Coat_of_arms_of_North_Rhine-Westfalia.svg.png",
        "comments": []
    },
    {
        "name": "Rheinland-Pfalz",
        "population": 4.1,
        "url": "https://www.rlp.de/de/startseite/",
        "img": "img/Coat_of_arms_of_Rhineland-Palatinate.svg.png",
        "comments": []
    },
    {
        "name": "Saarland",
        "population": 1,
        "url": "https://www.saarland.de/DE/home/home_node.html",
        "img": "img/800px-Wappen_des_Saarlands.svg.png",
        "comments": []
    },
    {
        "name": "Sachsen",
        "population": 4.1,
        "url": "https://www.sachsen.de/",
        "img": "img/Coat_of_arms_of_Saxony.svg.png",
        "comments": []
    },
    {
        "name": "Sachsen-Anhalt",
        "population": 2.2,
        "url": "https://www.sachsen-anhalt.de/startseite/",
        "img": "img/Wappen_Sachsen-Anhalt.svg.png",
        "comments": []
    },
    {
        "name": "Schleswig-Holstein",
        "population": 2.9,
        "url": "https://www.schleswig-holstein.de/DE/Home/home_node.html",
        "img": "img/DEU_Schleswig-Holstein_COA.svg.png",
        "comments": []
    },
    {
        "name": "Thüringen",
        "population": 2.1,
        "url": "https://thueringen.de/",
        "img": "img/Coat_of_arms_of_Thuringia.svg.png",
        "comments": []
    }
];

function render() {
    let content = document.getElementById('content');
    content.innerHTML = '';

    for (let i = 0; i < bundeslaender.length; i++) {
        const land = bundeslaender[i];
        content.innerHTML += `
            <div class="card">
                <div class="info">
                    <h2>${land['name']}</h2>
                    <p>Population:${land['population']} Millionen</p>
                     <a href=:"${land['url']}">Landes Homepage<img src="img/zoom-in-2-16.png"></a>
                    <p>Kommentare:</p>
                    <div id="landcontent${i}"></div>
                    <input id="input${i}"><button onclick="addComment(${i})">OK</button>
                </div>
                <div class="wappen">
                    <img src="${land['img']}"
                </div>


            </div>
             
        `;

        let landcontent = document.getElementById(`landcontent${i}`);

        for (let c = 0; c < land['comments'].length; c++) {
            const comment = land['comments'][c];
            landcontent.innerHTML += `<div>${comment}</div>`;
        }

    }

}


function addComment(com) {
    let input = document.getElementById(`input${com}`);
    bundeslaender[com]['comments'].push(input.value);
    render();
    input.value = '';
}