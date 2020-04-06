$(document).ready(function () {
    $('.drag').draggable();

    $('.drag').mousedown(function () {
        var maxZindex = 0;
        $(this).siblings('.drag').each(function () {
            var currentZindex = Number($(this).css('z-index'));
            maxZindex = currentZindex > maxZindex ? currentZindex : maxZindex;
        });
        $(this).css('z-index', maxZindex + 1);
    });
});

// const images = [
//   "../imgs/1a.jpg","../imgs/2a.jpg","../imgs/3a.jpg","../imgs/4a.jpg","../imgs/5a.jpg","../imgs/6a.jpg"
// ]
//
// let i = 0;
//
// function placeImage(x,y) {
//
//   const nextImage = images[i];
//   const img = document.createElement('img');
//   img.setAttribute('src', nextImage);
//   img.style.left = x + "px";
//   img.style.top = y + "px";
//
// }
//
// placeImage();
