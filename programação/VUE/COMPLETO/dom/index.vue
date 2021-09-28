<template>
    <div id="app">
    <p>{{ titulo }}</p>
    <p>{{ saudacao() }}</p>
    <a v-bind:href="link">Google</a>
</div>
</template>


<script>
    new Vue({
        el: '#app',
        data: {
            titulo: 'Usando VueJS!',
            link: 'http://google.com.br'
        },
        methods: {
            saudacao: function() {
                console.log(this)
                return this.titulo
            }
        }
    })
</script>