import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { createMuiTheme, withStyles, ThemeProvider } from '@material-ui/core/styles';
import { green, grey } from '@material-ui/core/colors';
import Paper from "@material-ui/core/Paper";
import Grid from '@material-ui/core/Grid';
import Header from './Header';
import Rating from '@material-ui/lab/Rating';
import Carousel from 'react-material-ui-carousel';
import TextField from '@material-ui/core/TextField';
import DateFnsUtils from '@date-io/date-fns';
import Link from '@material-ui/core/Link';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ReactPlayer from 'react-player/youtube';
import Avatar from '@material-ui/core/Avatar';
import Footer from './Footer';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import { Route } from 'react-router-dom';

import {
    MuiPickersUtilsProvider,
    KeyboardTimePicker,
    KeyboardDatePicker,
} from '@material-ui/pickers';
import { Box, CardContent } from '@material-ui/core';



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
        fontSize: '20px',
        marginLeft: theme.spacing(1),
        marginTop: theme.spacing(3),
        '@media (min-width:600px)': {
            fontSize: '35px',
            marginLeft: theme.spacing(2),
            marginTop: theme.spacing(4),
        },
        [theme.breakpoints.up('md')]: {
            fontSize: '45px',
            marginLeft: theme.spacing(8),
            marginTop: theme.spacing(6),
        },
    },
    typ2: {
        fontSize: '12px',
        marginLeft: theme.spacing(1),
        marginTop: theme.spacing(1),
        '@media (min-width:600px)': {
            fontSize: '18px',
            marginLeft: theme.spacing(2),
            marginTop: theme.spacing(2),
        },
        [theme.breakpoints.up('md')]: {
            fontSize: '18px',
            marginLeft: theme.spacing(8),
            marginTop: theme.spacing(2),
        },
    },
    typ3: {
        fontWeight: 'bold',
        fontSize: '15px',
        position: 'absolute',
        marginLeft: theme.spacing(1),
        marginTop: theme.spacing(0.5),
        '@media (min-width:600px)': {
            fontSize: '25px',
            marginTop: theme.spacing(4),
            marginLeft: theme.spacing(2),
        },
        [theme.breakpoints.up('md')]: {
            fontSize: '30px',
            left: '84%',
            top: '14%',
            marginTop: theme.spacing(6),
        },
    },
    typ4: {
        fontWeight: 'bold',
        fontSize: '20px',
        marginLeft: theme.spacing(2),
        marginTop: theme.spacing(4),
        '@media (min-width:600px)': {
            fontSize: '25px',
            marginLeft: theme.spacing(3),
            marginTop: theme.spacing(2),
        },
        [theme.breakpoints.up('md')]: {
            fontSize: '30px',
            marginLeft: theme.spacing(3),
            marginTop: theme.spacing(3),
        },
    },
    typ5: {
        fontSize: '14px',
        marginLeft: theme.spacing(2),
        marginTop: theme.spacing(1),
        '@media (min-width:600px)': {
            fontSize: '18px',
            marginLeft: theme.spacing(3),
            marginTop: theme.spacing(2),
        },
        [theme.breakpoints.up('md')]: {
            fontSize: '18px',
            marginLeft: theme.spacing(3),
            marginTop: theme.spacing(2),
        },
    },
    typ6: {
        marginLeft: '5%',
        marginTop: '5%',
        marginRight: '5%',
        fontSize: '12px',
        '@media (min-width:600px)': {
            fontSize: '14px',
        },
        [theme.breakpoints.up('md')]: {
            fontSize: '0.9vw',
        },
    },
    typ7: {
        marginLeft: '5%',
        marginTop: '5%',
        marginRight: '5%',
        fontSize: '12px',
        '@media (min-width:600px)': {
            fontSize: '14px',
        },
        [theme.breakpoints.up('md')]: {
            fontSize: '0.9vw',
        },
    },
    typ8: {
        fontSize: '14px',
        marginLeft: theme.spacing(2),
        marginTop: theme.spacing(1),
        '@media (min-width:600px)': {
            fontSize: '18px',
            marginTop: theme.spacing(2),
            marginLeft: theme.spacing(3),
        },
        [theme.breakpoints.up('md')]: {
            fontSize: '1.2vw',
            marginLeft: theme.spacing(3),
            marginTop: theme.spacing(2),
        },
    },
    typ9: {
        fontWeight: 'bold',
        fontSize: '20px',
        marginLeft: theme.spacing(3),
        marginTop: theme.spacing(2),
        '@media (min-width:600px)': {
            fontSize: '25px',
            marginLeft: theme.spacing(6),
            marginTop: theme.spacing(4),
        },
        [theme.breakpoints.up('md')]: {
            fontSize: '30px',
            marginLeft: theme.spacing(6),
            marginTop: theme.spacing(4),
        },
    },
    typ10: {
        position: 'absolute',
        fontWeight: 'bold',
        top: '75%',
        left: 0,
        width: '100%',
        fontSize: '10px',
        '@media (min-width:600px)': {
            fontSize: '12px',
        },
        [theme.breakpoints.up('md')]: {
            fontSize: '16px',
        },
    },
    typ11: {
        position: 'absolute',
        fontWeight: 'bold',
        top: '65%',
        left: 0,
        width: '100%',
        fontSize: '10px',
        '@media (min-width:600px)': {
            fontSize: '12px',
        },
        [theme.breakpoints.up('md')]: {
            fontSize: '16px',
        },
    },
    typ12: {
        fontWeight: 'bold',
        fontSize: '20px',
        marginLeft: theme.spacing(3),
        marginTop: theme.spacing(4),
        '@media (min-width:600px)': {
            fontSize: '25px',
            marginLeft: theme.spacing(6),
            marginTop: theme.spacing(6),
        },
        [theme.breakpoints.up('md')]: {
            fontSize: '30px',
            marginLeft: theme.spacing(6),
            marginTop: theme.spacing(8),
        },
    },
    typ13: {
        fontSize: '12px',
        marginLeft: theme.spacing(3),
        marginTop: theme.spacing(1),
        '@media (min-width:600px)': {
            fontSize: '12px',
            marginLeft: theme.spacing(6),
            marginTop: theme.spacing(3),
        },
        [theme.breakpoints.up('md')]: {
            fontSize: '16px',
            marginLeft: theme.spacing(6),
            marginTop: theme.spacing(4),
        },
    },
    typ14: {
        fontSize: '12px',
        marginLeft: theme.spacing(3),
        marginTop: theme.spacing(1),
        '@media (min-width:600px)': {
            fontSize: '12px',
            marginLeft: theme.spacing(6),
            marginTop: theme.spacing(3),
        },
        [theme.breakpoints.up('md')]: {
            fontSize: '16px',
            marginLeft: theme.spacing(6),
            marginTop: theme.spacing(4),
        },
    },
    typ15: {
        fontWeight: 'bold',
        fontSize: '20px',
        marginLeft: theme.spacing(2),
        marginTop: theme.spacing(4),
        marginBottom: theme.spacing(2),
        '@media (min-width:600px)': {
            fontSize: '25px',
            marginLeft: theme.spacing(4),
            marginTop: theme.spacing(6),
            marginBottom: theme.spacing(3),
        },
        [theme.breakpoints.up('md')]: {
            fontSize: '30px',
            marginLeft: theme.spacing(6),
            marginTop: theme.spacing(4),
            marginBottom: theme.spacing(3),
        },
    },
    typ16: {
        display: "flex",
        alignItems: "center",
        marginLeft: theme.spacing(2),
        marginTop: theme.spacing(0.5),
        fontSize: '2.5vw',
        '@media (min-width:600px)': {
            marginLeft: theme.spacing(2.5),
            marginTop: theme.spacing(1),
            fontSize: '1.6vw',
        },
        [theme.breakpoints.up('md')]: {
            fontSize: '1vw',
        },
    },
    typ17: {
        fontWeight: 'bold',
        fontSize: '20px',
        marginLeft: theme.spacing(2),
        marginTop: theme.spacing(4),
        '@media (min-width:600px)': {
            fontSize: '25px',
            marginLeft: theme.spacing(5),
            marginTop: theme.spacing(6),
        },
        [theme.breakpoints.up('md')]: {
            fontSize: '30px',
            marginLeft: theme.spacing(6),
            marginTop: theme.spacing(4),
            marginBottom: theme.spacing(3),
        },
    },
    typ18: {
        marginTop: '4%',
        fontSize: '12px',
        '@media (min-width:600px)': {
            fontSize: '25px',
        },
        [theme.breakpoints.up('md')]: {
            width: '100%',
            fontSize: '22px',
        },
    },
    typ19: {
        fontSize: '8px',
        marginTop: theme.spacing(1),
        '@media (min-width:600px)': {
            fontSize: '18px',
            marginTop: theme.spacing(1),
        },
        [theme.breakpoints.up('md')]: {
            fontSize: '100%',
            marginTop: theme.spacing(1),
        },
    },
    typ20: {
        fontSize: '10px',
        marginTop: theme.spacing(1),
        marginBottom: '8%',
        '@media (min-width:600px)': {
            fontSize: '20px',
            marginTop: theme.spacing(1),
            marginBottom: '8%',
        },
        [theme.breakpoints.up('md')]: {
            fontSize: '18px',
            marginTop: theme.spacing(1),
            marginBottom: '12%',
        },
    },
    typ21: {
        fontSize: '2.7vw',
        marginTop: '6%',
        marginRight: '5%',
        marginBottom: theme.spacing(-2),
        '@media (min-width:600px)': {
            fontSize: '18px',
            marginTop: '5%',
            marginLeft: '-10%',
            marginBottom: theme.spacing(5),
        },
        [theme.breakpoints.up('md')]: {
            fontSize: '1vw',
            marginTop: '5%',
            marginLeft: '-10%',
            marginBottom: theme.spacing(0),
        },
    },
    typ22: {
        fontSize: '10px',
        '@media (min-width:600px)': {
            fontSize: '18px',
        },
        [theme.breakpoints.up('md')]: {
            fontSize: '18px',
        },
    },
    typ23: {
        fontWeight: 'bold',
        fontSize: '20px',
        marginTop: theme.spacing(4),
        marginBottom: theme.spacing(2),
        marginLeft: '8%',
        '@media (min-width:600px)': {
            fontSize: '25px',
            marginTop: theme.spacing(6),
            marginBottom: theme.spacing(3),
            marginLeft: '2%',
        },
        [theme.breakpoints.up('md')]: {
            fontSize: '30px',
            marginTop: theme.spacing(4),
            marginBottom: theme.spacing(3),
            marginLeft: '2%',
        },
    },
    typ24: {
        fontWeight: 'bold',
        fontSize: '3vw',
        '@media (min-width:600px)': {
            fontSize: '20px',
        },
        [theme.breakpoints.up('md')]: {
            fontSize: '1.3vw',
        },
    },
    typ25: {

        fontSize: '2vw',
        marginTop: '0%',
        '@media (min-width:600px)': {
            fontSize: '16px',
            marginTop: '2%',
        },
        [theme.breakpoints.up('md')]: {
            fontSize: '0.9vw',
            marginTop: '2%',
        },
    },
    typ26: {
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
    typ27: {
        fontSize: '8px',
        '@media (min-width:600px)': {
            fontSize: '1.5vw',
        },
        [theme.breakpoints.up('md')]: {
            fontSize: '1vw',
        },
    },
    typ28: {
        fontSize: '8px',
        '@media (min-width:600px)': {
            fontSize: '1.2vw',
        },
        [theme.breakpoints.up('md')]: {
            fontSize: '0.8vw',
        },
    },
    typ29: {
        fontWeight: 'bold',
        fontSize: '3vw',
        marginTop: '5%',
        '@media (min-width:600px)': {
            fontSize: '20px',
        },
        [theme.breakpoints.up('md')]: {
            fontSize: '1vw',
        },
    },
    textField1: {
        backgroundColor: "#e3f2fd",
        width: '89%',
        marginLeft: theme.spacing(2),
        backgroundColor: "white",
        '@media (min-width:600px)': {
            backgroundColor: "#e3f2fd",
            width: '94%',
            marginLeft: theme.spacing(3),
            backgroundColor: "white",
        },
        [theme.breakpoints.up('md')]: {
            backgroundColor: "#e3f2fd",
            width: '89%',
            marginLeft: theme.spacing(3),
            backgroundColor: "white",
        },
    },
    textField2: {
        backgroundColor: "#e3f2fd",
        width: '89%',
        marginLeft: theme.spacing(2),
        backgroundColor: "white",
        '@media (min-width:600px)': {
            backgroundColor: "#e3f2fd",
            width: '94%',
            backgroundColor: "white",
            marginLeft: theme.spacing(3),
        },
        [theme.breakpoints.up('md')]: {
            backgroundColor: "#e3f2fd",
            width: '75%',
            marginLeft: theme.spacing(3),
            backgroundColor: "white",
        },
    },

    rating2: {
        marginTop: '5%',
        marginLeft: '5%',
        fontSize: '4vw',
        '@media (min-width:600px)': {
            marginTop: '5%',
            marginLeft: '3%',
            fontSize: '3vw',
        },
        [theme.breakpoints.up('md')]: {
            fontSize: 20,
        },
    },
    img: {
        width: '100%',
        height: 200,
        '@media (min-width:600px)': {
            width: '100%',
            height: 400,
        },
        [theme.breakpoints.up('md')]: {
            width: '100%',
            height: 500,
        },
    },
    carousel1: {
        marginTop: theme.spacing(5),
        marginLeft: theme.spacing(1),
        width: '97%',
        '@media (min-width:600px)': {
            marginTop: theme.spacing(14),
            marginLeft: '2%',
            marginRight: '2%',
            width: '95%',
        },
        [theme.breakpoints.up('md')]: {
            marginTop: theme.spacing(2),
            marginLeft: theme.spacing(8),
            width: '60%',
        },
    },
    img2: {
        width: '100%',
        height: '115%',
    },
    imgdiv: {
        width: '30%',
        marginTop: theme.spacing(0.5),
        '@media (min-width:600px)': {
            width: '30%',
            marginTop: theme.spacing(2),
        },
        [theme.breakpoints.up('md')]: {
            width: '30%',
            marginTop: theme.spacing(2),
        },
    },
    imgdiv1: {
        width: '30%',
        marginTop: theme.spacing(0.5),
        marginLeft: theme.spacing(0.5),
        '@media (min-width:600px)': {
            width: '30%',
            marginTop: theme.spacing(2),
            marginLeft: theme.spacing(2),
        },
        [theme.breakpoints.up('md')]: {
            width: '30%',
            marginTop: theme.spacing(2),
            marginLeft: theme.spacing(2),
        },
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
    div1: {
        width: '26%',
        height: '200%',
    },
    div2: {
        width: '100%',
        '@media (min-width:600px)': {
            width: '45vw',
        },
        [theme.breakpoints.up('md')]: {
            width: '11vw',
        },
    },
    div3: {
        width: '95%',
        '@media (min-width:600px)': {
            width: '95%',
        },
        [theme.breakpoints.up('md')]: {
            width: '55%',
        },
    },
    div4: {
        width: '95%',
        marginTop: theme.spacing(2),
        marginLeft: theme.spacing(1),
        '@media (min-width:600px)': {
            width: '96%',
            marginTop: theme.spacing(6),
            marginLeft: theme.spacing(3),
        },
        [theme.breakpoints.up('md')]: {
            width: '40%',
            marginTop: theme.spacing(6),
            marginLeft: theme.spacing(3),
            marginBottom: theme.spacing(6),
        },
    },
    div5: {
        width: '95%',
        marginLeft: theme.spacing(1),
        '@media (min-width:600px)': {
            width: '95%',
            marginLeft: '2%',
            marginRight: '2%',
        },
        [theme.breakpoints.up('md')]: {
            width: '50%',
            marginLeft: theme.spacing(3),
        },
    },
    div6: {
        marginBottom: theme.spacing(3),
        '@media (min-width:600px)': {
            marginBottom: theme.spacing(5),
        },
        [theme.breakpoints.up('md')]: {
            marginBottom: theme.spacing(5),
        },
    },
    div7: {

        width: '15%',
    },
    div8: {

        '@media (min-width:600px)': {

        },
        [theme.breakpoints.up('md')]: {
            width: '90%',
            marginRight: theme.spacing(1),
        },
    },
    div9: {
        width: '95%',
        marginLeft: theme.spacing(1),
        '@media (min-width:600px)': {
            width: '95%',
            marginLeft: '2%',
            marginRight: '2%',
        },
        [theme.breakpoints.up('md')]: {
            width: '50%',
            marginLeft: theme.spacing(3),
        },
    },
    div10: {
        width: '100%',
        height: '100%',
        '@media (min-width:600px)': {
            width: '60%',
            height: '100%',
        },
        [theme.breakpoints.up('md')]: {
            width: '60%',
            height: '100%',
        },
    },
    div11: {
        width: '75%',
        marginLeft: '3%',
    },
    div12: {
        width: '15%',
        '@media (min-width:600px)': {
            width: '30%',
        },
        [theme.breakpoints.up('md')]: {
            width: '30%',
        },
    },
    div13: {
        width: '80%',
    },
    div133: {
        width: '70%',
    },
    div14: {
        width: '80',
        '@media (min-width:600px)': {
            width: '70',
        },
        [theme.breakpoints.up('md')]: {
            width: '70',
        },
    },
    div15: {
        width: '100%',
        display: 'block',
        marginTop: '10%',
        '@media (min-width:600px)': {
            display: 'flex',
            marginLeft: '0%',
        },
        [theme.breakpoints.up('md')]: {
            display: 'flex',
            marginLeft: '0%',
        },
    },
    div16: {
        width: '90%',
        '@media (min-width:600px)': {
            width: '65%',
        },
        [theme.breakpoints.up('md')]: {
            width: '65%',
        },
    },
    p1: {
        marginRight: '2%',
        width: '97%',
        backgroundColor: "#e3f2fd",
        marginTop: theme.spacing(2),
        '@media (min-width:600px)': {
            width: '95%',
            backgroundColor: "#e3f2fd",
            marginTop: theme.spacing(6),
        },
        [theme.breakpoints.up('md')]: {
            width: '31%',
            backgroundColor: "#e3f2fd",
            marginTop: theme.spacing(2),
        },
    },
    p2: {
        width: 120,
        height: 110,
        borderRadius: 20,
        backgroundColor: "#e3f2fd",
        marginLeft: theme.spacing(0.5),
        marginRight: theme.spacing(0.5),
        '@media (min-width:600px)': {
            width: 180,
            height: 170,
            borderRadius: 20,
            backgroundColor: "#e3f2fd",
            marginTop: theme.spacing(2),
            marginLeft: theme.spacing(3),
            marginRight: theme.spacing(3),
            marginBottom: theme.spacing(2),
        },
        [theme.breakpoints.up('md')]: {
            width: 200,
            height: 180,
            borderRadius: 20,
            backgroundColor: "#e3f2fd",
            marginTop: theme.spacing(2),
            marginLeft: theme.spacing(3),
            marginRight: theme.spacing(3),
            marginBottom: theme.spacing(2),
        },
    },
    p3: {
        width: '95%',
        height: '100%',
        backgroundColor: "#e3f2fd",
        marginTop: theme.spacing(-1.7),
        marginLeft: theme.spacing(0.5),
        '@media (min-width:600px)': {
            width: '90%',
            height: '100%',
            backgroundColor: "#e3f2fd",
            marginTop: theme.spacing(-1.7),
            marginLeft: theme.spacing(2),
        },
        [theme.breakpoints.up('md')]: {
            width: '90%',
            height: '100%',
            backgroundColor: "#e3f2fd",
            marginTop: theme.spacing(-1.7),
            marginLeft: theme.spacing(4),
        },
    },
    p4: {
        width: '100%',
        backgroundColor: "#e3f2fd",
        marginTop: theme.spacing(2),
        '@media (min-width:600px)': {
            width: '90%',
            backgroundColor: "#e3f2fd",
            marginTop: theme.spacing(2),
            marginLeft: theme.spacing(3),
        },
        [theme.breakpoints.up('md')]: {
            width: '80%',
            backgroundColor: "#e3f2fd",
            marginTop: theme.spacing(2),
            marginLeft: '5%',
        },
    },
    calender: {
        backgroundColor: "white",
        width: '89%',
        marginLeft: theme.spacing(2),
        '@media (min-width:600px)': {
            backgroundColor: "white",
            width: '94%',
            marginLeft: theme.spacing(3),
        },
        [theme.breakpoints.up('md')]: {
            backgroundColor: "white",
            width: '85%',
            marginLeft: theme.spacing(3),
        },
    },
    btn1: {
        padding: "10px 60px",
        marginTop: theme.spacing(8),
        display: 'flex',
        justifyContent: 'center',
        '@media (min-width:600px)': {
            padding: "11px 80px",
            marginTop: theme.spacing(3),
        },
        [theme.breakpoints.up('md')]: {
            padding: "11px 80px",
            marginTop: theme.spacing(3),
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
            padding: theme.spacing(2),
            textAlign: 'center',
            color: theme.palette.text.secondary,
            backgroundColor: "#e3f2fd",
        },
    },
    paper2: {
        marginTop: '3%',
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        backgroundColor: "#e3f2fd",
        '@media (min-width:600px)': {
            padding: theme.spacing(2),
            textAlign: 'center',
            color: theme.palette.text.secondary,
            backgroundColor: "#e3f2fd",
            marginTop: theme.spacing(6),
        },
        [theme.breakpoints.up('md')]: {
            padding: theme.spacing(2),
            textAlign: 'center',
            color: theme.palette.text.secondary,
            backgroundColor: "#e3f2fd",
        },
    },
    paper3: {
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        backgroundColor: "#e3f2fd",
        '@media (min-width:600px)': {
            padding: theme.spacing(2),
            textAlign: 'center',
            color: theme.palette.text.secondary,
            backgroundColor: "#e3f2fd",
            marginTop: theme.spacing(4),
        },
        [theme.breakpoints.up('md')]: {
            padding: theme.spacing(2),
            textAlign: 'center',
            color: theme.palette.text.secondary,
            backgroundColor: "#e3f2fd",
            marginTop: theme.spacing(0),
        },
    },
    paperwhite: {
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        backgroundColor: "white",
        '@media (min-width:600px)': {
            padding: theme.spacing(3),
            textAlign: 'center',
            color: theme.palette.text.secondary,
            backgroundColor: "white",
        },
        [theme.breakpoints.up('md')]: {
            padding: theme.spacing(4),
            textAlign: 'center',
            color: theme.palette.text.secondary,
            backgroundColor: "white",
        },
    },
    list: {
        display: 'flex',
        flexDirection: 'row',
    },
    scrollBar: {
        '&::-webkit-scrollbar': {
            width: '0.4em',
            height: 1,
        },

        '&::-webkit-scrollbar-thumb': {
            backgroundColor: 'green',
        }
    },
    scrollBar2: {
        '&::-webkit-scrollbar': {
            width: '0.13em',
        },

        '&::-webkit-scrollbar-thumb': {
            backgroundColor: 'green',
        }
    },
    large: {
        borderRadius: '50%',
        display: 'flex',
        justifyContent: 'center',
        marginTop: '10%',
        marginLeft: '10%',
        marginBottom: '10%',
        marginRight: '10%',
        width: '100%',
        height: '12vw',
        '@media (min-width:600px)': {
            width: '100%',
            height: '12vw',
        },
        [theme.breakpoints.up('md')]: {
            width: '100%',
            height: '5.5vw',

        },

    },
    large1: {
        width: '120%',
        height: '7.5vw',
        borderRadius: '50%',
        '@media (min-width:600px)': {
            width: theme.spacing(8),
            height: theme.spacing(8),
        },
        [theme.breakpoints.up('md')]: {
            width: theme.spacing(6),
            height: theme.spacing(6),
        },
    },
    card: {
        display: 'flex',
        height: '100%',
        width: '95%',
        marginTop: '4%',
        marginLeft: '1%',
        backgroundColor: '#f0f5f5',
        '@media (min-width:600px)': {
            display: 'flex',
            height: '100%',
            width: '95%',
        },
        [theme.breakpoints.up('md')]: {
            display: 'flex',
            height: '100%',
            width: '90%',
            marginTop: '4%',
            marginLeft: '4%',
        },
    },
    details: {
        display: 'flex',
        width: '60%',
    },
    cover: {
        width: '40%',
        '@media (min-width:600px)': {
            width: '40%',
        },
        [theme.breakpoints.up('md')]: {
            width: '40%',
        },
    },
    rating: {
        marginTop: '2%',
        fontSize: '3.5vw',
        marginLeft: theme.spacing(1),
        '@media (min-width:600px)': {
            fontSize: '150%',
            marginLeft: theme.spacing(2),
        },
        [theme.breakpoints.up('md')]: {
            fontSize: '2.5vw',
            marginLeft: theme.spacing(8),
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
        padding: "5px 8px",
        marginTop: '10%',
        '@media (min-width:600px)': {
            padding: "1.5vw 3vw",
            marginLeft: '0%',
            marginTop: '0%',
        },
        [theme.breakpoints.up('md')]: {
            padding: "0.6vw 1.5vw",
            marginLeft: '3.5vw',
            marginTop: '0%',
            marginR: '1%',
        },
    },
    typ111: {
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
    text111: {
        width: '64%',
        marginTop: theme.spacing(2.5),
        fontSize: '2.8vw',
        marginLeft: theme.spacing(0.5),
        marginBottom: '2%',
        '@media (min-width:600px)': {
            fontSize: '2.2vw',
            marginLeft: theme.spacing(0),
        },
        [theme.breakpoints.up('md')]: {
            fontSize: '2vw',
            marginLeft: theme.spacing(0),
        },
    },
    text222: {
        fontSize: '2.2vw',
        '@media (min-width:600px)': {
            fontSize: '1.5vw',
        },
        [theme.breakpoints.up('md')]: {
            fontSize: '1.2vw',
        },
    },
    img111: {
        width: '95%',
        height: 200,
        '@media (min-width:600px)': {
            width: '95%',
            height: 300,
        },
        [theme.breakpoints.up('md')]: {
            width: '100%',
            height: 400,
        },
    },

    div111: {
        maxWidth: 410,
    },
    div222: {
        marginTop: '2%',
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
    cards00: {
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
    img222: {
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
    buttn111: {
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
    cards000: {
        marginLeft: '0%',
        '@media (min-width:600px)': {
            marginLeft: theme.spacing(0),
        },
        [theme.breakpoints.up('md')]: {
            marginLeft: theme.spacing(0),
        },
    },
    cards111: {
        marginLeft: '2%',
        '@media (min-width:600px)': {
            marginLeft: '2%',
        },
        [theme.breakpoints.up('md')]: {
            marginLeft: theme.spacing(4),
        },
    },
    paper000: {
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





const Home = () => {
    const classes = useStyles();
    const [value, setValue] = React.useState(2);
    const [selectedDate, setSelectedDate] = React.useState(new Date('2014-08-18T21:11:54'));
    const handleDateChange = (date) => {
        setSelectedDate(date);
    };
    const preventDefault = (event) => event.preventDefault();
    var items = [
        {
            imageUrl: "https://i.ibb.co/WzgSLzn/image5.png",
        },
        {
            imageUrl: "https://i.ibb.co/WzgSLzn/image5.png",
        }
    ]
    return (
        <ThemeProvider theme={theme}>
            <Header />
            <div>
                <div className={classes.root}>
                    <div>
                        <Typography className={classes.typ1}>
                            London Ministore
                    </Typography>
                        <Typography className={classes.typ2} color="textSecondary">
                            5547 Amina Common Suit 534
                    </Typography>
                        <Rating
                            className={classes.rating}
                            name="simple-controlled"
                            value={value}
                            onChange={(event, newValue) => {
                                setValue(newValue);
                            }}
                        />
                    </div>
                    <div>
                        <Typography className={classes.typ3}>
                            $400/Day
                    </Typography>
                    </div>
                </div>

                <div className={classes.root}>
                    <div className={classes.carousel1}>
                        <div>
                            <Carousel
                                navButtonsAlwaysVisible={true}
                                indicators={false}
                                navButtonsProps={{

                                    style: {
                                        backgroundColor: "white",
                                        opacity: 0.4
                                    },
                                }}

                                animation={"fade"}
                                autoPlay={true}
                                stopAutoPlayOnHover={false}
                                interval={4000}

                                NextIcon={
                                    <img src="https://cdn2.iconfinder.com/data/icons/linicons-arrows/1560/next_arrow_right-256.png" width="28px" hight="28px" />
                                }

                                PrevIcon={
                                    <img src="https://cdn2.iconfinder.com/data/icons/linicons-arrows/1560/previous_arrow_left-256.png" width="28px" hight="28px" />
                                }>

                                <div className={classes.root}>
                                    <img src="https://ak.picdn.net/shutterstock/videos/25705829/thumb/12.jpg" className={classes.img} />
                                </div>

                                <div className={classes.root}>
                                    <img src="https://ak.picdn.net/shutterstock/videos/25705829/thumb/12.jpg" className={classes.img} />
                                </div>

                            </Carousel >
                        </div>
                        <div style={{ display: 'flex' }}>
                            <div className={classes.imgdiv}>
                                <img src="https://thumbs.dreamstime.com/b/modern-office-buildings-closeup-shanghai-china-162464380.jpg" className={classes.img2} />
                            </div>
                            <div className={classes.imgdiv1}>
                                <img src="https://image.freepik.com/free-photo/close-up-modern-office-buildings-shanghai_1359-796.jpg" className={classes.img2} />
                            </div>
                            <div className={classes.imgdiv1}>
                                <img src="https://image.freepik.com/free-photo/close-up-modern-office-buildings_1359-652.jpg" className={classes.img2} />
                            </div>
                            <div className={classes.imgdiv1}>
                                <img src="https://img.freepik.com/free-photo/close-up-building-with-windows_1353-109.jpg?size=626&ext=jpg" className={classes.img2} />
                            </div>
                        </div>
                    </div>

                    <div className={classes.p1}>
                        <Typography className={classes.typ4}>
                            Get in touch
                        </Typography>
                        <Typography className={classes.typ5}>
                            Full Name
                        </Typography>
                        <TextField id="outlined-basic" className={classes.textField1} variant="outlined" />
                        <Typography className={classes.typ5}>
                            Work email
                        </Typography>
                        <TextField id="outlined-basic" className={classes.textField1} variant="outlined" />
                        <Typography className={classes.typ5}>
                            Phone number
                        </Typography>
                        <TextField id="outlined-basic" className={classes.textField1} variant="outlined" />
                        <div className={classes.root}>
                            <div>
                                <Typography className={classes.typ5}>
                                    Date
                                </Typography>

                                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                    <KeyboardDatePicker
                                        id="date-picker-dialog"
                                        inputVariant="outlined"
                                        format="MM/dd/yyyy"
                                        value={selectedDate}
                                        onChange={handleDateChange}
                                        className={classes.calender}
                                        KeyboardButtonProps={{
                                            'aria-label': 'change date',
                                        }}
                                    />
                                </MuiPickersUtilsProvider>
                            </div>
                            <div>
                                <Typography className={classes.typ8}>
                                    Number of people
                                </Typography>
                                <TextField id="outlined-basic" className={classes.textField2} variant="outlined" />
                            </div>
                        </div>
                        <Box style={{ display: 'flex', justifyContent: 'center' }}>
                            <Button variant="contained" color="primary" width='100%' className={classes.btn1} >
                                <Typography color="secondary" >Submit</Typography>
                            </Button>
                        </Box>

                        <Typography className={classes.typ6}>
                            By clicking the above button you agree to our
                            <Link href="#" onClick={preventDefault}>
                                Terms of Service
                            </Link>
                            and <br /> have read and understood our
                            <Link href="#" onClick={preventDefault}>
                                Privacy Policy
                            </Link>
                        </Typography>

                        <Typography className={classes.typ7}>
                            Want to get in touch now? <br /> Go ahead and give us a call at:
                            <Link href="#" onClick={preventDefault}>
                                97237219247
                            </Link>
                        </Typography>
                        <Paper elevation={0} className={classes.paper} />
                    </div>
                </div>
                <Paper elevation={0} className={classes.paperwhite} />

                <Paper elevation={0} className={classes.paper} />

                <div style={{ maxWidth: '100%', overflow: 'auto' }} className={classes.scrollBar}>
                    <Typography className={classes.typ9}>
                        Amenities
                    </Typography>
                    <List className={classes.list}>
                        <ListItem>
                            <div className={classes.p2} align='center'>
                                <img src="http://assets.stickpng.com/images/580b585b2edbce24c47b2488.png" width='20%'
                                    style={{ position: 'absolute', top: '25%', right: '40%' }} />
                                <Typography className={classes.typ10}>
                                    Hi-speed Wi-Fi
                                </Typography>
                            </div>
                        </ListItem>
                        <ListItem>
                            <div className={classes.p2} align='center'>
                                <img src="https://i.ibb.co/CPhvjLY/wind-png-9809.png" width='20%'
                                    style={{ position: 'absolute', top: '25%', right: '40%' }} />
                                <Typography className={classes.typ11}>
                                    Enhanched <br />HVAC Standards
                                </Typography>
                            </div>
                        </ListItem>
                        <ListItem>
                            <div className={classes.p2} align='center'>
                                <img src="https://img.icons8.com/ios/452/sofa.png" width='20%'
                                    style={{ position: 'absolute', top: '25%', right: '40%' }} />
                                <Typography className={classes.typ10}>
                                    Unique common areas
                                </Typography>
                            </div>
                        </ListItem>
                        <ListItem>
                            <div className={classes.p2} align='center'>
                                <img src="https://www.pngkey.com/png/full/301-3018292_svg-openstreetmap-wiki-meeting-icon-transparent.png" width='20%'
                                    style={{ position: 'absolute', top: '25%', right: '40%' }} />
                                <Typography className={classes.typ10}>
                                    Meeting rooms
                                </Typography>
                            </div>
                        </ListItem>
                        <ListItem>
                            <div className={classes.p2} align='center'>
                                <img src="https://static.thenounproject.com/png/7154-200.png" width='20%'
                                    style={{ position: 'absolute', top: '25%', right: '40%' }} />
                                <Typography className={classes.typ10}>
                                    Free hand dispensers
                                </Typography>
                            </div>
                        </ListItem>
                        <ListItem>
                            <div className={classes.p2} align='center'>
                                <img src="https://icon-library.com/images/phone-icon-transparent-background/phone-icon-transparent-background-10.jpg" width='20%'
                                    style={{ position: 'absolute', top: '25%', right: '40%' }} />
                                <Typography className={classes.typ10}>
                                    Phone booths
                                </Typography>
                            </div>
                        </ListItem>
                    </List>
                </div>

                <Paper elevation={0} className={classes.paper} />

                <div className={classes.root}>
                    <div className={classes.div3}>
                        <Typography className={classes.typ12}>
                            Discription
                        </Typography>
                        <Typography className={classes.typ13}>
                            sklcsd lkcns dklcnsldk csdsdlck sdlkcns dlkcns dlkcns dlkc nsldkc sldkcns dsdcsd kcnsdkl cnsldkcnsl dkcnsldkcn
                            sklcsd lkcnsdkl cnsldkcsds dlcksd lkcnsd lkcnsd lkcnsdlkc nsldkc sldkcns dsdcsd kcnsdkl cnsldkcnsl dkcnsldkcn
                            sklcsdlk cnsdkl cnsldkcsd sdlcksdl kcnsd lkcnsdl kcnsdlkc nsldkc sldkcns dsdcsd kcnsdkl cnsldkcnsl dkcnsldkcn
                            sklcsdlkcn sdklcns ldkcsdsdl cksdlkcns dlkcns dlkcnsdlkc nsldkc sldkcns dsdcsd kcnsdkl cnsldkcnsl dkcnsldkcn
                            sklcsdlkc nsdklcns ldkcsdsdlck sdlkcn sdlkcnsd lkcnsdlkc nsldkc sldkcns dsdcsd kcnsdkl cnsldkcnsl dkcnsldkcn
                            sklcsdlkcn sdklcnsld kcsdsdlcksdl kcnsdlk cnsdlkcnsdlkc nsldkc sldkcns dsdcsd kcnsdkl cnsldkcnsl dkcnsldkcn
                        </Typography>
                        <Typography className={classes.typ14}>
                            sklcs dlkcnsdk lcnsldkcsds dlcksdlkcnsd lkcnsdl kcnsdlkc nsldkc sldkcns dsdcsd kcnsdkl cnsldkcnsl dkcnsldkcn
                            sklcsdlkc nsdklcnsld kcsdsdlcksdlkcn sdlkcnsdlk cnsdlkc
                         </Typography>
                    </div>
                    <div className={classes.div4}>
                        <ReactPlayer url='https://www.youtube.com/watch?v=ysz5S6PUM-U' width='100%' />
                    </div>
                </div>

                <Paper elevation={0} className={classes.paper2} />

                <div className={classes.root}>
                    <div className={classes.div5}>
                        <Typography className={classes.typ15}>
                            Reviews
                        </Typography>
                        <div className={classes.div6}>
                            <div style={{ maxHeight: 500, overflow: 'auto' }} className={classes.scrollBar2}>
                                <List>
                                    <ListItem>
                                        <div className={classes.p3}>
                                            <div style={{ display: 'flex' }}>
                                                <div className={classes.div7}>
                                                    <div className={classes.Avatar}>
                                                        <img src="https://www.indiewire.com/wp-content/uploads/2015/04/dakota-fanning-by-daniel-bergeron.jpg?w=780" className={classes.large} />
                                                    </div>

                                                </div>
                                                <div className={classes.div8}>
                                                    <Rating
                                                        className={classes.rating2}
                                                        name="simple-controlled"
                                                        value={value}
                                                        onChange={(event, newValue) => {
                                                            setValue(newValue);
                                                        }}
                                                    />
                                                    <Typography className={classes.typ16}>
                                                        excellent .. they were quickaslckasklc al alskcmasklc
                                                    </Typography>
                                                </div>
                                            </div>
                                        </div>
                                    </ListItem>
                                    <ListItem>
                                        <div className={classes.p3}>
                                            <div style={{ display: 'flex' }}>
                                                <div className={classes.div7}>
                                                    <div className={classes.Avatar}>
                                                        <img src="https://www.indiewire.com/wp-content/uploads/2015/04/dakota-fanning-by-daniel-bergeron.jpg?w=780" className={classes.large} />
                                                    </div>

                                                </div>
                                                <div className={classes.div8}>
                                                    <Rating
                                                        className={classes.rating2}
                                                        name="simple-controlled"
                                                        value={value}
                                                        onChange={(event, newValue) => {
                                                            setValue(newValue);
                                                        }}
                                                    />
                                                    <Typography className={classes.typ16}>
                                                        excellent .. they were quickaslckasklc al alskcmasklc
                                                    </Typography>
                                                </div>
                                            </div>
                                        </div>
                                    </ListItem>
                                    <ListItem>
                                        <div className={classes.p3}>
                                            <div style={{ display: 'flex' }}>
                                                <div className={classes.div7}>
                                                    <div className={classes.Avatar}>
                                                        <img src="https://www.indiewire.com/wp-content/uploads/2015/04/dakota-fanning-by-daniel-bergeron.jpg?w=780" className={classes.large} />
                                                    </div>

                                                </div>
                                                <div className={classes.div8}>
                                                    <Rating
                                                        className={classes.rating2}
                                                        name="simple-controlled"
                                                        value={value}
                                                        onChange={(event, newValue) => {
                                                            setValue(newValue);
                                                        }}
                                                    />
                                                    <Typography className={classes.typ16}>
                                                        excellent .. they were quickaslckasklc al alskcmasklc
                                                    </Typography>
                                                </div>
                                            </div>
                                        </div>
                                    </ListItem>
                                    <ListItem>
                                        <div className={classes.p3}>
                                            <div style={{ display: 'flex' }}>
                                                <div className={classes.div7}>
                                                    <div className={classes.Avatar}>
                                                        <img src="https://www.indiewire.com/wp-content/uploads/2015/04/dakota-fanning-by-daniel-bergeron.jpg?w=780" className={classes.large} />
                                                    </div>

                                                </div>
                                                <div className={classes.div8}>
                                                    <Rating
                                                        className={classes.rating2}
                                                        name="simple-controlled"
                                                        value={value}
                                                        onChange={(event, newValue) => {
                                                            setValue(newValue);
                                                        }}
                                                    />
                                                    <Typography className={classes.typ16}>
                                                        excellent .. they were quickaslckasklc al alskcmasklc
                                                    </Typography>
                                                </div>
                                            </div>
                                        </div>
                                    </ListItem>
                                    <ListItem>
                                        <div className={classes.p3}>
                                            <div style={{ display: 'flex' }}>
                                                <div className={classes.div7}>
                                                    <div className={classes.Avatar}>
                                                        <img src="https://www.indiewire.com/wp-content/uploads/2015/04/dakota-fanning-by-daniel-bergeron.jpg?w=780" className={classes.large} />
                                                    </div>

                                                </div>
                                                <div className={classes.div8}>
                                                    <Rating
                                                        className={classes.rating2}
                                                        name="simple-controlled"
                                                        value={value}
                                                        onChange={(event, newValue) => {
                                                            setValue(newValue);
                                                        }}
                                                    />
                                                    <Typography className={classes.typ16}>
                                                        excellent .. they were quickaslckasklc al alskcmasklc
                                                    </Typography>
                                                </div>
                                            </div>
                                        </div>
                                    </ListItem>
                                    <ListItem>
                                        <div className={classes.p3}>
                                            <div style={{ display: 'flex' }}>
                                                <div className={classes.div7}>
                                                    <div className={classes.Avatar}>
                                                        <img src="https://www.indiewire.com/wp-content/uploads/2015/04/dakota-fanning-by-daniel-bergeron.jpg?w=780" className={classes.large} />
                                                    </div>

                                                </div>
                                                <div className={classes.div8}>
                                                    <Rating
                                                        className={classes.rating2}
                                                        name="simple-controlled"
                                                        value={value}
                                                        onChange={(event, newValue) => {
                                                            setValue(newValue);
                                                        }}
                                                    />
                                                    <Typography className={classes.typ16}>
                                                        excellent .. they were quickaslckasklc al alskcmasklc
                                                    </Typography>
                                                </div>
                                            </div>
                                        </div>
                                    </ListItem>
                                </List>
                            </div>
                        </div>
                    </div>

                    <Paper elevation={0} className={classes.paper} />

                    <div className={classes.div9}>

                        <Typography className={classes.typ17}>
                            Upcoming events
                        </Typography>

                        <div style={{ maxHeight: 500, overflow: 'auto' }} className={classes.scrollBar2}>
                            <List>

                                <ListItem>
                                    <Card variant="outlined" className={classes.card}>
                                        <CardMedia
                                            className={classes.cover}
                                            image="https://lokeshdhakar.com/projects/lightbox2/images/image-3.jpg"
                                        />
                                        <div className={classes.details}>
                                            <CardContent className={classes.content}>
                                                <div className={classes.cardiv}>
                                                    <div className={classes.div2}>
                                                        <Typography className={classes.typ24}>
                                                            Name of the event
                                                        </Typography>
                                                        <Typography variant="subtitle1" color="textSecondary" className={classes.typ25}>
                                                            16 Nov 2020, 22:00-23:00
                                                        </Typography>
                                                        <Typography className={classes.typ29}>
                                                            1707 Bocur Glun
                                                        </Typography>
                                                    </div>
                                                    <div style={{ width: '35%' }} fullWidth={true}>
                                                        <Button variant="outlined" className={classes.cardbtn0}>
                                                            <Typography color="primary" className={classes.typ27}>Book</Typography>
                                                        </Button>
                                                    </div>
                                                </div>
                                                <div className={classes.div15}>
                                                    <div className={classes.div12}>
                                                        <img src="https://www.indiewire.com/wp-content/uploads/2015/04/dakota-fanning-by-daniel-bergeron.jpg?w=780" className={classes.large1} />
                                                    </div>
                                                    <div className={classes.div16}>
                                                        <Typography color="textSecondary" className={classes.typ21}>
                                                            Company name
                                                        </Typography>
                                                    </div>
                                                </div>
                                            </CardContent>
                                        </div>
                                    </Card>
                                </ListItem>

                                <ListItem>
                                    <Card variant="outlined" className={classes.card}>
                                        <CardMedia
                                            className={classes.cover}
                                            image="https://lokeshdhakar.com/projects/lightbox2/images/image-3.jpg"
                                        />
                                        <div className={classes.details}>
                                            <CardContent className={classes.content}>
                                                <div className={classes.cardiv}>
                                                    <div className={classes.div2}>
                                                        <Typography className={classes.typ24}>
                                                            Name of the event
                                                        </Typography>
                                                        <Typography variant="subtitle1" color="textSecondary" className={classes.typ25}>
                                                            16 Nov 2020, 22:00-23:00
                                                        </Typography>
                                                        <Typography className={classes.typ29}>
                                                            1707 Bocur Glun
                                                        </Typography>
                                                    </div>
                                                    <div style={{ width: '35%' }} fullWidth={true}>
                                                        <Button variant="outlined" className={classes.cardbtn0}>
                                                            <Typography color="primary" className={classes.typ27}>Book</Typography>
                                                        </Button>
                                                    </div>
                                                </div>
                                                <div className={classes.div15}>
                                                    <div className={classes.div12}>
                                                        <img src="https://www.indiewire.com/wp-content/uploads/2015/04/dakota-fanning-by-daniel-bergeron.jpg?w=780" className={classes.large1} />
                                                    </div>
                                                    <div className={classes.div16}>
                                                        <Typography color="textSecondary" className={classes.typ21}>
                                                            Company name
                                                        </Typography>
                                                    </div>
                                                </div>
                                            </CardContent>
                                        </div>
                                    </Card>
                                </ListItem>

                                <ListItem>
                                    <Card variant="outlined" className={classes.card}>
                                        <CardMedia
                                            className={classes.cover}
                                            image="https://lokeshdhakar.com/projects/lightbox2/images/image-3.jpg"
                                        />
                                        <div className={classes.details}>
                                            <CardContent className={classes.content}>
                                                <div className={classes.cardiv}>
                                                    <div className={classes.div2}>
                                                        <Typography className={classes.typ24}>
                                                            Name of the event
                                                        </Typography>
                                                        <Typography variant="subtitle1" color="textSecondary" className={classes.typ25}>
                                                            16 Nov 2020, 22:00-23:00
                                                        </Typography>
                                                        <Typography className={classes.typ29}>
                                                            1707 Bocur Glun
                                                        </Typography>
                                                    </div>
                                                    <div style={{ width: '35%' }} fullWidth={true}>
                                                        <Button variant="outlined" className={classes.cardbtn0}>
                                                            <Typography color="primary" className={classes.typ27}>Book</Typography>
                                                        </Button>
                                                    </div>
                                                </div>
                                                <div className={classes.div15}>
                                                    <div className={classes.div12}>
                                                        <img src="https://www.indiewire.com/wp-content/uploads/2015/04/dakota-fanning-by-daniel-bergeron.jpg?w=780" className={classes.large1} />
                                                    </div>
                                                    <div className={classes.div16}>
                                                        <Typography color="textSecondary" className={classes.typ21}>
                                                            Company name
                                                        </Typography>
                                                    </div>
                                                </div>
                                            </CardContent>
                                        </div>
                                    </Card>
                                </ListItem>
                            </List>
                        </div>
                    </div>
                </div>

                <Paper elevation={0} className={classes.paper3} />


                <div className={classes.div000}>
                    <div>
                        <Grid item container>
                            <Grid item xs={false} sm={1} />
                            <Grid item xs={12} sm={10}>

                                <Grid item xs={12} sm={12} style={{ display: 'flex' }}>
                                    <Typography className={classes.text111}>Nearby workspaces</Typography>
                                </Grid>

                                <div container className={classes.cards00} >
                                    <Grid item xs={4} className={classes.cards000}>
                                        <div className={classes.div111}>
                                            <Card >
                                                <CardActionArea>
                                                    <CardMedia
                                                        component="img"
                                                        alt="Contemplative Reptile"
                                                        height="100%"
                                                        image="https://www.spaceist.co.uk/wp-content/uploads/Forty5-white-designer-desk-white-storage.jpg"
                                                        title="Contemplative Reptile"
                                                        className={classes.img222}
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

                                    <Grid item xs={4} className={classes.cards111}>
                                        <div className={classes.div1111}>
                                            <Card>
                                                <CardActionArea>
                                                    <CardMedia
                                                        component="img"
                                                        alt="Contemplative Reptile"
                                                        height="230"
                                                        image="https://www.spaceist.co.uk/wp-content/uploads/Forty5-white-designer-desk-white-storage.jpg"
                                                        title="Contemplative Reptile"
                                                        className={classes.img222}
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

                                    <Grid item xs={4} className={classes.cards111}>
                                        <div className={classes.div1111}>
                                            <Card>
                                                <CardActionArea>
                                                    <CardMedia
                                                        component="img"
                                                        alt="Contemplative Reptile"
                                                        height="230"
                                                        image="https://www.spaceist.co.uk/wp-content/uploads/Forty5-white-designer-desk-white-storage.jpg"
                                                        title="Contemplative Reptile"
                                                        className={classes.img222}
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
                <Paper elevation={0} className={classes.paperwhite} />
                <Paper elevation={0} className={classes.paper3} />

            </div>
            <Footer />
        </ThemeProvider>

    );
};

export default Home;

