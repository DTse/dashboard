import React, {memo} from 'react';

import TableItem from './TableItem';
const Table = memo(({products}) =>{
    return (
        <>
            {products && products.map((product, key) => <TableItem key={'product-'+key+'-'+Math.random()} product={product}/>)}
        </>
    )
});

export default Table;