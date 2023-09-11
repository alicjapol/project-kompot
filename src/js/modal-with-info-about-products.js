(() => {
  const refs = {
    openModalBtnProduct: document.querySelector('[product-modal-open]'),
    closeModalBtnProduct: document.querySelector('[product-modal-close]'),
    modal: document.querySelector('[product-modal]'),
  };

  refs.openModalBtnProduct.addEventListener('click', toggleModalProduct);
  refs.closeModalBtnProduct.addEventListener('click', toggleModalProduct);

  function toggleModalProduct() {
    refs.modal.classList.toggle('is-hidden');
  }
})();
