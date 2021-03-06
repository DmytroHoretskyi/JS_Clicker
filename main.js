const h1Counter = document.getElementById('counter');
const buttonId = document.getElementById('clickButton');
const upgradeButton = document.getElementById('upgradeButton');
const cautionMessage = document.getElementById('siteBlocker');
const popUp = document.getElementById('popUp');
const popUpError = document.getElementById('close');
const popUpText = document.getElementById('mistake');
let clickPerMinute = document.getElementById('clickPerMinute')
let timeUpgrade60sec = document.getElementById('60SecUpgrade')
let timeUpgrade30sec = document.getElementById('30SecUpgrade')
let bitStatistic = document.getElementById('bitUpgradeStatistic')
let timeUpgrade60secStatistic = document.getElementById('clickPer60secStatistic')
let timeUpgrade30secStatistic = document.getElementById('clickPer30secStatistic')

let userData = {
   clickCount: 0,
   upgradeMultiply: 2,
   clickUpgradeButton:{
      upgradeCount: 1,
      upgradeCost: 10,
   },
   timeUpgradeButton60sec:{
      upgradeCount:0,
      upgradeCost:10,
   },
   timeUpgradeButton30sec:{
      countPlus:10,
      upgradeCount:0,
      upgradeCost:100,
   },
};

if ('userData' in sessionStorage) {
   userData = JSON.parse(sessionStorage.getItem('userData'));
}

h1Counter.textContent = `Bit counter: ${userData.clickCount}`;


console.log(userData.timeUpgradeButton60sec.upgradeCount)
popUpError.addEventListener('click',() => {
   cautionMessage.classList.add('hidden');
   popUp.classList.add('hidden');
});

upgradeButton.addEventListener('click', () => {
   if (userData.clickUpgradeButton.upgradeCost > userData.clickCount){
      popUp.classList.remove('hidden');
      cautionMessage.classList.remove('hidden')
      popUpText.textContent = `Alert! you need ${userData.clickUpgradeButton.upgradeCost} clicks`;

   } else {
      userData.clickCount -= userData.clickUpgradeButton.upgradeCost;
      userData.clickUpgradeButton.upgradeCount += 1;
      h1Counter.textContent = 'Bit counter: ' + userData.clickCount;
      userData.clickUpgradeButton.upgradeCost *= userData.upgradeMultiply
   }
});

timeUpgrade60sec.addEventListener('click', () =>{
   if (userData.timeUpgradeButton60sec.upgradeCost > userData.clickCount){
      popUp.classList.remove('hidden');
      cautionMessage.classList.remove('hidden')
      popUpText.textContent = `Alert! you need ${userData.timeUpgradeButton60sec.upgradeCost} Bits`;

   } else {
      userData.clickCount -= userData.timeUpgradeButton60sec.upgradeCost;
      clickPerTime60Sec();
      userData.timeUpgradeButton60sec.upgradeCount++;
      userData.timeUpgradeButton60sec.upgradeCost*=userData.upgradeMultiply;
      clickPerMinute.textContent = `Bit per minute: ${userData.timeUpgradeButton30sec.upgradeCount * 2
      + userData.timeUpgradeButton60sec.upgradeCount}`;
      timeUpgrade60secStatistic.textContent = `${userData.timeUpgradeButton60sec.upgradeCount} Bit per minute`
   }
});
timeUpgrade30sec.addEventListener('click', () => {
   if (userData.timeUpgradeButton30sec.upgradeCost > userData.clickCount){
      popUp.classList.remove('hidden');
      cautionMessage.classList.remove('hidden')
      popUpText.textContent = `Alert! you need ${userData.timeUpgradeButton30sec.upgradeCost} Bits`;

   } else {
      userData.clickCount -= userData.timeUpgradeButton30sec.upgradeCost;
      clickPerTime30Sec();
      userData.timeUpgradeButton30sec.upgradeCount++;
      userData.timeUpgradeButton30sec.upgradeCost*=userData.upgradeMultiply;
      clickPerMinute.textContent = `Bit's per minute: ${userData.timeUpgradeButton30sec.upgradeCount * 2
      + userData.timeUpgradeButton60sec.upgradeCount}`;
      timeUpgrade30secStatistic.textContent = `${userData.timeUpgradeButton30sec.upgradeCount} Bit per 30 sec`
   }
});
function clickPerTime60Sec() {
   userData.clickCount += userData.timeUpgradeButton60sec.upgradeCount;
   h1Counter.textContent = 'Bit counter: '+ userData.clickCount;
   sessionStorage.setItem('userData', JSON.stringify(userData));
}
function clickPerTime30Sec() {
   userData.clickCount += userData.timeUpgradeButton30sec.countPlus;
   h1Counter.textContent = 'Bit counter: '+ userData.clickCount;
   sessionStorage.setItem('userData', JSON.stringify(userData));
}
setInterval(clickPerTime30Sec, 30000);
setInterval(clickPerTime60Sec, 60000);
buttonId.addEventListener('click', () => {
   userData.clickCount += userData.clickUpgradeButton.upgradeCount;
   h1Counter.textContent = 'Bit counter: '+ userData.clickCount;
   bitStatistic.textContent = `Bit's by one click : ${userData.clickUpgradeButton.upgradeCount} `
   sessionStorage.setItem('userData', JSON.stringify(userData));
});