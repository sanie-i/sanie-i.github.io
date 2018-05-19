var Lslide      = document.querySelectorAll('.Lslide'),
    Rslide      = document.querySelectorAll('.Rslide'),
    control     = document.querySelectorAll('.oncontrol'),
    slideHeight = document.querySelector('.wrapper').clientHeight,
    color = ['#fff', '#fff', '#fff'],
    index = 0;


function init() {
    slideHeight = document.querySelector('.wrapper').clientHeight;
    for (i = 0; i < Lslide.length; i++) {
        Lslide[i].style.backgroundColor = color[i];
        Lslide[i].style.top = -slideHeight * i + "px";
        Rslide[i].style.top = slideHeight * i + "px";
    }
}
init()
window.addEventListener('resize', function(){
    init()
});

function moveToTop() {

    index++;
    for (el = 0; el < Lslide.length; el++) {
        Lslide[el].style.top = parseInt(Lslide[el].style.top) + slideHeight + "px";
        Rslide[el].style.top = parseInt(Rslide[el].style.top) - slideHeight + "px";
    }

    if (index > Lslide.length-1) {
        index = 0;
        for (el = 0; el < Lslide.length; el++) {
            Lslide[el].style.top = -slideHeight * el + "px";
            Rslide[el].style.top = slideHeight * el + "px";
        }
    }
}

function moveToBottom() {
    index--;
    for (el = 0; el < Lslide.length; el++) {
        Lslide[el].style.top = parseInt(Lslide[el].style.top) - slideHeight + "px";
        Rslide[el].style.top = parseInt(Rslide[el].style.top) + slideHeight + "px";

    }
    if (index < 0) {
        index = Rslide.length-1;
        for (el = 0; el < Lslide.length; el++) {
            Lslide[el].style.top = parseInt(Lslide[el].style.top) + slideHeight * Lslide.length + "px";
            Rslide[el].style.top = parseInt(Rslide[el].style.top) - slideHeight * Rslide.length + "px";
        }
    }
}

function transition() {
    for (t = 0; t < Lslide.length; t++) {
        Lslide[t].style.transition = "all 0.8s";
        Rslide[t].style.transition = "all 0.8s";
    }
}


for (t = 0; t < control.length; t++) {
    control[t].addEventListener("click", function() {

        if (this.classList.contains('control-top')) {
            moveToBottom()
        }
        if (this.classList.contains('control-bottom')) {
            moveToTop()
        }

        transition()

    });
}

// -----------------------------------
function toggleText() {
    var x = document.getElementById("text");
    var y = document.getElementById("visual");
    var z = document.getElementById("black");
    // var w = document.getElementById("white");
    var s = document.getElementById("imgsize");

    if (x.style.display === "none") {
        x.style.display = "block";
        y.style.width = "60%";
        z.style.color = "black";
        z.innerHTML = 'X';
        // w.innerHTML = 'X';
        s.style.minHeight = "100%";
    } else {
        x.style.display = "none";
        y.style.width = "100%";
        z.style.color = "white";
        z.innerHTML = 'Text';
        // w.innerHTML = 'Visual';
        s.style.minWidth = '100%';

        // var elements = document.querySelectorAll('.Rslide');
        // for(var i=0; i<elements.length; i++){
        //     elements[i].style.maxWidth = "20%";
        //     // elements[i].style.height = imgHeight + "px";
        // }
    }
}
// ------------------------------------

// -----------------------------------
// function toggleVis() {
//     var x = document.getElementById("text");
//     var y = document.getElementById("visual");
//     var z = document.getElementById("black");
//     var w = document.getElementById("white");
//     var s = document.getElementById("imgsize");
//
//     if (x.style.display === "none") {
//         y.style.display = "block";
//         x.style.width = "40%";
//         w.style.color = "white";
//         z.innerHTML = 'X';
//         w.innerHTML = 'X';
//         s.style.minHeight = "100%";
//     } else {
//         y.style.display = "none";
//         x.style.width = "100%";
//         w.style.color = "black";
//         z.innerHTML = 'X';
//         w.innerHTML = 'Visual';
//         s.style.minWidth = '100%';
//
//         // var elements = document.querySelectorAll('.Rslide');
//         // for(var i=0; i<elements.length; i++){
//         //     elements[i].style.maxWidth = "20%";
//         //     // elements[i].style.height = imgHeight + "px";
//         // }
//     }
// }

// ---------------------------------------------

var wheeling;
function mousemouve(e) {

    clearTimeout(wheeling);
    e.preventDefault();
    var e = window.event || e;
    var delta = Math.max(-1, Math.min(1, (e.wheelDelta || -e.detail)));

    wheeling = setTimeout(function() {
        wheeling = undefined;
        if (delta === 1) {
            moveToTop()
        }
        if (delta === -1) {
            moveToBottom()
        }
    }, 100);

    transition()
}

document.addEventListener("mousewheel", mousemouve);
document.addEventListener("DOMMouseScroll", mousemouve);
