import {loadHomePage, removeAllTabActivation} from './homepageloader.js'
import {loadTabs} from './tabloader.js'
import {loadMenuPage} from './menupageloader.js'
import {loadContactPage} from './contactpageloader.js'
let currentPage = '';

let [homeTab, menuTab, contactTab] = loadTabs();
let tabList = [homeTab, menuTab, contactTab];

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

function loadPage(page) {
    if (currentPage == page) return;
    removeAllTabActivation(tabList);
    this.classList.add('active');
    removeAllChildNodes(document.querySelector('div#content'));
    switch(page) {
        case 'home':
            loadHomePage();
            break;
        case 'menu':
            loadMenuPage();
            break;
        case 'contact':
            loadContactPage();
            break;
    }
    currentPage = page;
}



homeTab.addEventListener('click', ()=>{
    loadPage.bind(homeTab)('home');  
});
menuTab.addEventListener('click', ()=>{
    loadPage.bind(menuTab)('menu');  
});
contactTab.addEventListener('click', ()=>{
    loadPage.bind(contactTab)('contact');  
});
loadPage.bind(homeTab)('home');
