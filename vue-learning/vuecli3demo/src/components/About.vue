<template>
    <div>
        <h1>这是关于页面</h1>
        <VuexCpn1></VuexCpn1>
        <VuexCpn2></VuexCpn2>
    </div>
</template>

<script>
    import VuexCpn1 from './VuexCpn1';
    import VuexCpn2 from './VuexCpn2';
    export default {
        name: "about",
        components: {
            VuexCpn1,
            VuexCpn2
        }
    }
</script>
<style>

</style>