<script>
	import SpeakerLowIcon from '~icons/ph/speaker-high-thin';
	import NetworkIcon from '~icons/ph/network-thin';
	import CaretUpIcon from '~icons/ph/caret-up-thin';
</script>

<section>
	<ul>
		<li>
			<button>
				<CaretUpIcon color="#FFFFFF" width="1.5rem" height="1.5rem" />
			</button>
		</li>
		<li>
			<button>
				<NetworkIcon color="#FFFFFF" width="1.5rem" height="1.5rem" />
			</button>
		</li>
		<li>
			<button>
				<SpeakerLowIcon color="#FFFFFF" width="1.5rem" height="1.5rem" />
			</button>
		</li>
	</ul>
	<time>
		<span>10:45</span>
		<span>10.05.2025</span>
	</time>
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

	li,
	button {
		width: 2rem;
		height: 2rem;
	}

	button {
		display: grid;
		place-content: center;
		border-radius: 0.25rem;
		cursor: pointer;
		transition: 0.2s;
	}

	button:hover {
		background-color: #ffffff20;
	}

	time {
		display: flex;
		flex-direction: column;
		align-items: flex-end;
		font-size: 0.75rem;
		color: #ffffff;
	}
</style>
