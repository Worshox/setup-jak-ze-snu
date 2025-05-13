<script>
	import Bg1 from '$lib/components/presentation/background/Bg1.svelte';
	import Bg2 from '$lib/components/presentation/background/Bg2.svelte';
	import Bg3 from '$lib/components/presentation/background/Bg3.svelte';
	import Bg4 from '$lib/components/presentation/background/Bg4.svelte';
</script>

<div class="bg-1"></div>
<Bg1 />
<div class="separator"></div>
<Bg2 />
<div class="bg-2"></div>
<div class="rotator">
	<Bg2 />
</div>
<div class="separator"></div>
<Bg3 />
<div class="bg-3"></div>
<div class="rotator">
	<Bg3 />
</div>
<div class="separator"></div>
<Bg4 />
<div class="bg-4"></div>
<div class="rotator">
	<Bg4 />
</div>
<div class="separator"></div>
<div class="rotator">
	<Bg1 />
</div>
<div class="bg-1-2"></div>
<Bg1 />
<div class="separator"></div>
<Bg2 />
<div class="bg-2"></div>
<div class="rotator">
	<Bg2 />
</div>
<div class="separator"></div>
<Bg3 />
<div class="bg-3"></div>
<div class="rotator">
	<Bg3 />
</div>
<div class="separator"></div>
<Bg4 />
<div class="bg-4"></div>
<div class="rotator">
	<Bg4 />
</div>
<div class="separator"></div>
<div class="rotator">
	<Bg1 />
</div>
<div class="bg-1-3"></div>

<style>
	.bg-1 {
		height: 30rem;
		background: linear-gradient(to right, #2daefd, #49f770);
		margin-bottom: -1px;
	}

	.bg-2 {
		height: 10rem;
		background: linear-gradient(to right, #eb144c, #fcb900);
		margin-bottom: -1px;
	}

	.bg-3 {
		height: 10rem;
		background: linear-gradient(to right, #9900ef, #f78da7);
		margin-bottom: -1px;
	}

	.bg-4 {
		height: 10rem;
		background: linear-gradient(to right, #eb144c, #8ed1fc);
		margin-bottom: -1px;
	}

	.bg-1-2 {
		height: 10rem;
		background: linear-gradient(to right, #2daefd, #49f770);
		margin-top: -1px;
	}

	.bg-1-3 {
		height: 50rem;
		background: linear-gradient(to right, #2daefd, #49f770);
		margin-top: -1px;
	}

	.separator {
		margin-top: -20%;
	}

	.rotator {
		margin-top: -1px;
		scale: 1 -1;
	}
</style>
