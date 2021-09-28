<template>
    <div class="componente">
        <h2>As Informações de Usuário</h2>
        <p>Vários detalhes...</p>
        <p>Nome do Usuário: <strong>{{nome}}</strong></p>
        <p>Idade do Usuário: <strong>{{ idade }}</strong></p>
        <button @click="reiniciarNome">Reiniciar Nome</button>
        <button @click="reiniciarFn()">Reiniciar Nome (Callback)</button>
    </div>
</template>

<script>
import barramento from '@/barramento'

export default {
    props: {
        nome: {
            type: String,
            default: 'Anônimo'
        },
        reiniciarFn: Function,
            idade: Number
    },
    methods: {
       // inverterNome() {
          //  return this.nome.split('').reverse().join('') //O método split() divide uma String em uma lista ordenada de substrings, coloca essas substrings em um array e retorna o array
         // revertendo a array e juntando novamente com o join
        // }, 

        reiniciarNome() { 
            // this.nome = 'Pedro'
            this.$emit('nomeMudou', 'Pedro')
        }
    },
    created() {
        barramento.quandoIdadeMudar(idade => { // estou importando uma função lá do arquivo
            this.idade = idade
        })
    }
}
</script>

<style scoped>
    .componente {
        flex: 1;
        background-color: #ec485f;
        color: #fff;
    }
</style>
