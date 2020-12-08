<template>
    <b-navbar toggleable="sm" type="light" variant="light" fixed> 
        <b-navbar-toggle target="nav-text-collapse"></b-navbar-toggle>

        <b-navbar-brand>Clinipam</b-navbar-brand>

        <b-collapse id="nav-text-collapse" is-nav>
            <b-navbar-nav>
                <b-nav-item to="/">home</b-nav-item>
                <b-nav-item @click.native="obterUsuario">usuario</b-nav-item>
                <b-nav-item @click.native="obterUsuarioConnect">connect</b-nav-item>
                <b-nav-item @click.native="obterUsuarioTroque">troque</b-nav-item>
            </b-navbar-nav>
        </b-collapse>


        <!-- <ul class="menu m-0 pb-3 pl-0">
            <router-link to="/"> home </router-link>

            <router-link @click.native="obterUsuario" to="">usuario</router-link>
            <router-link @click.native="obterUsuarioConnect" to="">connect</router-link>
            <router-link @click.native="obterUsuarioTroque" to="">troque</router-link>

        </ul> -->

    </b-navbar>
</template>

