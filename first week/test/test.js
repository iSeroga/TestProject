//const textElement= document.querySelector('.openB');
//const NewELement =document.createElement('div');
//NewELement.innerHTML = "<p>Are you shure want to change number of tasks?</p>" +
 //   "<input type='button' value='Yes' >"+" "+"<input type='button' value='No'>";
//textElement.after(NewELement);
//NewELement.style.cssText = `
  //  height: 100px;
    //width:200px;
   // background: gray;
    //text-align:center;
    //position:absolute;
    //right:45%;
    //left:45%;
    //border-radius: 20px;
    //`;

const askW = document.querySelector('.ask');
let agressor = document.querySelector('.openB');
agressor.onclick = function () {
    askW.classList.toggle('open-window');
};

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





