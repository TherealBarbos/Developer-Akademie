let names = [""];
let notes = [""];
load();

function render() {
  let content = document.getElementById("content");

  content.innerHTML = "";
  content.innerHTML += `<h1 class="headline">Notizen</h1>`;
  content.innerHTML += rendercontent();

  schleife();
}

function schleife() {
  let contentnotes = document.getElementById("notes");
  for (let i = 0; i < names.length; i++) {
    const name = names[i];
    const note = notes[i];

    contentnotes.innerHTML += rendernotes(name, note, i);
  }
}

function rendercontent() {
  return /*html*/ `
    <div class="top">
        <div class="addnote">
        <p class="ptext"> neue notiz </p>
        <input placeholder="Name" id="name" class="nameinput" >
        <textarea placeholder="Mach dir eine Notiz" id="note" class="noteinput" wrap="soft" ></textarea>
        <button onclick="addnote()" class="addbtn">Hinzufügen</button>
        </div>
    </div> 
  
    <div id="notes" class="notes"> </div>  

    `;
}
function rendernotes(a, b, c) {
  return /*html*/ `
            
            <div class="note">
                <p class="pname"> Von: ${a} </p>  <br>             
                <p class="pnote"> ${b}<br>
                <div class="btnbar">
                <img src="img/delete-24.png" onclick="deletenote(${c})" class="delete">
                </div>
       
        `;
}

function addnote() {
  let name = document.getElementById("name");
  let note = document.getElementById("note");


  if (document.getElementById('name').value == '' || document.getElementById('note').value == '') {
    alert('Bitte die Felder ausfüllen ;-)');
    return;
  }
  names.push(name.value);
  notes.push(note.value);

  render();
  save();

}



function deletenote(i) {
  names.splice(i, 1);
  notes.splice(i, 1);

  render();
  save();
}

function save() {
  let namesAsText = JSON.stringify(names);
  localStorage.setItem("names", namesAsText);
  let notesAsText = JSON.stringify(notes);
  localStorage.setItem("notes", notesAsText);
}
function load() {
  let namesAsText = localStorage.getItem("names");
  let notesAsText = localStorage.getItem("notes");

  if (namesAsText && notesAsText) {
    names = JSON.parse(namesAsText);
    notes = JSON.parse(notesAsText);
  }
}
