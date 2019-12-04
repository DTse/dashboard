import React, {memo} from 'react';

import TableItem from './TableItem';

const Table = memo(({products}) =>{
    return (
        <div>
            {products && products.map((product, key) => <TableItem key={'product-'+key+'-'+Math.random()} product={product}/>)}
        </div>
    )
});

export default Table;