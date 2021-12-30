import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryContainer = document.querySelector(".gallery");
const photosMarkup = createPhotosMarkup(galleryItems);
galleryContainer.insertAdjacentHTML("beforeend", photosMarkup);

function createPhotosMarkup(galleryItems) {
  const markup = galleryItems.map(({ preview, original, description }) => {
    return `
<div class="gallery__item">
<a class="gallery__link" href ="${original}">
<img class="gallery__image"
src = "${preview}"
data-source = "${original}"
alt="${description}"
/>
   </a>
</div>
`;
  });

  return markup.join("");
}
galleryContainer.addEventListener("click", onPhotoClick);
let bigImg = 0;
function onPhotoClick(evt) {
  evt.preventDefault();
  if (!evt.target.classList.contains("gallery__image")) {
    return;
  }
  bigImg = basicLightbox.create(`
    <img src="${evt.target.dataset.source}" width="800" height="600">
    `);
  bigImg.show();
}

document.addEventListener("keydown", (evt) => {
  if (evt.code === "Escape") {
    bigImg.close();
  }
});
