import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const ref = {
  btnStart: document.querySelector('button[data-start]'),
  days: document.querySelector('span[data-days]'),
  hours: document.querySelector('span[data-hours]'),
  minutes: document.querySelector('span[data-minutes]'),
  seconds: document.querySelector('span[data-seconds]'),
};

let timerId = null;
let date = null;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectedDates[0] <= options.defaultDate) {
      Notify.info('Please choose a date in the future'),
        (ref.btnStart.disabled = true);
    } else {
      ref.btnStart.disabled = false;
      date = selectedDates[0];
    }
  },
};

const timer = {
  start() {
    timerId = setInterval(() => {
      const currentTime = Date.now();
      const diff = date - currentTime;
      const time = convertMs(diff);
      updateTimer(time);
    }, 1000);
  },
};
ref.btnStart.addEventListener('click', () => {
  timer.start();
});

flatpickr('#datetime-picker', options);

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = addLeadingZero(Math.floor(ms / day));
  // Remaining hours
  const hours = addLeadingZero(Math.floor((ms % day) / hour));
  // Remaining minutes
  const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
  // Remaining seconds
  const seconds = addLeadingZero(
    Math.floor((((ms % day) % hour) % minute) / second)
  );

  return { days, hours, minutes, seconds };
}

function updateTimer({ days, hours, minutes, seconds }) {
  (ref.days.textContent = days),
    (ref.hours.textContent = hours),
    (ref.minutes.textContent = minutes),
    (ref.seconds.textContent = seconds);
}

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}
