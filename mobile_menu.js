/*Kod för utfällning av huvudmenyn när hemsidan visas i mobil och surfplatsläge.*/

"use strict"
//Deklarerar knappar för öppna och stäng.
let closeMenu = document.getElementById("close-menu");
let openMenu = document.getElementById("open-menu");
//Deklarerar huvudmenyn för att kunna tilldela stil
let mainNav = document.getElementById("main-nav");

//Eventlistener som vid klick initierar en funktion som lägger till style-attributet block för att visa menyn.
openMenu.addEventListener("click", function (e){
        mainNav.style.display = "block";
})

//Eventlistener som vid klick initierar en funktion som lägger till style-attributet none för att dölja menyn.
closeMenu.addEventListener("click", function (e){
    mainNav.style.display = "none";
})


//Funktion som tar bort styling i html dokumentet för att menyn ska visas korrekt på datorer.
function resize() {
    if (window.innerWidth > 1520){
        mainNav.style.display = "";
    }
  }
  
  //initierar funktion vid ändrad visningstorlek
  window.onresize = resize;
