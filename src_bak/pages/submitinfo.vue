<template>
  <div class="form">
    <form ref="form">
      <p class="label">填写姓名</p>
      <input type="text" v-model="userInfo.name" maxlength="4">
      <p class="label">填写身份证号码</p>
      <input type="text" maxlength="18" v-model="userInfo.num">
      <p class="label">填写电话号码</p>
      <input type="tel" v-model="userInfo.phone" maxlength="11">
    <div class="note">
      <p>温馨提示：请如实提供个人信息，维他奶工作人员将在5个工作日内联系您并告知具体领奖事宜；否则将视为弃奖处理。</p>
      <p>咨询热线：020-83708075</p>
      <p>咨询时间：周一至周五9:00-17:30</p>
    </div>
    <div class="btn-group">
      <button class="add-card" @click.prevent="submitInfo">提交信息</button>
      <img src="../assets/img/logo.png" alt="">
    </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'start',
  data () {
    return {
      userInfo: {
        name: '',
        num:'',
        phone: ''
      }
    }
  },
  methods: {
    submitInfo () {
      if(!this.userInfo.name){
        this.$toast.center('请填写姓名');
        return;
      }
      if(!(/^1[34578]\d{9}$/.test(this.userInfo.phone))){
        this.$toast.center('请正确填写手机号码');
        return;
      }
      if(this.userInfo.num.length !== 15 || this.userInfo.num.length !== 18){
        this.$toast.center('请正确填写身份证号码');
        return;
      }

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.form{
  height: 100%;
  form{
    padding-top: 14px;
    text-align: center;
    .label{
      font-size: 46px;
      line-height: 82px;
      color: #f4e8c4;
      padding-top: 8px;
      text-shadow: 0 0 4px #8ba0be;
    }
    input{
      width: 460px;
      height: 82px;
      text-align: center;
      background: #cce7f5;
      border: 0;
      border-radius: 12px;
      padding: 0 15px;
      box-sizing: border-box;
    }
    .note{
      text-align: left;
      color: #f4e8c4;
      padding: 28px 80px 26px;
      font-size: 24px;
      line-height: 42px;
    }
  }
  .btn-group{
    // position: absolute;
    // width: 100%;
    // bottom: 46px;
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

    bottom: 46px;
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
