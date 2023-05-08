export function onChangeInput(nodes) {
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