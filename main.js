let h1Counter = document.getElementById('counter');
let buttonId = document.getElementById('clickButton');
let upgradeButton = document.getElementById('upgradeButton');
let cauntionMessage = document.getElementById('siteBlocker');
let popUp = document.getElementById('popUp')
let popUpError = document.getElementById('close')
let popUpText = document.getElementById('mistake')
let counter = 0;
let upgrade0 = 1;

popUpError.addEventListener('click',function (){
   cauntionMessage.classList.add('hidden');
   popUp.classList.add('hidden');
})

upgradeButton.addEventListener('click', function (){
   if (10 > counter){
      popUp.classList.remove('hidden');
      cauntionMessage.classList.remove('hidden')
   popUpText.textContent = "Alert! you need 10";

   }
   else {
      counter -= 10;
      upgrade0++;
      h1Counter.textContent = 'click counter: ' + counter;
   }

});

buttonId.addEventListener('click', function (){
   counter += upgrade0;
   h1Counter.textContent = 'click counter: '+ counter;
});
