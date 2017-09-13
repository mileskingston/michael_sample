window.addEventListener('resize', setBannerHeight);
// window.addEventListener('scroll', stickyHeader);

function setBannerHeight() {
  var windowHeight = window.innerHeight;
  document.querySelector('#banner .parallax-window').style.height = windowHeight + 'px';
};
setBannerHeight();

// function stickyHeader() {
//   var navbar = document.querySelector('.navbar');
//   var navHeight = navbar.offsetHeight;
  
//   console.log(navHeight);
//   console.log(navbar.pageYOffset);
//   console.log(navbar.scrollTop);
// };

var h = document.querySelector('.navbar');
var stuck = false;
var stickPoint = getDistance();

function getDistance() {
  var topDist = h.offsetTop;
  return topDist;
}

window.onscroll = function(e) {
  var distance = getDistance() - window.pageYOffset;
  var offset = window.pageYOffset;
  if ((distance <= 0) && !stuck) {
    h.style.position = 'fixed';
    h.style.top = '0px';
    stuck = true;
  } else if (stuck && (offset <= stickPoint)){
    h.style.position = 'static';
    stuck = false;
  }
}
