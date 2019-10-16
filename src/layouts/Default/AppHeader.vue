<template>
  <header class="app-header">
    <b-navbar toggleable="lg" type="dark" variant="info">
    <b-navbar-brand href="#">Stock trader</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item :to="'portfolio'" >
         Portfolio
        </b-nav-item>
        <b-nav-item :to="'stocks'" >
         Stocks
        </b-nav-item>

      </b-navbar-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
         <b-nav-item href="#">End Day</b-nav-item>

        <b-nav-item-dropdown text="Save &amp; Load" right>
          <b-dropdown-item href="#">Save</b-dropdown-item>
          <b-dropdown-item href="#">Load</b-dropdown-item>
        </b-nav-item-dropdown>
        <b-nav-item v-if="balance">Funds: {{parseInt(balance.buying_power)}}</b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
  </header>

</template>

<script>
// import routes from '@/routes'
import { FETCH_ACCOUNT_DATA } from '@/store/modules/Portfolio/action-types'
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'AppHeader',
  computed: {
    ...mapGetters('Portfolio', {
      balance: 'balance'
    })
  },
  created () {
    this.fetchBalance()
  },
  methods: {
    ...mapActions('Portfolio', {
      fetchBalance: FETCH_ACCOUNT_DATA
    })
  }
}
</script>

<style lang="scss">
	.app-header {
		margin-bottom: 5vh;
	}
</style>
