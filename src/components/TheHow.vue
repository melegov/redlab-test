<script setup>
import { ref, computed, watch } from 'vue';

defineProps({
    fullScreen: Boolean 
});

const howData = [
    {
        title: 'Кухня',
        imgUrl: '/images/how/kitchen.jpg',
        tips: [
            { x: 50, y: 50, text: 'Середина картинки' },
            { x: 20, y: 55, text: 'Чайник' }
        ]
    }, {
        title: 'Комнаты',
        imgUrl: '/images/how/rooms.jpg',
        tips: [
            { x: 30, y: 70, text: 'Стол' }
        ]
    }, {
        title: 'Ванная',
        imgUrl: '/images/how/bath.jpg',
        tips: [
            { x: 13, y: 80, text: 'кран' }
        ]
    }, {
        title: 'Прихожая',
        imgUrl: '/images/how/lobby.jpg',
        tips: [
            { x: 78, y: 45, text: 'Дерево' },
            { x: 25, y: 14, text: 'Зеркало' }
        ]
    }
];

let activeIndex = ref(0);
let activePhoto = computed(() => howData[activeIndex.value]);
let activeTipIndex = ref(-1);
let activeTip = computed(() => activeTipIndex.value === -1 ? null : activePhoto.value.tips[activeTipIndex.value]);

let disableHover = ref(false);

watch(activePhoto, () => {
    disableHover.value = true;
    setTimeout(() => disableHover.value = false, 1000);
})
</script>

<template>
<div class="container header">
    <h2>Как мы убираем</h2>
    <p>
        Клинер приезжает в назначенное время со всем необходимым и сразу приступает 
        к делу. Вам остаётся только оценить результат.
    </p>
</div>
<div class="container how" :class="{ fullScreen }">
    <div class="left-menu" :class="{disableHover}">
        <span>Как мы убираем</span>
        <ul>
            <li v-for="(item, i) in howData" @click="activeTipIndex = -1; activeIndex = i" :class="{'active': item === activePhoto}">
                {{ item.title }}
            </li>
        </ul>
    </div>
    <div class="photos">
        <Transition v-for="(itemTip, i) in activePhoto.tips" name="tip">
            <div class="tip" :style="{ left: itemTip.x + '%', top: itemTip.y + '%' }" :class="{'active': activeTip === itemTip}" @click="activeTipIndex = activeTipIndex === i ? -1 : activeTipIndex = i">
                <div class="text">{{itemTip.text}}</div>
                <span>+</span>
            </div>
        </Transition>

        <Transition v-for="item in howData" name="slide">
            <img :src="item.imgUrl" v-show="item === activePhoto" :class="{'active-photo': item === activePhoto}">
        </Transition>
    </div>
</div>
</template>

<style scoped>
.container {
    max-width: 1092px;
    display: flex;
    margin: 0 auto;
    justify-content: space-around;
    flex-direction: column;
    position: relative;
    overflow: hidden;
}

.container.how {
    border-radius: 7px;
}

/* left menu */
.left-menu {
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    padding: 0 60px 0 0;
    background-color: var(--vt-c-purple);
    color: white;
    z-index: 2;
    transition: transform 1s ease;
    transform: translate(-110%);
    display: flex;
    align-items: center;
}

.left-menu span {
    font-weight: 500;
    font-size: 16px;
    position: absolute;
    left: 53px;
    top: 35px;
}

.how.container.fullScreen .left-menu:not(.disableHover):hover {
    transform: translate(0);
}

.left-menu ul {
    list-style: none;
    margin-left: 15px;
}

.left-menu ul li {
    font-size: calc(44px);
    line-height: 52px;
    font-weight: 400;
    margin-bottom: 22px;
    width: 280px;
    cursor: pointer;
}


.left-menu ul li.active {
    font-style: italic;
}

.left-menu ul li.active::before {
    content: "\2192";
}

/* header of section */
.container.header {
    margin-bottom: 30px;
}

h2 {
    font-weight: 400;
    font-size: 44px;
    line-height: 42px;
    padding-left: 10px;
}

p {
    font-weight: 400;
    font-size: 18px;
    padding-left: 10px;
    padding-right: 10px;
    padding-top: 11px;
    line-height: 18px;
}

/* photos section */
.photos {
    position: relative;
    padding: 0 0 57.58% 0;
    overflow: hidden;
}

.photos .tip {
    position: absolute;
    z-index: 2;
    font-weight: bold;
    font-size: 29px;
    width: 30px;
    text-align: center;
    vertical-align: middle;
    height: 30px;
    line-height: 30px;
    color: white;
    background-color: var(--vt-c-purple);
    border-radius: 50%;
    transition: all .5s ease;
    box-shadow: 0 0 0 10px rgba(0, 0, 0, .3);
    display: none;
    cursor: pointer;
}

.photos .tip span {
    transition: all .5s ease;
}

.photos .tip.active {
    box-shadow: none;
}

.photos .tip .text::before {
    content: '';
    position: absolute;
    display: block;     
    width: 0px;        
    left: 50%;
    bottom: 10px;
    border: 15px solid transparent;
    border-bottom: 0;
    border-top: 15px solid white;
    transform: translate(-50%, calc(100% + 5px));
}

.photos .tip .text {
    background-color: white;
    color: #636C81;
    font-size: 13px;
    position: absolute;
    transition: all .5s ease;
    text-align: center;
    left: 50%;
    transform: translateX(-50%);
    line-height: 16px;
    padding: 5px 10px;
    border-radius: 2px;
    top: -40px;
    white-space: nowrap;
    opacity: 0;
}

.photos .tip.active .text {
    opacity: 1;
}

.photos .tip span {
    display: block;
}

.photos .tip.active span {
    transform: rotate(45deg);
}

.how.container.fullScreen .photos .tip {
    display: block;
}


/* photos tip animation */
.tip-enter-active,
.tip-leave-active {
  transition: all 1s 1s;
}

.tip-enter-from, .tip-leave-to {
    opacity: 0;
    
}

.tip-enter-to, .tip-leave-from {
    opacity: 1;
}

/* fullscreen */
.how.container.fullScreen {
    height: 100vh;
    max-width: 100vw;
    border-radius: 0;
}

.how.container.fullScreen .left-menu {
    transform: translate(-90%);
    z-index: 5;
}

.photos img {
    width: 100%;
    max-width: 100%;
    position: absolute;
}

/* photos slides animation */
.slide-enter-active,
.slide-leave-active {
  transition: all 1s ease;
}

.slide-enter-from {
    transform: translateX(-100%);

}
.slide-leave-to {
    transform: translateX(100%);
}

.slide-enter-to {
    transform: translateX(0);
}

@media (min-width: 450px) {
    .container.header {
        flex-direction: row;
    }

    h2 {
        width: 60%;
    }

    p {
        width: 40%;
        padding-left: 0;
    }
}
</style>