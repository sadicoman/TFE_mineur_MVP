"use strict";

// /*----- ANNIMATION CLICK MENU -----*/
// var navEl = document.querySelectorAll(".nav__lien");
// for (var i = 0; i < navEl.length; i++) {
//     /* cette ligne permet de gérer les interactions au click*/
//     navEl[i].addEventListener("click", function (e) {
//         var currentLink = this.href;
//         /*C'est dans cette ligne, dans les (...) qu'on ajoute la class 
//         qui contient l'animation qu'on souhaite réaliser lors du changement de page*/
//         document.body.classList.add("out");
//         /*Cette ligne accorde le droit de changer de page une fois que l'animation est finie*/
//         document.body.addEventListener("animationend", function (e) {
//             window.location = currentLink;
//         });
//         e.preventDefault();
//     });
// }

/*-----BURGER MENU-----*/

let navButton = document.querySelector(".navBtn");
let navEl = document.querySelectorAll(".nav__el");

navButton.addEventListener("click", toggleNavigation);
navButton.addEventListener("click", annimationMenu);

function toggleNavigation() {
    if (!document.body.hasAttribute("data-menu")) {
        document.body.setAttribute("data-menu", true);
    } else {
        document.body.removeAttribute("data-menu");
    }
}



// ============================================
// il faut corriger l'annimation
// ============================================
function annimationMenu() {
  for(let i = 0 ; i < navEl.length ; i++){ 
    const tlNavEl = gsap.timeline();
    if(i % 2 == 0){  // pair
      
      tlNavEl.set(".nav__el",{
        duration: 0.6,
        opacity: 0,
        ease: "ease"
      });
      tlNavEl.to(".nav__el", {
        duration: 0.6, 
        opacity: 1,
        x: 50,
        ease: "ease"
      });
    }else{  // impair
      tlNavEl.set(".nav__el",{
        duration: 0.6,
        opacity: 0,
        ease: "ease"
      });
      tlNavEl.to(".nav__el", {
        duration: 0.6, 
        opacity: 1,
        x: -50,
        ease: "ease"
      });
    }
  }
}



/*----- ANNIMATION CLICK Burger -----*/
let container = document.querySelector('.container');
let burgs = document.querySelectorAll('.burg');
let type = ['h', 'm', 'b'];
let clicked = false;
container.addEventListener('click', (e) => {
if (clicked) {
  for (let i = 0; i < burgs.length; i++) {
    burgs[i].classList.remove(`burg__${type[i]}--clicked`);
    clicked = false;
  }
  } else {
    for (let i = 0; i < burgs.length; i++) {
      burgs[i].classList.add(`burg__${type[i]}--clicked`);
    }
    clicked = true;
  }
});
    
// menu clic

var sonStopped = false;
var mySound;


for(let el of navEl){
  el.addEventListener('click', (e) =>{
    let loc = el.getAttribute('data-loc');
    document.body.removeAttribute("data-menu");
    for (let i = 0; i < burgs.length; i++) {
      burgs[i].classList.remove(`burg__${type[i]}--clicked`);
      clicked = false;
    }
    
    let elShow = document.querySelector(".section--displayVisible");
    
    let elNext;
    let sections = document.querySelectorAll('.section');
    for(let el of sections){
      if (el.classList.contains(loc)){
        elNext = el;
        el.classList.add('section--displayVisible');
      }
    }
  
    elShow.classList.remove("section--displayVisible");
  
    if(elNext){
      elNext.classList.add("section--displayVisible");
    }else{
      let elFirst = elShow.parentNode.firstElementChild;
      elFirst.classList.add("section--displayVisible");
    }

// ============================================
// il faut supprimer l'audio
// ============================================

    if (document.querySelector('.myAudio')) {
      mySound.remove();
    }




    if(loc == 'histoireCharbon'){
      mySound = new Sound("assets/son/histoireCharbon.mp3");
      if(sonStopped == false){
        mySound.play();
        document.querySelector('.myAudio').volume = 0.1;
      }
    }else if(loc == 'journeeType'){
      mySound = new Sound("assets/son/Campagne.mp3");
      if(sonStopped == false){
        mySound.play();
      }
    }else if(loc == 'presentationMine'){
      mySound.remove();
      mySound = new Sound("assets/son/Local_technique_industrie.mp3");
      document.querySelector('.myAudio').volume = 0.1;
      if(sonStopped == false){
        mySound.play();
      }
    }else if(loc == 'circuitAerage'){
      mySound.remove();
      mySound = new Sound("assets/son/Mats_qui_sifflent.mp3");
      document.querySelector('.myAudio').volume = 0.2;
      if(sonStopped == false){
        mySound.play();
      }
    }
    
    
    tlShowText.set(elNext,{
      transform: 'translateX(150px)'
    })
    tlShowText.to(elNext,{
      duration: 0.6,
      opacity: 1,
      transform: 'translateX(0px)'
    }); 
    
  });
}
    
    
    
    
    
    
    






