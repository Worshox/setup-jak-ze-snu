<script>
	import TaskbarInfoDatetime from '$lib/components/taskbar/TaskbarInfoDatetime.svelte';
	import TaskbarInfoNetwork from '$lib/components/taskbar/TaskbarInfoNetwork.svelte';
	import TaskbarInfoTray from '$lib/components/taskbar/TaskbarInfoTray.svelte';
	import TaskbarInfoVolume from '$lib/components/taskbar/TaskbarInfoVolume.svelte';

	let taskbarInfoIcons = [TaskbarInfoTray, TaskbarInfoNetwork, TaskbarInfoVolume];
</script>

<section>
	<ul>
		{#each taskbarInfoIcons as Icon}
			<li>
				<Icon />
			</li>
		{/each}
	</ul>
	<TaskbarInfoDatetime />
</section>

<style>
	section {
		position: absolute;
		right: 1rem;
		top: 50%;
		translate: 0 -50%;
		display: flex;
		gap: 0.75rem;
		align-items: center;
	}

	ul {
		display: flex;
		gap: 0.375rem;
		align-items: center;
	}
</style>
