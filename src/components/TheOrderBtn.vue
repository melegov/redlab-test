<template>
    <div class="order_submit" @mousemove="moveEvent" :style="style">
        <div class="hover_outline"></div>
        <div>Заказать<br/> уборку</div>
    </div>
</template>

<script setup>
    import { ref, computed } from 'vue';

    const state = ref({x: 0, y: 0}),
        style = computed(() => { 
            return { transform: 'translate(' + (state.value.x - 40) + 'px,' + (state.value.y - 40) + 'px) scale(1.5)' };
        });

    function moveEvent({offsetX, offsetY}) {
        state.value = { x : offsetX, y: offsetY };
    }
</script>

<style scoped>
.order_submit {
    cursor: pointer;
    background-color: var(--vt-c-purple);
    text-transform: uppercase;
    transition: all .1s;
    color: white;
    font-size: 14px;
    font-weight: 400;
    text-align: center;
    padding: 20px;
    border-radius: 50%;
    position: fixed;
    left: calc(50% - 60px);
    vertical-align: middle;
    height: 120px;
    width: 120px;
    bottom: 40px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    z-index: 3;
    animation-duration: 2s;
    animation-name: anim;
    animation-iteration-count: infinite;
    animation-direction: alternate;
    transform: rotate(.5rad);
}

.order_submit .hover_outline {
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    border: 1px rgb(100, 100, 100) solid;
    transition: all 1s .1s;
    opacity: 0;
}

.order_submit:hover {
    animation-name: none;
    transform: scale(1.3);
}

.order_submit:hover .hover_outline {
    transform: scale(1.6);
    opacity: .4;
}

@keyframes anim {
  from {
    transform: translateY(+5px) rotate(-.4rad);
  }

  to {
    transform: translateY(-5px) rotate(-.4rad);
  }
}
</style>