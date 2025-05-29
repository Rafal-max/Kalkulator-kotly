function defaults(){
  return {
    calorific:{
      pellet:4800,
      ekogroszek:7500,
      wegiel:8000,
      drewno:4500,
      olej:10000,
      gaz:11000,
      pompa:3000,
      prad:1000
    },
    insulation:{
      very:40,
      good:60,
      average:80,
      poor:100
    },
    floorFactor:0.05,
    cwuPower:0.2
  };
}

function loadParams(){
  const p = JSON.parse(localStorage.getItem('params')) || defaults();
  document.getElementById('calorific-pellet').value = p.calorific.pellet;
  document.getElementById('calorific-ekogroszek').value = p.calorific.ekogroszek;
  document.getElementById('calorific-coal').value = p.calorific.wegiel;
  document.getElementById('calorific-wood').value = p.calorific.drewno;
  document.getElementById('calorific-oil').value = p.calorific.olej;
  document.getElementById('calorific-gas').value = p.calorific.gaz;
  document.getElementById('calorific-pompa').value = p.calorific.pompa;
  document.getElementById('calorific-prad').value = p.calorific.prad;
  document.getElementById('insul-very').value = p.insulation.very;
  document.getElementById('insul-good').value = p.insulation.good;
  document.getElementById('insul-average').value = p.insulation.average;
  document.getElementById('insul-poor').value = p.insulation.poor;
  document.getElementById('floor-factor').value = p.floorFactor;
  document.getElementById('cwu-power').value = p.cwuPower;
}

function saveParams(e){
  e.preventDefault();
  const p = {
    calorific:{
      pellet:parseFloat(document.getElementById('calorific-pellet').value),
      ekogroszek:parseFloat(document.getElementById('calorific-ekogroszek').value),
      wegiel:parseFloat(document.getElementById('calorific-coal').value),
      drewno:parseFloat(document.getElementById('calorific-wood').value),
      olej:parseFloat(document.getElementById('calorific-oil').value),
      gaz:parseFloat(document.getElementById('calorific-gas').value),
      pompa:parseFloat(document.getElementById('calorific-pompa').value),
      prad:parseFloat(document.getElementById('calorific-prad').value)
    },
    insulation:{
      very:parseFloat(document.getElementById('insul-very').value),
      good:parseFloat(document.getElementById('insul-good').value),
      average:parseFloat(document.getElementById('insul-average').value),
      poor:parseFloat(document.getElementById('insul-poor').value)
    },
    floorFactor:parseFloat(document.getElementById('floor-factor').value),
    cwuPower:parseFloat(document.getElementById('cwu-power').value)
  };
  localStorage.setItem('params', JSON.stringify(p));
  document.getElementById('params-msg').innerText = 'Zapisano parametry';
}

function loadCreds(){
  const c = JSON.parse(localStorage.getItem('creds')) || {user:'admin',pass:'admin'};
  document.getElementById('cred-user').value = c.user;
  document.getElementById('cred-pass').value = c.pass;
}
function saveCreds(e){
  e.preventDefault();
  const c = {user:document.getElementById('cred-user').value, pass:document.getElementById('cred-pass').value};
  localStorage.setItem('creds', JSON.stringify(c));
  document.getElementById('creds-msg').innerText = 'Zapisano dane logowania';
}

loadParams();
document.getElementById('params-form').addEventListener('submit', saveParams);
loadCreds();
document.getElementById('creds-form').addEventListener('submit', saveCreds);
