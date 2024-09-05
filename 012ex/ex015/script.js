function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var Fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if(Fano.value.length == 0 || Fano.value > ano){
        alert('[ERRO] Verifique os dados e tente novamente!')
    }else{
        var fsex =  document.getElementsByName('radsx')
        var idade = ano - Number(Fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id','foto')
        if(fsex[0].checked){
            genero = 'Homem'
            if(idade >=0 && idade < 10){
                //crianca
                img.setAttribute('src','imagens/meninocrianca.jpg')
            }else if(idade < 21){
                //jovem
                img.setAttribute('src','imagens/meninojovem.jpg')
            }else if(idade <50){
                //adulto
                img.setAttribute('src','imagens/adultoh.jpg')
            }else{
                //idoso
                img.setAttribute('src','imagens/idoso.jpg')
            }
        }else if (fsex[1].checked){
            genero = 'Mulher'
            if(idade >=0 && idade < 10){
                //crianca
                img.setAttribute('src','imagens/meninacrianca.jpg')
            }else if(idade < 21){
                //jovem
                img.setAttribute('src','imagens/meninajovem.jpg')
            }else if(idade <50){
                //adulto
                img.setAttribute('src','imagens/adultom.jpg')
            }else{
                //idoso
                img.setAttribute('src','imagens/idosa.jpg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}