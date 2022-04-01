<template>
    <div id="list">
       <div id="list_title"><h2>Что мы делаем</h2></div>
       <div id="list_points">
           <div class="point">
               <div class="point_title SMM"><h4>SMM</h4></div>
               <div class="point_description">
                   <div class="point_text">Администрируем аккаунты.<br />
                        Пишем тексты для постов.
                    </div>
                   <div class="point_text">Создаем уникальный дизайн
                        социальных сетей.
                    </div>
                   <div class="point_text">Проводим рекламную
                        кампанию для повышения 
                        узнаваемости бренда.</div>
               </div>
           </div>
           <div class="point">
               <div class="point_title branding"><h4>Брендинг</h4></div>
               <div class="point_description">
                   <div class="point_text">Разработаем логотип.
                    </div>
                   <div class="point_text">Придумаем мерч, который
                        не стыдно показывать.
                    </div>
                   <div class="point_text">Сделаем дизайн
                        необходимых элементов 
                        фирменного стиля.
                    </div>
               </div>
           </div>
           <div class="point">
               <div class="point_title web"><h4>Web-разработка</h4></div>
               <div class="point_description">
                   <div class="point_text">Разработаем структуру
                        и дизайн сайта.
                    </div>
                   <div class="point_text">Верстаем и подключим сайт 
                       к необходимым сервисам.
                    </div>
               </div>
           </div>
       </div>

    </div> 
</template>

<script>
export default {
    name: 'List_of_services',
}
</script>

<style scoped>
#list{
    margin-left: 9.5vw;
    margin-right: 9.5vw;
    margin-bottom: 15vh;
}
h2{
    font-size: 80px;
    font-weight: 600;
    background: linear-gradient(260.5deg, #4E33B8 0%, #01A99A 99.17%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}
#list_title{
    margin-bottom: 7vh;
}
#list_points{
    display: flex;
    justify-content: space-between;
}
.point{
    width: 33.3%;
    margin-top: 3vh;
}
h4{
    font-size: 30px;
    font-weight: 700;
    line-height: 36px;
}
.point_title{
    text-align: center;
    padding-bottom: 0.8vh;
}
.SMM, .branding, .web{
    background-position: 45% top;
    background-repeat: no-repeat;
}
.SMM{
    background-image: url(../assets/pictures/SMM.png);
}
.branding{
    background-image: url(../assets/pictures/branding.png);
    background-position: 37% top;
}
.web{
    background-image: url(../assets/pictures/web.png);
    background-position: 19% top;
}
.point_text{
    font-size: 24px;
    font-weight: 400;
    margin-top: 3vh;
    margin-right: 1vw;
}
@media (max-width: 900px){
    #list_points{
        flex-direction: column;
    }
    .point{
        width: 100%;
    }
}
@media screen and (max-width: 425px){
    h2{
        font-size: 50px;
    }
    #list{
        margin-left: 5vw;
        margin-right: 5vw;
        margin-bottom: 10vh;
    }
    h4{
        text-align: start;
        font-size: 24px;
    }
    .SMM, .branding, .web{
        background-position: 0% top;
    }
    .point_text{
        font-size: 20px;
        width: 70%;
    }
}
</style>