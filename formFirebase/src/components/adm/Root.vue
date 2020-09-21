<template>
    <div class="container">
        <h1>Página de Gestão do Usuario</h1>

        <ul class="menu m-0 pb-3 pl-0">
            <router-link to="/"> home </router-link>

            <router-link @click.native="obterUsuario" to="">usuario</router-link>
            <router-link @click.native="obterUsuarioConnect" to="">connect</router-link>
            <router-link @click.native="obterUsuarioTroque" to="">troque</router-link>

        </ul>

        <b-list-group>
			<b-list-group-item class="mb-2" v-for="(usuario, id) in usuarios" :key="id">
				<strong>Nome: </strong> {{usuario.nome}} <br>
				<strong>E-mail: </strong> {{usuario.email}} <br>
				<strong>ID: </strong> {{id}}
			</b-list-group-item>
		</b-list-group>

        <b-list-group>
			<b-list-group-item class="mb-2" v-for="(usuario__troque, id) in usuario__troques" :key="id">
				<b-row>
                    <!-- <b-col>ID:{{ id }}</b-col> -->
                </b-row>
                <b-row>
                    <b-col> <b>Nome:</b> {{ usuario__troque.nome }}</b-col>
                    <b-col> <b>CPF:</b> {{ usuario__troque.cpf }} </b-col>
                </b-row>

                <b-row>
                    <b-col> <b>Estado:</b> {{ usuario__troque.estado }} </b-col>
                    <b-col> <b>Cidade:</b> {{ usuario__troque.cidade }} </b-col>
                </b-row>

                <b-row>
                    <b-col> <b>Contato:</b> {{ usuario__troque.contato }} </b-col>
                </b-row>

                <!-- <download-excel
                    class   = "btn btn-default"
                    :data   = "usuario__troques"
                    type    = "csv"
                    name    = "filename.xls">
                
                    Download Excel (you can customize this with html code!)
                
                </download-excel> -->

			</b-list-group-item>

		</b-list-group>

    </div>
</template>

<script>
export default {
    data () {
        return {
            usuarios: [],
            usuario__troques: []
        }
    },
    methods: {
        obterUsuario() {
            this.usuario__troques = []
            this.usuarios = []
            this.$http('usuarios.json').then(res => {
                this.usuarios = res.data;
				console.log(res.data)
			})
        },

        obterUsuarioConnect() {
            this.usuario__troques = []
            this.usuarios = []
            this.$http('form__connect.json').then(res => {
                this.usuarios = res.data;
				console.log(res.data)
			})
        },

        obterUsuarioTroque() {
            this.usuarios = []
            this.usuario__troques = []
            this.$http('troquedeplano.json').then(res => {
                this.usuario__troques = res.data;
				console.log(res.data)
			})
        }
    }
}
</script>

<style>
.menu a {
    color: orange;
    margin-right: 10px;
}

.menu a:hover {
    color: orangered;
}

/* .router-link-exact-active.router-link-active {
    color: orangered;
} */

ul li {
    list-style: none;
}

ul {
    display: flex;
    flex-direction: row;
}

li {
    min-width: 150px;
    text-align: left;
    cursor: pointer;
}

li:hover {
    text-decoration: underline;
}
</style>
