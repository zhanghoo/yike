<template>
  <div class="panel-blog">
    <div class="pb-header">
      <div class="pbh-tags">
        <span class="line"></span>
        <span class="text">{{blogType}}</span>
        <span class="line"></span>
      </div>
    </div>
    <div class="pb-cover">
      <img class="cover" :src="blog.cover">
      <span class="icon icon-tag" :class="collectOn" :style="$root.icon"></span>
    </div>
    <div class="pb-title" :class="blogTitle">{{blog.title}}</div>
    <div class="pb-brief">{{blog.brief}}</div>
    <div class="pb-info">
      <div class="pb-author">{{blogType}} / {{blog.author}}</div>
      <div class="pb-count">
        <div class="pb-comment">
          <span class="icon icon-comment" :style="$root.icon"></span>
          <span class="text">{{blog.comments}}</span>
        </div>
        <div class="pb-collect">
          <span class="icon icon-collect" :class="collectOn" :style="$root.icon"></span>
          <span class="text">{{blog.collects}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'panelBlog',
  props: {
    blog: Object
  },
  computed: {
    blogType () {
      let _type = 'typenull'
      switch (this.blog.type) {
        case 0:
          _type = '文章'
          break
        case 1:
          _type = '音乐'
          break
        case 2:
          _type = '摄影'
          break
        case 3:
          _type = '电影'
          break
        default:
          _type = '空'
          break
      }
      return _type
    },
    blogTitle () {
      return this.blog.title ? '' : 'empty'
    },
    collectOn () {
      return this.blog.title ? '' : 'on'
    }
  }
}
</script>

<style lang="scss">
@import "../assets/scss/yk";

.panel-blog {
  @include ykPosition(relative);
  height: auto;
  & + .panel-blog {
    margin-top: 50px;
  }
  .pb-header {
    @include centerH();
    width: 100%;
    height: 37px;
    .pbh-tags {
      @include centerH();
      width: 69px;
      height: 17px;
      line-height: 17px;
      background: $steelBlue;
      color: #fff;
      .text {
        font-size: 13px;
        margin: 0 6px;
      }
      .line {
        display: block;
        width: 6px;
        height: 1px;
        background: #fff;
      }
    }
  }
  .pb-cover {
    @include ykPosition(relative);
    height: 0;
    padding-top: 58%;
    border-radius: 3px;
    background: $textBgColor;
    overflow: hidden;
    .cover {
      @include ykPosition(absolute);
    }
    .icon-tag {
      display: inline-block;
      position: absolute;
      top: 18px;
      right: 15px;
      width: 17px;
      height: 20px;
      background-position: -306px -124px;
      &.on {
        background-position: -330px -124px;
      }
    }
  }
  .pb-title {
    margin: 10px 0 30px;
    width: 100%;
    height: auto;
    line-height: 28px;
    font-size: 22px;
    text-align: center;
    color: $t1Color;
    letter-spacing: 1.5px;
    &.empty {
      margin: 0;
    }
  }
  .pb-brief {
    width: 100%;
    height: auto;
    line-height: 26px;
    font-size: 16px;
    color: $t2Color;
    letter-spacing: 0.11px;
  }
  .pb-info {
    display: flex;
    margin-top: 18px;
    width: 100%;
    height: 17px;
    line-height: 17px;
    justify-content: space-between;
    .pb-author {
      font-size: 12px;
      color: $t3Color;
      letter-spacing: 0.08px;
    }
    .pb-count {
      display: flex;
      .pb-comment {
        margin-right: 30px;
      }
      .icon {
        display: inline-block;
        vertical-align: middle;
        &.icon-comment {
          width: 21px;
          height: 18px;
          background-position: -89px -125px;
        }
        &.icon-collect {
          width: 21px;
          height: 18px;
          background-position: -56px -125px;
          &.on {
            background-position: -56px -96px;
          }
        }
      }
      .text {
        margin-left: 5px;
        font-size: 12px;
        color: $t3Color;
      }
    }
  }
}
</style>