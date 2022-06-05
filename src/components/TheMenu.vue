<script setup>
defineProps({
    open: Boolean
});
</script>

<template>
<nav :class="{'open': open}">
    <ul>
        <li><a href="#">После ремонта</a></li>
        <li><a href="#">Генеральная уборка</a></li>
        <li><a href="#">Регулярная уборка</a></li>
        <li><a href="#">Мойка окон</a></li>
    </ul>
</nav>
</template>

<style scoped>
nav {
    flex-grow: 0;
}

nav ul {
    list-style: none;
    justify-content: center;
    padding: 0;
    display: none;
}

nav ul li {
    font-size: 16px;
    padding: 0 16px;
    text-align: center;
}

@media (max-width: 970px) {
    nav.open {
        position: fixed;
        background-color: white;
        display: flex;
        justify-content: space-around;
        align-items: center;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        z-index: 5;
    }
    nav.open ul {
        display: block;
    }

    nav.open ul li {
        font-size: 25px;
        margin: 30px 0;
    }
}

@media (min-width: 970px) {
    nav {
        flex-grow: 1;
    }

    nav ul {
        display: flex;
    }
}
</style>