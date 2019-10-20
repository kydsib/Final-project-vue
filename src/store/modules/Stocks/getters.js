export default {
  stocks: state => {
    return state.stocks.map(stock => {
      stock = { ...stock }
      return stock
    })
  },
  quantity: state => state.quantity,
  symbol: state => state.symbol
}
