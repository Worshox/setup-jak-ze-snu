<script lang="ts">
	import { getWindowsContext } from '$lib/utils/context';
	import koszykImage from '$lib/assets/img/koszyk.webp';

	let { id } = $props();

	let windows = getWindowsContext();

	function closeWindow() {
		windows.splice(
			windows.findIndex((window) => window.id === id),
			1
		);
	}
</script>

<main>
	<button
		onclick={() => {
			const result = confirm('SenOS Explorer nie odpowiada, czy chcesz zamknąć okno?');
			if (result) {
				closeWindow();
			}
		}}
	>
		<img src={koszykImage} alt="Komputronik - Koszyk" />
	</button>
</main>

<style>
	main {
		overflow: auto;
		border-top: 1px solid #404040;
		border-bottom-right-radius: 0.5rem;
		border-bottom-left-radius: 0.5rem;
	}

	button {
		cursor: default;
	}
</style>
