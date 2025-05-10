<script lang="ts">
	import { SvelteDate } from 'svelte/reactivity';
	import { getTaskbarInfoContext } from '$lib/utils/context';

	const initialDateTime = getTaskbarInfoContext().dateTime;

	const date = new SvelteDate(initialDateTime ?? Date.now());

	const timeFormatter = new Intl.DateTimeFormat('pl-PL', {
		hour: '2-digit',
		minute: '2-digit'
	});

	const dateFormatter = new Intl.DateTimeFormat('pl-PL');

	$effect(() => {
		const interval = setInterval(() => {
			date.setTime(Date.now());
		}, 1000);

		return () => clearInterval(interval);
	});
</script>

<time>
	<span>{timeFormatter.format(date)}</span>
	<span>{dateFormatter.format(date)}</span>
</time>

<style>
	time {
		display: flex;
		flex-direction: column;
		align-items: flex-end;
		font-size: 0.75rem;
		color: #ffffff;
		user-select: none;
	}
</style>
