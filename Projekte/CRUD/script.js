let names = ['Manuel Kischel', 'Mareike Arnold', 'Mathias Döhring']
let pnumbers = ['01723804552', '01794831222', '017666124780']
let bdays = ['09.01.1989', '06.04.1998', '23.01.1989']
load();

function render() {
    let content = document.getElementById('content');
    content.innerHTML = '';
    content.innerHTML += `<h1>My Contacts</h1>`
    content.innerHTML += `
    <div>
      <input placeholder="Name" id="name">
      <input placeholder="Telefon" id="pnumber">
      <input placeholder="Birthday" id="bday">
     <button onclick="addID()">Hinzufügen</button>
    </div>    
    `

    for (let i = 0; i < names.length; i++) {
        const name = names[i];
        const pnumber = pnumbers[i];
        const bday = bdays[i];

        content.innerHTML += `
            <div class="contact">
                <b> Name: </b> ${name}<br>
                <b> Telefon: </b> ${pnumber}<br>
                <b> Birthday: </b> ${bday}<br>
                <button onclick="editID">Edit</button> <button onclick="deleteID(${i})">Delete</button>
        
        `
    }

}

function addID() {
    let name = document.getElementById('name');
    let pnumber = document.getElementById('pnumber');
    let bday = document.getElementById('bday');

    names.push(name.value);
    pnumbers.push(pnumber.value);
    bdays.push(bday.value);
    render();
    save();

}

function deleteID(i) {
    names.splice(i, 1);
    pnumbers.splice(i, 1);
    bdays.splice(i, 1);
    render();
    save();
}

function editID() {

}

function save() {
    let namesAsText = JSON.stringify(names);
    localStorage.setItem('names', namesAsText);
    let pnumbersAsText = JSON.stringify(pnumbers);
    localStorage.setItem('pnumbers', pnumbersAsText);
    let bdaysAsText = JSON.stringify(bdays);
    localStorage.setItem('bdays', bdaysAsText);
}
function load() {
    let namesAsText = localStorage.getItem('names');
    let pnumbersAsText = localStorage.getItem('pnumbers');
    let bdaysAsText = localStorage.getItem('bdays');

    if (namesAsText && pnumbersAsText && bdaysAsText) {
        names = JSON.parse(namesAsText);
        pnumbers = JSON.parse(pnumbersAsText);
        bdays = JSON.parse(bdaysAsText);
    }

}