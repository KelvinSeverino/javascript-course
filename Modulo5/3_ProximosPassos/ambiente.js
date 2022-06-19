//Declarando um Objeto
let amigo = {
    nome:'jose', 
    sexo:'m', 
    peso:85.4,
    engordar(p=0){
        console.log('Engordou')
        this.peso += p
    }
}

//Exibindo o tipo
//console.log(typeof amigo)

//Rodando funcao de dentro do objeto
amigo.engordar(2)

//Exibindo no console
console.log(`${amigo.nome} pesa ${amigo.peso}kg`)

var num = 8
num **= 2
console.log(num)