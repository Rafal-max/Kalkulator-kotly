function loadParams(){
  const stored = JSON.parse(localStorage.getItem('params')) || {
    calorific: { coal: 8000, oil: 10000, gas: 11000 },
    standards: { new: 40, normal: 60, old: 100 }
  };
  document.getElementById('calorific-coal').value = stored.calorific.coal;
  document.getElementById('calorific-oil').value = stored.calorific.oil;
  document.getElementById('calorific-gas').value = stored.calorific.gas;
  document.getElementById('standard-new').value = stored.standards.new;
  document.getElementById('standard-normal').value = stored.standards.normal;
  document.getElementById('standard-old').value = stored.standards.old;
}

function saveParams(e){
  e.preventDefault();
  const params = {
    calorific:{
      coal: parseFloat(document.getElementById('calorific-coal').value),
      oil: parseFloat(document.getElementById('calorific-oil').value),
      gas: parseFloat(document.getElementById('calorific-gas').value)
    },
    standards:{
      new: parseFloat(document.getElementById('standard-new').value),
      normal: parseFloat(document.getElementById('standard-normal').value),
      old: parseFloat(document.getElementById('standard-old').value)
    }
  };
  localStorage.setItem('params', JSON.stringify(params));
  document.getElementById('params-msg').innerText = 'Zapisano parametry';
}

loadParams();
document.getElementById('params-form').addEventListener('submit', saveParams);

function loadCreds(){
  const c = JSON.parse(localStorage.getItem('creds')) || {user:'admin', pass:'admin'};
  document.getElementById('cred-user').value = c.user;
  document.getElementById('cred-pass').value = c.pass;
}
function saveCreds(e){
  e.preventDefault();
  const c = {user: document.getElementById('cred-user').value, pass: document.getElementById('cred-pass').value};
  localStorage.setItem('creds', JSON.stringify(c));
  document.getElementById('creds-msg').innerText = 'Zapisano dane logowania';
}

loadCreds();
document.getElementById('creds-form').addEventListener('submit', saveCreds);
