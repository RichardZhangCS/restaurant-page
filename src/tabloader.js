import css from "./style.css"

function loadTabs() {
    const header = document.createElement('header');

    const restaurantHeader = document.createElement('h1');
    restaurantHeader.textContent = `Ling Ling's Sichuan`;
    header.appendChild(restaurantHeader);

    // Building the navigation Bar
    const navBar = document.createElement('nav');
    const ul = document.createElement('ul');
    ul.classList.add('tab-list');
    let [homeTab, menuTab, contactTab] = [document.createElement('li'),
            document.createElement('li'), document.createElement('li')];
    let tabArray = [homeTab, menuTab, contactTab]
    homeTab.classList.add('home');
    
    homeTab.textContent = 'Home';
    menuTab.classList.add('menu');
    menuTab.textContent = 'Menu';
    contactTab.classList.add('contact');
    contactTab.textContent = 'Contact'

    for (let tab of tabArray) {
        tab.classList.add('tab');
        ul.appendChild(tab);
    }

    navBar.appendChild(ul);

    header.appendChild(navBar);

    document.body.insertBefore(header, document.body.firstChild);

    return tabArray;

}

export {loadTabs}