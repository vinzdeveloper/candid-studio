<template>
  <div>
    <section class="home-container">
        <thumb-swiper v-bind:slides="slides"></thumb-swiper>
    </section>
    <section class="portfolio-container">
        <h2>PORTFOLIO</h2>
        <div class="image-flex">
            <image-card v-for="img in portImgs" v-bind:key="img.name"
             v-bind:imageProp="img"></image-card>
        </div>
    </section>
    <section class="story-section">
        <h2><i>"Capturing the moments of today that will wow your heart tomorrow"</i></h2>
    </section>   
  </div>
</template>
<script>
import ThumbSwiper from '../components/carousal/ThumbSwiper'
import ImageCard from '../components/card/ImageCard'
import { portfolioHomeImgs } from './imageUtils';

export default {
    name: 'home',
    components: {
      ThumbSwiper,
      ImageCard
    },
    data: function() {
        return ({ 
            slides: ['slide-1', 'slide-2', 'slide-3', 'slide-4', 'slide-5'],
            portImgs: portfolioHomeImgs,
        })
    },
}
</script>
<style scoped>
    .portfolio-container {
        background-color: #f7f7f7;
        padding: 20px;
        text-align: center;
    }

    .portfolio-container .image-flex {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
    }
    .story-section {
        background-attachment: fixed;
        background-image: url('../assets/images/section2.jpg');
        background-size: cover;
        color: #fff;
        font-size: 28px;
        padding: 500px 0;
        text-align: center;
        
    }
</style>