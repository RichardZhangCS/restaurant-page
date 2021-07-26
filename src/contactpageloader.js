import css from "./style.css"
import Map from "./map.png"

function loadContactPage() {
    const contentContainer = document.querySelector('div#content');

    const contactPage = document.createElement('div');
    contactPage.classList.add('contact-page');

    const phoneNumberBox = document.createElement('div');
    const phoneNumber = document.createElement('p');
    phoneNumber.textContent = 'Phone Number: (281) 665-7117'
    phoneNumber.classList.add('phone-number-text');
    phoneNumberBox.appendChild(phoneNumber);
    phoneNumberBox.classList.add('phone-number-box');
    
    const locationBox = document.createElement('div');

    const locationAddress = document.createElement('p');
    locationAddress.textContent = 'Address: 5929 FM 1463 #140, Katy, TX 77494'
    locationAddress.classList.add('location-address');

    const locationPicture = document.createElement('img');
    locationPicture.src = Map;
    locationPicture.classList.add('location-picture');

    locationBox.appendChild(locationAddress);
    locationBox.appendChild(locationPicture);
    locationBox.classList.add('location-box');

    contactPage.appendChild(phoneNumberBox);
    contactPage.appendChild(locationBox);
    

    contentContainer.appendChild(contactPage);
}

export {loadContactPage};