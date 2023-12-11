import './navigateLogos.css';

const navigateLogos = () => {
  const divNavLogos = document.createElement('div');
  divNavLogos.className = 'div_nav_logos';

  const bellLogo = document.createElement('img');
  bellLogo.className = 'bell_logo';
  bellLogo.alt = 'bell_logo';
  bellLogo.src = '../../../../../assets/bell.png';

  const chatLogo = document.createElement('img');
  chatLogo.className = 'bell_logo';
  chatLogo.alt = 'chat_logo';
  chatLogo.src = '../../../../../assets/bubble_chat.png';

  const userLogo = document.createElement('img');
  userLogo.className = 'bell_logo';
  userLogo.alt = 'user_logo';
  userLogo.src = '../../../../../assets/user_logo.png';

  divNavLogos.appendChild(bellLogo);
  divNavLogos.appendChild(chatLogo);
  divNavLogos.appendChild(userLogo);

  return divNavLogos;
};

export default navigateLogos;
