<div role="presentation">
	<span class="poznaj">Poznaj</span>
	<span class="setup">setup</span>
	<span class="jak">jak</span>
	<span class="ze">ze</span>
	<span class="snu animated-text">S N U</span>
</div>

<style>
	div {
		overflow: hidden;
		position: fixed;
		inset: 0;
		z-index: 100;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		gap: 2rem;
		min-height: 100dvh;
		background: #000000;
		font-weight: 600;
		text-align: center;
		color: #ffffff;
		user-select: none;
		animation: close 1s ease-out 10s forwards;
	}

	.poznaj {
		translate: 0 -50dvh;
		font-size: 3rem;
		animation: poznaj 0.25s ease-in 1s forwards;
	}

	.setup {
		translate: -70dvw 0;
		font-size: 4rem;
		text-transform: uppercase;
		animation: setup 0.25s ease-in 2s forwards;
	}

	.jak {
		translate: 70dvw 0;
		font-size: 3rem;
		animation: jak 0.25s ease-in 3s forwards;
	}

	.ze {
		translate: 0 50dvh;
		font-size: 3rem;
		animation: ze 0.25s ease-in 4s forwards;
	}

	.snu {
		scale: 0;
		font-size: 6rem;
		font-weight: 900;
		text-transform: uppercase;
		animation:
			snu 3s ease-in 5s forwards,
			animated-text 3s linear 0s infinite;
	}

	@keyframes poznaj {
		0% {
			translate: 0 -50dvh;
		}

		100% {
			translate: 0 0;
		}
	}

	@keyframes setup {
		0% {
			translate: -70dvw 0;
		}

		100% {
			translate: 0 0;
		}
	}

	@keyframes jak {
		0% {
			translate: 70dvw 0;
		}

		100% {
			translate: 0 0;
		}
	}

	@keyframes ze {
		0% {
			translate: 0 50dvh;
		}

		100% {
			translate: 0 0;
		}
	}

	@keyframes snu {
		0% {
			scale: 0;
		}

		30% {
			scale: 1.2;
		}

		40% {
			scale: 1;
		}

		50% {
			scale: 1.2;
		}

		60% {
			scale: 1;
		}

		70% {
			scale: 1.2;
		}

		80% {
			scale: 1;
		}

		90% {
			scale: 1.2;
		}

		100% {
			scale: 1;
		}
	}

	@keyframes close {
		0% {
			opacity: 1;
		}

		100% {
			opacity: 0;
		}
	}
</style>
