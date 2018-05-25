<template>
<div>
	<h1>{{ title }}</h1>
	<el-row>
	  <el-button>Default</el-button>
	  <el-button type="primary">Primary</el-button>
	  <el-button type="success">Success</el-button>
	  <el-button type="info">Info</el-button>
	  <el-button type="warning">Warning</el-button>
	  <el-button type="danger">Danger</el-button>
	</el-row>

	<el-row>
  <el-col :span="8">
    <el-card shadow="never">
      <img src="@/assets/imgs/choice.svg" class="image">
      <div >
        <span>Choice</span>
				<div class="bottom ">
				          DocuSign works with more of the applications, services, and devices brokers, agents, and clients already use.
				        </div>
      </div>
    </el-card>
  </el-col>
	<el-col :span="8">
    <el-card shadow="never">
      <img src="@/assets/imgs/trust.svg" class="image">
      <div >
        <span>Choice</span>
				<div class="bottom ">
				          DocuSign works with more of the applications, services, and devices brokers, agents, and clients already use.
				        </div>
      </div>
    </el-card>
  </el-col>
	<el-col :span="8">
		<el-card shadow="never">
			<img src="@/assets/imgs/experience.svg" class="image">
			<div >
				<span>Choice</span>
				<div class="bottom ">
									DocuSign works with more of the applications, services, and devices brokers, agents, and clients already use.
								</div>
			</div>
		</el-card>
	</el-col>
</el-row>
</div>
</template>

<script>
export default {
  data() {
    return {
      title: "Home"
    };
  },
  methods: {
    nav: function(path) {
      console.log("loading Substract Page," + path);
      this.$router.push({ path: "/settings/" + path });
      //this.$router.push({ name: "/settings", params: { path } });
    }

    // nav(path) {
    //   console.log("loading Substract Page");
    //   //this.$router.push({ name: "settings", params: { path } });
    //   this.$router.push({ path: "/settings/${path}" });
    // }
  }
};
</script>
<style lang="scss">
.group {
  border-radius: 4px;
  min-height: 36px;
  padding-bottom: 20px;
}

.image {
  // width: 100%;
  // display: block;

  height: 70px;
  width: 70px;
  margin: 10% auto 7%;
}

.el-card {
  // border: 1px solid #ebeef5;
  border: #fff;
  text-align: center;
  font-weight: bold;

  .bottom {
    font-weight: normal;
    margin-top: 13px;
    line-height: 20px;
  }
}
</style>
