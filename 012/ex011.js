var idade = 5;
console.log(`Sua idade é ${idade} anos.`)
if(idade < 16){
    console.log('Voce ainda nao pode votar.')
}else if(idade < 18 || idade > 65){
    console.log('O seu voto é opcional')
}else{
    console.log('Seu voto é obrigatorio.')
}