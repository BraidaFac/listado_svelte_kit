import type { PageServerLoad } from './marcas/$types';
import { API_ENDPOINT } from '$env/static/private';

export const load: PageServerLoad = async ({ fetch }) => {
	const response = await fetch(`${API_ENDPOINT}/gruposuperrubros?limit=1000`, {
		method: 'GET',
		headers: {
			'Content-Type': 'application/json',
			Authorization:
				'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOnsidXVpZCI6IjQ5NTM0NTczNDg5NTczNDg5NzUiLCJpc0FkbWluIjpmYWxzZSwidXNlcklkIjoiQURNSU4ifSwiaWF0IjoxNzA2NTY2NTkwLCJleHAiOjE3MDY2NTI5OTB9.jqW7VRTOiFhtuXpKlyMXOiMfuXCtWy1ldDfW3XPHQ-s'
		}
	});
	const data = (await response.json()).data;

	return {
		info: data
	};
};
