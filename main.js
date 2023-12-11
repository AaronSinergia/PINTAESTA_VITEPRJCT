import footer from './public/footer/footer';
import header from './public/header/header';
import section from './public/section/section';
import './style.css';

const body = () => {
  const app = document.querySelector('#app');
  const headerElements = header();
  const sectionElements = section();
  const footerElements = footer();

  app.appendChild(headerElements);
  app.appendChild(sectionElements);
  app.appendChild(footerElements);
};

body();
