
// show the cash out form
document.getElementById('btn-show-cash-out').addEventListener('click', function () {
  // show cash out btn clicked
  document.getElementById('cash-out-form').classList.remove('hidden');
  document.getElementById('add-money-form').classList.add('hidden');
  console.log('cash out btn clicked')


});
document.getElementById('btn-add-money-form').addEventListener('click', function () {
   document.getElementById('cash-out-form').classList.add('hidden');
  document.getElementById('add-money-form').classList.remove('hidden');
  console.log('add money btn clicked');
});
