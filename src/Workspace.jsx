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
            fontSize: '1.2vw',
            marginBottom: '5%',
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
            marginLeft: '50%',
            fontSize: '1.1vm',
        },
    },
    typ3: {
        fontSize: '1.5vw',
        marginTop: '3%',
        marginBottom: '3%',
        '@media (min-width:600px)': {
            fontSize: '50%',
            marginTop: '3%',
            marginBottom: '3%',
        },
        [theme.breakpoints.up('md')]: {
            fontSize: '100%',
            marginBottom: '3%',
            marginTop: '3%',
        },
    },
    typ4: {
        fontSize: '1.4vw',
        '@media (min-width:600px)': {
            fontSize: '50%',
        },
        [theme.breakpoints.up('md')]: {
            fontSize: '100%',
        },
    },
    text1: {
        width: '64%',
        marginTop: theme.spacing(2.5),
        fontSize: '2.8vw',
        marginLeft: theme.spacing(0.5),
        '@media (min-width:600px)': {
            fontSize: '2.2vw',
            marginLeft: theme.spacing(0),
        },
        [theme.breakpoints.up('md')]: {
            fontSize: '2vw',
            marginLeft: theme.spacing(0),
        },
    },
    text2: {
        fontSize: '2.2vw',
        '@media (min-width:600px)': {
            fontSize: '1.5vw',
        },
        [theme.breakpoints.up('md')]: {
            fontSize: '1.2vw',
        },
    },
    img1: {
        width: '100%',
        height: 200,
        '@media (min-width:600px)': {
            width: '100%',
            height: 300,
        },
        [theme.breakpoints.up('md')]: {
            width: '100%',
            height: 400,
        },
    },
    div0: {
        backgroundColor: "#e3f2fd",
    },
    div1: {
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
    div333: {
        width: '95%',
        '@media (min-width:600px)': {
            width: '95%',
        },
        [theme.breakpoints.up('md')]: {
            width: '65%',
        },
    },
    div444: {
        width: '95%',
        '@media (min-width:600px)': {
            width: '95%',
        },
        [theme.breakpoints.up('md')]: {
            width: '35%',
        },
    },
    rating000: {
        fontSize: '3.5vw',
        '@media (min-width:600px)': {
            fontSize: '2vw',
        },
        [theme.breakpoints.up('md')]: {
            fontSize: '200%',
        },
    },
    cardbtn000: {
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
    typ111: {
        fontSize: '1.6vw',
        marginBottom: '5%',
        '@media (min-width:600px)': {
            fontSize: '1.2vw',
            marginBottom: '5%',
        },
        [theme.breakpoints.up('md')]: {
            fontSize: '1.2vm',
            marginBottom: '0%',
        },
    },
    typ222: {
        fontSize: '1.8vw',
        '@media (min-width:600px)': {
            fontSize: '0.9vw',
        },
        [theme.breakpoints.up('md')]: {
            marginLeft: '50%',
            fontSize: '1.1vm',
        },
    },
    typ333: {
        fontSize: '1.5vw',
        marginTop: '3%',
        marginBottom: '3%',
        '@media (min-width:600px)': {
            fontSize: '50%',
            marginTop: '3%',
            marginBottom: '3%',
        },
        [theme.breakpoints.up('md')]: {
            fontSize: '100%',
            marginBottom: '3%',
            marginTop: '3%',
        },
    },
    typ444: {
        fontSize: '60%',
        '@media (min-width:600px)': {
            fontSize: '50%',
        },
        [theme.breakpoints.up('md')]: {
            fontSize: '100%',
        },
    },
}));





