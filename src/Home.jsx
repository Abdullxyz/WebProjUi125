import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Header from "./Header";
import Box from '@material-ui/core/Box';
import { createMuiTheme, withStyles, ThemeProvider } from '@material-ui/core/styles';
import { green, grey } from '@material-ui/core/colors';
import HomeCarousel1 from "./HomeCarousel1"
import HomeCarousel2 from "./HomeCarousel2"
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Footer from './Footer';
import Paper from "@material-ui/core/Paper";
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import ButtonGroup from "@material-ui/core/ButtonGroup";
import { useState } from 'react';
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
  typp1: {
    marginLeft: theme.spacing(1),
    marginTop: theme.spacing(9),
    width: '95%',
    '@media (min-width:600px)': {
      width: '95%',
      marginLeft: '2%',
      marginRight: '2%',
      marginTop: theme.spacing(10),
    },
    [theme.breakpoints.up('md')]: {
      width: '30%',
      marginLeft: '4%',
      marginTop: theme.spacing(10),
    },
  },
  typ1: {
    fontWeight: 'bold',
    fontSize: '25px',
    '@media (min-width:600px)': {
      fontSize: '35px',
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '45px',
    },

  },
  typp2: {
    marginLeft: theme.spacing(1),
    marginTop: theme.spacing(3),
    marginRight: '2%',
    width: '95%',
    '@media (min-width:600px)': {
      marginLeft: '2%',
      marginRight: '2%',
      marginTop: theme.spacing(4),
      width: '95%',
    },
    [theme.breakpoints.up('md')]: {
      width: '69%',
      marginTop: theme.spacing(10),
    },
  },
  typ2: {
    fontSize: '12px',
    '@media (min-width:600px)': {
      fontSize: '18px',
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '25px',
      marginLeft: '55%',
    },
  },
  typ3: {
    fontSize: 45,
    fontWeight: 50,
    marginLeft: theme.spacing(1),
    marginTop: theme.spacing(15),
    '@media (min-width:600px)': {
      fontSize: 55,
      fontWeight: 50,
      marginLeft: '2%',
      marginRight: '2%',
      marginTop: theme.spacing(30),
    },
    [theme.breakpoints.up('md')]: {
      fontSize: 35,
      fontWeight: 50,
      marginLeft: '2%',
      marginRight: '2%',
      marginTop: theme.spacing(30),
    },

  },

  typ4: {
    fontWeight: 'bold',
    fontSize: 30,
    marginLeft: theme.spacing(1),
    '@media (min-width:600px)': {
      fontWeight: 'bold',
      fontSize: 70,
      marginLeft: '2%',
      marginRight: '2%',
    },
    [theme.breakpoints.up('md')]: {
      fontWeight: 'bold',
      fontSize: 60,
      marginLeft: '2%',
    },
  },

  typ5: {
    fontSize: 15,
    marginLeft: theme.spacing(1),
    marginTop: theme.spacing(3),
    '@media (min-width:600px)': {
      fontSize: 35,
      marginLeft: '2%',
      marginRight: '2%',
      marginTop: theme.spacing(6),
    },
    [theme.breakpoints.up('md')]: {
      fontSize: 25,
      marginLeft: '2%',
      marginTop: theme.spacing(10),
    },
  },

  typ6: {
    fontSize: 25,
    fontWeight: 50,
    marginLeft: theme.spacing(1),
    marginTop: theme.spacing(4),
    '@media (min-width:600px)': {
      fontSize: 40,
      fontWeight: 50,
      marginLeft: '2%',
      marginRight: '2%',
      marginTop: theme.spacing(20),
    },
    [theme.breakpoints.up('md')]: {
      fontSize: 30,
      fontWeight: 50,
      marginLeft: '2%',
      marginTop: theme.spacing(20),
    },
  },

  typ7: {
    fontWeight: 'bold',
    fontSize: 25,
    marginLeft: theme.spacing(1),
    marginTop: theme.spacing(2),
    '@media (min-width:600px)': {
      fontWeight: 'bold',
      fontSize: 60,
      marginLeft: '2%',
      marginRight: '2%',
      marginTop: theme.spacing(2),
    },
    [theme.breakpoints.up('md')]: {
      fontWeight: 'bold',
      fontSize: 50,
      marginLeft: '2%',
      marginTop: theme.spacing(4),
    },
  },
  typ8: {
    fontWeight: 'bold',
    fontSize: 12,
    width: '95%',
    marginLeft: '2%',
    marginRight: '2%',

    '@media (min-width:600px)': {
      fontWeight: 'bold',
      fontSize: 18,
      marginLeft: '2%',
      marginRight: '2%',
      marginTop: theme.spacing(15),
    },
    [theme.breakpoints.up('md')]: {
      fontWeight: 'bold',
      fontSize: 25,
      marginLeft: '2%',
      marginTop: theme.spacing(15),
    },
  },

  typp8: {
    width: "33.33%",

    '@media (min-width:600px)': {
      width: "33.5%"
    },
    [theme.breakpoints.up('md')]: {
      width: "33%"
    },
  },

  typ9: {
    fontSize: 10,
    width: '95%',
    marginLeft: '2%',
    marginRight: '2%',
    '@media (min-width:600px)': {
      fontSize: 16,
      marginLeft: '2%',
      marginRight: '2%',
      marginTop: theme.spacing(4),
    },
    [theme.breakpoints.up('md')]: {
      fontSize: 18,
      marginLeft: '2%',
      marginTop: theme.spacing(4),
    },
  },

  typ10: {
    fontSize: 35,
    fontWeight: 50,
    marginTop: theme.spacing(10),
    '@media (min-width:600px)': {
      fontSize: 35,
      fontWeight: 50,
      marginTop: theme.spacing(10),
    },
    [theme.breakpoints.up('md')]: {
      fontSize: 35,
      fontWeight: 50,
    },
  },
  typ11: {
    fontWeight: 'bold',
    fontSize: 30,
    marginTop: theme.spacing(2),

    '@media (min-width:600px)': {
      fontWeight: 'bold',
      fontSize: 40,
      marginTop: theme.spacing(2),
    },
    [theme.breakpoints.up('md')]: {
      fontWeight: 'bold',
      fontSize: 50,
      marginTop: theme.spacing(2),
    },
  },
  typ12: {
    fontSize: 8,
    marginBottom: theme.spacing(1),
    marginTop: theme.spacing(1),
    '@media (min-width:600px)': {
      fontWeight: 'bold',
      fontSize: '2.3vw',
      marginBottom: theme.spacing(2),
      marginTop: theme.spacing(2),
    },
    [theme.breakpoints.up('md')]: {
      fontWeight: 'bold',
      fontSize: 30,
      marginBottom: theme.spacing(2),
      marginTop: theme.spacing(2),
    },
  },
  typ13: {
    fontWeight: 'bold',
    fontSize: 8,
    '@media (min-width:600px)': {
      fontWeight: 'bold',
      fontSize: 14,
    },
    [theme.breakpoints.up('md')]: {
      fontWeight: 'bold',
      fontSize: 18,
    },
  },
  typ14: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(6),

    '@media (min-width:600px)': {
      marginBottom: theme.spacing(8),
    },
    [theme.breakpoints.up('md')]: {
      marginBottom: theme.spacing(12),
    },
  },
  typ15: {
    fontWeight: 'bold',
    fontSize: 25,
    '@media (min-width:600px)': {
      fontWeight: 'bold',
      fontSize: 30,
    },
    [theme.breakpoints.up('md')]: {
      fontWeight: 'bold',
      fontSize: 40,
      marginLeft: '8%',
    },
  },
  typ16: {
    fontWeight: 'bold',
    fontSize: 18,
    '@media (min-width:600px)': {
      fontWeight: 'bold',
      fontSize: 25,
      marginRight: theme.spacing(1),
    },
    [theme.breakpoints.up('md')]: {
      fontWeight: 'bold',
      fontSize: '3vw',
      marginLeft: '8%',
    },
  },
  typ17: {
    fontSize: 12,
    '@media (min-width:600px)': {
      fontSize: '1.2vw',
      marginRight: theme.spacing(1),
      marginTop: theme.spacing(1),
    },
    [theme.breakpoints.up('md')]: {
      fontSize: 18,
      marginLeft: '8%',
      marginTop: theme.spacing(3),
    },
  },
  typ18: {
    fontWeight: 'bold',
    fontSize: 14,
    '@media (min-width:600px)': {
      fontWeight: 'bold',
      fontSize: 20,
    },
    [theme.breakpoints.up('md')]: {
      fontWeight: 'bold',
      fontSize: '1.7vw',
      marginLeft: '8%',
    },
  },
  typ19: {
    fontWeight: 'bold',
    fontSize: 12,
    marginLeft: '2%',
    marginTop: theme.spacing(1),
    '@media (min-width:600px)': {
      fontWeight: 'bold',
      fontSize: 20,
      marginLeft: '2%',
      marginRight: '2%',
      marginTop: theme.spacing(3),
    },
    [theme.breakpoints.up('md')]: {
      fontWeight: 'bold',
      fontSize: 30,
      marginLeft: '4%',
      marginTop: theme.spacing(5),
    },
  },
  typ20: {
    fontSize: 10,
    width: '65%',
    marginLeft: '2%',
    marginTop: theme.spacing(2),
    '@media (min-width:600px)': {
      fontSize: 12,
      width: '100%',
      marginLeft: '2%',
      marginRight: '2%',
      marginTop: theme.spacing(2),
    },
    [theme.breakpoints.up('md')]: {
      fontSize: 18,
      marginLeft: '4%',
      marginTop: theme.spacing(2),
    },
  },
  typ21: {
    fontWeight: 'bold',
    fontSize: 30,
    marginTop: theme.spacing(8),
    '@media (min-width:600px)': {
      fontWeight: 'bold',
      fontSize: 50,
      marginTop: theme.spacing(6),
    },
    [theme.breakpoints.up('md')]: {
      fontWeight: 'bold',
      fontSize: 50,
      marginTop: theme.spacing(6),
    },
  },
  typ22: {
    fontSize: 12,
    marginTop: theme.spacing(3),
    '@media (min-width:600px)': {
      fontSize: 18,
      marginTop: theme.spacing(3),
    },
    [theme.breakpoints.up('md')]: {
      fontSize: 18,
      marginTop: theme.spacing(3),
    },
  },
  typ23: {
    fontSize: '3vw',
    marginLeft: theme.spacing(1),
    marginTop:'2%',
    '@media (min-width:600px)': {
      fontSize: '2.2vw',
      marginTop:'0%',
      marginLeft: '2%',
      marginRight: '2%',
    },
    [theme.breakpoints.up('md')]: {
      fontSize: 20,
      marginTop: theme.spacing(4),
      marginLeft: '2%',
    },
  },
  typ233: {
    fontSize: '3vw',
    marginLeft: theme.spacing(1),
    '@media (min-width:600px)': {
      fontSize: '2.2vw',

      marginLeft: '2%',
      marginRight: '2%',
    },
    [theme.breakpoints.up('md')]: {
      fontSize: 20,
      marginTop: theme.spacing(4),
      marginLeft: '2%',
    },
  },
  typ24: {
    fontSize: '1.6vw',
    '@media (min-width:600px)': {
      fontSize: '1.2zvw',
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '0.8vw',
    },
  },
  typ25: {
    fontSize: 10,
    '@media (min-width:600px)': {
      fontSize: 14,
    },
    [theme.breakpoints.up('md')]: {
      fontSize: 16,
    },
  },
  typ26: {
    fontSize: '8px',
    '@media (min-width:600px)': {
      fontSize: '14px',
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '20px',
    },
  },
  typ27: {
    fontSize: '6px',
    '@media (min-width:600px)': {
      fontSize: '14px',
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '20px',
    },
  },
  typ28: {
    fontSize: '8px',
    '@media (min-width:600px)': {
      fontSize: '14px',
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '20px',
    },
  },
  formControl: {
    marginTop: theme.spacing(1),
    marginLeft: '2%',
    marginRight: '2%',
    width: '100%',
    '@media (min-width:600px)': {
      marginTop: theme.spacing(1),
      marginLeft: '2%',
      marginRight: '2%',
      width: '40vvw',
    },
    [theme.breakpoints.up('md')]: {
      marginTop: theme.spacing(1),
      marginLeft: '2%',
      width: '25vw',
    },
  },
  selectlabel: {
    fontSize: '12px',
    '@media (min-width:600px)': {
      fontSize: '18px',
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '20px',
    },
  },
  inc: {
    padding: "0.4vw 31vw",
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(3.5),
    '@media (min-width:600px)': {
      padding: "0.4vw 12vw",
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(5),
    },
    [theme.breakpoints.up('md')]: {
      padding: "0.4vw 9vw",
      marginTop: theme.spacing(1),
    },
  },
  inc1: {
    padding: "1.5vw 0vw",
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(3.5),
    '@media (min-width:600px)': {
      padding: "1vw 0vw",
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(5),
    },
    [theme.breakpoints.up('md')]: {
      padding: "0.65vw 0vw",
    },
  },
  img1: {
    marginTop: theme.spacing(10),
    width: "100%",
    '@media (min-width:600px)': {

      marginTop: theme.spacing(10),
    },
    [theme.breakpoints.up('md')]: {
      marginTop: theme.spacing(10),
    },
  },
  img2: {
    width: '95%',
    marginLeft: '2%',
    marginRight: '2%',
    marginTop: theme.spacing(-38),
    '@media (min-width:600px)': {
      marginTop: theme.spacing(-60),
    },
    [theme.breakpoints.up('md')]: {
      width: '48%',
      marginTop: theme.spacing(30),
    },
  },
  img3: {
    marginLeft: '2%',
    marginRight: '2%',
    marginTop: theme.spacing(4),
    width: '80%',
    '@media (min-width:600px)': {
      marginTop: theme.spacing(8),
      width: '80%',
      marginLeft: '9%',
      marginRight: '2%',
    },
    [theme.breakpoints.up('md')]: {
      marginLeft: '9%',
      marginRight: '2%',
      marginTop: theme.spacing(4),
      width: '48%',
    },
  },
  img4: {
    marginTop: theme.spacing(5),
    width: "95%",
    height: "300",
    marginBottom: theme.spacing(15),
    marginLeft: theme.spacing(1),
    '@media (min-width:600px)': {
      marginTop: theme.spacing(15),
      width: "95%",
      height: "700",
      marginLeft: theme.spacing(1),
    },
    [theme.breakpoints.up('md')]: {
      marginTop: theme.spacing(20),
      width: "100%",
      height: "800",
      marginLeft: theme.spacing(0),
    },
  },
  img5: {
    marginLeft: theme.spacing(1),
    marginTop: theme.spacing(6),
    width: '95%',
    '@media (min-width:600px)': {
      marginLeft: '2%',
      marginRight: '2%',
      marginTop: theme.spacing(6),
      width: '95%',
    },
    [theme.breakpoints.up('md')]: {
      marginLeft: '2%',
      marginTop: theme.spacing(6),
      width: '95%',
    },
  },
  img6: {
    marginLeft: theme.spacing(1),
    marginTop: theme.spacing(35),
    width: '90%',
    '@media (min-width:600px)': {
      marginLeft: '2%',
      marginRight: '2%',
      marginTop: theme.spacing(40),
      width: '90%',
    },
    [theme.breakpoints.up('md')]: {
      marginLeft: '2%',
      marginTop: theme.spacing(6),
      width: '90%',
    },
  },
  img7: {
    marginLeft: '2%',
    marginRight: '2%',
    marginTop: theme.spacing(5),
    width: '95%',
    '@media (min-width:600px)': {
      marginTop: theme.spacing(20),
      width: '95%',
    },
    [theme.breakpoints.up('md')]: {
      marginTop: theme.spacing(6),
      width: '95%',
    },
  },
  box1: {
    height: 225,
    width: '95%',
    borderRadius: 3,
    position: 'relative',
    left: '50%',
    transform: 'translate(-50%)',
    bgcolor: "white",
    display: "inline-block",
    backgroundColor: 'White',
    display:'block',
    '@media (min-width:600px)': {
      height: 90,
      width: '95%',
      borderRadius: 8,
      position: 'absolute',
      left: '50%',
      transform: 'translate(-50%)',
      bgcolor: "white",
      display: "inline-block",
      backgroundColor: 'White',
      display:'flex',
    },
    [theme.breakpoints.up('md')]: {
      marginTop: theme.spacing(-9),
      height: 150,
      width: '65%',
      borderRadius: 16,
      position: 'absolute',
      left: '50%',
      transform: 'translate(-50%)',
      bgcolor: "white",
      display: "inline-block",
      backgroundColor: 'White',
      display:'flex',
    },
  },
  box2: {
    height: '16%',
    position: 'absolute',
    left: '1.6%',
    right: '1.6%',
    transform: 'translate(0%)',
    backgroundColor: 'White',
    width: '90%',
    display: "inline-block",
    marginTop: '75%',
    '@media (min-width:600px)': {
      height: '19%',
      position: 'absolute',
      left: '1%',
      right: '1.6%',
      transform: 'translate(0%)',
      backgroundColor: 'White',
      width: '80%',
      display: "inline-block",
      marginTop: '50%',
    },
    [theme.breakpoints.up('960')]: {
      height: '25%',
      left: '0%',
      backgroundColor: 'White',
      width: 800,
      marginTop: '50%',
    },
  },
  btn1: {
    marginTop: theme.spacing(4),
    marginLeft: theme.spacing(1),
    '@media (min-width:600px)': {
      marginTop: theme.spacing(8),
      marginLeft: theme.spacing(3),
    },
    [theme.breakpoints.up('md')]: {
      marginTop: theme.spacing(10),
      marginLeft: theme.spacing(4),
    },
  },
  btn2: {
    marginTop: '10%',
    marginLeft: theme.spacing(1),
    '@media (min-width:600px)': {
      marginTop: theme.spacing(8),
      marginLeft: theme.spacing(3),
    },
    [theme.breakpoints.up('md')]: {
      marginTop: theme.spacing(8),
      marginLeft: theme.spacing(3),
    },
  },
  btn3: {
    marginLeft: theme.spacing(1.3),
    marginTop: theme.spacing(1),
    '@media (min-width:600px)': {
      marginTop: theme.spacing(2),
    },
    [theme.breakpoints.up('md')]: {
      marginLeft: theme.spacing(5),
      marginTop: theme.spacing(3),
    },
  },
  btn4: {
    marginLeft: '70%',
    marginTop: theme.spacing(-12),
    borderRadius: 18,
    padding: "10px 20px",
    '@media (min-width:600px)': {
      marginLeft: '70%',
      marginTop: theme.spacing(-10),
      borderRadius: 25,
      padding: "20px 40px"
    },
    [theme.breakpoints.up('md')]: {
      marginLeft: theme.spacing(83),
      marginTop: theme.spacing(-10),
      borderRadius: 30,
      padding: "20px 40px",
    },
  },
  btn5: {
    padding: "2.2vw 1vw",
    marginTop: '-2%',
    marginRight: theme.spacing(0.5),
    '@media (min-width:600px)': {
      padding: "0.2vw 3vw",
      marginLeft: '20%',
      marginTop: theme.spacing(4),
      marginRight: theme.spacing(2),
      marginBottom:theme.spacing(0),
    },
    [theme.breakpoints.up('md')]: {
      padding: "0.6vw 1vw",
      marginLeft: '20%',
      marginTop: theme.spacing(8.5),
      marginBottom:theme.spacing(0),
    },
  },
  btn6: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
    '@media (min-width:600px)': {
      marginTop: theme.spacing(2),
      marginBottom: theme.spacing(4),
    },
    [theme.breakpoints.up('md')]: {
      marginLeft: theme.spacing(5),
      marginTop: theme.spacing(2),
    },
  },
  spacing: {
    marginLeft: theme.spacing(16),
  },
  carousel1:
  {
    width: '95%',
    marginLeft: '2%',
    marginRight: '2%',
    marginTop: theme.spacing(6),
    '@media (min-width:600px)': {
      marginTop: theme.spacing(15),
    },
    [theme.breakpoints.up('md')]: {
      marginTop: theme.spacing(15),
    },
  },
  carousel2:
  {
    width: '95%',
    marginLeft: '2%',
    marginRight: '2%',
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(10),
    '@media (min-width:600px)': {
      marginTop: theme.spacing(20),
      marginBottom: theme.spacing(10),
    },
    [theme.breakpoints.up('md')]: {
      marginTop: theme.spacing(20),
      marginBottom: theme.spacing(10),
    },
  },
  card: {
    display: 'flex',
    width: '95%',
    marginLeft: '2%',
    marginRight: '2%',
    marginTop: '5%',
    background: "#f5f5f0",
    '@media (min-width:600px)': {
    },
    [theme.breakpoints.up('md')]: {

      width: '94%',
      marginTop: theme.spacing(4),
      marginLeft: '4%',
    },
  },
  details: {
    display: 'flex',
    flexDirection: 'column',

  },
  content: {
    flex: '1 0 auto',
    marginLeft: theme.spacing(2),
  },
  cover: {
    width: 160,
    '@media (min-width:600px)': {
      width: 340,
    },
    [theme.breakpoints.up('md')]: {
      width: 340,
    },
  },
  backkk: {
    textAlign: 'center',
    background: "#00ff80",
    width: '96%',
    height: 190,
    marginLeft: theme.spacing(1),
    marginTop: theme.spacing(4),
    '@media (min-width:600px)': {
      textAlign: 'center',
      background: "#00ff80",
      width: '95%',
      height: 250,
      marginLeft: '2%',
      marginRight: '2%',
      marginTop: theme.spacing(4),
    },
    [theme.breakpoints.up('md')]: {
      textAlign: 'left',
      background: "#00ff80",
      width: '95%',
      height: '52%',
      marginLeft: '0%',
      marginRight: '0%',
      marginTop: theme.spacing(4),
    },
  },
  backk: {
    textAlign: 'center',
    background: "#f5f5f0",
    width: '96%',
    marginTop: theme.spacing(4),
    marginLeft: theme.spacing(1),
    '@media (min-width:600px)': {
      background: "#f5f5f0",
      width: '96%',
      marginLeft: theme.spacing(2),
      marginTop: theme.spacing(6),
    },
    [theme.breakpoints.up('md')]: {
      textAlign: 'left',
      background: "#f5f5f0",
      width: '95%',
      height: '29%',
      marginLeft: '0%',
      marginTop: theme.spacing(14),
    },
  },
  bg: {
    backgroundColor: "#e3f2fd",
  },
  paper: {

    '@media (min-width:600px)': {
      padding: theme.spacing(4),
      textAlign: 'center',
      color: theme.palette.text.secondary,
      backgroundColor: "#e3f2fd",
      marginTop: theme.spacing(4),
    },
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(4),
      textAlign: 'center',
      color: theme.palette.text.secondary,
      backgroundColor: "#e3f2fd",
    },
  },
  div1: {
    width: '95%',
    marginTop:'-10%',
    '@media (min-width:600px)': {
      width: '100%',
      marginTop:'0%',
    },
    [theme.breakpoints.up('md')]: {
      width: '50%',
      marginTop:'0%',
    },
  },
  div2: {
    width: '95%',
    '@media (min-width:600px)': {
      width: '100%',
    },
    [theme.breakpoints.up('md')]: {
      width: '50%',
    },
  },
  div3: {
    marginTop: '-5%',
    '@media (min-width:600px)': {
      marginTop: '-5%',
    },
    [theme.breakpoints.up('md')]: {
      marginTop: '0%',
    },
  },
  div4: {
    width: '95%',
    marginLeft: '2%',
    marginRight: '2%',
    '@media (min-width:600px)': {
      marginTop: '0%'
    },
    [theme.breakpoints.up('md')]: {
      marginTop: '0%',
    },
  },
  div5: {
    width: '95%',
    marginLeft: '2%',
    marginRight: '2%',
    '@media (min-width:600px)': {
      marginTop: '0%'
    },
    [theme.breakpoints.up('md')]: {
      marginTop: '0%',
      width: '60%',
    },
  },
  div6: {
    width: '95%',
    marginLeft: '2%',
    marginRight: '2%',
    '@media (min-width:600px)': {
      marginTop: '0%'
    },
    [theme.breakpoints.up('md')]: {
      marginTop: '0%',
      width: '35%',
      marginLeft: '0%',
      marginRight: '0%',
    },
  },
  diva: {
    width:'95%',
    '@media (min-width:600px)': {
      width:'38%',
    },
    [theme.breakpoints.up('md')]: {
      width:'38%',
    },
  },
  divb: {
    width:'30%',
    marginLeft: '2%',
    '@media (min-width:600px)': {
      width:'22%',
      marginLeft: '0%',
    },
    [theme.breakpoints.up('md')]: {
      width:'22%',
      marginLeft: '0%',
    },
  },
  divc: {
    width:'95%',
    marginLeft:'2%',
    '@media (min-width:600px)': {
      width:'38%',
    },
    [theme.breakpoints.up('md')]: {
      width:'38%',
    },
  },
}));



