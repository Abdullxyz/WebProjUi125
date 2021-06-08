import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import ReactPlayer from 'react-player';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Paper from "@material-ui/core/Paper";
import Avatar from '@material-ui/core/Avatar';
import Header from './Header';
import Footer from './Footer';


const useStyles = makeStyles(theme => ({
    playerwrapper: {
        position: 'relative',
        paddingTop: '56.25%',
        marginBottom:'-19%',
    },

    reactplayer: {
        position: 'absolute',
        top: 0,
        left: 0,
    },
    overlay: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
    },
    title: {
        marginTop: '15%',
        marginLeft: '7%',
        fontSize: '3.5vw',
    },
    title1: {

        marginTop: '25%',
        marginLeft: '40%',
        fontSize: '3.5vw',

    },
    card: {
        width: '70%',
        marginLeft: '25%',
        '@media (min-width:600px)': {
            width: '65%',
            marginLeft: '25%',
        },
        [theme.breakpoints.up('md')]: {
            width: '65%',
            marginLeft: '25%',
        },
    },
    card1: {
        width: '75%',
        marginLeft: '20%',
        '@media (min-width:600px)': {
            width: '65%',
            marginLeft: '25%',
        },
        [theme.breakpoints.up('md')]: {
            width: '65%',
            marginLeft: '25%',
        },
    },
    cardsss: {
        display: 'flex',
        marginTop: '5%',
    },
    avatar: {
        marginLeft: '10%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: '0.5%',
    },
    medium: {
        width: theme.spacing(4.5),
        height: theme.spacing(4.5),
        '@media (min-width:600px)': {
            width: theme.spacing(7),
            height: theme.spacing(7),
        },
        [theme.breakpoints.up('md')]: {
            width: theme.spacing(12),
            height: theme.spacing(12),
        },
    },
    typ0: {
        fontWeight: 'bold',
        fontSize: '1.2vw',
        marginLeft: theme.spacing(1),
        marginTop: theme.spacing(2),
        marginBottom: theme.spacing(2),
        '@media (min-width:600px)': {
            marginLeft: theme.spacing(5),
            marginTop: theme.spacing(4),
            marginBottom: theme.spacing(4),
        },
        [theme.breakpoints.up('md')]: {
            marginLeft: theme.spacing(8),
            marginTop: theme.spacing(6),
            marginBottom: theme.spacing(6),
        },
    },
    typ3: {
        fontWeight: 'bold',
        fontSize: '1.4vw',
        '@media (min-width:600px)': {
            fontWeight: 'bold',
        },
        [theme.breakpoints.up('md')]: {
            fontWeight: 'bold',
        },
    },
    typ4: {
        marginTop: theme.spacing(1),
        fontSize: '1vw',
        '@media (min-width:600px)': {
            marginTop: theme.spacing(1),
        },
        [theme.breakpoints.up('md')]: {
            marginTop: theme.spacing(1),
        },
    },
    typ5: {
        fontWeight: 'bold',
        marginLeft: '5%',
        marginRight: '3%',
        marginBottom: '15%',
        marginTop: '6%',
        fontSize: '1vw',
        '@media (min-width:600px)': {
            fontWeight: 'bold',
            marginLeft: '5%',
            marginRight: '3%',
            marginBottom: '15%',
            marginTop: '6%',
        },
        [theme.breakpoints.up('md')]: {
            fontWeight: 'bold',
            marginLeft: '5%',
            marginRight: '3%',
            marginBottom: '15%',
            marginTop: '6%',
        },
    },
}));

const Test = () => {
    const classes = useStyles();

    return (
        <div>
            <Header />
            <div>
                <Typography className={classes.typ0}>
                    Nos Entrepreneurs
                </Typography>
            </div>
            <div>
                <img src="https://i.ibb.co/2kWZ0tb/image14.png" width='100%' height='100%' />
            </div>
            <section className={classes.playerwrapper}>
                <ReactPlayer
                    url="https://youtu.be/BOqhYCxLeY0"
                    className={classes.reactplayer}
                    playing
                    muted
                    loop
                    width="100%"
                    height="64.5%"
                    controls={false}
                />
                <div className={classes.overlay}>
                    <Box
                        height="100%"
                        display="flex"
                        flexDirection="column"
                        justifyContent="center"
                        alignItems="center"
                        color="#fff"
                    >
                        <div style={{ display: 'flex' }}>
                            <div style={{ width: '50%' }}>
                                <Typography className={classes.title}>
                                    Title Of the Video
                                </Typography>
                            </div>
                            <div style={{ width: '50%' }}>
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
                                        </Typography>
                                    </div>
                                    <Paper elevation={0} className={classes.paper} />
                                </Card>
                            </div>
                        </div>
                    </Box>
                </div>
            </section>

            <section className={classes.playerwrapper}>
                <ReactPlayer
                    url="https://youtu.be/BOqhYCxLeY0"
                    className={classes.reactplayer}
                    playing
                    muted
                    loop
                    width="100%"
                    height="64.5%"
                    controls={false}
                />
                <div className={classes.overlay}>
                    <Box
                        height="100%"
                        display="flex"
                        flexDirection="column"
                        justifyContent="center"
                        alignItems="center"
                        color="#fff"
                    >
                        <div style={{ display: 'flex' }}>
                            <div style={{ width: '50%' }}>
                                <Card className={classes.card1} >
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
                                        </Typography>
                                    </div>
                                    <Paper elevation={0} className={classes.paper} />
                                </Card>
                            </div>
                            <div style={{ width: '50%' }}>
                                <Typography variant="h3" component="h1" className={classes.title1}>
                                    Title Of the Video
                                </Typography>
                            </div>
                        </div>
                    </Box>
                </div>
            </section>

            <section className={classes.playerwrapper}>
                <ReactPlayer
                    url="https://youtu.be/BOqhYCxLeY0"
                    className={classes.reactplayer}
                    playing
                    muted
                    loop
                    width="100%"
                    height="64.5%"
                    controls={false}
                />
                <div className={classes.overlay}>
                    <Box
                        height="100%"
                        display="flex"
                        flexDirection="column"
                        justifyContent="center"
                        alignItems="center"
                        color="#fff"
                    >
                        <div style={{ display: 'flex' }}>
                            <div style={{ width: '50%' }}>
                                <Typography variant="h3" component="h1" className={classes.title}>
                                    Title Of the Video
                                </Typography>
                            </div>
                            <div style={{ width: '50%' }}>
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
                                        </Typography>
                                    </div>
                                    <Paper elevation={0} className={classes.paper} />
                                </Card>
                            </div>
                        </div>
                    </Box>
                </div>
            </section>

            <section className={classes.playerwrapper}>
                <ReactPlayer
                    url="https://youtu.be/BOqhYCxLeY0"
                    className={classes.reactplayer}
                    playing
                    muted
                    loop
                    width="100%"
                    height="64.5%"
                    controls={false}
                />
                <div className={classes.overlay}>
                    <Box
                        height="100%"
                        display="flex"
                        flexDirection="column"
                        justifyContent="center"
                        alignItems="center"
                        color="#fff"
                    >
                        <div style={{ display: 'flex' }}>
                            <div style={{ width: '50%' }}>
                                <Card className={classes.card1} >
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
                                        </Typography>
                                    </div>
                                    <Paper elevation={0} className={classes.paper} />
                                </Card>
                            </div>
                            <div style={{ width: '50%' }}>
                                <Typography variant="h3" component="h1" className={classes.title1}>
                                    Title Of the Video
                                </Typography>
                            </div>
                        </div>
                    </Box>
                </div>
            </section>
            <Footer />
        </div>
    );
};

export default Test;