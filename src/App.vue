<template>
  <div id="app">
    <Live></Live>
    <Nav></Nav>
    <Content></Content>
    <Footer></Footer>
  </div>
</template>

<script>
  import Live from '@/components/live'
  import Content from '@/components/content'
  import Footer from '@/components/footer'
  import Nav from '@/components/nav'
  export default {
    components: {
      Live,
      Content,
      Footer,
      Nav
    }
}
</script>

<style>
  body{margin: 0;background-color:#EBEBEB;padding:0;font-family: "Arial","Microsoft YaHei","黑体","宋体",sans-serif;}

</style>
