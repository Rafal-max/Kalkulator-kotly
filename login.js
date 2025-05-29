const form = document.getElementById('login-form');
form.addEventListener('submit', function(e){
  e.preventDefault();
  const u = document.getElementById('username').value;
  const p = document.getElementById('password').value;
  const creds = JSON.parse(localStorage.getItem('creds')) || {user:'admin', pass:'admin'};
  if(u === creds.user && p === creds.pass){
    window.location.href = 'admin.html';
  } else {
    document.getElementById('login-error').innerText = 'Błędne dane logowania';
  }
});
