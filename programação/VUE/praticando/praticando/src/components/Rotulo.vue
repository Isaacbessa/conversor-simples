<template>
    <div class="rotulo">
        <label>{{nome}}:</label>
          <div class="elemento"></div>
             <slot></slot>
    </div>
</template>

<script>
export default {
    props: ['nome']
}
</script>