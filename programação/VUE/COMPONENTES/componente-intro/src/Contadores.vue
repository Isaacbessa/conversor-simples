<template>
    <div class="contadores">
        <h1>Contadores</h1>
        <app-contador v-for="c in 5" :key="c" /> <!--5 CONTADORES SERÃO EXIBIDOS COM O ATRIBUITO KEY = C DE CONTADORES -->
    </div>
</template>

<script>
import Contador from './Contador.vue' // IMPORTANDO O ARQUIVO

export default {
    components: { 'app-contador': Contador } // COMPONENTE COM O ATRIBUITO 'APP-CONTADOR' IGUAL CONTADOR
}
</script>

<style>

</style>
