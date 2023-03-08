let dishes = [
    { "name": "Tonkasu Ramen", "img":"/img/r1.png", "priceChicken": "11,95", "priceBeef": "12,95", "priceShrimp": "13,95" },
    { "name": "Spicy Miso Ramen","img":"/img/r2.png", "priceChicken": "11,95", "priceBeef": "12,95", "priceShrimp": "13,95" },
    { "name": "Shio Ramen","img":"/img/r3.png", "priceChicken": "11,95", "priceBeef": "12,95", "priceShrimp": "13,95" }

]

// let priceChicken  = ["11,95","12.95","13.95"]
// let priceBeef  = ["11,95","12.95","13.95"]
// let priceShrimp  = ["11,95","12.95","13.95"]


async function init() {
    await includeHTML();
    render();

}
// header & Footer einbinden
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


function render() {
    let content = document.getElementById('content');
    content.innerHTML = '';
    content.innerHTML = '';
    for (let i = 0; i < dishes.length; i++) {
        const dish = dishes[i];
        content.innerHTML += `
    <div class="meal">
                <img src="${dish['img']}" alt="Menu">
                <div class="orderTable">
                    <h2>${dish['name']}</h2>
                    <table style="width: 550px" class="bold">
                        <tbody>
                            <tr>
                                <th style="width:70%">Chicken</th>
                                <td style="width:20%">${dish['priceChicken']}</td>
                                <td style="width:10%"><img src="img/plus-6-24.png" alt="" onclick="addtoCard(${i})"
                                        class="addButton"></td>
                            </tr>

                            <tr>
                                <td>Beef</td>
                                <td>${dish['priceBeef']}</td>
                                <td><img src="img/plus-6-24.png" alt="" onclick="addtoCard(${i})" class="addButton"></td>
                            </tr>
                            <tr>
                                <td>Shrimp</td>
                                <td>${dish['priceShrimp']}</td>
                                <td><img src="img/plus-6-24.png" alt="" onclick="addtoCard(${i})" class="addButton"></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>`

    }

}

function addCard(name, price) {
    names.push(name);
    prices.push(price);

    updateCard()
}

function updateCard() {
    let sum = 0;
    for (let i = 0; i < price.length; i++) {
        sum += prices[i];

    }


}
