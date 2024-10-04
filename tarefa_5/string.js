// 5)Implemente um programa em Javascript que use pelo menos três funções de string.

// Função para contar o número de palavras na frase
function contarPalavras(frase) {
    const palavras = frase.trim().split(/\s+/); // Divide a frase em palavras
    return palavras.length;
}

// Função para converter a frase para letras maiúsculas
function converterMaiusculas(frase) {
    return frase.toUpperCase();
}

// Função para substituir uma palavra por outra na frase
function substituirPalavra(frase, palavraAntiga, palavraNova) {
    return frase.replace(new RegExp(palavraAntiga, 'g'), palavraNova);
}

// Função principal
function programaStrings() {
    const frase = prompt('Digite uma frase:');

    const numeroPalavras = contarPalavras(frase);
    document.write(`Número de palavras na frase: ${numeroPalavras}</p>`);

    const fraseMaiusculo = converterMaiusculas(frase);
    document.write(`Frase em maiúsculo: ${fraseMaiusculo}</p>`);

    const palavraAntiga = prompt("Digite a palavra a ser substituída:");
    const palavraNova = prompt("Digite a nova palavra:");
    const novaFrase = substituirPalavra(frase, palavraAntiga, palavraNova);
    document.write(`Nova frase: ${novaFrase}`);
}

// Chama a função principal
programaStrings();
