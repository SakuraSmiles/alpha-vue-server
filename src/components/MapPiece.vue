<template>
  <div class="mapPiece">
    <h1>x:{{length_x}}</h1>
    <h1>y:{{length_y}}</h1>
  </div>
</template>

<script>
export default{
  name: 'MapPiece',
  data: function () {
    return {
      length_x: '10',
      length_y: '10'
    }
  },
  methods: {
    drawStart: function (ctx, r, x, y) {

    },
    valueToPoint: function (index, total) {
      var x = 0
      var y = 80
      var angle = Math.PI * 2 / total * index
      var cos = Math.cos(angle)
      var sin = Math.sin(angle)
      var tx = x * cos - y * sin + 100
      var ty = x * sin + y * cos + 100
      return {
        x: tx,
        y: ty
      }
    }
  }
}
</script>
