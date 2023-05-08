import { payPlaceholder, resCoinsMain } from "./main.js";


export function createRadioBtns(obj) {
   const div = document.createElement('div')
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
   return div
}

export function onClickRadioBtns(btnsDiv, div) {
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
         for (let i = 0; i < btnsDiv.childNodes.length; i++) {
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