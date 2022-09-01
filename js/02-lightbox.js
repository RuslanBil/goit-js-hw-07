import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const Refs = {
  gallery: document.querySelector('.gallery'),
};
const galleryDiv = galleryItems
  .map(({ preview, original, description }) => {
    return `<div class="gallery__item"><a class="gallery__link" href="${original}"><img class="gallery__image"
  src='${preview}'
  data-source='${original}'
  alt='${description}'></a></div>`;
  })
  .join('');
Refs.gallery.innerHTML = galleryDiv;
var lightbox = new SimpleLightbox('.gallery a', {
  widthRatio: 0.8,
  heightRatio: 0.8,
  captionsData: 'alt',
  captionDelay: 250,
});
// galleryRef.classList.add('.gallery__item');
// const createMarkUp = createImages(galleryItems);
// galleryRef.insertAdjacentHTML('afterbegin', createMarkUp);
// function createImages(galleryItems) {
//   return galleryItems.reduce(
//     (acc, galleryItem) => (acc += createMarkup(galleryItem)),
//     ' ',
//   );
// }
// function createMarkup({ preview, original, description }) {
//   const itemList = `<a class="gallery__item" href=${original}><img class="gallery__image"
//   src='${preview}'
//   data-source='${original}'
//   alt='${description}'></a>`;
//   return itemList;
// }

// galleryRef.addEventListener('click', e => {
//   e.preventDefault();
//   if (e.target.nodeName !== 'IMG') {
//     return;
//   }
// });
// var lightbox = new SimpleLightbox('.gallery a', {
//   widthRatio: 0.8,
//   heightRatio: 0.8,
//   captionsData: 'alt',
//   captionDelay: 250,
// });

// lightbox.on('show.simpleLightbox');
console.log(galleryItems);
