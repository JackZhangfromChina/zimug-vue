<template>
  <v-app>
    <v-navigation-drawer clipped app dark color='primary' >
      <v-list>
        <!-- 一个一级菜单，没有子菜单-->
        <v-list-item dark link @click="">
          <v-list-item-icon>
            <v-icon>mdi-home</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>字母哥博客</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <!-- 一个菜单group，包含子菜单项-->
        <v-list-group no-action prepend-icon="mdi-creative-commons" color='white'>
          <template v-slot:activator>
            <v-list-item-content>
              <v-list-item-title>技术网站</v-list-item-title>
            </v-list-item-content>
          </template>

          <v-list-item dark dense link @click="">
            <v-list-item-title>通用类</v-list-item-title>
          </v-list-item>
          <v-list-item dark dense link @click="">
            <v-list-item-title>java</v-list-item-title>
          </v-list-item>
        </v-list-group>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app clipped-left>
      <!-- -->
      测试
    </v-app-bar>
    <!-- 根据应用组件来调整你的内容 -->
    <v-main>
      <!-- 给应用提供合适的间距 -->
      <v-container fluid>
        <!-- 如果使用 vue-router -->
<!--        <router-view></router-view>-->
        <v-row>

          <v-col class="mb-6">
            <WebSite url="https://www.aliyun.com" logo-img="http://cdn.zimug.com/aliyun.png"
                     title="阿里云"
                      subtitle="点击领取2000元限量云产品优惠券">

            </WebSite>
          </v-col>
          <v-col class="mb-6">
            <WebSite url="https://www.aliyun.com" logo-img="http://cdn.zimug.com/aliyun.png"
                     title="阿里云"
                     subtitle="点击领取2000元限量云产品优惠券">

            </WebSite>
          </v-col>
          <v-col class="mb-6">
            333
          </v-col>
          <v-col class="mb-6">
            444
          </v-col>

        </v-row>

        <v-row>

          <v-col class="mb-6">
            111
          </v-col>
          <v-col class="mb-6">
            222
          </v-col>
          <v-col class="mb-6">
            333
          </v-col>
          <v-col class="mb-6">
            444
          </v-col>

        </v-row>
      </v-container>
  </v-main>

    <v-footer app>
      <!-- -->
    </v-footer>
  </v-app>
</template>

<script>
  import WebSite from '../components/WebSite';

  export default {
    name: 'Home',

    components: {
      WebSite,
    },
  }
</script>
