<script lang="ts">
	import { fly, fade } from 'svelte/transition';
	import { getPopupContext } from '$lib/utils/context';
	import LockIcon from '~icons/ph/lock-key-thin';
	import CloseIcon from '~icons/ph/x-light';

	let proPopup = getPopupContext();
</script>

<dialog in:fly={{ y: 500, duration: 300 }} out:fade={{ duration: 300 }}>
	<article>
		<button onclick={() => (proPopup.open = false)}>
			<CloseIcon width="1.5rem" height="1.5rem" />
		</button>
		<LockIcon width="4rem" height="4rem" />
		<h2>SenOS Pro</h2>
		<p>Ta funkcja dostępna jest w wersji Pro systemu SenOS.</p>
		<p>Abyś ją uzyskać, muszę wygrać konkurs "SETUP JAK ZE SNU".</p>
		<p>SenOS działa poprawnie tylko na setupie dostępnym do obejrzenia w aplikacji Brave.</p>
		<a href="https://jjit.it/uZo8LTb" target="_blank">Konkurs</a>
	</article>
</dialog>

<style>
	dialog {
		position: fixed;
		top: 50%;
		left: 50%;
		translate: -50% -50%;
		z-index: 100;
		display: block;
		margin: 0;
		background: transparent;
	}

	dialog::before,
	dialog::after {
		--angle: 0deg;
		content: '';
		box-sizing: content-box;
		position: fixed;
		top: 50%;
		left: 50%;
		translate: -50% -50%;
		z-index: -1;
		width: 100%;
		height: 100%;
		padding: 1px;
		border-radius: 0.5rem;
		background-image: conic-gradient(from var(--angle), #ff5607, #8905d1, #ff5607);
		animation: spin 3s linear infinite;
	}

	dialog::after {
		filter: blur(1.5rem);
		opacity: 0.4;
	}

	article {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		gap: 1rem;
		width: 42rem;
		padding: 2rem;
		border: 1px solid #404040;
		border-radius: 0.5rem;
		color: #ffffff;
		background: #1c1c1c;
	}

	button {
		position: absolute;
		top: 1rem;
		right: 1rem;
		cursor: pointer;
	}

	h2 {
		font-size: 2rem;
		font-weight: 600;
	}

	a {
		padding: 0.5rem 1rem;
		border: 1px solid #404040;
		border-radius: 0.25rem;
	}

	@keyframes spin {
		from {
			--angle: 0deg;
		}

		to {
			--angle: 360deg;
		}
	}

	@property --angle {
		syntax: '<angle>';
		initial-value: 0deg;
		inherits: false;
	}
</style>
