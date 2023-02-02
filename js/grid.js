"use strict"

const elem = document.querySelector(".gallery-grid");
setInterval(() => {
  const msnry = new Masonry(elem, {
    itemSelector: ".gallery-grid-item",
    columnWidth: 378,
    percentPosition: true,
    gutter: 13,
}, 2000);

});

const gridLittle = document.querySelector(".gallery-grid-little");
const msnryGridLittle = new Masonry(gridLittle, {
  itemSelector: ".grid-little-item",
  columnWidth: 180,
  percentPosition: true,
  gutter: 3,
});


