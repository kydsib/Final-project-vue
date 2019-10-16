export default {
  stocks: state => {
    return state.stocks.map(stock => {
      stock = { ...stock }
      return stock
    })
  }
}
