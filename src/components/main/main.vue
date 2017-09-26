<template>
  <div class="main">
    <i class="el-icon-circle-close" @click="back"></i>
    <span class="text">暂无内容</span>
  </div>
</template>

<script>
  export default {
    methods: {
      back () {
        this.$router.push('/home')
      }
    }
  }

</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/variable"

  .main
    position: absolute
    width: 100%
    height: 100%
    z-index: 100
    .el-icon-circle-close
      float: right
      padding: 50px
      font-size: $font-size-large-x
      color: $color-sub-theme
    .text
      position: absolute
      top: 50%
      left: 50%
      margin-left: -32px
      text-align: center
      font-size: $font-size-large-x
</style>
