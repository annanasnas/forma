<template>
<div id="Project_page">
  <Header :trigger_show="trigger_show"/>
  <div id="Project_page_content">
      <div id="Project_way">
          <div class="way">
            <div class="color_grey">Проекты</div>
            <div class="color_grey slash">/</div>
          </div>
          <div class="way">
            <div class="color_grey">{{showTags()}}</div>
            <div class="color_grey slash">/</div>
          </div>
          <div class="color_white way">{{info.title}}</div>
      </div>
      <img id="project_image" :src="SearchImg()">
      <div id="project_description">{{info.description}}
      </div>

      <div class="project_carousel">
          <b-carousel
            id="carousel-fade"
            style="text-shadow: 0px 0px 2px #000"
            fade
            controls
            >
            <b-carousel-slide v-for="i in images" :key="i" :img-src="i.image" :caption="i.definition">
            </b-carousel-slide>
        </b-carousel>
      </div>
            <!-- <div class="mt-4" v-for="i1 in images" :key="i1">
                <div id="slide_description">{{ i1.definition }}</div>
            </div> -->
      <div id="more_projects">
          <div id="more_projects_title">
              Больше проектов: 
          </div>
          <div id="more_projects_list">
              <div class="more_projects_list_element">
                  <div class="upper-info_1">
                    <div class="section_1">web-разработка, SMM</div>
                    <div class="year_1">2018</div>
                   </div>
                   <div class="name-of-project_1">Школа программирования для детей Anti.School</div>
              </div>
              <div class="more_projects_list_element"></div>
              <div class="more_projects_list_element"></div>
          </div>
      </div>
      </div>
  <Footer/>
  </div>
</template>


<script>

import Header from '../components/HeaderForma.vue'
import Footer from '../components/Footer.vue'
// import { mapGetters } from 'vuex';

export default {
  name: 'Project',
  components: {
    Header,
    Footer
  },
  data(){
    return{
      trigger_show: true,
      info: null,
      main_im: null,
      images: null
    }
  },
  methods: {
      showTags(){
          var tags = ""
          for (var i = 0; i < this.info.tag.length; i++) {
              tags += String(this.info.tag[i].name) + ", "
          }
        return tags.substr(0, tags.length-2)
      },
      SearchImg() {
          for (var i = 0; i < this.main_im.length; i++) {
              if (this.main_im[i].id == this.info.id) {
                  return this.main_im[i].main_image
              }
          }
      }
  },
    mounted(){
        this.axios
            .get('http://127.0.0.1:8000/api-1/projects/' + this.$route.params.project_id + '/')
            .then(response => {
                this.info = response.data
            })
        this.axios
            .get('http://127.0.0.1:8000/api-1/projects/')
            .then(response => {
                this.main_im = response.data
            })
        this.axios
            .get('http://127.0.0.1:8000/api-1/projects/' + this.$route.params.project_id + '/images/')
            .then(response => {
                this.images = response.data
            })
        }
}

</script>

<style>
.way{
    display: flex;
}
#Project_page{
    font-family: 'Montserrat Regular';
    color: #FFFFFF;
    background-image: url(../assets/pictures/Union3.png);
    background-position: right top 1440.63px;
    background-repeat: no-repeat;
}
#Project_page_content{
    height: auto;
    padding-top: 27vh;
    padding-bottom: 30vh;
    margin-left: 9.5vw;
    margin-right: 9.5vw;
}
#Project_way{
    display: flex;
    padding-top: 0.85%;
    padding-bottom: 1.9%;
}
.color_grey{
    color: #5C5C5C;
    font-size: 20px;
    font-weight: 400;
}
.color_white{
    color: #FCFCFC;
    font-size: 20px;
    font-weight: 400;
}
.slash{
    margin-right: 0.8rem;
    margin-left: 0.8rem;
}
#project_image{
    height: 71vh;
    width: 100%;
}
/* Карусель проекта */
.project_carousel > .carousel-fade > .carousel-inner{
    width: 72%;
    margin-left: 14%;
    margin-right: 14%;
}
.project_carousel > .carousel-fade > .carousel-inner > .carousel-item.active{
    /* overflow: visible; */
    /* position: relative; */
}
#project_description{
    width: 75%;
    text-align: left;
    font-size: 24px;
    font-weight: 400;
    margin-top: 8vh;
    margin-bottom: 16vh;
}
#more_projects_title{
    margin-top: 20vh;
    margin-bottom: 3vh;
    background: linear-gradient(260.5deg, #4E33B8 0%, #01A99A 99.17%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    color: #0B2349;
    display: table;
    font-weight: 700;
    font-size: 60px;
}
.more_projects_list_element{
    width: 32%;
    height: 30vh;
    margin-top: 2%;
    background-color: #FFFFFF;
}
#more_projects_list{
    width: 81vw;
    display: flex;
    padding-top: 0.7vh;
    justify-content: space-between;
    flex-wrap: wrap;
}
.carousel-control-prev-icon,
.carousel-control-next-icon {
  height: 100px !important;
  width: 100px !important;
}
@media screen and (max-width: 900px){
    .more_projects_list_element, #project_description{
        width: 100%;
    }
}
@media screen and (max-width: 425px){
    #Project_way{
        flex-direction: column;
    }
    .way{
        padding-bottom: 2.5vh;
    }
    .color_grey, .color_white{
        font-size: 16px;
    }
    #Project_page_content{
        height: auto;
        padding-top: 17vh;
        padding-bottom: 20vh;
        margin-left: 5vw;
        margin-right: 5vw;
    }
    #project_image{
        height: 20vh;
    }
    #project_description{
        font-size: 20px;
        margin-bottom: 0;
        margin-bottom: 8vh;
    }
    #slide_description{
        font-size: 16px;
    }
    #more_projects_title{
        font-size: 50px;
    }
    #more_projects_list{
        width: 90vw;
    }
    .more_projects_list_element{
      margin-bottom: 30vh;
    }
    .section_1{
        color: #5C5C5C;
    }
    .upper-info_1{
        margin-top: 35vh;
        display: flex;
        direction: row;
        justify-content: space-between;
    }
    .upper-info_1 > div{
        font-size: 20px;
    }
    .name-of-project_1{
        margin-top: 3vh;
        font-size: 24px;
    }
}
</style>