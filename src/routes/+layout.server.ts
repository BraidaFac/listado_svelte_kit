import type { LayoutServerLoad } from './$types';
import { API_ENDPOINT, USER_API, PASSWORD_API, DEVICE } from '$env/static/private';

/* export const load: LayoutServerLoad = async ({ fetch }) => {
	const formData = new URLSearchParams();
	formData.append('username', USER_API);
	formData.append('password', PASSWORD_API);
	formData.append('deviceinfo[model]', '0');
	formData.append('deviceinfo[platform]', '0');
	formData.append('deviceinfo[uuid]', '495345734895734897');
	formData.append('deviceinfo[version]', '0');
	formData.append('deviceinfo[manufacturer]', '0');
	const response = await fetch(`${API_ENDPOINT}/auth/login`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/x-www-form-urlencoded'
		}
	});
	console.log(response);} */
