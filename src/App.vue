<template>

	<el-container>
		<el-header>
  <Header/>
	</el-header>
  <el-main><router-view/></el-main>
  <Footer/>
</el-container>
</template>

<script>
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
export default {
  name: "App",
  components: {
    Header,
    Footer
  }
};
</script>

<style lang="scss">
/* #app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */

/* <el-row class="container">
	<el-col :span="24"><Header/></el-col>
	<el-col :span="24"><router-view/></el-col>
	<el-col :span="24"><Footer/></el-col>
</el-row> */

.el-container {
  margin: auto;
  width: 960px;
}

.el-main {
  margin-top: 27px;
  /* background-color: #e9eef3; */
  /* color: #333;
  text-align: center;
  line-height: 160px; */
}
</style>
