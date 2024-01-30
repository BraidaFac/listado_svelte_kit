import type { PageServerLoad } from './$types';
import { API_ENDPOINT, TOKEN } from '$env/static/private';

export const load: PageServerLoad = async ({ fetch }) => {
	const date_now = new Date();
	const since_date = new Date(date_now);
	since_date.setDate(since_date.getDate() - 20);
	const until_date = new Date(date_now);

	const since_date_string = since_date.toISOString().split('T')[0];
	const until_date_string = until_date.toISOString().split('T')[0];

	const response = await fetch(
		`${API_ENDPOINT}/ventas?limit=1000&fechadesde=${since_date_string}&fechahasta=${until_date_string}`,
		{
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
				Authorization: TOKEN
			}
		}
	);
	const data = await response.json();
	const ventas = data.data;
	const detalles_ventas = [];
	const fetchComprobanteDetalle = async (venta) => {
		const response = await fetch(
			`${API_ENDPOINT}/detallecomprobantesventas?numerocomprobante=${venta.numerocomprobante}`,
			{
				method: 'GET',
				headers: {
					'Content-Type': 'application/json',
					Authorization: TOKEN
				}
			}
		);

		const items = await response.json();
		return items.data;
	};
	for (let i = 0; i < ventas.length; i++) {
		const venta = ventas[i];
		const detalle = await fetchComprobanteDetalle(venta);
		detalles_ventas.push(detalle);
	}

	return {
		detalles_ventas
	};
};