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


let Ybut = document.querySelector('.YesB');
let ClosedNumb = document.querySelector('.closed');
let Nbut = document.querySelector('.NoB');
let NumbAgr = agressor.textContent;
let NumrClos = ClosedNumb.textContent;
Ybut.onclick = function() {
    if (NumbAgr > 0){
        NumbAgr = NumbAgr -1;

        NumrClos = +NumrClos + 1;

        askW.classList.toggle('open-window');
    }
    else {
        askW.classList.toggle('open-window');
    }

    agressor.innerHTML= NumbAgr;
    ClosedNumb.innerHTML= NumrClos;
}
Nbut.onclick = function () {

    askW.classList.toggle('open-window');
}
