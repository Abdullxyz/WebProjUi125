import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { createMuiTheme, withStyles, ThemeProvider } from '@material-ui/core/styles';
import { green, grey } from '@material-ui/core/colors';
import Avatar from '@material-ui/core/Avatar';
import Header from './Header';
import Footer from './Footer';
import { Button } from '@material-ui/core';




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
      display: 'flex',
    },
  },
  typ0: {
    fontWeight: 'bold',
    marginTop: '8%',
    fontSize: '2vw',
    '@media (min-width:600px)': {
      fontSize: '1.8vw',
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '1.8vw',
    },
  },
  typ1: {
    marginTop: '8%',
    fontSize: '1.6vw',
    '@media (min-width:600px)': {
      fontSize: '1.3vw',
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '1.2vw',
    },
  },
  typ2: {
    marginBottom: '2%',
    fontSize: '1.8vw',
    '@media (min-width:600px)': {
      fontSize: '1.5vw',
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '1.4vw',
    },
  },
  typ3: {
    marginBottom: '2%',
    fontSize: '1.6vw',
    '@media (min-width:600px)': {
      fontSize: '1.3vw',
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '1.2vw',
    },
  },
  typ4: {
    marginBottom: '8%',
    fontSize: '1.6vw',
    '@media (min-width:600px)': {
      fontSize: '1.3vw',
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '1.2vw',
    },
  },
  typ5: {
    marginBottom: '2.3%',
    fontSize: '1.6vw',
    '@media (min-width:600px)': {
      fontSize: '1.3vw',
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '1.2vw',
    },
  },
  div0: {
    display: 'flex',
  },
  div1: {
    width: '39%',
    marginLeft: '10%',
    marginRight: '1%',
  },
  div2: {
    width: '39%',
    marginRight: '10%',
    marginLeft: '1%',
  },
  div3: {
    width: '14%',
  },
  div4: {
    marginLeft: '7%',
    '@media (min-width:600px)': {
      marginLeft: '7%',
    },
    [theme.breakpoints.up('md')]: {
      marginLeft: '5%',
    },
  },
  div5: {
    marginTop: '3%',
    marginLeft: '3%',
    marginRight: '3%',
  },
  div6: {
    marginTop: '3%',
    marginLeft: '3%',
    marginRight: '3%',
    display: 'block',
    '@media (min-width:600px)': {
      display: 'flex',
      marginLeft: '0%',
      marginRight: '0%',
      justifyContent: 'center',
    },
    [theme.breakpoints.up('md')]: {
      display: 'flex',
      marginLeft: '0%',
      marginRight: '0%',
      justifyContent: 'center',
    },
  },
  diva: {
    height: '35vw',
    marginTop: '6%',
    marginBottom: '4%',
  },
  divb: {
    height: '45vw',
    marginTop: '4%',
    marginBottom: '6%',
  },
  divc: {
    height: '55vw',
    marginTop: '6%',
    marginBottom: '4%',
  },
  divd: {
    height: '25vw',
    marginTop: '4%',
    marginBottom: '6%',
  },
  dive: {
    width: '100%',
    '@media (min-width:600px)': {
      width: '23%',
    },
    [theme.breakpoints.up('md')]: {
      width: '30%',
    },
  },
  divee: {
    width: '20%',
    '@media (min-width:600px)': {
      width: '35%',
    },
    [theme.breakpoints.up('md')]: {
      width: '35%',
    },
  },
  divf: {
    width: '100%',
    marginTop: '2%',
    '@media (min-width:600px)': {
      width: '23%',
      marginLeft: '2%',
      marginTop: '0%',
    },
    [theme.breakpoints.up('md')]: {
      width: '30%',
      marginLeft: '2%',
      marginTop: '0%',
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
  medium: {
    marginTop: '-4vw',
    marginLeft: '20%',
    width: '110%',
    height: '14.8vw',
    '@media (min-width:600px)': {
      width: '110%',
      height: '14.8vw',
    },
    [theme.breakpoints.up('md')]: {
      width: '100%',
      height: '14vw',
    },
  },
  text1: {
    fontWeight: 'bold',
    fontSize: '1.5vw',
    position: 'relative',
    marginTop: '-70%',
    color: 'white',
    marginLeft: '10%',
    '@media (min-width:600px)': {
      fontWeight: 'bold',
      fontSize: '1.5vw',
      position: 'relative',
      marginTop: '-45%',
      color: 'white',
      marginLeft: '10%',
    },
    [theme.breakpoints.up('md')]: {
      fontWeight: 'bold',
      fontSize: '1.5vw',
      position: 'relative',
      marginTop: '-35%',
      color: 'white',
      marginLeft: '10%',
    },
  },
  btn0: {
    padding: '0.3vw 0.2vw',
    marginLeft: '4%',
    position: 'relative',
    marginTop: '-30vw',
    color: 'white',
    marginLeft: '10%',
    '@media (min-width:600px)': {
      padding: '0.2vw 0.5vw',
      marginLeft: '4%',
      position: 'relative',
      marginTop: '-18.5vw',
      color: 'white',
      marginLeft: '10%',
    },
    [theme.breakpoints.up('md')]: {
      padding: '0.2vw 0.5vw',
      marginLeft: '4%',
      position: 'relative',
      marginTop: '-16vw',
      color: 'white',
      marginLeft: '10%',
    },
  },
  typ6: {
    fontSize: '6px',
    '@media (min-width:600px)': {
      fontSize: '10px',
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '12px',

    },
  },
}));





