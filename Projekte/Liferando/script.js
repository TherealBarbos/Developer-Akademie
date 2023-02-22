let name = [ "Tonkasu Ramen", "Spicy Miso Ramen" , "Shio Ramen" ];
let price  = ["11,95","12.95","13.95"]
let priceChicken  = ["11,95","12.95","13.95"]
let priceBeef  = ["11,95","12.95","13.95"]
let priceShrimp  = ["11,95","12.95","13.95"]


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
    content.innerHTML =  '';

    

}

function addCard(name, price) {
    names.push(name);
    
}

function updateCard() {
    let sum = 0 ;
    for (let i = 0; i < price.length; i++) {
        sum += prices[i];
        
    }


}

function openMenu() {
    



}