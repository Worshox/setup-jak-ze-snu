<script lang="ts">
	import StartMenu from '$lib/components/taskbar/StartMenu.svelte';
	import logo from '$lib/assets/img/logo.webp';

	let open = $state(false);
</script>

<div class="start">
	<button onclick={() => (open = !open)}>
		<img src={logo} alt="SenOS" />
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

	img {
		width: 2rem;
		height: 2rem;
	}
</style>
