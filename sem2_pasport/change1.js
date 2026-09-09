//console.log('мой скрипт ')

const change=document.getElementById('change')

change.addEventListener('click',my_fun)

function my_fun(){
    console.log('мой скрипт запущен')
    if (document.getElementsByTagName('div')[2].innerHTML==='Иванов'){

        document.getElementsByTagName('div')[2].innerHTML='Ivanov'
        document.getElementsByTagName('div')[3].innerHTML='Ivan'
        document.getElementsByTagName('div')[4].innerHTML='Ivanovich'
        document.body.style.backgroundImage = "url('eng_pas.jpg')"
        document.getElementsByTagName('div')[0].innerHTML=' &nbsp'
        document.getElementsByTagName('div')[1].innerHTML=' &nbsp'


    }
    else{


            document.getElementsByTagName('div')[2].innerHTML='Иванов'
            document.getElementsByTagName('div')[3].innerHTML='Иван'
            document.getElementsByTagName('div')[4].innerHTML='Иванович'
            document.body.style.backgroundImage = "url('pasport_shablon.png')"
            document.getElementsByClassName('fio')[0].style.marginLeft='200px'
            document.getElementsByClassName('fio')[0].style.marginTop='200px'
            document.getElementsByClassName('img')[0].style.marginTop='-70px'
            document.getElementsByTagName('div')[0].innerHTML=' Выдан МВД Росии  по Нижегородской области'
            document.getElementsByTagName('div')[1].innerHTML=' 20/05/2000  &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;   434-2342'
    }//else

}//fun

function sum(){
    let a=10;
    let b=20;
    s=a+b;
    console.log("сумм =",sum)
    console.log(s)

}



