let flag = 0;
const slides = document.getElementsByClassName('all-hero');

function shift(x) {
    flag = flag + x;
    slideshow(flag);
}

function slideshow(num) {
    if (flag == slides.length) {
        flag = 0;
        num = 0;
    }
    if (flag < 0) {
        flag = slides.length - 1;
        num = slides.length - 1;
    }

    for(let y of slides){
        y.style.display="none";
    }
    slides[num].style.display="block";
}

slideshow(flag);










document.addEventListener("DOMContentLoaded", function() {
    const mainImg = document.querySelector('.main-img');
    const icon1 = document.querySelector('#icon1');
    const icon2 = document.querySelector('#icon2');
    const subImages = document.querySelectorAll('.sub-img');
    let currentIndex = 0;
    const maxIndex = subImages.length - 4;
  
    function nextImage() {  
      if (currentIndex < maxIndex) {
        currentIndex++;
      } else {
        currentIndex = maxIndex; 
        icon1.style.display = 'none';
      }
      updateSlider();
    }
  
    function prevImage() {
      if (currentIndex > 0) {
        currentIndex--;
      } else {
        currentIndex = 0;
        icon2.style.display = 'none';
      }
      updateSlider();
    }
  
    function updateSlider() {
      const translateValue = -currentIndex * 335;
      mainImg.style.transform = `translateX(${translateValue}px)`;
      icon1.style.display = currentIndex === maxIndex ? 'none' : 'block';
      icon2.style.display = currentIndex === 0 ? 'none' : 'block';
    }

    icon1.addEventListener('click', nextImage);
    icon2.addEventListener('click', prevImage);
  });
  











