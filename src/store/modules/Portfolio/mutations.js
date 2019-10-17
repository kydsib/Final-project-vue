import {
  SET_STOCKS,
  SET_CASH_BALANCE,
  SELL_PORTFOLIO_STOCK
} from './mutation-types'

export default {
  [SET_STOCKS] (state, stocks) {
    state.stocks = stocks.map(stock => {
      stock.id = stock.asset_id
      stock.name = stock.symbol
      stock.count = stock.qty
      stock.price = stock.current_price
      stock.value = stock.market_value
      return stock
    })
  },
  [SET_CASH_BALANCE] (state, balance) {
    state.balance = balance
  },
  [SELL_PORTFOLIO_STOCK] (state, quantity) {
    state.quantity = quantity
  }
}
