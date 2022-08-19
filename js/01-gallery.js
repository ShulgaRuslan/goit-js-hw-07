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
const gallery = document.querySelector('.gallery');
gallery.insertAdjacentHTML('beforeend', galleryCreate(galleryItems));


function galleryCreate() {
    return galleryItems
        .map(({ preview, original, description }) => {
        return `<div class="gallery__item">
  <a class="gallery__link" href="${original.value}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`;
            
    }).join('');
};
const clickImage = (evt) => {
    evt.preventDefault();

    if (evt.target.classList.contains('gallery')) return;
    const source = evt.target.dataset.source;

    const instance = basicLightbox.create(`<img src="${source}" width="800" heigth="600">`,
        {
        onShow: instance => {
          document.addEventListener('keydown', onEscapeBtn);
        },
        onClose: instance => {
          document.removeEventListener('keydown', onEscapeBtn);
        }
        }
    )
    
    instance.show();  

    function onEscapeBtn(evt) {
    if (evt.code === 'Escape') instance.close()
    }
}

gallery.addEventListener('click', clickImage)

console.log(galleryItems);