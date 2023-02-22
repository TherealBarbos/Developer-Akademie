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

async function init() {
    await includeHTML();
    onload();
    setActive();
    fun();

}


// Random Function 


let rimg = ["img/pizza-gcc70f62e6_640.jpg", "img/tortellinigratin.jpg", "img/shawarma-gb93f92be6_640.jpg", "img/koenigsberger-klopse.jpg", "img/spaghetti.jpg"];
let rname = ["Pizza Crudo e Rucula", "Tortellinigratin", "Shawarma", "Königsberger Klops", "Spaghetti Spinat Frischkäse"];
let link = ["recipe.html", "tortellinigratin.html", "shawarma.html", "königsbergerklops.html", "spaghetti.html"];


function shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}


let index = random();

function onload() {
    let selection = shuffle([0, 1, 2, 3, 4]);
    for (let i = 0; i < 3; i++) {
        let element = selection[i];
        document.getElementById('rnd-link' + i).href = link[element];
        document.getElementById('rnd-name' + i).innerHTML = rname[element];
        document.getElementById('rnd-img' + i).src = rimg[element];
        index = random();
    }
}

// zufallszahl mit doppelten 


function random() {
    let i = Math.floor(Math.random() * link.length);
    if (i < 0) {
        random();
    } else
        return i;

}

/*
//random ohne doppelten
let indexarray = [];

function randomindex() {
    let i = Math.floor(Math.random() * link.length);

    if (indexarray.includes(i)) {
        randomindex();
    } else {
        indexarray.push(i);
        console.log(indexarray);

        if (i > 0) {
            return i;
        } else {
            randomindex();
        }
    }
}
//random ohne doppelten fersuch 2

indices = [0, 1, 2, 3, 4];
randIndecis = [];

function setRendIndicis(num) {
    let = currentIndicis = indices;
    for (let i = 0; i < indices.length - num; i++) {
        let index = Math.floor(Math.random() * currentIndicis.length)
        currentIndicis.splice(index, 1);
    }
    randIndecis = currentIndicis;

}
*/


// Recipe Calc


let newAmount = []

function loadOnStart() {
    setInputValue();
    loadRecipe();
}

function loadRecipe() {
    loadTitle();
    loadInfos();
    loadTable();
}

function loadTitle() {
    document.getElementById('recipeName').innerHTML = recipe[4];
    document.getElementById('title').innerHTML = recipe[4];
}

function loadInfos() {
    document.getElementById('prepTime1').innerHTML = recipe[5];
    document.getElementById('prepTime2').innerHTML = recipe[5];
    document.getElementById('totalDuration').innerHTML += recipe[6];
    document.getElementById('difficulty').innerHTML = recipe[7];
    document.getElementById('release').innerHTML = recipe[8];
    document.getElementById('preparation').innerHTML = recipe[9];
    document.getElementById('authorName').innerHTML = recipe[10];
    document.getElementById('profilePic').src = recipe[11];
    document.getElementById('recipe-img').src = recipe[12];

}

function setInputValue() {
    document.getElementById('inputPortion').value = recipe[3];
}

function calcAmount() {
    //recipe[0]/portions*inputPortion.value
    newAmount.splice(0, newAmount.length);
    for (i = 0; i < recipe[2].length; i++) {
        if (recipe[0][i] == 0) {
            newAmount.push('');
        }
        else {
            newAmount.push(
                (recipe[0][i] / recipe[3]) *
                document.getElementById('inputPortion').value
            );
        }
    }
}

function loadTable() {
    calcAmount();
    if (document.getElementById('inputPortion').value < 1) {
        alert('Bitte mindestens eine Portion auswählen');
    } else {
        deleteTable();
        for (let i = 0; i < recipe[2].length; i++) {
            document.getElementById('recipeTable').innerHTML +=  /*html*/ `
    <tr>
        <td>${newAmount[i]}${recipe[1][i]}</td>
        <td>${recipe[2][i]}</td>
    </tr>`;
        }
    }
}

function deleteTable() {
    document.getElementById('recipeTable').innerHTML = '';
}


// Active Menu Bar


function setActive() {
    let activeLink = document.getElementById('navBar').getElementsByTagName('a');
    for (let i = 0; i < activeLink.length; i++) {
        if (document.location.href.indexOf(activeLink[i].href) >= 0) {
            activeLink[i].classList.add("active");
        }
    }
}


// Side Menu 

function showMenu() {
    navLinks.style.right = "0";
}

function hideMenu() {
    navLinks.style.right = "-200px";
}


// Dialog Test

function openDialog() {
    document.getElementById('dialog').classList.remove('d-none');
}

function closeDialog() {
    document.getElementById('dialog').classList.add('d-none');
}


// Console Fun

function fun() {
    const headlineCss = 'font-size: 30px; color: #008001; font-weight: 700; font-family: Raleway, sans-serif;'
    console.log("%cProject by Max, Manuel & Dennis", headlineCss)
    console.log("%cCopyright ©", 'font-size: 20px; color: #008001; font-weight: 700; font-family: Raleway, sans-serif;')
}




