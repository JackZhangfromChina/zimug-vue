import Vue from 'vue'
import Vuex from 'vuex'
import {
    COUNTER_ADD
} from './mutation-types'

//使用Vuex插件
Vue.use(Vuex);

const moduleA = {
    state: { counter: 0 },
    mutations: {
        increment (state) {
            // 这里的 `state` 对象是模块内的局部状态
            state.counter++
        }
    },
    getters: {
        doubleCount (state) {
            return state.counter * 2
        },
        sumWithRootCount (state, getters, rootState) {
            return state.count + rootState.count
        }
    },
    actions: {
        incrementRootSum ({ state, commit, rootState, rootGetters}) {
            if ((state.count + rootState.count) % 2 === 1) {
                commit('increment')
            }
        }
    },
}

//注意这里创建的是store对象，不是vuex对象
const store = new Vuex.Store({
    state: {
        counter: 0,
        firstName:"",
        lastName:""
    },
    mutations: {
        // add(state){
        //     state.counter++
        // },
        // sub(state){
        //     state.counter--
        // }
        // add(state,num){
        //     state.counter =  state.counter + num
        // },
        // sub(state,num){
        //     state.counter = state.counter - num
        // }
        // add(state,payload){
        //     state.counter =  state.counter + payload.num  * payload.multiple
        // },
        [COUNTER_ADD](state, payload) {
            state.counter = state.counter + payload.num * payload.multiple
        },
        sub(state, payload) {
            state.counter = state.counter - payload.num * payload.multiple
        },
        handleFirstNameVal(state,payload){
            state.firstName = payload
        },
        submitBtn(state){
            //setTimeout异步操作
            setTimeout(() => {
                state.firstName = "curry"
            }, 1000);
        }
    },
    actions: {
        // submitAction(context){
        //     setTimeout(() => {//异步操作
        //         //state数据的修改还是由mutation执行
        //         context.commit('submitBtn');
        //     }, 1000);
        // }
        // submitAction(context,payload){
        //     return new Promise((resolve,reject) =>{
        //         setTimeout(() => {
        //             context.commit('submitBtn');
        //             resolve("异步操作完成了" + payload)
        //         }, 1000);
        //     })
        // },
        submitAction({commit,state,getters}){
            setTimeout(() => {//异步操作
                commit('submitBtn');
            }, 1000);
        }
    },
    getters: {
        fullName(state){
            console.log('getters');
            console.log(state.firstName +"-"+ state.lastName);
            return state.firstName + "-" + state.lastName
        }
    },
    modules: {}
})
//导出对象
export default store