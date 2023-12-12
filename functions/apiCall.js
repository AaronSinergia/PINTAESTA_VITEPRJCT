import mainGallery from '../public/section/mainGallery/mainGallery';

export const apiCall = (word) => {
  const unsplash = 'https://api.unsplash.com/search/photos/?client_id=';
  const unsplashKey = '9xmBSdeEH9FRrkNcH13neTnaxKsaPGhfPwEyR32jTLE';
  const valorSearched = '&query=';

  const searchUrl = unsplash + unsplashKey + valorSearched + word;

  fetch(searchUrl)
    .then((response) => {
      if (!response.ok) {
        throw new Error('La consulta no es válida');
      }
      return response.json();
    })
    .then((data) => {
      mainGallery(data);
    })
    .catch((error) => {
      console.log('Error en la llamada realizada a la API:', error);
    });
};
