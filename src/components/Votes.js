import React, {memo, useContext} from 'react';
import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/core/styles';

import {AppContext} from '../store/AppContext';

const useStyles = makeStyles(theme => ({
    votes:{
        fontSize: 20,
        fontWeight: 700,
        display: 'flex',
        '& > span' : {
            maxWidth: 35,
            maxHeight: 30,
            cursor: 'pointer',
            '& > img': {
                filter: 'invert(56%) sepia(24%) saturate(7277%) hue-rotate(186deg) brightness(86%) contrast(81%)'
            }
        }
    }
}));


/**
   * Return the user image located in the assets folder.
   * @param {number} votes
   * @param {number} id
   * @return {any} a
**/ 
const Votes = ({votes, id})=>{
    const classes = useStyles();
    const {dispatch} = useContext(AppContext);
    
    const handleUpvote = () =>{
        dispatch({type: 'upVote', value: id});
    }

    return (
        <div className={classes.votes}>
            <span onClick={handleUpvote}>
                <img 
                    alt={`Product ${id} upvote`} 
                    src={require('../assets/ui/arrow.png')}
                />
            </span>
            {votes}
        </div>
    );
};


Votes.propTypes = {
    votes: PropTypes.number,
    id: PropTypes.number,
};
  

export default Votes