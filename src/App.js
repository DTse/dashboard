import React, { useContext } from 'react';
import { BrowserRouter } from "react-router-dom";

import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';

import CssBaseline from '@material-ui/core/CssBaseline';

import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Routes from './routes/Routes';

import { AppContext } from './store/AppContext';

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
	root: {
	  display: 'flex',
	},
	drawerHeader: {
	  display: 'flex',
	  alignItems: 'center',
	  padding: theme.spacing(0, 1),
	  ...theme.mixins.toolbar,
	  justifyContent: 'flex-end',
	},
	content: {
		flexGrow: 1,
		padding: theme.spacing(3),
		transition: theme.transitions.create('margin', {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.leavingScreen,
		}),
		marginLeft: -drawerWidth,
	},
	contentShift: {
		transition: theme.transitions.create('margin', {
			easing: theme.transitions.easing.easeOut,
			duration: theme.transitions.duration.enteringScreen,
		}),
		marginLeft: 0,
	},
}));

const App = () => {
  	const classes = useStyles();
    const { state } = useContext(AppContext);
    return (
		<BrowserRouter>
			<div className={classes.root}>
				<CssBaseline />
				<Header />
				<Sidebar />
				<main
					className={clsx(classes.content, {
						[classes.contentShift]: state.open,
					})}
				>
					<div className={classes.drawerHeader} />
					<Routes />
				</main>
			</div>
		</BrowserRouter>
    );
}

export default App;