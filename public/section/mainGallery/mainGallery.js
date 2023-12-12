import './mainGallery.css';

const mainGallery = (apiData) => {
  const section = document.querySelector('.section');
  const galleryDiv = document.createElement('div');
  galleryDiv.className = 'gallery_div';

  for (const key in apiData.results) {
    section.innerHTML = '';
    const photoObject = apiData.results[key];
    const photoImg = document.createElement('img');
    photoImg.className = 'one_photo';
    photoImg.alt = photoObject.alt_description;
    photoImg.src = photoObject.urls.regular;
    galleryDiv.appendChild(photoImg);
  }

  section.appendChild(galleryDiv);

  return section;
};

export default mainGallery;
