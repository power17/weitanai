<template>
  <div class="start">
    <div class="slogan"></div>
    <div class="btn-group">
      <button class="activity-introduce" @click="toIntroduce">活动说明</button>
      <button class="start-game" @click="toGame">戳我有营养<br><span>START</span></button>
    </div>
    <div class="no-start" v-show="false">
      亲，本活动将于<br>2018年6月13日<br>7:00开始<br>敬请期待
    </div>
  </div>
</template>

<script>
export default {
  name: 'start',
  data () {
    return {
    }
  },
  methods: {
    toIntroduce () {
      this.$router.push({path: '/introduce'})
    },
    toGame() {
      this.$router.push({path: '/game'})
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.start{
  height: 100%;
  background-image: url(../assets/img/start.png);
  background-size: 100%;
  background-position: left bottom;
  background-repeat: no-repeat;
  .slogan{
    height: 253px;
    padding-top: 60px;
    background-image: url(../assets/img/slogan.png);
    background-size: 459px;
    background-position: center 60px;
    background-repeat: no-repeat;
  }
  .btn-group{
    position: absolute;
    width: 100%;
    bottom: 63px;
    text-align: center;
    .activity-introduce{
      width: 249px;
      height: 69px;
      border: 0;
      font-size: 30px;
      color: #fff;
      letter-spacing: 7px;
      margin-bottom: 14px;
      background-image: url(../assets/img/start-btn1.png);
      background-color: transparent;
      background-size: 100%;
    }
    .start-game{
      width: 413px;
      height: 109px;
      font-size: 40px;
      border: 0;
      color: #fff;
      letter-spacing: 10px;
      background-image: url(../assets/img/start-btn2.png);
      background-color: transparent;
      background-size: 100%;
      span{
        display: inline-block;
        font-size: 30px;
        margin-top: 10px;
      }
    }
  }
  .no-start{
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    font-size: 48px;
    line-height: 74px;
    color: #fff;
    text-align: center;
    letter-spacing: 12px;
    font-weight: bold;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    background: rgba(0,0,0,.5)
  }
}
</style>
