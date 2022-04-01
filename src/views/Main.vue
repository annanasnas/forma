<template>
  <div id="Main_Forma">
  <Header :trigger_show="trigger_show"/>
    <div class="d-flex flex-column">
      <Trigger @triggerDowns="triggerDowns" @triggerShow="triggerShow"/>
      <Form/>
      <List_of_services/>
      <Carousel/>
      <Footer/>
    </div>
  </div>
</template>

<script>

import Header from '../components/HeaderForma.vue'
import Form from '../components/Form.vue'
import List_of_services from '../components/List_of_services.vue'
import Footer from '../components/Footer.vue'
import Carousel from '../components/Carousel.vue'
import Trigger from '../components/global/Trigger.vue'

// Trigger отвечает за появление и исчезновение кнопки "Оставить заявку"
// Trigger только на странице Main.vue

export default {
  name: 'Main',
  components: {
    Header,
    Form,
    Trigger,
    List_of_services,
    Carousel,
    Footer
  },
  data(){
    return{
      trigger_show: true
    }
  },
  methods:{
    triggerDowns(){
      this.trigger_show = true
    },
    triggerShow(){
      this.trigger_show = false
    }
  }
}

</script>

<style>

#Main_Forma {
  /* Фон */
  background: #0D0D0D; 
  background-image: url(../assets/pictures/Union.png);
  background-position: right 114px;
  background-repeat: no-repeat;
  /* Расположение объектов на странице */
  display: flex;
  flex-direction: column;
  /* Шрифт */
  color: #FFFFFF;
  font-family: 'Montserrat Regular';
}
/* Подключение шрифта */
@font-face {
  font-family: 'Montserrat Regular';
  src: url('~@/assets/fonts/Montserrat-Regular.ttf') format('truetype');
  font-weight: normal;
  font-style: normal;
}
/* Фон на мобильных устройствах */
@media screen and (max-width: 425px){
  #Main_Forma{
    background-position: right 470px;
    background-image: url(../assets/pictures/Union-mobile.png);
  }
}
</style>