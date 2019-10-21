import axios from '@/packages/axios'
import { FETCH_US_EQUITIES, BUY_STOCK } from './action-types'
import { SET_NEW_STOCKS, ADD_NEW_STOCKS } from './mutation-types'

let randomStocks = []
function pickStock (input) {
  // Picking only 20 stocks to display
  while (randomStocks.length <= 21) {
    let randomNumber = Math.floor(Math.random() * Math.floor(input.length))
    // Checking if stock is tradable and easy to borrow - liquid
    if (
      input[randomNumber].tradable === true &&
      input[randomNumber].easy_to_borrow === true
    ) {
      randomStocks.push(input[randomNumber])
    } else {
      randomStocks = randomStocks
    }
  }
  return randomStocks
}

export default {
  async [FETCH_US_EQUITIES] ({ commit }) {
    try {
      const { data } = await axios.get('/assets')
      pickStock(data)
      commit(SET_NEW_STOCKS, randomStocks)
    } catch (error) {
      console.log(error)
    }
  },
  async [BUY_STOCK] ({ commit }, { symbol, qty }) {
    try {
      console.log(symbol)
      console.log(qty)
      const { data } = await axios.post('/orders', {
        qty,
        side: 'buy',
        symbol,
        type: 'market',
        time_in_force: 'day'
      })
      commit(ADD_NEW_STOCKS, data)
    } catch (error) {
      console.log(error)
    }
  }
}
