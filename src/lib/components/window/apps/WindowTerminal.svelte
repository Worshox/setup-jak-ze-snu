<script lang="ts">
	import { onMount } from 'svelte';
	import { getWindowsContext } from '$lib/utils/context';

	let { id } = $props();

	let windows = getWindowsContext();

	let input: string = $state('');
	let output: string[] = $state([
		'Worshox SenOS [Version 0.0.1]',
		'© 2025 Wojciech Chrzan. All rights reserved.',
		'',
		'Wpisz "help", aby sprawdzić dostępne komendy',
		''
	]);

	function handleCommand(command: string) {
		const trimmed = command.trim();
		if (!trimmed) return;

		output.push(`W:\\SenOS> ${trimmed}`);

		switch (trimmed.toLowerCase()) {
			case 'help':
				output.push(
					'Dostępne komendy: help, clear, about, whoami, systeminfo, komputronik, winner, exit'
				);
				break;
			case 'clear':
				output.splice(0, output.length);
				break;
			case 'about':
				output.push(
					'SenOS v0.0.1, nowoczesny supersystem operacyjny działający w chmurze i na specjalnie przygotowanej maszynie do konkursu komputronika.'
				);
				break;
			case 'whoami':
				output.push('Wojciech Chrzan PC');
				break;
			case 'systeminfo':
				output.push('----- Informacje o systemie -----');
				output.push('Nazwa hosta: Wojciech Chrzan PC');
				output.push('System operacyjny: SenOS');
				output.push('Wersja systemu: 0.0.1');
				output.push('Twórca: Wojciech Chrzan');
				output.push('');
				output.push('----- Informacje o sprzęcie -----');
				output.push('Procesor: Ryzen 7 9800X3D');
				output.push('Karta graficzna: ???');
				output.push('Płyta główna: ASRock B850 Riptide WiFi');
				output.push('Pamięć operacyjna: 2x16GB 6000MHz DDR5 CL30 DIMM Adata XPG LancerBlade');
				output.push('Pamięć masowa: 2TB + 1TB Lexar NM790 Pci-e NVMe');
				output.push('Zasilacz: NZXT C1200 V2 1200W 80+ Gold ATX 3.0');
				output.push('');
				output.push('----- Informacje o dodatkach -----');
				output.push('Monitor: LG 27GX790A-B - 27" | OLED | QHD | 0.03ms | 480Hz');
				output.push('+ ramię na monitor ENDORFY Atlas Double');
				output.push('Obudowa: NZXT H6 Flow czarna');
				output.push('+ wentylator NZXT F120 RGB 120mm czarny');
				output.push('Podkładka: KRUX Space Carpet MAX');
				output.push('');
				output.push('Dostawca sprzętu i dodatków: Komputronik');
				output.push('');
				break;
			case 'komputronik':
				output.push('https://www.komputronik.pl/cart/shared/show/radQmj0Bdx-0NkybKM4pe');
				window.open('https://www.komputronik.pl/cart/shared/show/radQmj0Bdx-0NkybKM4pe', '_blank');
				break;
			case 'winner':
				output.push('A więc mówisz że pownienem wygrać? Dzięki 🥳');
				launchConfetti();
				break;
			case 'ania':
				output.push('Kocham moją dziewczynę Anię');
				break;
			case 'exit':
				windows.splice(
					windows.findIndex((window) => window.id === id),
					1
				);
				break;
			default:
				output.push(`'${trimmed}' nie zostało rozpoznane jako komenda.`);
		}

		input = '';
	}

	function launchConfetti(): void {
		const duration = 5 * 1000;
		const animationEnd = Date.now() + duration;
		const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

		function randomInRange(min: number, max: number): number {
			return Math.random() * (max - min) + min;
		}

		const interval = setInterval(function () {
			const timeLeft = animationEnd - Date.now();

			if (timeLeft <= 0) {
				return clearInterval(interval);
			}

			var particleCount = 50 * (timeLeft / duration);
			confetti({
				...defaults,
				particleCount,
				origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 }
			});
			confetti({
				...defaults,
				particleCount,
				origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 }
			});
		}, 250);
	}

	function onKeyDown(e: KeyboardEvent) {
		if (e.key === 'Enter') {
			handleCommand(input);
		}
	}

	let commandInput: HTMLInputElement;

	onMount(() => {
		commandInput.focus();
	});
</script>

<main>
	<pre>
        {#each output as line}{line}
		{/each}W:\SenOS&gt; <input bind:this={commandInput} bind:value={input} onkeydown={onKeyDown} />
	</pre>
</main>

<style>
	main {
		height: 100%;
		padding: 0.5rem;
		border-radius: 0.5rem;
		background: #000000;
		font-family: monospace;
		font-size: 1rem;
		color: #ffffff;
		overflow-y: auto;
	}

	pre {
		white-space: pre-line;
	}

	input {
		background: transparent;
		outline: none;
	}
</style>
