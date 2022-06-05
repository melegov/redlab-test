<template>
    <div class="switch" @click="isOn = !isOn">
        <span :class="{ 'active': isOn }">Дом</span>
        <span :class="{ 'active': !isOn }">Офис</span>
    </div>
</template>

<script setup>
import { ref } from 'vue';

let isOn = ref(true);
</script>

<style>
.switch {
    background-color: white;
    border-radius: 13px;
    line-height: 28px;
    font-weight: 500;
    padding: 0px;
    cursor: pointer;
    border: 1px solid rgb(3 3 3 / 14%);
}

.switch span {
    padding: 5px 12px;
    font-size: 14px;
    user-select: none;
    transition: all .2s .1s;
    border-radius: 15px;
}

.switch .active {
    background-color: var(--vt-c-purple);
    color: white;
}
</style>