const Workspace = () => {

    const classes = useStyles();
    const [value, setValue] = React.useState(2);

    return (
        <ThemeProvider theme={theme}>
            <Header />
            <div>
                <div>
                    <Typography className={classes.typ0}>
                        Workspace
                    </Typography>
                </div>

                <Paper elevation={0} className={classes.paper} />

                <div className={classes.div0}>
                    <div>
                        <Grid item container>
                            <Grid item xs={false} sm={1} />
                            <Grid item xs={12} sm={10}>

                                <Grid item xs={12} sm={12} style={{ display: 'flex' }}>
                                    <Typography className={classes.text1}>Recomended Solution</Typography>
                                    <Button className={classes.buttn1} color="primary" >
                                        <Typography className={classes.text2}>
                                            See More
                                        </Typography>
                                    </Button>
                                </Grid>

                                <div container className={classes.cards} >
                                    <Grid item xs={4} className={classes.cards0}>
                                        <div className={classes.div1}>
                                            <Card >
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

                                                                <div className={classes.div333}>
                                                                    <Typography gutterBottom variant="h7" component="h2" className={classes.typ111}>
                                                                        NAME OF THE OFFICE
                                                                    </Typography>
                                                                </div>

                                                                <div className={classes.div444}>
                                                                    <Typography gutterBottom variant="h7" component="h2" className={classes.typ222}>
                                                                        $400/DAY
                                                                    </Typography>
                                                                </div>

                                                            </div>

                                                        </Paper>

                                                        <Grid container >

                                                        </Grid>
                                                        <Typography variant="body2" color="textSecondary" component="p" className={classes.typ333}>
                                                            5547 Amina common suit 534
                                                        </Typography>

                                                        <Rating
                                                            className={classes.rating000}
                                                            name="simple-controlled"
                                                            value={value}
                                                            onChange={(event, newValue) => {
                                                                setValue(newValue);
                                                            }}
                                                        />
                                                    </CardContent>
                                                </CardActionArea>
                                                <CardActions>
                                                    <ThemeProvider theme={theme}>
                                                        <Route render={({ history }) => (
                                                            <Button variant="contained" color="primary" className={classes.cardbtn000} onClick={() => { history.push('/WorkspaceDetails') }}>
                                                                <Typography color="secondary" className={classes.typ444}>BOOK</Typography>
                                                            </Button>
                                                        )} />
                                                    </ThemeProvider>
                                                </CardActions>
                                            </Card>
                                        </div>
                                    </Grid>
                                    <Grid item xs={4} className={classes.cards1}>
                                        <div className={classes.div1}>
                                            <Card>
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

                                                                <div className={classes.div333}>
                                                                    <Typography gutterBottom variant="h7" component="h2" className={classes.typ111}>
                                                                        NAME OF THE OFFICE
                                                                    </Typography>
                                                                </div>

                                                                <div className={classes.div444}>
                                                                    <Typography gutterBottom variant="h7" component="h2" className={classes.typ222}>
                                                                        $400/DAY
                                                                    </Typography>
                                                                </div>

                                                            </div>

                                                        </Paper>

                                                        <Grid container >

                                                        </Grid>
                                                        <Typography variant="body2" color="textSecondary" component="p" className={classes.typ333}>
                                                            5547 Amina common suit 534
                                                        </Typography>

                                                        <Rating
                                                            className={classes.rating000}
                                                            name="simple-controlled"
                                                            value={value}
                                                            onChange={(event, newValue) => {
                                                                setValue(newValue);
                                                            }}
                                                        />
                                                    </CardContent>
                                                </CardActionArea>
                                                <CardActions>
                                                    <ThemeProvider theme={theme}>
                                                        <Route render={({ history }) => (
                                                            <Button variant="contained" color="primary" className={classes.cardbtn000} onClick={() => { history.push('/WorkspaceDetails') }}>
                                                                <Typography color="secondary" className={classes.typ444}>BOOK</Typography>
                                                            </Button>
                                                        )} />
                                                    </ThemeProvider>
                                                </CardActions>
                                            </Card>
                                        </div>
                                    </Grid>
                                    <Grid item xs={4} className={classes.cards1}>
                                        <div className={classes.div1}>
                                            <Card>
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

                                                                <div className={classes.div333}>
                                                                    <Typography gutterBottom variant="h7" component="h2" className={classes.typ111}>
                                                                        NAME OF THE OFFICE
                                                                    </Typography>
                                                                </div>

                                                                <div className={classes.div444}>
                                                                    <Typography gutterBottom variant="h7" component="h2" className={classes.typ222}>
                                                                        $400/DAY
                                                                    </Typography>
                                                                </div>

                                                            </div>

                                                        </Paper>

                                                        <Grid container >

                                                        </Grid>
                                                        <Typography variant="body2" color="textSecondary" component="p" className={classes.typ333}>
                                                            5547 Amina common suit 534
                                                        </Typography>

                                                        <Rating
                                                            className={classes.rating000}
                                                            name="simple-controlled"
                                                            value={value}
                                                            onChange={(event, newValue) => {
                                                                setValue(newValue);
                                                            }}
                                                        />
                                                    </CardContent>
                                                </CardActionArea>
                                                <CardActions>
                                                    <ThemeProvider theme={theme}>
                                                        <Route render={({ history }) => (
                                                            <Button variant="contained" color="primary" className={classes.cardbtn000} onClick={() => { history.push('/WorkspaceDetails') }}>
                                                                <Typography color="secondary" className={classes.typ444}>BOOK</Typography>
                                                            </Button>
                                                        )} />
                                                    </ThemeProvider>
                                                </CardActions>
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

                                <Grid item xs={12} sm={12} style={{ display: 'flex' }}>
                                    <Typography className={classes.text1}>Recomended Solution</Typography>
                                    <Button className={classes.buttn1} color="primary" >
                                        <Typography className={classes.text2}>
                                            See More
                                        </Typography>
                                    </Button>
                                </Grid>

                                <div container className={classes.cards} >
                                    <Grid item xs={4} className={classes.cards0}>
                                        <div className={classes.div1}>
                                            <Card >
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

                                                                <div className={classes.div333}>
                                                                    <Typography gutterBottom variant="h7" component="h2" className={classes.typ111}>
                                                                        NAME OF THE OFFICE
                                                                    </Typography>
                                                                </div>

                                                                <div className={classes.div444}>
                                                                    <Typography gutterBottom variant="h7" component="h2" className={classes.typ222}>
                                                                        $400/DAY
                                                                    </Typography>
                                                                </div>

                                                            </div>

                                                        </Paper>

                                                        <Grid container >

                                                        </Grid>
                                                        <Typography variant="body2" color="textSecondary" component="p" className={classes.typ333}>
                                                            5547 Amina common suit 534
                                                        </Typography>

                                                        <Rating
                                                            className={classes.rating000}
                                                            name="simple-controlled"
                                                            value={value}
                                                            onChange={(event, newValue) => {
                                                                setValue(newValue);
                                                            }}
                                                        />
                                                    </CardContent>
                                                </CardActionArea>
                                                <CardActions>
                                                    <ThemeProvider theme={theme}>
                                                        <Route render={({ history }) => (
                                                            <Button variant="contained" color="primary" className={classes.cardbtn000} onClick={() => { history.push('/WorkspaceDetails') }}>
                                                                <Typography color="secondary" className={classes.typ444}>BOOK</Typography>
                                                            </Button>
                                                        )} />
                                                    </ThemeProvider>
                                                </CardActions>
                                            </Card>
                                        </div>
                                    </Grid>
                                    <Grid item xs={4} className={classes.cards1}>
                                        <div className={classes.div1}>
                                            <Card>
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

                                                                <div className={classes.div333}>
                                                                    <Typography gutterBottom variant="h7" component="h2" className={classes.typ111}>
                                                                        NAME OF THE OFFICE
                                                                    </Typography>
                                                                </div>

                                                                <div className={classes.div444}>
                                                                    <Typography gutterBottom variant="h7" component="h2" className={classes.typ222}>
                                                                        $400/DAY
                                                                    </Typography>
                                                                </div>

                                                            </div>

                                                        </Paper>

                                                        <Grid container >

                                                        </Grid>
                                                        <Typography variant="body2" color="textSecondary" component="p" className={classes.typ333}>
                                                            5547 Amina common suit 534
                                                        </Typography>

                                                        <Rating
                                                            className={classes.rating000}
                                                            name="simple-controlled"
                                                            value={value}
                                                            onChange={(event, newValue) => {
                                                                setValue(newValue);
                                                            }}
                                                        />
                                                    </CardContent>
                                                </CardActionArea>
                                                <CardActions>
                                                    <ThemeProvider theme={theme}>
                                                        <Route render={({ history }) => (
                                                            <Button variant="contained" color="primary" className={classes.cardbtn000} onClick={() => { history.push('/WorkspaceDetails') }}>
                                                                <Typography color="secondary" className={classes.typ444}>BOOK</Typography>
                                                            </Button>
                                                        )} />
                                                    </ThemeProvider>
                                                </CardActions>
                                            </Card>
                                        </div>
                                    </Grid>
                                    <Grid item xs={4} className={classes.cards1}>
                                        <div className={classes.div1}>
                                            <Card>
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

                                                                <div className={classes.div333}>
                                                                    <Typography gutterBottom variant="h7" component="h2" className={classes.typ111}>
                                                                        NAME OF THE OFFICE
                                                                    </Typography>
                                                                </div>

                                                                <div className={classes.div444}>
                                                                    <Typography gutterBottom variant="h7" component="h2" className={classes.typ222}>
                                                                        $400/DAY
                                                                    </Typography>
                                                                </div>

                                                            </div>

                                                        </Paper>

                                                        <Grid container >

                                                        </Grid>
                                                        <Typography variant="body2" color="textSecondary" component="p" className={classes.typ333}>
                                                            5547 Amina common suit 534
                                                        </Typography>

                                                        <Rating
                                                            className={classes.rating000}
                                                            name="simple-controlled"
                                                            value={value}
                                                            onChange={(event, newValue) => {
                                                                setValue(newValue);
                                                            }}
                                                        />
                                                    </CardContent>
                                                </CardActionArea>
                                                <CardActions>
                                                    <ThemeProvider theme={theme}>
                                                        <Route render={({ history }) => (
                                                            <Button variant="contained" color="primary" className={classes.cardbtn000} onClick={() => { history.push('/WorkspaceDetails') }}>
                                                                <Typography color="secondary" className={classes.typ444}>BOOK</Typography>
                                                            </Button>
                                                        )} />
                                                    </ThemeProvider>
                                                </CardActions>
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

                <div style={{ marginTop: '5%', marginBottom: '5%' }}>
                    <div>
                        <Grid item container>
                            <Grid item xs={false} sm={1} />
                            <Grid item xs={12} sm={10}>

                                <Grid item xs={12} sm={12} style={{ display: 'flex' }}>
                                    <Typography className={classes.text1}>Recomended Solution</Typography>
                                    <Button className={classes.buttn1} color="primary" >
                                        <Typography className={classes.text2}>
                                            See More
                                        </Typography>
                                    </Button>
                                </Grid>

                                <div container className={classes.cards} >
                                    <Grid item xs={4} className={classes.cards0}>
                                        <div className={classes.div1}>
                                            <Card >
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

                                                                <div className={classes.div333}>
                                                                    <Typography gutterBottom variant="h7" component="h2" className={classes.typ111}>
                                                                        NAME OF THE OFFICE
                                                                    </Typography>
                                                                </div>

                                                                <div className={classes.div444}>
                                                                    <Typography gutterBottom variant="h7" component="h2" className={classes.typ222}>
                                                                        $400/DAY
                                                                    </Typography>
                                                                </div>

                                                            </div>

                                                        </Paper>

                                                        <Grid container >

                                                        </Grid>
                                                        <Typography variant="body2" color="textSecondary" component="p" className={classes.typ333}>
                                                            5547 Amina common suit 534
                                                        </Typography>

                                                        <Rating
                                                            className={classes.rating000}
                                                            name="simple-controlled"
                                                            value={value}
                                                            onChange={(event, newValue) => {
                                                                setValue(newValue);
                                                            }}
                                                        />
                                                    </CardContent>
                                                </CardActionArea>
                                                <CardActions>
                                                    <ThemeProvider theme={theme}>
                                                        <Route render={({ history }) => (
                                                            <Button variant="contained" color="primary" className={classes.cardbtn000} onClick={() => { history.push('/WorkspaceDetails') }}>
                                                                <Typography color="secondary" className={classes.typ444}>BOOK</Typography>
                                                            </Button>
                                                        )} />
                                                    </ThemeProvider>
                                                </CardActions>
                                            </Card>
                                        </div>
                                    </Grid>
                                    <Grid item xs={4} className={classes.cards1}>
                                        <div className={classes.div1}>
                                            <Card>
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

                                                                <div className={classes.div333}>
                                                                    <Typography gutterBottom variant="h7" component="h2" className={classes.typ111}>
                                                                        NAME OF THE OFFICE
                                                                    </Typography>
                                                                </div>

                                                                <div className={classes.div444}>
                                                                    <Typography gutterBottom variant="h7" component="h2" className={classes.typ222}>
                                                                        $400/DAY
                                                                    </Typography>
                                                                </div>

                                                            </div>

                                                        </Paper>

                                                        <Grid container >

                                                        </Grid>
                                                        <Typography variant="body2" color="textSecondary" component="p" className={classes.typ333}>
                                                            5547 Amina common suit 534
                                                        </Typography>

                                                        <Rating
                                                            className={classes.rating000}
                                                            name="simple-controlled"
                                                            value={value}
                                                            onChange={(event, newValue) => {
                                                                setValue(newValue);
                                                            }}
                                                        />
                                                    </CardContent>
                                                </CardActionArea>
                                                <CardActions>
                                                    <ThemeProvider theme={theme}>
                                                        <Route render={({ history }) => (
                                                            <Button variant="contained" color="primary" className={classes.cardbtn000} onClick={() => { history.push('/WorkspaceDetails') }}>
                                                                <Typography color="secondary" className={classes.typ444}>BOOK</Typography>
                                                            </Button>
                                                        )} />
                                                    </ThemeProvider>
                                                </CardActions>
                                            </Card>
                                        </div>
                                    </Grid>
                                    <Grid item xs={4} className={classes.cards1}>
                                        <div className={classes.div1}>
                                            <Card>
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

                                                                <div className={classes.div333}>
                                                                    <Typography gutterBottom variant="h7" component="h2" className={classes.typ111}>
                                                                        NAME OF THE OFFICE
                                                                    </Typography>
                                                                </div>

                                                                <div className={classes.div444}>
                                                                    <Typography gutterBottom variant="h7" component="h2" className={classes.typ222}>
                                                                        $400/DAY
                                                                    </Typography>
                                                                </div>

                                                            </div>

                                                        </Paper>

                                                        <Grid container >

                                                        </Grid>
                                                        <Typography variant="body2" color="textSecondary" component="p" className={classes.typ333}>
                                                            5547 Amina common suit 534
                                                        </Typography>

                                                        <Rating
                                                            className={classes.rating000}
                                                            name="simple-controlled"
                                                            value={value}
                                                            onChange={(event, newValue) => {
                                                                setValue(newValue);
                                                            }}
                                                        />
                                                    </CardContent>
                                                </CardActionArea>
                                                <CardActions>
                                                    <ThemeProvider theme={theme}>
                                                        <Route render={({ history }) => (
                                                            <Button variant="contained" color="primary" className={classes.cardbtn000} onClick={() => { history.push('/WorkspaceDetails') }}>
                                                                <Typography color="secondary" className={classes.typ444}>BOOK</Typography>
                                                            </Button>
                                                        )} />
                                                    </ThemeProvider>
                                                </CardActions>
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

export default Workspace;

