<script lang="ts">
	import storageImage from '$lib/assets/img/parts/storage.webp';
</script>

<div class="wrapper">
	<section class="container">
		<article>
			<h2>Pamięć masowa</h2>
			<h3>Lexar NM790 Pci-e NVMe 2 TB + 1 TB</h3>
			<p>
				Już nigdy więcej nie będę musiał odinstalowywać 3 innych gier, kiedy będę chciał
				zainstalować GTA, COD, czy Forzę. Taki areał pozwala na wygodne zarządzanie wszystkimi
				danymi, ale ja w planach mam co innego. Zawsze chciałem pobawić się w Linuxowanie i serwery.
				Jedna partycja na Linucha, jedna na Windowsa i reszta na node_modules. Na tydzień powinno
				wystarczyć.
			</p>
		</article>
		<figure>
			<img src={storageImage} alt="Pamięć masowa" />
		</figure>
	</section>
</div>

<style>
	section {
		margin-top: 35rem;
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
