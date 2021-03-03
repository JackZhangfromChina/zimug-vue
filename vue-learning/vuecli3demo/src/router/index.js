import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from "../components/Home";
import Article from "../components/Article";
import About from "../components/About";
import News from "../components/News";
// const About = () => ("../components/About");

Vue.use(VueRouter)

const routes = [
    {
        path: '/',              //当访问根路径的时候
        redirect: '/home'        // 重定向到redirect配置路径
    },
    {
        name:"home",
        path: "/home",
        component: Home,
        children:[
            {
                path: '',component : Article
            },
            {
                name:'article',
                path:'article/:id?',
                // props:true,
                props:(route)=>({id:route.params.id}),
                component:Article
            },{
                path:'news',
                component:News
            }
        ]
    }, {
        name:"about",
        path: "/about",
        component: About
    }
];

const router = new VueRouter({
    routes,
    mode: 'history'
})

export default router
