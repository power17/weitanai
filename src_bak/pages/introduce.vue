<template>
  <div class="introduce">
    <h1 class="title">活动说明</h1>
    <img class="split" src="../assets/img/split.png" alt="">
    <p class="p"><span class="label">活动说明：</span>2018年6月13日7:00-2018年7月17日24:00。</p>
    <p class="p"><span class="label">参与方式：</span>活动期间，扫描二维码参与游戏并过关，即可100%获得广东7-ELEVEn便利店优惠券，更有机会赢取价值3500元健身卡一张。</p>
    <div class="p">
      <p class="label">游戏说明 ：</p>
      <p>1.点击游戏页面的豆子，在30秒内收集满8颗带有标识的豆子，即可收集满一杯豆奶；</p>
      <p>2.收集满一杯健康加法醇豆奶后，即可随机获得奖品。</p>
    </div>
    <div class="p">
      <p class="label">奖品设置：</p>
      <p>一等奖：健身卡价值3,500元，共5名；</p>
      <p>二等奖：健康加法产品1盒，共10,495名</p>
      <p>三等奖：健康加法3元立减券，共42,000名</p>
      <p>四等奖：维他奶产品1元立减券，共52,500名</p>
    </div>
    <div class="p">
      <p class="label">活动细则：</p>
      <p>1.本次活动综合中奖率为100%（价值3,500元健身卡中奖率为0.005%，广东7-ELEVEn优惠券的中奖率为99.995%）;</p>
      <p>2.每天参与游戏的人数上限为3,000人，每个微信号每天只能参与一次抽奖活动；</p>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
 .introduce{
   text-align: center;
   background-image: url(../assets/img/logo.png);
   background-size: 131px;
   background-position: 12px 21px;
   background-repeat: no-repeat;
   .title{
     padding-top: 44px;
     font-size: 50px;
     color: #fff;
     letter-spacing: 14px;
     margin-bottom: 35px;
   }
   .split{
     width: 492px;
     margin-bottom: 38px;
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
