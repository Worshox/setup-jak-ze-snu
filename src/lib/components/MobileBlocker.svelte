<script>
	import { onMount } from 'svelte';

	let isMobile = $state(false);

	onMount(() => {
		const checkSize = () => {
			isMobile = window.innerWidth < 1200;
		};

		checkSize();
		window.addEventListener('resize', checkSize);

		return () => {
			window.removeEventListener('resize', checkSize);
		};
	});
</script>

{#if isMobile}
	<div>
		<h1>Aplikacja dostępna tylko z poziomu komputera</h1>
		<p>
			Przepraszamy ale aplikacja została stworzona tylko z myślą o komputerach. <br />
			Prosimy o korzystanie z aplikacji na komputerze.
		</p>
	</div>
{/if}

<style>
	div {
		position: fixed;
		inset: 0;
		z-index: 9999;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		gap: 1.5rem;
		padding: 2rem 1rem;
		background: #111;
		font-size: 1.5rem;
		text-align: center;
		color: white;
	}
</style>
