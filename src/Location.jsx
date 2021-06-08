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
import Rating from '@material-ui/lab/Rating';
import { Route } from 'react-router-dom';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import ButtonGroup from "@material-ui/core/ButtonGroup";
import { useState } from 'react';
import Map from './Map';

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
    card: {
        display: 'flex',
        height: '100%',
        width: '95%',
        marginTop: '4%',
        marginLeft: '1%',
        '@media (min-width:600px)': {
            display: 'flex',
            height: 250,
            width: '95%',
        },
        [theme.breakpoints.up('md')]: {
            display: 'flex',
            height: '100%',
            maxWidth: '95%',
            marginTop: '4%',
            marginLeft: '4%',
        },
    },
    details: {
        display: 'flex',
        width: '40%',
    },
    content: {
        flex: '1 0 auto',
    },
    cover: {
        width: '55%',
        '@media (min-width:600px)': {
            width: '40%',
        },
        [theme.breakpoints.up('md')]: {
            width: '40%',
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
        fontSize: '3vw',
        marginLeft: '2%',
        marginTop: '2%',
        '@media (min-width:600px)': {
            fontSize: 17,
            marginLeft: '2%',
            marginTop: '2%',
        },
        [theme.breakpoints.up('md')]: {
            fontSize: '1.2vw',
            marginLeft: '10%',
            marginTop: '2%',
        },
    },
    typ2: {
        fontSize: '3vw',
        marginLeft: '2%',
        marginTop: '3%',
        '@media (min-width:600px)': {
            fontSize: 17,
        },
        [theme.breakpoints.up('md')]: {
            fontSize: '1.2vw',
            marginTop: theme.spacing(4),
            marginLeft: '15%',
            marginTop: '3%',
        },
    },
    typ3: {
        fontSize: 8,
        '@media (min-width:600px)': {
            fontSize: 10,
        },
        [theme.breakpoints.up('md')]: {
            fontSize: '0.8vw',
        },
    },
    typ4: {
        fontSize: 18,
        marginLeft: '2%',
        marginRight: '2%',
        marginTop: '4%',
        '@media (min-width:600px)': {
            fontSize: 25,
        },
        [theme.breakpoints.up('md')]: {
            fontSize: 30,
        },
    },
    typ5: {
        fontWeight: 'bold',
        fontSize: '3vw',
        '@media (min-width:600px)': {
            fontSize: '20px',
        },
        [theme.breakpoints.up('md')]: {
            fontSize: '1.7vw',
        },
    },
    typ6: {

        fontSize: '2vw',
        marginTop: '0%',
        '@media (min-width:600px)': {
            fontSize: '16px',
            marginTop: '2%',
        },
        [theme.breakpoints.up('md')]: {
            fontSize: '1vw',
            marginTop: '2%',
        },
    },
    typ7: {
        marginTop: '2%',
        fontWeight: 'bold',
        fontSize: '2.2vw',
        '@media (min-width:600px)': {
            fontSize: '20px',
        },
        [theme.breakpoints.up('md')]: {
            fontSize: '1.3vw',
        },
    },
    typ8: {
        fontSize: '8px',
        '@media (min-width:600px)': {
            fontSize: '1.5vw',
        },
        [theme.breakpoints.up('md')]: {
            fontSize: '1.2vw',
        },
    },
    typ9: {
        fontSize: '8px',
        '@media (min-width:600px)': {
            fontSize: '1.2vw',
        },
        [theme.breakpoints.up('md')]: {
            fontSize: '0.8vw',
        },
    },
    formControl: {
        marginTop: theme.spacing(1),
        width: '95%',
        marginLeft: '2%',
        marginRight: '2%',
        '@media (min-width:600px)': {
            marginTop: theme.spacing(1),
            width: '95%',
        },
        [theme.breakpoints.up('md')]: {
            marginTop: theme.spacing(1),
            marginLeft: '10%',
            marginRight: '2%',
            width: '11vw',
        },
    },
    inc: {
        padding: "0.4vw 33vw",
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(3.5),
        '@media (min-width:600px)': {
            padding: "0.4vw 42vw",
            marginTop: theme.spacing(1),
            marginBottom: theme.spacing(5),
        },
        [theme.breakpoints.up('md')]: {
            padding: "0.4vw 4vw",
            marginTop: theme.spacing(1),
            marginLeft: '15%',
            marginTop: '3%',
        },
    },
    inc1: {
        padding: "7px 7px",
        marginTop: theme.spacing(1),
        marginLeft: theme.spacing(1),
        marginBottom: theme.spacing(3.5),
        '@media (min-width:600px)': {
            padding: "7px 4px",
            marginTop: theme.spacing(1),
            marginLeft: theme.spacing(2),
            marginBottom: theme.spacing(5),
        },
        [theme.breakpoints.up('md')]: {
            padding: "0.4vw 1vw",
            marginLeft: theme.spacing(4),
        },
    },
    btn5: {
        padding: "10px 14px",
        marginLeft: '2%',
        marginTop: '1%',
        marginBottom: '6%',
        '@media (min-width:600px)': {
            padding: "1vw 4vw",
            marginLeft: '2%',
            marginTop: '1%',
        },
        [theme.breakpoints.up('md')]: {
            padding: "8px 2vw",
            marginLeft: '18%',
            marginTop: '17%',
            marginBottom: '0%',
        },
    },
    div00: {
        display: 'block',
        marginBottom: '1%',
        '@media (min-width:600px)': {
            display: 'block',
        },
        [theme.breakpoints.up('md')]: {
            flexGrow: 1,
            display: 'flex',
        },
    },
    div0: {
        width: '98%',
        marginLeft: '1%',
        '@media (min-width:600px)': {
            width: '98%',
            marginLeft: '1%',
        },
        [theme.breakpoints.up('md')]: {
            width: '50%',
            marginLeft: '0%',
        },
    },
    div1: {
        width: '95%',
        marginLeft: '2%',
        marginRight: '2%',
        '@media (min-width:600px)': {
            width: '95%',
        },
        [theme.breakpoints.up('md')]: {
            width: '50%',
        },
    },
    div2: {
        width: '100%',
        '@media (min-width:600px)': {
            width: '45vw',
        },
        [theme.breakpoints.up('md')]: {
            width: '15vw',
        },
    },
    rating: {
        marginTop: '2%',
        fontSize: '3.5vw',
        '@media (min-width:600px)': {
            fontSize: '150%',
        },
        [theme.breakpoints.up('md')]: {
            fontSize: '2.5vw',
        },
    },
    chip: {
        marginTop: '10%',
        borderRadius: '15%',
        padding: '0.6vw 1vw',
        '@media (min-width:600px)': {
            marginTop: '25%',
            borderRadius: '15%',
            padding: '0.6vw 1vw',
        },
        [theme.breakpoints.up('md')]: {
            marginTop: '10%',
            borderRadius: '15%',
            padding: '0.6vw 1vw',
        },
    },
    cardbtn0: {
        background: '#00cc44',
        padding: "5px 8px",
        marginTop: '10%',
        '@media (min-width:600px)': {
            background: '#00cc44',
            padding: "1.5vw 3vw",
            marginLeft: '0%',
            marginTop: '0%',
        },
        [theme.breakpoints.up('md')]: {
            background: '#00cc44',
            padding: "0.6vw 1.5vw",
            marginLeft: '3.5vw',
            marginTop: '0%',
            marginR: '1%',
        },
    },
    paper: {
        padding: theme.spacing(4),
    },
    cardiv: {
        display: 'block',
        '@media (min-width:600px)': {
            display: 'flex',
        },
        [theme.breakpoints.up('md')]: {
            flexGrow: 1,
            display: 'flex',
        },
    },
    selectlabel: {
        fontSize: '4vw',
        '@media (min-width:600px)': {
            fontSize: '1vw',
        },
        [theme.breakpoints.up('md')]: {
            fontSize: '1vw',
        },
    }
}));





