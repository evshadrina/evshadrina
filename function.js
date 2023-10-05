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

function insert_img(){
// Создаем элемент изображения
const img = document.createElement('img');

// Устанавливаем путь к изображению
img.src = 'image.jpg';

// Устанавливаем альтернативный текст для изображения
img.alt = 'Описание изображения';
img.height = '150';
img.width='150';

// Получаем контейнер, куда нужно вставить изображение
const container = document.querySelector('#image-container');
//const container = document.getElementById("image-container");
// Вставляем изображение в контейнер
container.append(img);

//document.getElementsByTagName("div")[0].appendChild(img); // вставили в div 1(внизу)
}
const node_insert_img = document.getElementById("insert_img")
node_insert_img.addEventListener("click",insert_img)

function insert_table(){
let table = document.querySelector('#table');

for (let i = 0; i < 3; i++) {
	let tr = document.createElement('tr');

	for (let i = 0; i < 3; i++) {
		let td = document.createElement('td');
		tr.appendChild(td);
		td.innerText="AAA"
	}

	table.appendChild(tr);
}
}

const node_insert_table = document.getElementById("insert_table")
node_insert_table.addEventListener("click",insert_table)