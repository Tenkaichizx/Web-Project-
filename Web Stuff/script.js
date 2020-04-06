

function epic() {
    document.getElementById('demo').innerHTML = Date();
    var x = document.getElementById("first");
    if(x.style.display=="block"){
        x.style.display="none"
      } else {
        x.style.display="block"
      }
    
}

function woah() {
    var d = new Date();
    document.getElementById('noodle').innerHTML = d.getFullYear();
    var x = document.getElementById("second");
    if(x.style.display=="block"){
        x.style.display="none"
      } else {
        x.style.display="block"
      }
}

function emote() {
   document.getElementById('happy').innerHTML= "&#x1F34E; &#x1F953; &#x1F32F; &#x1F95E;"       
   var x = document.getElementById("third");
   if(x.style.display=="block"){
       x.style.display="none"
     } else {
       x.style.display="block"
     }
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

$(document).ready(() => {
 $('#slideshow .slick').slick({
   autoplay:true,
   autoplaySpeed:2000,
   dots: true,
   speed: 4000, 
   fade: true,
 });  
});