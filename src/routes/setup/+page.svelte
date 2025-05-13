<script lang="ts">
	import Entry from '$lib/components/presentation/Entry.svelte';
	import Cpu from '$lib/components/presentation/Cpu.svelte';
	import Gpu from '$lib/components/presentation/Gpu.svelte';
	import Motherboard from '$lib/components/presentation/Motherboard.svelte';
	import Ram from '$lib/components/presentation/Ram.svelte';
	import Drives from '$lib/components/presentation/Drives.svelte';
	import Power from '$lib/components/presentation/Power.svelte';
	import Monitor from '$lib/components/presentation/Monitor.svelte';
	import Case from '$lib/components/presentation/Case.svelte';
	import Addons from '$lib/components/presentation/Addons.svelte';

	import Bg from '$lib/components/presentation/Bg.svelte';
</script>

<svelte:head>
	<title>SETUP JAK ZE SNU</title>
	<meta
		name="description"
		content="Setup - praca konkursowa 'SETUP JAK ZE SNU' autorstwa Wojciecha Chrzana."
	/>
</svelte:head>

<Entry />

<main>
	<div class="bg">
		<Bg />
	</div>
	<Cpu />
	<Gpu />
	<Motherboard />
	<Ram />
	<Drives />
	<Power />
	<Monitor />
	<Case />
	<Addons />
</main>

<style>
	.bg {
		position: absolute;
		top: 0;
		left: 0;
		width: 120rem;
		z-index: -1;
	}

	main {
		overflow-x: clip;
		position: relative;
		width: 100%;
		display: flex;
		flex-direction: column;
	}
</style>
