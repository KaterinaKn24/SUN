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

const pozLeft = [ 
    {name: 'left'},
    {name: 'left1'},
    {name: 'left2'},
];

button.addEventListener('click', () => {
sunn.style.backgroundColor = colors [getRandomNumber()];
});

let poz = 3;

lft.addEventListener('click', () => {
    //sunn.classList.add('left');
    if ( poz > 1) {
        sunn.classList.add('left');
    }
    if ( poz < 1 ) {
        sunn.classList.add('left1');
    }
    if ( poz === 1) {
        sunn.classList.add('left2');
    }
});

rght.addEventListener('click', () => {
    sunn.classList.add('right');
});
function getRandomNumber() {
    return Math.floor(Math.random() * colors.length);
};

//function getRandomNumberLeft() {
   //return Math.floor(Math.random() * pozLeft.length);
//};

//function setScrollToLeft() {
    //window.scrollTo(40, 0);
    //const sunnScrollLeft = window.scrollX;
//};

//lft.addEventListener('click', () => {
    //sunn.windowcrollLeft =  sunn.windowScrollLeft.setScrollBy();
//});