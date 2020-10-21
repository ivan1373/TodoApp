import React from 'react'

// Material-UI
import { makeStyles } from '@material-ui/core/styles';
import {Container, Paper} from '@material-ui/core';
import Typography from '@material-ui/core/Typography';

// Components
import TodoList from './TodoList'

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        background: '#396afc',  /* fallback for old browsers */
        background: '-webkit-linear-gradient(to right, #396afc, #2948ff)',  /* Chrome 10-25, Safari 5.1-6 */
        background: 'linear-gradient(to right, #396afc, #2948ff)', /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
        position: 'absolute',
        //height: '100%',
        top: '0',
        bottom: '0',
        left: '0',
        right: '0',
        overflow: 'auto',
        margin: 'auto',
    },
    container: {
        position: 'webkit-sticky',
        position: 'sticky',
        top: '15%',
        /*bottom: '0',
        left: '0',
        right: '0',*/
       // padding: theme.spacing(2),
        //margin: 'auto',
        maxWidth: '500px',
    },
    paper: {
        paddingTop: '24px',
        paddingBottom: '36px',
    }
}));

const Layout = () => {
    const classes = useStyles()
    return (
        <div className={classes.root}>
            <Container className={classes.container}>
                <Typography style={{color:'white', textAlign:'center'}} variant="h3" gutterBottom>
                    Todo App
                </Typography>
                <Paper className={classes.paper}>
                    <TodoList />
                </Paper>
            </Container>
        </div>

    )
}

export default Layout
