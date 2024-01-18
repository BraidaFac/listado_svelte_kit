import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async ({fetch}) => {
        const response = await fetch('Listado.csv');
        const data = await response.text();
        const rows = data.split('\n').slice(2);
        const array = rows.map((row,i) => {
            const columns = row.split(';');
            return {
                id: i,
                codigo: columns[0],
                descripcion: columns[1],
                marca: columns[2],
                tipo_articulo: columns[3],
                clase: columns[4],
                detalle : columns[5],
                activo : columns[6],
                stock_negativo: columns[7],
                fecha_vencimiento: columns[8],
                certificado_calidad: columns[9],
                codigo_barra: columns[10],
                fecha_alta: columns[11], 
                publicado_web: columns[12],
                destacado_web : columns[13],   
            }
        });
       return { rows : array.slice(0, 2500)}
    }

    
 
