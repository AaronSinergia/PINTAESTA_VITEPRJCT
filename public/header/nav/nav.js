import inputSearch from './inputSearch/inputSearch';
import navigateLogos from './logos/navigateLogos/navigateLogos';
import pintaesta from './logos/pintaesta';
import './nav.css';

const nav = () => {
  const navbar = document.createElement('nav');
  navbar.className = 'navbar';

  const logo = pintaesta();
  const input = inputSearch();
  const navLogos = navigateLogos();

  navbar.appendChild(logo);
  navbar.appendChild(input);
  navbar.appendChild(navLogos);

  return navbar;
};

export default nav;
