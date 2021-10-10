import React from 'react'
import { makeStyles } from '@material-ui/core/styles' 
import { AppBar, IconButton, SortIcon, Toolbar } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        justifyContent: "center",
        alignItems: 'center',
        height: '100vh',
    },
    appBar: {
        background: 'none',
        fontFamily: 'Acme'
    },
    appBarTitle: {
        flexGrow: '1',
    },
    appBarWrapper: {
        width: '90%',
        margin: '0 auto'
    },
    colorText: {
        color: '#CEE5D0'
    },
    colorTextTwo: {
        color: '#F3F0D7'
    },
    title: {
        color: '#fff',
        fontFamily: 'Acme',
        fontSize: '5rem'
    },
    text: {
        color: '#000',
        fontFamily: 'Acme',
        fontSize: '1rem'

    },
    container: {
        textAlign: 'center'
    }
}))
function Header() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <AppBar className={classes.appBar} elevation={0}>
                <Toolbar className={classes.appBarWrapper}>
                <h1 className={classes.appBarTitle}><span className={classes.colorTextTwo}>Vanilla</span><span className={classes.colorText}>Pi</span></h1>
                </Toolbar>
            </AppBar>
            <div className={classes.container}>
            <h1 className={classes.title}><span className={classes.colorTextTwo}>Vanilla</span><span className={classes.colorText}>Pi</span></h1>

                <h1 className={classes.text}>
                    Coming Soon!
                </h1>
            </div>
        </div>

    );
  }
  
  export default Header;