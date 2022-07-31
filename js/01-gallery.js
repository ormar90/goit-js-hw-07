import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryEl = document.querySelector('.gallery');

const makeGalleryItemMarkup = galleryItems.map(({ description, original, preview }) => {
    return `<div class="gallery__item">
                <a class="gallery__link" href="${original}">
                    <img
                    class="gallery__image"
                    src="${preview}"
                    data-source="${original}"
                    alt="${description}"
                    />
                </a>
            </div>`
}).join('');

galleryEl.insertAdjacentHTML('afterbegin', makeGalleryItemMarkup);

galleryEl.addEventListener('click', onClickImg);

function onClickImg(e) {
    e.preventDefault();
    if (!e.target.dataset.source) {
        return;
    }
    
    const instance = basicLightbox.create(`<img src = "${e.target.dataset.source}">`, {
        onShow: (instance) => {
            window.addEventListener('keydown', onKlickEscape);
            // console.log('onShow', instance)
        },
        onClose: (instance) => {
            window.removeEventListener('keydown', onKlickEscape);
            // console.log('onClose', instance)
        }
    });
        instance.show();

    function onKlickEscape(e) {
        instance.close();
    }
}


