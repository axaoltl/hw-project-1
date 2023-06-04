const liServiceChoice = document.querySelectorAll(".service-tab-choice");
const liTabItem = document.querySelectorAll(".service-choices-content-item");

for (let i = 0; i < liServiceChoice.length; i++) {
  liServiceChoice[i].addEventListener("click", () => {
    liServiceChoice.forEach((item, index) => {
      if (i !== index) {
        item.classList.remove("service-active-tab");
      } else {
        item.classList.add("service-active-tab");
      }
    });

    liTabItem.forEach((item, index) => {
      if (i !== index) {
        item.classList.add("inactive-text");
      } else {
        item.classList.remove("inactive-text");
      }
    });
  });
}

const liWorkChoice = document.querySelectorAll(".work-tab-choice");

for (let i = 0; i < liWorkChoice.length; i++) {
  liWorkChoice[i].addEventListener("click", () => {
    liWorkChoice.forEach((item, index) => {
      if (i !== index) {
        item.classList.remove("work-active-tab");
      } else {
        item.classList.add("work-active-tab");
      }
    });
  });
}





// ---------------------------












// ---------------------------




const loadMoreButton = document.querySelector(".work-load-more");
const workPicsLoader = document.querySelector(".work-pics-loader");
const workPics = document.querySelector(".work-pics");

let quantityOfImages = 12;
let clickCount = 0;

loadMoreButton.addEventListener("click", () => {
  if (clickCount < 2) {
    clickCount++;
    loadMoreButton.style.display = "none";
    workPicsLoader.classList.remove("off");
    setTimeout(() => {
      if (quantityOfImages === 24) {
        quantityOfImages += 12;
        addImages(quantityOfImages);
        loadMoreButton.style.display = "none";
      } else {
        quantityOfImages += 12;
        addImages(quantityOfImages);
      }
      workPicsLoader.classList.add("off");
      if (clickCount < 2) {
        loadMoreButton.style.display = "block";
      }
    }, 2000);
  }
});

function addImages(quantity) {
  for (let i = 0; i < 12; i++) {
    const workPicItem = document.createElement("div");
    workPicItem.classList.add("work-pic-item");
    workPics.appendChild(workPicItem);
  }

  const startImages = [...document.querySelectorAll(".work-pic-item")];

  startImages.forEach((startImage, i) => {
    startImage.style.backgroundImage = `url(./assets/our-amazing-work/work-${i + 1
      }.png)`;
  });
}

addImages(quantityOfImages);





// --------------------



const loadMoreBestButton = document.querySelector(".best-images-load-more");
const bestImagesLoader = document.querySelector(".best-images-loader");
const moreBestPics = document.querySelector(".best-images-section-layer-4"); // Update the selector

loadMoreBestButton.addEventListener("click", () => {
  loadMoreBestButton.classList.add("off");
  bestImagesLoader.classList.remove("off");

  setTimeout(() => {
    bestImagesLoader.classList.add("off");
    for (let i = 0; i < 3; i++) {
      const moreNewBestPicsItem = `
        <div class="best-images-image-item">
          <img src="./assets/best-images/${i + 1}.png" alt="" class="best-images-image">
          <a href="#">
            <div class="gallery-search-icon-wrapper">
              <img src="./assets/other/Search-icon-1.png" alt="" class="gallery-search-icon">
            </div>
          </a>
          <a href="#">
            <div class="gallery-zoom-icon-wrapper">
              <img src="./assets/other/zoom.png" alt="" class="gallery-zoom-icon">
            </div>
          </a>
        </div>
      `;
      moreBestPics.innerHTML += moreNewBestPicsItem;
    }
    setTimeout(() => {
      loadMoreBestButton.classList.remove("off");
    }, 2000);
  }, 2000);

  loadMoreBestButton.classList.add("hide");
});





// const categoriesNames = [
//   "Graphic Design",
//   "Web Design",
//   "Landing Pages",
//   "Wordpress"
// ]

// const workPicItemInner = document.createElement("div")
// workPicItem.appendChild(workPicItemInner)
// const workPicItemInnerSpan = document.createElement("span")
// workPicItemInnerSpan.classList.add("category")
// workPicItemInner.appendChild(workPicItemInnerSpan)

// const itemsCategorieNames = [...document.querySelectorAll("span.category")]
// console.log(itemsCategorieNames);

// itemsCategorieNames.forEach((item) => {
//   item.textContent = categoriesNames[Math.floor(Math.random() * categoriesNames.length)]
// })

// let allImages = {}

// itemsCategorieNames.forEach((item, i) => {
//   if (item.textContent === categoriesNames[0]) {
//     let computedStyle = window.getComputedStyle(startImages[i]);
//     let backgroundImage = computedStyle.getPropertyValue('background-image');
//     allImages[categoriesNames[0]] = [].push()
//   } else if (item.textContent === categoriesNames[1]) {
//     allImages[categoriesNames[1]] = [].push(item.textContent)
//   } else if (item.textContent === categoriesNames[2]) {
//     allImages[categoriesNames[2]] = [].push(item.textContent)
//   } else if (item.textContent === categoriesNames[3]) {
//     allImages[categoriesNames[3]] = [].push(item.textContent)
//   }
// })
// console.log(allImages);



