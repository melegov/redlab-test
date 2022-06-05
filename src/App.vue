<script setup>
import { onUnmounted, reactive } from 'vue';

import TheHeader from './components/TheHeader.vue'
import TheHero from './components/TheHero.vue';
import TheBenefits from './components/Benefits/TheBenefits.vue';
import TheOrderBtn from './components/TheOrderBtn.vue';
import TheHow from './components/TheHow.vue';

const state = reactive({
	isSticky: false,
	isScrollBottom: false
});

window.addEventListener('scroll', handleScroll);

onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll);
});

function handleScroll(e) {
    window.onscroll = function () { myFunction() }

	const header = document.querySelector('header');
    const sticky = header.offsetTop;
	const howSection = document.querySelector('.container.how');

    function myFunction () {
		state.isSticky = window.pageYOffset > sticky;

		if (state.isScrollBottom) { state.isScrollBottom = false; }
		if (!state.isScrollBottom) {
			state.isScrollBottom = howSection.offsetTop + howSection.clientHeight <= window.pageYOffset + document.documentElement.clientHeight + 90;
			if (state.isScrollBottom) {
				setTimeout(() => {
					state.isScrollBottom = true;
					window.scrollTo(0, document.body.scrollHeight);
				}, 0);
			}
		}
    }
}
</script>

<template>
	<TheHeader :is-sticky="state.isSticky" v-show="!state.isScrollBottom"></TheHeader>
	<TheHero></TheHero>
	<Transition>
		<TheOrderBtn v-show="!state.isScrollBottom"></TheOrderBtn>
	</Transition>
	<TheBenefits></TheBenefits>
	<TheHow :fullScreen="state.isScrollBottom"></TheHow>
</template>

<style>
@import './assets/base.css';

#app {
	margin: 0;
	padding: 0;

	font-weight: normal;
}

a {
	text-decoration: none;
	color: #040404;
	transition: 0.4s;
}
/* order btn fade */
.v-enter-active,
.v-leave-active {
  transition: opacity 1s ease !important;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}

@media (hover: hover) {
	a:hover {
		background-color: var(--vt-c-purple);
		color: white;
	}
}
</style>
