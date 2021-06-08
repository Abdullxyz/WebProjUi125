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
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import CardActionArea from '@material-ui/core/CardActionArea';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTitleBar from '@material-ui/core/GridListTileBar';
import CardActions from '@material-ui/core/CardActions';
import Rating from '@material-ui/lab/Rating';
import { Route } from 'react-router-dom';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';



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
    container: {
        width: '100%',
        height: '220px',
        display: 'flex',
        '@media (min-width:600px)': {
            width: '100%',
            height: '320px',
            display: 'flex',
        },
        [theme.breakpoints.up('md')]: {
            width: '100%',
            height: '450px',
            display: 'flex',
        },
    },
    typ1: {
        fontWeight: 'bold',
        fontSize: '3.2vw',
        marginLeft: theme.spacing(3),
        marginTop: theme.spacing(2),
        '@media (min-width:600px)': {
            fontSize: '30px',
            marginLeft: theme.spacing(5),
            marginTop: theme.spacing(4),
        },
        [theme.breakpoints.up('md')]: {
            fontSize: '45px',
            marginLeft: theme.spacing(8),
            marginTop: theme.spacing(6),
        },
    },
    typ2: {
        fontSize: '2vw',
        marginLeft: theme.spacing(3),
        marginTop: theme.spacing(2),
        '@media (min-width:600px)': {
            fontSize: '10px',
            marginLeft: theme.spacing(5),
            marginTop: theme.spacing(3),
        },
        [theme.breakpoints.up('md')]: {
            fontSize: '17px',
            marginLeft: theme.spacing(8),
            marginTop: theme.spacing(3),
        },
    },
    typ3: {
        fontSize: '2.2vw',
        '@media (min-width:600px)': {
            fontSize: '10px',
        },
        [theme.breakpoints.up('md')]: {
            fontSize: '20px',
        },
    },
    typ4: {
        fontSize: '6.5px',
        marginLeft: theme.spacing(3),
        marginTop: theme.spacing(2),
        '@media (min-width:600px)': {
            fontSize: '15.5px',
            marginLeft: theme.spacing(5),
            marginTop: theme.spacing(3),
        },
        [theme.breakpoints.up('md')]: {
            fontSize: '1.6vw',
            marginLeft: theme.spacing(8),
            marginRight: '3%',
            marginTop: theme.spacing(3),
        },
    },
    typ5: {
        fontSize: '10px',
        marginLeft: theme.spacing(3),
        marginTop: theme.spacing(2),
        '@media (min-width:600px)': {
            fontSize: '10px',
            marginLeft: theme.spacing(5),
            marginTop: theme.spacing(3),
        },
        [theme.breakpoints.up('md')]: {
            fontSize: '22px',
            marginLeft: theme.spacing(8),
            marginTop: theme.spacing(3),
        },
    },
    typ6: {
        fontWeight: 'bold',
        fontSize: '16px',
        paddingTop: '30px',
        marginLeft: theme.spacing(2),
        marginTop: theme.spacing(2),
        '@media (min-width:600px)': {
            fontSize: '30px',
            marginLeft: theme.spacing(5),
            paddingTop: '30px',
        },
        [theme.breakpoints.up('md')]: {
            fontSize: '40px',
            marginLeft: theme.spacing(3),
            marginTop: theme.spacing(4),
        },
    },
    typ7: {
        fontWeight: 'bold',
        fontSize: '16px',
        marginLeft: theme.spacing(2),
        marginTop: theme.spacing(2),
        '@media (min-width:600px)': {
            fontSize: '20px',
            marginLeft: theme.spacing(5),
            marginTop: theme.spacing(4),
        },
        [theme.breakpoints.up('md')]: {
            fontSize: '25px',
            marginLeft: theme.spacing(3),
            marginTop: theme.spacing(4),
        },
    },
    typ8: {
        fontSize: '16px',
        marginLeft: theme.spacing(2),
        marginTop: theme.spacing(2),
        '@media (min-width:600px)': {
            fontSize: '20px',
            marginLeft: theme.spacing(5),
            marginTop: theme.spacing(4),
        },
        [theme.breakpoints.up('md')]: {
            fontSize: '22px',
            marginLeft: theme.spacing(3),
            marginTop: theme.spacing(3),
        },
    },


    icons: {
        marginLeft: theme.spacing(1),
        marginTop: theme.spacing(2),
        '@media (min-width:600px)': {
            marginLeft: theme.spacing(5),
            marginTop: theme.spacing(2),
        },
        [theme.breakpoints.up('md')]: {
            marginLeft: theme.spacing(6),
            marginTop: theme.spacing(2),
        },
    },
    box1: {
        width: '42%',
        background: '#009933',
        color: '#fff',
        boxSizing: 'border-box',
        padding: '10px 20px',
        verticalAlign: 'top',
        position: 'relative',
        height: '100%',
        display: 'inline-block',
        marginLeft: '-5px',
        zIndex: 2,
        "&::before": {
            content: `''`,
            position: 'absolute',
            top: 0, right: '-60px',
            width: '120px', height: '100%',
            background: '#009933',
            transform: 'skewX(15deg)',
            zIndex: -1,
        }
    },
    box2: {
        width: '60%',
        background: `url(https://www.govloop.com/wp-content/uploads/2016/09/iStock_84898383_LARGE-e1540225231490-768x338.jpg)`,
        backgroundSize: '100% 100%',
    },
    cardbtn0: {
        background: '#00cc44',
        marginLeft: theme.spacing(3),
        marginTop: theme.spacing(2),
        padding: "6px 30px",
        '@media (min-width:600px)': {
            background: '#00cc44',
            marginLeft: theme.spacing(5),
            marginTop: theme.spacing(3),
            padding: "11px 50px",
        },
        [theme.breakpoints.up('md')]: {
            background: '#00cc44',
            marginLeft: theme.spacing(8),
            marginTop: theme.spacing(3),
            padding: "11px 50px",
        },
    },
    cardbtn1: {
        marginTop: '6%',
        marginBottom: '6%',
        background: '#00cc44',
        padding: "6px 30px",
        '@media (min-width:600px)': {
            background: '#00cc44',
            padding: "11px 50px",
        },
        [theme.breakpoints.up('md')]: {
            background: '#00cc44',
            padding: "11px 30%",
        },
    },
    cardbtnn1: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    cardbtn2: {
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
    div1: {
        width: '95%',
        '@media (min-width:600px)': {
            width: '95%',
        },
        [theme.breakpoints.up('md')]: {
            width: '65%',
        },
    },
    div2: {
        width: '95%',
        '@media (min-width:600px)': {
            width: '95%',
        },
        [theme.breakpoints.up('md')]: {
            width: '35%',
            marginTop: '2.5%',
        },
    },
    div6: {
        marginTop: '2%',
        marginBottom: '5%',
    },
    paper0: {
        backgroundColor: "#e3f2fd",
        width: '70%',
        height: '90%',
        marginLeft: '16%',
        '@media (min-width:600px)': {
            backgroundColor: "#e3f2fd",
            width: '70%',
            height: '90%',
            marginTop: '4%',
            marginLeft: '18%',
        },
        [theme.breakpoints.up('md')]: {
            backgroundColor: "#e3f2fd",
            width: '32%',
            height: '90%',
            marginTop: '4%',
            marginLeft: '0%',
        },
    },

    typ9: {
        fontSize: '1.8vw',
        marginBottom: '5%',
        '@media (min-width:600px)': {
            fontSize: '1.5vw',
            marginBottom: '3%',
        },
        [theme.breakpoints.up('md')]: {
            fontSize: '1.2vm',
            marginBottom: '0%',
        },
    },
    typ10: {
        fontSize: '1.8vw',
        '@media (min-width:600px)': {
            fontSize: '0.9vw',
        },
        [theme.breakpoints.up('md')]: {
            marginLeft: '45%',
            fontSize: '2vm',
        },
    },
    typ11: {
        fontSize: '2.1vw',
        marginTop: '3%',
        marginBottom: '3%',
        '@media (min-width:600px)': {
            fontSize: '1.8vw',
            marginTop: '3%',
            marginBottom: '3%',
        },
        [theme.breakpoints.up('md')]: {
            fontSize: '1.5vw',
            marginBottom: '3%',
            marginTop: '3%',
        },
    },
    typ12: {
        fontSize: '2.5vw',
        marginTop: '10%',
        '@media (min-width:600px)': {
            fontSize: '2.1vw',
            marginTop: '3%',
        },
        [theme.breakpoints.up('md')]: {
            fontSize: '1.8vw',
            marginBottom: '3%',
        },
    },
    div3: {
        maxWidth: 410,
    },
    cards: {
        display: 'flex',
        marginLeft: theme.spacing(0.5),
        marginRight: theme.spacing(0.5),
        width: '93.5%',
        '@media (min-width:600px)': {
            display: 'flex',
            marginLeft: 'theme.spacing(0.5)',
            marginRight: theme.spacing(0.5),
        },
        [theme.breakpoints.up('md')]: {
            display: 'flex',
        },
    },
    img: {
        width: '100%',
        height: '100%',
        '@media (min-width:600px)': {
            width: '100%',
            height: '100%',
        },
        [theme.breakpoints.up('md')]: {
            width: '100%',
            height: '100%',
        },
    },
    cardbtn: {
        padding: "1vw 2vw",
        marginBottom: '3%',
        marginLeft: theme.spacing(1),
        marginTop: '-16%',
        '@media (min-width:600px)': {
            padding: "1vw 3vw",
            marginBottom: theme.spacing(1),
            marginLeft: theme.spacing(1),
            marginTop: '-10%',
        },
        [theme.breakpoints.up('md')]: {
            padding: "1vw 3vw",
            marginBottom: '3%',
            marginLeft: theme.spacing(1),
            marginTop: '0%',
        },
    },
    buttn1: {
        width: '30%',
        display: 'flex',
        marginTop: theme.spacing(2),
        display: 'flex',
        justifyContent: 'flex-end',
        '@media (min-width:600px)': {
            marginTop: theme.spacing(3),
        },
        [theme.breakpoints.up('md')]: {
            fontSize: 18,
            marginLeft: '0%',
        },
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
            marginLeft: '2%',
        },
        [theme.breakpoints.up('md')]: {
            marginLeft: '2%',
        },
    },
    paper: {
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        backgroundColor: "#e3f2fd",
        '@media (min-width:600px)': {
            padding: theme.spacing(2),
            textAlign: 'center',
            color: theme.palette.text.secondary,
            backgroundColor: "#e3f2fd",
        },
        [theme.breakpoints.up('md')]: {
            padding: theme.spacing(3),
            textAlign: 'center',
            color: theme.palette.text.secondary,
            backgroundColor: "#e3f2fd",
        },
    },
    text1: {
        fontWeight: 'bold',
        fontSize: '2.5vw',
        marginLeft: '5%',
        marginTop: '5%',
    }
}));





