<template>
    <v-card class="d-flex align-center" hover
            :href="url" target="_blank">
        <v-avatar size="50" class="ml-3">
            <v-img :src='logoImg'></v-img>
        </v-avatar>
        <div style="width: 100%;">
            <v-card-title>{{title}}</v-card-title>
            <v-card-subtitle>{{subtitle}}</v-card-subtitle>
        </div>
    </v-card>
</template>

<script>
    export default {
        name: "WebSite",
        props:['url','logoImg','title','subtitle']
    }
</script>

<style scoped>

</style>