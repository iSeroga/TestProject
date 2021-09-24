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
const hiddenMenu = document.querySelector(".mobile-menu");
    hiddenMenu.addEventListener('checked', e=>{
        e.preventDefault();
        hiddenMenu.classList.toggle(('.show-menu'))
    });
/*
let HiddenMenu = document.querySelector( '.mobile-menu');
let checkbox = document.getElementById('reveal');
checkbox.addEventListener("checked", function (){
    HiddenMenu.add('.show-menu');
    if (checkbox != null){
        HiddenMenu.remove('.show-menu')
    }
});


 */

/*
let i;
i(document).ready(function(){
    i('.checkbox').change(function() {
        i(this).parent().find('.mobile-menu').toggle('.show-menu');
    });
});


 */


/*
let HiddenMenu = document.querySelector( '.mobile-menu');
let checkbox = document.getElementById('reveal');
  checkbox.onclick = Function ()
{
      HiddenMenu.add('.display:block ');
}

 */




/*let show = document.querySelector('.mobile-menu');


show = parent();

$('#reveal').click(function (){
    if ($(this).is(':checked')){
        $(this).parent().add('.show-menu');
        else{
            $(this).parent().remove('.show-menu');
        }
    };
});


 */
/*
let myFunction = (function () {
    myFunction ('.hidden-menu').click(function () {
        $('.mobile-menu').add('show-menu')
    })
});

 */