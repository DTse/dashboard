import React from 'react';
import PropTypes from 'prop-types';

import {makeStyles} from '@material-ui/core/styles';
import {sortNumbers} from '../../../utils/sortNumbers'

import TableItem from './TableItem';

const useStyles = makeStyles(theme => ({
	root: {
	  display: 'flex',
	  alignItems: 'center',
      width: '100%',
      flexDirection: 'column'
    }
}));

/**
   * Return the user image located in the assets folder.
   * @param {array} products
   * @return {any}
**/ 
const Table = ({products}) =>{
    const classes = useStyles();

    let productsTable = products.sort(sortNumbers('votes', 'desc')).map((product, key) => <TableItem key={'product-'+key} product={product}/>)

    return (
        <div className={classes.root}>
            {productsTable}
        </div>
    )
};

Table.propTypes = {
    products: PropTypes.array.isRequired
};

export default Table;