import { Notify } from 'notiflix/build/notiflix-notify-aio';

const ref = {
  form: document.querySelector('.form'),
};

function createPromise(position, delay) {
  
  const promiss = new Promise((resolve, reject) =>
    setTimeout(() => {
      const shouldResolve = Math.random() > 0.3;
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay)
  );
  return promiss;
}


ref.form.addEventListener('submit', onCreatePromise)

function onCreatePromise(e) {
  e.preventDefault();
  let delay = Number(ref.form.elements.delay.value);
  const step = Number(ref.form.elements.step.value);
  const amount = ref.form.elements.amount.value;
  
  for (let position = 1; position <= amount; position += 1) {
    createPromise(position, delay)
      .then(({ position, delay }) => {
        Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
      });
    delay += step;
  } 
}