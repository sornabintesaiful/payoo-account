
// step-1: set event handler
document.getElementById('login-btn').addEventListener('click', function (event) {
  // step 2: prevent default behavior
  event.preventDefault();
  console.log('login btn clicked');
  // step 3: set the phone number
  const phoneNumber = document.getElementById('phone-number').value;
  console.log(phoneNumber);
  const pinNumber = document.getElementById('pin-nmbr').value;
  console.log(pinNumber);
  if (phoneNumber === '5' && pinNumber === '1234'){
    console.log('you are logged in');
    window.location.href = '/home.html';
}
  else {
  alert('Worng phone or pin')
  }
});