<template>
  <el-container style="height:100%">
    <el-aside width="auto"><common-aside /></el-aside>
     <el-container>
      <el-header>
        <common-header></common-header>
      </el-header>
      <Common-tag />
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import CommonAside from '@/components/CommonAside';
import CommonHeader from '@/components/CommonHeader';
import CommonTag from '@/components/CommonTag';

export default {
  name: "Main",
  components:{CommonAside,CommonHeader,CommonTag},
  data() {
    return {
      
    }
  }
};
</script>

<style lang="less">
.el-header{
  background-color: #333;
}
.elmain{
  padding-top: 0;
}
</style>