<script lang="ts">
	import monitorImage from '$lib/assets/img/parts/monitor.webp';
</script>

<div class="wrapper">
	<section class="container">
		<article>
			<h2>Monitor</h2>
			<h3>LG 27GX790A-B - 27'' | OLED | QHD | 0.03ms | 480Hz</h3>
			<p>
				W końcu, jest i on. Co to byłby za setup, który odpali mi Minecrafta w 1000 FPS, jak nie
				będę miał gdzie ich zobaczyć? Zawsze słaby wynik w grach można było czymś wytłumaczyć, albo
				wina internetu, albo słabego sprzętu, ale teraz już nie będzie nawet o tym mowy. Na tym
				cudeńku będę mógł z dumą oglądać swoje KDA 1/16/3 w Valorancie w 4K i 600 FPS, albo oglądać
				kolorowe literki w edytorze na tle idealnej czerni.
			</p>
		</article>
		<figure>
			<img src={monitorImage} alt="Monitor" />
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
