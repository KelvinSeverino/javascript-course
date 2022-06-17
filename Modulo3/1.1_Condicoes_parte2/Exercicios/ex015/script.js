function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var formAno = document.getElementById('txtano')
    var res = document.querySelector('div#res')

    if(formAno.value.length == 0 || Number(formAno.value) > ano){
        alert('Verifique os dados e tente novamente!')
    } else{
        var formSex = document.getElementsByName('radsex')
        var idade = ano - Number(formAno.value)
        //res.innerHTML = `Idade Calculada ${idade}`
        var genero = ''

        var img = document.createElement('img') 
        img.setAttribute('id', 'imagem')       

        if(formSex[0].checked){
            genero = 'Homem'

            if(idade >= 0 && idade < 10){
                //Crianca
                img.setAttribute('src', 'img/bebe_homem.jpg')
            } else if(idade < 21){
                //Jovem
                img.setAttribute('src', 'img/jovem_homem.jpg')
            } else if(idade < 50){
                //Adulto
                img.setAttribute('src', 'img/adulto_homem.jpg')
            } else{
                //Idoso
                img.setAttribute('src', 'img/idoso_homem.jpg')
            }
        } else if(formSex[1].checked){
            genero = 'Mulher'

            if(idade >= 0 && idade < 10){
                //Crianca
                img.setAttribute('src', 'img/bebe_mulher.jpg')
            } else if(idade < 21){
                //Jovem
                img.setAttribute('src', 'img/jovem_mulher.jpg')
            } else if(idade < 50){
                //Adulta
                img.setAttribute('src', 'img/adulta_mulher.jpg')
            } else{
                //Idosa
                img.setAttribute('src', 'img/idosa_mulher.jpg')
            }
        }

        //res.style.textAlign = 'center'
        res.innerHTML = `Detectamenos ${genero} com idade ${idade}`
        //res.appendChild(img)

        //Criando DIV com classe css
        var div = document.createElement('div') 
        div.setAttribute('id', 'content') 
        div.setAttribute('class', 'content_img') 
        res.appendChild(div)
        
        //Pegando elemento div
        var content = document.querySelector('div#content')

        //Adicionando tag img com foto na div acima
        content.appendChild(img)
    }
}