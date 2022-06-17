function gerarTabuada(){
    var num = document.getElementById('num')
    var select = document.querySelector('select#tabuada')
    var option =  document.querySelector('option')

    if(num.value.length == 0){
        alert('Insira um número')
    }else{
        //Pegando o valor no tipo Numero
        var n = Number(num.value)
        
        //Limpando Select
        select.innerHTML = ''

        //Declarando contador
        var c = 1
        while(c <= 10){
            //Criando elemento option   
            var option = document.createElement('option') 

            //Passando valor para elemento
            //option.setAttribute('value', `${c}`)

            //Atribuindo texto ao option
            //option.appendChild(document.createTextNode(`${n} x ${c} = ${result}`))
            option.text = `${n} x ${c} = ${n * c}`

            //Atribuindo a option ao Select
            select.appendChild(option)

            //Contador
            c++
        }
    }
}