<template>
	<div id="app" class="container">
		<!-- <h1>HTTP com Axios</h1> -->
		<router-view />
	</div>
</template>

<script>
export default {
	methods: {
		salvar() {
			this.$http.post('usuarios.json', this.usuario)
				// resposta da requisição do post
				.then(resp => {
					this.usuario.nome = ''
					this.usuario.email = ''
				})
		},
		obterUsuarios() {
			this.$http('usuarios.json').then(res => {
				this.usuarios = res.data;
				console.log(res.data)
			})
		}
	}
	// created () {
	// 	this.$http.post('usuarios.json',{
	// 		nome: 'Bruno',
	// 		email: 'bruno_galvao@outlook.com',
	// 		idade: 32
	// 	}).then(res => console.log(res))
	// }
}
</script>

<style>
#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	color: #2c3e50;
	font-size: 1.5rem;
}

#app h1 {
	text-align: center;
	margin: 50px;
}
</style>
