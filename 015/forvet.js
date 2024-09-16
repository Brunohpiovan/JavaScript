let num=[5,3,8,4,9]

num.sort()
for(var i in num){
    console.log(`Na posiçao ${i} se encontra: ${num[i]}`)
}

var pos = num.indexOf(5);

if(pos<0){
    console.log("Esse numero nao foi encontrado no vetor.")
}else{
    console.log(`Esse numero se encontra na posicao ${pos} do vetor.`)
}