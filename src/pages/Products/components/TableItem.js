import React, {memo} from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

import ProductImage from '../../../components/ProductImage';
import UserAvatar from '../../../components/UserAvatar';
import Votes from '../../../components/Votes';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex', 
        flexDirection: 'row',
        alignItems: 'flex-start',
        width: '100%',
        maxWidth: 600,
        padding: '10px 0px',
        [theme.breakpoints.down('xs')]:{
            flexDirection: 'column'
        }
    },
    title:{
        margin: '8px 0 0 0',
        lineHeight: '20px',
        '&:hover':{
            textDecoration: 'underline'
        },
        '& > a': {
            fontSize: 14,
            textDecoration: 'none',
            color: '#3483cb'
        }
    },
    author:{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
        marginTop: 8
    },
    authorDescr:{
        marginRight: 5,
        color: '#757575',
        fontSize: 13,
        marginTop: 5
    }
}));
/**
   * Return the user image located in the assets folder.
   * @param {object} product
   * @return {any}
**/ 
const TableItem = ({product})=>{
    const classes = useStyles();

    const {
        id,
        title,
        description,
        url,
        votes,
        submitterAvatarUrl,
        productImageUrl
    } = product;

    return(
        <div className={classes.root}>
            <ProductImage 
                alt={`Product ${id}`}
                src={productImageUrl}
            />
            <div>
                <Votes id={id} votes={votes} />
                <h2 className={classes.title}>
                    <Link to={`/${url}`}>
                        {title}
                    </Link>
                </h2>
                <div>{description}</div>
                <div className={classes.author}>
                    <span className={classes.authorDescr}>Submitted by: </span>
                    <UserAvatar 
                        alt={`User of product ${id}`} 
                        src={submitterAvatarUrl} 
                    />
                </div>
            </div>
        </div>
    )
}

TableItem.propTypes = {
    product: PropTypes.object.isRequired,
};

export default TableItem