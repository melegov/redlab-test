<script setup>
import TheBenefitsCard from "./TheBenefitsCard.vue";

const cardData = [
    {
        title: 'Тщательно отобранный персонал',
        text: 'Не нужно тратить время, силы и ресурсы на размещение вакансий, проведение собеседований, проверку кандидатов на должность уборщицы. За счет больших объемов мы можем сделать это эффективнее.',
        img: '/images/benefits/1.png',
        delay: '.1s'
    },
    {
        title: 'Качественная эко-химия',
        text: 'Не нужно тратить время, силы и ресурсы на размещение вакансий, проведение собеседований, проверку кандидатов на должность уборщицы. За счет больших объемов мы можем сделать это эффективнее.',
        img: '/images/benefits/2.png',
        delay: '.15s'
    },
    {
        title: 'Контролируем качество',
        text: 'Не нужно тратить время, силы и ресурсы на размещение вакансий, проведение собеседований, проверку кандидатов на должность уборщицы. За счет больших объемов мы можем сделать это эффективнее.',
        img: '/images/benefits/3.png',
        delay: '.2s'
    },
    {
        title: 'Работаем круглосуточно',
        text: 'Не нужно тратить время, силы и ресурсы на размещение вакансий, проведение собеседований, проверку кандидатов на должность уборщицы. За счет больших объемов мы можем сделать это эффективнее.',
        img: '/images/benefits/4.png',
        delay: '.25s'
    }
];
</script>

<template>
<div class="container">
    <div class="benefits">
        <TheBenefitsCard 
            v-for="cardItem in cardData"
            :text="cardItem.text" 
            :img-url="cardItem.img"
            :title="cardItem.title"
            :delay="cardItem.delay">
        </TheBenefitsCard>
    </div>
</div>
</template>

<style scoped>
.benefits {
    padding: 70px 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    flex-direction: column;
    align-items: center;
}

.container {
	max-width: 1280px;
	margin: 0 auto;
}

@media (min-width: 730px) {
    .benefits {
        padding: 70px 20px;
        flex-direction: row;
    }
}

@media (min-width: 1050px) {
    .benefits {
        flex-wrap: nowrap;
    }
}
</style>