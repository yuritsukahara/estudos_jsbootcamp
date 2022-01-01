const form = document.querySelector('form');
const nome = document.querySelector('#form_nome');
const email = document.querySelector('#form_email');

form.addEventListener('submit', function(event) {
  event.preventDefault();
  console.log('Nome: ' + nome.value);
  console.log('Email: ' + email.value);
});
