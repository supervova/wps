const animationDuration = 400; // ms
let visibleModal = null;

// Close modal
const closeModal = (modal) => {
  visibleModal = null;

  setTimeout(() => {
    modal.close();
  }, animationDuration);
};

// Open modal
const openModal = (modal) => {
  setTimeout(() => {
    visibleModal = modal;
  }, animationDuration);
  modal.showModal();
};

// Toggle modal
const modalToggle = (event) => {
  const trigger = event.currentTarget;
  const win = trigger.getAttribute('data-target');
  const modal = document.getElementById(win);

  event.preventDefault();

  if (modal.open) {
    closeModal(modal);
  } else {
    openModal(modal);
  }
};

// Initialize modals
const initModals = () => {
  // Close with a click outside
  document.addEventListener('click', (event) => {
    if (visibleModal === null) return;
    const modalContent = visibleModal.firstElementChild; // Get the first child element of the modal
    const isClickInside = modalContent.contains(event.target);
    if (!isClickInside) {
      closeModal(visibleModal);
    }
  });

  // Close with 'Cancel' and 'X' buttons
  document.querySelectorAll('[data-role="close-modal"]').forEach((btn) => {
    btn.addEventListener('click', (event) => {
      const modal = event.currentTarget.closest('.modal');
      closeModal(modal);
    });
  });

  // Set listeners on modal openers
  document.querySelectorAll('[data-target]').forEach((elem) => {
    elem.addEventListener('click', (event) => {
      modalToggle(event);
    });
  });
};

export default initModals;
