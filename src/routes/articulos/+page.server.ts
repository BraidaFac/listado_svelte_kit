import type { PageServerLoad } from './$types';
import { API_ENDPOINT, TOKEN } from '$env/static/private';
import { error } from '@sveltejs/kit';

export const load: PageServerLoad = async ({ fetch, url }) => {
	const page = url.searchParams.get('p');

	if (page && isNaN(+page)) {
		error(500, {
			message: 'Invalid page number'
		});
	}
	const offset = (+page - 1) * 200;
	const response = await fetch(`${API_ENDPOINT}/articulos?offset=${offset}&limit=200`, {
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
	const data = await response.json();
	const count = data.count;
	const pages = Math.ceil(count / 200);

	return {
		info: data.data,
		pages
	};
};
