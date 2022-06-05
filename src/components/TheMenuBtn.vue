<script setup>
const props = defineProps({
    open: Boolean
});
</script>

<template>
<div class="button" :class="{'-menu-open': open }">
    <svg width="42px" height="42px" viewBox="0 0 42 42" version="1.1" xmlns="http://www.w3.org/2000/svg">
        <g>
            <line x1="0" y1="17" x2="42" y2="17" stroke-width="1" />
            <line x1="0" y1="31" x2="42" y2="31" stroke-width="1" />
        </g>
        <g>
            <line x1="0" y1="21" x2="42" y2="21" stroke-width="1" />
            <line x1="0" y1="21" x2="42" y2="21" stroke-width="1" />
        </g>
    </svg>
</div>
</template>

<style scoped>
.button {
  box-sizing: border-box;
  height: 50px;
  cursor: pointer;
  z-index: 6;
  margin: 0 10px;
}
.button svg {
  stroke: #040404;
  transition: 0.2s;
}
.button svg g:first-child {
  opacity: 1;
  transition: opacity 0s 0.2s;
}
.button svg g:first-child line {
  transition: transform 0.2s 0.2s;
  transform: translateY(0px);
}
.button svg g:last-child {
  opacity: 0;
  transition: opacity 0s 0.2s;
}
.button svg g:last-child line {
  transition: transform 0.2s;
  transform: rotate(0deg);
  transform-origin: center;
}
.button.-menu-open svg {
  stroke: var(--vt-c-purple);
}
.button.-menu-open svg g:first-child {
  opacity: 0;
}
.button.-menu-open svg g:first-child line {
  transition: transform 0.2s;
}
.button.-menu-open svg g:first-child line:first-child {
  transform: translateY(7px);
}
.button.-menu-open svg g:first-child line:last-child {
  transform: translateY(-7px);
}
.button.-menu-open svg g:last-child {
  opacity: 1;
}
.button.-menu-open svg g:last-child line {
  transition: transform 0.2s 0.2s;
}
.button.-menu-open svg g:last-child line:first-child {
  transform: rotate(45deg);
}
.button.-menu-open svg g:last-child line:last-child {
  transform: rotate(-45deg);
}

@media (min-width: 970px) {
    .button {
        display: none;
    }
}
</style>