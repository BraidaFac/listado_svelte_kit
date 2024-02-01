<script lang="ts">
	import type { PageData } from "../$types";
    export let data: PageData;
	const {info:ventas}= data;
	
	
     
	let header_row = {};
{
      header_row = ventas.reduce((acc, row) => Object.keys(row).length > Object.keys(acc).length ? row : acc, {});
    }


</script>
<div>

<table class="table">
			<thead>
				<tr>
					{#each Object.keys(header_row) as key}
                        <th>{key}</th>
                    {/each}
				</tr>
			</thead>
			 <tbody>
				{#each ventas as item }
					<tr>
						{#each Object.values(item) as value}
                            <td>{value}</td>
                        {/each}
					</tr>
				{/each}
			</tbody> 
		</table>


</div>