import type { PageServerLoad } from './$types';
import { API_ENDPOINT, TOKEN } from '$env/static/private';
import { error } from '@sveltejs/kit';

export const load: PageServerLoad = async ({ fetch }) => {
	const date_now = new Date();
	const since_date = new Date(date_now);
	since_date.setDate(since_date.getDate() - 15);
	const until_date = new Date(date_now);

	const since_date_string = since_date.toISOString().split('T')[0];
	const until_date_string = until_date.toISOString().split('T')[0];

	const response = await fetch(
		`${API_ENDPOINT}/ventas?limit=500&fechadesde=${since_date_string}&fechahasta=${until_date_string}`,
		{
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
				Authorization: TOKEN
			}
		}
	);
	if (response.status !== 200) {
		error(500, {
			message: 'Failed to fetch data from API'
		});
	}
	const data = await response.json();
	const ventas = data.data;

	return {
		info: ventas
	};
};
