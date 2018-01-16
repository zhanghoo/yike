<template>
  <div class="app">
    <div class="app-content">
      <router-view/>
    </div>
    <div class="app-nav" v-show="navShow">
      <div class="app-nav-item">
        <router-link to="/index" class="a">
          <span class="icon icon-index" :style="$root.icon"></span>
        </router-link>
      </div>
      <div class="app-nav-item">
        <router-link to="/find" class="a">
          <span class="icon icon-find" :style="$root.icon"></span>
        </router-link>
      </div>
      <div class="app-nav-item">
        <router-link to="/home" class="a">
          <span class="icon icon-home" :style="$root.icon"></span>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      navShow: false
    }
  },
  watch: {
    '$route' () {
      this.navShow = this.$router.history.current.name === 'guide' ? 0 : 1
    }
  },
  created () {
    this.navShow = this.$router.history.current.name === 'guide' ? 0 : 1
  }
}
</script>

<style lang="scss">
@import "assets/scss/yk";

.app-content {
  @include ykPosition(absolute);
  padding-bottom: $navHeight;
}
.app-nav {
  position: fixed;
  display: flex;
  bottom: 0;
  left: 0;
  width: 100%;
  height: $navHeight;
  .app-nav-item {
    flex: 1;
    .a {
      display: block;
      @include ykPosition(relative);
      @include centerH();
      .icon {
        display: inline-block;
        &.icon-index {
          width: 23px;
          height: 21px;
          background-position: -5px -52px;
        }
        &.icon-find {
          width: 27px;
          height: 21px;
          background-position: -127px -53px;
        }
        &.icon-home {
          width: 21px;
          height: 20px;
          background-position: -255px -53px;
        }
      }
      &.active {
        .icon-index {
          background-position: -5px 1px;
        }
        .icon-find {
          background-position: -127px 0;
        }
        .icon-home {
          background-position: -255px 0px;
        }
        &:after {
          content: '';
          position: absolute;
          display: block;
          bottom: 0;
          left: 50%;
          margin-left: -16px;
          width: 32px;
          height: 3px;
          background: #2c409a;
        }
      }
    }
  }
}
</style>
