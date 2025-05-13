<script lang="ts">
	import { setWindowsContext } from '$lib/utils/context';
	import DesktopIcon from '$lib/components/desktop/DesktopIcon.svelte';
	import Window from '$lib/components/Window.svelte';
	import MyComputerIcon from '~icons/ph/desktop-tower-thin';
	import RecycleBinIcon from '~icons/ph/trash-thin';
	import TerminalIcon from '~icons/ph/terminal-window-thin';
	import BrowserIcon from '~icons/ph/globe-thin';
	import MardownFileIcon from '~icons/ph/file-md-thin';

	let windows: WindowData[] = $state([]);

	setWindowsContext(windows);
</script>

<main>
	<h1 class="animated-text">SenOS</h1>
	<DesktopIcon Icon={MyComputerIcon} appName="Mój komputer" />
	<DesktopIcon Icon={RecycleBinIcon} appName="Kosz (papier)" />
	<DesktopIcon Icon={TerminalIcon} appName="Terminal" />
	<DesktopIcon Icon={BrowserIcon} appName="SenOS Explorer" />
	<DesktopIcon Icon={MardownFileIcon} appName="README.MD" />

	{#each windows as window (window.id)}
		<Window {...window} />
	{/each}
</main>

<style>
	main {
		position: relative;
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(6rem, 1fr));
		grid-template-rows: repeat(auto-fill, minmax(5.875rem, 1fr));
		gap: 1rem;
		padding: 1rem;
		background: #000000;
	}

	h1 {
		position: absolute;
		top: 50%;
		left: 50%;
		translate: -50% -50%;
		font-size: 10rem;
		font-weight: 300;
		text-align: center;
		user-select: none;
		opacity: 0.4;
	}
</style>
