<template>
  <div id="Projects">
    <Header :trigger_show="trigger_show"/>
    <div id="Projects_content">
        <h2 id="Projects_title">
            Проекты
        </h2>
        <div id="Projects_list">
            <div id="Projects_nav">
                <b-tabs content-class="mt-4">
                <b-tab title="Все" active>
                    <div class="list_of_projects">
                        <div @click="handleClick(i.id)" tag="button" class="image_list" v-for="i in info" :key="i" >
                          <!-- <div class="bg-hover"></div> -->
                          <img :src="i.main_image" class="image_i"/>
                            <div class="upper-info">
                              <div class="section">{{printTags(i)}}</div>
                              <div class="year">{{i.year}}</div>
                            </div>
                            <div class="name-of-project">{{i.title}}</div>
                        </div>
                    </div>
                </b-tab>
                <b-tab title="Web-разработка">
                  <div class="list_of_projects">
                        <div @click="handleClick(web.id)" class="image_list" v-for="web in WEB" :key="web" >
                          <img :src="web.main_image" class="image_i"/>
                          <div class="upper-info">
                            <div class="section">{{printTags(web)}}</div>
                            <div class="year">{{web.year}}</div>
                          </div>
                          <div class="name-of-project">{{web.title}}</div>
                        </div>
                    </div>
                </b-tab>
                <b-tab title="SMM">
                  <div class="list_of_projects">
                        <div @click="handleClick(smm.id)" class="image_list" v-for="smm in SMM" :key="smm" >
                          <img :src="smm.main_image" class="image_i"/>
                          <div class="upper-info">
                            <div class="section">{{printTags(smm)}}</div>
                            <div class="year">{{smm.year}}</div>
                          </div>
                          <div class="name-of-project">{{smm.title}}</div>
                        </div>
                    </div>
                </b-tab>
                <b-tab title="Брендинг">
                  <div class="list_of_projects">
                        <div @click="handleClick(brand.id)" class="image_list" v-for="brand in BRAND" :key="brand" >
                          <img :src="brand.main_image" class="image_i"/>
                          <div class="upper-info">
                            <div class="section">{{printTags(brand)}}</div>
                            <div class="year">{{brand.year}}</div>
                          </div>
                          <div class="name-of-project">{{brand.title}}</div>
                        </div>
                    </div>
                </b-tab>
                </b-tabs>
            </div>
            <div id="Projects_pictures">

            </div>
        </div>
    </div>
    <Footer/>
  </div>
</template>

<script>

import Header from '../components/HeaderForma.vue'
import Footer from '../components/Footer.vue'

export default {
  name: 'Projects',
  components: {
    Header,
    Footer
  },
  data(){
    return{
      trigger_show: true,
      info: null
    }
  },
  methods: {
    printTags(i){
      var array = []
      for (var j = 0; j < i.tag.length; j++) { array.push(i.tag[j].name); }
      return array.join(', ')
    },
    handleClick(project_id) {
      this.$router.push('project/' + project_id)
    }
  },
  computed:{
    WEB: function () {
      var WEBinfo = []
      for (var j = 0; j < this.info.length; j++)
      {
        for (var z = 0; z < this.info[j].tag.length; z++)
        {
          if (this.info[j].tag[z].name === 'Web-разработка') {
            WEBinfo.push(this.info[j])
          }
        }
      }
      return WEBinfo
    },
    SMM: function () {
      var SMMinfo = []
      for (var j = 0; j < this.info.length; j++)
      {
        for (var z = 0; z < this.info[j].tag.length; z++)
        {
          if (this.info[j].tag[z].name === 'SMM') {
            SMMinfo.push(this.info[j])
          }
        }
      }
      return SMMinfo
    },
    BRAND: function () {
      var BRANDinfo = []
      for (var j = 0; j < this.info.length; j++)
      {
        for (var z = 0; z < this.info[j].tag.length; z++)
        {
          if (this.info[j].tag[z].name === 'Брендинг') {
            BRANDinfo.push(this.info[j])
          }
        }
      }
      return BRANDinfo
    }
  },
  mounted(){
    this.axios
        .get('http://127.0.0.1:8000/api-1/projects/')
        .then(response => (this.info = response.data))
}
}

