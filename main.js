const h1Counter = document.getElementById('counter');
const buttonId = document.getElementById('clickButton');
const upgradeButton = document.getElementById('upgradeButton');
const cautionMessage = document.getElementById('siteBlocker');
const popUp = document.getElementById('popUp');
const popUpError = document.getElementById('close');
const popUpText = document.getElementById('mistake');
let clickPerMinute = document.getElementById('clickPerMinute')
let timeUpgrade60sec = document.getElementById('60SecUpgrade')

let userData = {
   clickCount: 0,
   clickUpgradeButton:{
      upgradeCount: 1,
      upgradeMultiply: 2,
      upgradeCountSum: 10,
   },

};

if ('userData' in sessionStorage) {
   userData = JSON.parse(sessionStorage.getItem('userData'));
}

h1Counter.textContent = 'click counter: ' + userData.clickCount;

popUpError.addEventListener('click',() => {
   cautionMessage.classList.add('hidden');
   popUp.classList.add('hidden');
});

upgradeButton.addEventListener('click', () => {
   if (userData.clickUpgradeButton.upgradeCountSum > userData.clickCount){
      popUp.classList.remove('hidden');
      cautionMessage.classList.remove('hidden')
      popUpText.textContent = `Alert! you need ${userData.clickUpgradeButton.upgradeCountSum} clicks`;

   } else {
      userData.clickCount -= userData.clickUpgradeButton.upgradeCountSum;
      userData.clickUpgradeButton.upgradeCount += 1;
      h1Counter.textContent = 'click counter: ' + userData.clickCount;
      userData.clickUpgradeButton.upgradeCountSum *= userData.clickUpgradeButton.upgradeMultiply
   }
});

function clickPerTime(){
   userData.counter++
   userData.clickCount += userData.clickUpgradeButton.upgradeCount;
   h1Counter.textContent = 'click counter: '+ userData.clickCount;
   sessionStorage.setItem('userData', JSON.stringify(userData));
}
setInterval(clickPerTime,6000)

buttonId.addEventListener('click', () => {
   userData.clickCount += userData.clickUpgradeButton.upgradeCount;
   h1Counter.textContent = 'click counter: '+ userData.clickCount;
   sessionStorage.setItem('userData', JSON.stringify(userData));
});