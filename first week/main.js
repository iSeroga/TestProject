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

