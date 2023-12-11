import mainGallery from './mainGallery/mainGallery';

const section = () => {
  const section = document.createElement('section');
  section.className = 'section';

  const gallery = mainGallery();

  section.appendChild(gallery);

  return section;
};

export default section;
