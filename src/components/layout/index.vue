<template>
  <div>
    <header-bar/>
    <div id="content-wrap">
    <bread-crumb/>
    <transition>
      <keep-alive>
        <router-view id="content"/>
      </keep-alive>
    </transition>
    </div>
    <footer-bar/>
  </div>
</template>

<script>
import FooterBar from './FooterBar'
import HeaderBar from './HeaderBar'
import BreadCrumb from '../breadCrumb'
export default {
  components: {
    FooterBar,
    HeaderBar,
    BreadCrumb
  }
}
</script>

<style>
  @import "../../style/global.less";
  /*#app {*/
    /*font-family: 'Avenir', Helvetica, Arial, sans-serif;*/
    /*-webkit-font-smoothing: antialiased;*/
    /*-moz-osx-font-smoothing: grayscale;*/
    /*text-align: center;*/
    /*color: #2c3e50;*/
    /*!*margin-top: 60px;*!*/
  /*}*/
  #content-wrap{
    padding: 24px;
    background-color: white;
  }
  #content{
    min-height: calc(100vh - 184px);
    /*padding: 24px;*/
  }
</style>
