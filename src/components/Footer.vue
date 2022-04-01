<template>
    <div id="footerForm">
    <div class="d-flex">
            <div class="p-2 large_text"><h3>Напишите нам</h3></div>
            <div class="ml-auto p-2">
                <a id="symbol-1" href="#">
                    <img src="../assets/pictures/behance-logo.png" alt="">
                </a>
            </div>
        </div>
        <div class="d-flex">
            <a :href="email2" class="p-2 medium_text email">{{ info[0].email }}</a>
        </div>
        <div class="d-flex">
            <a :href="tel2" class="p-2 medium_text email">{{ info[0].phone_number }}</a>
        </div>
        <div @click="toPage()" id="symbol-2" style="cursor: pointer;">
            <img src="../assets/pictures/behance-logo.png" width="50" height="50" alt="">
        </div>
        <div class="d-flex">
            <div class="p-2 small_text">© 2020 Forma Creative Agency</div>
        </div>
    </div> 
</template>

<script>
export default {
    name: 'Footer',
    data(){
     return {
      info : null,
      email2: "",
      tel2: ""
     }
    },
    methods: {
        toPage(){
            window.location.href = 'https://www.behance.net/formadigitalagency'
        }
    },
    mounted(){
    this.axios
    .get('http://127.0.0.1:8000/api-1/company/')
    .then(response => (
        this.info = response.data
    )
    )
    this.axios
    .get('http://127.0.0.1:8000/api-1/company/')
    .then(response => (
        this.email2 = "mailto:" + response.data[0].email,
        this.tel2 = "tel:" + response.data[0].phone_number
    )
    )
}
}
</script>

<style scoped>
#symbol-2{
    visibility: hidden;
}
#symbol-1 > img{
    height: 50px;
    width: auto;
}
.medium_text{
    font-size: 24px;
}
.small_text{
    margin-top: 3vh; 
    font-size: 20px;
}
.large_text > h3{
    font-weight: 500; 
    font-size: 30px;
}
#footerForm{
    border-top: 2px solid #FFFFFF;
    background: #0D0D0D; 
    padding-left: 9.5vw;
    padding-right: 9.5vw;
    padding-top: 4vh;
    padding-bottom: 4vh;
}
@media screen and (max-width: 425px){
    #footerForm{
        padding: 0;
        padding-left: 3vw;
        padding-right: 5vw; 
        padding-top: 5vh;
        padding-bottom: 2vh;
    }
    .medium_text{
        font-size: 20px;
    }
    .small_text{
        font-size: 16px;
    }
    .large_text{
        font-size: 24px;
    }
    #symbol-2{
        visibility: visible;
        margin-left: 2.7vw;
    }
    #symbol-2 > img{
        height: 30px;
        width: auto;
        margin-top: 3vh;
    }
    #symbol-1{
        visibility: hidden;
    }
}
</style>