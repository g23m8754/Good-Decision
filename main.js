const images = document.getElementsByClassName('pics');

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    } else {
      entry.target.classList.remove('show');
    }
  }); 
});
const hiddenElements = document.querySelectorAll('.hidden');

hiddenElements.forEach((el) => observer.observe(el));

function enlarge() {
  for (let img of images) {
    img.addEventListener('click', () => {
      img.style.transition = "width 0.5s";
      img.style.width = img.style.width === '90%' ? '100%' : '90%';
    });
  }
}

enlarge();