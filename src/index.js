import './less/index.less'

// Your code goes here!

//Mousing over text in the nav bar will make the word briefly turn purple
let funBus = document.querySelector(".main-navigation")
funBus.addEventListener("mouseover", function( event ) {
    event.target.style.color = "purple";
    setTimeout(function() {
      event.target.style.color = "";
    }, 500);
  }, false);


//Wheeling over the adventure image will cause it to zoom in or out
function zoom(event) {
    event.preventDefault();
    scale += event.deltaY * -0.01;
    scale = Math.min(Math.max(.125, scale), 4);
    imgContent.style.transform = `scale(${scale})`;
  }
  
  let scale = 1;
  let imgContent = document.querySelector('.img-content')
  imgContent.onwheel = zoom;
 
  
  //All text in the body turns purple briefly on load
let body = document.querySelector("body");
  window.addEventListener('load', (event) => {
    body.style.color = "purple";
    setTimeout(function() {
      body.style.color = "";
    }, 500);
  }, false);

  //on resizing the window, briefly turns all text to purple
window.onresize = onResize;
function onResize() {
    body.style.color = "purple";
    setTimeout(function() {
      body.style.color = "";
    }, 500);
  };

  //on scrolling, briefly turns all text purple
  document.addEventListener('scroll', (event) => {
    body.style.color = "purple";
    setTimeout(function() {
      body.style.color = "";
    }, 500);
  }, false);

//on pressing any key, turns all text purple briefly
  document.addEventListener('keydown', onKey)
  function onKey() {
    body.style.color = "purple";
    setTimeout(function() {
      body.style.color = "";
    }, 500);
  };

// on any mouse button press, background briefly becomes red
  document.addEventListener('pointerdown', (event) => {
    body.style.backgroundColor = "red";
    setTimeout(function() {
        body.style.backgroundColor = "";
    }, 500);
  });


  //Briefly makes the background color of the Fun In The Sun section turn blue on mouse over
  let destination = document.querySelector(".destination");

  destination.addEventListener('pointerenter', (event) => {
    destination.style.backgroundColor = "blue";
    setTimeout(function() {
    destination.style.backgroundColor = "";
    }, 500);
  });

  //Briefly makes the background color of the Fun In The Sun section turn green when the mouse leaves the div
  destination.addEventListener('pointerleave', (event) => {
    destination.style.backgroundColor = "green";
    setTimeout(function() {
    destination.style.backgroundColor = "";
    }, 500);
  });

//On initiating a copy (as in copy and paste) from within the footer section, briefly turns the background color
//of the footer section purple.
  let footer = document.querySelector(".footer");

  footer.addEventListener('copy', (event) => {
    footer.style.backgroundColor = "purple";
    setTimeout(function() {
    footer.style.backgroundColor = "";
    }, 500);
  });