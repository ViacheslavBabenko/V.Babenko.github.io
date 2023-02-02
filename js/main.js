"use strict"

// -------------------------------------------------------------header-------------------------------------------------------------
const header = document.querySelector(".header-page");

window.addEventListener("scroll", () => {
  let scrollDistance = window.scrollY;

  if (scrollDistance >= 750) {
    header.classList.add("header-page-fixed");

  } else header.classList.remove("header-page-fixed");
})

// -------------------------------------------------------------Services tabs-------------------------------------------------------------

const servicesTabs = document.querySelector(".services-list");
const servicesTabsTiteles = document.querySelectorAll(".services-list-item");
const servicesTabsContent = document.querySelectorAll(".services-content-item");
const triangle = document.querySelector(".triangle");

function onTabsClick(event) {
  const target = event.target;
  highlight(target);
  showTabsText();
}

function highlight(selectedLi) {
  servicesTabsTiteles.forEach((element) => {
    element.classList.remove('active-service-item');
    triangle.remove();
  })
  selectedLi.classList.add('active-service-item');
  selectedLi.append(triangle);
}

servicesTabs.addEventListener("click", onTabsClick);

const servicesTabsTitelesArr = Array.from(servicesTabsTiteles);
const servicesTabsContentArr = Array.from(servicesTabsContent);

function showTabsText() {
  let number = 0;
  servicesTabsTitelesArr.findIndex((item, index) => {
    if (item.classList.contains('active-service-item')) {
      number = index;
    }
  })

  servicesTabsContentArr.forEach((element) => {
    element.style.display = "none";
    servicesTabsContentArr[number].style.display = "";
  })
}
showTabsText()

//  -------------------------------------------------------------Our amazing work--------------------------------------------------------------

const workTabs = document.querySelector(".our-work-list");
const workTabsItems = document.querySelectorAll(".work-menu-item")

const imagesList = document.querySelector(".work-images-list");
const workImages = document.querySelectorAll(".work-img");
const workImg = document.querySelector(".work-img");
const hiddenBlock = document.querySelector(".work-hidden-block");

let imagesItems = document.querySelectorAll(".images-list-item");
const imagesItem = document.querySelector(".images-list-item");

workTabs.addEventListener("click", (event) => {
  workTabsItems.forEach((element) => {
    element.classList.remove('work-item-active');
  });
  event.target.classList.add('work-item-active');

});

workTabs.addEventListener("click", filterImg);

function filterImg(event) {

  if (event.target.tagName === "LI") {
    imagesItems.forEach((item) => {
      item.style.display = "block";
  
      if (event.target.getAttribute('data-content') !== item.getAttribute('data-content')) {
        item.style.display = "none";
      }
  
      if (event.target.getAttribute('data-content') === "All") {
        item.style.display = "block";
      }
    })
  }
}

workImages.forEach(element => {
  element.addEventListener("mouseenter", (event) => {
    setTimeout(() => {
      event.target.after(hiddenBlock);
    }, 150);

    function textChange(className, text) {
      if (event.target.classList.contains(className)) {
        hiddenBlock.querySelector(".hidden-block-subtitle").textContent = text;
      }
    }

    textChange("img-graphic-design", "Graphic design");
    textChange("img-web-design", "Web design");
    textChange("img-landing-pages", "Landing pages");
    textChange("img-wordpress", "Wordpress");
  })
});

const loadMoreBtn = document.querySelector("#our-work-btn");

