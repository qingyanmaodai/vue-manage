<template>
  <header>
    <div class="l-content">
      <el-button icon="el-icon-menu" plain size="mini" @click="haddleMenu"></el-button>
      <!-- <h3 style="color: #fff">首页</h3> -->
      <el-breadcrumb separator="/">
        <el-breadcrumb-item v-for="item in tags" :key="item.path" :to="{ path: item.path }">{{item.label}}</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="r-content">
      <el-dropdown trigger="click" size="mini">
        <span>
          <img :src="userImg" class="user" />
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>用户中心</el-dropdown-item>
          <el-dropdown-item @click.native="logOut">退出</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </header>
</template>

<script>
import { mapState } from 'vuex';
export default {
  name: "headerPage",
  data() {
    return {
      userImg: require("../../assets/images/user.png"),
    }
  },
  methods: {
    haddleMenu(){
      this.$store.commit("collapseMenu")
    },
    logOut(){
      this.$store.commit('clearToken')
      this.$store.commit('clearMenu')
      this.$router.push('/Login')

    }
  },
  computed:{
    ...mapState({
      tags: state => state.tab.tabsList
    })
  },
  mounted(){
    console.log(this.tags)
  }
}
</script>

<style lang="less" scoped>
  header{
    display: flex;
    height: 100%;
    justify-content: space-between;
    align-items: center;
  }
  .l-content{
  display: flex;
  align-items: center;
  .el-button {
    margin-right: 20px;
  }
}
.r-content{
  .user {
    width: 40px;
    height: 40px;
    border-radius: 50%;
  }
}
</style>