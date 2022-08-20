// Выполняй это задание в файлах 01-gallery.html и 01-gallery.js. Разбей его на несколько подзадач:

// Создание и рендер разметки по массиву данных galleryItems и предоставленному шаблону элемента галереи.
// Реализация делегирования на div.gallery и получение url большого изображения.
// Подключение скрипта и стилей библиотеки модального окна basicLightbox.
//  Используй CDN сервис jsdelivr и добавь в проект ссылки на минифицированные(.min) файлы библиотеки.
// Открытие модального окна по клику на элементе галереи. Для этого ознакомься с документацией и примерами.
// Замена значения атрибута src элемента <img> в модальном окне перед открытием.
//  Используй готовую разметку модального окна с изображением из примеров библиотеки basicLightbox.
// Разметка элемента галереи
// Ссылка на оригинальное изображение должна храниться в data-атрибуте source на элементе <img>, и указываться в href ссылки.
//  Не добавляй другие HTML теги или CSS классы кроме тех, что есть в этом шаблоне.


// Обрати внимание на то, что изображение обернуто в ссылку, а значит при клике по умолчанию пользователь будет перенаправлен на другую страницу.
//  Запрети это поведение по умолчанию.
// Закрытие с клавиатуры
// ВНИМАНИЕ
// Этот функционал не обязателен при сдаче задания, но будет хорошей дополнительной практикой.

// Добавь закрытие модального окна по нажатию клавиши Escape. Сделай так, чтобы прослушивание клавиатуры было только пока открыто модальное окно.
//  У библиотеки basicLightbox есть метод для программного закрытия модального окна.

import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryRef = document.querySelector('.gallery');
const galleryMarkup = createGalleryItems(galleryItems);

galleryRef.insertAdjacentHTML('beforeend', galleryMarkup);
galleryRef.addEventListener('click', onGalleryClick);

let clickImg = basicLightbox.create(`<img src="" width="800" height="600">`)


function createGalleryItems(galleryItems) {
    return galleryItems.map(({ preview, original, description }) => {
        return `<a class="gallery__link" href="${original}">
         <img
         class="gallery__image"
         src="${preview}"
         data-source="${original}"
         alt="${description}"
         />
         </a>
         </div>`
    }).join('');
}

function onGalleryClick(e) {
    e.preventDefault();
    if (!e.target.classList.contains('gallery__image')) {
        return;
    }
    modalShow(e);
}

function modalShow(e) {
  // .element()Returns the DOM element/node associated with the instance.
// Example:
// const elem = instance.element()
const createElementSrc = clickImg.element().querySelector('img').src = e.target.dataset.source;
clickImg.show(createElementSrc);


document.addEventListener('keydown', keyBoardPress)

function keyBoardPress(e) {
    if (e.code === 'Escape') {
        clickImg.close();
        document.removeEventListener('keydown', keyBoardPress)
    }
}
}
console.log(galleryItems);