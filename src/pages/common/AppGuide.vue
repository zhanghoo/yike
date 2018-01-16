<template>
  <div class="app-guide">
    <div v-if="showFirst" 
         class="guide-init" 
         @click="hideFirst">
      <img class="img" src="static/images/guide-0.png">
    </div>
    <swiper class="guide-swiper" 
            ref="guideSwiper" 
            :options="guideSwiperOption" 
            :class="{ show: !showFirst }">
      <swiper-slide class="guide-page page1">
        <img class="img" src="static/images/guide-1.png">
      </swiper-slide>
      <swiper-slide class="guide-page page2">
        <img class="img" src="static/images/guide-2.png">
      </swiper-slide>
      <swiper-slide class="guide-page page3">
        <img class="img" src="static/images/guide-3.png">
      </swiper-slide>
      <swiper-slide class="guide-page page4">
        <img class="img" src="static/images/guide-4.png">
      </swiper-slide>
      <div class="swiper-pagination swiper-pagination-bullets" slot="pagination"></div>
    </swiper>
    <a v-show="!btnShow && !showFirst"
       href="javascript:;"
       class="btn-jump"
       @click="jump">跳过</a>
    <a v-show="btnShow" 
       href="javascript:;" 
       class="btn-go" 
       @click="hide">即可开启</a>
  </div>
</template>

<script>
export default {
  name: 'appGuide',
  data () {
    const self = this
    return {
      showFirst: true,
      btnShow: false,
      guideSwiperOption: {
        /* eslint-disable */
        direction: 'horizontal',
        slidesPerView: 1,
        freeMode: false,
        autoHeight: false,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
          renderBullet(index, className) {
            return `<span class="${className} icon-line"></span>`
          }
        },
        on: {
          slideChange() {
            self.btnShow = this.slidesGrid.length == ( this.activeIndex + 1) ? true : false
          }
        }
        /* eslint-enable */
      }
    }
  },
  computed: {
    guideSwiper () {
      return this.$refs.guideSwiper.swiper
    }
  },
  methods: {
    hide () {
      this.$router.push('index')
    },
    jump () {
      this.guideSwiper.slideTo(3)
    },
    hideFirst () {
      this.showFirst = false
    }
  }
}
</script>

<style lang="scss">
@import "../../assets/scss/yk";

.app-guide {
  @include ykPosition(fixed);
  .guide-init {
    position: relative;
    width: 100%;
    height: 100%;
    z-index: 10;
    .img {
      width: 100%;
      height: 100%;
    }
  }
  .guide-swiper {
    @include ykPosition(absolute);
    opacity: 0;
    &.show {
      opacity: 1;
    }
    .guide-page {
      .img {
        width: 100%;
        height: 100%;
      }
    }
    .swiper-pagination {
      bottom: 43px;
      left: 0;
      width: 100%;
      height: 2px;
      .icon-line {
        position: relative;
        margin: 0 1px;
        width: 18px;
        height: 2px;
        border-radius: 0;
        background: $steelBlue;
        opacity: 1;
        &.swiper-pagination-bullet-active {
          background: $darkBlue;
        }
      }
    }
  }
  .btn-jump {
    position: absolute;
    right: 30px;
    bottom: 30px;
    font-size: 12px;
    letter-spacing: 2px;
    z-index: 10;
    color: $t3Color;
  }
  .btn-go {
    position: absolute;
    display: block;
    bottom: 34px;
    left: 50%;
    margin-left: -24%;
    width: 48%;
    height: 25px;
    line-height: 25px;
    z-index: 10;
    background: $darkBlue;
    color: #fff;
    text-align: center;
    font-size: 13px;
    letter-spacing: 3px;
  }
}
</style>