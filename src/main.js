import initPopovers from './components/popover/popover';
import initSliders from './components/slider/range';

// Init
document.addEventListener('DOMContentLoaded', () => {
  // Close popovers on Esc
  initPopovers();
  initSliders();
});
