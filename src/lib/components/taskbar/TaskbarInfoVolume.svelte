<script lang="ts">
	import SpeakerHighIcon from '~icons/ph/speaker-high-thin';
	import SpeakerNoneIcon from '~icons/ph/speaker-slash-thin';

	let muted = $state(false);
</script>

<button onclick={() => (muted = !muted)}>
	{#if muted}
		<SpeakerNoneIcon color="#FFFFFF" width="1.5rem" height="1.5rem" />
	{:else}
		<SpeakerHighIcon color="#FFFFFF" width="1.5rem" height="1.5rem" />
	{/if}
</button>

<style>
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
</style>
