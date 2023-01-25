const form = document.getElementById("form_numbers")



let numeroUm = parseInt(document.getElementById("primeiroNumero").value);
let numeroDois = parseInt(document.getElementById("segundoNumero").value);

function numeroValido(numeroUm, numeroDois) {
    return numeroDois > numeroUm;
}

let formularioValido = false
form.addEventListener('submit', function(e) {
    e.preventDefault()

    
    const numeroUmc = parseInt(document.getElementById('primeiroNumero').value)
    const numeroDoisc = parseInt(document.getElementById('segundoNumero').value)
    const mensagemPositiva = `O preenchimento é válido. O segundo número informado: (${numeroDoisc}) é maior que o primeiro número informado: (${numeroUmc})`
    
    formularioValido = numeroValido(numeroUmc, numeroDoisc)
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