// const obj = {
//   img: ["./images/our-amazing-work/landing-pages/landing-pages-6.jpg","./images/our-amazing-work/landing-pages/landing-pages-7.jpg"],
//   class: ["amazing-work-item", "amazing-work-item"],
//   data: ['amazing', 'amazing'],
//   name: ['Web Design']
// }
// obj.img.forEach(element, i, arr => {
//   i
// });
// const item = `
//            <li class=${obj.class[0]} class="amazing-work-item-none" data-amazing=${obj.data[i]}>
//                    <img src=${obj.img[0]} width="285" height="205" class="amazing-work-item-img">
//                    <section class="amazing-work-item-hover">
//                        <svg width="88" height="43" viewBox="0 0 88 43" fill="none">
//                            <rect x="1" y="2" width="41" height="40" rx="20" stroke="#18CFAB"/>
//                            <path fill-rule="evenodd" clip-rule="evenodd" d="M26.9131 17.7282L25.0948 15.8913C24.2902 15.0809 22.983 15.0759 22.1768 15.8826L20.1592 17.8926C19.3516 18.6989 19.3482 20.0103 20.1505 20.8207L21.3035 19.689C21.1868 19.3284 21.3304 18.9153 21.6159 18.6295L22.8995 17.3519C23.3061 16.9462 23.9584 16.9491 24.3595 17.3543L25.4513 18.458C25.8528 18.8628 25.8511 19.5171 25.447 19.9232L24.1634 21.2024C23.8918 21.473 23.4461 21.6217 23.1002 21.5263L21.9709 22.6589C22.7745 23.4718 24.0803 23.4747 24.8889 22.6684L26.9039 20.6592C27.7141 19.8525 27.7167 18.5398 26.9131 17.7282ZM19.5261 25.0918C19.6219 25.4441 19.4686 25.8997 19.1909 26.1777L17.9923 27.3752C17.5807 27.7845 16.916 27.7833 16.5067 27.369L15.393 26.2475C14.9847 25.8349 14.9873 25.1633 15.3982 24.7547L16.598 23.5577C16.8903 23.2661 17.3104 23.1202 17.6771 23.2438L18.8335 22.0715C18.0149 21.2462 16.6825 21.2421 15.8606 22.0632L13.9152 24.0042C13.0923 24.8266 13.0884 26.1629 13.9065 26.9886L15.7582 28.8618C16.576 29.6846 17.9072 29.6912 18.7311 28.8701L20.6765 26.9287C21.4985 26.1054 21.5024 24.7717 20.6855 23.9443L19.5261 25.0918ZM19.2579 24.5631C18.9801 24.8419 18.5343 24.8411 18.2618 24.5581C17.9879 24.2743 17.9901 23.8204 18.2661 23.5399L21.5907 20.1611C21.8668 19.8823 22.3117 19.8831 22.5851 20.164C22.8605 20.4457 22.8588 20.9009 22.5817 21.183L19.2579 24.5631Z" fill="#1FDAB5"/>
//                            <path fill-rule="evenodd" clip-rule="evenodd" d="M66.5973 1.99795C77.8653 1.99795 86.9999 10.9523 86.9999 21.9979C86.9999 33.0432 77.8653 41.9979 66.5973 41.9979C55.3292 41.9979 46.1946 33.0432 46.1946 21.9979C46.1946 10.9523 55.3292 1.99795 66.5973 1.99795Z" fill="#18CFAB"/>
//                            <rect x="60" y="17" width="12" height="11" fill="white"/>
//                        </svg>
//                        <h3 class="amazing-work-item-hover-header"><a href="#" class="color-ocean">creative design</a></h3>
//                        <p class="amazing-work-item-hover-singature"><a href="#" style="color: #8a8a8a;">${obj.name[i]}</a></p>
//                    </section>
//                </li>

// `



// console.log(element);
// console.log(computedStyle);
// console.log(backgroundImage);





// ---------------------------





// console.log();

// if (category.id === 1 || 3 || 7 || 8) {

// }





// ---------------------------





let slickCounter = 3

function clickChange(number) {
  const mySliders = document.querySelectorAll(".slick-slider-info")
  const mySliderItems = document.querySelectorAll(".slick-slider-item")
  if (number > mySliders.length) {
    slickCounter = 1
  }
  if (number < 1) {
    slickCounter = mySliders.length
  }
  let i
  for (i = 0; i < mySliders.length; i++) {
    mySliders[i].classList.add("no-active")
  }
  mySliders[slickCounter - 1].classList.remove("no-active")
  for (i = 0; i < mySliderItems.length; i++) {
    mySliderItems[i].classList.remove("slider-up")
  }
  mySliderItems[slickCounter - 1].classList.add("slider-up")
}

function sliderAdd() {
  clickChange(slickCounter += 1)
}

function sliderRemove() {
  clickChange(slickCounter -= 1)
}

function sliderPicturePick(number) {
  clickChange(slickCounter = number)
}
