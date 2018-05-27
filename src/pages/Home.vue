<template>
<div>
	<div class="ad-image">
		<img src="@/assets/imgs/computer.jpg" class="img-fluid" alt="Responsive image">
		<div class="centered-image-text">Centered</div>
	</div>


	    <div class="container">
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


				<div class="row">
          <div class="col-lg-4">
            <img class="rounded-circle" src="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==" alt="Generic placeholder image" width="140" height="140">
            <h2>Heading</h2>
            <p>Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh ultricies vehicula ut id elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna.</p>
            <p><a class="btn btn-secondary" href="#" role="button">View details &raquo;</a></p>
          </div><!-- /.col-lg-4 -->
          <div class="col-lg-4">
            <img class="rounded-circle" src="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==" alt="Generic placeholder image" width="140" height="140">
            <h2>Heading</h2>
            <p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh.</p>
            <p><a class="btn btn-secondary" href="#" role="button">View details &raquo;</a></p>
          </div><!-- /.col-lg-4 -->
          <div class="col-lg-4">
            <img class="rounded-circle" src="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==" alt="Generic placeholder image" width="140" height="140">
            <h2>Heading</h2>
            <p>Donec sed odio dui. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Vestibulum id ligula porta felis euismod semper. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</p>
            <p><a class="btn btn-secondary" href="#" role="button">View details &raquo;</a></p>
          </div><!-- /.col-lg-4 -->
        </div><!-- /.row -->

	    </div>
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
<style lang="scss" scoped>
.group {
  border-radius: 4px;
  min-height: 36px;
  padding-bottom: 20px;
}

.ad-image {
  // margin: 0px 15px;

  .centered-image-text {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
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
