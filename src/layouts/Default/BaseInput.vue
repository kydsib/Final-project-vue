<template>
  <div class="input-field">
      <label for=""></label>
      <input
      placeholder="Quantity"
      :value="value"
      type="number"
      id="stock-count"
      @input="$emit('input', $event.target.value)"
      >
  </div>
</template>

<script>
export default {
  name: 'BaseInput',
  props: {
    value: {
      type: [String, Number],
      default: 0
    },
    type: {
      type: Number,
      default: null
    }
  }
}
</script>

<style>

</style>
