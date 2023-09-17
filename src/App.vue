<template>
  <div id="app" class="wrapper">
    <Header></Header>
    <!-- 路由组件出口 -->
    <router-view></router-view>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
export default {
  name: 'App',
  components: {
    Header,
    Footer
  }
}
</script>

<style lang='less' scoped>
  .wrapper{
    width: 90rem;
    margin: auto;
  }
</style>
