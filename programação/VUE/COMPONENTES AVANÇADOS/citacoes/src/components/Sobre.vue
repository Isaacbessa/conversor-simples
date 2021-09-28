<template>
    <div>
        <p class="nome">Atualizado</p>
        <p class="versao">Versão 1.0</p>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
    div {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        border: 1px solid #DDD;
        height: 250px;
        width: 250px;
        border-radius: 100px;
    }

    p {
        margin: 0;
    }

    .nome {
        font-size: 1.8rem;
        font-weight: bold;
    }

    .versao {
        font-size: 1.4rem;
    }
</style>
