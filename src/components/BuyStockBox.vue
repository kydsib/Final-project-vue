<template>
  <div class="stock-box">
      <div class="stock-box--info">
          <p class="company-name">{{stock.name}}</p>
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
  name: 'BuyStockBox',
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
			background-color: #7d68f1;
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
