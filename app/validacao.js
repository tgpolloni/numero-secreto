function verificaSeOChutePossueUmValorValido(chute) {
    const numero = +chute

    if (chuteForInvalido(numero)) {
        elementoChute.innerHTML += '<div>Valor Invalido!</div>'
        return
    }
    if (numeroForMaiorOuMenorQueOValorPermitido(numero)) {
        elementoChute.innerHTML += `
        <div>Valor invalido: o numero secreto precisa estar entre ${menorValor} e ${maiorValor}</div>
        `
        return
    }
    if (numero === numeroSecreto) {
        document.body.innerHTML = `
            <h2>Voce acertou!!!</h2>
            <h3>O numero secreto é: ${numeroSecreto}</h3>

            <button id="jogar-novamente" class="btn-jogar">Jogar novamente</button>
        `
    }else if (numero > numeroSecreto) {
        elementoChute.innerHTML += `
        <div>O numero secreto é menor <i class="fa-solid fa-down-long"></i></div>
        `
    } else {
        elementoChute.innerHTML += `
        <div>O numero secreto é maior <i class="fa-solid fa-up-long"></i></div>
        `
    }
}

function chuteForInvalido(numero) {
    return Number.isNaN(numero);
}

function numeroForMaiorOuMenorQueOValorPermitido (numero) {
    return numero > maiorValor || numero < menorValor
}

document.body.addEventListener('click', e => {
    if (e.target.id == 'jogar-novamente') {
        window.location.reload()
    }
})
