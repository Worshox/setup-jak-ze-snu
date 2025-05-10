<script lang="ts">
	import DesktopIcon from '$lib/components/desktop/DesktopIcon.svelte';
	import MyComputerIcon from '~icons/ph/desktop-tower-thin';
	import RecycleBinIcon from '~icons/ph/trash-thin';
	import BraveIcon from '~icons/logos/brave';
	import TerminalIcon from '~icons/ph/terminal-window-thin';
</script>

<main>
	<h1>SenOS</h1>
	<DesktopIcon Icon={MyComputerIcon} caption="Mój komputer" />
	<DesktopIcon Icon={RecycleBinIcon} caption="Kosz" />
	<DesktopIcon Icon={TerminalIcon} caption="Terminal" />
	<DesktopIcon Icon={BraveIcon} caption="Brave" />
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

	h1 {
		background: linear-gradient(to right, #ff5607, #8905d1, #ff5607);
		background-clip: text;
		color: transparent;
		background-size: 200% auto;
		animation: animated-text 3s linear infinite;
	}

	@keyframes animated-text {
		0% {
			background-position: 200% 50%;
		}

		100% {
			background-position: 0% 50%;
		}
	}
</style>
