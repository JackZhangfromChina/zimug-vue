<template>
    <div id="home">
        <h1>This is an home page</h1>
        <router-link to="/home/article/1"><h2>id=1 文章</h2></router-link>
        <router-link to="/home/article/2"><h2>id=2 文章</h2></router-link>
        <router-link to="/home/news"><h2>新闻</h2></router-link>
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        name: "home"
    }
</script>
<style>

</style>