//let onOff = document.querySelector('.wkl');
//let sunn = document.querySelector('.sun');

//onOff.addEventListener('click', (ev) => {
  //  sunn.classList.toggle('off');
//});

//onOff.addEventListener('click', (ev) => {
  //  sunn.classList.add('sun');
//});

const button = document.getElementById('btn');
const sunn = document.querySelector('.sun');

const colors = [ "white", "yellow" ];

button.addEventListener('click', () => {
sunn.style.backgroundColor = colors[getRandomNumber()];
});


function getRandomNumber() {
    return Math.floor(Math.random() * colors.length);
}