</script>

<style>
/* Сделать картинку ниже градиента с текстом */
.image_i{
  position: relative;
  z-index: 1;
}
/* Общие стили для всей страницы */
#Projects{
    font-family: 'Montserrat Regular';
    color: #FFFFFF;
    background-image: url(../assets/pictures/Union2.png);
    background-position: center top 409.53px;
    background-repeat: no-repeat;
}
/* Расположение элементов на странице */
#Projects_content{
    height: auto;
    padding-top: 27vh;
    padding-bottom: 25vh;
    margin-left: 9.5vw;
    margin-right: 9.5vw;
}
/* Заголовок проекта */
#Projects_title{
    background: linear-gradient(260.5deg, #4E33B8 0%, #01A99A 99.17%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    color: #0B2349;
    display: table;
    font-weight: 600;
    font-size: 80px;
}
/* Навигация по вкладкам на странице */
#Projects_nav{
    padding-top: 5vh;
    font-size: 20px;
}
/* Список со всеми проектами */
.list_of_projects{
    display: flex;
    padding-top: 0.7vh;
    flex-wrap: wrap; /* переносить блоки */
}
/* Картинка проекта */
.image_list{
  /* background-color: #0D0D0D; */
  width: 32%;
  height: auto;
  margin-top: 2%;
  /* justify-content: space-between; */
  position: relative;
  /* Расположить объекты внутри в колонну */
  display: flex;
  flex-direction: column;
}
.image_list:nth-child(3n - 1){
  margin-left: 2%;
  margin-right: 2%;
}
/* .bg-hover{
  position: absolute;
  width: 100%;
  height: 100%;
  background-image: linear-gradient(to top, #000000, #3b3b3b, #777777, #b9b9b9, #ffffff);
  opacity: 0;
} */
.upper-info, .name-of-project{
  opacity: 0;
}
/* .bg-hover:hover{
  opacity: 0.5;
} */
.image_list > div{
  color: #FFFFFF; 
}
.image_list:before{
  content: '';
  display: block;
  position: absolute;
  height: 0%;
  width: 100%;
  bottom: 0;
  z-index: 5;
  background: linear-gradient(180deg, rgba(13, 13, 13, 0.54) 0%, #0D0D0D 100%);
}
.image_list:hover > div{
  opacity: 1;
  padding: 5%;
}
.image_list:hover:before {
  height: 100%;
}
.image_list:hover{
  cursor: pointer;
}
.upper-info{
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 35%;
  font-size: 20px;
  font-weight: 400;
  z-index: 5;
  position: absolute;
}
.name-of-project{
  /* margin-top: 20%; */
  font-weight: 600;
  height: 65%;
  font-size: 24px;
  z-index: 5;
  position: absolute;
  display: flex;
  bottom: 20%;
  /* align-items: flex-end; */
  bottom: 0px;
  padding-top: 20%;
}
@media screen and (max-width: 800px){
  #Projects_title{
    font-size: 4rem;
  }
  #Projects_nav{
    font-size: 1rem;
  }
  .image_list{
    width: 100%;
    height: 33.3vh;
  }
}
@media screen and (max-width: 425px){
  #Projects_title{
    font-size: 50px;
  }
  #Projects_content{
    padding-top: 20vh;
    margin-left: 5vw;
    margin-right: 5vw;
  }
  Projects_nav{
    font-size: 16px;
  }
  .image_list{
    margin-bottom: 30vh;
  }
  .list_of_projects{
    padding-top: 8vh;
  }
  .image_list > div{
    opacity: 1;
  }
  .upper-info{
    margin-top: 35vh;
  }
  .name-of-project{
    margin-top: 3vh;
  }
  .section{
    color: #5C5C5C;
  }
  #Projects{
    background-image: url(../assets/pictures/Union1-mobile.png);
    background-position: center top 350px;
  }
}
</style>