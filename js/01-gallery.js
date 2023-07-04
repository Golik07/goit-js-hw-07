import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const fatherImages = document.querySelector(".gallery");
const imgMarkUp = createImagesCards(galleryItems);

fatherImages.insertAdjacentHTML("afterbegin", imgMarkUp);

fatherImages.addEventListener("click", openImgs);

function openImgs(event) {
  event.preventDefault();
  const imgValue = event.target.dataset.source;
  const nodeNameImg = event.target.nodeName;

  if (nodeNameImg !== "IMG") {
    return;
  }
  const instance = basicLightbox.create(`
      <img src="${imgValue}" width="800" height="600">
  `);
  instance.show();

  window.addEventListener("keydown", (event) => {
    if (event.code === "Escape") {
      instance.close();
    }
  });
}

function createImagesCards(imgs) {
  return imgs
    .map(({ preview, original, description }) => {
      return `
   <li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>
    `;
    })
    .join("");
}
