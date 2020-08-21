// Search 
const jsSearchClick = document.querySelector('.js-search'),
      headerTopSearch = document.querySelector('.header__top-search');

const jsCollectionClick = document.querySelector('.js-collection'),
      headerTopCollection = document.querySelector('.header__top-collection');

function jsSearchClickShow() {

  if (headerTopSearch.classList.contains('header__top-search-active')) {
    headerTopSearch.classList.remove('header__top-search-active');
  } else {
    headerTopSearch.classList.add('header__top-search-active');
  }
  
}

function jsCollectionClickShow() {

  if (headerTopCollection.classList.contains('header__top-collection-active')) {
    headerTopCollection.classList.remove('header__top-collection-active');
  } else {
    headerTopCollection.classList.add('header__top-collection-active');
  }

}

jsSearchClick.addEventListener('click', jsSearchClickShow);
jsCollectionClick.addEventListener('click', jsCollectionClickShow);




// Tabs showcase
const jsShowcaseMenuText = document.querySelectorAll('.js--showcase__menu-text')
      jsProductWrap = document.querySelectorAll('.js--product__wrap');

function menuList() {

  for (let i = 0; i < jsShowcaseMenuText.length; i++) {
    const element = jsShowcaseMenuText[i];
  
    element.addEventListener('click', function(item) {
  
      for (let j = 0; j < jsShowcaseMenuText.length; j++) {
        const elem = jsShowcaseMenuText[j];
        elem.classList.remove('showcase__menu-text-active');
      }
      
      element.classList.add('showcase__menu-text-active');
      
    })

  }
}

menuList();

for (let i = 0; i < jsShowcaseMenuText.length; i++) { 
  
  jsShowcaseMenuText[i].addEventListener('click', function(item) {
    
    let listItemClick = item.target.dataset.menu;
    
    for (let y = 0; y < jsProductWrap.length; y++) {

      jsProductWrap[y].classList.remove('showcase__wrap-active');

      if (listItemClick == jsProductWrap[y].dataset.content) {
        jsProductWrap[y].classList.add('showcase__wrap-active');
      }
    }
  });
}