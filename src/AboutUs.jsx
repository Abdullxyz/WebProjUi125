import React from 'react';
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
import Header from './Header';
import Footer from './Footer';




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
    typ1: {
        fontWeight: 'bold',
        fontSize: '25px',
        marginLeft: theme.spacing(3),
        marginTop: theme.spacing(2),
        '@media (min-width:600px)': {
            fontSize: '35px',
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
        fontWeight: 'bold',
        fontSize: '25px',
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
    typ3: {
        fontSize: '10px',
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
    typ4: {

        '@media (min-width:600px)': {

        },
        [theme.breakpoints.up('md')]: {
            fontSize: '20px',
            marginLeft: theme.spacing(6),
            marginTop: theme.spacing(2),
        },
    },
    typ5: {
        fontSize: '8px',
        '@media (min-width:600px)': {
            fontSize: '12px',
        },
        [theme.breakpoints.up('md')]: {
            fontSize: '16px',
        },
    },
    typ6: {
        fontWeight: 'bold',
        fontSize: '20px',
        '@media (min-width:600px)': {
            fontSize: '30px',
        },
        [theme.breakpoints.up('md')]: {
            fontSize: '40px',
        },
    },
    typ7: {
        fontSize: '8px',
        marginTop: theme.spacing(1),
        '@media (min-width:600px)': {
            fontSize: '18px',
            marginTop: theme.spacing(3),
        },
        [theme.breakpoints.up('md')]: {
            fontSize: '18px',
            marginTop: theme.spacing(3),
        },
    },
    typ8: {
        marginTop: theme.spacing(0),
        fontWeight: 'bold',
        fontSize: '8px',
        '@media (min-width:600px)': {
            marginTop: theme.spacing(3),
            fontWeight: 'bold',
            fontSize: '19px',
        },
        [theme.breakpoints.up('md')]: {
            marginTop: theme.spacing(4),
            fontWeight: 'bold',
            fontSize: '22px',
        },

    },
    typ9: {
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
    img1: {
        width: '95%',
        height: '100%',
        marginLeft:'2%',
        marginRight:'2%',
        marginTop: theme.spacing(2),
        '@media (min-width:600px)': {
            marginTop: theme.spacing(5),
            width: '95%',
            height: '110%',
        },
        [theme.breakpoints.up('md')]: {
            marginTop: theme.spacing(6),
            width: '100%',
            height: '100%',
            marginLeft:'0%',
        },
    },
    imgg1: {
        width:'100%',
        '@media (min-width:600px)': {
            width:'100%',
            marginRight: theme.spacing(2),
        },
        [theme.breakpoints.up('md')]: {
            width:'50%',
            marginRight: theme.spacing(2),
        },
    },
    imgg2: {
        width:'100%',
        '@media (min-width:600px)': {
            width:'100%',
        },
        [theme.breakpoints.up('md')]: {
            width:'50%',
        },
    },
    imgg3: {
        width:'95%',
        marginTop: theme.spacing(3),
        marginLeft: theme.spacing(1),
        marginRight:'2%',
        '@media (min-width:600px)': {
            width:'60%',
            marginTop: theme.spacing(10),
            marginLeft: theme.spacing(5),
        },
        [theme.breakpoints.up('md')]: {
            width:'80%',
            marginLeft: theme.spacing(8),
            marginRight:'3%',
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
    imgg5: {
        marginTop: theme.spacing(3),
        '@media (min-width:600px)': {
            marginTop: theme.spacing(6),
        },
        [theme.breakpoints.up('md')]: {
            marginTop: theme.spacing(10),

        },
    },
    img5: {
        marginTop: theme.spacing(3),
        '@media (min-width:600px)': {
            height: 560,
        },
        [theme.breakpoints.up('md')]: {
            height: 760,

        },
    },
    imgg6: {
        marginTop: theme.spacing(3),
        '@media (min-width:600px)': {
            marginTop: theme.spacing(6),
        },
        [theme.breakpoints.up('md')]: {
            marginTop: theme.spacing(25),
        },
    },
    img7: {
        borderRadius: 10,
    },
    img8: {
        borderRadius: 10,
    },
    img9: {
        borderRadius: 10,
    },
    img10: {
        borderRadius: 10,
    },
    titleBar: {
        backgroundColor: 'transparent',
        height: 400,
    },
    bttn1: {
        marginTop: theme.spacing(-6.5),
        marginLeft: theme.spacing(3),
        '@media (min-width:600px)': {
            marginTop: theme.spacing(-22),
            marginLeft: theme.spacing(5.5),
        },
        [theme.breakpoints.up('md')]: {
            marginTop: theme.spacing(-29),
            marginLeft: theme.spacing(10),
        },
    },
    bttn2: {
        marginTop: theme.spacing(2),
        '@media (min-width:600px)': {
            marginTop: theme.spacing(3),

        },
        [theme.breakpoints.up('md')]: {
            marginTop: theme.spacing(4),
        },
    },
    btn1: {
        padding: "4px 10px",
        '@media (min-width:600px)': {
            padding: "8px 10px",
        },
        [theme.breakpoints.up('md')]: {
            padding: "8px 35px",
        },
    },
    btn2: {
        padding: "4px 10px",
        '@media (min-width:600px)': {
            padding: "8px 10px",
        },
        [theme.breakpoints.up('md')]: {
            padding: "8px 35px",
        },
    },
    card: {
        width: '27%',
        height: 70,
        marginLeft: theme.spacing(1),
        marginTop: theme.spacing(6),
        '@media (min-width:600px)': {
            width: '27%',
            height: 170,
            marginLeft: theme.spacing(6),
            marginTop: theme.spacing(6),
        },
        [theme.breakpoints.up('md')]: {
            width: '27%',
            height: 170,
            marginLeft: theme.spacing(6),
            marginTop: theme.spacing(6),
        },
    },
    cardroot: {
        display: 'flex',
    },
    cardss: {
        marginLeft: theme.spacing(-1),
        '@media (min-width:600px)': {
            marginLeft: theme.spacing(-6),
        },
        [theme.breakpoints.up('md')]: {
            marginLeft: theme.spacing(-6),
        },
    },
    details: {
        display: 'flex',
        flexDirection: 'column',
    },
    content: {
        flex: '1 0 auto',
    },
    large: {
        width: theme.spacing(3),
        height: theme.spacing(3),
        border: '2px solid white',
        '@media (min-width:600px)': {
            width: theme.spacing(10),
            height: theme.spacing(10),
            border: '5px solid white',
        },
        [theme.breakpoints.up('md')]: {
            width: theme.spacing(12),
            height: theme.spacing(12),
            border: '6px solid white',
        },

    },
    cardsss: {
        display: 'flex',
    },
    avatar: {
        display: 'flex',
        marginTop: theme.spacing(3),
        marginLeft: theme.spacing(1),
        '@media (min-width:600px)': {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        },
        [theme.breakpoints.up('md')]: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        },
    },
    gridList: {
        width: '95%',
        '@media (min-width:600px)': {
            width: '95%',
            height: 500,
        },
        [theme.breakpoints.up('md')]: {
            width: '100%',
            height: 800,
        },
    },
    cellHeight: {
        width: '100%',
        '@media (min-width:600px)': {
            height: '49%',
            marginTop: theme.spacing(0),
            marginLeft: theme.spacing(0),
        },
        [theme.breakpoints.up('md')]: {
            height: '48%',
            marginTop: theme.spacing(1.3),
            marginLeft: theme.spacing(1.3),
        },
    },
    title: {
        fontSize: 12,
        fontWeight: 'bold',
        marginTop: theme.spacing(42),
        '@media (min-width:600px)': {
            fontSize: 18,
            fontWeight: 'bold',
            marginTop: theme.spacing(38),
        },
        [theme.breakpoints.up('md')]: {
            fontSize: 35,
            fontWeight: 'bold',
            marginLeft: theme.spacing(1),
            marginTop: theme.spacing(35),
        },
    },
    subtitle: {
        fontSize: 10,
        '@media (min-width:600px)': {
            marginTop: theme.spacing(2),
            fontSize: 14,
        },
        [theme.breakpoints.up('md')]: {
            marginLeft: theme.spacing(1),
            marginTop: theme.spacing(2),
            fontSize: 20,
        },
    },
    list: {
        marginTop: theme.spacing(6),
    },
    bg: {
        backgroundColor: "#e3f2fd",
        marginTop: theme.spacing(6),
        '@media (min-width:600px)': {
            backgroundColor: "#e3f2fd",
            marginTop: theme.spacing(16),
        },
        [theme.breakpoints.up('md')]: {
            backgroundColor: "#e3f2fd",
            marginTop: theme.spacing(16),
        },
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        backgroundColor: "#e3f2fd",
        '@media (min-width:600px)': {
            padding: theme.spacing(4),
            textAlign: 'center',
            color: theme.palette.text.secondary,
            backgroundColor: "#e3f2fd",
        },
        [theme.breakpoints.up('md')]: {
            padding: theme.spacing(4),
            textAlign: 'center',
            color: theme.palette.text.secondary,
            backgroundColor: "#e3f2fd",
        },
    },
    dv1:{
        width:'100%',
        '@media (min-width:600px)': {
            width:'100%',
        },
        [theme.breakpoints.up('md')]: {
            width:'50%',
        },
    }
}));





const Home = () => {

    const classes = useStyles();
    return (
        <ThemeProvider theme={theme}>
            <Header />
            <div>
                <div>
                    <Typography className={classes.typ1}>
                        Our Mission
                    </Typography>
                </div>
                <div className={classes.root}>
                    <div className={classes.imgg1}>
                        <img src="https://i.ibb.co/sQkYngx/image11.png" className={classes.img1} />
                    </div>
                    <div className={classes.imgg2}>
                        <img src="https://i.ibb.co/YkrKRPf/image12.png" className={classes.img1} />
                    </div>
                </div>
                <div className={classes.root} >
                    <div className={classes.dv1}>
                        <Typography className={classes.typ2}>
                            Our Story
                        </Typography>
                        <Typography className={classes.typ3}>
                            when we started in 2010, we wanted to build more than beautiful, <br />
                        shared office spaces. We wanted to build a community. A place you <br />
                        join as an indvidual, 'me', but where you become part of greater. <br />
                        A place where we are redefining success measured by personal <br />
                        fullfilment, not just the bottom line. Community is our catalyst.
                        </Typography>
                        <div className={classes.imgg3} >
                            <img src="https://i.ibb.co/T00jBKK/image6.png" width='100%' />
                        </div>
                    </div>
                    <div className={classes.imgg4}>
                        <img src="https://i.ibb.co/6R83ttR/image7.png" width='100%' />
                    </div>
                </div>
                <div className={classes.imgg5}>
                    <img src="https://i.ibb.co/FDvYYW0/image8.jpg" width='100%' className={classes.img5} />
                    <div className={classes.bttn1}>
                        <Button variant="contained" color="primary" width='100%' className={classes.btn1}>
                            <Typography color="secondary" className={classes.typ5}>Find Workspace</Typography>
                        </Button>
                    </div>
                </div>
                <div className={classes.imgg6}>
                    <img src="https://i.ibb.co/0Fk3MJ7/image9.png" width='100%' />
                </div>
                <div>
                    <img src="https://i.ibb.co/xDNPsfq/image10.png" width='100%' />
                </div>
                <div>
                    <Typography className={classes.typ6} align='center'>
                        Meet Our Team
                    </Typography>
                    <Typography className={classes.typ7} align='center' color="textSecondary">
                        After 3 days all of your offers will arrive and you will have an other 7 days to <br /> to select your new company
                    </Typography>
                </div>

                <div className={classes.cardss}>
                    <Grid className={classes.cardroot} justify="center">
                        <Card className={classes.card} style={{ backgroundColor: "#f0f5f5" }}>
                            <div className={classes.cardsss}>
                                <CardMedia className={classes.avatar} align='center'>
                                    <Avatar src="https://www.indiewire.com/wp-content/uploads/2015/04/dakota-fanning-by-daniel-bergeron.jpg?w=780" className={classes.large} />
                                </CardMedia>
                                <div className={classes.details}>
                                    <CardContent className={classes.content}>
                                        <div>
                                            <Typography component="h5" variant="h5" className={classes.typ8}>
                                                Harry Bowen
                                        </Typography>
                                        </div>
                                        <div>
                                            <Typography variant="subtitle1" color="textSecondary" className={classes.typ9}>
                                                Mac Miller
                                        </Typography>
                                        </div>
                                    </CardContent>
                                </div>
                            </div>
                        </Card>

                        <Card className={classes.card} style={{ backgroundColor: "#f0f5f5" }}>
                            <div className={classes.cardsss}>
                                <CardMedia className={classes.avatar} align='center'>
                                    <Avatar src="https://www.indiewire.com/wp-content/uploads/2015/04/dakota-fanning-by-daniel-bergeron.jpg?w=780" className={classes.large} />
                                </CardMedia>
                                <div className={classes.details}>
                                    <CardContent className={classes.content}>
                                        <div>
                                            <Typography component="h5" variant="h5" className={classes.typ8}>
                                                Harry Bowen
                                        </Typography>
                                        </div>
                                        <div>
                                            <Typography variant="subtitle1" color="textSecondary" className={classes.typ9}>
                                                Mac Miller
                                        </Typography>
                                        </div>
                                    </CardContent>
                                </div>
                            </div>
                        </Card>

                        <Card className={classes.card} style={{ backgroundColor: "#f0f5f5" }}>
                            <div className={classes.cardsss}>
                                <CardMedia className={classes.avatar} align='center'>
                                    <Avatar src="https://www.indiewire.com/wp-content/uploads/2015/04/dakota-fanning-by-daniel-bergeron.jpg?w=780" className={classes.large} />
                                </CardMedia>
                                <div className={classes.details}>
                                    <CardContent className={classes.content}>
                                        <div>
                                            <Typography component="h5" variant="h5" className={classes.typ8}>
                                                Harry Bowen
                                        </Typography>
                                        </div>
                                        <div>
                                            <Typography variant="subtitle1" color="textSecondary" className={classes.typ9}>
                                                Mac Miller
                                        </Typography>
                                        </div>
                                    </CardContent>
                                </div>
                            </div>
                        </Card>
                    </Grid>

                    <Grid className={classes.cardroot} justify="center">
                        <Card className={classes.card} style={{ backgroundColor: "#f0f5f5" }}>
                            <div className={classes.cardsss}>
                                <CardMedia className={classes.avatar} align='center'>
                                    <Avatar src="https://www.indiewire.com/wp-content/uploads/2015/04/dakota-fanning-by-daniel-bergeron.jpg?w=780" className={classes.large} />
                                </CardMedia>
                                <div className={classes.details}>
                                    <CardContent className={classes.content}>
                                        <div>
                                            <Typography component="h5" variant="h5" className={classes.typ8}>
                                                Harry Bowen
                                        </Typography>
                                        </div>
                                        <div>
                                            <Typography variant="subtitle1" color="textSecondary" className={classes.typ9}>
                                                Mac Miller
                                        </Typography>
                                        </div>
                                    </CardContent>
                                </div>
                            </div>
                        </Card>

                        <Card className={classes.card} style={{ backgroundColor: "#f0f5f5" }}>
                            <div className={classes.cardsss}>
                                <CardMedia className={classes.avatar} align='center'>
                                    <Avatar src="https://www.indiewire.com/wp-content/uploads/2015/04/dakota-fanning-by-daniel-bergeron.jpg?w=780" className={classes.large} />
                                </CardMedia>
                                <div className={classes.details}>
                                    <CardContent className={classes.content}>
                                        <div>
                                            <Typography component="h5" variant="h5" className={classes.typ8}>
                                                Harry Bowen
                                        </Typography>
                                        </div>
                                        <div>
                                            <Typography variant="subtitle1" color="textSecondary" className={classes.typ9}>
                                                Mac Miller
                                        </Typography>
                                        </div>
                                    </CardContent>
                                </div>
                            </div>
                        </Card>

                        <Card className={classes.card} style={{ backgroundColor: "#f0f5f5" }}>
                            <div className={classes.cardsss}>
                                <CardMedia className={classes.avatar} align='center'>
                                    <Avatar src="https://www.indiewire.com/wp-content/uploads/2015/04/dakota-fanning-by-daniel-bergeron.jpg?w=780" className={classes.large} />
                                </CardMedia>
                                <div className={classes.details}>
                                    <CardContent className={classes.content}>
                                        <div>
                                            <Typography component="h5" variant="h5" className={classes.typ8}>
                                                Harry Bowen
                                        </Typography>
                                        </div>
                                        <div>
                                            <Typography variant="subtitle1" color="textSecondary" className={classes.typ9}>
                                                Mac Miller
                                        </Typography>
                                        </div>
                                    </CardContent>
                                </div>
                            </div>
                        </Card>
                    </Grid>
                </div>

                <div className={classes.bg}>
                    <Paper elevation={0} className={classes.paper} />
                    <div>
                        <Typography className={classes.typ6} align='center'>
                            Find More Places
                        </Typography>
                        <Typography className={classes.typ7} align='center' color="textSecondary">
                            After 3 days all of your offers will arrive and you will have an other 7 days to <br /> to select your new company
                        </Typography>
                    </div>

                    <div>
                        <Grid item container >
                            <Grid item xs={1} sm={1}/>
                            <Grid item xs={10} sm={10} className={classes.list}>
                                <GridList cellHeight='40px' className={classes.gridList} cols={3} >
                                    <GridListTile cols={0.92} className={classes.cellHeight}>
                                        <img src="https://assets.nrdc.org/sites/default/files/styles/full_content--retina/public/media-uploads/owen-lystrup-bolgim0qwkg-unsplash.jpg?itok=E92FZlIx" width='100%' height='100%' className={classes.img7} />
                                        <CardActionArea href="">
                                            <GridListTitleBar
                                                className={classes.titleBar}
                                                title={<div className={classes.title}>LOS ANGELES</div>}
                                                subtitle={<div className={classes.subtitle}>24 Properties</div>}
                                            />
                                        </CardActionArea>
                                    </GridListTile>
                                    <GridListTile cols={2} className={classes.cellHeight}>
                                        <img src="https://images.unsplash.com/photo-1449034446853-66c86144b0ad?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8Z29sZGVuJTIwZ2F0ZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80" width='100%' height='100%' className={classes.img8} />
                                        <CardActionArea href="">
                                            <GridListTitleBar
                                                className={classes.titleBar}
                                                title={<div className={classes.title}>San Francisco</div>}
                                                subtitle={<div className={classes.subtitle}>19 Properties</div>}
                                            />
                                        </CardActionArea>
                                    </GridListTile>
                                    <GridListTile cols={2} className={classes.cellHeight}>
                                        <img src="https://www.cnet.com/a/img/uQOLOYEjze7E4oS9234fyUd169Y=/1200x675/2019/04/25/5afe714e-df97-47b4-b1f1-06b90cfee9d4/space-needle-28-of-40.jpg" width='100%' height='100%' className={classes.img9} />
                                        <CardActionArea href="">
                                            <GridListTitleBar
                                                className={classes.titleBar}
                                                title={<div className={classes.title}>Seattle</div>}
                                                subtitle={<div className={classes.subtitle}>13 Properties</div>}
                                            />
                                        </CardActionArea>
                                    </GridListTile>
                                    <GridListTile cols={0.92} className={classes.cellHeight}>
                                        <img src="https://www.highrises.com/images/slideshow/1879264533.jpg" width='100%' height='100%' className={classes.img10} />
                                        <CardActionArea href="">
                                            <GridListTitleBar
                                                className={classes.titleBar}
                                                title={<div className={classes.title}>San Diego</div>}
                                                subtitle={<div className={classes.subtitle}>1 Properties</div>}
                                            />
                                        </CardActionArea>
                                    </GridListTile>
                                </GridList>
                            </Grid>
                        </Grid>
                    </div>
                    <div className={classes.bttn2} align='center'>
                        <Button variant="contained" color="primary" width='100%' className={classes.btn2} >
                            <Typography color="secondary" className={classes.typ5}>See all list →</Typography>
                        </Button>
                    </div>
                    <Paper elevation={0} className={classes.paper} />
                </div>
            </div>
            <Footer />
        </ThemeProvider>
    );
};

export default Home;

