
const sliderImages = [  './Images/pexels-arist-creathrive-1183525-2253573.jpg',
                        './Images/pexels-baskincreativeco-1766838.jpg',
                        './Images/pexels-eberhardgross-1287145.jpg',
                        './Images/pexels-eberhardgross-443446.jpg',
                        './Images/pexels-eberhardgross-640781.jpg',
                        './Images/pexels-fabianreitmeier-707915.jpg'
                    ];
const nextBtn = document.querySelector('#next');
const beforeBtn = document.querySelector('#before');
const startBtn = document.querySelector('#start');
const stopBtn = document.querySelector('#stop');
let count=0;
let loop;

console.log(loop)



function stopLoop(){
    console.log('loop is stopped !! ')
    clearInterval(loop)
}


function startLoop(){
    console.log('loop is started !! ')
    loop= setInterval(playNext, 1000)
}



function playNext(){
    if (count < sliderImages.length - 1) {
        count++;
        document.querySelector('img').src = sliderImages[count];
    } else {
        count = 0;
    }
    console.log('slide number'+ count)
}

function playBefore(){
    
    
    if (count > 0) {
        count--;
        document.querySelector('img').src = sliderImages[count];
    } else {
        count = sliderImages.length - 1;
    }


    console.log('slide number'+ count)
}

startBtn.addEventListener('click', startLoop);
stopBtn.addEventListener('click', stopLoop);


nextBtn.addEventListener('click', () => { 
    stopLoop();  playNext();
} );
beforeBtn.addEventListener('click', () => { 
    stopLoop();
    playBefore();} 
);