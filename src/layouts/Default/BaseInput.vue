<template>
  <div class="input-field">
      <label for=""></label>
      <!-- NEPABAIGTAS -->
      <input type="text">
  </div>
</template>

<script>
export default {
  name: 'BaseInput',
  model: {
    event: 'model:input'
  },
  props: {
    value: {
      type: String,
      default: null
    },
    type: {
      type: String,
      default: 'text'
    },
    labelText: {
      type: String,
      default: null
    }
  }
}
</script>

<style>

</style>
