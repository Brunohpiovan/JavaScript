function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var min = data.getMinutes()
    msg.innerHTML = `Agora são ${hora} horas e ${min} minutos`
    if(hora >=0 && hora <12){
        //Bom dia
        img.src='manha.jpg'
        document.body.style.background= 'rgba(235, 192, 127, 0.808)'
    }else if (hora >= 12 && hora <= 18){
        //boa tarde
        img.src='tarde.jpg'
        document.body.style.background= 'rgb(206, 202, 196)'
    }else{
        //boa noite
        img.src='noite.jpg'
        document.body.style.background= 'rgba(3, 3, 3, 0.747)'
    }
}