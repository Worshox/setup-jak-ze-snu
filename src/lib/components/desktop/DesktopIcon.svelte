<script lang="ts">
	let { Icon, caption } = $props();
</script>

<button>
	<span>
		<Icon color="#FFFFFF" width="3.75rem" height="3.75rem" />
	</span>
	<h3>{caption}</h3>
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
