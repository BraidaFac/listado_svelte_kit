import type { PageServerLoad } from './$types';
import { API_ENDPOINT, TOKEN } from '$env/static/private';

export const load: PageServerLoad = async ({ fetch }) => {
	const response = await fetch(`${API_ENDPOINT}/marcas?limit=1000`, {
		method: 'GET',
		headers: {
			'Content-Type': 'application/json',
			Authorization: TOKEN
		}
	});
	const data = (await response.json()).data;
	co);
	
	return {
		info: data
	};
};
