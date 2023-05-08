export function dropDown(btn, list){
   btn.addEventListener('click', () => {
      list.classList.toggle('hidden')
   })
}