<script lang="ts">
	import type { PageData } from "../$types";

    
    export let data: PageData;
	
	const {info}= data;
	
	const rows = info
    let header_row = rows[0];
    rows.forEach((row: any) => {
        if(Object.keys(row).length > Object.keys(header_row).length)
        header_row = row;
    });
     
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
				{#each rows as item (item.id)}
					<tr>
						{#each Object.values(item) as value}
							{#if typeof value === 'object'}
							<td>{value?.descripcion}</td>
							{:else}
                            <td>{value}</td>
							{/if}
                        {/each}
					</tr>
				{/each}
			</tbody> 
		</table>


</div>