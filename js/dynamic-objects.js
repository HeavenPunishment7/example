//--OwlCarousel script--//
$('.owl-carousel').owlCarousel({
   loop: true,
   autoWidth: true,
   autoplay: true,
   autoplayTimeout: 1000,
   autoplayHoverPause: true,
   margin: 5,
   nav: false,
   responsive: {
      0: {
         items: 1
      },
      600: {
         items: 3
      },
      1000: {
         items: 5
      }
   }
})

//--Accordion script--//
$(function () {
   $("#accordion").accordion();
});

//--Tabs script--//
$(function () {
   $("#tabs").tabs();
});