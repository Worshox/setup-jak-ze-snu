<script lang="ts">
	import DesktopIcon from './DesktopIcon.svelte';
	import MyComputerIcon from '~icons/ph/desktop-tower-thin';
	import RecycleBinIcon from '~icons/ph/trash-thin';
</script>

<main>
	<DesktopIcon Icon={MyComputerIcon} caption="Mój komputer" />
	<DesktopIcon Icon={RecycleBinIcon} caption="Kosz" />
</main>

<style>
	main {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(6rem, 1fr));
		grid-template-rows: repeat(auto-fill, minmax(5.875rem, 1fr));
		gap: 1rem;
		padding: 1rem;
		/* background: url('/img/noc.png'); */
		/* background-size: cover; */
		/* background-position: center center; */
		background: #000000;
	}
</style>
