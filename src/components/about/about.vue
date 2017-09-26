<template>
  <div class="about">
    <baidu-map class="map"></baidu-map>
  </div>
</template>

<script type="text/ecmascript-6">
  import baiduMap from 'components/baidu-map/baidu-map.vue'

  export default {
    components: {
      baiduMap
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">

  @media screen and (min-width: 768px)
    .about
      position: absolute
      width: 100%
      height: 100%
      top: 0
      bottom: 0
      background-image: url("./bg.jpg")
      background-repeat repeat
      background-size: contain
      .map
        top: 55%

  @media screen and (max-width: 768px)
    .about
      position: absolute
      width: 100%
      height: 100%
      top: 0
      bottom: 0
      background-image: url("./bg.jpg")
      background-repeat repeat
      background-size: contain
      .map
        top: 45%
</style>
