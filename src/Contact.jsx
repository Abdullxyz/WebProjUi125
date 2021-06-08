import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { createMuiTheme, withStyles, ThemeProvider } from '@material-ui/core/styles';
import { green, grey } from '@material-ui/core/colors';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Paper from "@material-ui/core/Paper";
import { useState } from 'react';
import Map from './Map';
import PhoneInTalkIcon from '@material-ui/icons/PhoneInTalk';
import MailIcon from '@material-ui/icons/Mail';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import TextField from '@material-ui/core/TextField';

const BootstrapButton = withStyles({
    root: {
        boxShadow: 'none',
        textTransform: 'none',
        fontSize: 16,
        padding: '6px 12px',
        border: '1px solid',
        lineHeight: 1.5,
        backgroundColor: '#0063cc',
        borderColor: '#0063cc',
        '&:hover': {
            backgroundColor: '#0069d9',
            borderColor: '#0062cc',
            boxShadow: 'none',
        },
        '&:active': {
            boxShadow: 'none',
            backgroundColor: '#0062cc',
            borderColor: '#005cbf',
        },
        '&:focus': {
            boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
        },
    },
})(Button);

const theme = createMuiTheme({
    palette: {
        primary: {
            main: green[500],
        },
        secondary: {
            main: grey[50],
        },
    },
});

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
    typ0: {
        fontWeight: 'bold',
        fontSize: '25px',
        marginLeft: theme.spacing(3),
        marginTop: theme.spacing(2),
        marginBottom: theme.spacing(2),
        '@media (min-width:600px)': {
            fontSize: '35px',
            marginLeft: theme.spacing(5),
            marginTop: theme.spacing(4),
            marginBottom: theme.spacing(4),
        },
        [theme.breakpoints.up('md')]: {
            fontSize: '45px',
            marginLeft: theme.spacing(8),
            marginTop: theme.spacing(6),
            marginBottom: theme.spacing(6),
        },
    },
    typ1: {
        fontSize: '20px',
        marginLeft:'2%',
        marginTop: theme.spacing(8),
        marginBottom: theme.spacing(6),
        '@media (min-width:600px)': {
            fontSize: '30px',
            marginLeft:'2%',
            marginTop: theme.spacing(4),
            marginBottom: theme.spacing(4),
        },
        [theme.breakpoints.up('md')]: {
            fontSize: '18px',
            marginLeft:'2%',
            marginTop: theme.spacing(8),
            marginBottom: theme.spacing(6),
        },
    },
    typ2: {
        fontSize: '16px',
        '@media (min-width:600px)': {
            fontSize: '18px',
        },
        [theme.breakpoints.up('md')]: {
            fontSize: '18px',
        },
    },
    typ3: {
        fontWeight: 'bold',
        fontSize: '25px',
        marginTop: '20%',
        textAlign: 'center',
        '@media (min-width:600px)': {
            fontSize: '35px',
        },
        [theme.breakpoints.up('md')]: {
            fontSize: '45px',
        },
    },
    typ4: {
        textAlign: 'center',
        fontSize: '16px',
        marginTop: '6%',
        '@media (min-width:600px)': {
            fontSize: '18px',
        },
        [theme.breakpoints.up('md')]: {
            fontSize: '18px',
        },
    },
    typ5: {
        fontSize: '16px',
        marginTop: '8%',
        '@media (min-width:600px)': {
            fontSize: '18px',
        },
        [theme.breakpoints.up('md')]: {
            fontSize: '18px',
        },
    },
    typ6: {
        fontSize: '70%',
        marginTop: '5%',
        marginBottom: '5%',
        '@media (min-width:600px)': {
            fontSize: '120%',
        },
        [theme.breakpoints.up('md')]: {
            fontSize: '120%',
        },
    },
    div1: {
        width: '98%',
        marginLeft:'2%',
        '@media (min-width:600px)': {
            width: '95%',
            marginLeft: '2%',
        },
        [theme.breakpoints.up('md')]: {
            width: '60%',
            marginLeft: theme.spacing(0),
        },
    },
    div2: {
        marginRight: '10%',
        marginLeft:'2%',
        width: '95%',
        '@media (min-width:600px)': {
            width: '95%',
        },
        [theme.breakpoints.up('md')]: {
            width: '40%',
            marginLeft:'0%',
        },
    },
    textField: {
        background: '#ffffff',
        width: '100%',
        height: 200,
    },
    btn1: {
        marginTop: '10%',
        padding: "6px 6%",
        '@media (min-width:600px)': {
            padding: "11px 8%",
        },
        [theme.breakpoints.up('md')]: {
            padding: "11px 10%",
        },
    },

    svg: {
        width: '100%',
        height: '230px',
        '@media (min-width:600px)': {
            width: '100%',
            height: '400px',
        },
        [theme.breakpoints.up('md')]: {
            width: '100%',
            height: '400px',
        },
    },

    shapefill: {
        fill: '#FFFFFF',
    }
}));





