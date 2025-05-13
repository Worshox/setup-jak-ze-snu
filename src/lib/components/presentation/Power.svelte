<script lang="ts">
	import powerImage from '$lib/assets/img/parts/power.webp';
</script>

<div class="wrapper">
	<section class="container">
		<figure>
			<img src={powerImage} alt="Pamięć RAM" />
		</figure>
		<article>
			<h2>Zasilacz</h2>
			<h3>NZXT C1200 V2 1200W 80+ Gold ATX 3.0</h3>
			<p>
				No właśnie, przecież taki kombajn na powietrze nie chodzi, tu potrzeba konkretnej mocy. 1200
				watów wystarczy nawet z lekką nawiązką, przezorny zawsze ubezpieczony.
			</p>
		</article>
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
