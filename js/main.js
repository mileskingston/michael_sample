function setBannerHeight() {
  var windowHeight = window.innerHeight;
  document.querySelector('#banner .parallax-window').style.height = windowHeight + 'px';
  console.log(windowHeight);
};
setBannerHeight();

window.addEventListener('resize', setBannerHeight);