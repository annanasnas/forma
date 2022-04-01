<template>
        <nav class="navbar">
            <!-- Лого -->
            <router-link to="/" class="navbar-brand hover-image" href="#">
                <img src="../assets/pictures/logo.png" width="auto" height="50" alt="">
            </router-link>
            <!-- Ссылка на проекты -->
            <router-link id="project-link" to="/projects" class="navbar-toggler hover-element" type="button">
                Проекты
            </router-link>
            <!-- Ссылка на FAQ -->
            <router-link id="FAQ-link" to="/FAQ" class="navbar-toggler mr-auto hover-element" type="button">
                FAQ
            </router-link>
            <!-- Правая часть header'a -->
            <div id="right_header">
                <!-- Кнопка "Оставить заявку" -->
                <b-button v-b-modal.modal-1 v-if="trigger_show" id="first_button" class="navbar-toggler Forma_button">
                    Оставить заявку
                </b-button>
                <!-- Email -->
                <a :href="email0" class="navbar-text email">
                    {{ info[0].email }}
                </a>
            <!-- Выпадающее меню, появляющееся только на мобильных устройствах -->
                <div id="Burger">
                    <Burger />
                </div>
            </div>
            <Sidebar>
                <ul class="sidebar-panel-nav">
                    <li><a href="/projects">Проекты</a></li>
                    <li><a href="/FAQ">FAQ</a></li>
                </ul>
            </Sidebar>
            <!-- Всплывающее окно при нажатии "Оставить заявку" -->
            <b-modal id="modal-1">
                <template #modal-title>
                    <div id="form_Forma_title2" v-bind:class="{ marginChange: isActive }">
                        <div class="start_text" v-bind:class="{ sizeChange: isActive }">{{submitFormFirst}}</div> 
                        <div class="form_text" v-bind:class="{ sizeChange: isActive }">{{submitFormSecond}}</div>
                    </div>
                </template>
                <form 
                    id="form_Forma_content"
                    v-on:submit.prevent="submitForm"
                >
                    <div id="imageChange" v-bind:class="{ imageVisible: notActive, marginChange: isActive }">
                        <img src="../assets/pictures/smile.png" width="200" alt="" style="margin-bottom: 25.5%;">
                    </div>
                <div class="form-group" v-bind:class="{ active3: isActive }">
                    <input 
                        type="text" 
                        class="form-control" 
                        id="formGroupExampleInput" 
                        placeholder="Имя"
                        v-model="form.name"
                        v-bind:class="{ red: isRed3 }"
                    >
          <!-- <div class="invalid-feedback">
          Please choose a username.
        </div> -->
                </div>
                <div class="form-group" v-bind:class="{ active3: isActive }">
                    <input 
                        type="text" 
                        class="form-control" 
                        id="exampleInputEmail" 
                        aria-describedby="emailHelp" 
                        placeholder="Электронная почта"
                        v-model="form.email"
                        v-bind:class="{ red: isRed4 }"
                    >
                </div>
                <div class="form-group" v-bind:class="{ active3: isActive }">
                    <input 
                        type="tel" 
                        class="form-control" 
                        id="formGroupExampleInput1" 
                        placeholder="Телефон"
                        v-model="form.phone_number"
                    >
                    <small class="form-text text-muted">
                        <div class="small_text2">Заполните поле, если вам удобнее,</div> 
                        <div class="small_text2">чтобы мы вам позвонили.</div></small>
                </div>
                <div class="form_button1 justify-content-center" v-bind:class="{ active4: isActive }">
                    <button type="submit" v-on:click="changeActive" v-bind:class="{ active4: isActive }" class='navbar-toggler Forma_button' >Отправить заявку</button>
                </div>
                </form>
            </b-modal>
        </nav>
</template>

<script>
import Burger from './global/Burger.vue';
import Sidebar from './global/Slidebar.vue';
import axios from 'axios';

