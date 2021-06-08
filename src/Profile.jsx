import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { createMuiTheme, withStyles, ThemeProvider } from '@material-ui/core/styles';
import { green, grey } from '@material-ui/core/colors';
import Header from './Header';
import Footer from './Footer';
import TextField from '@material-ui/core/TextField';

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
    root1: {
        display: 'block',
        '@media (min-width:600px)': {
            display: 'flex',
        },
        [theme.breakpoints.up('md')]: {
            flexGrow: 1,
            display: 'flex',
        },
    },
    img0: {
        width: '100%',
        height: '22vw',
        '@media (min-width:600px)': {
            width: '100%',
            height: '22vw',
        },
        [theme.breakpoints.up('md')]: {
            width: '100%',
            height: '22vw',
        },
    },
    div1: {
        backgroundColor: "#f6f6ee",
        width: '100%',
        height: '800%',
    },
    paper: {
        width: '100%',
        height: '100%',
        backgroundColor: "#e3f2fd",
        '@media (min-width:600px)': {
            width: '100%',
            height: '100%',
            backgroundColor: "#e3f2fd",
        },
        [theme.breakpoints.up('md')]: {
            width: '100%',
            height: '100%',
            backgroundColor: "#e3f2fd",
        },
    },
    box1: {
        marginBottom: '5%',
        marginTop: '-10%',
        height: '100%',
        width: '90%',
        borderRadius: 8,
        position: 'relative',
        left: '50%',
        transform: 'translate(-50%)',
        bgcolor: "white",
        display: "inline-block",
        backgroundColor: 'White',
        '@media (min-width:600px)': {
            marginTop: '-10%',
            height: '100%',
            width: '90%',
            borderRadius: 8,
            position: 'relaive',
            left: '50%',
            transform: 'translate(-50%)',
            bgcolor: "white",
            display: "inline-block",
            backgroundColor: 'White',
        },
        [theme.breakpoints.up('md')]: {
            marginTop: '-8%',
            marginBottom: '5%',
            height: '100%',
            width: '95%',
            borderRadius: 16,
            position: 'relative',
            left: '50%',
            transform: 'translate(-50%)',
            bgcolor: "white",
            display: "inline-block",
            backgroundColor: 'White',
        },
    },
    typ1: {
        fontSize: 18,
        marginLeft: theme.spacing(2),
        marginTop: theme.spacing(2),
        marginBottom: theme.spacing(2),
        '@media (min-width:600px)': {
            fontSize: 18,
            marginLeft: theme.spacing(4),
            marginTop: theme.spacing(4),
            marginBottom: theme.spacing(4),
        },
        [theme.breakpoints.up('md')]: {
            fontSize: 25,
            marginLeft: theme.spacing(4),
            marginTop: theme.spacing(4),
            marginBottom: theme.spacing(4),
        },
    },
    ty: {
        fontSize: 25,
        marginTop: theme.spacing(5),
        '@media (min-width:600px)': {
            fontSize: 25,
            marginTop: theme.spacing(10),
            marginLeft: theme.spacing(4),
        },
        [theme.breakpoints.up('md')]: {

        },
    },
    typ3: {
        fontSize: '2.3vw',
        marginTop: '2%',
        '@media (min-width:600px)': {
            fontSize: 14,
        },
        [theme.breakpoints.up('md')]: {
            fontSize: '1.2vw',
        },
    },
    typ4: {
        fontSize: '2.3vw',
        '@media (min-width:600px)': {
            fontSize: 12,
        },
        [theme.breakpoints.up('md')]: {
            fontSize: 16,
        },
    },
    typ5: {
        fontSize: '2.3vw',
        marginTop: '2%',
        '@media (min-width:600px)': {
            fontSize: '1.5vw',
        },
        [theme.breakpoints.up('md')]: {
            fontSize: '1.2vw',
        },
    },
    typ6: {
        fontSize: '2.3vw',
        marginTop: '2%',
        '@media (min-width:600px)': {
            fontSize: '1.8vw',
        },
        [theme.breakpoints.up('md')]: {
            fontSize: '1.2vw',
        },
    },
    textField1: {
        width: '100%',
        height: '6vw',
        '@media (min-width:600px)': {
            width: '100%',
            height: '5vw',
        },
        [theme.breakpoints.up('md')]: {
            width: '100%',
            height: '4vw',
        },
    },
    textField2: {
        width: '100%',
        height: '20vw',
        '@media (min-width:600px)': {
            width: '100%',
            height: '15vw',
        },
        [theme.breakpoints.up('md')]: {
            width: '100%',
            height: '13vw',
        },
    },
    btn1: {

        '@media (min-width:600px)': {
            marginRight: theme.spacing(2),
        },
        [theme.breakpoints.up('md')]: {
            marginRight: theme.spacing(2),
        },
    },
    btn2: {
        '@media (min-width:600px)': {
            marginRight: theme.spacing(4),
        },
        [theme.breakpoints.up('md')]: {
            marginRight: theme.spacing(4),
        },
    },
    large: {
        width: '60%',
        height: '110%',
        border: '1px solid grey',
        marginLeft: '20%',
        marginTop: '3%',
        borderRadius: '50%',
        '@media (min-width:600px)': {
            width: '60%',
            height: '80%',
            border: '1px solid grey',
            marginLeft: '20%',
            marginTop: '23%',
        },
        [theme.breakpoints.up('md')]: {
            width: '100%',
            height: '8.5vw',
            border: '1px solid grey',
            marginLeft: '10%',
        },
    },
    div1: {
        width: '60%',
    },
    div2: {
        width: '40%',
        marginTop: theme.spacing(1.5),
        '@media (min-width:600px)': {
            width: '40%',
            marginTop: theme.spacing(3),
            marginLeft: '30%',
        },
        [theme.breakpoints.up('md')]: {
            width: '40%',
            marginTop: theme.spacing(3),
            marginLeft: '58%'
        },
    },
    div3: {
        width: '100%',
        marginBottom: '5%',
        '@media (min-width:600px)': {
            width: '100%',
        },
        [theme.breakpoints.up('md')]: {
            width: '25%',
        },
    },
    div4: {
        width: '30%',
        marginTop: '4%',
        '@media (min-width:600px)': {
            width: '30%',
            marginTop: '4%',
        },
        [theme.breakpoints.up('md')]: {
            width: '40%',
            marginTop: '4%',
        },
    },
    div5: {
        width: '60%',
        marginTop: '10%',
        marginLeft: '-5%',
        '@media (min-width:600px)': {
            width: '60%',
            marginTop: '20%',
            marginLeft: '0%',
        },
        [theme.breakpoints.up('md')]: {
            width: '60%',
            marginTop: '30%',
            marginLeft: '5%',
        },
    },
    div6: {
        width: '100%',
        marginLeft: '2%',
        marginTop: '10%',
        '@media (min-width:600px)': {
            width: '100%',
            marginLeft: '3%',
            marginTop: '10%',
        },
        [theme.breakpoints.up('md')]: {
            width: '75%',
            marginTop: '4%',
            marginLeft: '0%',
            marginBottom: theme.spacing(6),
        },
    },
    div7: {
        width: '100%',
        marginLeft: '2%',
        marginTop: '4%',
        '@media (min-width:600px)': {
            width: '100%',
            marginLeft: '3%',
            marginTop: '10%',
        },
        [theme.breakpoints.up('md')]: {
            width: '75%',
            marginTop: '4%',
            marginLeft: '25%',
        },
    },
    div8: {
        marginTop: theme.spacing(3),
        marginLeft: '76%',
        marginBottom: '3%',
        '@media (min-width:600px)': {
            marginTop: theme.spacing(3),
            marginBottom: '3%',
            marginLeft: '88%',
        },
        [theme.breakpoints.up('md')]: {
            marginTop: theme.spacing(3),
            marginBottom: '3%',
            display: 'flex',
            justifyContent: 'flex-end',
            marginRight: '1.5%',
        },
    },
    div9: {
        width: '100%',
        marginLeft: '2%',
        marginTop: '4%',
        '@media (min-width:600px)': {
            width: '100%',
            marginLeft: '3%',
            marginTop: '10%',
        },
        [theme.breakpoints.up('md')]: {
            width: '75%',
            marginTop: '-4vw',
            marginLeft: '25%',
        },
    },
    div10: {
        width: '95%',
        '@media (min-width:600px)': {
            width: '23%',
            marginLeft: '2% ',
        },
        [theme.breakpoints.up('md')]: {
            width: '25%',
            marginLeft: '2% ',
        },
    },
    div11: {
        width: '95%',
        '@media (min-width:600px)': {
            width: '45%',
            marginLeft: '2% ',
        },
        [theme.breakpoints.up('md')]: {
            width: '48%',
            marginLeft: '2% ',
        },
    },
    div111: {
        width: '95%',
        '@media (min-width:600px)': {
            width: '48%',
        },
        [theme.breakpoints.up('md')]: {
            width: '48%',
        },
    },
    div12: {
        width: '95%',
        '@media (min-width:600px)': {
            width: '29%',
            marginLeft: '2% ',
        },
        [theme.breakpoints.up('md')]: {
            width: '32%',
            marginLeft: '2% ',
        },
    },
    div122: {
        width: '95%',
        '@media (min-width:600px)': {
            width: '32%',
        },
        [theme.breakpoints.up('md')]: {
            width: '32%',
        },
    },
    div13: {
        width: '95%',
        '@media (min-width:600px)': {
            width: '32.5%',
            marginLeft: '2%',
        },
        [theme.breakpoints.up('md')]: {
            width: '32.5%',
            marginLeft: '2%',
        },
    },
    div133: {
        width: '95%',
        '@media (min-width:600px)': {
            width: '35.5%',
        },
        [theme.breakpoints.up('md')]: {
            width: '35.5%',
        },
    },
}));


