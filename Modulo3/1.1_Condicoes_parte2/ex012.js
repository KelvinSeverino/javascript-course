var idade = 67
console.log(`Você tem ${idade} anos.`)
if(idade < 16){
    console.log("Não vota")
}
else if(idade < 18 || idade > 65)
{
    console.log("Voto Opcional")
}
else
{
    console.log("Voto obrigatório")
}

var agora = new Date()
var hora = agora.getHours();
console.log(`Agora são exatamente ${hora} horas.`)
if(hora >= 6 && hora < 12){
    console.log("Bom dia!")
}
else if(hora >= 12 && hora <= 18){
    console.log('Boa tarde!')
}
else if(hora >= 0 && hora <= 5)
{
    console.log('Boa madrugada!')
}
else
{
    console.log('Boa noite!')
}