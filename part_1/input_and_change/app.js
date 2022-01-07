const form = document.querySelector('form');
const nome = document.querySelector('#form_nome');
const email = document.querySelector('#form_email');
const receber_noticias = document.querySelector('#form_noticias');

form.addEventListener('submit', function(event) {
  event.preventDefault();
  console.log('Nome: ' + nome.value);
  console.log('Email: ' + email.value);
});

const formData = {};

// 'change' event listener atualiza o objeto formData quando apertado enter ou
// quando perde o foco do input. já o input atualiza o objeto formData quando enquanto escreve
for(let input of [nome, email, receber_noticias]) {
  input.addEventListener('input',({target})  => {
    const {name,type, value, checked} = target;
    formData[name] = type === 'checkbox' ? checked : value;
    console.log(formData);
  });
};



