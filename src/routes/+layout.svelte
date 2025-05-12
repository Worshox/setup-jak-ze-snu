<script>
	import '$lib/styles/reset.css';
	import '$lib/styles/globals.css';
	import { setPopupContext } from '$lib/utils/context';
	import ProPopup from '$lib/components/ProPopup.svelte';

	let { children } = $props();

	const proPopup = $state({ open: false });

	setPopupContext(proPopup);
</script>

{#if proPopup.open}
	<ProPopup />
{/if}

{@render children()}
