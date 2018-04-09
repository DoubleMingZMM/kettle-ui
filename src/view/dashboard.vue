<template>
<div>
  <!--<el-breadcrumb separator="/">-->
    <!--<el-breadcrumb-item><i class="el-icon-menu"></i> 表格</el-breadcrumb-item>-->
    <!--<el-breadcrumb-item>基础表格</el-breadcrumb-item>-->
  <!--</el-breadcrumb>-->
  {{msg}}
</div>
</template>

<script>
export default {
  name: 'dashboard',
  data () {
    return {
      msg: 'dashboard'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
