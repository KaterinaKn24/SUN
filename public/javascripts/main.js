let onOff = document.querySelector('.wkl');
let sunn = document.querySelector('.sun');

onOff addEventListener('click', (ev) => {
    sunn.classList.add('on');
});

onOff addEventListener('click', (ev) => {
    sunn.classList.remove('on');
});