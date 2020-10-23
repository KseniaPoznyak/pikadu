// Создаем переменную, в которую положеи кнопку меню
let menuToggle = document.querySelector('#menu-toggle');
// Создаем переменную, в которую положим меню
let menu = document.querySelector('.sidebar');
// Отследиваем клик по кнопке меню и запускаем функцию
menuToggle.addEventListener('click', function (event){
// Отменяем стандартное поведение ссылки
  event.preventDefault();
// Вешаем класс на меню, когда кликнули по кнопке меню
  menu.classList.toggle('visible');
})