<template>
  <header class="header">
    <img src="../assets/images/bg.jpg" alt=""  style="width:100%;">
    <div class='person'>
      <i class='iconfont icon-touxiang-copy'></i>
      <span class="title_1 title">999999</span>
    </div>
    <div class='details'>
      <div class='timer'>
        <i class='iconfont icon-shijian'></i>
        <span class='title'>时间: <span class='title_1'>{{playTime}}</span></span>
      </div>
      <div class='timer1'>
        <i class='iconfont icon-daojishi'></i>
        <span class='title'>倒计时 <span class='title_1'>50天20时50秒</span></span>
      </div>
    </div>
    <div class='address'>
      <i class='iconfont icon-icon-yxj-address'></i>
      <span class='title'>地址: <span class='title_1'>杭州市西湖区西湖广告大厦10楼</span></span>
    </div>
  </header>
</template>

<script>
    export default {
      data () {
        return {
          playTime: '2018-02-02'
        }
      }
      // computed: {
      //   daoTime () {
      //     var endtime = new Date(this.playTime)
      //     var nowtime = new Date()
      //     var leftsecond = parseInt((endtime.getTime() - nowtime.getTime()) / 1000)
      //     let d = parseInt(leftsecond / 3600 / 24)
      //     let h = parseInt((leftsecond / 3600) % 24)
      //     let m = parseInt((leftsecond / 60) % 60)
      //     let s = parseInt(leftsecond % 60)
      //     let td = d * 24 + h
      //     let time=`${td}天`
      //     return m
      //   }
      // }
    }
</script>

<style scoped>
  img{ vertical-align:top;}
  p{margin:0;}
  .header{position:relative;top:0;left:0;background-color: #fff;width:100%}
  .details{display:flex;flex-direction:row;width:100%;}
  .iconfont{font-size: .35rem;margin-left:.27rem;color:#999999}
  .title{font-size: .28rem;}.title_1{color:#f03118}
  .person{width:1.9rem;height:.67rem;background-color: rgba(255,255,255,0.8);position: absolute;top:.31rem;right:.27rem; border-radius:.27rem;}
  .person .iconfont{line-height: .67rem}
</style>
