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
import CardActions from '@material-ui/core/CardActions';
import Rating from '@material-ui/lab/Rating';
import { Route } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import ReactPlayer from 'react-player/youtube';



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
    div0: {
        display: 'flex',
    },
    div1: {
        width: '40%',
    },
    div2: {
        width: '60%',
        marginLeft: '40%',
        marginTop: '5%',
        '@media (min-width:600px)': {
            width: '60%',
            marginLeft: '59%',
            marginTop: '3%',
        },
        [theme.breakpoints.up('md')]: {
            width: '60%',
            marginLeft: '70%',
            marginTop: '3%',
        },
    },
    div3: {
        width: '77%',
    },
    div4: {
        width: '23%',
        marginLeft: '-5%',
        '@media (min-width:600px)': {
            width: '23%',
            marginLeft: '5%',
        },
        [theme.breakpoints.up('md')]: {
            width: '23%',
            marginLeft: '5%',
        },
    },
    div5: {
        backgroundColor: "#f0f5f5",
        display: 'block',
        '@media (min-width:600px)': {
            display: 'block',
        },
        [theme.breakpoints.up('md')]: {
            flexGrow: 1,
            display: 'flex',
        },
    },
    div6: {
        marginBottom: '5%',
        width: '100%',
        '@media (min-width:600px)': {
            width: '100%',
        },
        [theme.breakpoints.up('md')]: {
            width: '65%',

        },
    },
    div7: {
        marginTop: '2%',
        marginBottom: '5%',
        width: '100%',
        '@media (min-width:600px)': {
            width: '100%',
            marginLeft: '3%',
        },
        [theme.breakpoints.up('md')]: {
            width: '35%',
            marginLeft: '6%',
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
        fontSize: '12px',
        '@media (min-width:600px)': {
            fontSize: '15px',
        },
        [theme.breakpoints.up('md')]: {
            fontSize: '15px',
        },
    },
    typ2: {
        fontSize: '12px',
        '@media (min-width:600px)': {
            fontSize: '15px',
        },
        [theme.breakpoints.up('md')]: {
            fontSize: '15px',
        },
    },
    typ3: {
        fontWeight: 'bold',
        fontSize: '8px',
        '@media (min-width:600px)': {
            fontWeight: 'bold',
            fontSize: '19px',
        },
        [theme.breakpoints.up('md')]: {
            fontWeight: 'bold',
            fontSize: '20px',
        },
    },
    typ4: {
        marginTop: theme.spacing(1),
        fontSize: '7px',
        '@media (min-width:600px)': {
            marginTop: theme.spacing(1),
            fontSize: '15px',
        },
        [theme.breakpoints.up('md')]: {
            marginTop: theme.spacing(1),
            fontSize: '15px',
        },
    },
    typ5: {
        marginLeft: '2%',
        marginRight: '3%',
        marginTop: theme.spacing(1),
        marginBottom: '3%',
        fontSize: '7px',
        '@media (min-width:600px)': {
            marginTop: theme.spacing(1),
            fontSize: '15px',
        },
        [theme.breakpoints.up('md')]: {
            marginTop: theme.spacing(1),
            fontSize: '15px',
        },
    },
    typ6: {
        fontSize: '8px',
        '@media (min-width:600px)': {
            fontSize: '19px',
        },
        [theme.breakpoints.up('md')]: {
            fontSize: '25px',
        },

    },
    typ7: {
        fontSize: '70%',
        '@media (min-width:600px)': {
            fontSize: '60%',
        },
        [theme.breakpoints.up('md')]: {
            fontSize: '110%',
        },
    },
    typ8: {
        fontSize: '70%',
        '@media (min-width:600px)': {
            fontSize: '50%',
            marginBottom: '3%',
        },
        [theme.breakpoints.up('md')]: {
            fontSize: '100%',
            marginBottom: '0%',
        },
    },
    typ9: {
        fontSize: '60%',
        '@media (min-width:600px)': {
            fontSize: '50%',
        },
        [theme.breakpoints.up('md')]: {
            fontSize: '100%',
        },
    },
    btn0: {
        padding: "4% 17%",
    },
    btn1: {
        padding: "13% 20%",
        '@media (min-width:600px)': {
            padding: "10% 26%",
        },
        [theme.breakpoints.up('md')]: {
            padding: "4.5% 26%",
        },
    },
    textField1: {
        width: '85%',
        marginLeft: theme.spacing(1),
        '@media (min-width:600px)': {
            width: '95%',
            marginLeft: theme.spacing(5),
        },
        [theme.breakpoints.up('md')]: {
            width: '95%',
            marginLeft: theme.spacing(8),
        },
    },
    medium: {
        width: theme.spacing(5),
        height: theme.spacing(5),
        '@media (min-width:600px)': {
            width: theme.spacing(7),
            height: theme.spacing(7),
        },
        [theme.breakpoints.up('md')]: {
            width: theme.spacing(7),
            height: theme.spacing(7),
        },
    },
    cardsss: {
        display: 'flex',
    },
    card: {
        height: '100%',
        marginTop: '4%',
        '@media (min-width:600px)': {
            width: '95%',

            marginLeft: '3%',
        },
        [theme.breakpoints.up('md')]: {
            width: '100%',

            marginLeft: '6%',
        },
    },
    card1: {
        width: '95%',
        marginTop: '8%',
        marginLeft:'2%',
        '@media (min-width:600px)': {
            width: '95%',
            marginTop: '8%',
            marginLeft:'2%',
        },
        [theme.breakpoints.up('md')]: {
            width: '78%',
            marginTop: '8%',
            marginLeft:'2%',
        },
    },
    avatar: {
        display: 'flex',
        marginTop: '3%',
        marginLeft: '2%',
        '@media (min-width:600px)': {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: '0.5%',
        },
        [theme.breakpoints.up('md')]: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: '0.5%',
        },
    },
    paper: {
        padding: theme.spacing(1),
        backgroundColor: "#white",
        '@media (min-width:600px)': {
            padding: theme.spacing(2),
            backgroundColor: "#white",
        },
        [theme.breakpoints.up('md')]: {
            padding: theme.spacing(3),
            backgroundColor: "#white",
        },
    },
    paper1: {
        width: '95%',
        padding: theme.spacing(1),
        backgroundColor: "#f0f5f5",
        '@media (min-width:600px)': {
            padding: theme.spacing(2),
            backgroundColor: "#f0f5f5",
        },
        [theme.breakpoints.up('md')]: {
            padding: theme.spacing(0),
            backgroundColor: "#f0f5f5",
        },
    },
    img1: {
        marginLeft: '2%',
        width: '95%',
        height: '150px',
        '@media (min-width:600px)': {
            marginLeft: '2%',
            width: '95%',
            height: '400px',
        },
        [theme.breakpoints.up('md')]: {
            marginLeft: '2%',
            width: '95%',
            height: '400px',
        },
    }
}));





