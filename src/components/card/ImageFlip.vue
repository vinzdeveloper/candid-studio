<template>
    <div class="flip-card">
        <div class="img-first-half" id="img-first-half">
            <img class="image-body" v-bind:src="img1" alt="flipper" />
        </div>
        <div class="img-second-half" id="img-second-half">
            <img class="image-body" v-bind:src="img2" alt="flipper" />
        </div>
         <div class="container" id="container">
            <div class="flip-card-front" >
                <img v-bind:src="img1" alt="flipper" class="image-body">
            </div>
            <div class="flip-card-front2" id="flip-card-front2" >
                <img v-bind:src="img2" alt="flipper" class="image-body">
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'image-flip',
    props: [ "image2", "image1"],
    data: function() {
        return ({ img1: this.image1, img2: this.image2 })
    },
    created: function() {
        const toggleImage1 = () => {
            const element = document.getElementById('img-first-half');
            
            const element2 = document.getElementById('img-second-half');
            if (element) {
              element.classList.add("minzindex");
            }
            if (element2) {
                element2.classList.add("maxzindex");
            }
        }

        setTimeout(toggleImage1, 1500);
    }
}
</script>

<style scoped>

@keyframes flipside {
	from {
        transform: rotateY(360deg);
    }
    
    to {
        transform: rotateY(180deg);        
    }
}

@keyframes flipside180 {
	from {
        transform: rotateY(180deg);
    }
    
    to {
        transform: rotateY(0deg);        
    }
}

.flip-card {
    perspective:2500px;
    height: 750px;
    width: 100vw;
}

.container {
    position: absolute;
    width: 100vw;
    height: inherit;
    transition: transform 0.6s;
    transform-style: preserve-3d;
    z-index: 5;
}

.img-first-half {
    position: absolute;
    width: 50vw;
    height: 100%;
    overflow: hidden;
    z-index: 10;
}

.img-first-half .image-body {
    object-position: 0;
    width: 100vw;
    height: 100%;
}

.img-second-half {
    position: absolute;
    width: 50vw;
    height: 100%;
    margin-left: 50vw;
    overflow: hidden;
}

.img-second-half .image-body {
    object-position: -50vw;
    width: 100vw;
    height: 100%;
    
}

.flip-card-front {
	position: absolute;
    animation: flipside 5s;
    backface-visibility: hidden;
    height: inherit;
    z-index: 0;
    width: 100%;
    object-fit: cover;
    
}

.flip-card-front2 {
	position: absolute;
    animation: flipside180 5s;
    backface-visibility: hidden;
    height: inherit;
    width: 100%;
    object-fit: cover;
    z-index: 10;
    
}

.image-body {
    height: inherit;
    width: 100%;
}


.minzindex {
	z-index: 0;
}

.averagezindex {
    z-index: 5;
}

.maxzindex {
    z-index: 20;
}

</style>