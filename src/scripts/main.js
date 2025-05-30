'use strict';

const element = document.querySelectorAll('.population');
const arr = [...element].map((item) => {
  return Number(item.textContent.replaceAll(',', ''));
});

const total = arr.reduce((sum, item) => sum + item, 0);
const average = Math.floor(total / arr.length);

document.querySelector('.total-population').textContent = toFormatted(total);

document.querySelector('.average-population').textContent =
  toFormatted(average);

function toFormatted(number) {
  const arr2 = String(number).split('');
  const resultArr = [];
  let count = 0;

  for (let i = arr2.length - 1; i >= 0; i--) {
    resultArr.push(arr2[i]);
    count++;

    if (count === 3 && i !== 0) {
      resultArr.push(',');
      count = 0;
    }
  }

  return resultArr.reverse().join('');
}

// document.querySelector('.total-population').textContent =
// total.toLocaleString();
// document.querySelector('.average-population').textContent =
// average.toLocaleString();
