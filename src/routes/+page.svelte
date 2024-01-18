<script lang="ts">
    
	export let data
    
	const { rows } = data;
     
</script>
<div>
{#if rows.length === 0}
        <p>Loading...</p>
{:else }
<table class="table">
			<thead>
				<tr>
					<th>ID</th>
                    <th>Codigo</th>
                    <th>Descripcion</th>
                    <th>Marca</th>
                    <th>Tipo Articulo</th>
                    <th>Clase</th>
                  <!--   <th>Detalle</th>
                    <th>Activo</th>
                    <th>Stock Negativo</th>
                    <th>Fecha Vencimiento</th>
                    <th>Certificado Calidad</th>
                    <th>Codigo Barra</th>
                    <th>Fecha Alta</th>
                    <th>Publicado Web</th>
                    <th>Destacado Web</th> -->
				</tr>
			</thead>
			<tbody>
				{#each rows as item (item.id)}
					<tr>
						<td>{item.id}</td>
                        <td>{item.codigo}</td>
                        <td>{item.descripcion}</td>
                        <td>{item.marca}</td>
                        <td>{item.tipo_articulo}</td>
                        <td>{item.clase}</td>
                        <!-- <td>{item.detalle}</td>
                        <td>{item.activo}</td>
                        <td>{item.stock_negativo}</td>
                        <td>{item.fecha_vencimiento}</td>
                        <td>{item.certificado_calidad}</td>
                        <td>{item.codigo_barra}</td>
                        <td>{item.fecha_alta}</td>
                        <td>{item.publicado_web}</td>
                        <td>{item.destacado_web}</td> -->
					</tr>
				{/each}
			</tbody>
		</table>
{/if }


</div>