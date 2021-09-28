new Vue({
    el: '#desafio',
    data: {
        nome: 'Isaac Maciel',
        idade: 20,
        imagem: 'http://files.cod3r.com.br/curso-vue/vue.jpg'
    },
    methods: {
        idadeVezes3() {
            return this.idade * 5
        },
        random() {
            return Math.random() // retorna um número aleatório entre 0 (inclusivo) e 1 (exclusivo):
        }
    }
})