import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { green, grey } from '@material-ui/core/colors';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Paper from "@material-ui/core/Paper";
import Avatar from '@material-ui/core/Avatar';



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
    card: {
        width: '95%',
    },
    cardsss: {
        display: 'flex',
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
    medium: {
        width: theme.spacing(8),
        height: theme.spacing(8),
        '@media (min-width:600px)': {
            width: theme.spacing(14),
            height: theme.spacing(14),
        },
        [theme.breakpoints.up('md')]: {
            width: theme.spacing(12),
            height: theme.spacing(12),
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
    div1: {
        width: '95%',
        marginLeft: '4%',
        marginTop: '4%',
        '@media (min-width:600px)': {
            width: '95%',
            marginLeft: '4%',
            marginTop: '4%',
        },
        [theme.breakpoints.up('md')]: {
            width: '20%',
            marginLeft: '4%',
            marginTop: '4%',
        },
    },
    details: {
        width: '70%',
    },
    paper: {
        padding: theme.spacing(1),
        backgroundColor: "#f0f5f5",
        '@media (min-width:600px)': {
            padding: theme.spacing(2),
            backgroundColor: "#f0f5f5",
        },
        [theme.breakpoints.up('md')]: {
            padding: theme.spacing(6),
            backgroundColor: "#f0f5f5",
        },
    },
}));






