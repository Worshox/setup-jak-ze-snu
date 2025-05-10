<script lang="ts">
	import StartIcon from '$lib/components/StartIcon.svelte';
	import TaskbarInfo from '$lib/components/TaskbarInfo.svelte';
</script>

<nav>
	<menu>
		<li>
			<StartIcon />
		</li>
	</menu>
	<TaskbarInfo />
</nav>

<style>
	nav {
		position: relative;
		display: flex;
		justify-content: center;
		align-items: center;
		padding: 0.25rem 1rem;
		border-top: 1px solid #404040;
		background: #1c1c1c;
	}
</style>