const Home = () => {

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
        <div className={classes.root} >
          <div className={classes.typp1}>
            <Typography className={classes.typ1}>
              Revolutionize Your <br /> Workspace
                    </Typography>
          </div>
          <div className={classes.typp2}>
            <Typography variant="h5" className={classes.typ2}>
              Whether you're an established enterprise or
              a growing startup, discover spaces that
              inspire your most impactful work.
            </Typography>
          </div>
        </div>
        <div >
          <img src="https://i.ibb.co/PtWWNX8/office.jpg" className={classes.img1} />
        </div>
        <Box boxShadow={3} className={classes.box1}>
            <div className={classes.diva}>
              <Typography color="textSecondary" className={classes.typ233}>
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
            <div className={classes.divc}>
              <Typography color="textSecondary" className={classes.typ23}>
                How many people
              </Typography>
              <ButtonGroup size="small" aria-label="small outlined button group">
                {
                  <Button disabled className={classes.inc} variant="outlined">{counter}</Button>}
                <Button disabled={counter >= useState} onClick={() => { setCounter(counter + 1) }} className={classes.inc1}>+</Button>
                {<Button disabled={counter <= 0} onClick={() => { setCounter(counter - 1) }} className={classes.inc1}>-</Button>}
              </ButtonGroup>
            </div>
            <div className={classes.divb}>
              <Route render={({ history }) => (
                <Button variant="contained" color="primary" className={classes.btn5} onClick={() => { history.push('/Workspace') }} >
                  <Typography color="secondary" className={classes.typ24}>Find workspace</Typography>
                </Button>
              )} />
            </div>
        </Box>
        <div className={classes.root}>
          <div className={classes.div1}>
            <Typography color="Primary" className={classes.typ3}>
              About US
            </Typography>

            <Typography className={classes.typ4}>
              More Productivity <br />
              Less Burn Out.
            </Typography>

            <Typography variant="h5" className={classes.typ5}>
              Whether you're an established enterprise or<br />
              a growing startup, discover spaces that <br />
              inspire your most impactful work.
            </Typography>

            <img src="https://i.ibb.co/kBFWk6w/image1.png" className={classes.img5} />
          </div>

          <div className={classes.img2}>
            <img src="https://i.ibb.co/q71Tf3Y/image2.png" className={classes.img6} />
          </div>
        </div>
        <img src="https://i.ibb.co/sgFsbTt/image3.png" className={classes.img7} />
        <div className={classes.root}>
          <div className={classes.div2}>
            <Typography color="Primary" className={classes.typ6}>
              Title Should Be Here
            </Typography>

            <Typography className={classes.typ7}>
              Solution designed for all <br />
              your needs.
            </Typography>

            <Typography variant="h5" className={classes.typ5}>
              Workspace is our craft. From private files to<br />
              whole headquaters, we created spaces that work
            </Typography>

            <Button variant="contained" color="primary" style={{ padding: "11px 30px" }} className={classes.btn1}>
              <Typography color="secondary" className={classes.typ26}> View all solutions → </Typography>
            </Button>
          </div >
          <img src="https://i.ibb.co/B42BNnZ/image4.png" className={classes.img3} />
        </div>

        <div style={{ display: 'flex' }} className={classes.div4}>
          <div className={classes.typp8}>
            <Typography className={classes.typ8}> Office Suits </Typography>
            <Typography className={classes.typ9}>
              Offices for large teams or less dense mid-size <br />
                            teams, featuring meeting rooms, executive <br />
                            offices, and operational supprt.
                        </Typography>
            <Button className={classes.btn2}>
              <Typography className={classes.typ25} color="primary"> Learn More → </Typography>
            </Button>
          </div>

          <div className={classes.typp8}>
            <Typography className={classes.typ8}> Standard private offices </Typography>
            <Typography className={classes.typ9}>
              Offices for large teams or less dense mid-size <br />
                            teams, featuring meeting rooms, executive <br />
                            offices, and operational supprt.
                        </Typography>
            <Button className={classes.btn2}>
              <Typography className={classes.typ25} color="primary"> Learn More → </Typography>
            </Button>
          </div>

          <div className={classes.typp8}>
            <Typography className={classes.typ8}> Coworking spaces </Typography>
            <Typography className={classes.typ9}>
              Offices for large teams or less dense mid-size <br />
              teams, featuring meeting rooms, executive <br />
              offices, and operational supprt.
            </Typography>
            <Button className={classes.btn2}>
              <Typography className={classes.typ25} color="primary"> Learn More → </Typography>
            </Button>
          </div>
        </div>
        <div className={classes.carousel1}>
          <HomeCarousel1 />
        </div>
        <div className={classes.div4}>
          <Typography color="Primary" className={classes.typ10} align="center">
            Blog
          </Typography>
          <Typography className={classes.typ11} align="center">
            Our latest news
          </Typography>
          <Typography color="textSecondary" align="center" className={classes.typ14}>
            After 3 days all of your offers will arrive and you will have an other 7 days to <br /> to select your new company
          </Typography>
        </div>
        <div className={classes.root}>
          <div className={classes.div5}>
            <Card variant="outlined" className={classes.card}>
              <CardMedia
                className={classes.cover}
                image="https://lokeshdhakar.com/projects/lightbox2/images/image-3.jpg"
              />
              <div className={classes.details}>
                <CardContent className={classes.content}>
                  <Typography variant="subtitle1" color="textSecondary" className={classes.typ13}>
                    Tag Name Here
                    </Typography>
                  <Typography component="h5" variant="h5" className={classes.typ12}>
                    Optimize the schedule of thousands of <br /> trains in one minute
                    </Typography>
                  <Typography variant="subtitle1" color="textSecondary" className={classes.typ13}>
                    Mac Miller
                    </Typography>
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
                  <Typography variant="subtitle1" color="textSecondary" className={classes.typ13}>
                    Tag Name Here
                    </Typography>
                  <Typography component="h5" variant="h5" className={classes.typ12}>
                    Optimize the schedule of thousands of <br /> trains in one minute
                    </Typography>
                  <Typography variant="subtitle1" color="textSecondary" className={classes.typ13}>
                    Mac Miller
                    </Typography>
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
                  <Typography variant="subtitle1" color="textSecondary" className={classes.typ13}>
                    Tag Name Here
                    </Typography>
                  <Typography component="h5" variant="h5" className={classes.typ12}>
                    Optimize the schedule of thousands of <br /> trains in one minute
                    </Typography>
                  <Typography variant="subtitle1" color="textSecondary" className={classes.typ13}>
                    Mac Miller
                    </Typography>
                </CardContent>
              </div>
            </Card>
          </div>
          <div className={classes.div6}>
            <div className={classes.backkk}>
              <Typography className={classes.typ15} color="secondary">
                __
              </Typography>
              <Typography className={classes.typ16} color="secondary">
                You like what <br /> you're reading ?
              </Typography>
              <Typography className={classes.typ17} color="secondary">
                Get free online programming tips and <br /> resources directly delivered to your indbox
              </Typography>
              <Button variant="contained" color="Secondary" style={{ padding: "11px 30px" }} className={classes.btn3}>
                <Typography color="primary" className={classes.typ27}>Get started</Typography>
              </Button>
            </div>
            <div className={classes.backk} boxShadow={3}>
              <Typography className={classes.typ15}>
                __
              </Typography>
              <Typography className={classes.typ18}>
                Interactive decision <br /> support system
                  </Typography>
              <Button variant="contained" color="primary" style={{ padding: "11px 30px" }} className={classes.btn6}>
                <Typography color="secondary" className={classes.typ28}>Get started</Typography>
              </Button>
            </div>
          </div>
        </div>
        <div className={classes.div3}>
          <img src="https://cdn.wallpapersafari.com/65/56/uoKeAd.jpg" className={classes.img4} />
          <Box className={classes.box2}>
            <Typography component="h5" variant="h5" className={classes.typ19}>
              Know about our story more
            </Typography>
            <Typography className={classes.typ20}>
              Keep track of what's happening with your data, change permissions, <br /> and run reports against your data anywhere in the world
            </Typography>
            <Button variant="contained" color="primary" className={classes.btn4} hight="20">
              <Typography color="secondary">→</Typography>
            </Button>
          </Box>
        </div>
        <div className={classes.bg}>
          <Paper elevation={0} className={classes.paper} />
          <Typography className={classes.typ21} align="center">
            Happy Customers
                    </Typography>
          <Typography align="center" className={classes.typ22}>
            The frontend is the most valuable business resource we have ever purchased. The frontend is the most 
            valuable business resource we have ever purchased. The frontend is the most valuable business 
            resource we have ever purchased.
                     </Typography>
          <div className={classes.carousel2}>
            <HomeCarousel2 />
          </div>
          <Paper elevation={0} className={classes.paper} />
        </div>
      </div>
      <Footer />
    </ThemeProvider>
  );
};

export default Home;

