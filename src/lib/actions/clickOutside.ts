import type { ActionReturn } from 'svelte/action';

export default function clickOutside(node: HTMLElement, callback: () => void): ActionReturn {
	function handleClick(event: MouseEvent) {
		if (
			!node.contains(event.target as Node) &&
			!node.previousElementSibling?.contains(event.target as Node)
		) {
			callback();
		}
	}

	document.addEventListener('mousedown', handleClick);

	return {
		destroy() {
			document.removeEventListener('mousedown', handleClick);
		}
	};
}
