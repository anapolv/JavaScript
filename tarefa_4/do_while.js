// 4)Use o Do-While no Javascript para adicionar números pares sequenciais em um vetor conforme quantidade informada pelo usuário (de 2 a 18).
// Imprima o conteúdo do respectivo vetor.

// Adiciona números pares em um vetor
function pares() {
    const qtd = parseInt(prompt("Insira a quantidade de números pares que deseja adicionar (de 2 a 18):"));

    // A condição if verifica se a quantidade está dentro do intervalo permitido
    if (qtd < 2 || qtd > 18) {
        document.write("Quantidade inválida! Deve estar entre 2 e 18.");
        return;
    }

    const numerosPares = [];
    let numero = 2; // Inicia com o primeiro número par 

    let i = 0; 
    do {
        numerosPares.push(numero);
        numero += 2; // Próximo número par... incrementa 2 a cada iteração
        i++;
    } while (i < qtd);

    // Imprime o conteúdo do vetor
    document.write("Números pares adicionados: ", numerosPares);
}

pares();
