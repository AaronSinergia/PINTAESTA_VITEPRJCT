import './pintaesta.css';

const pintaesta = () => {
  const pintaestaLogo = document.createElement('img');
  pintaestaLogo.className = 'pintaesta_logo';
  pintaestaLogo.alt = 'pintaesta_logo';
  pintaestaLogo.src = '../../../assets/img/Pinterest-logo.png';

  return pintaestaLogo;
};

export default pintaesta;
