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
const payPlaceholder = document.getElementById('pay_method');

function onClickRadioBtns(btnsDiv, div) {
   const [input, placeholder] = [...div.children];

   btnsDiv.addEventListener('click', (event) => {

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

const inputDivs = document.querySelectorAll('.input_div');

function onChangeInput(nodes) {
   const [coinsInput, currencyInput, coinsBoard, currencyBoard] = [...nodes];

   coinsInput.children.item([0]).addEventListener('input', () => {

      if (currencyInput.children.item([1]).dataset.abb === 'RUB' && coinsInput.children.item([0]).value !== '') {
         const num = coinsInput.children.item([0]).value * coinsInput.children.item([1]).dataset.rub;
         currencyInput.children.item([0]).value = num.toFixed(2);

         coinsBoard.children.item([0]).value = coinsInput.children.item([0]).value;
         currencyBoard.children.item([0]).value = num.toFixed(2)

         coinsBoard.children.item([1]).textContent = coinsInput.children.item([1]).textContent
         currencyBoard.children.item([1]).textContent = currencyInput.children.item([1]).textContent
      } else if (currencyInput.children.item([1]).dataset.abb === 'USDT' && coinsInput.children.item([0]).value !== '') {
         const num = coinsInput.children.item([0]).value * coinsInput.children.item([1]).dataset.usdt;
         currencyInput.children.item([0]).value = num.toFixed(2)

         currencyBoard.children.item([0]).value = coinsInput.children.item([1]).value;
         currencyBoard.children.item([0]).value = num.toFixed(2)

         coinsBoard.children.item([1]).textContent = coinsInput.children.item([1]).textContent
         currencyBoard.children.item([1]).textContent = currencyInput.children.item([1]).textContent
      }
   })

   coinsInput.children.item([0]).addEventListener('click', () => {

      if (currencyInput.children.item([1]).dataset.abb === 'RUB' && coinsInput.children.item([0]).value !== '') {
         const num = coinsInput.children.item([0]).value * coinsInput.children.item([1]).dataset.rub;
         currencyInput.children.item([0]).value = num.toFixed(2)

         coinsBoard.children.item([0]).value = coinsInput.children.item([0]).value;
         currencyBoard.children.item([0]).value = num.toFixed(2)

         coinsBoard.children.item([1]).textContent = coinsInput.children.item([1]).textContent
         currencyBoard.children.item([1]).textContent = currencyInput.children.item([1]).textContent
      } else if (currencyInput.children.item([1]).dataset.abb === 'USDT' && coinsInput.children.item([0]).value !== '') {
         const num = coinsInput.children.item([0]).value * coinsInput.children.item([1]).dataset.usdt;
         currencyInput.children.item([0]).value = num.toFixed(2)

         currencyBoard.children.item([0]).value = coinsInput.children.item([1]).value;
         currencyBoard.children.item([0]).value = num.toFixed(2)

         coinsBoard.children.item([1]).textContent = coinsInput.children.item([1]).textContent
         currencyBoard.children.item([1]).textContent = currencyInput.children.item([1]).textContent
      }

   })
}

onChangeInput(inputDivs)

// const divForm = document.getElementById('form_div');

// function createForm(div) {
//    const [input,placeholder] = [...div.children]
//    const form = document.createElement('form');
//    const paymentMethod = document.createElement('input')
//    const email = document.createElement('input');
//    const nameInput = document.createElement('input');
//    console.log(placeholder.dataset.rub)

//    switch (placeholder.dataset.rub ) {
//       case 'phone':
//          paymentMethod.placeholder = 'Номер мобильного телефона';
//          break;
//       case 'card':
//          paymentMethod.placeholder = 'Номер карты Visa/MC';
//          break;
//       case 'crypto':
//          paymentMethod.placeholder = 'Номер криптокошелька';
//          break;
//       default:
//          paymentMethod.placeholder = 'Номер карты Visa/MC';
//          break;
//    }
//    email.placeholder = 'E-mail';
//    nameInput.placeholder = 'ФИО';

//    form.append(nameInput);
//    form.append(email);
//    form.append(paymentMethod);

//    return form 
// }

// divForm.append(createForm(currencyBoard))