loadMoreBtn.addEventListener("click", (event) => {
  function getListContent() {
    let fragment = new DocumentFragment();

    for (let i = 1; i <= 12; i++) {
      let newLi = hiddenBlock.closest(".images-list-item").cloneNode(true);
      newLi.querySelector(".work-img").src = `img/our-work-load-more/load-more-${i}.jpg`;

      if (i < 3) {
        newLi.setAttribute("data-content", "Graphic Design");
        hiddenBlock.querySelector(".hidden-block-subtitle").textContent = "Graphic Design";
      } else if (i < 6) {
        newLi.setAttribute("data-content", "Web Design");
        hiddenBlock.querySelector(".hidden-block-subtitle").textContent = "Web Design"
      } else if (i < 9) {
        newLi.setAttribute("data-content", "Landing Pages");
        hiddenBlock.querySelector(".hidden-block-subtitle").textContent = "Landing Pages"
      } else {
        newLi.setAttribute("data-content", "Wordpress");
        hiddenBlock.querySelector(".hidden-block-subtitle").textContent = "Wordpress"
      }
      fragment.append(newLi);
    }
    return fragment;
  }
  imagesList.append(getListContent());
  event.target.remove()

  imagesItems = document.querySelectorAll(".images-list-item");
})

// ----------------------------------------------------------------about----------------------------------------------------------------

const slider = document.querySelector(".about-slider");
const sliderItems = document.querySelectorAll(".slider-item");
const sliderImages = document.querySelectorAll(".slider-item-img");
const userDescription = document.querySelectorAll(".user-description-item");
slider.addEventListener("click", changeInfo);

function changeDescription(activeLi) {
  userDescription.forEach(element => {

    if (activeLi.getAttribute("data-worker") !== element.getAttribute("data-worker")) {
      element.classList.remove("description-item-active")
    } else {
      element.classList.add("description-item-active")
    }
  });
}

function changeInfo(event) {
  if (event.target.tagName === "IMG") {
    sliderItems.forEach(element => {
      element.classList.remove('active-item');

    });
    let activeLi = event.target.closest(".slider-item")
    activeLi.classList.add('active-item');
     changeDescription(activeLi)
  }
}

const sliderBtnLeft = document.querySelector(".btn-left");
const sliderBtnRight = document.querySelector(".btn-right");

let slideNumber = 2;

sliderBtnLeft.addEventListener("click", () => {
  showNextSlide("prev")
})

sliderBtnRight.addEventListener("click", () => {
  showNextSlide("next")
})

function showNextSlide(direction) {

  sliderItems.forEach((item) => item.classList.remove('active-item') );

  if (direction === `next`) {
    slideNumber = slideNumber +1;
  
    if (slideNumber >3) slideNumber = 0; 
   } 
   
   else if (direction === `prev`) {
    slideNumber = slideNumber -1;
  
    if (slideNumber <0)  slideNumber = sliderItems.length-1;
  }

  sliderItems[slideNumber].classList.add("active-item");
  changeDescription( sliderItems[slideNumber]);
}


// ---------------------------------------------------------------Gallery---------------------------------------------------------------


const gridItems = document.querySelectorAll(".gallery-grid-item");
const gridHoverItem = document.querySelector(".hover-grid-item");
const gridLittleItem = document.querySelectorAll(".grid-little-item");

gridItems.forEach((element, index) => {
  gridHoverItem.remove;
  if (index !==2) {
    showHover(element) 
  } else {
    gridLittleItem.forEach(element => {
      gridHoverItem.remove;
      showHover(element) 
    })
  }
});

function showHover(item) {
  item.addEventListener("mouseenter", () => {

    item.append(gridHoverItem);
    gridHoverItem.style.opacity = 1;
  })
}

const galleryBtn = document.querySelector(".gallery-load-btn");
const galleryGrid = document.querySelector(".gallery-grid");
const galleryGridItem = document.querySelector(".gallery-grid-item");

galleryBtn.addEventListener("click", () =>{

  let gridFragment = new DocumentFragment();

  for (let i = 1; i <= 6; i++) {
    let newItem = galleryGridItem.cloneNode(true);

    newItem.querySelector(".grid-item-img").src = `img/gallery-load-more/gallery-load-more-img-${i}.jpg`;
    showHover(newItem);

    gridFragment.append(newItem);
  }  

  galleryGrid.append(gridFragment);
  galleryBtn.remove();
})

const moveBtn = document.querySelector(".move-grid-img");

moveBtn.addEventListener("click", (event) => {
  const GridItem = event.target.closest(".hover-grid-item");
  const gridImgMin =GridItem.previousElementSibling;
})
