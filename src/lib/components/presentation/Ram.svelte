<script lang="ts">
	import ramImage from '$lib/assets/img/parts/ram.webp';
</script>

<div class="wrapper">
	<section class="container">
		<figure>
			<img src={ramImage} alt="Pamięć RAM" />
		</figure>
		<article>
			<h2>Pamięć RAM</h2>
			<h3>Adata XPG LancerBlade 64 GB [4x16GB 6000MHz DDR5 CL30 DIMM]</h3>
			<p>
				Czy tylko ja mam wrażenie, że RAMU zawsze jakoś za mało? Człowiek włączy sobie przeglądarkę
				i nagle połowa pamięci znika. Dołóż do tego VS Code, kilka kontenerów w Dockerze, jakąś
				gierkę w tle i już wiesz że możesz się pożegnać z płynną pracą. Ale nie przy takim
				gabarycie, 64 GB już samo w sobie brzmi absurdalnie, a co dopiero jak będzie w akcji?
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
