<template>
    <div class="thumb-carousal">
    <swiper class="swiper gallery-top" :options="swiperOptionTop" ref="swiperTop">
        <swiper-slide v-for="slide in slides" :class="slide" :key="slide"></swiper-slide>
        <div class="swiper-button-next swiper-button-white" slot="button-next"></div>
        <div class="swiper-button-prev swiper-button-white" slot="button-prev"></div>
    </swiper>
    <swiper class="swiper gallery-thumbs" :options="swiperOptionThumbs" ref="swiperThumbs">
        <swiper-slide v-for="slide in slides" :class="slide" :key="slide"></swiper-slide>
    </swiper>
  </div>
</template>
<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'

export default {
    name: 'thumb-swiper',
    components: {
      Swiper,
      SwiperSlide
    },
    props: ['slides'],
    data: function() {
        return ({ 
            swiperOptionTop: {
                loop: true,
                loopedSlides: 5,
                effect: 'fade',
                spaceBetween: 10,
                autoplay: {
                    delay: 2500,
                    disableOnInteraction: false
                },
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev'
                }
            },
            swiperOptionThumbs: {
                loop: true,
                loopedSlides: 5,    
                spaceBetween: 10,
                centeredSlides: true,
                slidesPerView: 'auto',
                touchRatio: 0.2,
                slideToClickedSlide: true
            },
        })
    },
    mounted() {
      this.$nextTick(() => {
        const swiperTop = this.$refs.swiperTop.$swiper
        const swiperThumbs = this.$refs.swiperThumbs.$swiper
        swiperTop.controller.control = swiperThumbs
        swiperThumbs.controller.control = swiperTop
      })
    }
}
</script>
<style scoped>

.thumb-carousal {
    height: 720px;
    background-color: #000;
}

.swiper .swiper-slide {
    background-size: cover;
    background-position: center;
}

.swiper .swiper-slide.slide-1 {
    background-image:url('../../assets/images/home/title1.jpg');
}
.swiper .swiper-slide.slide-2 {
    background-image:url('../../assets/images/home/title2.jpg');
}
.swiper .swiper-slide.slide-3 {
    background-image:url('../../assets/images/home/title3.jpg');
}
.swiper .swiper-slide.slide-4 {
    background-image:url('../../assets/images/home/title4.jpg');
}
.swiper .swiper-slide.slide-5 {
    background-image:url('../../assets/images/home/title5.jpg');
}

.swiper.gallery-top {
    height: 80%;
    width: 100%;
}

.swiper.gallery-thumbs {
    height: 20%;
    box-sizing: border-box;
    padding: 10px 0;
}
.swiper.gallery-thumbs .swiper-slide {
    width: 25%;
    height: 100%;
    opacity: 0.4;
}
.swiper.gallery-thumbs .swiper-slide-active {
    opacity: 0.5;
}
</style>