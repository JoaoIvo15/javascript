let numeros = []

function Adicionar(){
    let num = Number(document.getElementById('valor').value)
    if (document.getElementById('valor').value.length == 0){
        alert('Digite um número para adicionar!')
        return
    }else{
        if (num < 1 || num > 100 || numeros.includes(num)){
        alert('Numero inválido ou já adicionado')
        return
        }else{
            let tab = document.getElementById('prancheta')
            let item = document.createElement('option')
            item.text = `Valor ${num} adicionado!`
            tab.appendChild(item)
            numeros.push(num)
            document.getElementById('resposta').innerHTML = ``
        }
    }
    
}

function soma(){
    let soma = 0
    for (let i of numeros){
        soma += i
    }
    return soma
}

function Finalizar(){
    if (numeros.length == 0){
        alert('Adicione valores para finalizar!')
        return
    }else{
        let lista_ordenada = numeros.toSorted((a, b) => a - b)
        let soma_final = soma()
        document.getElementById('resposta').innerHTML = `Ao todo, temos ${numeros.length} números cadastrados. <br>
        O maior valor informado foi ${lista_ordenada[numeros.length - 1]}.<br>
        O menor valor informado foi ${lista_ordenada[0]}.<br>
        Somando todos os valores, temos ${soma_final}.<br>
        A média dos valores digitados é ${(soma_final)/numeros.length}`
    }
    
}
