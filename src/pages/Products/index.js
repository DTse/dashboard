import React, { memo } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import {useAppContext} from '../../store/AppContext';

import Table from './components/Table';

const useStyles = makeStyles(() => ({
	root: {
	  display: 'flex',
	  alignItems: 'center',
      width: '100%',
      flexDirection: 'column'
    }
}));

/**
   * Return the products page.
   * @return {any}
**/ 
const Products = memo(() =>{
    const classes = useStyles();
    const { state } = useAppContext();

    return (
        <div className={classes.root}>
            <h1> Popular Products</h1>
            <Table products={state.products}/>
        </div>
    )
})

export default Products;