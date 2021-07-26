import css from "./style.css"
import ChefPicture from './chinese_chef.jpg'
import ChefPicture2 from './chinese_chef_2.jpg'

function duplicateFigure(figure, picture, captionText) {
    let newFigure = figure.cloneNode(true);
    newFigure.querySelector('.chef-picture').src = picture;
    newFigure.querySelector('.caption').textContent = captionText;
    return newFigure;
}

function loadHomePage() {
    const contentContainer = document.querySelector('div#content');

    const homePage = document.createElement('div');
    homePage.classList.add('homepage');


    const hoursBox = document.createElement('div');

    const hoursTitle = document.createElement('h2');
    hoursTitle.textContent = 'Hours';
    hoursTitle.classList.add('hours-text');
    hoursBox.append(hoursTitle);

    const daysHours = {'Monday':'3pm - 10pm', 'Tuesday':'3pm - 10pm', 'Wednesday':'3pm - 10pm', 
            'Thursday':'3pm - 10pm', 'Friday':'3pm - 11pm',
            'Saturday':'10am - 11pm', 'Sunday':'10am - 10pm'};

    for (let day in daysHours) {
        const hourLine = document.createElement('p');
        hourLine.classList.add('hour-line');
        hourLine.textContent = `${day}: ${daysHours[day]}`;
        hoursBox.appendChild(hourLine);
    }

    const quoteBox = document.createElement('div');
    quoteBox.classList.add('quote-box');
    const quoteBody = document.createElement('p');
    quoteBody.classList.add('quote-text');
    quoteBody.textContent = `"Chef Zhang's dishes are full of flavor and finesse. Definitely the best 
    Chinese restaurant in the US."`;
    quoteBox.appendChild(quoteBody);
    const quoteAuthor = document.createElement('p');
    quoteAuthor.classList.add('quote-text');
    quoteAuthor.classList.add('quote-text-author');
    quoteAuthor.textContent = `Gordan Ramsay`;
    quoteBox.appendChild(quoteAuthor);

    const chefFigure = document.createElement('div');

    const chefPicture = document.createElement('img');
    chefPicture.classList.add('chef-picture');
    chefPicture.src = ChefPicture;

    const chefPictureCaption = document.createElement('p');
    chefPictureCaption.classList.add('caption');
    chefPictureCaption.textContent = 'Executive Chef Daniel Zhang';

    chefFigure.appendChild(chefPicture);
    chefFigure.appendChild(chefPictureCaption);

    const chefFigure2 = duplicateFigure(chefFigure, ChefPicture2, 'Sous Chef Richard Martin');

    homePage.appendChild(quoteBox);
    homePage.appendChild(chefFigure);
    homePage.appendChild(chefFigure2);

    homePage.appendChild(hoursBox);

    contentContainer.append(homePage);
}

function removeAllTabActivation(tabList) {
    for (let tab of tabList) {
        tab.classList.remove('active');
    }
}

export {loadHomePage, removeAllTabActivation}