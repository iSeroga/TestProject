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

const askW = document.querySelector('.ask');
let agressor = document.querySelector('.openB');
agressor.onclick = function () {
    askW.classList.toggle('open-window');
}


let yesBtn = document.querySelector('.YesB');
let closedNumb = document.querySelector('.closed');
let noBtn = document.querySelector('.NoB');
let NumbAgr = agressor.textContent;
let numberClosed = closedNumb.textContent;
yesBtn.onclick = function() {
    if (NumbAgr > 0){
        NumbAgr = NumbAgr -1;
        numberClosed = +numberClosed + 1;
        askW.classList.toggle('open-window');
    }
    else {
        askW.classList.toggle('open-window');
    }
    agressor.innerHTML= NumbAgr;
    closedNumb.innerHTML= numberClosed;
    console.log('1')
}
noBtn.onclick = function () {
    askW.classList.toggle('open-window');
}
