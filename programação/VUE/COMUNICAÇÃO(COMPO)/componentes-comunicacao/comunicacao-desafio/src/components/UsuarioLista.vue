<template>
    <div class="usuario-lista">
        <table>
            <thead>
                <tr>
                    <th>Nº</th>
                    <th>Nome</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="usuario in usuarios" :key="usuario.id"
                    @click="setUsuarioSelecionado(usuario)">
                    <td>{{ usuario.id }}</td>
                    <td>{{ usuario.nome }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import barramento from '@/barramento'

export default {
    props: { usuarios: Array }, // propriedade recebe um usario tipo array
    methods: {
        setUsuarioSelecionado(usuario) {
            barramento.setUsuarioSeleciondo(usuario)
            this.usuarios.pop() //pop() remove o último elemento de um array e retorna aquele elemento.
        }
    }
}
</script>

<style scoped>
   
    .usuario-lista {
        flex: 1;
        display: flex;
    }

    table {
        flex: 1;
        border-spacing: 0px;
        border-collapse: separate;
        border-top: 1px solid #CCC;
    }


    th, td {
        padding: 15px;
        border-bottom: 1px solid #CCC;
        font-family: 'Courier New', Courier, monospace;
    }

    tbody tr:hover {
        background: rgba(0, 0, 0, 0.1);
    }
</style>
