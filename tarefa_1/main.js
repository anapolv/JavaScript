// 1)Criar um Javascript em arquivo separado do Html capaz de ler e imprimir uma informação digitada pelo usuário:

alert('Bem-vindo(a) ao nosso canal de atendimento!');

var nome = prompt('Qual é o seu nome?');

var telefone = prompt('Qual é o seu telefone?');

var comentario = prompt('Registre aqui como podemos te ajudar:');

alert = confirm(nome + ', sua mensagem foi registrada!');

document.writeln('Sr(a) ' + nome + ', <br/>Entraremos em contato dentro de 48h, através do telefone ' + telefone + ', referente ao assunto ' + comentario + '.');

