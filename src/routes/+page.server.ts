export function load({ getClientAddress }) {
	return {
		taskbarInfo: {
			ip: getClientAddress(),
			dateTime: new Date()
		}
	};
}
