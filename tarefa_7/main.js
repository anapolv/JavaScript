new Vue({
    el: '#app',
    data: {
      message: 'Olá, Vue.js!',
      rawHtml: '<strong>Texto com HTML renderizado</strong>',
      imageSrc: 'https://via.placeholder.com/150', // ao deixar vazio o parâmetro, será exibido o valor do atributo imageAlt: "Imagem de exemplo"
      imageAlt: 'Imagem de exemplo',
      isLoggedIn: true, // ao alterar para "false" o texto muda para "Por favor, faça login."
      items: ['Item 1', 'Item 2', 'Item 3'],
      username: '',
      isHighlighted: false, // ao alterar para "true" o texto muda para a cor vermelha em negrito
    },
    methods: {
      showAlert() {
        alert('Botão clicado!');
      },
      toggleHighlight() {
        this.isHighlighted = !this.isHighlighted;
      }
    }
});