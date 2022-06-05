<template>
<div class="section-hero">
    <div class="container">
        <h1>
          Уборка<br/>
          квартир<br/>
          в Киеве
        </h1>
        <p>
          Мы уберем у вас дома или в офисе.<br/>
          Наведем чистоту после ремонта и<br/>
          проведем генеральную уборку.
        </p>
    </div>
</div>  
</template>

<style scoped>
.section-hero {
  background-image: url('../assets/images/hero.jpg');
  background-repeat: no-repeat;
  min-height: 100vh;
  background-size: cover;
  width: 100vw;
  max-width: 100%;
  max-height: 100vh;
  display: flex;
}

.section-hero .container {
    max-width: calc(1280px + 50%);
    margin: 0 auto;
    width: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    padding-left: 15%;
}

.section-hero h1 {
	font-weight: 400;
	font-size: 48px;
	line-height: 48px;
	margin-bottom: 20px;
}

.section-hero p {
	font-weight: 400;
	font-size: 16px;
	line-height: 20px;
}

@media (min-width: 730px) {
	.section-hero {
		background-size: contain;
	}

	.section-hero .container {
		padding-left: 54%;
	}
	.section-hero h1 {
		font-size: 76px;
		line-height: 77px;
	}

	.section-hero p {
		font-size: 18px;
	}
}

@media (min-width: 730px) and (orientation: landscape) {
	.section-hero h1 {
		font-size: 50px;
		line-height: 50px;
	}
}
</style>