<template>
  <div>
    <el-input style="width:400px"
      placeholder="请输入资源名称"
      prefix-icon="el-icon-search"
      v-model="inputCMDB">
    </el-input>
    <el-button type="primary">查询</el-button>
    <el-button type="info" @click="handleFilterGroupVisibility">显示筛选条件</el-button>
    <div id="filter-group" v-show="filterGroupVisible">
      <div class="filter-group-item"><span class="title-w">数据源:</span><el-tag size="medium" class="mar-l" type="danger">标签1</el-tag><el-tag size="medium" class="mar-l" type="warning">标签2</el-tag></div>
      <div class="filter-group-item"><span class="title-w">来源抽取频率:</span><el-tag size="medium" class="mar-l" type="danger">标签1</el-tag><el-tag size="medium" class="mar-l" type="warning">标签2</el-tag></div>
      <div class="filter-group-item"><span class="title-w">应用系统:</span><el-tag class="mar-l" size="medium" type="danger">标签1</el-tag><el-tag size="medium" class="mar-l" type="warning">标签2</el-tag></div>
      <div class="filter-group-item"><span class="title-w">资源提供单位:</span><el-tag size="medium" class="mar-l" type="danger">标签1</el-tag><el-tag size="medium" class="mar-l" type="warning">标签2</el-tag></div>
      <div class="filter-group-item"><span class="title-w">要素类别:</span><el-tag size="medium" class="mar-l" type="danger">标签1</el-tag><el-tag size="medium" class="mar-l" type="warning">标签2</el-tag></div>
      <div class="filter-group-item"><span class="title-w">分类N:</span><el-tag size="medium" class="mar-l" type="danger">标签1</el-tag><el-tag size="medium" class="mar-l" type="warning">标签2</el-tag></div>
      <div class="filter-group-item"><span class="title-w">已选条件:</span><el-tag class="mar-l" :key="tag" v-for="tag in dynamicTags" closable :disable-transitions="false" @close="handleClose(tag)">{{tag}}</el-tag><el-button class="mar-l" size="medium " type="danger">清空</el-button></div>
    </div>
    <div style="display: block;margin-top: 24px;">
      <el-tabs v-model="activeName2" type="border-card" @tab-click="handleClick">
        <el-tab-pane label="业务资源(222)" name="first">
          <el-row :gutter="20">
            <el-col :span="6">
              <el-card style="height:260px;margin-bottom:20px;" shadow="never">
                <div>
                  <el-checkbox v-model="checked"></el-checkbox>
                  <div style="height:30px;text-align:center;">公安部七类重点人员共享信息</div>
                  <div style="height:25px;line-height:25px;clear: both;">hhhhh</div>
                  <div style="height:25px;line-height:25px;clear: both;">hhhhh</div>
                  <div style="height:25px;line-height:25px;clear: both;">hhhhh</div>
                  <div style="height:25px;line-height:25px;clear: both;">hhhhh</div>
                  <div style="height:25px;line-height:25px;clear: both;">hhhhh</div>
                  <div style="height:25px;line-height:25px;clear: both;">hhhhh</div>
                </div>
                <div class="bottom clearfix">
                  <el-button type="text" class="button">删除</el-button>
                  <el-button type="text" class="button">修改</el-button>
                  <el-button type="text" class="button">注册数据表</el-button>
                </div>
              </el-card>
            </el-col>
            <el-col :span="6">
              <el-card style="height:260px;margin-bottom:20px;" shadow="never">
                <div>
                  <el-checkbox v-model="checked"></el-checkbox>
                  <div style="height:30px;text-align:center;">公安部七类重点人员共享信息</div>
                  <div style="height:25px;line-height:25px;">hhhhh</div>
                  <div style="height:25px;line-height:25px;">hhhhh</div>
                  <div style="height:25px;line-height:25px;">hhhhh</div>
                  <div style="height:25px;line-height:25px;">hhhhh</div>
                  <div style="height:25px;line-height:25px;">hhhhh</div>
                  <div style="height:25px;line-height:25px;">hhhhh</div>
                </div>
                <div class="bottom clearfix">
                  <el-button type="text" class="button">删除</el-button>
                  <el-button type="text" class="button">修改</el-button>
                  <el-button type="text" class="button">注册数据表</el-button>
                </div>
              </el-card>
            </el-col>
            <el-col :span="6">
              <el-card style="height:260px;margin-bottom:20px;" shadow="never">
                <div>
                  <el-checkbox v-model="checked"></el-checkbox>
                  <div style="height:30px;text-align:center;">公安部七类重点人员共享信息</div>
                  <div style="height:25px;line-height:25px;">hhhhh</div>
                  <div style="height:25px;line-height:25px;">hhhhh</div>
                  <div style="height:25px;line-height:25px;">hhhhh</div>
                  <div style="height:25px;line-height:25px;">hhhhh</div>
                  <div style="height:25px;line-height:25px;">hhhhh</div>
                  <div style="height:25px;line-height:25px;">hhhhh</div>
                </div>
                <div class="bottom clearfix">
                  <el-button type="text" class="button">删除</el-button>
                  <el-button type="text" class="button">修改</el-button>
                  <el-button type="text" class="button">注册数据表</el-button>
                </div>
              </el-card>
            </el-col>
            <el-col :span="6">
              <el-card style="height:260px;margin-bottom:20px;" shadow="never">
                <div>
                  <el-checkbox v-model="checked"></el-checkbox>
                  <div style="height:30px;text-align:center;">公安部七类重点人员共享信息</div>
                  <div style="height:25px;line-height:25px;">hhhhh</div>
                  <div style="height:25px;line-height:25px;">hhhhh</div>
                  <div style="height:25px;line-height:25px;">hhhhh</div>
                  <div style="height:25px;line-height:25px;">hhhhh</div>
                  <div style="height:25px;line-height:25px;">hhhhh</div>
                  <div style="height:25px;line-height:25px;">hhhhh</div>
                </div>
                <div class="bottom clearfix">
                  <el-button type="text" class="button">删除</el-button>
                  <el-button type="text" class="button">修改</el-button>
                  <el-button type="text" class="button">注册数据表</el-button>
                </div>
              </el-card>
            </el-col>
            <el-col :span="6">
              <el-card style="height:260px;margin-bottom:20px;" shadow="never">
                <div>
                  <el-checkbox v-model="checked"></el-checkbox>
                  <div style="height:30px;text-align:center;">公安部七类重点人员共享信息</div>
                  <div style="height:25px;line-height:25px;">hhhhh</div>
                  <div style="height:25px;line-height:25px;">hhhhh</div>
                  <div style="height:25px;line-height:25px;">hhhhh</div>
                  <div style="height:25px;line-height:25px;">hhhhh</div>
                  <div style="height:25px;line-height:25px;">hhhhh</div>
                  <div style="height:25px;line-height:25px;">hhhhh</div>
                </div>
                <div class="bottom clearfix">
                  <el-button type="text" class="button">删除</el-button>
                  <el-button type="text" class="button">修改</el-button>
                  <el-button type="text" class="button">注册数据表</el-button>
                </div>
              </el-card>
            </el-col>
            <el-col :span="6">
              <el-card style="height:260px;margin-bottom:20px;" shadow="never">
                <div>
                  <el-checkbox v-model="checked"></el-checkbox>
                  <div style="height:30px;text-align:center;">公安部七类重点人员共享信息</div>
                  <div style="height:25px;line-height:25px;">hhhhh</div>
                  <div style="height:25px;line-height:25px;">hhhhh</div>
                  <div style="height:25px;line-height:25px;">hhhhh</div>
                  <div style="height:25px;line-height:25px;">hhhhh</div>
                  <div style="height:25px;line-height:25px;">hhhhh</div>
                  <div style="height:25px;line-height:25px;">hhhhh</div>
                </div>
                <div class="bottom clearfix">
                  <el-button type="text" class="button">删除</el-button>
                  <el-button type="text" class="button">修改</el-button>
                  <el-button type="text" class="button">注册数据表</el-button>
                </div>
              </el-card>
            </el-col>
          </el-row>
        </el-tab-pane>
        <el-tab-pane label="字典资源(5)" name="second">字典资源</el-tab-pane>
        <el-tab-pane label="关联资源(0)" name="third">关联资源</el-tab-pane>
        <el-tab-pane label="日志资源(0)" name="fourth">日志资源</el-tab-pane>
        <el-tab-pane label="其他资源(0)" name="fifth">其他资源</el-tab-pane>
        <el-pagination style="float:right;" background layout="prev, pager, next" :total="1000"></el-pagination>
      </el-tabs>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      inputCMDB: '',
      activeNames: ['1'],
      filterGroupVisible: false,
      dynamicTags: ['标签一', '标签二', '标签三'],
      activeName2: 'first',
      checked: true
    }
  },
  methods: {
    handleChange (val) {
      console.log(val)
    },
    handleFilterGroupVisibility () {
      this.filterGroupVisible = !this.filterGroupVisible
    },
    handleClose (tag) {
      this.dynamicTags.splice(this.dynamicTags.indexOf(tag), 1)
    },
    handleClick (tab, event) {
      console.log(tab, event)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#filter-group{
  height:100px;
  /*background-color: grey;*/
  margin-top: 24px;
  height: auto;
}
.filter-group-item{
  height: 40px;
  line-height: 40px;
  border-bottom: 1px dotted #d9d9d9;
}
.title-w{
  width:150px;
  display: inline-block;
}
.bottom {
  margin-top: 13px;
  line-height: 12px;
}
.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}

.clearfix:after {
  clear: both
}
.button {
  padding: 0;
  float: right;
  margin-left: 10px;
}

</style>
