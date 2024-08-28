// validator normal não recebe ts de inicio para isso
// npm i @types/validator
import isEmail from "validator/lib/isEmail";

const SHOW_ERROR_MESSAGES = 'show-error-message';

const form = document.querySelector('.form') as HTMLFormElement;
const username = document.querySelector('.username') as HTMLInputElement;
const email = document.querySelector('.email') as HTMLInputElement;
const password = document.querySelector('.password') as HTMLInputElement;
const password2 = document.querySelector('.password2') as HTMLInputElement;

form.addEventListener('submit', (event: Event) => { // da erro porque a arrow function captura o this do escopo global
  event.preventDefault();
  const target = event.target as HTMLFormElement; // forçando o target virar form element
  hideErrorMessages(target); // target = form
  checkForEmptyFields(username,email,password,password2);
  checkEmail(email);
  checkEqualsPasswords(password,password2);
  if(sholdSendForm(target)) console.log('form enviado com sucesso');
});

function checkEqualsPasswords(password:HTMLInputElement,password2:HTMLInputElement) {
  if (password.value !== password2.value) {
    showErrorMessage(password2, 'Senhas com valores diferentes');
    showErrorMessage(password, 'Senhas com valores diferentes');
  }
}

function checkForEmptyFields(...inputs: HTMLInputElement[]): void {
  inputs.forEach((input) => {
    if (!input.value) showErrorMessage(input, 'Campo não pode estar vazio');
  });
}

function checkEmail(input: HTMLInputElement): void {
  if (!isEmail(input.value)) showErrorMessage(input, 'Email inválido');
}

function hideErrorMessages(form: HTMLFormElement): void {
  form
    .querySelectorAll(`.${SHOW_ERROR_MESSAGES}`)
    .forEach((item) => item.classList.remove(SHOW_ERROR_MESSAGES));
}

function showErrorMessage(input:HTMLInputElement, msg: string): void {
  const formFields = input.parentElement as HTMLDivElement;
  const errorMessage = formFields.querySelector('.error-message') as HTMLSpanElement;

  errorMessage.innerText = msg;
  formFields.classList.add(SHOW_ERROR_MESSAGES);
}

function sholdSendForm(form: HTMLFormElement): boolean {
  let send = true;
  form.querySelectorAll(`.${SHOW_ERROR_MESSAGES}`).forEach(el => (send = false));
  return send;
}
