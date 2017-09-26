<template>
  <div id="map_container"></div>
</template>

<script type="text/ecmascript-6">
  import {MP} from './baidu-map'

  export default {
    prors: {
      height: {
        type: Number,
        default: 300
      },
      longitude: {},
      latitude: {}
    },
    mounted () {
      this.$nextTick(function () {
        MP('akvalue').then(BMap => {
          const map = new BMap.Map('map_container')
          const point = new BMap.Point(116.404, 39.915)
          map.centerAndZoom(point, 15)
          map.enableScrollWheelZoom()
          /* eslint-disable no-undef */
          const opts = {type: BMAP_NAVIGATION_CONTROL_ZOOM}
          map.addControl(new BMap.NavigationControl(opts))
          map.addControl(new BMap.ScaleControl())
          map.addControl(new BMap.MapTypeControl())

          map.addControl(new BMap.CityListControl({
            anchor: BMAP_ANCHOR_TOP_LEFT,
            offset: new BMap.Size(130, 23)
          }))
        })
      })
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  #map_container
    width: 85%
    height: 360px
    margin: auto
</style>
