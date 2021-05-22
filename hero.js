let hero = document.querySelector(".hero");


let backgroundImgs = [
    "assets/media/backgroundImgs/bg1.jpg",
    "assets/media/backgroundImgs/bg2.jpg",
    "assets/media/backgroundImgs/bg3.jpg",
    "assets/media/backgroundImgs/bg4.jpg",
    "assets/media/backgroundImgs/bg5.jpg",
    "assets/media/backgroundImgs/bg6.jpg",
    "assets/media/backgroundImgs/bg7.jpg",
    "assets/media/backgroundImgs/bg8.jpg",
    "assets/media/backgroundImgs/bg9.jpg",
    "assets/media/backgroundImgs/bg10.jpg",
    "assets/media/backgroundImgs/bg11.jpg",
    "assets/media/backgroundImgs/bg12.jpg",
    "assets/media/backgroundImgs/bg13.jpg"
]
function randomNumber() { 
    return(Math.floor(Math.random() * backgroundImgs.length));
}
// let random = 0;
// setInterval( () => {
//  random = randomNumber(0, 12);
// // console.log(random);
//  return random;
// }, 3000);
function changeBackground() {
    hero.style.background = `linear-gradient(to right, rgba(0, 0, 0, .6), rgba(0, 0, 0, .3)), url(${backgroundImgs[randomNumber()]})`;
    hero.style.backgroundRepeat = "no-repeat";
    hero.style.backgroundSize = "cover";
    hero.style.backgroundPosition = "100% 80%";
}
setInterval(changeBackground, 5000);




