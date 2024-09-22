
//step 1: add the prevent handlet to the add money btn inside the from
document.getElementById('btn-add-money').addEventListener('click', function (event) {
  // prevent page reload after page submit
  event.preventDefault();
  //step 2: get money to be added to the account
  const addMoneyInput = document.getElementById('input-add-money').value;
  // get the valided pin Numbet
  const pinNumberInput = document.getElementById('input-pin-number').value;
  //step 4: veryfy the pin number
  // wrong way to valided pin number
  if (pinNumberInput === '1234') {
    // step 5: get the current balance
    const balance = document.getElementById('acount-balance').innerText;
    // console.log(typeof balance);

    // step 5 : add addMOney with balance
    const addMoneyNumber = parseFloat(addMoneyInput);
    const balanceNumber = parseFloat(balance);
    const newBalance = addMoneyNumber + balanceNumber;
    
    // step 6: update the balance in the UI/DOM
    document.getElementById('acount-balance').innerText = newBalance;
    console.log(newBalance);
  }
  else{
    alert('failed to add money')
  }

  
//  console.log(addMoneyInput, pinNumberInput)
})