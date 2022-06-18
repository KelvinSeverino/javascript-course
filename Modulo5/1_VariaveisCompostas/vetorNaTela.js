let valores = [25,3,6,4,76,1]

//Exibindo de maneira errada e mal otimizada
/*
console.log(valores[0])
console.log(valores[1])
console.log(valores[2])
*/

//Percorrendo array e exibindo os valores
/*for(let pos=0; pos < valores.length; pos++)
{
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}*/

for(let pos in valores)
{
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}

//Pegando posicao onde esta armazenado o valor 3
let pos = valores.indexOf(3)

if(pos == -1)
{
    console.log(`O valor não foi encontrado!`)
}
else
{
    console.log(`O valor 3 está na posição ${pos}`)
}