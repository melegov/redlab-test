<script setup>
import { ref, watchEffect } from 'vue';

import TheLogo from "./TheLogo.vue";
import TheSwitch from "./TheSwitch.vue";
import TheMenu from "./TheMenu.vue";
import TheMenuBtn from "./TheMenuBtn.vue";

defineProps({
    isSticky: Boolean
});
let menuIsOpen = ref(false);

watchEffect(() => {
    document.body.style.overflow = menuIsOpen.value ? 'hidden' : ''
});
</script>

<template>
<header :class="{ sticky: isSticky }">
    <div class="container">
        <TheLogo></TheLogo>
        <TheSwitch></TheSwitch>
        <TheMenu :open="menuIsOpen"></TheMenu>
        <div class="right_block">
            <span class="phone"><b>+380 83 028 32 33</b> <small>|</small> <b>24/7</b></span>
            <TheMenuBtn :open="menuIsOpen" @click="menuIsOpen = !menuIsOpen"></TheMenuBtn>
        </div>
    </div>
</header>
</template>

<style scoped>
header {
    line-height: 20px;
    position: absolute;
    padding: 0 10px;
    width: 100vw;
    max-width: 100%;
    height: 70px;
}

header.sticky {
    position: fixed;
    z-index: 4;
    background-color: white;
    box-shadow: 0px 2px 14px rgba(0, 0, 0, 0.07);
}

.container {
    max-width: 1280px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    height: 70px;
}

.right_block {
    flex-grow: 1;
    text-align: right;
    display: flex;
    line-height: 48px;
    vertical-align: middle;
    justify-content: flex-end;
}

.right_block .phone {
    white-space: nowrap;
    flex-grow: 1;
    margin: 0 20px;
    display: none;
    font-size: 12px;
    vertical-align: middle;
}

.right_block .phone small {
    position: relative;
    bottom: 2px;
    font-weight: bold;
    margin: 0 10px;
    font-size: 12px;
}


@media (min-width: 640px) {
    .right_block .phone {
        display: block;
    }
}

@media (min-width: 970px) {
    .right_block {
        flex-grow: 0;
    }

    .right_block .phone {
        font-size: 16px;
    }
}
</style>