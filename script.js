function getParams(){
  return JSON.parse(localStorage.getItem('params')) || {
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

function fuelCalc(e){
  e.preventDefault();
  const p = getParams();
  const fuel = document.getElementById('fuel-type').value;
  const amount = parseFloat(document.getElementById('fuel-amount').value);
  const energy = p.calorific[fuel] * amount;
  const power = energy / (180*24);
  document.getElementById('fuel-result').innerText =
    'Szacowane zapotrzebowanie mocy: ' + power.toFixed(2) + ' kW';
}

function buildingCalc(e){
  e.preventDefault();
  const p = getParams();
  const area = parseFloat(document.getElementById('area').value) || 0;
  const ins = document.getElementById('insulation').value;
  const floors = parseInt(document.getElementById('floors').value) || 1;
  const residents = parseInt(document.getElementById('residents').value) || 0;
  const cwu = document.getElementById('cwu').checked;
  let demandW = area * p.insulation[ins];
  demandW *= 1 + p.floorFactor * (floors - 1);
  let powerKW = demandW / 1000;
  if(cwu){
    powerKW += residents * p.cwuPower;
  }
  powerKW *= 1.2; // rezerwa
  document.getElementById('building-result').innerText =
    'Zapotrzebowanie mocy z rezerwą: ' + powerKW.toFixed(2) + ' kW';
}

document.getElementById('fuel-form').addEventListener('submit', fuelCalc);
document.getElementById('building-form').addEventListener('submit', buildingCalc);