/*----- Btn -----*/
let btnTaille = document.querySelectorAll(".btn");
let btnTailleHaut = document.querySelectorAll(".btn__el--haut");
let btnTailleBas = document.querySelectorAll(".btn__el--bas");

function updateStyleBtn(){
  for(let i = 0 ; i < btnTaille.length ; i++){ 
    // .length => nombre d'éléments dans le tableau "btnTaille"
    let btnHeight = btnTailleHaut[i].offsetHeight;
    let btnWidth = btnTailleHaut[i].offsetWidth;
    if(btnTaille[i].classList.contains("btn--icon")){
      // btnWidth += 15;
    }
    
    btnTailleBas[i].style.width = btnWidth+"px";
    btnTailleBas[i].style.height = btnHeight+"px";
  };
}

// mise à jour de la taille toutes les X millisecondes
let interval = setInterval(updateStyleBtn, 100);
interval;
/*--------------------------------------------*/

/*----- Section Swap -----*/
// Mise en place
let btnNext = document.querySelectorAll(".btn--next");
let btnPrev = document.querySelectorAll(".btn--prev");

const tlShowText = gsap.timeline({});

for(let btn of btnNext){
  btn.addEventListener("click", next);
};
for(let btn of btnPrev){
  btn.addEventListener("click", prev);
};

                                        
function next(){
  let elShow = document.querySelector(".section--displayVisible");
  let elNext = elShow.nextElementSibling;

  elShow.classList.remove("section--displayVisible");

  if(elNext){
    elNext.classList.add("section--displayVisible");
  }else{
    let elFirst = elShow.parentNode.firstElementChild;
    elFirst.classList.add("section--displayVisible");
  }
  
  
  tlShowText.set(elNext,{
    transform: 'translateX(150px)'
  })
  tlShowText.to(elNext,{
    duration: 0.6,
    opacity: 1,
    transform: 'translateX(0px)'
  }); 
}
function prev(){
  let elShow = document.querySelector(".section--displayVisible");
  let elPrev = elShow.previousElementSibling;

  elShow.classList.remove("section--displayVisible");

  if(elPrev){
    elPrev.classList.add("section--displayVisible");
  }else{
    let elLast = elShow.parentNode.lastElementChild;
    elLast.classList.add("section--displayVisible");
  }
  tlShowText.set(elPrev,{
    transform: 'translateX(-150px)'
  })
  tlShowText.to(elPrev,{
    duration: 0.6,
    opacity: 1,
    transform: 'translateX(0px)'
  }); 
}
/*--------------------------------------------*/

/*----- Annimation personnage -----*/
const tlBras = gsap.timeline({repeat: -1, yoyo: true});
tlBras.set(".brasMobile",{
  transformOrigin: '75px 20px',
  rotation: '-1deg'
});
tlBras.to(".brasMobile",{
  duration: 4,
  rotation: '7deg',
  ease: "power1.inOut"
});

const tlFlame = gsap.timeline({repeat: -1, yoyo: true});
tlFlame.set(".flame",{
  transformOrigin: 'center center'
})
tlFlame.to(".flame",{
  duration: 1.5,
  scale: 1.3,
  ease: "bounce.inOut"
});

const tlHalo = gsap.timeline({repeat: -1, yoyo: true});
tlHalo.set(".halo",{
  transformOrigin: 'center center'
})
tlHalo.to(".halo",{
  duration: 1.5,
  scale: 1.6,
  ease: "bounce.inOut"
});
/*--------------------------------------------*/


