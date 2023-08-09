// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const refs = { imageList: document.querySelector('ul.gallery') };

function createGalleryCard({ preview, original, description }) {
  return`
<li class="gallery_item">
   <a class="gallery_link" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}" />
   </a>
</li>`;
}

function createGalleryList(Items) {
  refs.imageList.innerHTML = Items.map(item => createGalleryCard(item)).join(
    ''
  );
}

createGalleryList(galleryItems);

let lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250
});