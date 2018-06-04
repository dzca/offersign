<template>
<div>
  <div class="banner-image">
    <div class="centered-image-text">
      <h2 class="font-weight-bold bg-text-inner">Electronic signatures<br> <small class="text-muted font-weight-bold"> for online legally binding</small></h2>
    </div>
  </div>

  <div class="container contents">
    <div class="row">
      <div class="col-lg-4 feature-item">
        <img src="@/assets/imgs/easy.svg" alt="Easy image" width="140" height="140">

        <h2 class="title">Easy</h2>
        <p class="content">Use any device to sign any document: signing with offersign is simple, quick and secure.</p>
      </div>
      <!-- /.col-lg-4 -->
      <div class="col-lg-4 feature-item">
        <img src="@/assets/imgs/secure.svg" alt="Easy image" width="140" height="140">

        <h2 class="title">Secure</h2>
        <p class="content">Signed Document is encrypted using 256-bit SSL and handled by the reliable Amazon infrastructure.</p>
      </div>
      <!-- /.col-lg-4 -->
      <div class="col-lg-4 feature-item">
        <img src="@/assets/imgs/efficient.svg" alt="Easy image" width="140" height="140">

        <h2 class="title">Efficient</h2>
        <p class="content">Load your signatures automatically and optimize your document process.</p>
      </div>
      <!-- /.col-lg-4 -->
    </div>
    <!-- /.row -->
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
  methods: {}
};
</script>
<style lang="scss" scoped>
.feature-item {
    text-align: center;
    .title {
        margin-top: 20px;
        font-weight: bold;
    }
    .content {
        margin: 0 15px;
    }
}

.banner-image {
    background: #000 url("../assets/imgs/computer-bg-2000x630.png") no-repeat center center;
    text-align: center;

    .centered-image-text {
        position: relative;
        padding-top: 10%;
        padding-bottom: 10%;
    }
}

.image {
    height: 70px;
    width: 70px;
    margin: 10% auto 7%;
}

.el-card {
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
