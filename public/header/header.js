import nav from './nav/nav';

const header = () => {
  const header = document.createElement('header');
  header.className = 'header';

  const navbar = nav();
  header.appendChild(navbar);

  return header;
};

export default header;
