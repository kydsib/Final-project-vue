<template>
  <button
    class="button"
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

<style lang="scss">
	.button {
		-webkit-appearance: none;
		background-color: #13ab7d;
		color: white;
		padding: 0.6rem 1rem;
		border-radius: 4px;
		border: 0;
		text-transform: uppercase;
		font-size: 0.75rem;
		transition: 0.2s opacity ease;
		&:focus {
			outline: 0;
			opacity: 0.9;
		}
		&:active {
			opacity: 0.5;
		}
		&:hover {
			cursor: pointer;
		}

		.btn-sell {
			background-color: #bb3416;
		}
	}
</style>
