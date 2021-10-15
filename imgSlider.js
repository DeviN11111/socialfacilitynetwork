var currentSlide = 0;
var imageAmount = 29
function nextSlides() {
  document.getElementById("imageSlide").src = "images/header"+currentSlide+".jpg"
  currentSlide++
  if(currentSlide > 29){
    currentSlide = 0
    }
  
} 


function prevSlides() {
    document.getElementById("imageSlide").src = "images/header"+currentSlide+".jpg"
    currentSlide--
    if(currentSlide < 0){
        currentSlide = 2
    }
  }