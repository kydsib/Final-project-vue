import Portfolio from './modules/Portfolio'
import Stocks from './modules/Stocks'

export default {
  strict: process.env.NODE_ENV !== 'production',
  modules: {
    Portfolio,
    Stocks
  }
}
