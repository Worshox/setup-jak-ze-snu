<script lang="ts">
	import '$lib/styles/reset.css';
	import '$lib/styles/globals.css';
	import { setPopupContext, setOverlayContext } from '$lib/utils/context';
	import MobileBlocker from '$lib/components/MobileBlocker.svelte';
	import NavigationOverlay from '$lib/components/NavigationOverlay.svelte';
	import ProPopup from '$lib/components/ProPopup.svelte';

	let { children } = $props();

	const overlay = $state({ visible: false });
	setOverlayContext(overlay);

	const proPopup = $state({ open: false });
	setPopupContext(proPopup);

	let appWidth = $state(0);
</script>

<MobileBlocker />

{#if overlay.visible}
	<NavigationOverlay />
{/if}

{#if proPopup.open}
	<ProPopup />
{/if}

{@render children()}