export default {
    data() {
       return {
      form: {
        name: '',
        email: '',
        phone_number: '',
      },
      isActive: false,
      notActive: true,
      submitFormFirst: 'Оставить',
      submitFormSecond: 'заявку',
      isRed3: false,
      isRed4: false,
      info : null,
      email0: ""
    }
    },
  name: 'Header',
  props: ["trigger_show"],
  components: {
      Burger,
      Sidebar
    },
  methods: {
    submitForm(){
              if (this.form.phone_number === '' && this.form.name != '' && this.form.email != '') {
                this.form.phone_number = '+79000000000'
              }
            axios.post('http://127.0.0.1:8000/api-1/applications/', this.form)
                 .then(() => {
                     this.form.name = '',
                     this.form.email = '',
                     this.form.phone_number = ''
                 })
    },
    changeActive(){
      var change1 = false
      var change2 = false
      if (this.form.name === ''){
        this.isRed3 = true
      }
      if(this.form.email === '') {
        this.isRed4 = true
      }
      if (this.form.email != '' && this.form.name != ''){
        change1 = true
        change2 = true
      }
      if (change1 && change2) {
        this.isActive = true
        this.notActive = false
        this.submitFormFirst = 'Спасибо, что решили'
        this.submitFormSecond = 'работать с нами'
        this.isRed3 = false
        this.isRed4 = false
      }
    }
  },
    mounted(){
        this.axios
            .get('http://127.0.0.1:8000/api-1/company/')
            .then(response => (
                this.info = response.data
            )
            )
            .get('http://127.0.0.1:8000/api-1/company/')
            .then(response => (
                this.email0 = "mailto:" + response.data[0].email
            )
            )
    } 
}

</script>

<style>
/* Убрать свечение кнопок при нажатии */
*{
    font-family: 'Montserrat Regular';
}
.red{
  border-color: red !important;
}
#project-link, #FAQ-link{
    outline: none;
    box-shadow: none !important;
    -webkit-appearance: none;
}
/* Стили всплывающего окна */
#modal-1{
    padding: 0;
}
.active3, .active4{
  display: none !important;
}
.sizeChange{
  font-size: 30px;
  text-align: start;
}
.marginChange{
  margin-top: 10.65%;
}
#imageChange{
  display: flex;
  justify-content: center;
}
.imageVisible{
  visibility: hidden;
  width: 0px;
  height: 0px;
  overflow: hidden;
}
/* Стили выпдающего меню на мобильных устройствах */
#Burger{
    visibility: hidden;
    width: 0vw;
}
.navbar{
    padding-top: 0%;
    padding-bottom: 0%;
    background: #0D0D0D;
    padding-left: 9.5vw;
    padding-right: 9.5vw;
    width: 100vw;
}
#right_header{
    display: flex;
    align-items: center;
    justify-content: flex-end;
    width: 33.5vw;
}
#project-link{
    width: 9.45vw;
}
.email, .email:hover, .email:active{
    text-decoration: none;
    color: #FFFFFF;
}
.email, .Forma_button{
    font-size: 20px;

}
#first_button{
    margin-right: auto;
    position: static;
    height: 2.75rem;
    font-weight: 700;
    color: #FFFFFF;
    border: 2px solid;
    border-image: linear-gradient(260.5deg, #4E33B8 0%, #01A99A 99.17%);
    border-image-slice: 1;
    padding-left: 1rem;
    padding-right: 1rem;
}
.Forma_button:hover{
    background: linear-gradient(260.5deg, #4E33B8 0%, #01A99A 99.17%);
}
.Forma_button{
    outline: none;
    box-shadow: none !important;
    -webkit-appearance: none;
}
.navbar-toggler, .navbar-toggler:hover{
    text-decoration: none;
    color: #FFFFFF;
}
.navbar-toggler.hover-element{
    font-size: 24px;
}
.navbar-toggler.hover-element:hover{
    font-size: 24.3px;
}
#form_Forma_content{
  background: #0D0D0D;
  width: 100%;
  border: 1px solid transparent;
  border-color: #FFFFFF;
  padding: 5%;
  padding-top: 0.5%;
}
#form_Forma_title2{
  font-size: 3.75rem;
  font-weight: 500;
  text-align: end;
  padding-bottom: 4%;
  color: #FFFFFF;
}
.form_text{
  margin-bottom: 5vh;
}
input, input:optional, input:focus{
  border: 0px;
  background: none;
  -webkit-box-shadow: none;
  box-shadow: none;
  text-align: end;
  font-size: 	1.25rem;
  border-bottom: 2px solid;
  border-color: #FFFFFF;
  background-color: transparent !important;
}
#formGroupExampleInput, #exampleInputEmail, #formGroupExampleInput1{
    color: #5C5C5C;
    border-color: white;
  }
