const coins = {
   'Bitcoin': {
      'abb': 'BTC',
      'RUB': 2215838.98,
      'USDT': 10.25,
   },
   'BNB Coin': {
      'abb': 'BNB',
      'RUB': '150',
      'USDT': '25',
   },
   'Ethereum': {
      'abb': 'ETH',
      'RUB': '500',
      'USDT': '1500',
   },
   'Ethereum Classic': {
      'abb': 'ETC',
      'RUB': '250000',
      'USDT': '210',
   },
   'Cardano': {
      'abb': 'ADA',
      'RUB': '2215838,98',
      'USDT': '27 354,73',
   },
   'Tron': {
      'abb': 'TRX',
      'RUB': '2215838,98',
      'USDT': '27 354,73',
   },
   'Litecoin': {
      'abb': 'LTC',
      'RUB': '2215838,98',
      'USDT': '27 354,73',
   },
   'Dash': {
      'abb': 'DASH',
      'RUB': '2215838,98',
      'USDT': '27 354,73',
   },
   'Ripple': {
      'abb': 'XPR',
      'RUB': '2215838,98',
      'USDT': '27 354,73',
   },
   'Stellar': {
      'abb': 'XML',
      'RUB': '2215838,98',
      'USDT': '27 354,73',
   },
};

const currency = {
   'Сбербанк': {
      'abb': 'RUB',
      'RUB': 'card',
   },
   'Альфа-банк': {
      'abb': 'RUB',
      'RUB': 'card',
   },
   'Тинькофф': {
      'abb': 'RUB',
      'RUB': 'card',
   },
   'ВТБ': {
      'abb': 'RUB',
      'RUB': 'card',
   },
   'Visa/MC RUB': {
      'abb': 'RUB',
      'RUB': 'card',
   },
   'QIWI': {
      'abb': 'RUB',
      'RUB': 'phone',
   },
   'Payeer USD': {
      'abb': 'USD',
      'RUB': 'card',
   },
   'Payeer RUB': {
      'abb': 'RUB',
      'RUB': 'card',
   },
   'Tether TRC20': {
      'abb': 'USDT',
      'RUB': 'crypto',
   },
   'Visa/MC USD': {
      'abb': 'USD',
      'RUB': 'card',
   },
}

const coinsDIV = document.querySelector('#coins');
const currencyDIV = document.querySelector('#currency');

function createEl(obj, div) {
   for (const key in obj) {

      let radioBtn = document.createElement('div');
      let radioBtnValue = document.createElement('p');
      let circle = document.createElement('div');

      radioBtnValue.textContent = key;
      radioBtnValue.textContent = key;

      circle.classList.add('circle');
      radioBtn.classList.add('radio');

      radioBtn.setAttribute('data-abb', obj[key].abb);
      radioBtn.setAttribute('data-rub', obj[key].RUB);
      radioBtn.setAttribute('data-usdt', obj[key].USDT);

      div.append(radioBtn);
      radioBtn.append(radioBtnValue);
      radioBtn.append(circle);
   }
}

createEl(coins, coinsDIV);
createEl(currency, currencyDIV);

{
   document.querySelectorAll('.circle')[0].classList.add('checked');
   document.querySelectorAll('.circle')[10].classList.add('checked');
}

const [coinsInput, currencyInput, coinsBoard, currencyBoard] = [...document.querySelectorAll('.input_div')];
const resCpoinsInput = document.querySelectorAll('.input_div')[7];
const resCoinsMain = document.querySelectorAll('.input_div')[10];
const resCurrancyInput = document.querySelectorAll('.input_div')[8];

const payPlaceholder = document.getElementById('pay_method');

