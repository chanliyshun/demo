<template>
  <div class="home">
    <div class="icon">
      <img :class="{'paused': isA,'play': !isA}" @click="toggle">
    </div>
    <div class="inner">
      <el-col class="swiper-container" :span="15">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="value in home.banner" :style="{backgroundImage: 'url(' + value.imgs + ')'}">
            <p class="ani" swiper-animate-effect="fadeInUp" swiper-animate-duration="0.8s" swiper-animate-delay="0.3s">
              {{value.text}}</p>
            <div class="ani" :swiper-animate-effect="value.swiperAnimateEffect">
              <img class="logo" :style="{backgroundImage:'url(' + value.logo + ')'}">
            </div>
          </div>
        </div>
        <!-- 如果需要分页器 -->
        <div class="swiper-pagination"></div>

        <!-- 如果需要导航按钮 -->
        <div class="swiper-button-prev"></div>
        <div class="swiper-button-next"></div>
      </el-col>
      <el-col class="sidebar" :span="9">
        <el-menu default-active="2" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose"
                 theme="light">
          <el-submenu index="1">
            <template slot="title">导航一</template>
            <el-menu-item-group title="分组一">
              <router-link to="/main">
                <el-menu-item index="1-1">选项1</el-menu-item>
              </router-link>
              <router-link to="/main">
                <el-menu-item index="1-2">选项2</el-menu-item>
              </router-link>
            </el-menu-item-group>
            <el-menu-item-group title="分组2">
              <router-link to="/main">
                <el-menu-item index="1-3">选项3</el-menu-item>
              </router-link>
            </el-menu-item-group>
            <el-submenu index="1-4">
              <template slot="title">选项4</template>
              <router-link to="/main">
                <el-menu-item index="1-4-1">选项1</el-menu-item>
              </router-link>
            </el-submenu>
          </el-submenu>
          <el-submenu index="2">
            <template slot="title">导航二</template>
            <el-menu-item-group title="分组一">
              <router-link to="/main">
                <el-menu-item index="1-1">选项1</el-menu-item>
              </router-link>
              <router-link to="/main">
                <el-menu-item index="1-2">选项2</el-menu-item>
              </router-link>
            </el-menu-item-group>
            <el-menu-item-group title="分组2">
              <router-link to="/main">
                <el-menu-item index="1-3">选项3</el-menu-item>
              </router-link>
            </el-menu-item-group>
            <el-submenu index="1-4">
              <template slot="title">选项4</template>
              <router-link to="/main">
                <el-menu-item index="1-4-1">选项1</el-menu-item>
              </router-link>
            </el-submenu>
          </el-submenu>
          <el-submenu index="3">
            <template slot="title">导航三</template>
            <el-menu-item-group title="分组一">
              <router-link to="/main">
                <el-menu-item index="1-1">选项1</el-menu-item>
              </router-link>
              <router-link to="/main">
                <el-menu-item index="1-2">选项2</el-menu-item>
              </router-link>
            </el-menu-item-group>
            <el-menu-item-group title="分组2">
              <router-link to="/main">
                <el-menu-item index="1-3">选项3</el-menu-item>
              </router-link>
            </el-menu-item-group>
            <el-submenu index="1-4">
              <template slot="title">选项4</template>
              <router-link to="/main">
                <el-menu-item index="1-4-1">选项1</el-menu-item>
              </router-link>
            </el-submenu>
          </el-submenu>
          <el-submenu index="4">
            <template slot="title">导航四</template>
            <el-menu-item-group title="分组一">
              <router-link to="/main">
                <el-menu-item index="1-1">选项1</el-menu-item>
              </router-link>
              <router-link to="/main">
                <el-menu-item index="1-2">选项2</el-menu-item>
              </router-link>
            </el-menu-item-group>
            <el-menu-item-group title="分组2">
              <router-link to="/main">
                <el-menu-item index="1-3">选项3</el-menu-item>
              </router-link>
            </el-menu-item-group>
            <el-submenu index="1-4">
              <template slot="title">选项4</template>
              <router-link to="/main">
                <el-menu-item index="1-4-1">选项1</el-menu-item>
              </router-link>
            </el-submenu>
          </el-submenu>
          <el-submenu index="5">
            <template slot="title">导航五</template>
            <el-menu-item-group title="分组一">
              <router-link to="/main">
                <el-menu-item index="1-1">选项1</el-menu-item>
              </router-link>
              <router-link to="/main">
                <el-menu-item index="1-2">选项2</el-menu-item>
              </router-link>
            </el-menu-item-group>
            <el-menu-item-group title="分组2">
              <router-link to="/main">
                <el-menu-item index="1-3">选项3</el-menu-item>
              </router-link>
            </el-menu-item-group>
            <el-submenu index="1-4">
              <template slot="title">选项4</template>
              <router-link to="/main">
                <el-menu-item index="1-4-1">选项1</el-menu-item>
              </router-link>
            </el-submenu>
          </el-submenu>
        </el-menu>
      </el-col>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data () {
      return {
        isA: false,
        home: []
      }
    },
    activated () {
      this.$http.get('static/data.json').then((response) => {
        this.home = response.data.home
        this.$nextTick(() => {
          /* eslint-disable no-unused-vars */
          const mySwiper = new Swiper('.swiper-container', {
            direction: 'horizontal',
            loop: true,
            speed: 1000,
            autoplay: 4000,

            // 如果需要分页器
            pagination: '.swiper-pagination',

            // 如果需要前进后退按钮
            nextButton: '.swiper-button-next',
            prevButton: '.swiper-button-prev',
            /* eslint-disable no-undef */
            onInit: function (swiper) { // Swiper2.x的初始化是onFirstInit
              swiperAnimateCache(swiper) // 隐藏动画元素
              swiperAnimate(swiper) // 初始化完成开始动画
            },
            onSlideChangeEnd: function (swiper) {
              swiperAnimate(swiper) // 每个slide切换结束时也运行当前slide动画
            }
          })
        })
      })
    },
    methods: {
      toggle: function () {
        this.isA = !this.isA
      },
      handleOpen (key, keyPath) {
        console.log(key, keyPath)
      },
      handleClose (key, keyPath) {
        console.log(key, keyPath)
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/variable"

  @media screen and (min-width: 768px)
    .home
      position: absolute
      width: 100%
      height: 100%
      top: 0
      bottom: 0
      background-image: url("./bg.jpg")
      background-repeat no-repeat
      background-size: cover
      .icon
        float: right
        margin: 50px
        img
          width: 80px
          height: 80px
          border-radius: 50%
          border: 2px solid
          background-image: url("./logo.jpg")
          background-size: contain
          opacity: 0.8
          &.play
            animation: rotate 15s linear infinite
          &.pause
            animation-play-state: paused
      .inner
        width: 50%
        height: 30%
        margin: 10% auto 0
        .swiper-container
          float: right
          height: 100%
          .swiper-wrapper
            .swiper-slide
              background-repeat: no-repeat
              background-size: cover
              background-position: 50%
              .ani
                position: relative
                text-align: center
                font-size: 40px
                font-family: "楷体"
                color: $color-text-ll
                top: 70%
                .logo
                  width: 52px
                  height: 52px
                  border-radius: 50%
                  background-size: cover
        .sidebar
          height: 100%
          background-color: #eef1f6

  @media screen and (max-width: 768px)
    .home
      position: absolute
      width: 100%
      height: 100%
      top: 0
      bottom: 0
      background-image: url("./bg-s.jpg")
      background-repeat no-repeat
      background-size: cover
      .icon
        display: none
      .inner
        position: relative
        width: 100%
        height: 90%
        top: 44px
        .swiper-container
          width: 100%
          height: 30%
          .swiper-wrapper
            .swiper-slide
              background-repeat: no-repeat
              background-size: cover
              background-position: 50%
              .ani
                position: relative
                text-align: center
                font-size: 20px
                font-family: "楷体"
                color: $color-text
                top: 70%
                .logo
                  width: 40px
                  height: 40px
                  border-radius: 50%
                  background-size: cover
        .sidebar
          position relative
          width: 100%
          height: 65%
          background-color: #eef1f6
        .swiper-button-prev, .swiper-button-next
          display: none
</style>
