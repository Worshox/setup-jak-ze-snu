import { setContext, getContext } from 'svelte';

interface TaskbarInfo {
	ip: string;
	dateTime: Date;
}

interface Popup {
	open: boolean;
}

const keys = {
	taskbarInfo: 'SenOS:taskbarInfo',
	windows: 'SenOS:windows',
	popup: 'SenOS:popup',
	trash: 'SenOS:trash'
};

export function setTaskbarInfoContext(taskbarInfo: TaskbarInfo) {
	setContext(keys.taskbarInfo, taskbarInfo);
}

export function getTaskbarInfoContext() {
	return getContext(keys.taskbarInfo) as TaskbarInfo;
}

export function setWindowsContext(windows: WindowData[]) {
	setContext(keys.windows, windows);
}

export function getWindowsContext() {
	return getContext(keys.windows) as WindowData[];
}

export function setPopupContext(popup: Popup) {
	setContext(keys.popup, popup);
}

export function getPopupContext() {
	return getContext(keys.popup) as Popup;
}

export function setTrashContext(trash: Trash[]) {
	setContext('SenOS:trash', trash);
}

export function getTrashContext() {
	return getContext('SenOS:trash') as Trash[];
}
