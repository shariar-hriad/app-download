// Company Carousel
$('.owl-carousel').owlCarousel({
   loop: true,
   margin: 10,
   responsiveClass: true,
   autoplay: true,
   responsive: {
      0: {
         items: 1,
      },
      600: {
         items: 3,
      },
      1000: {
         items: 5,
         loop: false
      }
   }
})

// Faq Accordion
var coll = document.getElementsByClassName("faq-collapse");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
} 
