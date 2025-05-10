<script lang="ts">
	import StartMenu from '$lib/components/taskbar/StartMenu.svelte';
	import SvelteLogoIcon from '~icons/logos/svelte-icon';

	let open = $state(false);
</script>

<div class="start">
	<button onclick={() => (open = !open)}>
		<SvelteLogoIcon width="2rem" height="2rem" />
	</button>
	{#if open}
		<StartMenu bind:open />
	{/if}
</div>

<style>
	.start {
		position: relative;
	}

	button {
		display: grid;
		place-content: center;
		width: 2.5rem;
		height: 2.5rem;
		border-radius: 0.25rem;
		cursor: pointer;
		transition: 0.2s;
	}

	button:hover {
		background-color: #ffffff20;
	}
</style>
