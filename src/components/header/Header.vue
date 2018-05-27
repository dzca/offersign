<style lang="scss" scoped>
.header {
  // height: 50px;
  margin: 7px;
}

.navbar-nav {
  font-size: 14px;
  .nav-item {
    margin-right: 30px;
  }
}

ul > li {
  font-size: 14px;
  font-weight: bold;
}

// ul > li > a {
//   color: #000000;
// }
//
// ul > li a {
//   color: none;
// }

ul > li a:hover,
a.active {
  border-bottom: 2px solid #cd2530;
  color: #428bca;
}
</style>

<template>

<nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container">
        <a class="navbar-brand" href="#/">
            <img src="@/assets/imgs/offersign-logo-105x60.png" />
        </a>

        <ul class="navbar-nav ml-auto">
            <li class="nav-item">
                <a class="nav-link" v-on:click="setActive('feature')" :class="{ active: isActive('feature') }">Features</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" v-on:click="setActive('pricing')" :class="{ active: isActive('pricing') }">Pricing</a>
            </li>

            <button class="btn btn-sm btn-danger" type="button">Login</button>
        </ul>
    </div>
</nav>

</template>

<script>
export default {
  data() {
    return {
      activeItem: this.$route.name
    };
  },
  computed: {},
  methods: {
    isActive: function(menuItem) {
      return this.activeItem === menuItem;
    },
    setActive: function(menuItem) {
      this.activeItem = menuItem; // no need for Vue.set()
      this.$router.push({
        name: menuItem
      });
    }
  }
};
</script>
