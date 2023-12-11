import './mainGallery.css';

import { apiCall } from '../../../functions/apiCall';
apiCall();

const mainGallery = (data) => {
  const galleryDiv = document.createElement('div');
  galleryDiv.className = 'gallery_div';

  for (const key in data) {
    const galleryDiv = document.querySelector('.gallery_div');
    const photoObject = data[key];
    const photoImg = document.createElement('img');
    photoImg.className = 'one_photo';
    photoImg.alt = photoObject.alt_description;
    photoImg.src = photoObject.urls.regular;
    galleryDiv.appendChild(photoImg);
  }

  return galleryDiv;
};

export default mainGallery;
