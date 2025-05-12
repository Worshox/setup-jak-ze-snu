<script lang="ts">
	import { getWindowsContext, getPopupContext } from '$lib/utils/context';
	import MinimizeIcon from '~icons/ph/minus-light';
	import MaximizeIcon from '~icons/ph/rectangle-light';
	import CloseIcon from '~icons/ph/x-light';

	let { id, appName } = $props();

	let windows = getWindowsContext();

	function closeWindow() {
		windows.splice(
			windows.findIndex((window) => window.id === id),
			1
		);
	}

	const popup = getPopupContext();
</script>

<header>
	<h3>{appName}</h3>
	<nav>
		<button onclick={() => (popup.open = true)}>
			<MinimizeIcon width="1.125rem" height="1.125rem" color="#FFFFFF" />
		</button>
		<button onclick={() => (popup.open = true)}>
			<MaximizeIcon width="1.125rem" height="1.125rem" color="#FFFFFF" />
		</button>
		<button onclick={closeWindow}>
			<CloseIcon width="1.125rem" height="1.125rem" color="#FFFFFF" />
		</button>
	</nav>
</header>

<style>
	header {
		display: flex;
		justify-content: space-between;
		padding: 0.25rem;
		padding-left: 0.5rem;
		border-bottom: 1px solid #404040;
		border-top-left-radius: 0.5rem;
		border-top-right-radius: 0.5rem;
		background: #1c1c1c;
	}

	h3 {
		color: #ffffff;
		user-select: none;
	}

	nav {
		display: flex;
		align-items: center;
		gap: 0.75rem;
	}

	button {
		display: grid;
		place-content: center;
		width: 1.5rem;
		height: 1.5rem;
		border-radius: 0.25rem;
		cursor: pointer;
		transition: 0.2s;
	}

	button:hover {
		background-color: #ffffff20;
	}
</style>
