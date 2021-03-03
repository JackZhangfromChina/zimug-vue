<style scoped>
  .layout{
    border: 1px solid #d7dde4;
    background: #f5f7f9;
    position: relative;
    border-radius: 4px;
    overflow: hidden;
  }
  .layout-header-bar{
    background: #fff;
    box-shadow: 0 1px 1px rgba(0,0,0,.1);
  }
  .layout-logo-left{
    width: 90%;
    height: 30px;
    background: #5b6270;
    border-radius: 3px;
    margin: 15px auto;
  }
  .menu-icon{
    transition: all .3s;
  }
  .rotate-icon{
    transform: rotate(-90deg);
  }
  .menu-item span{
    display: inline-block;
    overflow: hidden;
    width: 69px;
    text-overflow: ellipsis;
    white-space: nowrap;
    vertical-align: bottom;
    transition: width .2s ease .2s;
  }
  .menu-item i{
    transform: translateX(0px);
    transition: font-size .2s ease, transform .2s ease;
    vertical-align: middle;
    font-size: 16px;
  }
  .collapsed-menu span{
    width: 0px;
    transition: width .2s ease;
  }
  .collapsed-menu i{
    transform: translateX(5px);
    transition: font-size .2s ease .2s, transform .2s ease .2s;
    vertical-align: middle;
    font-size: 22px;
  }
</style>
<template>
  <div id="app">
    <div class="layout">
      <Layout :style="{minHeight: '100vh'}">
        <Sider ref="side1" hide-trigger collapsible :collapsed-width="78" v-model="isCollapsed">
          <Menu active-name="1-2" theme="dark" width="auto" :class="menuitemClasses">
            <MenuItem name="1-1">
              <Icon type="ios-navigate"></Icon>
<!--              <span><router-link to="/home"><h2>我的</h2></router-link></span>-->
<!--              <span><router-link :to="{name:'home'}"><h2>我的</h2></router-link></span>-->
              <span><router-link @click="toHome"><h2>我的</h2></router-link></span>
            </MenuItem>
            <MenuItem name="1-2">
              <Icon type="ios-search"></Icon>
<!--              <span><router-link to="/about"><h2>about</h2></router-link></span>-->
<!--              <span><router-link :to="{name:'about'}"><h2>关于</h2></router-link></span>-->
              <span><router-link @click="toAbout"><h2>关于</h2></router-link></span>
            </MenuItem>
          </Menu>
        </Sider>
        <Layout>
          <Header :style="{padding: 0}" class="layout-header-bar">
            <Icon @click.native="collapsedSider" :class="rotateIcon" :style="{margin: '0 20px'}" type="md-menu" size="24"></Icon>
          </Header>
          <Content :style="{margin: '20px', background: '#fff', minHeight: '260px'}">
            <router-view></router-view>
          </Content>
        </Layout>
      </Layout>
    </div>
  </div>
</template>

<script>
  export default {
    name:'App',
    data () {
      return {
        isCollapsed: false
      }
    },
    computed: {
      rotateIcon () {
        return [
          'menu-icon',
          this.isCollapsed ? 'rotate-icon' : ''
        ];
      },
      menuitemClasses () {
        return [
          'menu-item',
          this.isCollapsed ? 'collapsed-menu' : ''
        ]
      }
    },
    methods: {
      toHome(){
        this.$router.push("/home");
      },
      toAbout(){
        this.$router.push("/about");
      },
      collapsedSider () {
        this.$refs.side1.toggleCollapse();
      }
    }
  }
</script>


