
// active menu and close 
const nav = document.querySelector('.nav'),
      closeBtn = document.querySelector('.header .nav-close');
    
closeBtn.onclick = () => {
    nav.classList.toggle('active');
    closeBtn.classList.toggle('fa-close');
}





// home section time
function realTimeClock(){

    var clock = new Date();

    var hours = clock.getHours();
    var minute = clock.getMinutes();
    var seconds = clock.getSeconds();


    // add am and pm system 
    var am_pm = (hours < 12) ? 'AM' : 'PM';

    // convert hours to 12-hour format 

    hours = (hours > 12) ? hours - 12 : hours;

    // pad the hours , minutes , seconds with zeros like 00
    hours = ('0' + hours).slice(-2);
    minute = ('0' + minute).slice(-2);
    seconds = ('0' + seconds).slice(-2);

    // display the clock 
    document.getElementById('clock').innerHTML = 
    hours + " : " + minute + " : " + seconds + " " + am_pm;
    var t = setTimeout(realTimeClock , 500);
}

window.onload = () => {
    realTimeClock();
}


// scroll actions 
window.onscroll = () => {

    // close menu on scroll 
    nav.classList.remove('active');
    closeBtn.classList.remove('fa-close');
    closeBtn.classList.add('fa-bars');


    // header shadow on scroll
     const header = document.querySelector('.header');
     if(this.scrollY >= 150) {
        header.classList.add('shadow');
     }
     else {
        header.classList.remove('shadow');
     }


    // active sections and links 
    const sections = document.querySelectorAll('section'),
        scrollY = window.pageYOffset;
    
    sections.forEach(current => {
        const sectionTop = current.offsetTop - 96,
            sectionHeight = current.offsetHeight,
            sectionId = current.getAttribute('id');
        
        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav a[href*=' + sectionId + ']').classList.add('active');
        }
            
        else{
            document.querySelector('.nav a[href*=' + sectionId + ']').classList.remove('active');

        } 
    })
        
}




/* =============================== timer start =====================================*/

// get the values for the timer 
const h = document.getElementById('hoursValue'),
m = document.getElementById('minuteValue'),
s = document.getElementById('secondValue'),
setBtn = document.getElementById('setBtn'),
stopBtn = document.getElementById('stopBtn'),
hoursSpan = document.querySelector('.hours'),
minutesSpan = document.querySelector('.minutes'),
secondsSpan = document.querySelector('.seconds');


const inputs = document.getElementById('inputs');
      
// initial values 
var startTimer = null;  
hoursSpan.innerHTML = '00';
minutesSpan.innerHTML = '00';
secondsSpan.innerHTML = '00';
      
function stopTimer() {
    clearInterval(startTimer);
}


function timer(){

    if(h.value == 0 && m.value == 0 && s.value == 0){
    
        hoursSpan.innerHTML = '00';
        minutesSpan.innerHTML = '00';
        secondsSpan.innerHTML = '00';

        inputs.style.display = 'flex';
        stopTimer();
        h.value = null;
        m.value = null;
        s.value = null;
    }
    else if(s.value != 0){
        s.value--;
        
        hoursSpan.innerHTML = h.value < 10 ? `0${h.value}` : h.value;
        minutesSpan.innerHTML = m.value < 10 ? `0${m.value}` : m.value;
        secondsSpan.innerHTML = s.value < 10 ? `0${s.value}` : s.value;
    }
    else if(m.value != 0 && s.value == 0 ){
        s.value = 59;
        m.value--;
        
        hoursSpan.innerHTML = h.value < 10 ? `0${h.value}` : h.value;
        minutesSpan.innerHTML = m.value < 10 ? `0${m.value}` : m.value;
        secondsSpan.innerHTML = s.value < 10 ? `0${s.value}` : s.value;
    }
    else if(h.value != 0 && m.value == 0){
        m.value = 60;
        h.value--;
        hoursSpan.innerHTML = h.value < 10 ? `0${h.value}` : h.value;
        minutesSpan.innerHTML = m.value < 10 ? `0${m.value}` : m.value;
        secondsSpan.innerHTML = s.value < 10 ? `0${s.value}` : s.value;
    }

    return;
}


setBtn.onclick = () => {
    function start(){
        startTimer = setInterval(() => {
            timer();
            
        }, 1000);
    }
    if(h.value == 0 ){
        h.value = 0;
    }
    if(m.value == 0 ){
        m.value = 0;
    }
    if(s.value == 0 ){
        s.value = 0;
    }
    hoursSpan.innerHTML = h.value < 10 ? `0${h.value}` : h.value;
    minutesSpan.innerHTML = m.value < 10 ? `0${m.value}` : m.value;
    secondsSpan.innerHTML = s.value < 10 ? `0${s.value}` : s.value;
    inputs.style.display = 'none';
    start();
    
}

stopBtn.onclick = () => {
    
    hoursSpan.innerHTML = '00';
    minutesSpan.innerHTML = '00';
    secondsSpan.innerHTML = '00';
    h.value = null;
    m.value = null;
    s.value = null;
    stopTimer();
    inputs.style.display = 'flex';
}

/* =============================== timer end =====================================*/



/* =============================== stop watch start =====================================*/

// stop watch here 

const startBtn = document.getElementById('start');
const StopBtn = document.getElementById('stop');
const resetBtn = document.getElementById('reset');
const hours = document.getElementById('hours');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');

// initialize seconds
let S = 0;
let interval = null ;
hours.innerHTML ='00';
minutes.innerHTML ='00';
seconds.innerHTML = "00";



function stopWatch() {
    S++;

    let H = Math.floor(S / 3600);
    let M = Math.floor((S - (H * 3600)) / 60);
    let Sec = S % 60;

    hours.innerHTML = H < 10 ? `0${H}` : H ;
    minutes.innerHTML = M < 10 ? `0${M}` : M ;
    seconds.innerHTML = Sec < 10 ? `0${Sec}` : Sec ;
} 

startBtn.onclick = () => {
    function start () {
        if (interval){
            return;
        }
        interval = setInterval(stopWatch , 1000);
    }

    start();
}

StopBtn.onclick = () => {
    function stop() {
        clearInterval(interval);
        interval = null;
    }
    stop();
    
}

resetBtn.onclick = () => {
    function reset() {
        clearInterval(interval);
        interval = null;
        S = 0;
        hours.innerHTML ='00';
        minutes.innerHTML ='00';
        seconds.innerHTML = "00";
    }
    reset();
}

/* =============================== stop watch end =====================================*/