const Feed = () => {

    const classes = useStyles();
    const [value, setValue] = React.useState(2);

    return (
        <ThemeProvider theme={theme}>
            <Header />
            <div>
                <div className={classes.div0}>
                    <div className={classes.div1}>
                        <Typography className={classes.typ0}>
                            Feed
                        </Typography>
                    </div>
                    <div className={classes.div2}>
                        <Button variant="contained" color="primary" className={classes.btn0} >
                            <Typography color="secondary" className={classes.typ1}>New post</Typography>
                        </Button>
                    </div>
                </div >
                <div className={classes.div0}>
                    <div className={classes.div3}>
                        <TextField id="outlined-basic" className={classes.textField1} variant="outlined" />
                    </div>
                    <div className={classes.div4}>
                        <Button variant="contained" color="primary" className={classes.btn1} >
                            <Typography color="secondary" className={classes.typ1}>Search</Typography>
                        </Button>
                    </div>
                </div>

                <Paper elevation={0} className={classes.paper} />

                <div className={classes.div5}>
                    <div className={classes.div6}>
                        <div>
                            <Paper elevation={0} border={0} className={classes.paper1} />
                            <Card className={classes.card} >
                                <div className={classes.cardsss}>
                                    <CardMedia className={classes.avatar}>
                                        <Avatar src="https://www.indiewire.com/wp-content/uploads/2015/04/dakota-fanning-by-daniel-bergeron.jpg?w=780" className={classes.medium} />
                                    </CardMedia>
                                    <div className={classes.details}>
                                        <CardContent className={classes.content}>
                                            <div>
                                                <Typography component="h5" variant="h5" className={classes.typ3}>
                                                    Harry Bowen
                                        </Typography>
                                            </div>
                                            <div>
                                                <Typography variant="subtitle1" color="textSecondary" className={classes.typ4}>
                                                    @Mac Miller
                                            </Typography>
                                            </div>
                                        </CardContent>
                                    </div>
                                </div>
                                <div>
                                    <Typography variant="subtitle1" className={classes.typ5}>
                                        Offices for large teams or less dense mid-size teams, featuring meeting rooms, executive offices, and operational supprt.
                                        Offices for large teams or less dense mid-size teams, featuring meeting rooms, executive offices, and operational supprt.
                                        Offices for large teams or less dense mid-size teams, featuring meeting rooms, executive offices, and operational supprt.
                                        Offices for large teams or less dense mid-size teams, featuring meeting rooms, executive offices, and operational supprt.
                                </Typography>
                                </div>
                                <Paper elevation={0} className={classes.paper} />
                            </Card>

                            <Card className={classes.card} >
                                <div className={classes.cardsss}>
                                    <CardMedia className={classes.avatar}>
                                        <Avatar src="https://www.indiewire.com/wp-content/uploads/2015/04/dakota-fanning-by-daniel-bergeron.jpg?w=780" className={classes.medium} />
                                    </CardMedia>
                                    <div className={classes.details}>
                                        <CardContent className={classes.content}>
                                            <div>
                                                <Typography component="h5" variant="h5" className={classes.typ3}>
                                                    Harry Bowen
                                        </Typography>
                                            </div>
                                            <div>
                                                <Typography variant="subtitle1" color="textSecondary" className={classes.typ4}>
                                                    @Mac Miller
                                            </Typography>
                                            </div>
                                        </CardContent>
                                    </div>
                                </div>
                                <div>
                                    <Typography variant="subtitle1" className={classes.typ5}>
                                        Offices for large teams or less dense mid-size teams, featuring meeting rooms, executive offices, and operational supprt.
                                        Offices for large teams or less dense mid-size teams, featuring meeting rooms, executive offices, and operational supprt.
                                        Offices for large teams or less dense mid-size teams, featuring meeting rooms, executive offices, and operational supprt.
                                        Offices for large teams or less dense mid-size teams, featuring meeting rooms, executive offices, and operational supprt.
                                    </Typography>
                                </div>
                                <div >
                                    <img src="https://s7d2.scene7.com/is/image/honeywell/hon-ConnectedBuildingTLHero1800x900" className={classes.img1} />
                                </div>
                                <Paper elevation={0} className={classes.paper} />
                            </Card>

                            <Card className={classes.card} >
                                <div className={classes.cardsss}>
                                    <CardMedia className={classes.avatar}>
                                        <Avatar src="https://www.indiewire.com/wp-content/uploads/2015/04/dakota-fanning-by-daniel-bergeron.jpg?w=780" className={classes.medium} />
                                    </CardMedia>
                                    <div className={classes.details}>
                                        <CardContent className={classes.content}>
                                            <div>
                                                <Typography component="h5" variant="h5" className={classes.typ3}>
                                                    Harry Bowen
                                        </Typography>
                                            </div>
                                            <div>
                                                <Typography variant="subtitle1" color="textSecondary" className={classes.typ4}>
                                                    @Mac Miller
                                            </Typography>
                                            </div>
                                        </CardContent>
                                    </div>
                                </div>
                                <div>
                                    <Typography variant="subtitle1" className={classes.typ5}>
                                        Offices for large teams or less dense mid-size teams, featuring meeting rooms, executive offices, and operational supprt.
                                        Offices for large teams or less dense mid-size teams, featuring meeting rooms, executive offices, and operational supprt.
                                        Offices for large teams or less dense mid-size teams, featuring meeting rooms, executive offices, and operational supprt.
                                        Offices for large teams or less dense mid-size teams, featuring meeting rooms, executive offices, and operational supprt.
                                    </Typography>
                                </div>
                                <div >
                                    <ReactPlayer url='https://www.youtube.com/watch?v=ysz5S6PUM-U' width='95%' style={{ marginLeft: '2%' }} />
                                </div>
                                <Paper elevation={0} className={classes.paper} />
                            </Card>

                            <Card className={classes.card} >
                                <div className={classes.cardsss}>
                                    <CardMedia className={classes.avatar}>
                                        <Avatar src="https://www.indiewire.com/wp-content/uploads/2015/04/dakota-fanning-by-daniel-bergeron.jpg?w=780" className={classes.medium} />
                                    </CardMedia>
                                    <div className={classes.details}>
                                        <CardContent className={classes.content}>
                                            <div>
                                                <Typography component="h5" variant="h5" className={classes.typ3}>
                                                    Harry Bowen
                                                </Typography>
                                            </div>
                                            <div>
                                                <Typography variant="subtitle1" color="textSecondary" className={classes.typ4}>
                                                    @Mac Miller
                                            </Typography>
                                            </div>
                                        </CardContent>
                                    </div>
                                </div>
                                <div>
                                    <Typography variant="subtitle1" className={classes.typ5}>
                                        Offices for large teams or less dense mid-size teams, featuring meeting rooms, executive offices, and operational supprt.
                                        Offices for large teams or less dense mid-size teams, featuring meeting rooms, executive offices, and operational supprt.
                                        Offices for large teams or less dense mid-size teams, featuring meeting rooms, executive offices, and operational supprt.
                                        Offices for large teams or less dense mid-size teams, featuring meeting rooms, executive offices, and operational supprt.
                                </Typography>
                                </div>
                                <Paper elevation={0} className={classes.paper} />
                            </Card>

                            <Paper elevation={0} border={0} className={classes.paper1} />

                        </div>
                    </div>
                    <div className={classes.div7}>

                        <Typography className={classes.typ6}>
                            Top workspaces
                        </Typography>

                        <Card className={classes.card1} >
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

                                        <Grid container direction='row' style={{ display: 'flex' }}>

                                            <Grid item style={{ height: '100%', width: '65%' }}>
                                                <Typography gutterBottom variant="h7" component="h2" className={classes.typ1}>
                                                    NAME OF THE OFFICE
                                                </Typography>
                                            </Grid>

                                            <Grid container justify="flex-end" style={{ height: '100%', width: '35%' }}>
                                                <Typography gutterBottom variant="h7" component="h2" className={classes.typ7}>
                                                    $400/DAY
                                                </Typography>
                                            </Grid>

                                        </Grid>

                                    </Paper>

                                    <Grid container >

                                    </Grid>
                                    <Typography variant="body2" color="textSecondary" component="p" className={classes.typ8}>
                                        5547 Amina common suit 534
                                    </Typography>

                                    <Rating
                                        className={classes.rating}
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
                                        <Button variant="contained" color="primary" className={classes.cardbtn} onClick={() => { history.push('/WorkspaceDetails') }}>
                                            <Typography color="secondary" className={classes.typ9}>BOOK</Typography>
                                        </Button>
                                    )} />
                                </ThemeProvider>
                            </CardActions>
                        </Card>

                        <Card className={classes.card1} >
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

                                        <Grid container direction='row' style={{ display: 'flex' }}>

                                            <Grid item style={{ height: '100%', width: '65%' }}>
                                                <Typography gutterBottom variant="h7" component="h2" className={classes.typ1}>
                                                    NAME OF THE OFFICE
                                                </Typography>
                                            </Grid>

                                            <Grid container justify="flex-end" style={{ height: '100%', width: '35%' }}>
                                                <Typography gutterBottom variant="h7" component="h2" className={classes.typ7}>
                                                    $400/DAY
                                                </Typography>
                                            </Grid>

                                        </Grid>

                                    </Paper>

                                    <Grid container >

                                    </Grid>
                                    <Typography variant="body2" color="textSecondary" component="p" className={classes.typ8}>
                                        5547 Amina common suit 534
                                    </Typography>

                                    <Rating
                                        className={classes.rating}
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
                                        <Button variant="contained" color="primary" className={classes.cardbtn} onClick={() => { history.push('/WorkspaceDetails') }}>
                                            <Typography color="secondary" className={classes.typ9}>BOOK</Typography>
                                        </Button>
                                    )} />
                                </ThemeProvider>
                            </CardActions>
                        </Card>

                        <Card className={classes.card1} >
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

                                        <Grid container direction='row' style={{ display: 'flex' }}>

                                            <Grid item style={{ height: '100%', width: '65%' }}>
                                                <Typography gutterBottom variant="h7" component="h2" className={classes.typ1}>
                                                    NAME OF THE OFFICE
                                                </Typography>
                                            </Grid>

                                            <Grid container justify="flex-end" style={{ height: '100%', width: '35%' }}>
                                                <Typography gutterBottom variant="h7" component="h2" className={classes.typ7}>
                                                    $400/DAY
                                                </Typography>
                                            </Grid>

                                        </Grid>

                                    </Paper>

                                    <Grid container >

                                    </Grid>
                                    <Typography variant="body2" color="textSecondary" component="p" className={classes.typ8}>
                                        5547 Amina common suit 534
                                    </Typography>

                                    <Rating
                                        className={classes.rating}
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
                                        <Button variant="contained" color="primary" className={classes.cardbtn} onClick={() => { history.push('/WorkspaceDetails') }}>
                                            <Typography color="secondary" className={classes.typ9}>BOOK</Typography>
                                        </Button>
                                    )} />
                                </ThemeProvider>
                            </CardActions>
                        </Card>

                        <Paper elevation={0} border={0} className={classes.paper1} />
                        
                    </div>
                </div>
            </div>
            <Footer />
        </ThemeProvider>
    );
};

export default Feed;

