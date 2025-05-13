<script lang="ts">
	import { fade } from 'svelte/transition';
	import clickOutside from '$lib/actions/clickOutside';
	import { getPopupContext } from '$lib/utils/context';
	import RestartIcon from '~icons/ph/arrow-counter-clockwise-thin';
	import SleepIcon from '~icons/ph/moon-thin';
	import PowerIcon from '~icons/ph/power-thin';
	import UserIcon from '~icons/ph/user-circle-thin';

	let { open = $bindable() } = $props();

	const popup = getPopupContext();
</script>

<article transition:fade={{ duration: 150 }} use:clickOutside={() => (open = false)}>
	<section>
		<UserIcon width="2rem" height="2rem" />
		<h2>SenOS User</h2>
	</section>
	<menu>
		{#each [SleepIcon, RestartIcon, PowerIcon] as Icon}
			<li>
				<button onclick={() => (popup.open = true)}>
					<Icon width="1.75rem" height="1.75rem" />
				</button>
			</li>
		{/each}
	</menu>
</article>

<style>
	article {
		position: absolute;
		left: 50%;
		bottom: 100%;
		translate: -50% -0.875rem;
		display: flex;
		justify-content: space-between;
		align-items: center;
		gap: 0.5rem;
		width: 24rem;
		padding: 0.5rem;
		border: 1px solid #404040;
		border-radius: 0.5rem;
		background: #1c1c1c;
		color: #ffffff;
	}

	section {
		display: grid;
		grid-template-columns: 2rem 6rem;
		align-items: center;
		gap: 0.5rem;
		user-select: none;
	}

	menu {
		display: flex;
		gap: 0.5rem;
	}

	button {
		display: grid;
		place-content: center;
		width: 2.5rem;
		height: 2.5rem;
		border-radius: 0.25rem;
		cursor: pointer;
		transition: 0.2s;
	}

	button:hover {
		background-color: #ffffff20;
	}
</style>