/*----- Annimation Swap SVG Création Charbon -----*/
let btnSuivant = document.querySelector('.btnSuivant');
let btnAvant = document.querySelector('.btnAvant');
let pgCharbon = document.querySelector('.pg__creaCharbon');
let btnSwap = document.querySelector('.btn--swap');
let etapes1 = document.querySelectorAll('.etape1');
let etapes2 = document.querySelectorAll('.etape2');
let etapes3 = document.querySelectorAll('.etape3');
let etapes4 = document.querySelectorAll('.etape4');
let etapes5 = document.querySelectorAll('.etape5');
let etapes6 = document.querySelectorAll('.etape6');
let sable = document.querySelectorAll('.sable');
let sol = document.querySelectorAll('.sol');

let index = 1;
btnSuivant.addEventListener('click', (e) => {
  if(index == 1){
    for(let i = 0 ; i < etapes1.length ; i++){
      gsap.to(etapes1[i], {duration: 1, morphSVG: etapes2[i]});
    };
    btnAvant.classList.toggle('hidden');
    pgCharbon.innerHTML ="Ensuite, des affaissements du sol et invasions par les eaux ont créé des marécages. Les végétaux moururent petit à petit.";
  }else if(index == 2){
    for(let i = 0 ; i < etapes1.length ; i++){
      gsap.to(etapes1[i], {duration: 1, morphSVG: etapes3[i]});
    };
    pgCharbon.innerHTML ="Ainsi, à l’abri de l’air commence la fermentation de divers dépôts végétaux. Avec le temps, les divers végétaux s’enrichissent en carbone et les autres substances disparaissent !";
  }else if(index == 3){
    for(let i = 0 ; i < etapes1.length ; i++){
      gsap.to(etapes1[i], {duration: 1, morphSVG: etapes4[i]});
    };
    pgCharbon.innerHTML ="Sur la couche végétale se déposent des sédiments et de la terre, qui formeront le nouveau sol où la nature va pouvoir se reconstituer.";
  }else if(index == 4){
    for(let i = 0 ; i < etapes1.length ; i++){
      gsap.to(etapes1[i], {duration: 1, morphSVG: etapes5[i]});
    };
    pgCharbon.innerHTML ="L’eau va petit à petit se retirer des terres, la végétation pourra reprendre ses droits et repousser !";
   for(let sableDeux of sable){
      sableDeux.classList.add('sable2');
    };
    for(let solDeux of sol){
      solDeux.classList.add('sol2');
    };
  }else if(index == 5){
    for(let i = 0 ; i < etapes1.length ; i++){
      gsap.to(etapes1[i], {duration: 1, morphSVG: etapes6[i]});
    };
    btnSuivant.classList.toggle('hidden');
    pgCharbon.innerHTML ="Le cycle se renouvellera, ce qui constituera plusieurs couches de charbon avec le temps.";
    btnSwap.classList.toggle('hidden');
  }
  index++;
});

btnAvant.addEventListener('click', (e) => {
  if(index == 2){
    for(let i = 0 ; i < etapes6.length ; i++){
      gsap.to(etapes1[i], {duration: 1, morphSVG: etapes1[i]});
    };
    btnAvant.classList.toggle('hidden');
    pgCharbon.innerHTML ="Au commencement, il y avait de magnifiques forêts avec des végétaux à perte de vue.";
  }else if(index == 3){
    for(let i = 0 ; i < etapes1.length ; i++){
      gsap.to(etapes1[i], {duration: 1, morphSVG: etapes2[i]});
    };
    pgCharbon.innerHTML ="Ensuite, des affaissements du sol et invasions par les eaux ont créé des marécages. Les végétaux moururent petit à petit.";
  }else if(index == 4){
    for(let i = 0 ; i < etapes1.length ; i++){
      gsap.to(etapes1[i], {duration: 1, morphSVG: etapes3[i]});
    };
    pgCharbon.innerHTML ="Ainsi, à l’abri de l’air commence la fermentation de divers dépôts végétaux. Avec le temps, les divers végétaux s’enrichissent en carbone et les autres substances disparaissent !";
  }else if(index == 5){
    for(let i = 0 ; i < etapes1.length ; i++){
      gsap.to(etapes1[i], {duration: 1, morphSVG: etapes4[i]});
    };
    pgCharbon.innerHTML ="Sur la couche végétale se déposent des sédiments et de la terre, qui formeront le nouveau sol où la nature va pouvoir se reconstituer.";
    for(let sableDeux of sable){
      sableDeux.classList.remove('sable2');
    };
    for(let solDeux of sol){
      solDeux.classList.remove('sol2');
    };
  }else if(index == 6){
    for(let i = 0 ; i < etapes1.length ; i++){
      gsap.to(etapes1[i], {duration: 1, morphSVG: etapes5[i]});
    };
    pgCharbon.innerHTML ="L’eau va petit à petit se retirer des terres, la végétation pourra reprendre ses droits et repousser !";
    btnSuivant.classList.toggle('hidden');
    btnSwap.classList.toggle('hidden');
  }
  index--;
});
/*--------------------------------------------*/

