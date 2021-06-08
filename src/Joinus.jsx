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
import Paper from "@material-ui/core/Paper";
import Grid from '@material-ui/core/Grid';
import CardActions from '@material-ui/core/CardActions';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';

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
        marginTop: '3%',
        fontSize: '90%',
        '@media (min-width:600px)': {
            fontSize: '120%',
            marginBottom: '5%',
        },
        [theme.breakpoints.up('md')]: {
            fontSize: '160%',
            marginBottom: '0%',
        },
    },
    typ2: {
        fontSize: '70%',
        marginTop: '10%',
        '@media (min-width:600px)': {
            fontSize: '60%',
        },
        [theme.breakpoints.up('md')]: {
            fontSize: '110%',
        },
    },
    typ3: {
        fontSize: '70%',
        marginTop: '5%',
        marginBottom: '5%',
        '@media (min-width:600px)': {
            fontSize: '50%',
        },
        [theme.breakpoints.up('md')]: {
            fontSize: '120%',
        },
    },
    typ4: {
        fontSize: '60%',
        '@media (min-width:600px)': {
            fontSize: '50%',
        },
        [theme.breakpoints.up('md')]: {
            fontSize: '100%',
        },
    },
    typ5: {
        fontWeight: 'bold',
        fontSize: '25px',
        marginTop: theme.spacing(2),
        marginBottom: theme.spacing(2),
        '@media (min-width:600px)': {
            fontSize: '35px',
            marginTop: theme.spacing(4),
            marginBottom: theme.spacing(4),
        },
        [theme.breakpoints.up('md')]: {
            fontSize: '45px',
            marginTop: theme.spacing(4),
            marginBottom: theme.spacing(3),
        },
    },
    typ6: {
        marginLeft: '3%',
        marginTop: '5%',
        fontSize: '16px',
        '@media (min-width:600px)': {
            fontSize: '14px',
        },
        [theme.breakpoints.up('md')]: {
            fontSize: '22px',
        },
    },
    typ7: {
        fontSize: '6px',
        '@media (min-width:600px)': {
            fontSize: '10px',
        },
        [theme.breakpoints.up('md')]: {
            fontSize: '20px',
        },
    },
    typ8: {
        fontSize: '10px',
        '@media (min-width:600px)': {
            fontSize: '10px',
        },
        [theme.breakpoints.up('md')]: {
            fontSize: '16px',
        },
    },
    icon: {
        marginTop: '5.8%',
    },

    img0: {
        width: '100%',
        height: '25vw',
        '@media (min-width:600px)': {
          width: '100%',
          height: '25vw',
        },
        [theme.breakpoints.up('md')]: {
          width: '100%',
          height: '25vw',
        },
      },
    div0: {
        backgroundColor: "#e3f2fd",
    },
    div1: {
        maxWidth: '98%',
        marginTop:'8%',
        '@media (min-width:600px)': {
            maxWidth: 410,
            marginTop: '-45.5%',
        },
        [theme.breakpoints.up('md')]: {
            maxWidth: 410,
            marginTop: '-46.5%',
        },
    },
    div2: {
        marginTop: '2%',
    },
    cards: {
        display: 'block',
        marginLeft: theme.spacing(0.5),
        marginRight: theme.spacing(0.5),
        '@media (min-width:600px)': {
            display: 'flex',
            marginLeft: theme.spacing(0.5),
            marginRight: theme.spacing(0.5),
        },
        [theme.breakpoints.up('md')]: {
            display: 'flex',
        },
    },
    img2: {
        width: '100%',
        height: 170,
        '@media (min-width:600px)': {
            width: '100%',
            height: 180,
        },
        [theme.breakpoints.up('md')]: {
            width: '100%',
            height: 230,
        },
    },
    rating: {
        fontSize: '120%',
        '@media (min-width:600px)': {
            fontSize: '150%',
        },
        [theme.breakpoints.up('md')]: {
            fontSize: '200%',
        },
    },
    cardbtn: {
        padding: "8px 22px",
        marginBottom: theme.spacing(1),
        marginLeft: theme.spacing(1),
        marginTop: theme.spacing(-1),
        '@media (min-width:600px)': {
            padding: "11px 30px",
            marginBottom: theme.spacing(1),
            marginLeft: theme.spacing(1),
        },
        [theme.breakpoints.up('md')]: {
            padding: "11px 30px",
            marginBottom: theme.spacing(1),
            marginLeft: theme.spacing(1),
        },
    },
    cardbtn1: {
        background: '#ffffff',
        marginTop: '6%',
        padding: "6px 30px",
        '@media (min-width:600px)': {
            padding: "11px 50px",
        },
        [theme.breakpoints.up('md')]: {
            padding: "11px 30%",
        },
    },
    cardbtn2: {
        marginTop: '6%',
        padding: "6px 30px",
        '@media (min-width:600px)': {
            padding: "11px 50px",
        },
        [theme.breakpoints.up('md')]: {
            padding: "11px 30%",
        },
    },
    cardbtnn1: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    cards0: {
        marginLeft: '0%',
        '@media (min-width:600px)': {
            marginLeft: theme.spacing(0),
        },
        [theme.breakpoints.up('md')]: {
            marginLeft: theme.spacing(0),
        },
    },
    cards1: {
        marginLeft: '2%',
        '@media (min-width:600px)': {
            marginLeft: theme.spacing(4),
        },
        [theme.breakpoints.up('md')]: {
            marginLeft: theme.spacing(4),
        },
    },
    paper: {
        padding: theme.spacing(4),
    },
}));





