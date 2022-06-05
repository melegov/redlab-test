<script setup>
defineProps({
    text: String,
    imgUrl: String,
    title: String,
    delay: String
});
</script>

<template>
<div class="card" 
    v-animate-onscroll.repeat="'slide-up'" 
    :style="{ transitionDelay: delay, backgroundImage: 'url(' + imgUrl + ')' }">
    <p>{{title}}</p>
    <div class="about">
        {{text}}
    </div>
</div>
</template>

<style scoped>
.card {
    background: #F3F6FB;
    border-radius: 8px;
    height: 328px;
    width: 300px;
    position: relative;
    overflow: hidden;

    transition-delay: .1s;
    transition-duration: .25s;
    transition-timing-function: ease-in;
    
    opacity: 0;
    transform: translateY(+100px);
    background-repeat: no-repeat;
    background-position-y: bottom;
    background-position-x: center;

    margin-bottom: 20px;
}

.card .about {
    height: 100%;
    width: 100%;
    opacity: 0;
    z-index: 1;
    background-color: var(--vt-c-purple);
    transition: all .4s;
    font-size: 16px;
    line-height: 20px;
    font-weight: 400;
    padding: 30px;
    color: white;
    position: absolute;
    top: 0;
    left: 0;
}

.card:hover .about {
    opacity: 1;
}

.card p {
    text-align: center;
    margin: 20px;
    font-weight: 500;
    font-size: 24px;
    line-height: 30px;
}

.slide-up {
  transform: translateY(0);
  opacity: 1;
}

@media(min-width: 730px) {
    .card {
        margin: 10px 0;
    }
}

@media(min-width: 950px) {
    .card {
        margin: 10px 20px;
    }
}
</style>