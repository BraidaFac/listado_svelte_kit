import type { PageServerLoad } from './$types';
import { API_ENDPOINT, TOKEN } from '$env/static/private';
import { error } from '@sveltejs/kit';
export const load: PageServerLoad = async ({ fetch }) => {
	const PREVIOUS_DAY = 20;
	const dates: string[] = [];
	const promises: Promise<Response>[] = [];
	const date_now = new Date();
	const since_date = new Date(date_now);
	since_date.setDate(since_date.getDate() - PREVIOUS_DAY);
	Array.from({ length: PREVIOUS_DAY }, () => {}).forEach((_, i) => {
		const date = new Date(since_date);
		date.setDate(date.getDate() + i + 1);

		dates.push(date.toISOString().split('T')[0]);
	});
	dates.forEach((date) => {
		promises.push(
			fetch(`${API_ENDPOINT}/detallecomprobantesventas?fechamodificacion=${date}`, {
				method: 'GET',
				headers: {
					'Content-Type': 'application/json',
					Authorization: TOKEN
				}
			})
		);
	});

	const responses = await Promise.all(promises);
	const data = await Promise.all(responses.map((response) => response.json()));
	const info = data.reduce((acc, { data }) => acc.concat(data), []);
	if (info.length === 0) error(404, { message: 'No data found' });
	else {
		if (!info[0]) {
			error(500, { message: 'Failed to fetch data from API' });
		}
	}
	return {
		info
	};
};
