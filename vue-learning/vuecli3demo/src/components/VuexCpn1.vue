<template>
    <div>
        <div>计数值：{{$store.state.counter}}</div>
<!--        <button @click="$store.state.counter++">+1</button>-->
<!--        <button @click="$store.state.counter&#45;&#45;">-1</button>-->

<!--        <button @click="$store.commit('add')">+1</button>-->
<!--        <button @click="$store.commit('sub')">-1</button>-->

<!--        <button @click="$store.commit('add',5)">+5</button>-->
<!--        <button @click="$store.commit('sub',5)">-5</button>-->
        <button @click="$store.commit('add',{num:5,multiple:2})">+5</button>
        <button @click="$store.commit('sub',{num:5,multiple:2})">-5</button>

        <div>
<!--            <label for="firstName">firstName:</label>-->
<!--            <input type="text" v-model="$store.state.firstName" id="firstName">-->

            <label for="firstName">firstName:</label>
            <input type="text" v-model="firstName" id="firstName">

            <label for="lastName">lastName:</label>
            <input type="text" v-model="$store.state.lastName" id="lastName">

            <div>VuexCpn1组件</div>
            <div>fullName：{{$store.state.firstName }}-{{$store.state.lastName }}</div>
            <div>fullName：{{$store.getters.fullName}}</div>
        </div>
    </div>
</template>

<script>
    export default {
        name:'VuexCpn1',
        data() {
            return {
                counter: 0
            }
        },
        computed: {
            firstName:{
                get(){
                    return this.$store.state.firstName
                },
                set(newVal){
                    this.$store.commit('handleFirstNameVal', newVal)
                }
            }
        },
    }
</script>