const Home = () => {

  const classes = useStyles();
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <div >
        <img src="https://i.ibb.co/7tTDhJg/image-13.png" className={classes.img0} />
      </div>
      <div style={{ display: 'flex' }}>
        <div className={classes.div3}>
          <Avatar src="https://www.buildinggreen.com/sites/default/files/guidance/Foundry_exterior.jpg" className={classes.medium} />
        </div>
        <div className={classes.div4}>
          <Typography className={classes.typ0}>
            Office name
          </Typography>
          <div style={{ display: 'flex' }}>
            <div>

            </div>
            <div>
              <Typography color="textSecondary" className={classes.typ1}>
                Namur, Belgium
              </Typography>
            </div>
          </div>
          <div style={{ display: 'flex' }}>
            <div />
            <div>
              <Typography color="textSecondary" className={classes.typ1}>
                exibit.be
              </Typography>
            </div>
          </div>
        </div>
      </div>

      <div className={classes.div5}>
        <Typography style={{ fontWeight: 'bold' }} className={classes.typ2}>
          Demographics
        </Typography>
        <Typography className={classes.typ3}>
          Climbing Mount Kilimanjaro is something I want to get definitely off my bucket list this year. I earn Heaps of money and I have time left as I don't have a family yet. I'm very used
          by using sites like Booking.com, Flightradar, Airbnb, Uber, etc. when I'm traveling for work or my other holidays.
        </Typography>
      </div>

      <div className={classes.div6}>
        <div className={classes.dive}>
          <Typography style={{ fontWeight: 'bold' }} className={classes.typ2}>
            Demographics
          </Typography>

          <div style={{ display: 'flex' }}>
            <div className={classes.divee}>
              <Typography className={classes.typ4}>
                Age
              </Typography>
              <Typography className={classes.typ4}>
                Gender
              </Typography>
              <Typography className={classes.typ4}>
                Location
              </Typography>
              <Typography className={classes.typ4}>
                Education
              </Typography>
              <Typography className={classes.typ4}>
                Occupation
              </Typography>
              <Typography className={classes.typ4}>
                Family
              </Typography>
            </div>

            <div style={{ width: '65%', marginRight: '3%' }}>
              <Typography className={classes.typ5}>
                27
              </Typography>
              <Typography className={classes.typ5}>
                Male
              </Typography>
              <Typography className={classes.typ5}>
                London, UK
              </Typography>
              <Typography className={classes.typ5}>
                Art
              </Typography>
              <Typography className={classes.typ5}>
                Designer at Fintech Company
              </Typography>
              <Typography className={classes.typ5}>
                Living toghether with my partner
              </Typography>
            </div>
          </div>
        </div>

        <div className={classes.divf}>
          <Typography style={{ fontWeight: 'bold' }} className={classes.typ2}>
            Frustations / Pain points
          </Typography>

          <Typography className={classes.typ3}>
            I'm looking for information on the different routes going up Mount kilimanjaro and the different option that i have, as I'm looking for a challenge. I would like to see
            the reviews and experiences of the former customers as well
          </Typography>

          <Typography className={classes.typ3}>
            I would like to book direclty with a local trekking agency and don't fo with a classic travel organization and be in a group
            with only English folks. I care about fair treatment of guides and porters as well.
          </Typography>
        </div>

        <div className={classes.divf}>
          <Typography style={{ fontWeight: 'bold' }} className={classes.typ2}>
            Goal & hopes
          </Typography>

          <Typography className={classes.typ3}>
            Book the Kilimanjaro challenge which fits my needs
          </Typography>

          <Typography className={classes.typ3}>
            Book at local trekking organization with more young and fun People.
          </Typography>
        </div>

      </div>

      <div className={classes.div0}>
        <div className={classes.div1}>
          <div className={classes.diva}>
            <a href="">
              <img src="https://media.istockphoto.com/photos/portrait-picture-id157914746?k=6&m=157914746&s=612x612&w=0&h=0kmLtXuFmwk78GKO8xFiqXYq1mQOV0tSIj51-Hkbiw8=" width="100%" height="100%" />
            </a>
            <div style={{ width: '50%' }}>
              <Button variant="contained" color="primary" className={classes.btn0} >
                <Typography color="secondary" className={classes.typ6}>Featured</Typography>
              </Button>
              <Typography className={classes.text1} >Motivation is the first step to success</Typography>
            </div>
          </div>
          <div className={classes.divb}>
            <a href="">
              <img src="https://i.ibb.co/xjzskFV/LJIZlz-Hg-Q7-WPSh5-KVTCB-Typewriter.jpg" width="100%" height="100%" />
            </a>
            <div style={{ width: '50%' }}>
              <Button variant="contained" color="primary" className={classes.btn0} >
                <Typography color="secondary" className={classes.typ6}>Featured</Typography>
              </Button>
              <Typography className={classes.text1} >Motivation is the first step to success</Typography>
            </div>
          </div>
        </div>
        <div className={classes.div2}>
          <div className={classes.divc}>
            <a href="">
              <img src="https://images.unsplash.com/photo-1512295767273-ac109ac3acfa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MjF8fHxlbnwwfHx8fA%3D%3D&w=1000&q=80" width="100%" height="100%" />
            </a>
            <div style={{ width: '50%' }}>
              <Button variant="contained" color="primary" className={classes.btn0} >
                <Typography color="secondary" className={classes.typ6}>Featured</Typography>
              </Button>
              <Typography className={classes.text1} >Motivation is the first step to success</Typography>
            </div>
          </div>
          <div className={classes.divd}>
            <a href="">
              <img src="https://images.unsplash.com/photo-1545665277-5937489579f2?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8ZHVhbCUyMG1vbml0b3IlMjB3YWxscGFwZXJ8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80" width="100%" height="100%" />
            </a>
            <div style={{ width: '50%' }}>
              <Button variant="contained" color="primary" className={classes.btn0} >
                <Typography color="secondary" className={classes.typ6}>Featured</Typography>
              </Button>
              <Typography className={classes.text1} >Motivation is the first step to success</Typography>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </ThemeProvider>
  );
};

export default Home;

