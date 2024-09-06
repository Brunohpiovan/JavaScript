function tabuada(){
    var numero = document.getElementById('txtn')
    var res = document.getElementById('res')

    res.innerHTML = 'Gerando tabuada... <br>'

    var n = Number(numero.value)

    for(var c = 1;c <=10;c++){
        res.innerHTML +=`${n}x${c}=`+ n*c +`<br>`
    }
}