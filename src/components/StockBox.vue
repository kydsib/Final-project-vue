<template>
  <div class="stock-box">
      <div class="stock-box--info">
          <p class="company-name">{{stock.name}} shares {{stock.count}}</p>
          <p class="stock-price">$ {{stock.price}}</p>
      </div>
      <div class="stock-box--action">

          <BaseInput  />
          <BaseButton>
            Buy
          </BaseButton>
      </div>
  </div>
</template>

<script>
import BaseButton from '../layouts/Default/BaseButton'
import BaseInput from '../layouts/Default/BaseInput'
export default {
  name: 'StockBox',
  components: {
    BaseButton,
    BaseInput
  },
  props: {
    stock: {
      type: Object,
      // required: true,
      default: () => ({
        name: null,
        count: null,
        id: null,
        price: null
      })
    }
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
