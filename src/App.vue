<template>
<router-view>
  <div id="app">
  </div>
</router-view>
</template>

<script>
export default {
  name: 'App',
    data(){
     return {
     }
}
}
</script>

<style>
nav{
  height: 18vh;
}
body{
  margin: 0px;
  padding: 0px;
  background: #0D0D0D;
}
@font-face {
  font-family: 'Montserrat Regular';
  src: url('~@/assets/fonts/Montserrat-Regular.ttf') format('truetype');
  font-weight: normal;
  font-style: normal;
}
</style>
