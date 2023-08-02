import { registerUser } from '../lib/index';

function register(navigateTo) {
  const section = document.createElement('section');
  const formRegister = document.createElement('form');
  const header = document.createElement('header');
  const logo = document.createElement('img');
  const title = document.createElement('h2');
  const message = document.createElement('p');
  const buttonRegister = document.createElement('button');
  const buttonLogin = document.createElement('button');
  const inputEmail = document.createElement('input');
  const inputPass = document.createElement('input');
  const inputUserName = document.createElement('input');
  const inputName = document.createElement('input');
  const inputConfirmPass = document.createElement('input');
  const containerModal = document.createElement('div');
  const windowModalError = document.createElement('div');
  const messageModal = document.createElement('p');
  const closeModal = document.createElement('span');

  inputEmail.type = 'email';
  inputPass.type = 'password';
  inputUserName.type = 'text';
  inputUserName.minLength = '2';
  inputName.type = 'text';
  inputName.minLength = '2';
  inputConfirmPass.type = 'password';
  buttonRegister.type = 'submit';

  inputName.placeholder = 'Name';
  inputUserName.placeholder = 'Username';
  inputEmail.placeholder = 'Email';
  inputPass.placeholder = 'Password';
  inputConfirmPass.placeholder = 'Confirm Password';

  title.textContent = 'Create account';
  message.textContent = 'Already have an account?';
  buttonLogin.textContent = 'Sign In';
  buttonRegister.textContent = 'Sign Up';
  messageModal.textContent = 'Passwords don\'t match';

  closeModal.setAttribute('href', '#/register');
  closeModal.innerHTML = '<i class="fa-solid fa-circle-xmark"></i>';

  formRegister.classList.add('login-view');
  header.classList.add('logo');
  logo.classList.add('logo');
  logo.setAttribute('src', './img/logo.png');
  buttonRegister.classList.add('button-input');
  buttonLogin.classList.add('no-button');
  inputName.classList.add('input');
  inputUserName.classList.add('input');
  inputEmail.classList.add('input');
  inputPass.classList.add('input');
  inputConfirmPass.classList.add('input');
  windowModalError.classList.add('modal-content');
  containerModal.classList.add('modal');
  closeModal.classList.add('close');

  buttonLogin.addEventListener('click', () => {
    navigateTo('/login');
  });

  windowModalError.append(closeModal, messageModal);
  containerModal.append(windowModalError);

  header.appendChild(logo);
  formRegister.append(header, title, inputUserName, inputName, inputEmail, inputPass);
  formRegister.append(inputConfirmPass, buttonRegister, message, buttonLogin);
  section.append(formRegister, containerModal);

  formRegister.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = inputName.value;
    const userName = inputUserName.value;
    const email = inputEmail.value;
    const password = inputPass.value;
    const confirmPass = inputConfirmPass.value;
    if (confirmPass === password) {
      registerUser(name, userName, email, password);
      navigateTo('/welcome');
    } else {
      containerModal.style.display = 'block';
    }
  });

  closeModal.addEventListener('click', () => {
    containerModal.style.display = 'none';
  });
  return section;
}

export default register;
