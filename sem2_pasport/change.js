change=document.getElementById('change')

change.addEventListener('click',change_all)

function change_all(){
    if (document.getElementsByTagName('div')[0].innerHTML==="Иванов")
    {
        document.getElementsByTagName('div')[0].innerHTML="Ivanov"
        document.getElementsByTagName('div')[1].innerHTML="Ivan"
        document.getElementsByTagName('div')[2].innerHTML="Ivanovich"
        document.getElementsByTagName('div')[3].innerHTML="  fame  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;   27/05/2000 "
        document.body.style.backgroundImage = "url('eng_pas.jpg')"


    }
    else{
        if (document.getElementsByTagName('div')[0].innerHTML==="Ivanov")
        {
            document.getElementsByTagName('div')[0].innerHTML="Иванов"
            document.getElementsByTagName('div')[1].innerHTML="Иван"
            document.getElementsByTagName('div')[2].innerHTML="Иванович"
            document.getElementsByTagName('div')[3].innerHTML="  МУЖ  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;   27/05/2000 "
            document.body.style.backgroundImage = "url('pasport_shablon.png')"
            document.getElementsByTagName('div')[0].style.marginTop='400px';
            document.getElementsByTagName('div')[0].style.marginLeft='200px';


        }
    }//else
}//fun

