<template>
  <div class="stock-box">
      <div class="stock-box--info">
          <p class="company-name">{{stock.name}}</p>
          <p class="value-count"> (${{stock.price}} | Quantity: {{stock.count}})</p>
          <p class="value-total">Total val. - ${{stock.value}}</p>
      </div>
      <div class="stock-box--action">

          <BaseInput v-model="qty" class="stock-qty" placeholder="enter qty" />

          <BaseButton @click="sell ">
            Sell
          </BaseButton>
      </div>
  </div>
</template>

<script>

import { SELL_STOCK } from '@/store/modules/Portfolio/action-types'
import BaseButton from '../layouts/Default/BaseButton'
import BaseInput from '../layouts/Default/BaseInput'
import { mapActions } from 'vuex'
export default {
  name: 'StockBox',
  components: {
    BaseButton,
    BaseInput
  },
  data () {
    return {
      symbol: null,
      qty: 0
    }
  },
  methods: {
    ...mapActions('Portfolio', {
      sellStock: SELL_STOCK
    }),
    sell () {
      this.sellStock({ symbol: this.stock.name, qty: this.qty })
    }
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
