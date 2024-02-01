import type { PageServerLoad } from './$types';
import { API_ENDPOINT, TOKEN } from '$env/static/private';
import { error } from '@sveltejs/kit';

export const load: PageServerLoad = async ({ fetch }) => {
	const response = await fetch(`${API_ENDPOINT}/familias?limit=100`, {
		method: 'GET',
		headers: {
			'Content-Type': 'application/json',
			Authorization: TOKEN
		}
	});
	if (response.status !== 200) {
		error(500, {
			message: 'Failed to fetch data from API'
		});
	}
	const data = (await response.json()).data;

	return {
		info: data
	};
};
