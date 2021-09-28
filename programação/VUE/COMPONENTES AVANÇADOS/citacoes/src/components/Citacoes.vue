<template>
    <div class="citacoes">
        <span>
            <button @click="numero--">&lt;</button>
            <button @click="numero++">&gt;</button>
        </span>
        <Citacao>
            <h1 slot="paciente">{{ citacoes[indice].paciente }}</h1>
            <p>{{ citacoes[indice].texto }}</p>
            <h6 slot="clinica">{{ citacoes[indice].clinica }}</h6>
        </Citacao>
    </div>
</template>

<script>
import Citacao from './Citacao.vue'

export default {
    components: { Citacao },
    data() {
        return {
            numero: 0,
            citacoes: [{
                clinica: 'Hospital Doutor César cals',
                texto: 'Nutricionista',
                paciente: 'Nicolas'
            }, { 
                clinica: 'Hospital Doutor César cals',
                texto: 'Cardiologista.',
                paciente: 'Roberta'
            }, {
                clinica: 'Hospital Doutor César cals',
                texto: 'Exame de sangue',
                paciente: 'Gustavo'
            }]
        }
    },
    computed: { 
        indice() {
            return Math.abs(this.numero % 3) //A função Math.abs(x) retorna o valor absoluto de um número "x",
        }
    },
    created() {
        console.log('created')
    },
    destroyed() {
        console.log('destroyed')
    },
    activated() {
        console.log('activated')
    },
    deactivated() {
        console.log('deactivated')
    }
}
</script>

<style >
    .citacoes {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .clinica {
        font-family: Arial, Helvetica, sans-serif;
    }
</style>
