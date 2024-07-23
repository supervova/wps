// popover.js
function closeAllPopovers() {
  const popovers = document.querySelectorAll('.tablet\\:popover.is-open');
  popovers.forEach((popover) => {
    const summary = popover.querySelector('.popover__summary');
    popover.classList.remove('is-open');
    if (summary) {
      summary.setAttribute('aria-expanded', 'false');
    }
  });
}

export function togglePopover(event) {
  const summary = event.currentTarget;
  const popover = summary.parentElement;

  const isOpen = popover.classList.contains('is-open');
  closeAllPopovers();

  if (!isOpen) {
    popover.classList.add('is-open');
    summary.setAttribute('aria-expanded', 'true');
  } else {
    popover.classList.remove('is-open');
    summary.setAttribute('aria-expanded', 'false');
  }
}

export function handleClickOutside(event) {
  const isOutside = !event.target.closest('.tablet\\:popover');
  if (isOutside) {
    closeAllPopovers();
  }
}

export function handleEscapeKey(event) {
  if (event.key === 'Escape') {
    closeAllPopovers();
  }
}
