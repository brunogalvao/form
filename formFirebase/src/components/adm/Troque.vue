<template>
    <div class="container">
        <h1>Página de Gestão do Torque de Plano</h1>

        <b-button class="ml-4" @click="obterUsuarioTroque">Mostrar Troque</b-button>

        <b-list-group>
			<b-list-group-item class="mt-4" v-for="(usuario, id) in usuarios" :key="id">
				<b-row>
                    <!-- <b-col>ID:{{ id }}</b-col> -->
                </b-row>
                <b-row>
                    <b-col> Nome: {{ usuario.nome }}</b-col>
                    <b-col> CPF: {{ usuario.cpf }} </b-col>
                </b-row>

                <b-row>
                    <b-col> Estado: {{ usuario.estado }} </b-col>
                    <b-col> Cidade: {{ usuario.cidade }} </b-col>
                </b-row>

                <b-row>
                    <b-col> Contato: {{ usuario.contato }} </b-col>
                </b-row>

			</b-list-group-item>

		</b-list-group>

    </div>
</template>

<script>
export default {
    data () {
        return {
            usuarios: [],
            items: []
        }
    },
    methods: {
        obterUsuarioTroque() {
            this.items = []
            this.$http('troquedeplano.json').then(res => {
                this.usuarios = res.data;
				// console.log(res.data)
			})
        }
    }
}
</script>

<style>
.list-group {
    font-size: .98rem;
}

</style>>