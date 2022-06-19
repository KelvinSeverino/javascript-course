var num = document.getElementById('fnum')
var select = document.querySelector('select#listNum')
var res = document.querySelector('div#res')
var valores = []

//Verificar se esta dentro do intervalo
function isNumero(n){
    if(Number(n) >= 1 && Number(n) <= 100){
        return true
    }else{
        return false
    }
}

//Verifica se o numero ja esta no array
function inLista(n, l){
    if(l.indexOf(Number(n)) != -1){
        return true
    }else{
        return false
    }
}

function adicionar(){
    if(isNumero(num.value) && !inLista(num.value, valores)){
        //Adicionando valor no Array
        valores.push(Number(num.value))   
        
        //Criando elemento option   
        var option = document.createElement('option')

        //Atribuindo texto ao option
        option.text = `Valor ${num.value} adicionado`

        //Atribuindo a option ao Select
        select.appendChild(option)
    }else{
        alert('Valor Inválido ou já encontrado na lista.')
    }        
    //Limpando div
    res.innerHTML = ''
    //Apagando valor do campo
    num.value = ''
    //Colocando foco no campo
    num.focus()
}

//Somando todos os valores dos elementos do array
function somaArray(l){
    soma = 0
    for(let pos in l)
    {
        soma += l[pos]
    }
    return soma
}

function finalizar(){
    if(valores.length == 0)
    {
        alert('Adicione valores antes de finalizar')
    }else{
        //Ordenando valores no array
        valores.sort()
    
        res.innerHTML = `<p>Temos ao todo ${valores.length} números cadastrados</p>`
        res.innerHTML += `<p>O Maior valor informado foi ${valores.slice(-1)}</p>`
        res.innerHTML += `<p>O Menor valor informado foi ${valores[0]}</p>`
        res.innerHTML += `<p>Somandos todos os valores, temos ${somaArray(valores)}</p>`
        res.innerHTML += `<p>A média dos valores digitados é ${somaArray(valores) / valores.length}</p>`
    }
}