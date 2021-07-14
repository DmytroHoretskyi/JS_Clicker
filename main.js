let h1Counter = document.getElementById('counter');
let buttonId = document.getElementById('clickButton');
let upgradeButton = document.getElementById('upgradeButton');
let cautionMessage = document.getElementById('siteBlocker');
let popUp = document.getElementById('popUp')
let popUpError = document.getElementById('close')
let popUpText = document.getElementById('mistake')
let counter = parseInt(sessionStorage.getItem('counter'));
let upgrade0 = parseInt(sessionStorage.getItem('upgrade'));

popUpError.addEventListener('click',function (){
   cautionMessage.classList.add('hidden');
   popUp.classList.add('hidden');
})

upgradeButton.addEventListener('click', function (){
let upgradeStocks = 10;
   if (upgradeStocks > counter){
      popUp.classList.remove('hidden');
      cautionMessage.classList.remove('hidden')
   popUpText.textContent = `Alert! you need ${upgradeStocks} clicks`;
   }
   else {
      counter -= upgradeStocks;
      upgrade0 += 1;
      h1Counter.textContent = 'click counter: ' + counter;
   }
});

buttonId.addEventListener('click', function (){
   counter += upgrade0;
   h1Counter.textContent = 'click counter: '+ counter;
   sessionStorage.setItem('counter', counter);
   alert(typeof (sessionStorage.getItem('counter')))
   sessionStorage.setItem('upgrade', upgrade0)
});