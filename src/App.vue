<template>
  <div id="app">
    <transition>
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </transition>
  </div>
</template>

<script>
</script>

<style>
@import "./style/main.css";
@import "./style/color-dark.css";
/*#app {*/
  /*font-family: 'Avenir', Helvetica, Arial, sans-serif;*/
  /*-webkit-font-smoothing: antialiased;*/
  /*-moz-osx-font-smoothing: grayscale;*/
  /*text-align: center;*/
  /*color: #2c3e50;*/
  /*!*margin-top: 60px;*!*/
  /*height:100%;*/
/*}*/
/*#content{*/
  /*min-height: calc(100vh - 184px);*/
  /*padding: 24px;*/
/*}*/
</style>
