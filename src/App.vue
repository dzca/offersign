<template>

	<div>
		<Header/>
		<div>
	  	<router-view/>
		</div>

	</div>

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
@import "../node_modules/bootstrap/scss/bootstrap.scss";
</style>
