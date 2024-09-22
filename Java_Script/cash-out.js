

document.getElementById('btn-cash-out').addEventListener('click', function (event) {
  event.preventDefault();
  
  const cashOut = document.getElementById('input-cash-out').value;
  const cashOutNumber = parseFloat(cashOut);
  const pinNumber = document.getElementById('input-cash-out-pin-number').value;
  console.log(cashOut, pinNumber);

  // wrong way to verify pin number
  if (pinNumber === '1234') {
    const balance = document.getElementById('acount-balance').innerText;
    const balanceNumber = parseFloat(balance);

    // reduce the amount 
    const newBalance = balanceNumber - cashOutNumber;

    document.getElementById('acount-balance').innerText=newBalance;
    console.log(newBalance);
  }
  else {
    alert('wrong pin number')
  }
})