<template>
<div id="app">
  <span>{{contador}}</span>
      <button @click="contador++">ADICIONAR</button>
      <button @click="contador--">DIMINUIR</button>
      <p v-if="esta_trabalhando">Estou  trabalhando no momento</p>
      <p v-else>Estou em busca de novas oportunidades</p>
      <Primeiro />
      <LifeCycle/>
      <Rotulo />
      <NomeCompleto />
</div>
  
</template>

<script>
import NomeCompleto from './components/NomeCompleto.vue'
import Primeiro from './components/Primeiro.vue'
import LifeCycle from './components/LifeCycle.vue'
import Rotulo from './components/Rotulo.vue'
export default {
components: {Primeiro, LifeCycle, Rotulo, NomeCompleto},
data: function(){
  return {
    contador: 0,
    esta_trabalhando: true,
    mostrar_email:true
}
 }
  }

  

</script>

<style>

</style>
