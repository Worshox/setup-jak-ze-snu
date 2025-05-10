<script lang="ts">
	import { fade } from 'svelte/transition';
	import clickOutside from '$lib/actions/clickOutside';
	import CaretUpIcon from '~icons/ph/caret-up-thin';
	import DiscordLogoIcon from '~icons/logos/discord-icon';
	import SpotifyLogoIcon from '~icons/logos/spotify-icon';

	let open = $state(false);
</script>

<div class="tray">
	<button onclick={() => (open = !open)} data-open={open}>
		<i>
			<CaretUpIcon color="#FFFFFF" width="1.5rem" height="1.5rem" />
		</i>
	</button>
	{#if open}
		<article transition:fade={{ duration: 150 }} use:clickOutside={() => (open = false)}>
			<a href="https://discord.com/" target="_blank">
				<DiscordLogoIcon width="1rem" height="1rem" />
			</a>
			<a href="https://open.spotify.com/" target="_blank">
				<SpotifyLogoIcon width="1rem" height="1rem" />
			</a>
		</article>
	{/if}
</div>

<style>
	.tray {
		position: relative;
	}

	button {
		display: grid;
		place-content: center;
		width: 2rem;
		height: 2rem;
		border-radius: 0.25rem;
		cursor: pointer;
		transition: 0.2s;
	}

	button:hover {
		background-color: #ffffff20;
	}

	[data-open='true'] i {
		rotate: 180deg;
	}

	article {
		position: absolute;
		left: 50%;
		bottom: 100%;
		translate: -50% -1.25rem;
		display: flex;
		align-items: center;
		gap: 0.5rem;
		padding: 0.5rem;
		border: 1px solid #404040;
		border-radius: 0.5rem;
		background: #1c1c1c;
		color: #ffffff;
	}

	a {
		padding: 0.5rem;
		border-radius: 0.25rem;
		transition: 150ms;
	}

	a:hover {
		background-color: #ffffff20;
	}
</style>
