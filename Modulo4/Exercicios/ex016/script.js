function contar(){
    var inicio = document.getElementById('inicio')
    var fim = document.getElementById('fim')
    var passo = document.getElementById('passo')    
    var res = document.querySelector('div#res')

    if(inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        res.innerHTML = 'Impossivel Contar!'
        //alert('Faltam dados!')
    } else {
        res.innerHTML = 'Contado: <br>'
        var i = Number(inicio.value)
        var f = Number(fim.value)
        var p = Number(passo.value)
        var c = i;
        if(p <= 0){
            alert('Passo inválido! Considerando passo 1')
            p = 1
        }

        if(i < f)
        {
            //Contagem crescente
            while(c <= f){
                res.innerHTML += `${c} \u{1f449}`
                c += p
            }        
        } else {
            //Contagem regressiva
            while(c >= f){
                res.innerHTML += `${c} \u{1f449}`
                c -= p
            }        
        }        
        res.innerHTML += `\u{1f9be}`
    }
}