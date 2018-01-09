<template>
  <div class="content">
    <router-view></router-view>
  </div>
</template>
<script>
    export default{
      data () {
        return {
        }
      }
    }
</script>

<style scoped>
  .content{width:100%;margin-top: .08rem;background-color: #EBEBEB;overflow-y:scroll;-webkit-overflow-scrolling : touch }
  .content::-webkit-scrollbar {display: none;}

</style>
