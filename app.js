const thumbnailsContainer = document.querySelector(".thumbnails");
const bigDisplay = document.getElementById("bigDisplay");
//index main pictere
let index = 0;
//my images set
const images = [
  {
    src: "img/accordion.jpg",
    alt: "Persone play accordion",
    srcset: ` img/accordion-small.jpg 400w,
    img/accordion-medium.jpg 800w,
    img/accordion-large.jpg 1200w `,
  },
  {
    src: "img/acoustic-guitar.jpg",
    alt: "Persone play acoustic guitar",
    srcset: ` img/acoustic-guitar-small.jpg 400w,
    img/accordion-medium.jpg 800w,
    img/accordion-large.jpg 1200w `,
  },
  {
    src: "img/drums.jpg",
    alt: "Drums",
    srcset: ` img/drums-small.jpg 400w,
    img/accordion-medium.jpg 800w,
    img/accordion-large.jpg 1200w `,
  },
  {
    src: "img/electric-guitar.jpg",
    alt: "Electric guitar on the bedspread",
    srcset: ` img/electric-guitar-small.jpg 400w,
    img/accordion-medium.jpg 800w,
    img/accordion-large.jpg 1200w `,
  },
  {
    src: "img/piano.jpg",
    alt: "Piano",
    srcset: ` img/piano-small.jpg 400w,
    img/accordion-medium.jpg 800w,
    img/accordion-large.jpg 1200w `,
  },
  {
    src: "img/violin.jpg",
    alt: "Persone play violin",
    srcset: ` img/violin-small.jpg 400w,
    img/accordion-medium.jpg 800w,
    img/accordion-large.jpg 1200w `,
  },
];

function createThumbnails() {
  for (let i = 0; i < images.length; i++) {
    const imgElemen = document.createElement("img");
    imgElemen.id = i;
    imgElemen.src = images[i].src;
    imgElemen.alt = images[i].alt;

    imgElemen.addEventListener("click", function () {
      index = i;
      console.log(images[i]);
      createBigImage(images[i]);
    });

    thumbnailsContainer.append(imgElemen);
  }
}

createThumbnails();

function createBigImage(imageData) {
  // clear the big Diplsay
  bigDisplay.innerHTML = "";
  // make an image tag
  const bigImage = document.createElement("img");

  bigImage.src = imageData.src;
  bigImage.alt = imageData.alt;

  bigDisplay.append(bigImage);
}

// switch images next
document.getElementById("nextBtn").addEventListener("click", () => {
  index = (index + 1) % images.length;
  //updateImage();
  createBigImage(images[index]);

  console.log(index);
});

// switch images previous
document.getElementById("prevBtn").addEventListener("click", () => {
  index = (index - 1 + images.length) % images.length;
  createBigImage(images[index]);
  //   document.getElementById(index).focus();
  //   console.log(index);
});

// Keyboard arrow keys to switch between images
document.addEventListener("keydown", (e) => {
  if (e.key === "ArrowRight") {
    index = (index + 1) % images.length;
    createBigImage(images[index]);
  }
  if (e.key === "ArrowLeft") {
    index = (index - 1 + images.length) % images.length;
    createBigImage(images[index]);
  }
});
