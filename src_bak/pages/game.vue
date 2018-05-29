<template>
  <div class="game">
    <canvas id="mainCanvas" width="640" height="1206" style="width: 100%; height: 100%; position: absolute;z-index: 99"></canvas>
    <audio :src="require('../assets/music/pop.wav')" id="audio"></audio>
  </div>
</template>

<script>
import {TweenMax} from "gsap/TweenMax"
export default {
  data () {
    return {
      framerate: 60,
    }
  },
  methods: {
    // init () {
    //    this.createjs = window.createjs
    //    this.Ticker = this.createjs.Ticker
    //    this.canvas = document.getElementById('mainCanvas')
    //    this.stage = new this.createjs.Stage(this.canvas)
    //    this.audio = document.getElementById("audio")
    //    this.createjs.Ticker.framerate = this.framerate
    //  },
    //  add
  },
  mounted () {
    // this.init();
    var self = this;
    var stage = new window.createjs.Stage("mainCanvas");
    var audio = document.getElementById("audio");
    window.createjs.Ticker.framerate = 60;
    window.createjs.Ticker.addEventListener("tick",handleTick);
    
    function handleTick() {
        stage.update();
    }

    window.createjs.Ticker.addEventListener("tick",function () {
        if(Math.random()>0.5){
            peanFlow();
        }else if(Math.random() <0.5) {
            peanMark();
        }

    });

    //杯子
    var cupLocation = {
        width:319,
        height:484
    };

    var clickCount = 0;//结果计数
    var milkTreeConfig = {};
    var milkTree = new window.createjs.Bitmap(require('../assets/img/animate/milkTree.png'));
    var milk = new window.createjs.Bitmap(require('../assets/img/animate/milk.png'));
    var cup = new window.createjs.Bitmap(require('../assets/img/animate/cup1.png'));
    function drawCup() {
        var stage_cup = new window.createjs.Container;
        stage.addChild(stage_cup);
        stage_cup.addChild(cup);
        console.log(cup);
        cupLocation.x =cup.x = 320-cupLocation.width/2;
        cupLocation.y=cup.y = 650;
        //绘制牛奶

        stage_cup.addChild(milk);
        milk.x = cupLocation.x + 49;
        milk.y =cupLocation.y +90;
        milk.alpha =0;
        //绘制奶树

        stage_cup.addChild(milkTree);
        // milkTree.regX = 318/2;
        // milkTree.regY =355/2;
        milkTreeConfig.x = milkTree.x = cupLocation.x;
        milkTreeConfig.y =milkTree.y = cupLocation.y-170;
        milkTree.alpha=0.6;
    }
    function milkTreeChange() {
        TweenLite.to(milkTree,.1,{alpha:1,onComplete: function () {
                TweenLite.to(milkTree,.3,{alpha:0.6});
            }});
    }
    // 爆炸

    //正常豆子
    function peanFlow() {

        if(Math.random()>0.98){
            var stage_pean=new window.createjs.Container();
            var pean = new window.createjs.Bitmap(require('../assets/img/animate/pean2.png'))
            stage.addChild(stage_pean);
            stage_pean.addChild(pean);
            var localX =Math.random() *640;
            pean.x = localX;
            pean.y = -100;
            pean.rotation = Math.random()*360;
            pean.scaleX=pean.scaleY =1;
            pean.regX=21;
            pean.regY=19;
          pean.addEventListener("click", function (event) {
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
              //奶树变化
              // clickCount++;
              if(clickCount>8){
                  gameOver();
              }else {
                  TweenLite.to(milk,.3,{ease:Linear.easeNone,alpha:clickCount/8});
              }

          });
            //豆子掉落
            if(localX> cupLocation.x&&localX<cupLocation.x + 231 + 60) {
                    //装到奶树的
                TweenLite.to(pean,7,{x:localX ,y:milkTreeConfig.y +20,ease:Sine.easeIn,delay: Math.random()+0.5,alpha:1,onComplete:function () {
                    // 奶树变化
                    TweenLite.to(milkTree,.1,{alpha:1,onComplete: function () {
                            TweenLite.to(milkTree,.3,{alpha:0.6});
                        }});

                    TweenLite.to(pean,1,{alpha:0,onComplete: function () {
                            stage.removeChild(stage_pean);
                        }});

            }});
            }else {
                TweenLite.to(pean,10,{x:localX ,y:1500,ease:Sine.easeIn,delay: Math.random()+0.5,alpha:1,onComplete:function () {
                        stage.removeChild(stage_pean);
                    }});
            }


        }
    }
    //标识豆子
    var milkTreeC = new window.createjs.Container();
    var peanMilkL = {};
    function peanMark() {

        if(Math.random()>0.98){
            var markArr = [require('../assets/img/animate/yz.png'), 
            require('../assets/img/animate/dgc.png'), 
            require('../assets/img/animate/dt.png'),
            require('../assets/img/animate/gg.png'),
            require('../assets/img/animate/yz.png')]
            var stage_pean=new window.createjs.Container();
            var pean = new window.createjs.Bitmap(require('../assets/img/animate/pean2.png'));
            var mark = new window.createjs.Bitmap(markArr[Math.floor(Math.random()*5)]);
            var localX =Math.random() *640;
            stage.addChild(stage_pean);
            stage_pean.addChild(pean);
            stage_pean.addChild( mark);
            mark.x = pean.x = localX;
            mark.y =pean.y = -100;
            mark.regX =0;
            mark.regY =210;
            mark.scaleX = mark.scaleY =0.6;
            pean.scaleX=pean.scaleY =1;
            pean.regX=21;
            pean.regY=19;
            var ani;
            //添加事件
            pean.addEventListener("click", function (event) {
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
                        TweenLite.to(peanMilk,1.5,{ease:Linear.easeNone,x: cupLocation.x+145,scaleY:0.8,scaleX:0.8,alpha:0.6,y: milkTreeConfig.x+350 -stage_pean.y,onComplete: () => {
                                stage_pean.removeChild(peanMilk);
                                //奶树变化
                                milkTreeChange();
                                TweenLite.to(peanMilk,1,{alpha:1});
                                clickCount++
                                if(clickCount === 1){
                                  // gameOver();
                                  console.log(self)
                                  self.$router.push({path: '/price1'})
                                }
                                
                            }});
                    }});
                //标识消失
                TweenLite.to(mark,1,{ease:Linear.easeNone,scaleX:1.1,scaleY:1.1,alpha:0,onComplete:function () {
                        stage_pean.removeChild(mark);
                    }});


            });

            if(localX> cupLocation.x&&localX<cupLocation.x + 231 + 60) {
                //撞到奶树上的
                ani =TweenLite.to(stage_pean,5,{x:0 ,y:milkTreeConfig.y+ 20,ease:Sine.easeIn,delay: Math.random()+1,alpha:1,
                    onUpdate:function() {

                    },

                    onComplete:function () {
                        // 奶树变化
                        TweenLite.to(milkTree,.1,{alpha:1,onComplete: function () {
                                TweenLite.to(milkTree,.3,{alpha:0.6});
                            }});
                        stage.removeChild(stage_pean);
                    }});
            } else {
              ani = TweenLite.to(stage_pean,10,{x:0 ,y:1500,ease:Sine.easeIn,delay: Math.random()+1,alpha:1,
                  onUpdate:function() {

                  },
                  onComplete:function () {
                        stage.removeChild(stage_pean);
                    }});
            }



        }
    }
    drawCup();


    function gameOver() {
        console.log("游戏结束");
        this.$router.push({path: '/price1'})
    }
    //杯子
  },
  methods: {
    
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
  .img-wrap{
    position: absolute;
    width: 10vw;
    height: 10vw;
    top: -10vw;
    left: 0;
  }
  [name="bean"]{
    position: absolute;
    top: 0;
    left: 0;
  }
  [name="boom"]{
    position: absolute;
    width: 226px;
    transform: scale(0);
  }
  .scaleAnimate{
    animation: scale 0.5s ease-out;
  }
  @keyframes scale {
    from { transform: scale(0)}
    to { transform: scale(1)}
  }
  [name="tag"]{
    position: absolute;
    width: 100px;
    top: calc(100px - 5vm);
    left: 5vw;
  }
  .full{
    display: none;
  }
}
</style>
