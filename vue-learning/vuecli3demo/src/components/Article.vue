<template>
<!--    <h1>这是文章id={{$route.params.id}}文章组件</h1>-->
    <h1>这是文章id={{id}}文章组件</h1>
</template>

<script>
  // export default {
  //   name:"article"
  // }
  export default {
    name:"article",
      props:['id']
  }
</script>
<style>

</style>