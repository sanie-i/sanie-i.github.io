var x = window.matchMedia("(max-width: 900px)");
var coll = document.getElementsByClassName("collapsible");
var btns = document.getElementsByClassName("coor");
var i;
var uluru = {lat: 44.949559, lng: 34.027823};

var toggleImage = document.getElementById("toggle-image");
var toggleText = document.getElementById("toggle-text");
var columnImage = document.getElementsByClassName("image");
var columnText = document.getElementsByClassName("text");
var toggles = document.getElementsByClassName("toggle");
var imageOn = true;
var textOn = true;

var titleDiv = document.getElementsByClassName("title");

var full = document.getElementById("full");
var grid = document.getElementById("grid");
var imageList = document.getElementById("image-list");

//collapsible text
for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    var chapter = this.getElementsByTagName("span");
    if (content.style.maxHeight){
      content.style.maxHeight = null;
      this.style.paddingBottom = 0;
      chapter[0].style.color = "#000";
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
      this.style.paddingBottom = 1 + "em";
      chapter[0].style.color = "#bbb";
    }
  });
}

//text/image toggle
function contentToggle() {
  toggleImage.addEventListener("click", function() {
    if (imageOn == true) {
      imageOn = false;
      toggleImage.style.color = "#bbb";
      if (textOn == true){
        console.log("image: " + imageOn, "text: " + textOn);
        columnImage[0].style.flex = 0;
        columnText[0].style.flex = "100%";
        titleDiv[0].style.width = "calc(100% - 1em)";
      } else if (textOn == false) {
        columnImage[0].style.flex = 0;
        columnText[0].style.flex = 0;
      }
    } else {
      imageOn = true;
      toggleImage.style.color = "#000";
      if (textOn == true){
        console.log("image: " + imageOn, "text: " + textOn);
        columnImage[0].style.flex = "50%";
        columnText[0].style.flex = "50%";
        titleDiv[0].style.width = "calc(50% - 1em)";
      } else if (textOn == false) {
        columnImage[0].style.flex = "100%";
        columnText[0].style.flex = 0;
        titleDiv[0].style.width = "calc(100% - 1em)";
      }
    }
    console.log("image: " + imageOn);
  });

  toggleText.addEventListener("click", function() {
    if (textOn == true) {
      textOn = false;
      toggleText.style.color = "#bbb";
      if (imageOn == true) {
        console.log("image: " + imageOn, "text: " + textOn);
        columnImage[0].style.flex = "100%";
        columnText[0].style.flex = 0;
        titleDiv[0].style.width = "calc(100% - 1em)";
      } else if (imageOn == false) {
        columnImage[0].style.flex = 0;
        columnText[0].style.flex = 0;
      }
    } else {
      textOn = true;
      toggleText.style.color = "#000";
      if (imageOn == true) {
        console.log("image: " + imageOn, "text: " + textOn);
        columnImage[0].style.flex = "50%";
        columnText[0].style.flex = "50%";
        titleDiv[0].style.width = "calc(50% - 1em)";
      } else if (imageOn == false) {
        columnImage[0].style.flex = 0;
        columnText[0].style.flex = "100%";
        titleDiv[0].style.width = "calc(100% - 1em)";
      }
    }

    console.log("text: " + textOn);

  });

  for (var i = 0; i < toggles.length; i++) {
    if (imageOn == true && textOn == true){
      // columnImage[0].style.flex = "50%";
      // columnText[0].style.flex = "50%";
      // console.log("success!");
    } else if (imageOn == true && textOn == false){
      columnImage[0].style.flex = "100%";
      columnText[0].style.flex = 0;
      console.log(imageOn, textOn);
      console.log("image on, text off");
    } else if (imageOn == false && textOn == true){
      // columnImage[0].style.flex = 0;
      // columnText[0].style.flex = "100%";
      // console.log(imageOn, textOn);
    } else if (imageOn == false && textOn == false){
      // columnImage[0].style.flex = 0;
      // columnText[0].style.flex = 0;
      // console.log(imageOn, textOn);
    }
  }
}

contentToggle();
// columnImage[0].style.flex = 0;
// columnText[0].style.flex = 0;


// grid.addEventListener("click", function() {
//   imageList.style.display = "flex";
//   // imageList.style.flexBasis = "flex";
// });

// //image list
// full.addEventListener("click", function() {
//   imageList.style.display = "block";
// });
//
// grid.addEventListener("click", function() {
//   imageList.style.display = "flex";
//   // imageList.style.flexBasis = "flex";
// });

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
  var dragElems = [].slice.call(document.querySelectorAll(".drag"));

  if ("IntersectionObserver" in window) {
    let lazyImageObserver = new IntersectionObserver(function(entries, observer) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          let lazyImage = entry.target;
          entry.target.parentElement.classList.toggle("is-visible");
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
