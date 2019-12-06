import React, {memo} from 'react';
import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    productImg: {
        display: 'flex',
        position: 'relative',
        maxWidth: 120,
        overflow: 'hidden',
        flex: '1 0',
        marginRight: 20,
        width: '100%',
        [theme.breakpoints.down('xs')]:{
            maxWidth: '100%'
        },
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
    }
}));

/**
   * Return the product image located in the assets folder.
   * @param {string} src
   * @param {string} alt
   * @return {number} a
**/ 
const ProductImage = memo(({src, alt}) =>{
    const classes = useStyles();

    return (
        <div className={classes.productImg}>
            <img 
                alt={alt} 
                src={require(`../assets/products/${src}`)}
            />
        </div>
    );
});


ProductImage.propTypes = {
    alt: PropTypes.string,
    src: PropTypes.string,
};
  

export default ProductImage;