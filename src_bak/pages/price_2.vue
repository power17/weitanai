<template>
  <div class="price">
    <p class="title">恭喜您<br>收集满营养能量</p>
    <p class="sub-title">可获得</p>
    <p class="detail">健康加法3元立减券</p>
    <img class="price-img" src="../assets/img/price3.png" alt="">
    <div class="btn-group">
      <button class="add-card">添加到我的卡包</button>
      <img src="../assets/img/logo.png" alt="">
    </div>
  </div>
</template>

<script>
export default {
  name: 'price2',
  data () {
    return {
    }
  },
  methods: {
    toIntroduce () {
      this.$router.push({path: '/introduce'})
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.price{
  height: 100%;
  .title{
    padding-top: 86px;
    font-size: 40px;
    color: #fff;
    text-align: center;
    line-height: 54px;
    margin-bottom: 60px;
    text-shadow: 0 0 4px 0 #333;
  }
  .sub-title{
    font-size: 40px;
    color: #fff;
    text-align: center;
    line-height: 54px;
  }
  .detail{
    font-size: 60px;
    color: #fff;
    text-align: center;
    line-height: 122px;
  }
  .price-img{
    display: block;
    width: 388px;
    margin: 12px auto 57px;
  }
  .btn-group{
    text-align: center;
    .add-card{
      width: 484px;
      height: 109px;
      font-size: 40px;
      border: 0;
      color: #fff;
      letter-spacing: 10px;
      margin-bottom: 20px;
      background-image: url(../assets/img/addCardBtn.png);
      background-color: transparent;
      background-size: 100%;
    }
    img{
      display: block;
      width: 131px;
      margin: 0 auto;
    }
  }
  
}
</style>
