import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Paper from "@material-ui/core/Paper";
import Header from './Header';
import Footer from './Footer';
import TextField from '@material-ui/core/TextField';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { green, grey } from '@material-ui/core/colors';

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

const useStyles = makeStyles(theme => ({
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
        marginLeft: theme.spacing(1),
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
        fontSize: '2.2vw',
        marginLeft: '2%',
        marginTop:'2%',
        marginRight:'1%',
        marginBottom:'2%',
    },
    typ2: {
        fontWeight: 'bold',
        fontSize: '20px',
        marginTop: '5%',
        display: 'flex',
        justifyContent: 'center',
        '@media (min-width:600px)': {
            marginTop: '5%',
            fontSize: '35px',
        },
        [theme.breakpoints.up('md')]: {
            marginTop: '5%',
            fontSize: '45px',
        },
    },
    typ3: {
        fontWeight: 'bold',
        fontSize: '35px',
        marginLeft: theme.spacing(1),
        marginTop: theme.spacing(6),
        '@media (min-width:600px)': {
            fontSize: '35px',
            marginLeft: theme.spacing(5),
            marginTop: theme.spacing(14),
        },
        [theme.breakpoints.up('md')]: {
            fontSize: '45px',
            marginLeft: theme.spacing(8),
            marginTop: theme.spacing(22),
        },
    },
    typ4: {
        fontSize: '20px',
        marginLeft: theme.spacing(1),
        marginTop: theme.spacing(2),
        '@media (min-width:600px)': {
            fontSize: '20px',
            marginLeft: theme.spacing(5),
            marginTop: theme.spacing(4),
        },
        [theme.breakpoints.up('md')]: {
            fontSize: '22px',
            marginLeft: theme.spacing(8),
            marginTop: theme.spacing(3),
        },
    },
    typ5: {
        fontWeight: 'bold',
        fontSize: '20px',
        display: 'flex',
        marginLeft: '5%',
        justifyContent: 'center',
        '@media (min-width:600px)': {
            marginLeft: '0%',
            fontSize: '35px',
        },
        [theme.breakpoints.up('md')]: {
            fontSize: '45px',
            marginLeft: '0%',
        },
    },
    typ6: {
        fontSize: '16px',
        display: 'flex',
        marginTop: '3%',
        justifyContent: 'center',
        marginLeft: '5%',
        '@media (min-width:600px)': {
            fontSize: '25px',
            marginLeft: '0%',
        },
        [theme.breakpoints.up('md')]: {
            fontSize: '20px',
            marginLeft: '0%',
        },
    },
    typ7: {
        fontSize: '16px',
        marginTop: '3%',
        '@media (min-width:600px)': {
            fontSize: '25px',
        },
        [theme.breakpoints.up('md')]: {
            fontSize: '20px',
        },
    },
    typ8: {
        fontWeight: 'bold',
        fontSize: 12,
        marginLeft: '6%',
        marginTop: '4%',

        '@media (min-width:600px)': {
            fontWeight: 'bold',
            fontSize: 18,
        },
        [theme.breakpoints.up('md')]: {
            fontWeight: 'bold',
            fontSize: 25,
        },
    },

    typp8: {
        width: "33.33%",
        marginBottom: '20%',
        '@media (min-width:600px)': {
            width: "33.5%",
            marginBottom: '10%',
        },
        [theme.breakpoints.up('md')]: {
            width: "33%",
            marginBottom: '10%',
        },
    },

    typ9: {
        fontSize: 10,
        marginLeft: theme.spacing(1),
        marginTop: theme.spacing(4),
        '@media (min-width:600px)': {
            fontSize: 16,
            marginLeft: theme.spacing(3),
            marginTop: theme.spacing(4),
        },
        [theme.breakpoints.up('md')]: {
            fontSize: 18,
            marginLeft: theme.spacing(4),
            marginTop: theme.spacing(4),
        },
    },
    typ10: {
        fontSize: 10,
        '@media (min-width:600px)': {
            fontSize: 16,
        },
        [theme.breakpoints.up('md')]: {
            fontSize: 25,
        },
    },
    img1: {
        width: "100%",
        '@media (min-width:600px)': {

            width: "100%",
        },
        [theme.breakpoints.up('md')]: {
            width: "100%",
        },
    },
    img2: {
        marginTop: '100%',
        width: '25%',
        marginLeft: '8%',
        '@media (min-width:600px)': {

            marginTop: '10%',
            width: '25%',
            marginLeft: '8%',
        },
        [theme.breakpoints.up('md')]: {
            marginTop: '10%',
            width: '35%',
            marginLeft: '8%',
        },
    },
    img3: {
        marginTop: '100%',
        width: '30%',
        marginLeft: '8%',
        '@media (min-width:600px)': {
            marginTop: '10%',
            width: '30%',
            marginLeft: '8%',
        },
        [theme.breakpoints.up('md')]: {
            marginTop: '10%',
            width: '30%',
            marginLeft: '8%',
        },
    },
    img4: {
        marginTop: '100%',
        width: '50%',
        marginLeft: '8%',
        '@media (min-width:600px)': {
            marginTop: '10%',
            width: '50%',
            marginLeft: '8%',
        },
        [theme.breakpoints.up('md')]: {
            marginTop: '10%',
            width: '50%',
            marginLeft: '8%',
        },
    },
    imgg3: {
        marginTop: theme.spacing(3),
        '@media (min-width:600px)': {
            marginLeft: theme.spacing(7),
            marginTop: theme.spacing(10),
        },
        [theme.breakpoints.up('md')]: {
            marginLeft: theme.spacing(7),
            marginTop: theme.spacing(10),
        },
    },
    imgg4: {
        marginTop: theme.spacing(3),
        '@media (min-width:600px)': {
            marginLeft: theme.spacing(2),
            marginTop: theme.spacing(10),
        },
        [theme.breakpoints.up('md')]: {
            marginLeft: theme.spacing(12),
            marginTop: theme.spacing(20),

        },
    },
    box1: {
        marginTop: '-12%',
        width: '80%',
        borderRadius: 3,
        position: 'absolute',
        left: '50%',
        transform: 'translate(-50%)',
        bgcolor: "white",
        display: "inline-block",
        backgroundColor: 'White',
        '@media (min-width:600px)': {
            marginTop: '-10%',
            width: '80%',
            borderRadius: 8,
            position: 'absolute',
            left: '50%',
            transform: 'translate(-50%)',
            bgcolor: "white",
            display: "inline-block",
            backgroundColor: 'White',
        },
        [theme.breakpoints.up('md')]: {
            marginTop: '-8%',
            width: '80%',
            borderRadius: 16,
            position: 'absolute',
            left: '50%',
            transform: 'translate(-50%)',
            bgcolor: "white",
            display: "inline-block",
            backgroundColor: 'White',
        },
    },
    paper: {
        padding: theme.spacing(2),
        backgroundColor: "#f0f5f5",
        '@media (min-width:600px)': {
            padding: theme.spacing(6),
            backgroundColor: "#f0f5f5",
        },
        [theme.breakpoints.up('md')]: {
            padding: theme.spacing(14),
            backgroundColor: "#f0f5f5",
        },
    },
    paper1: {
        padding: theme.spacing(4),
        backgroundColor: "#f0f5f5",
        '@media (min-width:600px)': {
            padding: theme.spacing(4),
            backgroundColor: "#f0f5f5",
        },
        [theme.breakpoints.up('md')]: {
            padding: theme.spacing(8),
            backgroundColor: "#f0f5f5",
        },
    },
    div1: {
        marginTop: '-5%',
    },
    div4: {
        marginTop: '-25%',
        '@media (min-width:600px)': {
            marginTop: '0%'
        },
        [theme.breakpoints.up('md')]: {
            marginTop: '0%',
        },
    },
    div5: {
        '@media (min-width:600px)': {
        },
        [theme.breakpoints.up('md')]: {
            marginTop: '2%',
            marginLeft: '5%',
            width: '25%'
        },
    },
    div7: {
        '@media (min-width:600px)': {
        },
        [theme.breakpoints.up('md')]: {
            marginTop: '2%',
            marginLeft: '-4%',
            width: '25%'
        },
    },
    dv1: {
        width: '100%',
        '@media (min-width:600px)': {
            width: '100%',
        },
        [theme.breakpoints.up('md')]: {
            width: '50%',
        },
    },
    div6: {
        display: 'block',
        marginLeft: '5%',
        '@media (min-width:600px)': {
            display: 'block',
            marginLeft: '15%',
        },
        [theme.breakpoints.up('md')]: {
            marginLeft: '0%',
            flexGrow: 1,
            display: 'flex',
            justifyContent: 'center',
        },
    },
    div8: {
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
            marginLeft: '30%',
        },
    },
    textField1: {
        backgroundColor: 'white',
        width: '80%',
    },
    textField2: {
        backgroundColor: 'white',
        width: '80%',
        '@media (min-width:600px)': {
            backgroundColor: 'white',
            width: '80%',
        },
        [theme.breakpoints.up('md')]: {
            backgroundColor: 'white',
            width: '165%',
        },
    },
    textField6: {
        width: '90%',
        height: 200,
        '@media (min-width:600px)': {

            width: '90%',
            height: 200,
        },
        [theme.breakpoints.up('md')]: {
            backgroundColor: 'white',
            width: '128.5%',
            height: 200,
        },
    },
    btn1: {
        marginTop: '3%',
        padding: '11px 50px'
    }
}));

