let onOff = document.querySelector('.wkl');
let sunn = document.querySelector('.sun');

onOff.addEventListener('click', (ev) => {
    sunn.classList.toggle('off');
});

onOff.addEventListener('click', (ev) => {
    sunn.classList.add('sun');
});
