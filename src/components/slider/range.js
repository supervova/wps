export default function initSliders() {
  const slider1 = document.getElementById('filter-period-start');
  const slider2 = document.getElementById('filter-period-end');
  const slider = document.querySelector('.slider');

  function updateSlider() {
    let minValue = parseInt(slider1.value, 10);
    let maxValue = parseInt(slider2.value, 10);

    if (minValue > maxValue) {
      // Swap values to ensure minValue is always less than or equal to maxValue
      [minValue, maxValue] = [maxValue, minValue];
    }

    slider1.setAttribute('aria-valuenow', minValue);
    slider2.setAttribute('aria-valuenow', maxValue);

    const percentageMin = (minValue / slider1.max) * 100;
    const percentageMax = (maxValue / slider2.max) * 100;

    slider.style.setProperty('--min-percent', `${percentageMin}%`);
    slider.style.setProperty('--max-percent', `${percentageMax}%`);

    // Update the ::after pseudo-element's position
    slider.style.setProperty('--start-position', `${percentageMin}%`);
    slider.style.setProperty('--end-position', `${percentageMax}%`);
  }

  function handleSlider1Input() {
    if (parseInt(slider1.value, 10) > parseInt(slider2.value, 10)) {
      slider1.value = slider2.value;
    }
    updateSlider();
  }

  function handleSlider2Input() {
    if (parseInt(slider2.value, 10) < parseInt(slider1.value, 10)) {
      slider2.value = slider1.value;
    }
    updateSlider();
  }

  slider1.addEventListener('input', handleSlider1Input);
  slider2.addEventListener('input', handleSlider2Input);

  updateSlider();
}
