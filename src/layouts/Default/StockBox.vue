<template>
  <div class="stock-box">
      <div class="stock-box--info">
          <span>AIG</span>
          <span>$32</span>
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
  name: 'StockBox'
}
</script>

<style lang="scss">
	.stock-box {
		height: 150px;
		width: 40vw;
		border: 1px solid black;
		border-radius: 5px;
		&--info {
			background-color: #68f1c8;
			padding: 10px;
		}
		&--action {
			padding: 10px;
		}
	}
</style>
