<template>
  <main class="default-layout">
      <AppHeader />
        <div class="container">
            <slot />
        </div>
        <AppFooter />
  </main>
</template>

<script>
import AppHeader from './AppHeader'
import AppFooter from './AppFooter'
export default {
  name: 'Layout',
  components: {
    AppHeader,
    AppFooter
  }
}
</script>

<style lang="scss">
	.container {
		max-width: 1200px;
		padding: 0 15px;
		width: 100%;
		margin: 0 auto;
	}
</style>
