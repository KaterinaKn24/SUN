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

const sunMove = {
    size: 5,
    step: 50,
    cur: 0
}

lft.addEventListener('click', () => {
    if ( sunMove.cur === 0) {
        return;
    }
    
    sunMove.cur-=1;
    const coord = sunMove.cur * sunMove.step; 
    
    sunn.style.left = `${coord}px`;
    
});

rght.addEventListener('click', () => {
    if(sunMove.cur === sunMove.size - 1) {
        return;
    }

    sunMove.cur+=1;
    const coord = sunMove.cur * sunMove.step; 
  
    sunn.style.left = `${coord}px`;
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