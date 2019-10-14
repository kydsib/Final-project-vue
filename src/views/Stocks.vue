<template>
  <div class="stocks">
      <StockBox />
      <StockBox />
       <StockBox />
      <StockBox />
  </div>
</template>

<script>
import StockBox from '../components/StockBox'
export default {
  name: 'Stocks',
  components: {
    StockBox
  }
}
</script>

<style lang="scss">
	.stocks {
		display: grid;
		grid-gap: 15px;
		grid-template-columns: repeat(2, minmax(300px, 1fr));
	}
</style>
