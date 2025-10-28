// window.addEventListener('load', loadUp);
document.addEventListener('DOMContentLoaded', loadUp);
const thing = document.getElementById('thing');
// function loadUp() {
//   let thing = document.getElementById('thing');
//   thing.style.width = "100px";
//   thing.style.animation = "shake 1s";
//   setTimeout(() => {
//     thing.style.width = "50px";
//   }, 1000);
// }

function loadUp() {
  
  setTimeout(() => {
    thing.style.backgroundColor = 'red';
    thing.classList.add('shake');
  }, 100);
  
  setTimeout(() => {
    thing.style.backGroundColor = 'white';
    thing.classList.remove('shake');
  }, 1000);
}

// function changeButton() {
//   let answer = document.getElementById('answer').value.toLowerCase();
//   let back = document.getElementById('back');
//   if (answer !== "yes") {
//     back.style.opacity = '50%';
//     back.disabled = 'true';
//   } else {
//     back.style.opacity = '100%';
//     back.disabled = 'false';
//   }
// }