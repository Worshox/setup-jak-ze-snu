import 'unplugin-icons/types/svelte';

declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface PageState {}
		// interface Platform {}
	}

	interface WindowData {
		id: string;
		appName: string;
	}

	interface Trash {
		image: string;
		name: string;
		date: Date;
		size: string;
	}
}

export {};
