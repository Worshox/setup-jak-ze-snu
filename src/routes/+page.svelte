<script lang="ts">
	import { setTaskbarInfoContext } from '$lib/utils/context';
	import Desktop from '$lib/components/Desktop.svelte';
	import Taskbar from '$lib/components/Taskbar.svelte';

	let { data } = $props();

	setTaskbarInfoContext(data.taskbarInfo);
</script>

<svelte:head>
	<title>SenOS</title>
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
