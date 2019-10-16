<template>
  <div class="stocks">
    <div
    v-for="stock in stocks"
    :key="stock.id"
    class="stocks__list"
    >
      <BuyStockBox
      :stock="stock"
       />
    </div>

  </div>
</template>

<script>
import BuyStockBox from '../components/BuyStockBox'
import { FETCH_US_EQUITIES } from '@/store/modules/Stocks/action-types'
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'Stocks',
  components: {
    BuyStockBox
  },
  computed: {
    ...mapGetters('Stocks', {
      stocks: 'stocks'
    })
  },
  created () {
    this.fetchEquities()
  },
  methods: {
    ...mapActions('Stocks', {
      fetchEquities: FETCH_US_EQUITIES
    })
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