const Blog = () => {

    const classes = useStyles();
    const [value, setValue] = React.useState(2);

    return (
        <ThemeProvider theme={theme}>
            <Header />
            <div>
                <div>
                    <Typography className={classes.typ0}>
                        Reperatory
                    </Typography>
                </div>

                <div className={classes.root} style={{ backgroundColor: "#f0f5f5" }}>
                    <div className={classes.div1}>
                        <Card className={classes.card} elevation={5} >
                            <div className={classes.cardsss}>
                                <CardMedia className={classes.avatar}>
                                    <Avatar src="https://www.buildinggreen.com/sites/default/files/guidance/Foundry_exterior.jpg" className={classes.medium} />
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
                                        <div>
                                            <Typography variant="subtitle1" className={classes.typ5}>
                                                Type of company
                                            </Typography>
                                        </div>
                                    </CardContent>
                                </div>
                            </div>
                        </Card>
                    </div>

                    <div className={classes.div1}>
                        <Card className={classes.card} elevation={5} >
                            <div className={classes.cardsss}>
                                <CardMedia className={classes.avatar}>
                                    <Avatar src="https://www.buildinggreen.com/sites/default/files/guidance/Foundry_exterior.jpg" className={classes.medium} />
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
                                        <div>
                                            <Typography variant="subtitle1" className={classes.typ5}>
                                                Type of company
                                            </Typography>
                                        </div>
                                    </CardContent>
                                </div>
                            </div>
                        </Card>
                    </div>

                    <div className={classes.div1}>
                        <Card className={classes.card} elevation={5} >
                            <div className={classes.cardsss}>
                                <CardMedia className={classes.avatar}>
                                    <Avatar src="https://www.buildinggreen.com/sites/default/files/guidance/Foundry_exterior.jpg" className={classes.medium} />
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
                                        <div>
                                            <Typography variant="subtitle1" className={classes.typ5}>
                                                Type of company
                                            </Typography>
                                        </div>
                                    </CardContent>
                                </div>
                            </div>
                        </Card>
                    </div>

                    <div className={classes.div1}>
                        <Card className={classes.card} elevation={5} >
                            <div className={classes.cardsss}>
                                <CardMedia className={classes.avatar}>
                                    <Avatar src="https://www.buildinggreen.com/sites/default/files/guidance/Foundry_exterior.jpg" className={classes.medium} />
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
                                        <div>
                                            <Typography variant="subtitle1" className={classes.typ5}>
                                                Type of company
                                            </Typography>
                                        </div>
                                    </CardContent>
                                </div>
                            </div>
                        </Card>
                    </div>
                </div>

                <div className={classes.root} style={{ backgroundColor: "#f0f5f5" }}>
                    <div className={classes.div1}>
                        <Card className={classes.card} elevation={5} >
                            <div className={classes.cardsss}>
                                <CardMedia className={classes.avatar}>
                                    <Avatar src="https://www.buildinggreen.com/sites/default/files/guidance/Foundry_exterior.jpg" className={classes.medium} />
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
                                        <div>
                                            <Typography variant="subtitle1" className={classes.typ5}>
                                                Type of company
                                            </Typography>
                                        </div>
                                    </CardContent>
                                </div>
                            </div>
                        </Card>
                    </div>

                    <div className={classes.div1}>
                        <Card className={classes.card} elevation={5} >
                            <div className={classes.cardsss}>
                                <CardMedia className={classes.avatar}>
                                    <Avatar src="https://www.buildinggreen.com/sites/default/files/guidance/Foundry_exterior.jpg" className={classes.medium} />
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
                                        <div>
                                            <Typography variant="subtitle1" className={classes.typ5}>
                                                Type of company
                                            </Typography>
                                        </div>
                                    </CardContent>
                                </div>
                            </div>
                        </Card>
                    </div>

                    <div className={classes.div1}>
                        <Card className={classes.card} elevation={5} >
                            <div className={classes.cardsss}>
                                <CardMedia className={classes.avatar}>
                                    <Avatar src="https://www.buildinggreen.com/sites/default/files/guidance/Foundry_exterior.jpg" className={classes.medium} />
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
                                        <div>
                                            <Typography variant="subtitle1" className={classes.typ5}>
                                                Type of company
                                            </Typography>
                                        </div>
                                    </CardContent>
                                </div>
                            </div>
                        </Card>
                    </div>

                    <div className={classes.div1}>
                        <Card className={classes.card} elevation={5} >
                            <div className={classes.cardsss}>
                                <CardMedia className={classes.avatar}>
                                    <Avatar src="https://www.buildinggreen.com/sites/default/files/guidance/Foundry_exterior.jpg" className={classes.medium} />
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
                                        <div>
                                            <Typography variant="subtitle1" className={classes.typ5}>
                                                Type of company
                                            </Typography>
                                        </div>
                                    </CardContent>
                                </div>
                            </div>
                        </Card>
                    </div>
                </div>

                <div className={classes.root} style={{ backgroundColor: "#f0f5f5" }}>
                    <div className={classes.div1}>
                        <Card className={classes.card} elevation={5} >
                            <div className={classes.cardsss}>
                                <CardMedia className={classes.avatar}>
                                    <Avatar src="https://www.buildinggreen.com/sites/default/files/guidance/Foundry_exterior.jpg" className={classes.medium} />
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
                                        <div>
                                            <Typography variant="subtitle1" className={classes.typ5}>
                                                Type of company
                                            </Typography>
                                        </div>
                                    </CardContent>
                                </div>
                            </div>
                        </Card>
                    </div>

                    <div className={classes.div1}>
                        <Card className={classes.card} elevation={5} >
                            <div className={classes.cardsss}>
                                <CardMedia className={classes.avatar}>
                                    <Avatar src="https://www.buildinggreen.com/sites/default/files/guidance/Foundry_exterior.jpg" className={classes.medium} />
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
                                        <div>
                                            <Typography variant="subtitle1" className={classes.typ5}>
                                                Type of company
                                            </Typography>
                                        </div>
                                    </CardContent>
                                </div>
                            </div>
                        </Card>
                    </div>

                    <div className={classes.div1}>
                        <Card className={classes.card} elevation={5} >
                            <div className={classes.cardsss}>
                                <CardMedia className={classes.avatar}>
                                    <Avatar src="https://www.buildinggreen.com/sites/default/files/guidance/Foundry_exterior.jpg" className={classes.medium} />
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
                                        <div>
                                            <Typography variant="subtitle1" className={classes.typ5}>
                                                Type of company
                                            </Typography>
                                        </div>
                                    </CardContent>
                                </div>
                            </div>
                        </Card>
                    </div>

                    <div className={classes.div1}>
                        <Card className={classes.card} elevation={5} >
                            <div className={classes.cardsss}>
                                <CardMedia className={classes.avatar}>
                                    <Avatar src="https://www.buildinggreen.com/sites/default/files/guidance/Foundry_exterior.jpg" className={classes.medium} />
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
                                        <div>
                                            <Typography variant="subtitle1" className={classes.typ5}>
                                                Type of company
                                            </Typography>
                                        </div>
                                    </CardContent>
                                </div>
                            </div>
                        </Card>
                    </div>
                </div>

                <div className={classes.root} style={{ backgroundColor: "#f0f5f5" }}>
                    <div className={classes.div1}>
                        <Card className={classes.card} elevation={5} >
                            <div className={classes.cardsss}>
                                <CardMedia className={classes.avatar}>
                                    <Avatar src="https://www.buildinggreen.com/sites/default/files/guidance/Foundry_exterior.jpg" className={classes.medium} />
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
                                        <div>
                                            <Typography variant="subtitle1" className={classes.typ5}>
                                                Type of company
                                            </Typography>
                                        </div>
                                    </CardContent>
                                </div>
                            </div>
                        </Card>
                    </div>

                    <div className={classes.div1}>
                        <Card className={classes.card} elevation={5} >
                            <div className={classes.cardsss}>
                                <CardMedia className={classes.avatar}>
                                    <Avatar src="https://www.buildinggreen.com/sites/default/files/guidance/Foundry_exterior.jpg" className={classes.medium} />
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
                                        <div>
                                            <Typography variant="subtitle1" className={classes.typ5}>
                                                Type of company
                                            </Typography>
                                        </div>
                                    </CardContent>
                                </div>
                            </div>
                        </Card>
                    </div>

                    <div className={classes.div1}>
                        <Card className={classes.card} elevation={5} >
                            <div className={classes.cardsss}>
                                <CardMedia className={classes.avatar}>
                                    <Avatar src="https://www.buildinggreen.com/sites/default/files/guidance/Foundry_exterior.jpg" className={classes.medium} />
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
                                        <div>
                                            <Typography variant="subtitle1" className={classes.typ5}>
                                                Type of company
                                            </Typography>
                                        </div>
                                    </CardContent>
                                </div>
                            </div>
                        </Card>
                    </div>

                    <div className={classes.div1}>
                        <Card className={classes.card} elevation={5} >
                            <div className={classes.cardsss}>
                                <CardMedia className={classes.avatar}>
                                    <Avatar src="https://www.buildinggreen.com/sites/default/files/guidance/Foundry_exterior.jpg" className={classes.medium} />
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
                                        <div>
                                            <Typography variant="subtitle1" className={classes.typ5}>
                                                Type of company
                                            </Typography>
                                        </div>
                                    </CardContent>
                                </div>
                            </div>
                        </Card>
                    </div>
                </div>
            </div>

            <Paper elevation={0} className={classes.paper} />

            <Footer />
        </ThemeProvider>
    );
};

export default Blog;

