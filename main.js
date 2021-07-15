const h1Counter = document.getElementById('counter');
const buttonId = document.getElementById('clickButton');
const upgradeButton = document.getElementById('upgradeButton');
const cautionMessage = document.getElementById('siteBlocker');
const popUp = document.getElementById('popUp');
const popUpError = document.getElementById('close');
const popUpText = document.getElementById('mistake');

let userData = {
   clickCount: 0,
   upgradeCount: 1,
   upgradeStocks: 10,
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
   if (userData.upgradeStocks > userData.clickCount){
      popUp.classList.remove('hidden');
      cautionMessage.classList.remove('hidden')
      popUpText.textContent = `Alert! you need ${userData.upgradeStocks} clicks`;

   } else {
      userData.clickCount -= userData.upgradeStocks;
      userData.upgradeCount += 1;
      h1Counter.textContent = 'click counter: ' + userData.clickCount;
   }
});

buttonId.addEventListener('click', () => {
   userData.clickCount += userData.upgradeCount;
   h1Counter.textContent = 'click counter: '+ userData.clickCount;
   sessionStorage.setItem('userData', JSON.stringify(userData));
});
