<script lang="ts">
	import { getWindowsContext } from '$lib/utils/context';

	let { Icon, appName } = $props();

	let windows = getWindowsContext();

	function openWindow() {
		if (windows.find((window) => window.appName === appName)) {
			return;
		}

		windows.push({
			// using Math.random() because crypto requires HTTPS
			// TODO: change to crypto.randomUUID()
			id: Math.random().toString(36).substring(2),
			appName: appName
		});
	}
</script>

<button ondblclick={openWindow}>
	<span>
		<Icon color="#FFFFFF" width="3.75rem" height="3.75rem" />
	</span>
	<h3>{appName}</h3>
</button>

<style>
	button {
		overflow: hidden;
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 0.5rem;
		width: 100%;
		height: 100%;
		padding: 0.5rem;
		border-radius: 0.25rem;
		cursor: pointer;
		transition: 0.2s;
	}

	button:hover {
		background-color: #ffffff20;
	}

	h3 {
		font-size: 0.875rem;
		color: #ffffff;
		text-align: center;
		white-space: nowrap;
		text-overflow: ellipsis;
	}
</style>
