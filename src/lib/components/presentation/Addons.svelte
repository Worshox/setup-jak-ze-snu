<script lang="ts">
	import coolerImage from '$lib/assets/img/parts/cooler.webp';
	import coolingImage from '$lib/assets/img/parts/cooling.webp';
	import mousepadImage from '$lib/assets/img/parts/mousepad.webp';
	import holderImage from '$lib/assets/img/parts/holder.webp';
</script>

<div class="wrapper">
	<section>
		<h2>Pozostałe</h2>
		<p>
			Nie możemy zapomnieć o innych ważnych rzeczach, bez których nasz setup nie byłby w pełni sobą.
		</p>
		<div class="addons">
			<article>
				<img src={coolerImage} alt="Chłodzenie wodne" />
				<h3>ENDORFY Navis F360 ARGB</h3>
				<p>Chłodzenie cieczą to już standard, a to akurat jest całkem przystępne i w promocji.</p>
			</article>
			<article>
				<img src={coolingImage} alt="Wentylator" />
				<h3>NZXT F120 RGB 120mm czarny</h3>
				<p>Wiatraków, szczególnie tych z RGB, nigdy za wiele.</p>
			</article>
			<article>
				<img src={holderImage} alt="Ramię na monitor" />
				<h3>ENDORFY Atlas Double</h3>
				<p>Zawsze marzyłem o wygodnej łapie na monitor, teraz będę gotowy na dwa.</p>
			</article>
			<article>
				<img src={mousepadImage} alt="Podkładka pod mysz" />
				<h3>KRUX Space Carpet MAX</h3>
				<p>Chyba nawet nie muszę pisać, czemu to się tu znajduje</p>
			</article>
		</div>
		<h3>
			Wszystkie zdjęcia pochodzą ze strony <a href="https://www.komputronik.pl/" target="_blank"
				>komputronik.pl</a
			>
		</h3>
	</section>
</div>

<style>
	section {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 4rem;
		max-width: 90rem;
		margin: 0 auto;
		margin-top: 42rem;
		padding: 2rem 2.5rem;
		color: #fff;
	}

	.addons {
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		gap: 3rem;
	}

	article {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 1rem;
	}

	h2 {
		font-size: 2rem;
		font-weight: 700;
	}

	h3 {
		font-size: 1.5rem;
		font-weight: 700;
	}

	h2,
	h3 {
		text-align: center;
	}

	p {
		font-size: 1.125rem;
		text-align: center;
	}

	img {
		width: 16rem;
		height: 16rem;
		object-fit: contain;
		object-position: center center;
	}
</style>
