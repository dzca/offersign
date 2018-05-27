<template>
<div>
	<h1>{{ title }}</h1>

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
<style lang="scss">
.group {
  border-radius: 4px;
  min-height: 36px;
  padding-bottom: 20px;
}
</style>
