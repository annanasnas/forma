<template>
    <div id='Forma-carousel'>
        <b-container id="a123">
            <b-carousel id="bb"
            indicators
            v-model="slide"
            :interval="5000"
            @sliding-start="onSlideStart"
            @sliding-end="onSlideEnd"
            >
            <b-carousel-slide class="main_carousel_slide" v-for="i in info" :key="i" :img-src="i.image">
            </b-carousel-slide>
            </b-carousel>
        </b-container>

        <div id="watchAllProjects">
            <router-link to="/projects">
                <div id="watchAllProjects_text">смотреть все проекты</div> 
                <div>
                    <img src="../assets/pictures/direction.png">
                </div>
            </router-link>
        </div>
    </div> 
</template>

<script>
export default {
    name: 'Carousel',
    data(){
     return {
        info : null,
        sliding: null
     }
    },
    mounted(){
    this.axios
        .get('http://127.0.0.1:8000/api-1/mainpage/')
        .then(response => (this.info = response.data))
    },
    methods: {
      onSlideStart() {
        this.sliding = true
      },
      onSlideEnd() {
        this.sliding = false
      }
    }
}
</script>

<style scoped>
/* .main_carousel_slide{
    margin-bottom: 0%;
} */
/* #bb{
    height: 66vh;
} */
#Forma-carousel{
    margin-left: 9.5vw;
    margin-right: 9.5vw;
    margin-bottom: 15vh;
}
/* #carousel_main{
    width: 100%;
    margin: 0;
} */
/* #watchAllProjects_text{
    padding-right: 2%;
} */
#watchAllProjects > a{
    text-decoration: none;
    color: #FCFCFC;
    font-size: 1.875rem;
    display: flex;
    /* display: inline-block; */
    /* vertical-align: top; */
    /* width: max-content; */
}
#watchAllProjects{
    display: flex;
    justify-content: center;
    text-align: justify;
    /* align-items: center; */
    margin-top: 7%;
}
#watchAllProjects_text{
    margin-right: 2%;
    white-space: nowrap;
}
/* @media screen and (max-width: 375px){
    #bb{
    height: 42vh;
}
}
@media screen and (max-width: 320px){
    #bb{
    height: 38vh;
}
} */

@media screen and (max-width: 425px){
    #Forma-carousel{
        margin-left: 2vw;
        margin-right: 2vw;
        margin-bottom: 10vh;
    }
    #watchAllProjects > a{
        font-size: 24px;
    }
    /* #bb{
        height: 38vh;
    } */
}
</style>