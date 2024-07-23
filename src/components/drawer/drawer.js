// drawer.js
export default function initDrawer() {
  const drawer = document.querySelector('.drawer.is-filter');
  const trigger = document.getElementById('header-menu-trigger');

  if (!drawer || !trigger) return;

  function openDrawer(event) {
    event.stopPropagation();
    drawer.classList.add('is-open');
  }

  function closeDrawer() {
    drawer.classList.remove('is-open');
  }

  function handleClickOutside(event) {
    if (!drawer.contains(event.target)) {
      closeDrawer();
    }
  }

  function handleResetButtonClick() {
    closeDrawer();
  }

  function handleEscapeKey(event) {
    if (event.key === 'Escape') {
      closeDrawer();
    }
  }

  trigger.addEventListener('click', openDrawer);
  document.addEventListener('click', handleClickOutside);
  document.addEventListener('keydown', handleEscapeKey);

  const resetButton = drawer.querySelector('.drawer__footer [type="reset"]');
  if (resetButton) {
    resetButton.addEventListener('click', handleResetButtonClick);
  }
}
