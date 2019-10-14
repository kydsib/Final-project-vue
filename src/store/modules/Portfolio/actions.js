import axios from '@/packages/axios'
import { FETCH_STOCKS } from './action-types'
import { SET_STOCKS } from './mutation-types'

export default {
  // async [FETCH_DATA] ({ commit }) {
  //   try {
  //     const { data } = await axios.get('/account')
  //     commit(SET_STOCKS, data)
  //     console.log(data)
  //   } catch (error) {
  //     console.log(error)
  //   }
  // },
  async [FETCH_STOCKS] ({ commit }) {
    try {
      const { data } = await axios.get('/positions')
      commit(SET_STOCKS, data)
    } catch (error) {
      console.log(error)
    }
  }
}
