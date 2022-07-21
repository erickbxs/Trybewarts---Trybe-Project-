const btnSend = document.getElementById('btn-send');
const email = document.getElementById('email');
const password = document.getElementById('password');
const agreement = document.getElementById('agreement');
const submitBtn = document.getElementById('submit-btn');

function validation(event) {
  event.preventDefault();
  if (email.value === 'tryber@teste.com' && password.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
}

btnSend.addEventListener('click', validation);

function submitValidation() {
  if (agreement.checked) {
    submitBtn.disabled = false;
    submitBtn.style.backgroundColor = 'rgb(79, 44, 131)';
  } else {
    submitBtn.style.backgroundColor = 'rgba(79, 44, 131, 0.2)';
    submitBtn.disabled = true;
  }
}

agreement.addEventListener('click', submitValidation);

const textArea = document.getElementById('textarea');
const counter = document.createElement('p');
counter.id = 'counter';
textArea.parentElement.appendChild(counter);
counter.innerHTML = '500';
textArea.parentElement.insertBefore(counter, textArea.nextElementSibling);

function caracteresCounter(event) {
  console.log(event.target.value);
  counter.innerHTML = 500 - textArea.value.length;
}
textArea.addEventListener('keyup', caracteresCounter);
