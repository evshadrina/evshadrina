const node_for_click = document.getElementById("for_click")

function find_edit(){
    const item  = document.getElementsByTagName('p')[0]
    console.log(item.innerText)
    item.innerText = 'новое имя Иван'

    //document.getElementsByTagName('p')[0].innerText='новое имя Иван'
}

node_for_click.addEventListener("click",find_edit)