<script lang="ts">
	import caseImage from '$lib/assets/img/parts/case.webp';
</script>

<div class="wrapper">
	<section class="container">
		<figure>
			<img src={caseImage} alt="Obudowa" />
		</figure>
		<article>
			<h2>Obudowa</h2>
			<h3>NZXT H6 Flow czarna</h3>
			<p>
				No i na koniec, ktoś kto to wszystko upakuje razem. Wielka, pojemna, przestronna,
				przeszklona i stylowa obudowa. Nietypowy kształt nadaje temu klockowi kunszt, a widoczne
				bebechy dają poczucie niejakiego powszecnego wśród pecetowców prestiżu, ale też pozwalają na
				oglądanie nieubłagalnie zbierających się centymetrów kurzu (bo miejsce komputera jest na
				podłodze).
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
