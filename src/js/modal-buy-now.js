(() => {
    const refs = {
      openModalBtn: document.querySelector("[modal-buy-now-open]"),
      closeModalBtn: document.querySelector("[modal-buy-now-close]"),
      modal: document.querySelector("[modal-buy-now]"),
    };
  
    if (!refs.openModalBtn) {
      console.error("openModalBtn element not found!");
    } else {
      refs.openModalBtn.addEventListener("click", toggleModal);
    }
  
    if (!refs.closeModalBtn) {
      console.error("closeModalBtn element not found!");
    } else {
      console.log("closeModalBtn",refs.closeModalBtn);
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
  