/*----- Swap Style charbon -----*/
let btnSwap2 = document.querySelector('.btn--swap2');
let btnAvantCharbon = document.querySelector('.btnAvant--styleCharbon');
let btnSuivantCharbon = document.querySelector('.btnSuivant--styleCharbon');
let styleCharbon = document.querySelectorAll('.styleCharbon__el');
let charbonIndex = 0;

// suivant
btnSuivantCharbon.addEventListener('click', (e) => {
    styleCharbon[charbonIndex].classList.add('hidden');
    styleCharbon[charbonIndex + 1].classList.remove('hidden');
    btnAvantCharbon.classList.remove('hidden');
    charbonIndex++;
    if(charbonIndex == styleCharbon.length - 1){
        btnSwap2.classList.remove('hidden');
        btnSuivantCharbon.classList.add('hidden');
    }
});

// Arriere
btnAvantCharbon.addEventListener('click', (e) => {
  styleCharbon[charbonIndex].classList.add('hidden');
  styleCharbon[charbonIndex - 1].classList.remove('hidden');
  btnSwap2.classList.add('hidden');
  if(btnSuivantCharbon.classList.contains('hidden')){
    btnSuivantCharbon.classList.remove('hidden');
  }
  charbonIndex--;
  if(charbonIndex == 0){
      btnAvantCharbon.classList.add('hidden');
  }
});
/*--------------------------------------------*/


/*----- SVG Presentation Mine annimation -----*/
const tlRoue = gsap.timeline({repeat: -1, yoyo: true});
tlRoue.set(".roue",{
  duration: 6,
  rotation: -180,
  transformOrigin: 'center',
  ease: "power2.inOut"
});
tlRoue.to(".roue", {
  duration: 6, 
  rotation: 180,  
  transformOrigin: 'center',
  ease: "power2.inOut"
});

gsap.to(".berline", {
  duration: 10, 
  x: 100, 
  yoyo: true, 
  // transformOrigin: 'center', 
  repeat: -1,
  ease: 'linear',
});
gsap.to(".berline2", {
  duration: 10, 
  x: -100, 
  yoyo: true, 
  // transformOrigin: 'center', 
  repeat: -1,
  ease: 'linear',
});

gsap.to(".skip", {
  duration: 6, 
  y: -130, 
  yoyo: true, 
  // transformOrigin: 'center', 
  repeat: -1,
  ease: "power2.inOut",
});
/*--------------------------------------------*/

/*----- SVG Présentation du circuit d'aérage Annimation -----*/
gsap.to(".roue2", {
  duration: 3, 
  rotation: 360,  
  transformOrigin: 'center', 
  repeat: -1,
  ease: 'linear',
});

gsap.to(".airHaut", {
  duration: 3,  
  y: -50,
  opacity: 0,
  // transformOrigin: 'center', 
  repeat: -1,
  ease: 'linear',
});
gsap.to(".airHaut2", {
  duration: 2.5,  
  y: -20,
  opacity: 0,
  // transformOrigin: 'center', 
  repeat: -1,
  ease: 'linear',
});
gsap.to(".airBas", {
  duration: 3,  
  y: 50,
  opacity: 0,
  // transformOrigin: 'center', 
  repeat: -1,
  ease: 'linear',
});

gsap.to(".airDroit", {
  duration: 3,  
  x: 85,
  opacity: 0,
  // transformOrigin: 'center', 
  repeat: -1,
  ease: 'linear',
});
gsap.to(".airDroit2", {
  duration: 4.2,  
  x: 50,
  opacity: 0,
  // transformOrigin: 'center', 
  repeat: -1,
  ease: 'linear',
});
/*--------------------------------------------*/

