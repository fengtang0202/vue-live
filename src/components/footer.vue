<template>
  <footer class='footer'>
    <input type="text" id="message" placeholder="该出声时就出声,不要憋坏了..." name="" value="">
    <button type="button" id='send'>发送</button>
  </footer>
</template>

<script>
    export default {
      data () {
        return {}
      }
    }
</script>

<style scoped>
  .footer{position: fixed;bottom:0;line-height:0.8rem;height:1.18rem;width:100%;background-color: #fff}
  #message{width:45%;height:.65rem;border:0;font-size:.24rem;padding-left: .27rem;border-radius: 1.2rem;background-color: #f3f3f3;outline:none;margin: .27rem }
  #send{width: 2.15rem;height: .8rem;border:0;background-color: #F33333;border-radius: .5rem;outline:none;color:#fff;}
</style>
