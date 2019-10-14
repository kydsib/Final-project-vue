<template>
  <div class="portfolio" >
    <div
      v-for="stock in stocks"
      :key="stock.id"
      class="porfolio__stock"
        >
    <StockBox
      :stock="stock"
       />

  </div>

  </div>
</template>

<script>
import StockBox from '../components/StockBox'
import { FETCH_STOCKS } from '@/store/modules/Portfolio/action-types'
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'Portfolio',
  components: {
    StockBox
  },
  computed: {
    ...mapGetters('Portfolio', {
      stocks: 'stocks'
    })
  },
  created () {
    this.fetchStocks()
  },
  methods: {
    ...mapActions('Portfolio', {
      fetchStocks: FETCH_STOCKS
    })
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
