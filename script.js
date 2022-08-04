function random(num) {
  return Math.floor(Math.random() * num);
}

function getRandomStyles() {
  var r = random(255);
  var g = random(255);
  var b = random(255);
  var mt = random(200);
  var ml = random(50);
  var dur = random(5) + 5;
  return `
  background-color: rgba(${r},${g},${b},0.7);
  color: rgba(${r},${g},${b},0.7); 
  box-shadow: inset -7px -3px 10px rgba(${r - 10},${g - 10},${b - 10},0.7);
  margin: ${mt}px 0 0 ${ml}px;
  animation: float ${dur}s ease-in infinite
  `;
}

function createBalloons(num) {
  var balloonContainer = document.getElementById("balloon-container");
  for (var i = num; i > 0; i--) {
    var balloon = document.createElement("div");
    balloon.className = "balloon";
    balloon.style.cssText = getRandomStyles();
    balloonContainer.append(balloon);
  }
}



// function to open/close nav
function toggleNav(){
  // if nav is open, close it
  if($("nav").is(":visible")){
    $("nav").fadeOut();
    $("button").removeClass("menu");
  }
  // if nav is closed, open it
  else{
    $("button").addClass("menu");
    $("nav").fadeIn().css('display', 'flex');
  }
}

// when clicking + or ☰ button
$("button").click(function(){
  // when clicking ☰ button, open nav
    createBalloons(50);
  if($("header").hasClass("open")){
    toggleNav();
  }
  // when clicking + button, open header
  else{
    
    $("header").addClass("open");
    
    
  }
});

// close nav
$("#nav-close").click(function(){
  toggleNav();
});

// scroll to sections
$("nav li").click(function(){
  // get index of clicked li and select according section
  var index = $(this).index();
  var target = $("content section").eq(index);
  
  toggleNav();
  
  $('html,body').delay(300).animate({
    scrollTop: target.offset().top
  }, 500);
});

