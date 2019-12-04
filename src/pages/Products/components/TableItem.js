import React, {memo} from 'react';
import {Link} from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex', 
        flexDirection: 'row',
        alignItems: 'center',
        padding: '20px 0px'
    },
    title:{
        margin: '10px 0 0 0',
        '&:hover':{
            textDecoration: 'underline'
        },
        '& > a': {
            fontSize: 16,
            textDecoration: 'none',
            color: '#2196f3'
        }
    },
    productImg: {
        display: 'flex',
        position: 'relative',
        maxWidth: 115,
        overflow: 'hidden',
        flex: '1 0',
        marginRight: 20,
        '&::before':{
            content: '""',
            display: 'block',
            paddingTop: '82.91%'
        },
        '& > img':{
            position: 'absolute',
            top:0,
            width: '100%',
            minHeight: 70,
            display: 'block'
        }
    },
    author:{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
        marginTop: 10
    },
    authorImg:{
        height: 25,
        width: 25,
        display: 'inline-block',
        borderRadius: '50%'
    },
    authorDescr:{
        marginRight: 5,
        color: '#757575',
        fontSize: 13,
        marginTop: 5
    },
    votes:{
        fontSize: 20,
        fontWeight: 700
    }
}));

const TableItem = memo(({product})=>{
    const classes = useStyles();


    return(
        <div className={classes.root}>
            <div className={classes.productImg}><img alt={`Product ${product.id}`} src={require('../../../'+product.productImageUrl)}/></div>
            <div>
                <div className={classes.votes}>{product.votes}</div>
                <h2 className={classes.title}><Link to={`/${product.url}`}>{product.title}</Link></h2>
                <div>{product.description}</div>
                <div className={classes.author}><span className={classes.authorDescr}>Submitted by: </span><img className={classes.authorImg} alt={`User of product ${product.id}`} src={require('../../../'+product.submitterAvatarUrl)} /></div>
            </div>
        </div>
    )
})

export default TableItem