let navItem = document.querySelectorAll(".second-header-choose");
let activNavItem = document.querySelector(".second-header-choose.active");

navItem.forEach(navitem =>{
    navitem.addEventListener("click", function (){
        navitem.classList.add('active');

        if (activNavItem != null){
            activNavItem.classList.remove('active');
        }
        activNavItem = navitem;

    });
});
const hMenu = document.querySelector('.mobile-menu');
const site = document.querySelector('.hidden-menu');
site.addEventListener('click', e=> {
    e.preventDefault();
    if (hMenu.classList.contains('show-menu')){
        hMenu.classList.remove('show-menu');
    }
    else{
        hMenu.classList.add('show-menu');
    }
});

const askWindow = document.querySelector('.ask');
let agressorDesktop = document.querySelectorAll('.openB')[0];
let agressorMobile = document.querySelectorAll('.openB')[1];
agressorDesktop.onclick = function () {
    askWindow.classList.toggle('open-window');
}
agressorMobile.onclick = function () {
    askWindow.classList.toggle('open-window');
}

let yesBtn = document.querySelector('.YesB');
let closedNumb = document.querySelectorAll('.closed')[0];
let closedNumbMobile = document.querySelectorAll('.closed')[1];
let noBtn = document.querySelector('.NoB');
let NumbAgr = agressorDesktop.textContent;
let numberClosed = closedNumb.textContent;
yesBtn.onclick = function() {
    if (NumbAgr > 0){
        NumbAgr = NumbAgr -1;
        numberClosed = +numberClosed + 1;
        askWindow.classList.toggle('open-window');
    }
    else {
        askWindow.classList.toggle('open-window');
    }
    agressorDesktop.innerHTML= NumbAgr;
    agressorMobile.innerHTML= NumbAgr;
    closedNumb.innerHTML= numberClosed;
    closedNumbMobile.innerHTML= numberClosed;
}
noBtn.onclick = function () {
    askWindow.classList.toggle('open-window');
};
/*
let pictures = [
    'img/0.png',
    'img/1.png',
    'img/2.png',
    'img/3.png',
    ];
let photoBlock = document.querySelector('.photos');
let key = Object.keys(pictures);
photoBlock.addEventListener('click', showIndex);
function showIndex (event) {
    let indexNot = event.target.dataset[key]
    console.log(indexNot)
};*/
const images = ['img1', 'img2','img3','img4',];
const photoOut = document.querySelector('.photos');
for (let key in images) {
    let img = document.createElement('img');
    img.setAttribute('data-key', key);
    img.src = 'img/' + key + '.png';
    photoOut.append(img);
}
photoOut.addEventListener('click', showIndex);
function showIndex(event){
    const key = event.target.dataset['key'];
    console.log(key);

    if (key === undefined) {
        return true;
    }

}
let graphElem = document.querySelector('.message');
graphElem.addEventListener('click', function (change) {
    change.target.getAttribute('data-after', change.target.dataset['key']);
});