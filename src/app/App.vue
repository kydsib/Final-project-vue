<template>
  <div id="#app">
      <Layout>
          <RouterView />
      </Layout>
  </div>
</template>

<script>
import Layout from '@/layouts/Default'
export default {
  name: 'App',
  components: {
    Layout
  }
}
</script>

<style>

</style>
