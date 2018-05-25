<template>


    <el-row>
      <el-col :span="10"><img src="@/assets/imgs/nths_logo.jpg"/></el-col>
      <el-col :span="14" class='menu'>

        <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
            <el-menu-item index="1">
              <router-link to="/">Home</router-link>
            </el-menu-item>
            <el-menu-item index="2">
              <router-link to="/services">Services</router-link>
            </el-menu-item>
            <el-menu-item index="3"><router-link to="/contacts">Contacts</router-link>
          </el-menu-item>
            <el-menu-item index="4"><router-link to="/about">About</router-link>
          </el-menu-item>
        </el-menu>
      </el-col>
    </el-row>


</template>

<script>
export default {
  data() {
    return {
      activeIndex: "1"
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>

<style lang="scss">
.el-header {
  height: 84px;
  // background-color: #b3c0d1;
  // color: #333;
  // text-align: center;
  // line-height: 60px;
}

.menu {
  // float: right;

  margin-top: 57px;
}

.el-menu--horizontal > .el-menu-item {
  height: 30px;
  line-height: 30px;
}

.menu li a {
  color: #ffffff;
  text-decoration: none;
}
</style>
