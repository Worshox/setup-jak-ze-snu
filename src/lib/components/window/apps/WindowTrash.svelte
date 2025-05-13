<script lang="ts">
	import { fade, fly } from 'svelte/transition';
	import { getTrashContext } from '$lib/utils/context';

	let trash = getTrashContext();

	let button: HTMLButtonElement | undefined = $state();

	function clearTrash() {
		if (!button) return;

		button.remove();

		const interval = setInterval(() => {
			trash.pop();

			if (trash.length === 0) {
				clearInterval(interval);
			}
		}, 100);
	}
</script>

<main>
	<header>
		<h4>Nazwa</h4>
		<h4>Data usunięcia</h4>
		<h4>Rozmiar</h4>
	</header>
	<section>
		{#each trash as junk (junk.name)}
			<div class="junk" out:fade>
				<div class="junk-name">
					<img src={junk.image} alt={junk.name} />
					<p>{@html junk.name}</p>
				</div>
				<p>
					{Intl.DateTimeFormat('pl-PL', { dateStyle: 'short', timeStyle: 'medium' }).format(
						junk.date
					)}
				</p>
				<p>{@html junk.size}</p>
			</div>
		{/each}
		{#if trash.length === 0}
			<p in:fade={{ duration: 300, delay: 500 }}>Pamiętaj, że śmieci należy segregować :&rpar;</p>
		{/if}
	</section>
	{#if trash.length}
		<button onclick={clearTrash} bind:this={button}>Opróżnij kosz</button>
	{/if}
</main>

<style>
	main {
		position: relative;
		display: flex;
		flex-direction: column;
		gap: 0.75rem;
		height: calc(100% - 2.125rem);
		padding: 0.5rem;
		border-radius: 0.5rem;
		background: #000000;
		color: #ffffff;
	}

	header {
		display: grid;
		grid-template-columns: 2fr 1fr 1fr;
		gap: 0.5rem;
		padding-bottom: 0.25rem;
		border-bottom: 1px solid #404040;
	}

	h4:not(:last-child) {
		border-right: 1px solid #404040;
	}

	section {
		overflow-y: auto;
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
	}

	.junk {
		display: grid;
		grid-template-columns: 2fr 1fr 1fr;
		gap: 1rem;
		align-items: center;
	}

	.junk-name {
		display: flex;
		align-items: center;
		gap: 1rem;

		img {
			width: 5rem;
			border-radius: 0.25rem;
		}
	}

	button {
		position: absolute;
		right: 2.5rem;
		bottom: 1rem;
		padding: 0.5rem 1rem;
		border: 1px solid #404040;
		border-radius: 0.25rem;
		background: #000000;
		transition: 300ms;
	}

	button:hover {
		background: #404040;
	}
</style>