const Profile = () => {
    const classes = useStyles();

    return (
        <ThemeProvider theme={theme}>
            <Header />
            <div >
                <img src="https://www.rombourne.co.uk/wp-content/uploads/2014/12/33_Cathedral_Rd_office_04_wide.jpg" className={classes.img0} />
            </div>
            <div className={classes.paper}>
                <div boxShadow={3} className={classes.box1}>
                    <div style={{ borderBottom: '1px solid lightgrey', display: 'flex' }}>
                        <div className={classes.div1}>
                            <Typography className={classes.typ1}>
                                Basic information
                            </Typography>
                        </div>
                        <div className={classes.div2}>
                            <Button variant="contained" color="primary" className={classes.btn1}>
                                <Typography color="secondary" className={classes.typ4}>Reset password</Typography>
                            </Button>
                        </div>
                    </div>
                    <div className={classes.root}>
                        <div className={classes.div3}>
                            <div style={{ display: 'flex' }}>
                                <div className={classes.div4}>
                                    <img src="https://www.indiewire.com/wp-content/uploads/2015/04/dakota-fanning-by-daniel-bergeron.jpg?w=780" className={classes.large} />
                                </div>
                                <div className={classes.div5}>
                                    <Button>
                                        <Typography color="primary" style={{ fontWeight: 'bold' }} className={classes.typ2}>
                                            Upload logo
                                        </Typography>
                                    </Button>
                                </div>
                            </div>
                        </div>
                        <div className={classes.div6}>
                            <div className={classes.root1}>
                                <div className={classes.div111}>
                                    <Typography className={classes.typ3}>
                                        First Name
                                    </Typography>
                                    <TextField id="outlined-basic" className={classes.textField1} InputProps={{ className: classes.textField1 }} variant="outlined" style={{ marginBottom: theme.spacing(2) }} />
                                </div>
                                <div className={classes.div11} >
                                    <Typography className={classes.typ3}>
                                        Last Name
                                    </Typography>
                                    <TextField id="outlined-basic" className={classes.textField1} InputProps={{ className: classes.textField1 }} variant="outlined" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={classes.div9}>
                        <div className={classes.root1}>
                            <div className={classes.div111}>
                                <Typography className={classes.typ3}>
                                    Email
                                    </Typography>
                                <TextField id="outlined-basic" className={classes.textField1} InputProps={{ className: classes.textField1 }} variant="outlined" />
                            </div>
                            <div className={classes.div11}>
                                <Typography className={classes.typ3}>
                                    Company Name
                                    </Typography>
                                <TextField id="outlined-basic" className={classes.textField1} InputProps={{ className: classes.textField1 }} variant="outlined" />
                            </div>
                        </div>
                    </div>

                    <div className={classes.div7}>
                        <div className={classes.root1}>
                            <div className={classes.div122}>
                                <Typography className={classes.typ3}>
                                    Siret
                                    </Typography>
                                <TextField id="outlined-basic" className={classes.textField1} InputProps={{ className: classes.textField1 }} variant="outlined" />
                            </div>
                            <div className={classes.div12}>
                                <Typography className={classes.typ3}>
                                    Telephone
                                    </Typography>
                                <TextField id="outlined-basic" className={classes.textField1} InputProps={{ className: classes.textField1 }} variant="outlined" />
                            </div>
                            <div className={classes.div12} style={{ marginRight: '2%' }}>
                                <Typography className={classes.typ3}>
                                    Fax
                                    </Typography>
                                <TextField id="outlined-basic" className={classes.textField1} InputProps={{ className: classes.textField1 }} variant="outlined" />
                            </div>
                        </div>
                    </div>

                    <div className={classes.div7}>
                        <div className={classes.root1}>
                            <div className={classes.div133}>
                                <Typography className={classes.typ3}>
                                    Adress
                                    </Typography>
                                <TextField id="outlined-basic" className={classes.textField1} InputProps={{ className: classes.textField1 }} variant="outlined" />
                            </div>
                            <div className={classes.div10}>
                                <Typography className={classes.typ6}>
                                    Postal code
                                    </Typography>
                                <TextField id="outlined-basic" className={classes.textField1} InputProps={{ className: classes.textField1 }} variant="outlined" />
                            </div>
                            <div className={classes.div13} style={{ marginRight: '2%' }}>
                                <Typography className={classes.typ3}>
                                    City
                                    </Typography>
                                <TextField id="outlined-basic" className={classes.textField1} InputProps={{ className: classes.textField1 }} variant="outlined" />
                            </div>
                        </div>
                    </div>

                    <div className={classes.div7}>
                        <div className={classes.root1}>
                            <div className={classes.div133}>
                                <Typography className={classes.typ3}>
                                    Website
                                </Typography>
                                <TextField id="outlined-basic" className={classes.textField1} InputProps={{ className: classes.textField1 }} variant="outlined" />
                            </div>
                            <div className={classes.div10}>
                                <Typography className={classes.typ5}>
                                    Number of employes
                                </Typography>
                                <TextField id="outlined-basic" className={classes.textField1} InputProps={{ className: classes.textField1 }} variant="outlined" />
                            </div>
                            <div className={classes.div13} style={{ marginRight: '2%' }}>
                                <Typography className={classes.typ3}>
                                    Domain of activity
                                </Typography>
                                <TextField id="outlined-basic" className={classes.textField1} InputProps={{ className: classes.textField1 }} variant="outlined" />
                            </div>
                        </div>
                    </div>

                    <div className={classes.div7}>
                        <div style={{ display: 'flex', width: '100%' }}>
                            <div style={{ width: '95%' }}>
                                <Typography className={classes.typ3}>
                                    Description of the company
                                </Typography>
                                <TextField id="outlined-basic" className={classes.textField2} InputProps={{ className: classes.textField2 }} variant="outlined" />
                            </div>
                        </div>
                    </div>

                    <div className={classes.div8}>
                        <Button variant="contained" color="primary" className={classes.btn2}>
                            <Typography color="secondary" className={classes.typ4}>Save</Typography>
                        </Button>
                    </div>
                </div>
            </div>
            <Footer />
        </ThemeProvider>
    )
};

export default Profile;
