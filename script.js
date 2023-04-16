const pers = document.querySelector('.pers')
const pipe = document.querySelector('.pipe')

const jump = () => {
pers.classList.add('jump');

    setTimeout(() => {
        pers.classList.remove('jump');
     }, 600);
}

const loop = setInterval(() => {

    const pipePosition = pipe.offsetLeft;
    const persPosition = window.getComputedStyle(pers).bottom.replace('px', '');
    
    if (pipePosition <= 120 && pipePosition > 0 && persPosition < 80){

        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;

        pers.style.animation = 'none';
        pers.style.bottom = `${persPosition}px`;

        pers.src ='images/gameover.png';
        pers.style.width ='150px'
        pers.style.marginLeft ='50px'
        
        clearInterval(loop);
    }
},10);


document.addEventListener('keydown', jump);