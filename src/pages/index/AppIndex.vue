<template>
  <div class="app-index">
    <div class="ai-header">
      <div class="ai-date">
        <span class="text"
              @click="show">{{date}}</span>
        <span class="icon icon-down" 
              :style="$root.icon"></span>
      </div>
    </div>
    <div class="ai-content">
      <swiper class="blogs-swiper">
        <swiper-slide class="blogs-slide">
          <template v-for="blog in blogs">
            <panel-blog :blog="blog"/>
          </template>
        </swiper-slide>
      </swiper>
    </div>
    <div v-show="showFlag" class="ai-date-choice">
      <div class="adc-header">
        <span class="icon icon-back"
              :style="$root.icon"
              @click="hide"></span>
        时间
      </div>
      <div class="adc-content">
        <swiper class="dates-swiper">
          <swiper-slide class="dates-slide">
            <ol class="adc-box">
              <li v-for="date in dates" :key="date.id" class="adc-box-item">
                <div class="adc-i-date">{{date.month}}</div>
                <ul class="adc-list">
                  <li v-for="item in date.list" class="adc-list-item">
                    <div class="adc-l-cover">
                      <div class="cover">
                        <img class="img" :src="item.cover">
                        <span class="date" 
                              :class="{'selected': item.selected}"
                              @click="selectDate(item)">{{item.date}}</span>
                      </div>
                    </div>
                  </li>
                </ul>
              </li>
            </ol>
          </swiper-slide>
        </swiper>
      </div>
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
      blogs: [],
      dates: [],
      showFlag: false,
      date: '2017/12/04'
    }
  },
  created () {
    axios.get('static/mocks/index.json').then((res) => {
      this.blogs = res.data.blogs
      this.dates = res.data.dates
    })
  },
  methods: {
    show () {
      this.showFlag = true
    },
    hide () {
      this.showFlag = false
    },
    selectDate (date) {
      this.date = date.date
      this.showFlag = false
    }
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
    .ai-date {
      width: 100%;
      height: $headHeight;
      line-height: $headHeight;
      text-align: center;
      .text {
        font-size: 17px;
        color: $t1Color;
        letter-spacing: 3px;
        vertical-align: middle;
      }
      .icon-down {
        display: inline-block;
        width: 11px;
        height: 6px;
        background-position: -14px -160px;
      }
    }
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
  .ai-date-choice {
    @include ykPosition(fixed);
    background: $bgColor;
    z-index: 20;
    .adc-header {
      @include ykPosition(absolute);
      height: $headHeight;
      line-height: $headHeight;
      text-align: center;
      color: $t1Color;
      font-size: 18px;
      z-index: 10;
      .icon-back {
        display: inline-block;
        position: absolute;
        top: 14px;
        left: 15px;
        width: 18px;
        height: 17px;
        background-position: -185px -126px;
      }
    }
    .adc-content {
      @include ykPosition(absolute);
      padding: $headHeight $sideMargin 0;
      overflow: hidden;
      .dates-swiper {
        width: 100%;
        height: 100%;
      }
      .adc-box {
        width: 100%;
        .adc-box-item {
          width: 100%;
          & + .adc-box-item {
            margin-top: 10px;
          }
          .adc-i-date {
            margin-bottom: 15px;
            height: 17px;
            line-height: 17px;
            font-size: 12px;
            color: $t3Color;
            text-align: center;
          }
          .adc-list {
            width: 100%;
            @include clearfix();
            .adc-list-item {
              float: left;
              position: relative;
              top: 0;
              left: 0;
              padding-top: 50%;
              margin-bottom: 5px;
              width: 50%;
              height: 0;
              .adc-l-cover {
                @include ykPosition(absolute);
                padding: 0 5px 5px 0;
                .cover {
                  @include ykPosition(relative);
                  background: $textBgColor;
                  border-radius: 3px;
                  overflow: hidden;
                  .img {
                    width: 100%;
                    height: 100%;
                  }
                  .date {
                    @include centerH();
                    @include ykPosition(absolute);
                    font-size: 15px;
                    color: #fff;
                    background: rgba(0, 0, 0, .3);
                    &.selected {
                      display: none;
                    }
                  }
                }
              }
              &:nth-of-type(even) {
                .adc-l-cover {
                  padding: 0 0 5px 5px;
                }
              }
            }
          }
        }
      }
    }
  }
}
</style>