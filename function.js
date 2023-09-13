const node_for_click_all = document.getElementById("for_click_all")

function find_edit_all(){
    //const item  = document.getElementsByTagName('p')[0]
    //console.log(item.innerText)
   //item.innerText = 'новое Имя Ivan'

    document.getElementsByTagName('p')[0].innerText='новое имя Петр'
    document.getElementsByTagName('p')[1].innerText='новая фио Петров'
    document.getElementsByTagName('p')[2].innerHTML='новый год для Петрова 2022'
    document.getElementsByClassName('block1')[0].innerHTML='новый блок'

}
node_for_click_all.addEventListener("click",find_edit_all)


const node_for_click_name = document.getElementById("for_click_name")
function find_edit_name(){
      document.getElementsByTagName('p')[0].innerText='изменить имя Семен'

}
node_for_click_name.addEventListener("click",find_edit_name)