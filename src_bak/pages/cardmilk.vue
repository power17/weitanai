<template>
  <div class="card">
    <p class="title">恭喜你获得</p>
    <p class="detail">维他奶健康加法一盒</p>
    <p class="title">兑换券</p>
    <img class="qcode" src="../assets/img/qcode.png" alt="">
    <img class="price-img" src="../assets/img/pricemilk.png" alt="">
    <div class="p">
      <p><span class="label">使用规则：</span>凭券可在广东7-ELEVEn便利店兑换维他奶健康加法“纤维+” 1盒</p>
      <p><span class="label">兑换有效期：</span>年6月13日7:00-2018年7月24日24:00。兑换券已保存至公众号“我的卡券”处，随时可以查看使用。</p>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
 .card{
   text-align: center;
   padding-top: 66px;
   background-image: url(../assets/img/logo.png);
   background-size: 131px;
   background-position: 12px 21px;
   background-repeat: no-repeat;
   .title{
    font-size: 46px;
    color: #fff;
    text-align: center;
    line-height: 54px;
    text-shadow: 0 0 4px #7a93b5;
  }
  .detail{
    font-size: 60px;
    color: #fff;
    text-align: center;
    line-height: 86px;
    text-shadow: 0 0 4px #7a93b5;
  }
  .qcode{
    width: 357px;
    margin-top: 22px;
  }
  .price-img{
    display: block;
    width: 137px;
    margin: 18px auto 20px;
  }
  .p{
    font-size: 24px;
    line-height: 36px;
    color: #fff;
    margin-bottom: 20px;
    padding: 0 40px;
    text-align: left;
    .label{
      font-size: 30px;
      color: #fff000;
      font-weight: bold;
    }
  }
 }
</style>
