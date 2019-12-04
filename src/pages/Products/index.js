import React, { useContext, useMemo } from 'react';

import {AppContext} from '../../store/AppContext';

import '../../utils/seed';
import Table from './components/Table';

const Products = () =>{
    const { state , dispatch} = useContext(AppContext);

    useMemo(()=>{
        dispatch({type: 'setProducts', value: [...window.Seed.products]})
    },[dispatch]);

    return (
        <div>
            <h1> Popular Products</h1>
            <Table products={state.products}/>
        </div>
    )

}

export default Products;