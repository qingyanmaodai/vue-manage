<template>
  <el-menu default-active="1-4-1" class="el-menu-vertical-demo" background-color="#545c64" active-text-color="#ffd04b" text-color="#fff" @open="handleOpen" @close="handleClose" :collapse="isCollapse">
    <h3 >{{isCollapse?'后台':'通用后台管理系统'}}</h3>
    <el-menu-item @click="clickMenu(item)" v-for="item in noChildren" :index="item.path + ''" :key="item.path">
      <i :class="'el-icon-' + item.icon"></i>
      <span slot="title">{{item.label}}</span>
    </el-menu-item>
    <el-submenu v-for="item in hasChildren" :index="item.path + ''" :key="item.path">
      <template slot="title">
        <i :class="'el-icon-' + item.icon"></i>
        <span slot="title">{{item.label}}</span>
      </template>
      <el-menu-item-group v-for="(items,indexs) in item.children" :key="items.path">
        <el-menu-item :index="indexs + ''" >{{items.label}}</el-menu-item>
      </el-menu-item-group>
    </el-submenu>
    
  </el-menu>
</template>

<style lang="less">
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
  }
  .el-menu{
    height:100%;
    border:none;
    h3 {
      color:#fff;
      line-height: 48px;
      text-align: center;
    }
  }
</style>

<script>
  export default {
    data() {
      return {
        menu: [
            {
              path: '/',
              name: 'Home',
              label: '首页',
              icon: 's-home',
              url: 'Home/Home'
            },
            {
              path: '/mall',
              name: 'mall',
              label: '商品管理',
              icon: 'video-play',
              url: 'Mall/Mall'
            },
            {
              path: '/User',
              name: 'User',
              label: '用户管理',
              icon: 'user',
              url: 'User/User'
            },
            {
              label: '其他',
              icon: 'location',
              children: [
                {
                  path: '/page1',
                  name: 'page1',
                  label: '页面1',
                  icon: 'setting',
                  url: 'Other/PageOne'
                },
                {
                  path: '/page2',
                  name: 'page2',
                  label: '页面2',
                  icon: 'setting',
                  url: 'Other/PageTwo'
                }
              ]
            }
          ],
      };
    },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      },
      clickMenu(item){
        this.$router.push({
          name:item.name
        })
      }
    },
    mounted(){
      console.log(this.coololl);
    },
    computed:{
      noChildren(){
        return this.menu.filter(item=> !item.children)
      },
      hasChildren(){
        return this.menu.filter(item=>item.children)
      },
      isCollapse(){
        return this.$store.state.tab.isCollapse
      },
      coololl(){
        return this.$store
      }
    },
  }
  
</script>
<!-- <template>
  <el-menu default-active="1-4-1" class="el-menu-vertical-demo" background-color="#545c64" active-text-color="#ffd04b" text-color="#fff" @open="handleOpen" @close="handleClose" :collapse="isCollapse">
  <h3>{{isCollapse?'管理':'后台管理系统'}}</h3>
    <el-menu-item  @click="clickMenu(item)" v-for="(item) in noChlidren" :index="item.path" :key="item.path">
      <i :class="'el-icon-'+item.icon"></i>
      <span slot="title">{{item.label}}</span>
    </el-menu-item>
    <el-submenu  v-for="(items) in hasChildren" index="2" :key="items.path">
      <template slot="title">
        <i :class="'el-icon-'+items.icon"></i>
        <span slot="title">{{items.label}}</span>
      </template>
      <el-menu-item-group v-for="(item) in items.children"  :key="item.path">
        <el-menu-item :index="items.path"  @click="clickMenu(item)"><i :class="'el-icon-'+items.setting"></i>{{item.label}}</el-menu-item>
      </el-menu-item-group>
    </el-submenu>
  </el-menu>
</template>
<script>
export default {
  data() {
    return {
      //控制菜单栏的展出
      menu: [],
    };
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    clickMenu(item){
      this.$router.push({
        name:item.name
      })
    },
  },
  computed:{
    noChlidren(){
      return this.asyncMenu.filter(item=> !item.children)
    },
    hasChildren(){
      return this.asyncMenu.filter(item=>item.children)
    },
    isCollapse(){
      return this.$store.state.tab.isCollapse
    },
    asyncMenu(){
      return this.$store.state.tab.menu
    }
  }
};
</script>

<style lang="less" scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
  
}
.el-menu{
    height: 100%;
    border: none;
    h3{
      color: #fff;
      text-align: center;
      line-height: 48px;
    }
  }
</style> -->
