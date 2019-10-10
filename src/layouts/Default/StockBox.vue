<template>
  <div class="stock-box">
      <div class="stock-box--info">
          <p class="company-name">AIG</p>
          <p class="stock-price">($32)</p>
      </div>
      <div class="stock-box--action">

          <input type="text">
          <BaseButton>
            Buy
          </BaseButton>
      </div>
  </div>
</template>

<script>
import BaseButton from './BaseButton'
export default {
  name: 'StockBox',
  components: {
    BaseButton
  }
}
</script>

<style lang="scss">
	.stock-box {
		border: 1px solid black;
		border-radius: 5px;
		&--info {
			background-color: #68f1c8;
			padding: 15px;
			display: flex;
		}
		p {
			margin: 0;
		}
		&--action {
			display: flex;
			justify-content: space-between;
			padding: 15px;
		}
		.company-name {
			margin-right: 10px;
		}
	}
</style>