const Location = () => {

    const classes = useStyles();
    const [value, setValue] = React.useState(2);
    const [age, setAge] = React.useState('');
    const handleChange = (event) => {
        setAge(event.target.value);
    };
    const [counter, setCounter] = useState(0);
    return (
        <ThemeProvider theme={theme}>
            <Header />
            <div>
                <div>
                    <Typography className={classes.typ0}>
                        Our Mission
                    </Typography>
                </div>

                <div className={classes.root}>
                    <div className={classes.div1}>
                        <Map />
                    </div>
                    <div className={classes.div2}>
                        <Typography className={classes.typ1}>
                            Keep track of whats happening with your data, change
                            permissions, and run reports against your data anywere in the
                            world. keep track of whats happening with your data, change
                            permissions.
                        </Typography>
                        <div style={{ display: 'flex', marginLeft: '8%' }}>
                            <div style={{ marginTop: '1.5%' }}>
                                <PhoneInTalkIcon fontSize="large" color="primary" />
                            </div>
                            <div style={{ marginLeft: '2%' }}>
                                <Typography className={classes.typ2} color="textSecondary">
                                    Phone
                                </Typography>
                                <Typography className={classes.typ2}>
                                    659-675-0133
                                </Typography>
                            </div>
                        </div>
                        <div style={{ display: 'flex', marginLeft: '8%', marginTop: '5%' }}>
                            <div style={{ marginTop: '1.5%' }}>
                                <MailIcon fontSize="large" color="primary" />
                            </div>
                            <div style={{ marginLeft: '2%' }}>
                                <Typography className={classes.typ2} color="textSecondary">
                                    Email
                                </Typography>
                                <Typography className={classes.typ2}>
                                    willms.kameron@kreiger.org
                                </Typography>
                            </div>
                        </div>
                        <div style={{ display: 'flex', marginLeft: '8%', marginTop: '5%', marginBottom: '14%' }}>
                            <div style={{ marginTop: '1.5%' }}>
                                <LocationOnIcon fontSize="large" color="primary" />
                            </div>
                            <div style={{ marginLeft: '2%' }}>
                                <Typography className={classes.typ2} color="textSecondary">
                                    Location
                                </Typography>
                                <Typography className={classes.typ2}>
                                    4481 Jesse Union
                                </Typography>
                            </div>
                        </div>
                    </div>
                </div>
                <div style={{backgroundColor: "#e3f2fd"}}>
                    <div style={{ display: 'flex', justifyContent: "center", alignItems: "center"}}>
                        <div>
                        <Typography className={classes.typ3}>
                            Business grade quality for all plans
                        </Typography>
                        <Typography className={classes.typ4} color="textSecondary">
                            After 3 days all of your offers will arrive and you have another 7 days to <br />
                            select your new company.
                        </Typography>
                        <div>
                            <Typography className={classes.typ5}>
                                Your Email Address
                            </Typography>
                            <TextField id="outlined-basic" variant="outlined" style={{ width: '100%', background: '#ffffff' }} />
                        </div>
                        <div>
                            <Typography className={classes.typ5}>
                                Subject
                            </Typography>
                            <TextField id="outlined-basic" variant="outlined" style={{ width: '100%', background: '#ffffff' }} />
                        </div>
                        <div>
                            <Typography className={classes.typ5}>
                                Message
                            </Typography>
                            <TextField id="outlined-basic" className={classes.textField} InputProps={{ className: classes.textField }} variant="outlined" />
                        </div>
                        <div style={{ textAlign: 'center', }}>
                            <Button variant="contained" color="primary" className={classes.btn1} >
                                <Typography color="secondary" className={classes.typ6}>Contact us</Typography>
                            </Button>
                        </div>
                        </div>
                    </div>
                    <div style={{height: '20vw', overflow: 'hidden'}}><svg viewBox="0 0 500 150" preserveAspectRatio="none" style={{height: '100%', width: '100%'}}><path d="M0.00,49.99 C255.93,144.00 255.93,145.00 500.00,49.99 L500.00,150.00 L0.00,150.00 Z" style={{stroke: 'none', fill: 'rgb(255, 255, 255)'}}></path></svg></div>
                </div>
            </div>

            <Paper elevation={0} style={{ borderBottom: '1px solid lightgrey' }} className={classes.paper} />

            <Footer />
        </ThemeProvider>
    );
};

export default Location;

