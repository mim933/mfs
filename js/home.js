document.getElementById('btn-add-money').addEventListener('click', function(event){
  event.preventDefault();

//   step-2: get money to be added
  const addMoneyInput = document.getElementById('input-add-money').value;
  console.log(addMoneyInput);


//   s-3 get the pin number provided
  const pinNumberInput = document.getElementById('input-pin-number').value;
  console.log(pinNumberInput)
}  )