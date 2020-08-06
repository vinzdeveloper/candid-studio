<template>
    <div v-bind:class="`image-card ${imageProp.classes}`">
        <img v-bind:src="imageProp.name" alt="" class="image"/>
        <div class="card-title" v-show="imageProp.title"><h2>{{imageProp.title}}</h2></div>
    </div>
</template>

<script>
export default {
    name: 'image-card',
    props: { 'imageProp': Object } ,
    data: function() {
        return ({})
    }
}
</script>
<style scoped>
    .image {
        max-width: 375px;
    }

    .image-card {
        margin-right: 50px;
    }

    .image-card.flipright {
        animation: flipright 3s;
        transform: rotateY(0deg);
    }

     .image-card.flipup {
        animation: flipup 3s;
        transform: rotateX(0deg);
    }

    .image-card.moveup {
        animation: moveup 3s;
        transform: translateY(0);
    }

    .image-card.movedown {
        animation: movedown 3s;
        transform: translateY(0);
    }

    .card-title {
        background-color: white;
        padding: 5px;
        max-width: 365px;
    }

    @keyframes flipright {
        from {
            opacity: 0;
            transform: rotateY(180deg);
        }
        to {
            opacity: 1;
            transform: rotateY(0deg);
        }
    }
    @keyframes flipup {
        from {
            opacity: 0;
            transform: rotateX(180deg);
        }
        to {
            opacity: 1;
            transform: rotateX(0deg);
        }
    }

     @keyframes moveup {
        from {
            opacity: 0;
            transform: translateY(200px);
        }
        to {
            opacity: 1;
            transform: rotateY(0);
        }
    }

    @keyframes movedown {
        from {
            opacity: 0;
            transform: translateY(-200px);
        }
        to {
            opacity: 1;
            transform: rotateY(0);
        }
    }
</style>