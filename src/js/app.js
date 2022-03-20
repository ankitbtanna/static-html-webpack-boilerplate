if (module.hot) {
  module.hot.accept();
}

const modal = document.querySelector('#modal');
const openModal = document.querySelector('.open-button');
const closeModal = document.querySelector('.close-button');

openModal.addEventListener('click', () => {
  // modal.show();
  modal.showModal();
});

closeModal.addEventListener('click', () => {
  modal.close();
});