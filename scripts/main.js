let img1= document.querySelector('#gifone');
let img2= document.querySelector('#giftwo');
let img3= document.querySelector('#gifthree');
let img4= document.querySelector('#giffour');
let img5= document.querySelector('#giffive');
let img6= document.querySelector('#gifsix');
let img7= document.querySelector('#gifseven');
let img10= document.querySelector('#giften');
let img12= document.querySelector('#giftwelve');
let myButton= document.querySelector('#button');


myButton.onclick = function() {
  let mySrc = img1.getAttribute('src');
  if(mySrc === 'images/black.jpg') {
    img1.setAttribute('src', 'images/gif1.gif');
    img2.setAttribute('src', 'images/gif2.gif');
    img3.setAttribute('src', 'images/gif3.gif');
    img4.setAttribute('src', 'images/gif4.gif');
    img5.setAttribute('src', 'images/gif5.gif');
    img6.setAttribute('src', 'images/gif6.gif');
    img7.setAttribute('src', 'images/gif7.gif');
    img10.setAttribute('src', 'images/gif10.gif');
    img12.setAttribute('src', 'images/gif12.gif');
    document.querySelector('#imgH').style.background = 'url(images/gif14.gif)';
    document.querySelector('#imgH').style.backgroundRepeat = 'no-repeat';
    document.querySelector('#imgH').style.backgroundSize = '70%';
    document.querySelector('#imgH').style.backgroundPosition = 'center';
  } else {
    img1.setAttribute('src', 'images/black.jpg');
    img2.setAttribute('src', 'images/black.jpg');
    img3.setAttribute('src', 'images/black.jpg');
    img4.setAttribute('src', 'images/black.jpg');
    img5.setAttribute('src', 'images/black.jpg');
    img6.setAttribute('src', 'images/black.jpg');
    img7.setAttribute('src', 'images/black.jpg');
    img10.setAttribute('src', 'images/black.jpg');
    img12.setAttribute('src', 'images/black.jpg');
    document.querySelector('#imgH').style.background = 'url(images/black.jpg)';
    document.querySelector('#imgH').style.backgroundRepeat = 'no-repeat';
    document.querySelector('#imgH').style.backgroundSize = '70%';
    document.querySelector('#imgH').style.backgroundPosition = 'center';
  }  
}
