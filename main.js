const form = document.getElementById('form_numbers')
const numeroDoisc = document.getElementById('segundoNumero')

let numeroUm = parseFloat(document.getElementById('primeiroNumero').value)
let numeroDois = parseFloat(document.getElementById('segundoNumero').value)

let formularioValido = false

function numeroValido(numeroUm, numeroDois) {
    return numeroDois > numeroUm
}

form.addEventListener('submit', function(e){
    e.preventDefault()

    const numeroUmc = document.getElementById('primeiroNumero')
    const mensagemPositiva = `O preenchimento é válido. O segundo número informado: (${numeroDoisc.value}) é maior que o primeiro número informado: (${numeroUmc.value})`
    
    formularioValido = numeroValido(numeroUmc.value, numeroDoisc.value)
    if (formularioValido) {
        const containermensagemPositiva = document.querySelector('.mensagem_positiva')
        containermensagemPositiva.innerHTML = mensagemPositiva
        containermensagemPositiva.style.display = 'block'
        document.querySelector('.mensagem_negativa').style.display = 'none'

        numeroUmc.value = ''
        numeroDoisc.value = ''


    } else {
        const containermensagemPositiva = document.querySelector('.mensagem_positiva')
        containermensagemPositiva.innerHTML = mensagemPositiva
        document.querySelector('.mensagem_negativa').style.display = 'block'
        containermensagemPositiva.style.display = 'none'
        numeroUmc.value = ''
        numeroDoisc.value = ''

    }     
    }
)