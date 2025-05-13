<script lang="ts">
	import cpuImage from '$lib/assets/img/parts/cpu.webp';
</script>

<div class="wrapper">
	<section class="container">
		<article>
			<h2>Procesor</h2>
			<h3>Ryzen 7 9800X3D</h3>
			<p>
				Siła, moc, potęga, wydajność... wymieniać można w nieskończoność. Ten procesor to synonim
				idealnej centralnej jednoski obliczeniowej. Perfekcyjny balans między ceną, a jakością.
				Podoła każdemu zadaniu, od największych modeli w blenderze, przez 5 jednocześnie
				postawionych maszyn wirtualnych, aż po mały serwer do wszelakich zastosowań.
				Najprawdopodobniej da też radę odpalić Android Studio lub IDE od JetBrains w mniej niż
				minutę.
			</p>
		</article>
		<figure>
			<img src={cpuImage} alt="Procesor" />
		</figure>
	</section>
</div>

<style>
	section {
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
