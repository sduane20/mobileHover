let img1 = document.getElementsByClassName("img1");
let img2 = document.getElementsByClassName("img2");
let img3 = document.getElementsByClassName("img3");
let img4 = document.getElementsByClassName("img4");

img1.addEventListern("touchstart", function() {
    img1.classList.add("mobileHover1");
});

img1.addEventListern("touchend", function() {
    img1.classList.add("mobileHover1");
});

img2.addEventListern("touchstart", function() {
    img2.classList.add("mobileHover2");
});

img2.addEventListern("touchend", function() {
    img2.classList.add("mobileHover2");
});

img3.addEventListern("touchstart", function() {
    img3.classList.add("mobileHover3");
});

img3.addEventListern("touchend", function() {
    img3.classList.add("mobileHover3");
});

img4.addEventListern("touchstart", function() {
    img4.classList.add("mobileHover4");
});

img4.addEventListern("touchend", function() {
    img4.classList.add("mobileHover4");
});

