export default function initPopovers() {
  // Получаем все элементы `.popover`
  const popovers = Array.from(document.querySelectorAll('.popover'));

  // Обработчик клика по документу
  document.addEventListener('click', (event) => {
    popovers.forEach((el) => {
      // Если клик произошел вне поповера, закрываем его
      if (!el.contains(event.target)) {
        el.removeAttribute('open');
      }
    });
  });

  // Обработчик нажатия клавиши
  window.addEventListener('keydown', (event) => {
    // Если нажата клавиша Esc, закрываем открытый поповер
    if (event.key === 'Esc' || event.key === 'Escape') {
      const openPopover = document.querySelector('.popover[open]');
      if (openPopover) {
        openPopover.removeAttribute('open');
      }
    }
  });
}
