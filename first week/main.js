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

let closedNumbDesktop = document.querySelectorAll('.closed')[0];//374
let closedNumbMobile = document.querySelectorAll('.closed')[1];//374

let openTaskDesktop = document.querySelectorAll('.openB')[0];//72
let openTaskMobile = document.querySelectorAll('.openB')[1];//72

closedNumbDesktop.onclick = function () {
    askWindow.classList.toggle('open-window');
}
closedNumbMobile.onclick = function () {
    askWindow.classList.toggle('open-window');
}



let yesBtn = document.querySelector('.YesB');
let noBtn = document.querySelector('.NoB');

let numberOpen = openTaskDesktop.textContent;
let numberClosed = closedNumbDesktop.textContent;

yesBtn.onclick = function() {
    if (numberOpen > 0){
        numberOpen = numberOpen -1;
        numberClosed = +numberClosed + 1;
        askWindow.classList.toggle('open-window');
    }
    else {
        askWindow.classList.toggle('open-window');
    }
    openTaskDesktop.innerHTML= numberOpen;
    openTaskMobile.innerHTML= numberOpen;
    closedNumbDesktop.innerHTML= numberClosed;
    closedNumbMobile.innerHTML= numberClosed;
}
noBtn.onclick = function () {
    askWindow.classList.toggle('open-window');
};

const images = ['img1', 'img2','img3','img4',];
const photoOut = document.querySelector('.photos');
for (let key in images) {
    let img = document.createElement('img');
    img.setAttribute('data-key', key);
    img.src = 'img/' + key + '.png';
    photoOut.append(img);
}
photoOut.addEventListener('click', showIndex);
let counterIndex = document.querySelectorAll('.counter')[0];
let counterIndexMobile = document.querySelectorAll('.counter')[1];


function showIndex(event){
    const key = event.target.dataset['key'];
    console.log(key);
    counterIndex.innerHTML = key;
    counterIndexMobile.innerHTML = key;

    if (key === undefined) {
        return true;
    }

}
