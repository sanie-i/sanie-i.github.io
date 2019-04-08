var x = window.matchMedia("(max-width: 900px)");
var coll = document.getElementsByClassName("collapsible");
var btns = document.getElementsByClassName("coor");
var i;
var uluru = {lat: 44.949559, lng: 34.027823};

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

//footnotes
var sup = document.getElementsByClassName("sup");
var wrapper = document.getElementById('footnote-wrapper');
var s;

//footnotes in body text
for (s = 0; s < sup.length; s++) {
  // on nouseover
  sup[s].addEventListener("mouseover", function() {
    //insert text of current footnote:
    var footnote = document.getElementById(this.hash.slice(1)).innerHTML;
    console.log(footnote);
    document.getElementById("footnote-show").innerHTML = footnote;

    //open footnote wrapper:
    if (wrapper.style.maxHeight) {
      wrapper.style.maxHeight = "50vh";
    } else {
      wrapper.style.maxHeight = "50vh";
    }
  });
  //on mouse out
  sup[s].addEventListener("mouseout", function() {
    if (wrapper.style.maxHeight) {
      wrapper.style.maxHeight = null;
    } else {
      wrapper.style.maxHeight = null;
    }

  });

}

//smooth scrolls to figure
$(document).ready(function(){
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

// maps
// choose the coordinates to show
$('#more').on('click', function() {
  // Toggles between images and maps
  $(".image-list").toggle();
});

$('#coor1').on('click', function() {
  uluru = {lat: 44.949559, lng: 34.027823};
  initMap();
});

$('#coor2').on('click', function() {
  uluru = {lat: 44.985608, lng: 34.097079};
  initMap();
});

$('#coor3').on('click', function() {
  uluru = {lat: 44.939161, lng: 34.031396};
  initMap();
});

$('#coor4').on('click', function() {
  uluru = {lat: 44.949542, lng: 34.053922};
  initMap();
});

$('#coor5').on('click', function() {
  uluru = {lat: 44.929333, lng: 34.070250};
  initMap();
});

$('#coor6').on('click', function() {
  uluru = {lat: 44.984336, lng: 34.106102};
  initMap();
});

// $('#coor7').on('click', function() {
//   uluru = {lat: 44.929333, lng: 34.070250};
//   initMap();
// });

// highlight chosen coordinates
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
  var current = document.getElementsByClassName("coor active");
  current[0].className = current[0].className.replace(" active", "");
  this.className += " active";
  });
}

// Initialize and add the maps
function initMap() {
  var map = new google.maps.Map(document.getElementById('field-list'), {
    zoom: 16,
    center: uluru,
    mapTypeId: 'satellite',
    disableDefaultUI: true
    // mapTypeControl: true,
    // mapTypeControlOptions: {
    //   style: google.maps.MapTypeControlStyle.HORIZONTAL_BAR
    // }
  });
}
