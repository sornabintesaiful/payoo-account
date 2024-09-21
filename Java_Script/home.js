
// add the prevent handlet to the add money btn inside the from
document.getElementById('btn-add-money').addEventListener('click', function (event) {
  // prevent page reload after page submit
  event.preventDefault();
  // get money to be added to the account
  const addMoneyInput = document.getElementById('input-add-money').value;
  // get the valided pin Numbet
  const pinNumberInput = document.getElementById('input-pin-number').value;
  
 console.log(addMoneyInput, pinNumberInput)
});