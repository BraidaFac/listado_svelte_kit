<script lang="ts">
	import type { PageData } from "../$types";
	import {page} from '$app/stores';
    export let data: PageData;
	const {info,pages}= data;

	const rows = info
    let header_row = rows[0];
    rows.forEach((row: any) => {
        if(Object.keys(row).length > Object.keys(header_row).length)
        header_row = row;
    });
     $:current_page= (Number($page.url.searchParams.get('p'))-1 || 0)
</script>
<div>
<div class="flex gap-6 w-full mx-auto z-50 fixed top-0 left-0 justify-between bg-black text-white text-2xl  ">
	{#each Array(pages) as _,i}
			<a class={current_page===i ? 'text-red-600':''} href="/articulos?p={i+1}">{i+1}</a>
	{/each}
</div>
<table class="table relative mt-11">
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
                            <td>{value}</td>
                        {/each}
					</tr>
				{/each}
			</tbody> 
		</table>


</div>