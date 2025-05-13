<script lang="ts">
	import { fade } from 'svelte/transition';
	import { getTaskbarInfoContext } from '$lib/utils/context';
	import clickOutside from '$lib/actions/clickOutside';
	import NetworkIcon from '~icons/ph/network-thin';
	import PlugsConnectedIcon from '~icons/ph/plugs-connected-thin';

	let open = $state(false);

	const ip = getTaskbarInfoContext().ip;
</script>

<div class="network">
	<button onclick={() => (open = !open)} aria-label="Sieć">
		<NetworkIcon color="#FFFFFF" width="1.5rem" height="1.5rem" />
	</button>
	{#if open}
		<article transition:fade={{ duration: 150 }} use:clickOutside={() => (open = false)}>
			<PlugsConnectedIcon color="#FFFFFF" width="2.5rem" height="2.5rem" />
			<address>
				<h2>SenOS LAN</h2>
				<p>Połączono</p>
				<p>IP: {ip}</p>
			</address>
		</article>
	{/if}
</div>

<style>
	.network {
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

	article {
		position: absolute;
		left: 50%;
		bottom: 100%;
		translate: -50% -1.25rem;
		display: grid;
		grid-template-columns: 2.5rem 1fr;
		align-items: start;
		gap: 1rem;
		width: 16rem;
		padding: 1rem;
		border: 1px solid #404040;
		border-radius: 0.5rem;
		background: #1c1c1c;
		color: #ffffff;
	}

	h2 {
		font-size: 1.25rem;
		font-weight: 700;
	}

	address {
		display: flex;
		flex-direction: column;
		gap: 0.25rem;
		font-style: normal;
	}
</style>
