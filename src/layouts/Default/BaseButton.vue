<template>
  <button
    class="base-button"
    @click="handleClick"
    >

    <slot />
  </button>
</template>

<script>
export default {
  name: 'BaseButton',
  methods: {
    handleClick (e) {
      this.$emit('click', e)
    }
  }
}
</script>

<style>

</style>
