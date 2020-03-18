function epic() {
    document.getElementById('demo').innerHTML = Date();
}

function woah() {
    var d = new Date();
    document.getElementById('noodle').innerHTML = d.getFullYear();
}

function emote() {
   document.getElementById('happy').innerHTML= "&#x1F34E; &#x1F953; &#x1F32F; &#x1F95E;"       

}

const secDiv = document.getElementById('sec');
const minDiv = document.getElementById('min');
const hourDiv = document.getElementById('hour');

setInterval(updateClock, 1);

function updateClock(){
    let date = new Date();
    let ms = date.getMilliseconds() / 1000;
    let sec = (date.getSeconds() + ms) / 60;
    let min = (date.getMinutes() + sec) / 60;
    let hour = (date.getHours() + min)/ 12;
   
    secDiv.style.transform = "rotate(" + (sec * 360) + "deg)";
    minDiv.style.transform = "rotate(" + (min * 360) + "deg)";
    hourDiv.style.transform = "rotate(" + (hour * 360) + "deg)";

}

updateClock(); 