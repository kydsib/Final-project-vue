<template>
  <div class="portfolio">
      <StockBox />
      <StockBox />
      <StockBox />
      <StockBox />
      <StockBox />
      <StockBox />
  </div>
</template>

<script>
import StockBox from '../layouts/Default/StockBox'
export default {
  name: 'Portfolio',
  components: {
    StockBox
  }
}
</script>

<style lang="scss">
	.portfolio {
		display: grid;
		grid-gap: 15px;
		grid-template-columns: repeat(2, minmax(300px, 1fr));
	}
</style>
