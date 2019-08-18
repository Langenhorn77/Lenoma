var buttonMenu = document.querySelector('.page-header__menu-button');
var buttonCatalog = document.querySelector('.page-header__catalog-button');

var navMain = document.querySelector('.page-header__menu');
var navCatalog = document.querySelector('.page-header__catalog-list');


navMain.classList.add('page-header__menu--closed');
navCatalog.classList.add('page-header__catalog-list--closed');

buttonMenu.addEventListener('click', function () {
  navMain.classList.toggle('page-header__menu--closed');
});

buttonCatalog.addEventListener('click', function () {
  navCatalog.classList.toggle('page-header__catalog-list--closed');
});
