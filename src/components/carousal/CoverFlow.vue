<template>
    <div class="section-3d">
        <swiper class="swiper" :options="swiperOption">
            <swiper-slide v-for="image in images" v-bind:key="image" >
                <img class="image-body" v-bind:src="image" alt="coverflow" />
            </swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
    </div>
</template>
<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper';

export default {
    components: { Swiper, SwiperSlide },
    name: 'cover-flow',
    props: [ 'images' ],
    data: function () {
    return {
        swiperOption: {
          effect: 'coverflow',
          grabCursor: true,
          centeredSlides: true,
          slidesPerView: 'auto',
          coverflowEffect: {
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows : true
          },
          pagination: {
            el: '.swiper-pagination'
          }
        }
      }
    },
}
</script>
<style scoped>
    .section-3d {
        width: 100%;
        height: 400px;
        padding-top: 50px;
        padding-bottom: 50px;
    }

    .swiper {
        height: 100%;
        width: 100%;
    }

    .swiper .swiper-slide {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 300px;
      height: 300px;
      text-align: center;
      font-weight: bold;
      background-position: center;
      background-size: cover;
    }

    .image-body {
        width: 300px;
        height: 300px;  
    }
</style>