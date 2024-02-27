const bgImageEle = document.getElementById("bgImage");

window.addEventListener("scroll", ()=>{
  updateImg();
})

function updateImg(){
  bgImageEle.style.opacity = 1 - window.pageYOffset / 900;
  bgImageEle.style.backgroundSize = 160 - window.pageYOffset / 12 +"%"
}