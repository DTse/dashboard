import React, {memo, useMemo} from 'react';
import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    authorImg:{
        height: 25,
        width: 25,
        display: 'inline-block',
        borderRadius: '50%'
    }
}));

const areEqual = (prevProps, nextProps) => prevProps.src === nextProps.src;

/**
   * Return the user image located in the assets folder.
   * @param {string} src
   * @param {string} alt
   * @return {any} img
**/ 
const UserAvatar = memo(({src, alt})=>{
    const classes = useStyles();
    return useMemo(() =>{
    return (
        <img 
            className={classes.authorImg}
            alt={alt} 
            src={require(`../assets/avatars/${src}`)} 
        />
    );
    }, [src, alt, classes.authorImg])
}, areEqual)


UserAvatar.propTypes = {
    alt: PropTypes.string,
    src: PropTypes.string
  };  

export default UserAvatar