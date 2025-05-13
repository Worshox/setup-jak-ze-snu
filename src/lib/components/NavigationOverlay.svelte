<script lang="ts">
	import { fade } from 'svelte/transition';
</script>

<div transition:fade={{ duration: 1000 }}></div>

<style>
	div {
		position: fixed;
		inset: 0;
		background: #000000;
		pointer-events: none;
		z-index: 9999;
	}
</style>
