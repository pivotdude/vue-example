<template>
    <div class="navbar">
        <router-link class="navbar__img" to="/">Главная</router-link>
        <router-link class="navbar__img" to="/posts">Посты</router-link>
        <router-link class="navbar__img" to="/store">store</router-link>
        <router-link class="navbar__img" to="/authorization">Auth</router-link>
    </div>
</template>

<script>
    export default {
        name: 'nav-bar'
    }
</script>

<style scoped>
    .navbar {
        width: 100%;
        background: #acf;
        padding: 15px 0;
    }
    .navbar__img {
        text-decoration: none;
        font-size: 18px;
        padding: 10px 5px;
        background: #bbb;
        margin-left: 5px;
    }
</style>