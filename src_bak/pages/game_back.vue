<template>
  <div class="game">
    <canvas id="canvas"></canvas>
    <img src="../assets/img/bean1.png" alt="">
    <div class="bottle"></div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      drip: require('../assets/img/drip.png'),
      beans: [require('../assets/img/bean1.png'), require('../assets/img/bean2.png')],
      booms: [require('../assets/img/boom1.png'), require('../assets/img/boom2.png'), require('../assets/img/boom3.png')],
      tags: [require('../assets/img/tag1.png'), require('../assets/img/tag2.png'), require('../assets/img/tag3.png'), require('../assets/img/tag4.png'), require('../assets/img/tag5.png')]
    }
  },
  mounted () {
    var canvas = document.getElementById('canvas')
    var ctx = canvas.getContext('2d')
    var dpr = window.devicePixelRatio
    canvas.width = document.documentElement.clientWidth * dpr
    canvas.height = document.documentElement.clientHeight * dpr
    var img1 = new Image()
    img1.src = require('../assets/img/bean1.png')
    img1.onload = function(){
      ctx.drawImage(img1, 100, 200, img1.width, img1.width);
    }
    var img = new Image();
    img.src = require('../assets/img/full.png');
    img.onload = function(){
      ctx.drawImage(img, 200, 300, img.width, img.height);
    }
  },
  computed: {
    process() {
      return (this.dripNum / 8 + 0.20).toFixed(2);
    }
  },
  methods: {
    generaterRandomInt (m,n) {
      return Math.floor(Math.random() * (n-m)) +m;
    },
    generaterRandomFloat (m,n) {
      return Math.random() * (n-m) +m;
    },
    
  }
}
</script>

<style lang="scss" scoped>
.game{
  position: relative;
  height: 100%;
  background-image: url(../assets/img/game.png);
  background-size: 100%;
  background-position: left bottom;
  background-repeat: no-repeat;
  .bottle{
    position: absolute;
    width: 100%;
    height: 655px;
    bottom: 13px;
    background-image: url(../assets/img/full.png);
    background-size: 318px;
    background-position: center top;
    background-repeat: no-repeat;
  }
  #canvas{
    width: 100%;
    height: 100%;
  }
  img{
    transform: translateY(-100px);
    width: 69px;
  }
  .img-wrap{
    position: absolute;
    width: 10vw;
    height: 10vw;
    top: -10vw;
    left: 0;
  }
  .bean{
    position: absolute;
    top: 0;
    left: 0;
  }
  .boom{
    position: absolute;
    width: 226px;
  }
  .tag{
    position: absolute;
    width: 100px;
    top: calc(100px - 5vm);
    left: 5vw;
  }
  .full{
    display: none;
  }
  .dropAnimate{
    animation: drop 50s linear;
  }
  .scaleAnimate{
    animation: scale 2s;
  }
  @keyframes drop {
    from { top: -10vm}
    to { top: 100vh}
  }
  @keyframes scale {
    from { transform: scale(0)}
    to { transform: scale(1)}
  }
}
</style>
