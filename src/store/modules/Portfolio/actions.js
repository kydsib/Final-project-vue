import axios from '@/packages/axios'
import { FETCH_STOCKS, FETCH_ACCOUNT_DATA, SELL_STOCK } from './action-types'
import {
  SET_STOCKS,
  SET_CASH_BALANCE,
  SELL_PORTFOLIO_STOCK
} from './mutation-types'

export default {
  async [FETCH_ACCOUNT_DATA] ({ commit }) {
    try {
      const { data } = await axios.get('/account')
      commit(SET_CASH_BALANCE, data)
    } catch (error) {
      console.log(error)
    }
  },
  async [FETCH_STOCKS] ({ commit }) {
    try {
      const { data } = await axios.get('/positions')
      commit(SET_STOCKS, data)
    } catch (error) {
      console.log(error)
    }
  },
  async [SELL_STOCK] ({ commit }, { symbol, qty }) {
    try {
      const { data } = await axios.post('/orders', {
        qty,
        side: 'sell',
        symbol,
        time_in_force: 'day',
        type: 'market'
      })
      commit(SELL_PORTFOLIO_STOCK, data)
    } catch (error) {
      console.log(error)
    }
  }
}
