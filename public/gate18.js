document.addEventListener('DOMContentLoaded', function() {
  var modal = document.getElementById('gate18-modal');
  var btnYes = document.getElementById('gate18-yes');
  var btnNo = document.getElementById('gate18-no');
  if (localStorage.getItem('gate18') === 'yes') {
    modal.style.display = 'none';
  }
  btnYes.addEventListener('click', function() {
    localStorage.setItem('gate18', 'yes');
    modal.style.display = 'none';
  });
  btnNo.addEventListener('click', function() {
    window.location.href = 'https://www.google.com';
  });
});