const Trainings = () => {

    const classes = useStyles();
    const [value, setValue] = React.useState(2);

    return (
        <ThemeProvider theme={theme}>
            <Header />
            <div>
                <div>
                    <Typography className={classes.typ0}>
                        Our Mission
                    </Typography>
                </div>
                <div >
        <img src="https://i.ibb.co/7tTDhJg/image-13.png" className={classes.img0} />
      </div>

                <div className={classes.div2}>
                    <Grid item container>
                        <Grid item xs={false} sm={1} />
                        <Grid item xs={12} sm={10}>
                            <div container className={classes.cards} >
                            <Grid item xs={12} className={classes.cards1}>
                                    <div className={classes.div1}>
                                        <Card style={{ borderRadius: '3%' }}>
                                            <CardContent>
                                                <div style={{ borderBottom: '1px solid lightgrey' }}>
                                                    <Typography gutterBottom variant="h7" component="h2" className={classes.typ1}>
                                                        Free
                                                    </Typography>
                                                    <Typography variant="body2" color="textSecondary" component="p" className={classes.typ3}>
                                                        Works perfect for small teams and companies
                                                    </Typography>
                                                </div>

                                                <div style={{ display: 'flex' }}>
                                                    <Typography className={classes.typ5}>
                                                        $89
                                                    </Typography>
                                                    <Typography color="textSecondary" className={classes.typ5}>
                                                        /mo
                                                    </Typography>
                                                </div>
                                                <div style={{ display: 'flex' }}>
                                                    <CheckCircleOutlineIcon fontSize="medium" color="primary" className={classes.icon} />
                                                    <Typography className={classes.typ6}>
                                                        Rich, responsive landing page
                                                    </Typography>
                                                </div>
                                                <div style={{ display: 'flex' }}>
                                                    <CheckCircleOutlineIcon fontSize="medium" color="primary" className={classes.icon} />
                                                    <Typography className={classes.typ6}>
                                                        100+ styled components
                                                    </Typography>
                                                </div>
                                                <div style={{ display: 'flex' }}>
                                                    <CheckCircleOutlineIcon fontSize="medium" color="primary" className={classes.icon} />
                                                    <Typography className={classes.typ6}>
                                                        Flexible, simple license
                                                    </Typography>
                                                </div>
                                                <div style={{ display: 'flex' }}>
                                                    <CheckCircleOutlineIcon fontSize="medium" color="primary" className={classes.icon} />
                                                    <Typography className={classes.typ6}>
                                                        Speedy build toolin
                                                    </Typography>
                                                </div>
                                            </CardContent>

                                            <CardActions className={classes.cardbtnn1}>
                                                <Button variant="outlined" className={classes.cardbtn1} >
                                                    <Typography color="primary" className={classes.typ3}>Buy now</Typography>
                                                </Button>
                                            </CardActions>

                                            <CardContent className={classes.cardbtnn1}>
                                                <Typography className={classes.typ8}>Fully Featured 30-day free trial</Typography>
                                            </CardContent>
                                        </Card>
                                    </div>
                                </Grid>

                                <Grid item xs={12} className={classes.cards1}>
                                    <div className={classes.div1}>
                                        <Card style={{ borderRadius: '3%' }}>
                                            <CardContent>
                                                <div style={{ borderBottom: '1px solid lightgrey' }}>
                                                    <Typography gutterBottom variant="h7" component="h2" className={classes.typ1}>
                                                        Standard
                                                    </Typography>
                                                    <Typography variant="body2" color="textSecondary" component="p" className={classes.typ3}>
                                                        Works perfect for small teams and companies
                                                    </Typography>
                                                </div>

                                                <div style={{ display: 'flex' }}>
                                                    <Typography className={classes.typ5}>
                                                        $89
                                                    </Typography>
                                                    <Typography color="textSecondary" className={classes.typ5}>
                                                        /mo
                                                    </Typography>
                                                </div>
                                                <div style={{ display: 'flex' }}>
                                                    <CheckCircleOutlineIcon fontSize="medium" color="primary" className={classes.icon} />
                                                    <Typography className={classes.typ6}>
                                                        Rich, responsive landing page
                                                    </Typography>
                                                </div>
                                                <div style={{ display: 'flex' }}>
                                                    <CheckCircleOutlineIcon fontSize="medium" color="primary" className={classes.icon} />
                                                    <Typography className={classes.typ6}>
                                                        100+ styled components
                                                    </Typography>
                                                </div>
                                                <div style={{ display: 'flex' }}>
                                                    <CheckCircleOutlineIcon fontSize="medium" color="primary" className={classes.icon} />
                                                    <Typography className={classes.typ6}>
                                                        Flexible, simple license
                                                    </Typography>
                                                </div>
                                                <div style={{ display: 'flex' }}>
                                                    <CheckCircleOutlineIcon fontSize="medium" color="primary" className={classes.icon} />
                                                    <Typography className={classes.typ6}>
                                                        Speedy build toolin
                                                    </Typography>
                                                </div>
                                            </CardContent>

                                            <CardActions className={classes.cardbtnn1}>
                                                <Button variant="contained" color="primary" className={classes.cardbtn2} >
                                                    <Typography color="secondary" className={classes.typ3}>Buy now</Typography>
                                                </Button>
                                            </CardActions>

                                            <CardContent className={classes.cardbtnn1}>
                                                <Typography className={classes.typ8}>Fully Featured 30-day free trial</Typography>
                                            </CardContent>
                                        </Card>
                                    </div>
                                </Grid>

                                <Grid item xs={12} className={classes.cards1}>
                                    <div className={classes.div1}>
                                        <Card style={{ borderRadius: '3%' }}>
                                            <CardContent>
                                                <div style={{ borderBottom: '1px solid lightgrey' }}>
                                                    <Typography gutterBottom variant="h7" component="h2" className={classes.typ1}>
                                                        Premium
                                                    </Typography>
                                                    <Typography variant="body2" color="textSecondary" component="p" className={classes.typ3}>
                                                        Works perfect for small teams and companies
                                                    </Typography>
                                                </div>

                                                <div style={{ display: 'flex' }}>
                                                    <Typography className={classes.typ5}>
                                                        $89
                                                    </Typography>
                                                    <Typography color="textSecondary" className={classes.typ5}>
                                                        /mo
                                                    </Typography>
                                                </div>
                                                <div style={{ display: 'flex' }}>
                                                    <CheckCircleOutlineIcon fontSize="medium" color="primary" className={classes.icon} />
                                                    <Typography className={classes.typ6}>
                                                        Rich, responsive landing page
                                                    </Typography>
                                                </div>
                                                <div style={{ display: 'flex' }}>
                                                    <CheckCircleOutlineIcon fontSize="medium" color="primary" className={classes.icon} />
                                                    <Typography className={classes.typ6}>
                                                        100+ styled components
                                                    </Typography>
                                                </div>
                                                <div style={{ display: 'flex' }}>
                                                    <CheckCircleOutlineIcon fontSize="medium" color="primary" className={classes.icon} />
                                                    <Typography className={classes.typ6}>
                                                        Flexible, simple license
                                                    </Typography>
                                                </div>
                                                <div style={{ display: 'flex' }}>
                                                    <CheckCircleOutlineIcon fontSize="medium" color="primary" className={classes.icon} />
                                                    <Typography className={classes.typ6}>
                                                        Speedy build toolin
                                                    </Typography>
                                                </div>
                                            </CardContent>

                                            <CardActions className={classes.cardbtnn1}>
                                                <Button variant="outlined" className={classes.cardbtn1} >
                                                    <Typography color="primary" className={classes.typ3}>Buy now</Typography>
                                                </Button>
                                            </CardActions>

                                            <CardContent className={classes.cardbtnn1}>
                                                <Typography className={classes.typ8}>Fully Featured 30-day free trial</Typography>
                                            </CardContent>
                                        </Card>
                                    </div>
                                </Grid>
                            </div>
                        </Grid>
                        <Grid item xs={false} sm={1} />
                    </Grid>
                </div>

                <Paper elevation={0}  style={{ borderBottom: '1px solid lightgrey' }}className={classes.paper} />

            </div>
            <Footer />
        </ThemeProvider>
    );
};

export default Trainings;

