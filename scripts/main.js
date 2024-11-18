let test= document.getElementById('#test');

myImage.onclick = function () {
  let mySrc = img1.getAttribute('src');
  if(mySrc === 'images/carrefour.png') {
    myImage.setAttribute('src', 'images/test.png');
  } else {
    myImage.setAttribute('src', 'images/carrefour.png');
  }
  console.log("test");
  
}
