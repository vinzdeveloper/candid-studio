<template>
    <div>
        <section>
            <image-flip v-bind:image2="image2" v-bind:image1="image1" v-bind:key="image2"></image-flip>
        </section>
        <section class="portfolio-section2">
            <div class="portfolio-container">
                <h2 class="portfolio-title">WEDDING FUNCTION</h2>
                <span class="title-border"/>
                <div class="image-flex">
                    <image-card v-for="img in weddingImgs" v-bind:key="img.name"
                        v-bind:imageProp="img"></image-card>
                </div>
            </div>
            <div class="portfolio-container">
                <h2 class="portfolio-title">BIRTHDAY FUNCTION</h2>
                <span class="title-border"/>
                <div class="image-flex">
                    <image-card v-for="img in bdayImgs" v-bind:key="img.name"
                        v-bind:imageProp="img"></image-card>
                </div>
            </div>
            <div class="portfolio-container">
                <h2 class="portfolio-title">OUTDOOR FUNCTION</h2>
                <span class="title-border"/>
                <div class="image-flex">
                    <image-card v-for="img in outdoorImgs" v-bind:key="img.name"
                        v-bind:imageProp="img"></image-card>
                </div>
            </div>
        </section>
    </div>
</template>
<script>
import ImageFlip from '../components/card/ImageFlip';
import { portfolioTitleImgs, portWedImgs, portbdayImgs, portOutdoowImgs} from './imageUtils';
import ImageCard from '../components/card/ImageCard'

export default {
    name: 'portfolio',
    components: { ImageFlip, ImageCard },
    data: function() {
        return ({ title: 'Portfolio', image1: portfolioTitleImgs[0],
         image2: portfolioTitleImgs[1],
         weddingImgs: portWedImgs,
         bdayImgs: portbdayImgs,
         outdoorImgs: portOutdoowImgs,
         interval: '', })
    },
     created: function() {
        let firstIndex = 1;
        let secondIndex = 2;    
        const toggleImage = () => {
            this.image1 = portfolioTitleImgs[firstIndex];
            this.image2 = portfolioTitleImgs[secondIndex];
            if (secondIndex >= portfolioTitleImgs.length - 1) {
                secondIndex = 0;
            } else {
                secondIndex++;
            }
            if (firstIndex >= portfolioTitleImgs.length - 1) {
                firstIndex = 0;
            } else {
                firstIndex++;
            }
        }

        this.interval = setInterval(toggleImage, 6000);
    }
}
</script>
<style scoped>
    .portfolio-section2 {
        background: #222;
        margin-top: 50px;
    }

    .portfolio-title {
        color: #ffb3b3;
        margin-bottom: 0;
        margin-left: 50px;
    }

    .portfolio-container {
        padding: 30px 20px;
    }

    .portfolio-container .image-flex {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        margin-top: 60px;
    }

    .title-border {
        border-bottom: 2px solid #ffb3b3;
        display: block;
        margin-left: 50px;
        width: 100px;
    }
</style>