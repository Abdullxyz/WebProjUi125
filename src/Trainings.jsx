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
import Grid from '@material-ui/core/Grid';
import CardActionArea from '@material-ui/core/CardActionArea';


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
    typ2: {
        fontSize: '1.8vw',
        '@media (min-width:600px)': {
            fontSize: '0.9vw',
        },
        [theme.breakpoints.up('md')]: {
            marginLeft: '45%',
            fontSize: '2vm',
        },
    },
    typ3: {
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
    typ4: {
        fontSize: '2.5vw',
        marginTop: '6%',
        '@media (min-width:600px)': {
            fontSize: '2.1vw',
            marginTop: '3%',
        },
        [theme.breakpoints.up('md')]: {
            fontSize: '1.8vw',
            marginBottom: '3%',
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
    div0: {
        backgroundColor: "#e3f2fd",
    },
    div1: {
        maxWidth: 410,
    },
    div2: {
        marginTop: '2%',
    },
    div3: {
        width: '100%',
        '@media (min-width:600px)': {
            width: '100%',
        },
        [theme.breakpoints.up('md')]: {
            width: '30%',
        },
    },
    div4: {
        width: '100%',
        '@media (min-width:600px)': {
            width: '100%',
        },
        [theme.breakpoints.up('md')]: {
            width: '70%',
        },
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
    img2: {
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
    rating: {
        fontSize: '3.5vw',
        '@media (min-width:600px)': {
            fontSize: '2vw',
        },
        [theme.breakpoints.up('md')]: {
            fontSize: '200%',
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
            marginLeft: theme.spacing(4),
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
                        Trainings
                    </Typography>
                </div>
                <div >
                    <img src="https://i.ibb.co/7tTDhJg/image-13.png" className={classes.img0} />
                </div>

                <Paper elevation={0} className={classes.paper} />

                <div className={classes.div0}>
                    <div>
                        <Grid item container>
                            <Grid item xs={false} sm={1} />
                            <Grid item xs={12} sm={10}>
                                <div container className={classes.cards} >
                                    <Grid item xs={4} className={classes.cards0}>
                                        <div className={classes.div1}>
                                            <Card style={{ borderRadius: '3%' }}>
                                                <CardActionArea>
                                                    <CardMedia
                                                        component="img"
                                                        alt="Contemplative Reptile"
                                                        height="100%"
                                                        image="https://www.spaceist.co.uk/wp-content/uploads/Forty5-white-designer-desk-white-storage.jpg"
                                                        title="Contemplative Reptile"
                                                        className={classes.img2}
                                                    />
                                                    <CardContent>

                                                        <Paper elevation={0} >

                                                            <div className={classes.root}>

                                                                <div className={classes.div3}>
                                                                    <Typography color="primary" className={classes.typ1}>
                                                                        Bussiness
                                                                    </Typography>
                                                                </div>

                                                                <div className={classes.div4}>
                                                                    <Typography className={classes.typ2}>
                                                                        22 May 2020, 23:00
                                                                    </Typography>
                                                                </div>

                                                            </div>

                                                        </Paper>

                                                        <Grid container >

                                                        </Grid>
                                                        <Typography gutterBottom variant="h7" component="h2" className={classes.typ3}>
                                                            Microsoft excel - Excel from beginner to advance
                                                        </Typography>

                                                        <Typography gutterBottom variant="h7" component="h1" color="primary" className={classes.typ4}>
                                                            124$
                                                        </Typography>

                                                    </CardContent>
                                                </CardActionArea>
                                            </Card>
                                        </div>
                                    </Grid>
                                    <Grid item xs={4} className={classes.cards1}>
                                        <div className={classes.div1}>
                                            <Card style={{ borderRadius: '3%' }}>
                                                <CardActionArea>
                                                    <CardMedia
                                                        component="img"
                                                        alt="Contemplative Reptile"
                                                        height="230"
                                                        image="https://www.spaceist.co.uk/wp-content/uploads/Forty5-white-designer-desk-white-storage.jpg"
                                                        title="Contemplative Reptile"
                                                        className={classes.img2}
                                                    />
                                                    <CardContent>

                                                        <Paper elevation={0} >

                                                            <div className={classes.root}>

                                                                <div className={classes.div3}>
                                                                    <Typography color="primary" className={classes.typ1}>
                                                                        Bussiness
                                                                    </Typography>
                                                                </div>

                                                                <div className={classes.div4}>
                                                                    <Typography className={classes.typ2}>
                                                                        22 May 2020, 23:00
                                                                    </Typography>
                                                                </div>

                                                            </div>

                                                        </Paper>

                                                        <Grid container >

                                                        </Grid>
                                                        <Typography gutterBottom variant="h7" component="h2" className={classes.typ3}>
                                                            Microsoft excel - Excel from beginner to advance
                                                        </Typography>

                                                        <Typography gutterBottom variant="h7" component="h1" color="primary" className={classes.typ4}>
                                                            124$
                                                        </Typography>

                                                    </CardContent>
                                                </CardActionArea>
                                            </Card>
                                        </div>
                                    </Grid>
                                    <Grid item xs={4} className={classes.cards1}>
                                        <div className={classes.div1}>
                                            <Card style={{ borderRadius: '3%' }}>
                                                <CardActionArea>
                                                    <CardMedia
                                                        component="img"
                                                        alt="Contemplative Reptile"
                                                        height="230"
                                                        image="https://www.spaceist.co.uk/wp-content/uploads/Forty5-white-designer-desk-white-storage.jpg"
                                                        title="Contemplative Reptile"
                                                        className={classes.img2}
                                                    />
                                                    <CardContent>

                                                        <Paper elevation={0} >

                                                            <div className={classes.root}>

                                                                <div className={classes.div3}>
                                                                    <Typography color="primary" className={classes.typ1}>
                                                                        Bussiness
                                                                    </Typography>
                                                                </div>

                                                                <div className={classes.div4}>
                                                                    <Typography className={classes.typ2}>
                                                                        22 May 2020, 23:00
                                                                    </Typography>
                                                                </div>

                                                            </div>

                                                        </Paper>

                                                        <Grid container >

                                                        </Grid>
                                                        <Typography gutterBottom variant="h7" component="h2" className={classes.typ3}>
                                                            Microsoft excel - Excel from beginner to advance
                                                        </Typography>

                                                        <Typography gutterBottom variant="h7" component="h1" color="primary" className={classes.typ4}>
                                                            124$
                                                        </Typography>

                                                    </CardContent>
                                                </CardActionArea>
                                            </Card>
                                        </div>
                                    </Grid>
                                </div>
                            </Grid>
                            <Grid item xs={false} sm={1} />
                        </Grid>
                    </div>
                </div>

                <Paper elevation={0} className={classes.paper} />

                <div className={classes.div0}>
                    <div>
                        <Grid item container>
                            <Grid item xs={false} sm={1} />
                            <Grid item xs={12} sm={10}>
                                <div container className={classes.cards} >
                                    <Grid item xs={4} className={classes.cards0}>
                                        <div className={classes.div1}>
                                            <Card style={{ borderRadius: '3%' }}>
                                                <CardActionArea>
                                                    <CardMedia
                                                        component="img"
                                                        alt="Contemplative Reptile"
                                                        height="230"
                                                        image="https://www.spaceist.co.uk/wp-content/uploads/Forty5-white-designer-desk-white-storage.jpg"
                                                        title="Contemplative Reptile"
                                                        className={classes.img2}
                                                    />
                                                    <CardContent>

                                                        <Paper elevation={0} >

                                                            <div className={classes.root}>

                                                                <div className={classes.div3}>
                                                                    <Typography color="primary" className={classes.typ1}>
                                                                        Bussiness
                                                                    </Typography>
                                                                </div>

                                                                <div className={classes.div4}>
                                                                    <Typography className={classes.typ2}>
                                                                        22 May 2020, 23:00
                                                                    </Typography>
                                                                </div>

                                                            </div>

                                                        </Paper>

                                                        <Grid container >

                                                        </Grid>
                                                        <Typography gutterBottom variant="h7" component="h2" className={classes.typ3}>
                                                            Microsoft excel - Excel from beginner to advance
                                                        </Typography>

                                                        <Typography gutterBottom variant="h7" component="h1" color="primary" className={classes.typ4}>
                                                            124$
                                                        </Typography>

                                                    </CardContent>
                                                </CardActionArea>
                                            </Card>
                                        </div>
                                    </Grid>
                                    <Grid item xs={4} className={classes.cards1}>
                                        <div className={classes.div1}>
                                            <Card style={{ borderRadius: '3%' }}>
                                                <CardActionArea>
                                                    <CardMedia
                                                        component="img"
                                                        alt="Contemplative Reptile"
                                                        height="230"
                                                        image="https://www.spaceist.co.uk/wp-content/uploads/Forty5-white-designer-desk-white-storage.jpg"
                                                        title="Contemplative Reptile"
                                                        className={classes.img2}
                                                    />
                                                    <CardContent>

                                                        <Paper elevation={0} >

                                                            <div className={classes.root}>

                                                                <div className={classes.div3}>
                                                                    <Typography color="primary" className={classes.typ1}>
                                                                        Bussiness
                                                                    </Typography>
                                                                </div>

                                                                <div className={classes.div4}>
                                                                    <Typography className={classes.typ2}>
                                                                        22 May 2020, 23:00
                                                                    </Typography>
                                                                </div>

                                                            </div>

                                                        </Paper>

                                                        <Grid container >

                                                        </Grid>
                                                        <Typography gutterBottom variant="h7" component="h2" className={classes.typ3}>
                                                            Microsoft excel - Excel from beginner to advance
                                                        </Typography>

                                                        <Typography gutterBottom variant="h7" component="h1" color="primary" className={classes.typ4}>
                                                            124$
                                                        </Typography>

                                                    </CardContent>
                                                </CardActionArea>
                                            </Card>
                                        </div>
                                    </Grid>
                                    <Grid item xs={4} className={classes.cards1}>
                                        <div className={classes.div1}>
                                            <Card style={{ borderRadius: '3%' }}>
                                                <CardActionArea>
                                                    <CardMedia
                                                        component="img"
                                                        alt="Contemplative Reptile"
                                                        height="230"
                                                        image="https://www.spaceist.co.uk/wp-content/uploads/Forty5-white-designer-desk-white-storage.jpg"
                                                        title="Contemplative Reptile"
                                                        className={classes.img2}
                                                    />
                                                    <CardContent>

                                                        <Paper elevation={0} >

                                                            <div className={classes.root}>

                                                                <div className={classes.div3}>
                                                                    <Typography color="primary" className={classes.typ1}>
                                                                        Bussiness
                                                                    </Typography>
                                                                </div>

                                                                <div className={classes.div4}>
                                                                    <Typography className={classes.typ2}>
                                                                        22 May 2020, 23:00
                                                                    </Typography>
                                                                </div>

                                                            </div>

                                                        </Paper>

                                                        <Grid container >

                                                        </Grid>
                                                        <Typography gutterBottom variant="h7" component="h2" className={classes.typ3}>
                                                            Microsoft excel - Excel from beginner to advance
                                                        </Typography>

                                                        <Typography gutterBottom variant="h7" component="h1" color="primary" className={classes.typ4}>
                                                            124$
                                                        </Typography>

                                                    </CardContent>
                                                </CardActionArea>
                                            </Card>
                                        </div>
                                    </Grid>
                                </div>
                            </Grid>
                            <Grid item xs={false} sm={1} />
                        </Grid>
                    </div>
                </div>

                <Paper elevation={0} className={classes.paper} />
            </div>
            <Footer />
        </ThemeProvider>
    );
};

export default Trainings;

