<script lang="ts">
	import mbImage from '$lib/assets/img/parts/motherboard.webp';
</script>

<div class="wrapper">
	<section class="container">
		<article>
			<h2>Płyta główna</h2>
			<h3>ASRock B850 Riptide WiFi</h3>
			<p>
				Układ nerwowy całego tego monstrum, w końcu ktoś musi to spiąć. Nie tylko funkcjonalna, ale
				też stylowa. 2.5 Gigabit LAN, 11 złącz USB, 3 gniazda M.2 PCIe 4.0, 2 x PCI-Express x16, 4 x
				Serial ATA III dla naszych starszych kolegów i nawet obsługa RAID jakbym chciał się pobawić
				w backupy. Czego chcieć więcej?
			</p>
		</article>
		<figure>
			<img src={mbImage} alt="Płyta główna" />
		</figure>
	</section>
</div>

<style>
	section {
		margin-top: 35rem;
		color: #fff;
	}

	article {
		display: flex;
		flex-direction: column;
		gap: 1.25rem;
	}

	h2 {
		font-size: 1.25rem;
	}

	h3 {
		font-size: 2rem;
		font-weight: 700;
	}

	img {
		width: 25rem;
		height: 28.75rem;
		object-fit: contain;
		object-position: center center;
	}
</style>
