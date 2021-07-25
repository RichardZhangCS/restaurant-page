import css from "./style.css"
import MapoDofu from './food-pictures/mapo tofu.jpg'
import ChongqingChicken from './food-pictures/chongqing chicken.jpg'
import ColdDicedRabbit from './food-pictures/cold diced rabbit.jpg'
import DanDanMian from './food-pictures/dan dan mian.jpg'
import FuqiFeipian from './food-pictures/fuqi feipian.jpg'
import SpicyMungBeanJelly from './food-pictures/spicy mung bean jelly.jpg'
import TwiceCookedPork from './food-pictures/twice cooked pork.jpg'
import WaterBoiledFish from './food-pictures/water boiled fish.jpg'

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

function createMenuEntry(dishName, dishPrice, dishImage) {
    const menuEntry = document.createElement('div');
    menuEntry.classList.add('menu-entry');

    const menuItemName = document.createElement('p');
    menuItemName.classList.add('menu-item-name');
    menuItemName.textContent = dishName;
    menuEntry.appendChild(menuItemName);

    const menuItemPrice = document.createElement('p');
    menuItemPrice.classList.add('menu-item-price');
    menuItemPrice.textContent = dishPrice;
    menuEntry.appendChild(menuItemPrice);

    const menuItemPicture = document.createElement('img');
    menuItemPicture.classList.add('menu-item-image');

    menuItemPicture.src = dishImage;
    menuEntry.append(menuItemPicture);

    return menuEntry;
}

function loadMenuPage() {
    const contentContainer = document.querySelector('div#content');
    removeAllChildNodes(contentContainer);

    const menuPage = document.createElement('div');
    menuPage.classList.add('menu-page');

    const menuColumn = document.createElement('div');
    menuColumn.classList.add('menu-column');

    const menuItems = {
        "Mapo Dofu": ["6.99", MapoDofu],
        "Fuqi Feipian": ["7.99", FuqiFeipian],
        "Chongqing Spicy Chicken": ["10.99", ChongqingChicken],
        "Cold Diced Chili Rabbit": ["11.99", ColdDicedRabbit],
        "Spicy Mung Bean Jelly": ["5.99", SpicyMungBeanJelly],
        "Dan Dan Mian": ["6.99", DanDanMian],
        "Water Boiled Fish": ["8.99", WaterBoiledFish],
        "Twice Cooked Pork Belly": ["10.99", TwiceCookedPork]
    };

    for (let menuItem in menuItems){
        const menuEntry = createMenuEntry(menuItem, menuItems[menuItem][0], menuItems[menuItem][1]);

        menuColumn.appendChild(menuEntry);
    }

   
    menuPage.appendChild(menuColumn);
    contentContainer.appendChild(menuPage);
    
}

export {loadMenuPage};