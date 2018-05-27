<template>
<div>
	<div class="banner-image">
		<div class="centered-image-text">Centered</div>
	</div>
</div>
</template>

<script>
export default {
  data() {
    return {
      title: "About"
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
<style lang="scss" scoped>
.banner-image {
  background: #000 url(../assets/imgs/pad-bg-2000x630.png) no-repeat 0;
  height: 460px;
  // margin-top: 90px;
  position: relative;
  width: 100% !important;

  .centered-image-text {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
}
</style>
