<template>
  <div id="container_form">
    <div id="text_left_form">
      <h2 id="text_left_title">Форма.RU</h2>
      <div id="text_left_subtitle">веб-студия</div>
      <div id="text_left_list">
        <ul>
          <li> Обсуждаем проект в любое удобное для вас время.
            <div id="app">
              {{ info }}
            </div>
          </li>
          <li> Объясняем и показываем, из чего складывается стоимость работы.</li>
          <li> Согласовываем каждый этап работы, чтобы вы остались довольны результатом.</li>
        </ul>
      </div>
    </div>
    <div id="form_Forma">
      <form
        id="form_Forma_content"
        v-on:submit.prevent="submitForm"
        >
        <div id="form_Forma_title" v-bind:class="{ marginChange: isActive }">
          <div class="start_text" v-bind:class="{ sizeChange: isActive }">{{submitFormFirst}}</div> 
          <div class="form_text" v-bind:class="{ sizeChange: isActive }">{{submitFormSecond}}</div>
        </div>
        <div id="imageChange" v-bind:class="{ imageVisible: notActive, marginChange: isActive }">
            <img src="../assets/pictures/smile.png" width="200" alt="" style="margin-bottom: 25.5%;">
            </div>
        <div class="form-group" v-bind:class="{ active2: isActive }">
          <input
          type="text" 
          class="form-control" 
          id="formGroupExampleInput" 
          placeholder="Имя"
          v-model="form.name"
          v-bind:class="{ red: isRed1 }">
        </div>
        <div class="form-group" v-bind:class="{ active2: isActive }">
          <input 
          type="text" 
          class="form-control" 
          id="exampleInputEmail" 
          aria-describedby="emailHelp" 
          placeholder="Электронная почта"
          v-model="form.email"
          v-bind:class="{ red: isRed2 }">
        </div>
        <div class="form-group" v-bind:class="{ active2: isActive }">
          <input 
          type="text" 
          class="form-control" 
          id="formGroupExampleInput1" 
          placeholder="Телефон"
          v-model="form.phone_number">
          <small class="form-text text-muted"><div class="small_text">Заполните поле, если вам удобнее,</div> <div class="small_text">чтобы мы вам позвонили.</div></small>
        </div>
        <div class="form_button d-flex justify-content-center">
          <button type="submit" v-on:click="changeActive" v-bind:class="{ active2: isActive }" class='navbar-toggler Forma_button' >Отправить заявку</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'Form',
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
      isRed1: false,
      isRed2: false
    }
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
        this.isRed1 = true
      }
      if(this.form.email === '') {
        this.isRed2 = true
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
        this.isRed1 = false
        this.isRed2 = false
      }
    }
}
}
</script>

<style scoped>
.red{
  border-color: red !important;
}
.active2{
  display: none;
}
.sizeChange{
  font-size: 30px;
  text-align: start;
}
.marginChange{
  margin-top: 7%;
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
#container_form{
  display: flex;
  margin-top: 25vh;
  margin-bottom: 18vh;
  height: auto;
  justify-content: space-between;
}
#text_left_form, #form_Forma{
  display: flex;
  width: 50vw;
}
#form_Forma{
  justify-content: flex-start;
  padding-right: 9.5vw;
  padding-left: 7vw;
}
#text_left_form{
  /* width: 33.5vw; */
  display: flex;
  flex-direction: column;
  padding-left: 9.5vw;
}
#form_Forma_content{
  background: #0D0D0D;
  width: 100%;
  border: 1px solid transparent;
  border-color: #FFFFFF;
  padding: 5%;
  padding-top: 0.5%;
}
#form_Forma_title{
  font-size: 3.75rem;
  font-weight: 500;
  text-align: end;
  padding-bottom: 4%;
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
  border-bottom: 2px solid #FFFFFF;
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
.form_button{
  margin-top: 8%;
}
#text_left_title{
  font-size: 5rem;
  font-weight: 800;
}
/* How to increase the weight of the title???? */
#text_left_subtitle{
  font-size: 	1.875rem;
  font-weight: 500;
  margin-bottom: 7vh;
}
#text_left_list{
  width: 33.5vw;
  font-size: 1.5rem;
  font-weight: 400;
}
li{
  margin-bottom: 5vh;
}
ul{
  padding-left: 4.5%;
}
#formGroupExampleInput, #exampleInputEmail, #formGroupExampleInput1{
    color: #5C5C5C;
  }
@media screen and (max-width: 1100px){
  #container_form{
    flex-direction: column;
  }
  #text_left_list{
    width: 81vw;
  }
  #text_left_form{
    margin-bottom: 10vh;
  }
  #form_Forma, #text_left_form{
    width: 81vw;
    padding: 0;
    margin-left: 9.5vw;
    margin-right: 9.5vw;
  }
}
/* @media screen and (max-width: 450px){
  #text_left_title{
    font-size: 3.5rem;
  }
}
@media screen and (max-width: 500px){
  #text_left_title{
    font-size: 4rem;
  }
} */
@media screen and (max-width: 425px){
  #container_form{
    flex-direction: column;
  }
  #text_left_list{
    width: 90vw;
  }
  #text_left_form{
    margin-bottom: 10vh;
  }
  #form_Forma, #text_left_form{
    width: 90vw;
    padding: 0;
    margin-left: 5vw;
    margin-right: 5vw;
  }
  #text_left_title{
    font-size: 50px;
  }
  #text_left_subtitle{
    font-size: 30px;
  }
  #text_left_list{
    font-size: 20px;
    width: 65vw;
  }
  .form-text, .form_text, .start_text, #formGroupExampleInput, #exampleInputEmail, #formGroupExampleInput1{
    text-align: start;
  }
  .form_text, .start_text{
    font-size: 50px;
  }
  #formGroupExampleInput, #exampleInputEmail, #formGroupExampleInput1{
    font-size: 20px;
  }
  small_text{
    font-size: 16px;
  }
  .sizeChange{
  font-size: 24px;
  }
}
</style>