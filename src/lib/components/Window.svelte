<script lang="ts">
	import WindowTopbar from '$lib/components/window/WindowTopbar.svelte';
	import WindowComputer from '$lib/components/window/apps/WindowComputer.svelte';
	import WindowTrash from '$lib/components/window/apps/WindowTrash.svelte';
	import WindowTerminal from '$lib/components/window/apps/WindowTerminal.svelte';
	import WindowExplorer from '$lib/components/window/apps/WindowExplorer.svelte';
	import WindowReadme from '$lib/components/window/apps/WindowReadme.svelte';
	import { fade } from 'svelte/transition';

	let { id, appName } = $props();
</script>

<article
	class={[
		appName === 'Mój komputer' && 'window-computer',
		appName === 'Kosz (papier)' && 'window-trash',
		appName === 'SenOS Explorer' && 'window-explorer'
	]}
	transition:fade={{ duration: 300 }}
>
	<WindowTopbar {id} {appName} />
	{#if appName === 'Mój komputer'}
		<WindowComputer />
	{:else if appName === 'Kosz (papier)'}
		<WindowTrash />
	{:else if appName === 'Terminal'}
		<WindowTerminal {id} />
	{:else if appName === 'SenOS Explorer'}
		<WindowExplorer {id} />
	{:else if appName === 'README.MD'}
		<WindowReadme />
	{/if}
</article>

<style>
	article {
		position: absolute;
		left: 50%;
		top: 50%;
		translate: -50% -50%;
		display: flex;
		flex-direction: column;
		width: 50rem;
		height: 30rem;
		border-radius: 0.5rem;
		border: 1px solid #404040;
	}

	.window-computer {
		width: 70%;
		height: fit-content;
		max-height: 90%;
	}

	.window-trash,
	.window-explorer {
		width: 70%;
		height: 80%;
	}
</style>
