'use strict'

const nota1 = document.getElementById('nota1')

const nota2 = document.getElementById('nota2')

const buttonCalcular = document.getElementById('calcular')

const formulario = document.getElementById('formulario')



const somar = () => {
    const res = (parseFloat(nota1.value) + parseFloat(nota2.value)) / 2
    let situacao = ''


    if (parseFloat(nota1.value) > 10 || parseFloat(nota1.value) < 0 || parseFloat(nota2.value) > 10 || parseFloat(nota2.value < 0)) {

        situacao = 'Por favor, coloque apenas números válidos, entre 0-10'
        document.getElementById('situacao').innerHTML = situacao
        formulario.classList.remove('sombra-amarelo')
        formulario.classList.remove('sombra-azul')
        formulario.classList.remove('sombra-vermelho')
        formulario.classList.add('sombra-amarelo')
    } else if (nota1.value == '' || nota2.value == '') {

        situacao = 'Por favor, coloque apenas números válidos, não deixe espaço'
        document.getElementById('situacao').innerHTML = situacao
        formulario.classList.remove('sombra-amarelo')
        formulario.classList.remove('sombra-azul')
        formulario.classList.remove('sombra-vermelho')
        formulario.classList.add('sombra-amarelo')


    } else {
        if (res >= 7) {
            const link = document.getElementById('res')
            situacao = 'aprovado'
            document.getElementById('situacao').innerHTML = situacao
            link.value = res
            formulario.classList.remove('sombra-amarelo')
            formulario.classList.remove('sombra-azul')
            formulario.classList.remove('sombra-vermelho')
            formulario.classList.add('sombra-azul')

        } else {
            const link = document.getElementById('res')
            link.value = res
            situacao = 'reprovado'
            document.getElementById('situacao').innerHTML = situacao

            formulario.classList.remove('sombra-amarelo')
            formulario.classList.remove('sombra-azul')
            formulario.classList.remove('sombra-vermelho')
            formulario.classList.add('sombra-vermelha')
        }


    }



}

buttonCalcular.addEventListener('click', somar)