function onClickRadioBtns(btnsDiv, div) {
   const [input, placeholder] = [...div.children];

   btnsDiv.addEventListener('click', (event) => {

      document.querySelectorAll('.value').forEach((input) => {
         if(input === resCoinsMain.children.item([0])){
            input.value = 'Сумма: ' + 0
         }else{
            input.value = 0
         }
      })

      if (event.target.closest('.radio')) {
         for (let i = 1; i < btnsDiv.childNodes.length; i++) {
            btnsDiv.childNodes[i].lastChild.classList.remove('checked');

            if (event.target.classList.contains('radio')) {
               placeholder.textContent = event.target.dataset.abb;
               event.target.lastChild.classList.add('checked');

               switch (event.target.dataset.rub ) {
                  case 'phone':
                     payPlaceholder.placeholder = 'Номер мобильного телефона';
                     break;
                  case 'card':
                      payPlaceholder.placeholder = 'Номер карты Visa/MC';
                     break;
                  case 'crypto':
                     payPlaceholder.placeholder = 'Номер криптокошелька';
                     break;
               }

               placeholder.setAttribute('data-abb', event.target.dataset.abb);
               placeholder.setAttribute('data-rub', event.target.dataset.rub);
               placeholder.setAttribute('data-USDT', event.target.dataset.usdt);
            } else {
               event.target.parentElement.lastChild.classList.add('checked');
               placeholder.textContent = event.target.parentElement.dataset.abb;

               switch (event.target.parentElement.dataset.rub ) {
                  case 'phone':
                     payPlaceholder.placeholder = 'Номер мобильного телефона';
                     break;
                  case 'card':
                      payPlaceholder.placeholder = 'Номер карты Visa/MC';
                     break;
                  case 'crypto':
                     payPlaceholder.placeholder = 'Номер криптокошелька';
                     break;
               }

               placeholder.setAttribute('data-abb', event.target.parentElement.dataset.abb);
               placeholder.setAttribute('data-rub', event.target.parentElement.dataset.rub);
               placeholder.setAttribute('data-USDT', event.target.parentElement.dataset.usdt);
            }
         }
      }
   })

}

onClickRadioBtns(coinsDIV, coinsInput);
onClickRadioBtns(currencyDIV, currencyInput);

onClickRadioBtns(coinsDIV, coinsBoard);
onClickRadioBtns(currencyDIV, currencyBoard);

onClickRadioBtns(coinsDIV, resCpoinsInput);
onClickRadioBtns(coinsDIV, resCoinsMain);
onClickRadioBtns(currencyDIV, resCurrancyInput);

const inputDivs = document.querySelectorAll('.input_div');

function onChangeInput(nodes) {
   const [coinsInput, currencyInput, coinsBoard, currencyBoard] = [...nodes];
   const resCoin1 = nodes[7];
   const resCoin2 = nodes[10];
   const resCurrancy = nodes[8];

   coinsInput.children.item([0]).addEventListener('input', () => {

      if (currencyInput.children.item([1]).dataset.abb === 'RUB' && coinsInput.children.item([0]).value !== '') {
         const num = coinsInput.children.item([0]).value * coinsInput.children.item([1]).dataset.rub;
         currencyInput.children.item([0]).value = num.toFixed(2);

         coinsBoard.children.item([0]).value = coinsInput.children.item([0]).value;
         currencyBoard.children.item([0]).value = num.toFixed(2);

         resCoin1.children.item([0]).value = coinsInput.children.item([0]).value;
         resCoin2.children.item([0]).value = 'Сумма: ' + coinsInput.children.item([0]).value;
         resCurrancy.children.item([0]).value = num.toFixed(2)
      } else if (currencyInput.children.item([1]).dataset.abb === 'USDT' && coinsInput.children.item([0]).value !== '') {
         const num = coinsInput.children.item([0]).value * coinsInput.children.item([1]).dataset.usdt;
         currencyInput.children.item([0]).value = num.toFixed(2)

         coinsBoard.children.item([0]).value = coinsInput.children.item([0]).value;
         currencyBoard.children.item([0]).value = num.toFixed(2);

         resCoin1.children.item([0]).value = coinsInput.children.item([0]).value;
         resCoin2.children.item([0]).value = 'Сумма: ' + coinsInput.children.item([0]).value;
         resCurrancy.children.item([0]).value = num.toFixed(2)
      }
   })
}

onChangeInput(inputDivs)

const burger = document.querySelector('.burger');
const dropdownList = document.querySelector('.drop_links');

const submitBtn = document.querySelector('#submit');
const popUpForm = document.querySelector('#form_pop_up_background');
const popUpPurchase= document.querySelector('#purchase_pop_up_background');
const payBtn = document.querySelector('#pay');

function dropDown(btn, list){
   btn.addEventListener('click', () => {
      list.classList.toggle('hidden')
   })
}

dropDown(burger,dropdownList)

function showPopUp(btn,list){

   btn.addEventListener('click', () => {
      if(resCoinsMain.children.item([0]).value !== 'Сумма: 0'){
         list.classList.toggle('hidden')
      }else {
         alert('Вы ничего не выбрали')
      }
   })

   list.addEventListener('click', (event) => {
      if(event.target === popUpForm){
         list.classList.add('hidden');
      }else if(event.target === popUpPurchase){
         location.reload()
      }
   })
}


showPopUp(submitBtn,popUpForm)
showPopUp(payBtn,popUpPurchase)