// 3) Execute e explique o código-fonte Javascript abaixo:

let i = 0;
let numero = prompt('Insira um valor');
while (numero <= 10 ){
    document.write('<p>Linha ' + i + '</p>');
    i++;
    numero++;
}

//Resposta: 

//Primeiro o código solicita ao usuário que insira um valor númerico no prompt de comando da página web. 
//A seguir, esse valor passa pela condição while que é uma estrutura de repetição, onde o valor deve ser menor ou igual a 10.
//Se a condição for verdadeira, o código vai imprimir na tela o valor de i++, que começa no número 0 e vai até o 10.
//Ou seja, se o usuário inserir o valor númerico 0, o código retorna as linhas de 0 a 10;
//O valor númerico 1, o código retorna as linhas de 0 a 9;
//O valor númerico 2, o código retorna as linhas de 0 a 8;
//O valor númerico 3, o código retorna as linhas de 0 a 7... 
//E assim sucessivamente até o valor númerico 10, que retorna a linha 0.
//Se a condição for falsa, o código não retorna nada, apenas a tela em branco. Ou seja, valores númericos a partir de 11, não retornam nada.