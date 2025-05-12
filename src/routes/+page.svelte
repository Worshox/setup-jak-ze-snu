<script lang="ts">
	import { setTaskbarInfoContext, setTrashContext } from '$lib/utils/context';
	import Desktop from '$lib/components/Desktop.svelte';
	import Taskbar from '$lib/components/Taskbar.svelte';

	let { data } = $props();

	let trash = $state(data.trash);

	setTaskbarInfoContext(data.taskbarInfo);
	setTrashContext(trash);
</script>

<svelte:head>
	<title>SenOS</title>
	<script
		src="https://cdn.jsdelivr.net/npm/canvas-confetti@1.9.3/dist/confetti.browser.min.js"
	></script>
</svelte:head>

<div>
	<Desktop />
	<Taskbar />
</div>

<style>
	div {
		display: grid;
		grid-template-rows: 1fr 3rem;
		height: 100dvh;
		max-height: 100dvh;
	}
</style>
