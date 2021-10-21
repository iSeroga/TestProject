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
let closedNumb = document.querySelector('.closed');
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
}
noBtn.onclick = function () {
    askWindow.classList.toggle('open-window');
}
 
