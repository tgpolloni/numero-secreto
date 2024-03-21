function verificaSeOChutePossueUmValorValido(chute) {
    const numero = +chute

    if (chuteForInvalido(numero)) {
        elementoChute.innerHTML += '<div>Valor Invalido!</div>'
    }
    if (numeroForMaiorOuMenorQueOValorPermitido(numero)) {
        elementoChute.innerHTML += `
        <div>Valor invalido: o numero secreto precisa estar entre ${menorValor} e ${maiorValor}</div>
        `
    }
    if (numero === numeroSecreto) {
        document.body.innerHTML = `
            <h2>Voce acertou!!!</h2>
            <h3>O numero secreto era: ${numeroSecreto}</h3>
        `
    }
}

function chuteForInvalido(numero) {
    return Number.isNaN(numero);
}

function numeroForMaiorOuMenorQueOValorPermitido (numero) {
    return numero > maiorValor || numero < menorValor
}
