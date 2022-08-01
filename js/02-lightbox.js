import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryEl = document.querySelector('.gallery');

const makeGalleryItemMarkup = galleryItems.map(({ description, original, preview }) => {
    return `<a class="gallery__item" href="${original}">
                <img class="gallery__image" src="${preview}" alt="${description}" />
            </a>`
}).join('');

galleryEl.insertAdjacentHTML('afterbegin', makeGalleryItemMarkup);

const simpleLightboxGallery = new SimpleLightbox('.gallery a', {
    caption: true,
    captionsData: 'alt',
    captionDelay: 250,
    captionClass: 'caption',
});