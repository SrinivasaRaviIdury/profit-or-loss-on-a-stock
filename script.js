//selectors
startPrice = document.querySelector('#initial-price');
stockQuantity = document.querySelector('#stocks-quantity');
currentPrice = document.querySelector('#current-price');
outputBox = document.querySelector('#output-box');
btnSubmit = document.querySelector('#submit-btn');

function submitHandler() {
  const previousValue = startPrice.value * stockQuantity.value;
  const CurrentValue = currentPrice.value * stockQuantity.value;
  if (CurrentValue - previousValue < 0) {
    outputBox.innerText = `😏 Your stock return are in loss of ${
      CurrentValue - previousValue
    }`;
  } else if (CurrentValue - previousValue > 0) {
    outputBox.innerText = `😀 Your stock return are in profit of ${
      CurrentValue - previousValue
    }`;
  } else {
    outputBox.innerText = `😐🤨No Loss No Gain`;
  }
}
btnSubmit.addEventListener('click', submitHandler);