const Home = () => {

    const classes = useStyles();
    const [value, setValue] = React.useState(2);

    return (
        <ThemeProvider theme={theme}>
            <Header />
            <div>
                <div className={classes.container}>
                    <div className={classes.box1}>
                        <Typography className={classes.typ1}>Training Name</Typography>
                        <Typography className={classes.typ2}>
                            Forward thinking businesses use our cloud backup service to <br />
                            ensure data reliability and safety.
                        </Typography>
                        <Button variant="contained" className={classes.cardbtn0} >
                            <Typography color="secondary" className={classes.typ3}>Buy now</Typography>
                        </Button>
                    </div>
                    <div className={classes.box2} />
                </div>
                <div className={classes.root}>
                    <div className={classes.div1}>
                        <Typography className={classes.typ1}>
                            Our Mission
                        </Typography>
                        <Typography className={classes.typ4}>
                            Our orignal half-day offering with Dr.DiAngelo is a 3.5 hour workshop that offers
                            the bulk of her researh, systemic analysis of white supermacy, and work around
                            Whiteness and White Fragility. Dr. DiAngelo takes participants through topics
                            including white socialization, systemic racism and the specific ways racism
                            manifests for white progressives. This will be combination of lecture, structured
                            reflection, and small group discussiondesigned to provide a comprehensive system
                            analysis and identify personal complicity. it is an excellent and powerful
                            foundation training that presents an undeniable prespective of the systemic
                            nature of racism, internalized white supermacy and the need for a systemic remedy
                            that begins with indvidual and collective transformation.
                            </Typography>
                        <Typography color="textSecondary" className={classes.typ5}>
                            Share with friend
                            </Typography>
                        <div className={classes.icons}>
                            <Button><TwitterIcon fontSize="large" /></Button>
                            <Button><FacebookIcon fontSize="large" /></Button>
                            <Button><LinkedInIcon fontSize="large" /></Button>
                        </div>
                    </div>

                    <Paper className={classes.paper0}>
                        <Typography className={classes.typ6}>
                            $12.99
                            </Typography>
                        <Typography className={classes.typ7}>
                            Course includes
                            </Typography>
                        <Typography className={classes.typ8}>
                            13 articles
                            </Typography>
                        <Typography className={classes.typ8}>
                            5 downloadable resources
                            </Typography>
                        <Typography className={classes.typ8}>
                            Full lifetime access
                            </Typography>
                        <Typography className={classes.typ8}>
                            Access on mobile and TV
                            </Typography>
                        <Typography className={classes.typ8}>
                            Certificate of completion
                            </Typography>
                        <div className={classes.cardbtnn1}>
                            <Button variant="contained" className={classes.cardbtn1} >
                                <Typography color="secondary" className={classes.typ3}>Buy now</Typography>
                            </Button>
                        </div>
                    </Paper>
                </div>

                <div>
                    <Typography className={classes.text1}>Similar trainings</Typography>
                </div>

                <div className={classes.div6}>
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <div container className={classes.cards} >
                            <Grid item xs={4} className={classes.cards1}>
                                <div className={classes.div3}>
                                    <Card style={{ borderRadius: '3%' }}>
                                        <CardActionArea>
                                            <CardMedia
                                                component="img"
                                                alt="Contemplative Reptile"
                                                height="100%"
                                                image="https://www.spaceist.co.uk/wp-content/uploads/Forty5-white-designer-desk-white-storage.jpg"
                                                title="Contemplative Reptile"
                                                className={classes.img}
                                            />
                                            <CardContent>

                                                <Paper elevation={0} >

                                                    <Typography color="primary" className={classes.typ9}>
                                                        Bussiness
                                                    </Typography>

                                                </Paper>

                                                <Grid container >

                                                </Grid>
                                                <Typography gutterBottom variant="h7" component="h2" className={classes.typ11}>
                                                    Microsoft excel - Excel from beginner to advance
                                                        </Typography>

                                                <Typography gutterBottom variant="h7" component="h1" color="primary" className={classes.typ12}>
                                                    124$
                                                        </Typography>

                                            </CardContent>
                                        </CardActionArea>
                                    </Card>
                                </div>
                            </Grid>
                            
                            <Grid item xs={4} className={classes.cards1}>
                                <div className={classes.div3}>
                                    <Card style={{ borderRadius: '3%' }}>
                                        <CardActionArea>
                                            <CardMedia
                                                component="img"
                                                alt="Contemplative Reptile"
                                                height="100%"
                                                image="https://www.spaceist.co.uk/wp-content/uploads/Forty5-white-designer-desk-white-storage.jpg"
                                                title="Contemplative Reptile"
                                                className={classes.img}
                                            />
                                            <CardContent>

                                                <Paper elevation={0} >

                                                    <Typography color="primary" className={classes.typ9}>
                                                        Bussiness
                                                    </Typography>

                                                </Paper>

                                                <Grid container >

                                                </Grid>
                                                <Typography gutterBottom variant="h7" component="h2" className={classes.typ11}>
                                                    Microsoft excel - Excel from beginner to advance
                                                        </Typography>

                                                <Typography gutterBottom variant="h7" component="h1" color="primary" className={classes.typ12}>
                                                    124$
                                                        </Typography>

                                            </CardContent>
                                        </CardActionArea>
                                    </Card>
                                </div>
                            </Grid>

                            <Grid item xs={4} className={classes.cards1}>
                                <div className={classes.div3}>
                                    <Card style={{ borderRadius: '3%' }}>
                                        <CardActionArea>
                                            <CardMedia
                                                component="img"
                                                alt="Contemplative Reptile"
                                                height="100%"
                                                image="https://www.spaceist.co.uk/wp-content/uploads/Forty5-white-designer-desk-white-storage.jpg"
                                                title="Contemplative Reptile"
                                                className={classes.img}
                                            />
                                            <CardContent>

                                                <Paper elevation={0} >

                                                    <Typography color="primary" className={classes.typ9}>
                                                        Bussiness
                                                    </Typography>

                                                </Paper>

                                                <Grid container >

                                                </Grid>
                                                <Typography gutterBottom variant="h7" component="h2" className={classes.typ11}>
                                                    Microsoft excel - Excel from beginner to advance
                                                        </Typography>

                                                <Typography gutterBottom variant="h7" component="h1" color="primary" className={classes.typ12}>
                                                    124$
                                                        </Typography>

                                            </CardContent>
                                        </CardActionArea>
                                    </Card>
                                </div>
                            </Grid>
                        </div>

                    </div>
                </div>

            </div >
            <hr />
            <Footer />
        </ThemeProvider >
    );
};

export default Home;

