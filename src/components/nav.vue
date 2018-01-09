<template>
  <div class="nav">
    <div class='live active'  @click="jump2">图文直播</div>
    <div class='chat' @click="jump">聊天室</div>
    <div id="concat_us">关注我们</div>
  </div>
</template>

<script>
    export default {
      data () {
        return {
        }
      },
      methods: {
        jump () {
          this.$router.push('/chat')
        },
        jump2 () {
          this.$router.push('/ptext')
        }
      }
    }
</script>

<style scoped>
  .nav{margin-top:.1rem;height:0.8rem;background-color: #fff;width:100%;display:flex;justify-content:space-between;}
  .nav div{width:30%;height:100%;font-weight: normal;line-height: 0.8rem;font-size: .3rem;text-align: center;}
  .nav div:last-child{background-color: #f33333;color:#fff}
</style>
