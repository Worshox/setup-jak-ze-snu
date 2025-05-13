<script lang="ts">
	import gpuImage from '$lib/assets/img/parts/gpu.webp';
</script>

<div class="wrapper">
	<section class="container">
		<figure>
			<img src={gpuImage} alt="Karta graficzna" />
		</figure>
		<article>
			<h2>Karta graficzna</h2>
			<h3>Gigabyte AORUS Radeon RX 9070 XT ELITE 16GB</h3>
			<p>
				Może i GTA VI wychodzi dopiero za rok, ale już trzeba być na to gotowym. Najnowsze i
				najpotężniejsze GPU od AMD idealnie będzie współpracować ze swoim kolegą z socketa obok.
				Ustawienia na ultra w najbardziej wymagających produkcjach, to dla niej pikuś. Żadne shadery
				w Minecrafcie z maksymalnym render distance nie są jej straszne.
			</p>
		</article>
	</section>
</div>

<style>
	section {
		margin-top: 42rem;
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
