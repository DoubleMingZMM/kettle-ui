<template>
  <div id="app">
    <header-bar/>
    <router-view id="content"/>
    <footer-bar/>
  </div>
</template>

<script>
import { FooterBar, HeaderBar } from './components/layout/'
export default {
  components: {
    FooterBar,
    HeaderBar
  }
}
</script>

<style>
@import "./style/global.less";
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
#content{
  min-height: calc(100vh - 184px);
  padding: 24px;
}
</style>