.form-control{
  padding: 0px;
}
.form-group{
  padding-bottom: 4%;
}
/* Change color in the input and small */
input::-webkit-input-placeholder { color: #5C5C5C; }

.form-text{
  text-align: end;
}
small{
  margin-top: 2%;
}
.small_text{
  color: #5C5C5C;
  font-size: 1rem;
}
.form_button1{
  margin-top: 8%;
  display: flex;

}
@media screen and (max-width: 1300px) {
  .email{
    display: none;
  }
}
@media screen and (max-width: 1250px){
    #project-link{
        width: 11vw;
    }
    #first_button{
    margin-left: auto;
    margin-right: 0%;
}
}
@media screen and (max-width: 1150px){
    #project-link{
        width: 12vw;
    }
}
@media screen and (max-width: 1000px){
    #project-link{
        width: 13vw;
    }
}
@media screen and (max-width: 950px){
    #project-link{
        width: 14vw;
    }
}
@media screen and (max-width: 900px){
    #project-link{
        width: 15vw;
    }
}
@media screen and (max-width: 850px){
    #project-link{
        width: 16vw;
    }
    
}
@media screen and (max-width: 750px){
    #project-link{
        width: 17vw;
    }
}
@media screen and (max-width: 710px){
    #project-link{
        width: 18vw;
    }
}
@media screen and (max-width: 640px){
    #project-link{
        width: 22vw;
    }
}
@media screen and (max-width: 600px){
    #project-link{
        width: 23vw;
    }
}
@media screen and (max-width: 550px){
    #project-link{
        width: 24vw;
    }
}
@media screen and (max-width: 500px){
    #project-link{
        width: 26vw;
    }
}
@media screen and (max-width: 450px){
    #project-link{
        width: 29vw;
    }
}
@media screen and (max-width: 425px){
    #Burger{
        position: absolute;
        right: 17vw;
        visibility: visible;
        width: 1vw;
        /* width: 10vw; */
        /* margin-right: 5vw; */
    }
    .email{
        display: none;
    }
    #project-link, #FAQ-link{
        display: none;
    }
    #right_header{
        width: 49vw;
    }
    #first_button{
        visibility: visible;
        margin-right: auto;
        margin-left: 0;
        font-size: 15px;
        height: 6vh;
        padding-left: 10px;
        padding-right: 10px;
        background: #0D0D0D;
    }
    .navbar{
        padding-left: 5vw;
        /* padding-right: 5vw; */
    }
    .navbar-brand.hover-image{
        margin-right: 0;
    }
    .navbar{
        margin-top: 0;
        /* position: relative;
        z-index: 1;
        background: transparent; */
    }
    nav{
        height: 14vh;
    }
    /* .bg{
        position: absolute;
        z-index: -1;
        width: 100%;
        height: 100%;
        opacity: .8;
        backdrop-filter: blur(8px);
        background: #0D0D0D;
    } */
    .sidebar-panel-nav > li{
        list-style-type: none;
        text-align: right;
    }
    .sidebar-panel-nav > li > a{
        color: #FFFFFF;
        text-decoration: none;
        font-size: 24px;
    }
}
</style>