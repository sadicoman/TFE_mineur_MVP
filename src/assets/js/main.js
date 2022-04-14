"use strict";

/*----- Copyright -----*/
// if (document.getElementById("year")) {
// let date = new Date().getFullYear(); 

// document.getElementById("year").innerHTML = date;    
// }
/*--------------------------------------------*/


/*----- Annimation GSAP -----*/
// gsap.to( '.ball', {
//     x: 300,
//     stagger: 0.08,
//     duration: 1
// } );
/*--------------------------------------------*/


/*----- Btn -----*/
let btnTaille = document.querySelectorAll(".btn");
let btnTailleHaut = document.querySelectorAll(".btn__el--haut");
let btnTailleBas = document.querySelectorAll(".btn__el--bas");

for(let i = 0 ; i < btnTaille.length ; i++){ 
	// .length => nombre d'éléments dans le tableau "btnTaille"
	let btnHeight = btnTailleHaut[i].offsetHeight;
	let btnWidth = btnTailleHaut[i].offsetWidth;

	btnTailleBas[i].style.width = btnWidth+"px";
	btnTailleBas[i].style.height = btnHeight+"px";
};
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
tlBras.set(brasMobile,{
  transformOrigin: '75px 20px',
  rotation: '-1deg'
});
tlBras.to(brasMobile,{
  duration: 4,
  rotation: '7deg',
  ease: "power1.inOut"
});

const tlFlame = gsap.timeline({repeat: -1, yoyo: true});
tlFlame.set(flame,{
  transformOrigin: 'center center'
})
tlFlame.to(flame,{
  duration: 1.5,
  scale: 1.3,
  ease: "bounce.inOut"
});

const tlHalo = gsap.timeline({repeat: -1, yoyo: true});
tlHalo.set(halo,{
  transformOrigin: 'center center'
})
tlHalo.to(halo,{
  duration: 1.5,
  scale: 1.6,
  ease: "bounce.inOut"
});
/*--------------------------------------------*/


/*----- Annimation Swap SVG Création Charbon -----*/
let btnSuivant = document.querySelector('.btnSuivant');
let btnAvant = document.querySelector('.btnAvant');
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
  }else if(index == 2){
    for(let i = 0 ; i < etapes1.length ; i++){
      gsap.to(etapes1[i], {duration: 1, morphSVG: etapes3[i]});
    };
  }else if(index == 3){
    for(let i = 0 ; i < etapes1.length ; i++){
      gsap.to(etapes1[i], {duration: 1, morphSVG: etapes4[i]});
    };
  }else if(index == 4){
    for(let i = 0 ; i < etapes1.length ; i++){
      gsap.to(etapes1[i], {duration: 1, morphSVG: etapes5[i]});
    };
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
  }
  index++;
});

btnAvant.addEventListener('click', (e) => {
  if(index == 2){
    for(let i = 0 ; i < etapes6.length ; i++){
      gsap.to(etapes1[i], {duration: 1, morphSVG: etapes1[i]});
    };
    btnAvant.classList.toggle('hidden');
  }else if(index == 3){
    for(let i = 0 ; i < etapes1.length ; i++){
      gsap.to(etapes1[i], {duration: 1, morphSVG: etapes2[i]});
    };
  }else if(index == 4){
    for(let i = 0 ; i < etapes1.length ; i++){
      gsap.to(etapes1[i], {duration: 1, morphSVG: etapes3[i]});
    };
  }else if(index == 5){
    for(let i = 0 ; i < etapes1.length ; i++){
      gsap.to(etapes1[i], {duration: 1, morphSVG: etapes4[i]});
    };
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
    btnSuivant.classList.toggle('hidden');
  }
  index--;
});