const LesInstitutiionnels = () => {
    const classes = useStyles();
    return (
        <ThemeProvider theme={theme}>
            <Header />
            <div>
                <div>
                    <Typography className={classes.typ0}>
                        Les Institutiionnels
                    </Typography>
                </div>
                <div>
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <img src="https://i.ibb.co/PtWWNX8/office.jpg" className={classes.img1} />
                    </div>
                    <Box boxShadow={3} className={classes.box1} >
                        <div style={{ display: 'flex' }}>
                            <Typography className={classes.typ1}>
                                Keep track of what's happening with your data, change permissions, and
                                run reports against your data anywhere in the world. Keep track of what's
                                happeningwith your data, change permissions.
                            </Typography>
                        </div>
                    </Box>
                    <Paper elevation={0} className={classes.paper} />
                </div>
                <div className={classes.div1} style={{ backgroundColor: "#f0f5f5" }}>
                    <Typography className={classes.typ2}>
                        Why become a Our partner?
                    </Typography>

                    <div style={{ display: 'flex' }} className={classes.div4}>
                        <div className={classes.typp8}>
                            <img src="https://www.saute.ch/fileadmin/redaktion_saute/bilder/various/People.png" className={classes.img2} />
                            <Typography className={classes.typ8}> Empower your clients </Typography>
                            <Typography className={classes.typ9}>
                                Offices for large teams or less dense mid-size <br />
                                teams, featuring meeting rooms, executive <br />
                                offices, and operational supprt.
                            </Typography>
                        </div>

                        <div className={classes.typp8}>
                            <img src="https://i.pinimg.com/originals/6b/02/71/6b0271bd623d3ef333f1dc26ab706063.png" className={classes.img3} />
                            <Typography className={classes.typ8}> Premium service </Typography>
                            <Typography className={classes.typ9}>
                                Offices for large teams or less dense mid-size <br />
                                teams, featuring meeting rooms, executive <br />
                                offices, and operational supprt.
                            </Typography>
                        </div>

                        <div className={classes.typp8} >
                            <img src="https://www.pinclipart.com/picdir/big/350-3503162_handshake-clipart-transparent-apreton-de-manos-vector-png.png" className={classes.img4} />
                            <Typography className={classes.typ8}> Total flexibility </Typography>
                            <Typography className={classes.typ9}>
                                Offices for large teams or less dense mid-size <br />
                                teams, featuring meeting rooms, executive <br />
                                offices, and operational supprt.
                            </Typography>
                        </div>
                    </div>
                </div>

                <div className={classes.root} >
                    <div className={classes.dv1}>
                        <Typography className={classes.typ3}>
                            Our Story
                        </Typography>
                        <Typography className={classes.typ4}>
                            when we started in 2010, we wanted to build more than beautiful,
                            shared office spaces. We wanted to build a community. A place you
                            join as an indvidual, 'me', but where you become part of greater.
                            A place where we are redefining success measured by personal
                            fullfilment, not just the bottom line. Community is our catalyst.
                        </Typography>
                        <div className={classes.imgg3} >
                            <img src="https://i.ibb.co/T00jBKK/image6.png" width='80%' />
                        </div>
                    </div>
                    <div className={classes.imgg4}>
                        <img src="https://i.ibb.co/6R83ttR/image7.png" width='100%' />
                    </div>
                </div>

                <Paper elevation={0} className={classes.paper1} />

                <div style={{ backgroundColor: "#f0f5f5" }}>
                    <Typography className={classes.typ5}>
                        Apply to become a refferal partner
                    </Typography>

                    <Typography className={classes.typ6}>
                        After 3 days all of your offer will arrive and you will have another 7 days to <br />
                            select a new company
                    </Typography>

                    <div className={classes.div6}>
                        <div className={classes.div5}>
                            <Typography className={classes.typ7}>
                                Name
                            </Typography>
                            <TextField id="outlined-basic" className={classes.textField1} variant="outlined" />
                        </div>
                        <div className={classes.div7}>
                            <Typography className={classes.typ7}>
                                Company Name
                            </Typography>
                            <TextField id="outlined-basic" className={classes.textField1} variant="outlined" />
                        </div>
                    </div>

                    <div className={classes.div6}>
                        <div className={classes.div5}>
                            <Typography className={classes.typ7}>
                                Work email
                            </Typography>
                            <TextField id="outlined-basic" className={classes.textField1} variant="outlined" />
                        </div>
                        <div className={classes.div7}>
                            <Typography className={classes.typ7}>
                                Phone Number
                            </Typography>
                            <TextField id="outlined-basic" className={classes.textField1} variant="outlined" />
                        </div>
                    </div>

                    <div className={classes.div6}>
                        <div className={classes.div5}>
                            <Typography className={classes.typ7}>
                                Location
                            </Typography>
                            <TextField id="outlined-basic" className={classes.textField2} variant="outlined" />
                        </div>
                        <div className={classes.div7}>
                        </div>
                    </div>

                    <div className={classes.div6}>
                        <div className={classes.div5}>
                            <Typography className={classes.typ7}>
                                Location
                            </Typography>
                            <TextField id="outlined-basic" className={classes.textField6} InputProps={{ className: classes.textField6 }} variant="outlined" />
                        </div>
                        <div className={classes.div7}>
                        </div>
                    </div>

                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <Button variant="contained" color="primary" className={classes.btn1}>
                            <Typography color="secondary" className={classes.typ10}>Submit</Typography>
                        </Button>
                    </div>
                </div>

                <Paper elevation={0} className={classes.paper1} />

                <Footer />
            </div>
        </ThemeProvider>
    );
};

export default LesInstitutiionnels;