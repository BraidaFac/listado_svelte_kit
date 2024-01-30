import type { RequestHandler } from './$types';
import { API_ENDPOINT, TOKEN } from '$env/static/private';
import { json } from 'stream/consumers';

export const GET: RequestHandler = async ({ url }) => {
	const numero_comprobante = url.searchParams.get('numero_comprobante');

	const response = await fetch(
		`${API_ENDPOINT}/detallecomprobantesventas?numerocomprobante=${numero_comprobante}`,
		{
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
				Authorization: TOKEN
			}
		}
	);
	const items = (await response.json()).data;

	return new Response(JSON.stringify(items), {
		status: 200,
		headers: { 'Content-Type': 'application/json' }
	});
};
