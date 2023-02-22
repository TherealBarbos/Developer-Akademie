let imgarray = [
    'img/fog-g104744833_1920.jpg',
    'img/mountains-g15701e663_1920.jpg',
    'img/autumn-gd34876f35_1920.jpg',
    'img/avenue-g40d5c7d04_1280.jpg',
    'img/avenue-g1483ee87b_1280.jpg',
    'img/bridge-g7d10f3592_1280.jpg',
    'img/dirt-road-g8eb23452c_1280.jpg',
    'img/forest-g03f25e933_1280.jpg',
    'img/forest-g5f3b20f75_1280.jpg',
    'img/forest-g890866b4d_1280.jpg',
    'img/forest-ga49640617_1280.jpg',
    'img/forest-gd04a0241c_1280.jpg',
    'img/forest-gf71aa5e30_1280.jpg',
    'img/hd-wallpaper-g00394461f_1280.jpg',
    'img/jungle-g7110e8026_1280.jpg',
    'img/lake-g3eca0708c_1280.jpg',
    'img/trees-g4926b9564_1280.jpg',
    'img/sunbeams-g1f75b563a_1280.jpg',
    'img/trees-g204425b9d_1280.jpg',
    'img/trees-ga8c813cfc_1280.jpg'];


function render() {
    let content = document.getElementById("content");

    content.innerHTML = "";
    content.innerHTML += `<h1 class="headline">Fotogalarie von Manuel</h1>
    <div id="images"class="imgcontainer"></div>;`;

    loadImg();
}

function loadImg() {
    let imgcontainer = document.getElementById("images");
    imgcontainer.innerHTML = "";

    for (let i = 0; i < imgarray.length; i++) {
        imgcontainer.innerHTML += `
        <div  >
            <img src="${imgarray[i]}" alt="" onclick="popupImg(${i})" class="imgbox">
        </div>`;

    }
}


function popupImg(i) {

    let currentImage = imgarray[i]

    document.getElementById('content').classList.add('d-none');
    document.getElementById('overlay').classList.remove('d-none');
    document.getElementById('overlay').innerHTML = popOverlay(currentImage, i);

}

function popOverlay(currentImage, i) {
    return /*html*/ `
    <div class="overlay">
            <img id="overlayimg" src="${currentImage}">
        <div class="buttons">
            <img onclick="prevImg(${i})" src="img/arrow-92-32.png">
            <img onclick="closeOverlay()" src="img/x-mark-4-32.png">
            <img onclick="nextImg(${i})" src="img/arrow-28-32.png">
        </div>
    </div>
    `;
}

function closeOverlay() {
    document.getElementById('content').classList.remove('d-none');

    document.getElementById('overlay').classList.add('d-none');
}

function nextImg(i) {

    if (i >= imgarray.length - 1) {
        closeOverlay();
    } else {
        i++
        popupImg(i);
    }
}

function prevImg(i) {
    if (i < 1) {
        closeOverlay();
    } else {
        i--;
        popupImg(i);
    }
}