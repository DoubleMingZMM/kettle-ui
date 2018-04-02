<template>
  <header class="header">
    <nav class="inner">
      <img src="../../assets/logo.png" class="logo" alt="logo"/>
      <div class="title">数据资源管理平台</div>
      <NavBar class="nav-mar"/>
      <div class="setting">
        <i class="el-icon-edit setting-span"></i>
        <span class="setting-span">daniel...</span>
        <span class="setting-span">帮助</span>
        <span class="setting-span">退出</span>
      </div>
    </nav>
  </header>
</template>

<script>
import NavBar from './NavBar'
export default {
  components: {
    NavBar
  }
}
</script>

<style>
.header{
  background-color:#545c64;
  position:fixed;
  z-index:999;
  height:60px;
  top:0;
  left:0;
  right:0;
}
.inner{
  box-sizing:border-box;
  margin:0 auto;
  padding:0 16px;
  height: 60px;
}
.logo{
  float: left;
  height: 40px;
  width: 40px;
  padding:10px;
}
.title{
  height: 60px;
  float:left;
  line-height: 60px;
  color: white;
  font-size: 18px;
  font-weight: bold;
}
.nav-mar{
  float:left;
  margin-left: 64px;
}
.setting{
  float: right;
  height: 60px;
  line-height: 60px;
  color:#fff;
  font-size: 14px;
  margin-left: 48px;
}
.setting span{
  margin-left: 16px;
}
.setting-span{
}
.setting-span:hover{
  cursor: pointer;
}
</style>
