import { SET_STOCKS, SET_CASH_BALANCE } from './mutation-types'

export default {
  [SET_STOCKS] (state, stocks) {
    state.stocks = stocks.map((stock, index) => {
      stock.id = index + 1
      stock.name = stock.symbol
      stock.count = stock.qty
      stock.price = stock.current_price
      stock.value = stock.market_value
      return stock
    })
  },
  [SET_CASH_BALANCE] (state, balance) {
    state.balance = balance
  }
}
