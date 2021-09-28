<template>
    <div class="citacao">
        <slot name="clinica"></slot> 
        <slot></slot>
        <div class="paciente"><slot name="paciente"></slot></div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
    .citacao {
        border: 1px solid #DDD;
        background-color: rgba(0, 0, 0, .1);
        padding: 25px;
        max-width: 450px;
    }

    .paciente {
        font-family: Arial, Helvetica, sans-serif;
        float: right;
    }
</style>