const Location = () => {

    const classes = useStyles();
    const [value, setValue] = React.useState(2);
    const [age, setAge] = React.useState('');
    const handleChange = (event) => {
        setAge(event.target.value);
    };
    const [counter, setCounter] = useState(0);
    return (
        <ThemeProvider theme={theme}>
            <Header />
            <div>
                <div>
                    <Typography className={classes.typ0}>
                        Our Mission
                    </Typography>
                </div>
                <div className={classes.div00}>
                    <div className={classes.div0}>
                        <div className={classes.root}>
                            <div>
                                <Typography color="textSecondary" className={classes.typ1}>
                                    Find workspace in
                                </Typography>

                                <FormControl variant="outlined" size="small" className={classes.formControl}>
                                    <InputLabel id="demo-simple-select-outlined-label" className={classes.selectlabel}> Tel Aviv</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-outlined-label"
                                        id="demo-simple-select-outlined"
                                        value={age}
                                        onChange={handleChange}
                                    >
                                        <MenuItem value="">
                                            <em>None</em>
                                        </MenuItem>
                                        <MenuItem value={10}>Ten</MenuItem>
                                        <MenuItem value={20}>Twenty</MenuItem>
                                        <MenuItem value={30}>Thirty</MenuItem>
                                    </Select>
                                </FormControl>
                            </div>
                            <div>
                                <Typography color="textSecondary" className={classes.typ2}>
                                    How many people
                                </Typography>
                                <div style={{ marginLeft: '2%' }}>
                                    <ButtonGroup size="small" aria-label="small outlined button group">
                                        {
                                            <Button disabled className={classes.inc} variant="outlined">{counter}</Button>
                                        }
                                        <Button disabled={counter >= useState} onClick={() => { setCounter(counter + 1) }} className={classes.inc1}>+</Button>
                                        {<Button disabled={counter <= 0} onClick={() => { setCounter(counter - 1) }} className={classes.inc1}>-</Button>}
                                    </ButtonGroup>
                                </div>
                            </div>
                            <div style={{ width: '35%' }}>
                                <Route render={({ history }) => (
                                    <Button variant="contained" color="primary" className={classes.btn5} onClick={() => { history.push('/Workspace') }} >
                                        <Typography color="secondary" className={classes.typ3}>Find workspace</Typography>
                                    </Button>
                                )} />
                            </div>
                        </div>
                        <div>
                            <Typography className={classes.typ4}>
                                Find workspace in
                            </Typography>
                        </div>

                        <div>
                            <Card variant="outlined" className={classes.card}>
                                <CardMedia
                                    className={classes.cover}
                                    image="https://lokeshdhakar.com/projects/lightbox2/images/image-3.jpg"
                                />
                                <div className={classes.details}>
                                    <CardContent className={classes.content}>
                                        <div className={classes.cardiv}>
                                            <div className={classes.div2}>
                                                <Typography className={classes.typ5}>
                                                    Live From Space
                                                </Typography>
                                                <Typography variant="subtitle1" color="textSecondary" className={classes.typ6}>
                                                    5447 Amina Common Suit 534
                                                </Typography>
                                                <Rating
                                                    className={classes.rating}
                                                    name="simple-controlled"
                                                    value={value}
                                                    onChange={(event, newValue) => {
                                                        setValue(newValue);
                                                    }}
                                                />
                                                <Typography className={classes.typ7}>
                                                    $400/day
                                                </Typography>
                                            </div>
                                            <div style={{ width: '35%' }} fullWidth={true}>
                                                <Button variant="contained" className={classes.cardbtn0} >
                                                    <Typography color="secondary" className={classes.typ8}>Book</Typography>
                                                </Button>
                                            </div>
                                        </div>
                                        <div className={classes.cardiv} style={{ width: '100%' }}>
                                            <div style={{ marginLeft: '2%' }}>
                                                <Button variant="outlined" className={classes.chip}>
                                                    <Typography className={classes.typ9}> Tag name </Typography>
                                                </Button>
                                            </div>
                                            <div style={{ marginLeft: '2%' }}>
                                                <Button variant="outlined" className={classes.chip}>
                                                    <Typography className={classes.typ9}> Tag name </Typography>
                                                </Button>
                                            </div>
                                            <div style={{ marginLeft: '2%' }}>
                                                <Button variant="outlined" className={classes.chip}>
                                                    <Typography className={classes.typ9}> Tag name </Typography>
                                                </Button>
                                            </div>
                                        </div>
                                    </CardContent>
                                </div>
                            </Card>

                            <Card variant="outlined" className={classes.card}>
                                <CardMedia
                                    className={classes.cover}
                                    image="https://lokeshdhakar.com/projects/lightbox2/images/image-3.jpg"
                                />
                                <div className={classes.details}>
                                    <CardContent className={classes.content}>
                                        <div className={classes.cardiv}>
                                            <div className={classes.div2}>
                                                <Typography className={classes.typ5}>
                                                    Live From Space
                                                </Typography>
                                                <Typography variant="subtitle1" color="textSecondary" className={classes.typ6}>
                                                    5447 Amina Common Suit 534
                                                </Typography>
                                                <Rating
                                                    className={classes.rating}
                                                    name="simple-controlled"
                                                    value={value}
                                                    onChange={(event, newValue) => {
                                                        setValue(newValue);
                                                    }}
                                                />
                                                <Typography className={classes.typ7}>
                                                    $400/day
                                                </Typography>
                                            </div>
                                            <div style={{ width: '35%' }} fullWidth={true}>
                                                <Button variant="contained" className={classes.cardbtn0} >
                                                    <Typography color="secondary" className={classes.typ8}>Book</Typography>
                                                </Button>
                                            </div>
                                        </div>
                                        <div className={classes.cardiv} style={{ width: '100%' }}>
                                            <div style={{ marginLeft: '2%' }}>
                                                <Button variant="outlined" className={classes.chip}>
                                                    <Typography className={classes.typ9}> Tag name </Typography>
                                                </Button>
                                            </div>
                                            <div style={{ marginLeft: '2%' }}>
                                                <Button variant="outlined" className={classes.chip}>
                                                    <Typography className={classes.typ9}> Tag name </Typography>
                                                </Button>
                                            </div>
                                            <div style={{ marginLeft: '2%' }}>
                                                <Button variant="outlined" className={classes.chip}>
                                                    <Typography className={classes.typ9}> Tag name </Typography>
                                                </Button>
                                            </div>
                                        </div>
                                    </CardContent>
                                </div>
                            </Card>

                            <Card variant="outlined" className={classes.card}>
                                <CardMedia
                                    className={classes.cover}
                                    image="https://lokeshdhakar.com/projects/lightbox2/images/image-3.jpg"
                                />
                                <div className={classes.details}>
                                    <CardContent className={classes.content}>
                                        <div className={classes.cardiv}>
                                            <div className={classes.div2}>
                                                <Typography className={classes.typ5}>
                                                    Live From Space
                                                </Typography>
                                                <Typography variant="subtitle1" color="textSecondary" className={classes.typ6}>
                                                    5447 Amina Common Suit 534
                                                </Typography>
                                                <Rating
                                                    className={classes.rating}
                                                    name="simple-controlled"
                                                    value={value}
                                                    onChange={(event, newValue) => {
                                                        setValue(newValue);
                                                    }}
                                                />
                                                <Typography className={classes.typ7}>
                                                    $400/day
                                                </Typography>
                                            </div>
                                            <div style={{ width: '35%' }} fullWidth={true}>
                                                <Button variant="contained" className={classes.cardbtn0} >
                                                    <Typography color="secondary" className={classes.typ8}>Book</Typography>
                                                </Button>
                                            </div>
                                        </div>
                                        <div className={classes.cardiv} style={{ width: '100%' }}>
                                            <div style={{ marginLeft: '2%' }}>
                                                <Button variant="outlined" className={classes.chip}>
                                                    <Typography className={classes.typ9}> Tag name </Typography>
                                                </Button>
                                            </div>
                                            <div style={{ marginLeft: '2%' }}>
                                                <Button variant="outlined" className={classes.chip}>
                                                    <Typography className={classes.typ9}> Tag name </Typography>
                                                </Button>
                                            </div>
                                            <div style={{ marginLeft: '2%' }}>
                                                <Button variant="outlined" className={classes.chip}>
                                                    <Typography className={classes.typ9}> Tag name </Typography>
                                                </Button>
                                            </div>
                                        </div>
                                    </CardContent>
                                </div>
                            </Card>

                            <Card variant="outlined" className={classes.card}>
                                <CardMedia
                                    className={classes.cover}
                                    image="https://lokeshdhakar.com/projects/lightbox2/images/image-3.jpg"
                                />
                                <div className={classes.details}>
                                    <CardContent className={classes.content}>
                                        <div className={classes.cardiv}>
                                            <div className={classes.div2}>
                                                <Typography className={classes.typ5}>
                                                    Live From Space
                                                </Typography>
                                                <Typography variant="subtitle1" color="textSecondary" className={classes.typ6}>
                                                    5447 Amina Common Suit 534
                                                </Typography>
                                                <Rating
                                                    className={classes.rating}
                                                    name="simple-controlled"
                                                    value={value}
                                                    onChange={(event, newValue) => {
                                                        setValue(newValue);
                                                    }}
                                                />
                                                <Typography className={classes.typ7}>
                                                    $400/day
                                                </Typography>
                                            </div>
                                            <div style={{ width: '35%' }} fullWidth={true}>
                                                <Button variant="contained" className={classes.cardbtn0} >
                                                    <Typography color="secondary" className={classes.typ8}>Book</Typography>
                                                </Button>
                                            </div>
                                        </div>
                                        <div className={classes.cardiv} style={{ width: '100%' }}>
                                            <div style={{ marginLeft: '2%' }}>
                                                <Button variant="outlined" className={classes.chip}>
                                                    <Typography className={classes.typ9}> Tag name </Typography>
                                                </Button>
                                            </div>
                                            <div style={{ marginLeft: '2%' }}>
                                                <Button variant="outlined" className={classes.chip}>
                                                    <Typography className={classes.typ9}> Tag name </Typography>
                                                </Button>
                                            </div>
                                            <div style={{ marginLeft: '2%' }}>
                                                <Button variant="outlined" className={classes.chip}>
                                                    <Typography className={classes.typ9}> Tag name </Typography>
                                                </Button>
                                            </div>
                                        </div>
                                    </CardContent>
                                </div>
                            </Card>

                            <Card variant="outlined" className={classes.card}>
                                <CardMedia
                                    className={classes.cover}
                                    image="https://lokeshdhakar.com/projects/lightbox2/images/image-3.jpg"
                                />
                                <div className={classes.details}>
                                    <CardContent className={classes.content}>
                                        <div className={classes.cardiv}>
                                            <div className={classes.div2}>
                                                <Typography className={classes.typ5}>
                                                    Live From Space
                                                </Typography>
                                                <Typography variant="subtitle1" color="textSecondary" className={classes.typ6}>
                                                    5447 Amina Common Suit 534
                                                </Typography>
                                                <Rating
                                                    className={classes.rating}
                                                    name="simple-controlled"
                                                    value={value}
                                                    onChange={(event, newValue) => {
                                                        setValue(newValue);
                                                    }}
                                                />
                                                <Typography className={classes.typ7}>
                                                    $400/day
                                                </Typography>
                                            </div>
                                            <div style={{ width: '35%' }} fullWidth={true}>
                                                <Button variant="contained" className={classes.cardbtn0} >
                                                    <Typography color="secondary" className={classes.typ8}>Book</Typography>
                                                </Button>
                                            </div>
                                        </div>
                                        <div className={classes.cardiv} style={{ width: '100%' }}>
                                            <div style={{ marginLeft: '2%' }}>
                                                <Button variant="outlined" className={classes.chip}>
                                                    <Typography className={classes.typ9}> Tag name </Typography>
                                                </Button>
                                            </div>
                                            <div style={{ marginLeft: '2%' }}>
                                                <Button variant="outlined" className={classes.chip}>
                                                    <Typography className={classes.typ9}> Tag name </Typography>
                                                </Button>
                                            </div>
                                            <div style={{ marginLeft: '2%' }}>
                                                <Button variant="outlined" className={classes.chip}>
                                                    <Typography className={classes.typ9}> Tag name </Typography>
                                                </Button>
                                            </div>
                                        </div>
                                    </CardContent>
                                </div>
                            </Card>
                        </div>
                    </div>
                    <div className={classes.div1}>
                        <Map />
                    </div>

                </div>
            </div>

            <Paper elevation={0} style={{ borderBottom: '1px solid lightgrey' }} className={classes.paper} />

            <Footer />
        </ThemeProvider>
    );
};

export default Location;

