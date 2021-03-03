<template>
    <div>
        <div>计数值：{{$store.state.counter}}</div>
<!--        <button @click="$store.state.counter++">+1</button>-->
<!--        <button @click="$store.state.counter&#45;&#45;">-1</button>-->
<!--        <button @click="$store.commit('add')">+1</button>-->
<!--        <button @click="$store.commit('sub')">-1</button>-->
<!--        <button @click="$store.commit('add',5)">+5</button>-->
<!--        <button @click="$store.commit('sub',5)">-5</button>-->
<!--        <button @click="$store.commit('add',{num:5,multiple:2})">+5</button>-->
        <button @click="addCounter()">+5</button>
        <button @click="$store.commit('sub',{num:5,multiple:2})">-5</button>

        <div>
            <div>VuexCpn2组件</div>
            <div>fullName：{{$store.state.firstName }}-{{$store.state.lastName }}</div>
            <div>fullName：{{$store.getters.fullName}}</div>
        </div>

        <button @click="$store.commit('submitBtn')">触发异步操作</button>
        <button @click="$store.dispatch('submitAction')">触发异步操作actions</button>
        <button @click="demoAction()">触发异步操作22</button>

    </div>
</template>

<script>
    import {
        COUNTER_ADD
    } from '../store/mutation-types'
    export default {
        name:'VuexCpn2',
        data() {
            return {
                counter: 0
            }
        },
        methods: {
            addCounter(){
                this.$store.commit(COUNTER_ADD,{num:5,multiple:2})
            },
            demoAction(){
                this.$store.dispatch('submitAction',"demoAction22")
                    .then(data =>{
                        console.log(data)
                    })
            }
        },
    }
</script>