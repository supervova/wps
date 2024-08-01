import {
  togglePopover,
  handleClickOutside,
  handleEscapeKey,
} from './components/popover/popover';
import initDrawer from './components/drawer/drawer';
import initModals from './components/modal/modal';

document.addEventListener('DOMContentLoaded', () => {
  const popovers = document.querySelectorAll('.popover');
  const tabletPopovers = document.querySelectorAll('.tablet\\:popover');

  const setupPopovers = () => {
    const isLargeScreen = window.innerWidth >= 768;

    // Popovers - Uniscreen
    popovers.forEach((popover, index) => {
      const summary = popover.querySelector('.popover__summary');
      const body = popover.querySelector('.popover__body');

      if (!summary || !body) {
        return;
      }

      const popoverId = `popover-${index}`;
      body.setAttribute('id', popoverId);
      summary.setAttribute('aria-controls', popoverId);
      summary.setAttribute('aria-expanded', 'false');

      summary.addEventListener('click', togglePopover);
    });

    // Popovers - Large screens
    tabletPopovers.forEach((popover, index) => {
      const summary = popover.querySelector('.popover__summary');
      const body = popover.querySelector('.popover__body');

      if (!summary || !body) {
        return;
      }

      const popoverId = `tablet-popover-${index}`;
      body.setAttribute('id', popoverId);
      summary.setAttribute('aria-controls', popoverId);
      summary.setAttribute('aria-expanded', 'false');

      if (isLargeScreen) {
        summary.addEventListener('click', togglePopover);
      } else {
        summary.removeEventListener('click', togglePopover);
      }
    });

    document.addEventListener('click', handleClickOutside);
    document.addEventListener('keydown', handleEscapeKey);
  };

  const isSmallScreen = window.innerWidth < 768;

  if (isSmallScreen) {
    initDrawer();
  }

  setupPopovers();
  initModals();

  window.addEventListener('resize', () => {
    // eslint-disable-next-line no-shadow
    const isSmallScreen = window.innerWidth < 768;
    if (isSmallScreen) {
      initDrawer();
    }
    setupPopovers();
  });
});
