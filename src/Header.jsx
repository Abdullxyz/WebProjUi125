import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { Paper } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import { Route } from 'react-router-dom';


const useStyles = makeStyles((theme) => ({
    root: {
        display: 'block',
        '@media (min-width:600px)': {
            display: 'block',
        },
        [theme.breakpoints.up('md')]: {
            flexGrow: 1,
            display: 'flex',
        },
    },
    root1: {
        display: 'flex',
        '@media (min-width:600px)': {
            display: 'flex',
        },
        [theme.breakpoints.up('md')]: {
            width: '30%',
            flexGrow: 1,
            display: 'flex',
            marginLeft: '0%',
        },
    },
    img: {
        marginTop: '0%',
        marginLeft: '5%',
        width: 220,
        height: 100,
        '@media (min-width:600px)': {
            width: 220,
            height: 100,
            marginLeft: '5%',
        },
        [theme.breakpoints.up('md')]: {
            width: 220,
            height: 100,
            marginLeft: '0%',
        },
    },
    buttn: {
        marginLeft: theme.spacing(0),
    },
    btn1: {
        marginTop: '8%',
        '@media (min-width:600px)': {
            marginTop: '15%',
        },
        [theme.breakpoints.up('md')]: {
            marginTop: '15%',
        },
    },
    buttnspacing: {
        fontSize: 14,
        marginLeft: '2%',
    },
    avatr: {
        width: theme.spacing(7),
        height: theme.spacing(7),
        '@media (min-width:600px)': {
            width: theme.spacing(10),
            height: theme.spacing(10),
        },
        [theme.breakpoints.up('md')]: {
            marginLeft: '20%',
            width: theme.spacing(10),
            height: theme.spacing(10),
        },
    },
    div2: {
        display: 'block',
        justifyContent: "center",
        alignItems: "center",
        marginLeft: '12%',
        width: '80%',
        '@media (min-width:600px)': {
            display: 'block',
            justifyContent: "center",
            alignItems: "center",
            marginLeft: '12%',
            width: '80%',
        },
        [theme.breakpoints.up('md')]: {
            display: 'block',
            justifyContent: "center",
            alignItems: "center",
            marginLeft: '5%',
            width: '80%',
        },
    },
}));


const Header = () => {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const anchorRef = React.useRef(null);

    const handleToggle = () => {
        setOpen((prevOpen) => !prevOpen);
    };

    const handleClose = (event) => {
        if (anchorRef.current && anchorRef.current.contains(event.target)) {
            return;
        }

        setOpen(false);
    };

    function handleListKeyDown(event) {
        if (event.key === 'Tab') {
            event.preventDefault();
            setOpen(false);
        }
    }

    return (
        <div className={classes.root}>
            <AppBar position="static" color="white">
                <Toolbar className={classes.root}>
                    <div style={{ display: 'flex', justifyContent: "center", alignItems: "center" }}>
                        <img src="data:image/png;base64,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" className={classes.img} />
                    </div>
                    <div className={classes.div2} >
                        <Route render={({ history }) => (
                            <Button onClick={() => { history.push() }}>Feed</Button>
                        )} />
                        <Route render={({ history }) => (
                            <Button className={classes.buttnspacing} onClick={() => { history.push() }}>Event</Button>
                        )} />
                        <Route render={({ history }) => (
                            <Button className={classes.buttnspacing} onClick={() => { history.push() }}>Messages</Button>
                        )} />
                        <Route render={({ history }) => (
                            <Button className={classes.buttnspacing} onClick={() => { history.push() }}>Discussions</Button>
                        )} />
                        <Route render={({ history }) => (
                            <Button className={classes.buttnspacing} onClick={() => { history.push() }}>Offices</Button>
                        )} />
                        <Route render={({ history }) => (
                            <Button className={classes.buttnspacing} onClick={() => { history.push() }}>Training</Button>
                        )} />
                        <Route render={({ history }) => (
                            <Button className={classes.buttnspacing} onClick={() => { history.push() }}>Forum</Button>
                        )} />
                    </div>


                    <div className={classes.root1} style={{ display: 'flex', justifyContent: "center", alignItems: "center" }}>
                        <Avatar className={classes.avatr} src="https://media.istockphoto.com/vectors/user-avatar-profile-icon-black-vector-illustration-vector-id1209654046?k=6&m=1209654046&s=612x612&w=0&h=sNiHvwJm5SPrpTCjz-7eqSDqew5-f2hASM2FrGLtMJ4=" />
                        <div>
                            <Button
                                ref={anchorRef}
                                aria-controls={open ? 'menu-list-grow' : undefined}
                                aria-haspopup="true"
                                onClick={handleToggle}
                                className={classes.btn1}>
                                Hello Debra
                            <Typography className={classes.v}>⮟</Typography>
                            </Button>
                            <Popper open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
                                {({ TransitionProps, placement }) => (
                                    <Grow
                                        {...TransitionProps}
                                        style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
                                    >
                                        <Paper>
                                            <ClickAwayListener onClickAway={handleClose}>
                                                <MenuList autoFocusItem={open} id="menu-list-grow" onKeyDown={handleListKeyDown}>
                                                    <Route render={({ history }) => (
                                                        <MenuItem onClick={() => { history.push('/profile') }}>Profile</MenuItem>
                                                    )} />
                                                    <MenuItem onClick={handleClose}>My account</MenuItem>
                                                    <MenuItem onClick={handleClose}>Logout</MenuItem>
                                                </MenuList>
                                            </ClickAwayListener>
                                        </Paper>
                                    </Grow>
                                )}
                            </Popper>
                        </div>
                    </div>
                </Toolbar>
            </AppBar>
        </div>
    )
};

export default Header;
