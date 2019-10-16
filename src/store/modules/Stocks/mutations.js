import { SET_NEW_STOCKS } from './mutation-types'

export default {
  [SET_NEW_STOCKS] (state, stocks) {
    state.stocks = stocks.map((stock, index) => {
      stock.id = index + 1
      stock.name = stock.symbol
      stock.count = stock.qty
      stock.price = stock.current_price
      stock.value = stock.market_value
      return stock
    })
  }
}
