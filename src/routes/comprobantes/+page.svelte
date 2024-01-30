<script lang="ts">
	import type { PageData } from "../$types";
	import { onMount } from "svelte";
    export let data: PageData;
	let detalles_ventas = [];
	const {info:ventas}= data;
	let loading= true;
	onMount(async () => {
	 try {
			const promises = ventas.map(async (venta) => {
			const response = await fetch(`http://localhost:5173/api?numero_comprobante=${venta.numerocomprobante}`);
			return response.json();
    });
    const detallesArray = await Promise.all(promises);
    detalles_ventas = detallesArray.reduce((acc, detalle) => [...acc, ...detalle], []);
  } catch (error) {
    console.error('Error al realizar las solicitudes:', error);
  }
	loading= false;})
	
	let header_row = {};
	let rows = [];
$:{
	if (detalles_ventas.length > 0) {
      rows = [].concat(...detalles_ventas);
      header_row = rows.reduce((acc, row) => Object.keys(row).length > Object.keys(acc).length ? row : acc, {});
    }
}

</script>
<div>
{#if loading}
        <p>Loading...</p>
{:else }
<table class="table">
			<thead>
				<tr>
					{#each Object.keys(header_row) as key}
                        <th>{key}</th>
                    {/each}
				</tr>
			</thead>
			 <tbody>
				{#each rows as item }
					<tr>
						{#each Object.values(item) as value}
                            <td>{value}</td>
                        {/each}
					</tr>
				{/each}
			</tbody> 
		</table>
{/if }


</div>