//--Preloader script start--//
var preloader = document.getElementById("preloader_preload");

function fadeOutnojquery(el) {
   el.style.opacity = 1;
   var interpreloader = setInterval(function () {
      el.style.opacity = el.style.opacity - 0.05;
      if (el.style.opacity <= 0.05) {
         clearInterval(interpreloader);
         preloader.style.display = "none";
      }
   }, 16);
}
window.onload = function () {
   setTimeout(function () {
      fadeOutnojquery(preloader);
   }, 1000);
};
//--Preloader script end--//