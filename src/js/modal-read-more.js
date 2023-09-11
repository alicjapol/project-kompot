(() => {
    const refs = {
      openModalBtn: document.querySelector("[modal-read-more-open]"),
      closeModalBtn: document.querySelector("[modal-read-more-close]"),
      modal: document.querySelector("[modal-read-more]"),
    };
  
    if (!refs.openModalBtn) {
      console.error("openModalBtn element not found!");
    } else {
      refs.openModalBtn.addEventListener("click", toggleModal);
    }
  
    if (!refs.closeModalBtn) {
      console.error("closeModalBtn element not found!");
    } else {
      refs.closeModalBtn.addEventListener("click", toggleModal);
    }
  
    if (!refs.modal) {
      console.error("modal element not found!");
    }
  
    function toggleModal() {
      if (refs.modal) {
        refs.modal.classList.toggle("is-hidden");
      } else {
        console.error("modal element not found, cannot toggle modal!");
      }
    }
  })();
  