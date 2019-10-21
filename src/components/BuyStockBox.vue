<template>
  <div class="stock-box">
      <div class="stock-box--info">
          <p class="company-name">{{stock.name}}</p>
      </div>
      <div class="stock-box--action">

          <BaseInput  v-model="qty"/>
          <BaseButton @click="buy">
            Buy
          </BaseButton>
      </div>
  </div>
</template>

<script>
import { BUY_STOCK } from '@/store/modules/Stocks/action-types'
import BaseButton from '../layouts/Default/BaseButton'
import BaseInput from '../layouts/Default/BaseInput'
import { mapActions } from 'vuex'
export default {
  name: 'BuyStockBox',
  components: {
    BaseButton,
    BaseInput
  },
  data () {
    return {
      symbol: null,
      qty: null
    }
  },
  methods: {
    ...mapActions('Stocks', {
      buyStock: BUY_STOCK
    }),
    buy () {
      this.buyStock({ symbol: this.stock.name, qty: this.qty })
    }
  },
  props: {
    stock: {
      type: Object,
      // required: true,
      default: () => ({
        name: null
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
