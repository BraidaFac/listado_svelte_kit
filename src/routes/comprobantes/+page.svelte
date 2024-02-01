<script lang="ts">
	import type { PageData } from "../$types";
	import { onMount } from "svelte";
    export let data: PageData;
	let detalles_ventas = [];
	const {info:ventas}= data;
	let loading= true;
	onMount(async () => {
	 try {
		for(let i=0; i<ventas.length; i++){
			const response = await fetch(`http://localhost:5173/api?numero_comprobante=${ventas[i].numerocomprobante}`);
			const detalles = await response.json();
			detalles_ventas.push(detalles);
		}
		detalles_ventas = detalles_ventas.reduce((acc, detalle) => [...acc, ...detalle], []);
		loading= false;
			
    } catch (error) {
  }
	})
	
	let header_row = {};
$:{
	if (detalles_ventas.length > 0) {
      header_row = detalles_ventas.reduce((acc, row) => Object.keys(row).length > Object.keys(acc).length ? row : acc, {});
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
				{#each detalles_ventas as item }
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