<template>
  <div class="app-index">
    <div class="ai-header"></div>
    <div class="ai-content">
      <swiper class="blogs-swiper">
        <swiper-slide class="blogs-slide">
          <template v-for="blog in blogs">
            <panel-blog :blog="blog"/>
          </template>
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>

<script>
import PanelBlog from '@/components/PanelBlog'
import axios from 'axios'

export default {
  name: 'appIndex',
  components: {
    PanelBlog
  },
  data () {
    return {
      blogs: []
    }
  },
  created () {
    axios.get('static/mocks/index.json').then((res) => {
      this.blogs = res.data.blogs
    })
  }
}
</script>

<style lang="scss">
@import "../../assets/scss/yk";

.app-index {
  @include ykPosition(relative);
  .ai-header {
    @include ykPosition(fixed);
    height: $headHeight;
    z-index: 10;
    background: $bgColor;
  }
  .ai-content {
    @include ykPosition(absolute);
    padding: $headHeight $sideMargin 0;
    overflow: hidden;
    .blogs-swiper {
      width: 100%;
      height: 100%;
    }
  }
}
</style>