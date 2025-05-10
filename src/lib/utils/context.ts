import { setContext, getContext } from 'svelte';

interface TaskbarInfo {
	ip: string;
	dateTime: Date;
}

const keys = {
	taskbarInfo: 'SenOS:taskbarInfo'
};

export function setTaskbarInfoContext(taskbarInfo: TaskbarInfo) {
	setContext(keys.taskbarInfo, taskbarInfo);
}

export function getTaskbarInfoContext() {
	return getContext(keys.taskbarInfo) as TaskbarInfo;
}
