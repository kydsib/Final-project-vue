import axios from '@/packages/axios'
import { FETCH_STOCKS, FETCH_ACCOUNT_DATA } from './action-types'
import { SET_STOCKS, SET_CASH_BALANCE } from './mutation-types'

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
  ,
  async [SELL_STOCK] ({ commit }) {
    // nebaigtas pardavimas
    try {
      const { data } = await axios({
        method: 'post',
        url: '/orders',
        data: {
          gty: 1,
          side: 'sell',
          symbol: 'VUZI',
          time_in_force: 'day',
          type: 'market'
        }
      })
    } catch (error) {
      console.log(error)
    }
  }
}
