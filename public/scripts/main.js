import Modal from './modal.js';



const modal = Modal();

const modalTitle = document.querySelector('.modal h2');
const modalDescription = document.querySelector('.modal p');
const modalButton = document.querySelector('.modal .buttons #action');
const checkbox = document.querySelector("input[name=theme]");

// Fazer todos os botões funcionarem
const checkButtons = document.querySelectorAll('.actions a.check');

checkButtons.forEach((button) => {
  button.addEventListener('click', handleClick);
});
const deleteButtons = document.querySelectorAll('.actions a.delete');

deleteButtons.forEach((button) => {
  button.addEventListener('click', (event) => handleClick(event, false));
});

function handleClick(event, check = true) {
  event.preventDefault();
  const slug = check ? 'check' : 'delete';
  const roomId = document.querySelector('#room-id').dataset.id;
  const questionId = event.target.dataset.id;

  const form = document.querySelector('.modal form');
  form.setAttribute('action', `/question/${roomId}/${questionId}/${slug}`);

  modalTitle.innerHTML = check ? 'Marcar como lida?' : 'Excluir pergunta';
  modalDescription.innerHTML = check
    ? 'Você deseja marcar a pergunta como lida?'
    : 'Tem certeza que você deseja excluir esta pergunta?';
  modalButton.innerHTML = check ? 'Sim, marcar como lida' : 'Sim, excluir';
  check
    ? modalButton.classList.remove('red')
    : modalButton.classList.add('red');

  modal.open();

}
