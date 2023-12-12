import './pintaesta.css';

const pintaesta = () => {
  const logoUrl = document.createElement('a');
  logoUrl.href = '';
  const pintaestaLogo = document.createElement('img');
  pintaestaLogo.className = 'pintaesta_logo';
  pintaestaLogo.alt = 'pintaesta_logo';
  pintaestaLogo.src = '../assets/img/Pinterest-logo.png';

  logoUrl.appendChild(pintaestaLogo);

  return logoUrl;
};

export default pintaesta;
