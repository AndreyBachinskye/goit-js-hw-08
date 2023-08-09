import throttle from 'lodash.throttle';
const LOCALSTORAGE_KEY = 'feedback-form-state';
const refs = {
  form: document.querySelector('form.feedback-form'),
};

let formData = {};

function onSubmit(event) {
  event.preventDefault();
  const {
    elements: { email, message },
  } = event.currentTarget;
  if (email.value === '' || message.value === '') {
    return alert('Please fill in all the fields!');
  }
  console.log({ email: email.value, message: message.value });
  event.currentTarget.reset();
  localStorage.removeItem(LOCALSTORAGE_KEY);
}
function onInput(event) {
  formData[event.target.name] = event.target.value;
  localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(formData));
}

const formDataStr = localStorage.getItem(LOCALSTORAGE_KEY);
if (formDataStr) {
  formData = JSON.parse(formDataStr);
  for (let key in formData) {
    refs.form[key].value = formData[key];
  }
}

refs.form.addEventListener('submit', onSubmit);
refs.form.addEventListener('input', throttle(onInput, 500));