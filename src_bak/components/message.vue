<template>
  <div class="mask" v-show="show">
    <div class="content" :class="paddingClass">
      <p>{{msg}}</p>
      <button @click="show = false">确定</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: false,
      msg: '',
      paddingClass: 'line3'
    }
  }
}
</script>

<style lang="scss" scoped>
.mask{
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0,0,0,.5);
}
.content{
  position: absolute;
  top: 14%;
  width: 538px;
  height: 346px;
  background: #fff;
  border-radius: 10px;
  left: 50%;
  transform: translateX(-50%);
  
  box-sizing: border-box;
  &.line3{
    padding: 34px 58px 0;
  }
  &.line2{
    padding: 64px 102px 0;
  }
  p{
    font-size: 42px;
    color: #0070fa;
    line-height: 62px;
    font-weight: bold;
  }
  button{
    position: absolute;
    bottom: 44px;
    left: 50%;
    transform: translateX(-50%);
    width: 373px;
    height: 84px;
    border: 0;
    font-size: 40px;
    color: #fff;
    letter-spacing: 30px;
    background-image: url(../assets/img/msgBtn.png);
    background-color: transparent;
    background-size: 100%;
  }
}
</style>
