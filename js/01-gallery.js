import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const fatherImages = document.querySelector(".gallery");
const imgMarkUp = createImagesCards(galleryItems);

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

fatherImages.insertAdjacentHTML("afterbegin", imgMarkUp);

fatherImages.addEventListener("click", openImgs);

function openImgs(event) {
  event.preventDefault();

  const imgValue = event.target.dataset.source;
  const nodeNameImg = event.target.nodeName;
  const alt = event.target.alt;

  if (nodeNameImg !== "IMG") {
    return;
  }

  const image = basicLightbox.create(
    `
      <img src="${imgValue}" alt ="${alt}" width="800" height="600" />
    `,
    {
      onShow: (image) => window.addEventListener("keydown", closeModal),
      onClose: (image) => window.removeEventListener("keydown", closeModal),
    }
  );
  image.show();

  closeModal();
}

function closeModal() {
  image.close();
}
