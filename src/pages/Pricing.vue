<template>
<div>
	<div class="banner-image">
		<div class="centered-image-text">Centered</div>
	</div>



		    <div class="container contents">
		      <div class="card-deck mb-3 text-center">
		        <div class="card mb-4 box-shadow">
		          <div class="card-header">
		            <h4 class="my-0 font-weight-normal">Free</h4>
		          </div>
		          <div class="card-body">
		            <h1 class="card-title pricing-card-title">$0 <small class="text-muted">/ mo</small></h1>
		            <ul class="list-unstyled mt-3 mb-4">
		              <li>10 users included</li>
		              <li>2 GB of storage</li>
		              <li>Email support</li>
		              <li>Help center access</li>
		            </ul>
		            <button type="button" class="btn btn-lg btn-block btn-outline-primary">Sign up for free</button>
		          </div>
		        </div>
		        <div class="card mb-4 box-shadow">
		          <div class="card-header">
		            <h4 class="my-0 font-weight-normal">Pro</h4>
		          </div>
		          <div class="card-body">
		            <h1 class="card-title pricing-card-title">$15 <small class="text-muted">/ mo</small></h1>
		            <ul class="list-unstyled mt-3 mb-4">
		              <li>20 users included</li>
		              <li>10 GB of storage</li>
		              <li>Priority email support</li>
		              <li>Help center access</li>
		            </ul>
		            <button type="button" class="btn btn-lg btn-block btn-primary">Get started</button>
		          </div>
		        </div>
		        <div class="card mb-4 box-shadow">
		          <div class="card-header">
		            <h4 class="my-0 font-weight-normal">Enterprise</h4>
		          </div>
		          <div class="card-body">
		            <h1 class="card-title pricing-card-title">$29 <small class="text-muted">/ mo</small></h1>
		            <ul class="list-unstyled mt-3 mb-4">
		              <li>30 users included</li>
		              <li>15 GB of storage</li>
		              <li>Phone and email support</li>ad-image
		              <li>Help center access</li>
		            </ul>
		            <button type="button" class="btn btn-lg btn-block btn-primary">Contact us</button>
		          </div>
		        </div>
		      </div>
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
