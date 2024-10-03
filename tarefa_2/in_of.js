// 2) Apresentar a diferença de in e of no for em Javascript. Use o exemplo abaixo como inspiração.

let elementos = ['Água' ,'Fogo' ,'Ar' ,'Terra'];
for (let indice in elementos){
    document.write('<p>' + elementos[indice] +'</p>');
}

for (let elemento of elementos){
    document.write('<p>' + elemento + '</p>');
}

//Resposta: 

//O for...in é um laço que itera sobre todas as propriedades enumeráveis de um objeto ou array, na ordem em que foram inseridas. 
//Ou seja, ele passa por todo o vetor e retorna as propriedades desse objeto. 
//Nesse caso, é necessário passar o indice dentro dos colchetes.

//Já o for...of é um laço específico para coleções, como o array. 
//Ele itera sobre os valores de qualquer coleção que tiver uma propriedade. 
//Ou seja, a cada iteração, um valor de uma propriedade diferente é atribuido a variável.



