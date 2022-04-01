<template>
  <div id="FAQ">
      <Header :trigger_show="trigger_show"/>
      <div id="FAQ_content">
          <h2 id="FAQ_title">
            FAQ
          </h2>
          <div id="FAQ_list">
              <div class="accordion" role="tablist">
                  
                <div v-for="i in info" :key="i" class="card-design">
                    <b-card no-body class="mb-1">
                    <b-card-header header-tag="header" class="p-1" role="tab">
                        <b-card-text>
                            {{ i.question }}
                            <b-button class="pluses"
                            v-on:click="toggleDropdown(i.id)" 
                            block v-b-toggle="`accordion-${i.id}`" variant="info"
                            v-bind:class="{'turn-arrow': data[i.id]}">
                                <div>
                                    <img src="../assets/pictures/plus.png" width="auto" height="45" alt="">
                                </div>
                            </b-button>
                        </b-card-text>
                    </b-card-header>
                    <b-collapse :id="`accordion-${i.id}`" accordion="my-accordion" role="tabpanel">
                    <b-card-body>
                    <b-card-text>{{ i.answer }}</b-card-text>
                    </b-card-body>
                    </b-collapse>
                    </b-card>
                </div>
                </div>
          </div>
      </div>
      <Footer />
  </div>
</template>

<script>

import Header from '../components/HeaderForma.vue'
import Footer from '../components/Footer.vue'

export default {
  name: 'FAQ',
  components: {
      Header,
      Footer
  },
  data(){
    return{
      trigger_show: true,
      info: null,
      data: [false, false, false, false, false, false, false, false, false, false]
    }
  },
  methods: {
      toggleDropdown(i){
          if (this.data[i] == true) {
              this.data = [false, false, false, false, false, false, false, false, false, false]
          }
          else {
              this.data = [false, false, false, false, false, false, false, false, false, false]
                this.data[i] = !this.data[i]
          }
      }
  },
  mounted(){
    this.axios
        .get('http://127.0.0.1:8000/api-1/questions/')
        .then(response => (this.info = response.data))
}
}
</script>

<style>
#FAQ{
    font-family: 'Montserrat Regular';
    color: #FFFFFF;
    background-image: url(../assets/pictures/Union1.png);
    background-position: right 424.14px;
    background-repeat: no-repeat;
}
#FAQ_content{
    height: auto;
    padding-top: 27vh;
    margin-left: 9.5vw;
    margin-right: 9.5vw;
}
#FAQ_title{
    text-transform: uppercase;
    background: linear-gradient(260.5deg, #4E33B8 0%, #01A99A 99.17%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    color: #0B2349;
    display: table;
    font-weight: 600;
    font-size: 80px;
}
#FAQ_list{
    width: 75%;
    height: auto;
    margin-bottom: 30vh;
    /* height: 80%; */
}
.card.mb-1, button.btn, button.btn:hover, button.btn:active, button.btn:optional{
    color: #FFFFFF;
    border: none;
    background-color: transparent;
    -webkit-box-shadow: none;
    box-shadow: none;
    text-align: start;
}
.card-design{
    border-bottom: 2px solid #FFFFFF;
}
button.btn{
    cursor: pointer;
    transition: transform 0.4s ease;
}
/* button.btn:hover{
    transform: rotate(-45deg);
} */
.turn-arrow {
-moz-transform: rotate(-45deg);
-ms-transform: rotate(-45deg);
-webkit-transform: rotate(-45deg);
transform: rotate(-45deg);
}
button.btn{
    width: auto;
    position: absolute;
    top: 3vh;
    right: 0px;
    padding: 0px;
}
.accordion{
    height: 100%;
}
.card-header{
    font-weight: 500;
    font-size: 30px;
    height: 24vh;
    display: flex;
    align-items: center
}
.card-body{
    font-weight: 400;
    font-size: 24px;
}
div.card-body{
    padding-left: 4px;
    padding-top: 0px;
    padding-bottom: 4vh;
}
header.card-header{
    height: 24vh;
}
@font-face {
    font-family: 'Montserrat Regular';
    src: url('~@/assets/fonts/Montserrat-Regular.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;
}
@media screen and (max-width: 1200px){
    .card-header{
        font-size: 24px;
    }
    .card-body{
        font-size: 18px;
    }
    #FAQ_list{
        width: 100%;
    }
}
@media screen and (max-width: 425px){
    #FAQ_content{
        height: 170vh;
        padding-top: 20vh;
        margin-left: 5vw;
        margin-right: 5vw;
    }
    #FAQ_title{
        font-size: 50px;
        padding-bottom: 7vh;
    }
    #FAQ{
        background-image: url(../assets/pictures/Union2-mobile.png);
        background-position: right 580px;
    }

}
</style>