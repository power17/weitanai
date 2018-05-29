<template>
  <div class="game">
    <canvas id="mainCanvas" width="640" height="1206" style="width: 100%; height: 100%; position: absolute;z-index: 99"></canvas>
    <audio :src="require('../assets/music/pop.wav')" id="audio"></audio>
    <message class="start" :show="show1" @clickEmit="clickEmit1">
      <p>游戏说明</p>
    </message>
    <message class="end-noprice" :show2="show2">
      <p>你没中奖</p>
    </message>
    <message class="end-price" :show3="show3">
      <p>你中奖了</p>
    </message>
    <div class="num" v-show="numShow">
      <transition name="countdown">
      <span>{{number}}</span>
      </transition>
     </div>
  </div>
</template>

<script>
import {TweenMax} from "gsap/TweenMax"
import message from "../components/message.vue"
export default {
  data () {
    return {
      framerate: 60,
      numShow: false,
      number: 3,
      star: false,
      show1: true,
      show2: false,
      show3: false
    }
  },
  components: {
    message
  },
  methods: {
    clickEmit1() {
      this.show1 = false;
      this.numShow = true;
      var time = setInterval( () => {
        this.number--;
        if(this.number === 1) {
          clearInterval(time);
        }
      }, 1000)
      setTimeout( () => {
        this.numShow = false;
        this.createGame();
      }, 3000)
      
    },
    createGame() {
      var starTime = new Date();
      var endTime;
      var during;
      var isOver = false;//游戏结束

      var self = this;
      var stage = new window.createjs.Stage("mainCanvas");
      var audio = document.getElementById("audio");
      window.createjs.Ticker.framerate = 60;
      window.createjs.Ticker.addEventListener("tick",handleTick);

      function handleTick() {
          stage.update();
      }

      function startGame() {
        window.createjs.Ticker.addEventListener("tick",function () {
          if(isOver) {
            return;
          }
          var frequency = Math.random();
          if(frequency>0.98){
            peanFlow();
          }else if(frequency <0.01) {
            peanMark();
          }
          endTime = new Date();
          during = endTime  - starTime;
          during = new Date(during).getSeconds();
          if(during===30) {
            isOver = true;
            self.$router.push({path: '/end'})
            // self.$message({
            //   msg: '游戏结束，您没有集满一杯牛奶'
            // });
            // alert("30秒，游戏结束");
          }
        });
      }
        startGame();
      //杯子
      var cupLocation = {
          width:319,
          height:484
      };

      var clickCount = 0;//结果计数
      var milkTreeConfig = {};
      var milkTree = new window.createjs.Bitmap(require('../assets/img/animate/milkTree.png'));
      var milk = new window.createjs.Bitmap(require('../assets/img/animate/milk.png'));
      var cup = new window.createjs.Bitmap(require('../assets/img/animate/cup2.png'));
      function drawCup() {
          var stage_cup = new window.createjs.Container();
          stage.addChild(stage_cup);
          stage_cup.addChild(cup);
          cupLocation.x =cup.x = 320-cupLocation.width/2;
          cupLocation.y=cup.y = 650;
          cup.regY =120;
          cup.alpha =0.2;
          //绘制牛奶
          //
          // stage_cup.addChild(milk);
          // milk.x = cupLocation.x + 49;
          // milk.y =cupLocation.y +77;
          // milk.alpha =0.2;

        // milk.setBounds(bounds.x, bounds.y, bounds.width*0.6, 100);
          //绘制奶树

          stage_cup.addChild(milkTree);
          // milkTree.regX = 318/2;
          // milkTree.regY =355/2;
          milkTreeConfig.x = milkTree.x = cupLocation.x;
          milkTreeConfig.y =milkTree.y = cupLocation.y-170;
          milkTree.alpha=0.2;
      }
      function milkTreeChange() {
          TweenLite.to(milkTree,.1,{alpha:1,onComplete: function () {
                  TweenLite.to(milkTree,.3,{alpha:0.6});
              }});
      }
      // 爆炸

      //正常豆子
      function peanFlow() {
        var stage_pean=new window.createjs.Container();
        var pean = new window.createjs.Bitmap(require('../assets/img/animate/pean2.png'))
        pean.hitArea=new createjs.Shape();
        pean.hitArea.graphics.f("#fff").dc(0,0,100,100);
        stage.addChild(stage_pean);
        stage_pean.addChild(pean);
        var localX =Math.random() *510 + 50;
        pean.x = localX;
        pean.y = -50;
        pean.rotation = Math.random()*360;
        pean.scaleX=pean.scaleY =1;
        pean.regX=21;
        pean.regY=19;

        pean.addEventListener("mousedown", function (event) {
          audio.play();
          //移除这颗豆子
          stage_pean.removeChild(pean);
          var blast = new window.createjs.Bitmap(require('../assets/img/animate/blast.png'));
          // 添加爆炸
          stage_pean.addChild(blast);
          blast.x = pean.x;
          blast.y = pean.y;
          blast.regX = 106;
          blast.regY = 100;
          blast.scaleX = blast.scaleY =0;
          TweenLite.to(blast,1,{scaleX:1,scaleY:1, onComplete:function () {
              stage_pean.removeChild(blast);
            }});



        });
        //豆子掉落
        if(localX> cupLocation.x&&localX<cupLocation.x + 231 + 60) {
          //装到奶树的
          TweenLite.to(pean,2,{x:localX ,y:milkTreeConfig.y +20,ease:Sine.easeIn,alpha:1,onComplete:function () {
              // 奶树变化
              // TweenLite.to(milkTree,.1,{alpha:1,onComplete: function () {
              //     TweenLite.to(milkTree,.3,{alpha:0.6});
              //   }});
              TweenLite.to(pean,1,{alpha:0,onComplete: function () {
                  stage.removeChild(stage_pean);
                }});

            }});
        }else {
          TweenLite.to(pean,4,{x:localX ,y:1500,ease:Sine.easeIn,alpha:1,onComplete:function () {
              stage.removeChild(stage_pean);
            }});
            // TweenLite.to(hitArea,4,{x:localX ,y:1500,ease:Sine.easeIn,alpha:1,onComplete:function () {
            //   stage.removeChild(stage_pean);
            // }});
        }

      }
      //标识豆子
      var milkTreeC = new window.createjs.Container();
      var peanMilkL = {};
      function peanMark() {
        var markArr = [require('../assets/img/animate/yz.png'),
          require('../assets/img/animate/dgc.png'),
          require('../assets/img/animate/dt.png'),
          require('../assets/img/animate/gg.png'),
          require('../assets/img/animate/yz.png')]
        var stage_pean=new window.createjs.Container();
        var pean = new window.createjs.Bitmap(require('../assets/img/animate/pean2.png'));
        pean.hitArea=new createjs.Shape();
        pean.hitArea.graphics.f("#fff").dc(0,0,100,100);
        var mark = new window.createjs.Bitmap(markArr[Math.floor(Math.random()*5)]);
        var localX =Math.random() *510 + 50;
        stage.addChild(stage_pean);
        stage_pean.addChild(pean);
        stage_pean.addChild( mark);
        mark.x = pean.x = localX;
        mark.y =pean.y = -150;
        mark.regX =0;
        mark.regY =210;
        mark.scaleX = mark.scaleY =0.6;
        pean.scaleX = pean.scaleY = 1;
        pean.regX=21;
        pean.regY=19;
        var ani;
        //添加事件
        pean.addEventListener("mousedown", function (event) {
          audio.play();
          ani.pause();
          //移除这颗豆子
          var stage_blast = new window.createjs.Container;
          var blast = new window.createjs.Bitmap(require('../assets/img/animate/blast.png'));
          stage_pean.removeChild(pean);
          // 添加爆炸
          stage.addChild(stage_blast);
          stage_pean.addChild(blast);
          blast.x = pean.x;
          blast.y = pean.y;
          blast.regX = 106;
          blast.regY = 100;
          blast.scaleX = blast.scaleY =0;
          //爆炸
          TweenLite.to(blast,1,{scaleX:1,scaleY:1, onComplete:function () {
              stage_pean.removeChild(stage_pean);
              stage_pean.removeChild(blast);
              //豆奶出现
              var peanMilk = new window.createjs.Bitmap(require('../assets/img/animate/peanMilk.png'));
              stage_pean.addChild(peanMilk);
              peanMilk.x = pean.x;
              peanMilk.y = pean.y;
              peanMilk.regX =32;
              peanMilk.regY =56;
              TweenLite.to(peanMilk,.5,{ease:Linear.easeNone,x: cupLocation.x+145,scaleY:0.8,scaleX:0.8,alpha:0.6,y: milkTreeConfig.x+350 -stage_pean.y,onComplete: () => {
                  stage_pean.removeChild(peanMilk);
                  //奶树变化
                  // milkTreeChange();
                  TweenLite.to(peanMilk,1,{alpha:1});
                  clickCount++;
                  //牛奶增加
                  // var milkH =314*(1-clickCount/8);
                  // var rect = new createjs.Rectangle(0,milkH,211,314);
                  // milk.alpha =1;
                  // milk.regY =-milkH;
                  // milk.sourceRect =rect;
                  //奶树增加透明度
                  TweenLite.to(cup,.3,{alpha:.1*clickCount+0.2});
                  TweenLite.to(milkTree,.3,{alpha:.1*clickCount+0.2});
                  TweenLite.to(milk,.3,{ease:Linear.easeNone,alpha:0.2+clickCount*.1,onComplete:function () {
                      if(clickCount === 8 && !isOver){
                        gameOver();
                      }
                    }});


                }});
            }});
          //标识消失
          TweenLite.to(mark,1,{ease:Linear.easeNone,scaleX:1.1,scaleY:1.1,alpha:0,onComplete:function () {
              stage_pean.removeChild(mark);
            }});


        });

        if(localX> cupLocation.x&&localX<cupLocation.x + 231 + 60) {
          //撞到奶树上的
          ani =TweenLite.to(stage_pean,2,{x:0 ,y:milkTreeConfig.y+150,ease:Sine.easeIn,alpha:1,
            onUpdate:function() {

            },

            onComplete:function () {
              // 奶树变化
              // TweenLite.to(milkTree,.1,{alpha:1,onComplete: function () {
              //     TweenLite.to(milkTree,.3,{alpha:0.6});
              //   }});
              // TweenLite.to(pean,1,{alpha:0,onComplete: function () {
              //     stage.removeChild(stage_pean);
                // }});
              stage.removeChild(stage_pean);
            }});
        } else {
          ani = TweenLite.to(stage_pean,4.5,{x:0 ,y:1500,ease:Sine.easeIn,alpha:1,
            onUpdate:function() {

            },
            onComplete:function () {
              stage.removeChild(stage_pean);
            }});
        }

      }
      drawCup();


      function gameOver() {
        isOver = true;
        self.$router.push({path: '/price1'})
      }
    }
  },
  mounted () {
    //document.addEventListener('touchmove', function (event) {event.preventDefault();}, { passive: false });//阻止了浏览器默认的下拉事件
    //document.addEventListener('click', function (event) {event.preventDefault();}, { passive: false });s
  }
}
</script>

<style lang="scss" scoped>
  #mainCanvas{
    -webkit-tap-highlight-color:transparent;
  }
.game{
  position: relative;
  height: 100%;
  background-image: url(../assets/img/game.png);
  background-size: 100%;
  background-position: left bottom;
  background-repeat: no-repeat;
}
.num{
  display: flex;
  align-items: center;
  color: #fff;
  font-size: 100px;
  justify-content: center;
  position: fixed;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
}
</style>
