<template>
    <div class="container">
        <h1>Lading Page</h1>

        <nav class="mb-4">
            <!-- <router-link to="/">home</router-link> -->
            <!-- <router-link to="/adm" class="ml-3">Adm</router-link> -->
        </nav>

	<b-row>
		<b-col cols="lg-8">
			<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis quia maiores illo necessitatibus sequi? Vero distinctio, rem, ratione, ut unde dolore sunt illum eum quas dolorum doloribus facilis architecto voluptatum?</p>
		</b-col>

		<b-col cols="lg-4">
			<b-card>
					<b-form-group label="Nome">
						<b-form-input type="text" size="lg"
							v-model="usuario.nome"
							placeholder="informe o nome"></b-form-input>
					</b-form-group>

					<b-form-group label="E-mail">
						<b-form-input type="text" size="lg"
							v-model="usuario.email"
							placeholder="informe o E-mail"></b-form-input>
					</b-form-group>

					<hr>

					<b-button @click.prevent="salvar"
						size="lg" variant="primary">Salvar</b-button>

					<b-button class="ml-4" @click.prevent="salvarConnect"
						size="lg" variant="primary">Salvar Connect</b-button>

				</b-card>
			</b-col>
		</b-row>

		<b-list-group>
			<b-list-group-item class="mb-2" v-for="(usuario, id) in usuarios" :key="id">
				<strong>Nome: </strong> {{usuario.nome}} <br>
				<strong>E-mail: </strong> {{usuario.email}} <br>
				<strong>ID: </strong> {{id}}
			</b-list-group-item>
		</b-list-group>
    </div>
</template>

<script>
export default {
    data () {
		return {
			usuarios: [],
			usuario: {
				nome: '',
				email: ''
			}
		}
    },
    methods: {
		salvar() {
			this.$http.post('usuarios.json', this.usuario)
				// resposta da requisição do post
				.then(resp => {
					this.usuario.nome = ''
					this.usuario.email = ''
				})
        },
        salvarConnect() {
			this.$http.post('form__connect.json', this.usuario)
				// resposta da requisição do post
				.then(resp => {
					this.usuario.nome = ''
					this.usuario.email = ''
				})
		}
	}
}
</script>