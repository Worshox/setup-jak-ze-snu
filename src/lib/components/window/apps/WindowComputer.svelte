<script lang="ts">
	import { goto } from '$app/navigation';
	import { getOverlayContext } from '$lib/utils/context';
	import DiscIcon from '~icons/ph/hard-drive-thin';
	import GpuIcon from '~icons/ph/graphics-card-thin';
	import RamIcon from '~icons/ph/memory-thin';
	import CpuIcon from '~icons/ph/cpu-thin';
	import MotherboardIcon from '~icons/ph/rectangle-thin';
	import PowerIcon from '~icons/ph/car-battery-thin';
	import CaseIcon from '~icons/ph/computer-tower-thin';
	import MonitorIcon from '~icons/ph/monitor-thin';

	let overlay = getOverlayContext();
</script>

<main>
	<h4>Mój komputer</h4>
	<section>
		<article>
			<div>
				<DiscIcon color="#FFFFFF" width="1.75rem" height="1.75rem" />
				<h5>Pamięć masowa</h5>
			</div>
			<b>3 TB</b>
			<p>wykorzystano 10 z 3000 GB</p>
		</article>
		<article>
			<div>
				<GpuIcon color="#FFFFFF" width="1.75rem" height="1.75rem" />
				<h5>Karta graficzna</h5>
			</div>
			<b>16 GB</b>
			<p>Gigabyte AORUS Radeon RX 9070 XT ELITE</p>
		</article>
		<article>
			<div>
				<RamIcon color="#FFFFFF" width="1.75rem" height="1.75rem" />
				<h5>Pamięć operacyjna</h5>
			</div>
			<b>64 GB</b>
			<p>Prędkość: 6000 MHz</p>
		</article>
		<article>
			<div>
				<CpuIcon color="#FFFFFF" width="1.75rem" height="1.75rem" />
				<h5>Procesor</h5>
			</div>
			<b>Ryzen 9 9800X3D</b>
			<p>4.7 GHz</p>
		</article>
		<article>
			<div>
				<MotherboardIcon color="#FFFFFF" width="1.75rem" height="1.75rem" />
				<h5>Płyta główna</h5>
			</div>
			<b>ASRock B850 Riptide WiFi</b>
			<p>Socket AM5, AMD B850</p>
		</article>
		<article>
			<div>
				<PowerIcon color="#FFFFFF" width="1.75rem" height="1.75rem" />
				<h5>Zasilacz</h5>
			</div>
			<b>NZXT C1200 V2 1200W 80+ Gold ATX 3.0</b>
			<p>1200W, ATX</p>
		</article>
		<article>
			<div>
				<CaseIcon color="#FFFFFF" width="1.75rem" height="1.75rem" />
				<h5>Obudowa</h5>
			</div>
			<b>NZXT H6 Flow</b>
			<p>Czarna</p>
		</article>
		<article>
			<div>
				<MonitorIcon color="#FFFFFF" width="1.75rem" height="1.75rem" />
				<h5>Monitor</h5>
			</div>
			<b>LG 27GX790A-B - 27&prime;&prime;</b>
			<p>OLED | QHD | 0.03 ms | 480 Hz</p>
		</article>
	</section>
	<div class="info">
		<div>
			<h5>Wojciech Chrzan PC</h5>
			<p>"Setup jak ze SNU" professional workstation</p>
		</div>
		<div class="button">
			<a
				href="/setup"
				onclick={async (event) => {
					event.preventDefault();
					overlay.visible = true;
					await new Promise((r) => setTimeout(r, 1000));
					overlay.visible = false;
					goto('/setup');
				}}>Przejdź do SNU!</a
			>
		</div>
	</div>
</main>

<style>
	main {
		overflow-y: auto;
		display: flex;
		flex-direction: column;
		gap: 1.75rem;
		height: 100%;
		padding: 1rem;
		background: #1c1c1c;
		color: #ffffff;
	}

	h4 {
		font-size: 2rem;
		font-weight: 600;
	}

	section {
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		gap: 1rem;
	}

	article {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		gap: 1.5rem;
		padding: 1rem;
		background: #2b2b2b;
		border-radius: 0.5rem;
	}

	article div {
		display: flex;
		align-items: center;
		gap: 1rem;
	}

	.info {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 1rem;
		background: #2b2b2b;
		border-radius: 0.5rem;
	}

	.info div {
		display: flex;
		flex-direction: column;
		gap: 0.25rem;
	}

	.info h5 {
		font-size: 1.125rem;
		font-weight: 600;
	}

	.info p {
		font-size: 0.875rem;
	}

	a {
		z-index: 1;
		padding: 0.5rem 1rem;
		border-radius: 0.25rem;
		background: #2b2b2b;
		animation: pulse 1s linear infinite;
	}

	.button {
		position: relative;
	}

	.button::before,
	.button::after {
		--angle: 0deg;
		content: '';
		box-sizing: content-box;
		position: absolute;
		top: 50%;
		left: 50%;
		translate: -50% -50%;
		width: 100%;
		height: 100%;
		padding: 0.25rem;
		border-radius: 0.375rem;
		background-image: conic-gradient(from var(--angle), #ff5607, #8905d1, #ff5607);
		animation: spin 1s linear infinite;
	}

	.button::after {
		filter: blur(1.5rem);
		opacity: 0.4;
	}

	@keyframes pulse {
		0% {
			scale: 1;
		}

		50% {
			scale: 1.1;
		}

		100% {
			scale: 1;
		}
	}

	@keyframes spin {
		0% {
			--angle: 0deg;
			scale: 1;
		}

		50% {
			scale: 1.1;
		}

		100% {
			--angle: 360deg;
			scale: 1;
		}
	}

	@property --angle {
		syntax: '<angle>';
		initial-value: 0deg;
		inherits: false;
	}
</style>
