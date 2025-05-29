function getParams() {
  const params = JSON.parse(localStorage.getItem('params')) || {
    calorific: { coal: 8000, oil: 10000, gas: 11000 },
    standards: { new: 40, normal: 60, old: 100 }
  };
  return params;
}

function fuelCalc(e) {
  e.preventDefault();
  const params = getParams();
  const fuel = document.getElementById('fuel-type').value;
  const amount = parseFloat(document.getElementById('fuel-amount').value);
  const energy = params.calorific[fuel] * amount; // kWh
  const power = (energy / (180*24)); // średnia moc przy 180 dniach sezonu grzewczego
  document.getElementById('fuel-result').innerText =
    'Szacowane zapotrzebowanie mocy: ' + power.toFixed(2) + ' kW';
}

function buildingCalc(e) {
  e.preventDefault();
  const params = getParams();
  const area = parseFloat(document.getElementById('area').value);
  const std = parseFloat(document.getElementById('standard').value);
  const demand = area * std / 1000; // W -> kW
  const withReserve = demand * 1.2;
  document.getElementById('building-result').innerText =
    'Zapotrzebowanie mocy z rezerwą: ' + withReserve.toFixed(2) + ' kW';
}

document.getElementById('fuel-form').addEventListener('submit', fuelCalc);
document.getElementById('building-form').addEventListener('submit', buildingCalc);
