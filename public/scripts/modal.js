export default function Modal() {
  const wrapper = document.querySelector('.modal-wrapper');
  const cancelButton = document.querySelector('#cancel');

  cancelButton.addEventListener('click', close);

  function check() {
    document.querySelector('.question-wrapper').classList.add('read');
  }

  function open() {
    wrapper.classList.add('active');
  }

  function close() {
    wrapper.classList.remove('active');
  }
  return {
    check,
    open,
    close,
  };
}
