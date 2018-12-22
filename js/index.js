var coll = document.getElementsByClassName("collapsible");
var i;
var x = window.matchMedia("(max-width: 900px)")

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
}

$(document).ready(function(){
  //smooth scrolls to figure
    $(function() {
    $('.fig').click(function() {
      if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');

        //if media is less than 900
        if (x.matches) {
          if (target.length) {
            $('html, body').animate({
              scrollTop: $('html, body').scrollTop() + target.offset().top
            }, 800);
            return false;
          }
        // if media is greater than 900
        } else {
          // TODO: fix this
          if (target.length) {
            $('.image').animate({
              scrollTop: $('.image').scrollTop() + target.offset().top
            }, 800);
            // //make smooth scroll image color
            // var currentImg = jQuery(target).attr("id");
            // document.getElementById(currentImg).style.filter = "grayscale(0%)";
            // console.log(currentImg);
            return false;
          }
        }
      }
    });
  });
});

//lazy load images
document.addEventListener("DOMContentLoaded", function() {
  var lazyImages = [].slice.call(document.querySelectorAll("img.lazy"));

  if ("IntersectionObserver" in window) {
    let lazyImageObserver = new IntersectionObserver(function(entries, observer) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          let lazyImage = entry.target;
          lazyImage.src = lazyImage.dataset.src;
          lazyImage.srcset = lazyImage.dataset.srcset;
          lazyImage.classList.remove("lazy");
          lazyImageObserver.unobserve(lazyImage);
        }
      });
    });

    lazyImages.forEach(function(lazyImage) {
      lazyImageObserver.observe(lazyImage);
    });
  } else {
    // Possibly fall back to a more compatible method here
  }
});

function myFunction(x) {
  if (x.matches) { // If media query matches
    // document.body.style.backgroundColor = "yellow";
  } else {
   // document.body.style.backgroundColor = "pink";
  }
}

myFunction(x) // Call listener function at run time
x.addListener(myFunction) // Attach listener function on state changes
