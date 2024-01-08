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

const lft = document.getElementById('left');
const rght = document.getElementById('right');

const colors = [ "white", "rgb(206, 206, 48)" ];

button.addEventListener('click', () => {
sunn.style.backgroundColor = colors [getRandomNumber()];
});

lft.addEventListener('click', () => {
    sunn.classList.add('left');
});

function getRandomNumber() {
    return Math.floor(Math.random() * colors.length);
};

//function setScrollBy() {
    //window.scrollBy(20, 0);
    //const windowScrollLeft = window.scrollX;
    //console.log(windowScrollLeft);
//};

//lft.addEventListener('click', () => {
    //sunn.windowcrollLeft =  window.windowScrollLeft.setScrollBy();
//});