/*----- Bulle dialogue annimation -----*/
const tlDia = gsap.timeline({});
    tlDia.set('.dia-1',{
        opacity: 0
    });
    tlDia.set('.dia-2',{
        opacity: 0
    });
    tlDia.to('.dia-1',{
      opacity: 1,
      duration: 1, 
      ease: 'linear'
    });
    tlDia.to('.dia-2',{
        opacity: 1,
        duration: 0.8, 
        ease: 'linear',
        delay: 1
    });

    let btnBulle = document.querySelector('.btn--bulle');
    btnBulle.addEventListener('click', (e) => {
      const tlDia2 = gsap.timeline({});
      tlDia2.set('.dia-3',{
          opacity: 0
      });
      tlDia2.to('.dia-3',{
        opacity: 1,
        duration: 1.5, 
        ease: 'linear'
      });
    });
/*--------------------------------------------*/


/*----- FUNCTION SOUND -----*/

function Sound(src) {
    this.sound = document.createElement("audio");
    this.sound.classList.add('myAudio');
    this.sound.src = src;
    this.sound.setAttribute("preload", "auto");
    this.sound.setAttribute("controls", "none");
    this.sound.setAttribute("loop", "true");
    this.sound.style.display = "none";
    document.body.appendChild(this.sound);
    this.play = function(){
      this.sound.play();
      sonStopped = false;
      console.log('play');
    }
    this.stop = function(){
      this.sound.pause();
      sonStopped = true;
      console.log('stop');
    }
    this.remove = function(){
      this.sound.remove();
      console.log('remove');
    }
    // this.volume = function(){
    //   this.sound.volume();
    // }
}
// mySound = new sound("assets/sound/voix/narrateur-1.mp3");
// mySound.play();
/*--------------------------------------------*/

/*----- Son BTN -----*/
let btnHistoireCharbon = document.querySelector('.btn--histoireCharbon');
let son = document.querySelectorAll('.son');
let btnStylesCharbon = document.querySelector('.btn--stylesCharbon');
let btnMineur = document.querySelector('.btn--mineur');
let btnVisiteMine = document.querySelector('.btn--visiteMine');
let btnAeration = document.querySelector('.btn--aeration');
let btnTemperature = document.querySelector('.btn--temperature');
let sonPlay = document.querySelectorAll('.son--play');
let sonStop = document.querySelectorAll('.son--stop');


for(let sonCouper of son){
  sonCouper.addEventListener('click', (e) => {
    if (sonStopped) {
      mySound.play();
      for(let btnSon of sonPlay){
        // btnSon.setAttribute('src', 'assets/images/Son.svg');
        btnSon.classList.remove("hidden");
      }
      for(let btnSon of sonStop){
        // btnSon.setAttribute('src', 'assets/images/Son.svg');
        btnSon.classList.add("hidden");
      }
      // console.log('Play Son');
    }else{
      mySound.stop(); 
      // for(let btnSon of son){
      //   // btnSon.setAttribute('src', 'assets/images/mute.svg');
      //   btnSon.querySelector('.son--stop').classList.remove("hidden");
      //   btnSon.querySelector('.son--play').classList.add("hidden");
      // }
      for(let btnSon of sonPlay){
        // btnSon.setAttribute('src', 'assets/images/Son.svg');
        btnSon.classList.add("hidden");
      }
      for(let btnSon of sonStop){
        // btnSon.setAttribute('src', 'assets/images/Son.svg');
        btnSon.classList.remove("hidden");
      }
      // console.log('Couper Son');
    }
  });
};

btnHistoireCharbon.addEventListener('click', (e) => {
  mySound = new Sound("assets/son/histoireCharbon.mp3");
  if(sonStopped == false){
    mySound.play();
    document.querySelector('.myAudio').volume = 0.1;
  }
});

btnStylesCharbon.addEventListener('click', (e) => {
  mySound.remove();
});


btnMineur.addEventListener('click', (e) => {
  mySound = new Sound("assets/son/Campagne.mp3");
  if(sonStopped == false){
    mySound.play();
  }
});

btnVisiteMine.addEventListener('click', (e) => {
  mySound.remove();
  mySound = new Sound("assets/son/Local_technique_industrie.mp3");
  document.querySelector('.myAudio').volume = 0.1;
  if(sonStopped == false){
    mySound.play();
  }
});

btnAeration.addEventListener('click', (e) => {
  mySound.remove();
  mySound = new Sound("assets/son/Mats_qui_sifflent.mp3");
  document.querySelector('.myAudio').volume = 0.2;
  if(sonStopped == false){
    mySound.play();
  }
});

btnTemperature.addEventListener('click', (e) => {
  mySound.remove();
});




















