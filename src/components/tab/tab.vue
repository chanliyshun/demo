<template>
  <div class="container">
    <div class="tab">
      <router-link class="tab-item" to="/home">
        <span class="tab-link">首页</span>
      </router-link>
      <router-link class="tab-item" to="/login">
        <span class="tab-link">登录/注册</span>
      </router-link>
      <router-link class="tab-item" to="/orderList">
        <span class="tab-link">我的订单</span>
      </router-link>
      <router-link class="tab-item" to="/about">
        <span class="tab-link">关于我们</span>
      </router-link>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">

</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/variable"

  @media screen and (min-width: 768px)
    .tab
      display: block
      position: fixed
      z-index: 99
      padding: 0 72px
      height: 72px
      font-size: $font-size-medium
      .tab-item
        float: left
        padding-top: 24px
        text-align: center
        .tab-link
          padding: 10px 15px
          margin-left: 6px
          color: $color-text
        .tab-link:hover
          background-color: $color-background-gray
        &.router-link-active
          .tab-link
            background-color: $color-text-green
            border-bottom: 2px solid $color-text-green
  @media screen and (max-width: 768px)
    .container
      position: relative
      z-index: 99
      .tab
        display: flex
        height: 44px
        line-height: 44px
        font-size: $font-size-medium
        .tab-item
          flex: 1
          background-color: $color-text-d
          text-align: center
          .tab-link
            color: #000
          &.router-link-active
          .tab-item
            background-color: $color-text-ll
            .tab-link
              color: $color-text-green
              border-bottom: 2px solid $color-text-green
</style>
