import type { PageServerLoad } from './$types';
import { API_ENDPOINT, TOKEN } from '$env/static/private';

export const load: PageServerLoad = async ({ fetch }) => {
	const response = await fetch(`${API_ENDPOINT}/articulos?limit=10000`, {
		method: 'GET',
		headers: {
			'Content-Type': 'application/json',
			Authorization: TOKEN
		}
	});
	const data = (await response.json()).data;
	console.log(data.length);

	return {
		info: data
	};
};
