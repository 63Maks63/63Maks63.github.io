import {resCoinsMain, popUpPurchase,reloadBtn, popUpForm} from "./main.js"

export function showPopUp(btn,list){

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
      }else if(event.target === popUpPurchase || event.target === reloadBtn){
         location.reload()
      }
   })
}