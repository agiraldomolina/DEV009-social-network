import { onAuthStateChanged, auth } from '../firebase/initializeFirebase';

function welcome(navigateTo) {
  const section = document.createElement('section');
  section.classList.add('welcome-component');
  section.innerHTML = `
    <form class="welcome-view">
      <header class="logo">
        <img class="logo" src="./img/logo.png" alt="Logo">
      </header>
      <h2>Welcome</h2>
      <p>We've sent you an email, please check your inbox</p>
      <button type="submit" class="button-welcome">Take me to login</button>
      <div class="overlay-image"></div>
    </form>
  `;

  const formWelcome = section.querySelector('.welcome-view');
  formWelcome.addEventListener('submit', (e) => {
    e.preventDefault();
    navigateTo('/login');
  });
  return section;
}
export default welcome;
