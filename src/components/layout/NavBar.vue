<template>
<el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect" router
         background-color="#545c64"
         text-color="#fff"
         active-text-color="#ffd04b">
  <el-menu-item index="/cmdb">数据管理</el-menu-item>
  <el-menu-item index="/zmm">数据整合</el-menu-item>
  <el-menu-item index="/dashborad">资源开放</el-menu-item>
  <el-menu-item index="4">数据探索</el-menu-item>
  <el-menu-item index="5">监控中心</el-menu-item>
  <el-menu-item index="6">资产统计</el-menu-item>
  <el-menu-item index="7">个人中心</el-menu-item>
  <el-menu-item index="8">系统管理</el-menu-item>
</el-menu>
</template>

<script>
export default {
  data () {
    return {
      activeIndex: '/cmdb'
    }
  },
  methods: {
    handleSelect (key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>

<style>

</style>
