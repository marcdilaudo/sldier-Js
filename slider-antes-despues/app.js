var slider = document.querySelector('.slider');
var before = document.querySelector('.img-container-before');
var after = document.querySelector('.img-container-after');
var container = document.querySelector('.container');


var drag = (e) => {
    let xPos = e.layerX;
    let size = container.offsetWidth;

    before.style.width = xPos + "px";
    slider.style.left = xPos + "px";
    

    if (xPos < 10) {
        before.style.width = 0;
        slider.style.left = 0;
    }

    if (xPos + 15 > size) {
        before.style.width = size + "px";
        slider.style.left = size + "px";
    }

}

container.addEventListener('mousemove', drag);

container.addEventListener('touchmove', drag);