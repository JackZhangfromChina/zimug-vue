<template>
  <div id="app">
    <!-- <router-link to="/home"><h2>我的</h2></router-link>
    <router-link to="/about"><h2>关于</h2></router-link> -->
    <button @click="toHome"><h2>首页</h2></button>
    <button @click="toAbout"><h2>关于</h2></button>

    <router-view></router-view>
  </div>
</template>
<script>
  export default {
    name:"App",
    methods: {
      toHome () {
        this.$router.push("/home");
      },
      toAbout() {
        this.$router.push("/about");
      }
    }
  }
</script>