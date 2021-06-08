import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from "@material-ui/core";
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import { Route } from 'react-router-dom';
import Link from '@material-ui/core/Link';
import IconButton from '@material-ui/core/IconButton';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        '@media (min-width:600px)': {
            display: 'flex',
            marginBottom: '5%',
        },
        [theme.breakpoints.up('md')]: {
            display: 'flex',
            marginBottom: '0%',
        },
    },

    root1: {
        marginLeft: '5%',
        display: 'flex',
        '@media (min-width:600px)': {
            display: 'flex',
        },
        [theme.breakpoints.up('md')]: {
            flexGrow: 1,
            display: 'flex',
        },
    },

    root2: {
        display: 'flex',
    },

    col1: {
        flexGrow: 1,
        display: 'flex',
    },
    typ: {
        display: 'block',
        width: '100%',
        '@media (min-width:600px)': {
            width: '100%',
        },
        [theme.breakpoints.up('md')]: {
            width: '100%',
        },
    },
    fontTypo: {
        fontWeight: 400,
        marginTop: '2%',
        fontSize: '1.8vw',
        '@media (min-width:600px)': {
            fontSize: '1.2vw',
        },
        [theme.breakpoints.up('md')]: {
            fontSize: '1.2vw',
        },
    },
    col2: {
        width: '35%',
        marginTop: '1.5%',
        '@media (min-width:600px)': {
            width: '35%',
            marginLeft: '2%',
            marginTop: '1.5%',
        },
        [theme.breakpoints.up('md')]: {
            width: '25%',
            marginLeft: '2%',
            marginTop: '1.5%',
        },
    },

    col3: {
        width: '20%',
        marginTop: '1.5%',
        '@media (min-width:600px)': {
            width: '20%',
            marginLeft: '6%',
            marginTop: '1.5%',
        },
        [theme.breakpoints.up('md')]: {
            width: '25%',
            marginLeft: '6%',
            marginTop: '1.5%',
        },
    },

    col4: {
        width: '20%',
        marginLeft: '8%',
        marginTop: '1.5%',
        '@media (min-width:600px)': {
            width: '20%',
            marginLeft: '18%',
            marginTop: '1.5%',
        },
        [theme.breakpoints.up('md')]: {
            width: '25%',
            marginLeft: '6%',
            marginTop: '1.5%',
        },
    },

    bottom: {
        marginLeft: theme.spacing(4),
        display: 'flex',
    },
    div1: {
        marginLeft: '3%',
        marginBottom: '3%',
        width: '25%',
    },
    div2: {
        marginLeft: '40%',
        '@media (min-width:600px)': {
            marginLeft: '60%',
        },
        [theme.breakpoints.up('md')]: {
            marginLeft: '65%',
        },
    },
    div3: {
        marginLeft: '3%',
        marginTop: '3%',
        '@media (min-width:600px)': {
            marginLeft: '3%',
            marginTop: '1%'
        },
        [theme.breakpoints.up('md')]: {
            marginLeft: '3%',
            marginTop: '1%'
        },
    },
    typ1: {
        marginTop: '12%',
        fontWeight: 'bold',
        fontSize: '1.2vw',
        marginLeft: '7%',
        '@media (min-width:600px)': {
            marginTop: '12%',
            fontWeight: 'bold',
            fontSize: '1.2vw',
            marginLeft: '5%',
        },
        [theme.breakpoints.up('md')]: {
            marginTop: '12%',
            fontWeight: 'bold',
            fontSize: '1.2vw',
            marginLeft: '0%',
        },

    },
    typ2: {
        fontSize: '1.2vw',
    },
    icons: {
        fontSize: "4vw",
        marginLeft: '0%',
        '@media (min-width:600px)': {
            fontSize: "2vw",
            marginLeft: '0%',
        },
        [theme.breakpoints.up('md')]: {
            fontSize: "2vw",
            marginLeft: '0%',
        },
    },
    img: {
        width: '100%',
        marginLeft: '-10%',
    },
}));


const Footer = () => {
    const classes = useStyles();
    const preventDefault = (event) => event.preventDefault();
    return (
        <div>

            <div container className={classes.root}>
                <div className={classes.div1}>
                    <img src="data:image/png;base64,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" className={classes.img} />
                    <div className={classes.typ}>
                        <Typography className={classes.fontTypo}>Learn about who's looing at your profile and,
                        what experience they are most intrested in. Learn, about who's looking at your profile and what,
                            experience they're most intrested in.</Typography>
                    </div>
                </div>

                <div className={classes.root1}>
                    <div className="row" className={classes.col2}>
                        <Typography align="left">
                            <ButtonGroup
                                orientation="vertical"
                                variant="tranparent">

                                <Typography className={classes.typ1}>
                                    Links
                                </Typography>

                                <Route render={({ history }) => (
                                    <Button onClick={() => { history.push('./home') }} style={{ display: 'flex', justifyContent: 'flex-start', marginLeft: '-5%' }}>
                                        <Typography className={classes.typ2}>
                                            Home
                                        </Typography>
                                    </Button>
                                )} />

                                <Route render={({ history }) => (
                                    <Button onClick={() => { history.push('./profile') }} style={{ display: 'flex', justifyContent: 'flex-start', marginLeft: '-5%' }}>
                                        <Typography className={classes.typ2}>
                                            Profile settings
                                            </Typography>
                                    </Button>
                                )} />

                                <Route render={({ history }) => (
                                    <Button onClick={() => { history.push('./workspace') }} style={{ display: 'flex', justifyContent: 'flex-start', marginLeft: '-5%' }}>
                                        <Typography className={classes.typ2}>
                                            Workspace
                                            </Typography>
                                    </Button>
                                )} />

                                <Route render={({ history }) => (
                                    <Button onClick={() => { history.push('./workspaceDetails') }} style={{ display: 'flex', justifyContent: 'flex-start', marginLeft: '-5%' }}>
                                        <Typography className={classes.typ2}>
                                            Workspace Details
                                            </Typography>
                                    </Button>
                                )} />

                                <Route render={({ history }) => (
                                    <Button onClick={() => { history.push('./profilePage') }} style={{ display: 'flex', justifyContent: 'flex-start', marginLeft: '-5%' }}>
                                        <Typography className={classes.typ2}>
                                            Profile Page
                                            </Typography>
                                    </Button>
                                )} />

                                <Route render={({ history }) => (
                                    <Button onClick={() => { history.push('./aboutUs') }} style={{ display: 'flex', justifyContent: 'flex-start', marginLeft: '-5%' }}>
                                        <Typography className={classes.typ2}>
                                            AboutUs
                                            </Typography>
                                    </Button>
                                )} />
                            </ButtonGroup>
                        </Typography>
                    </div>

                    <div className="row" className={classes.col3}>
                        <div className="col">
                            <Typography align="left">
                                <ButtonGroup
                                    orientation="vertical"
                                    variant="tranparent">

                                    <Typography className={classes.typ1}>
                                        Links
                                    </Typography>

                                    <Route render={({ history }) => (
                                        <Button onClick={() => { history.push('./trainings') }} style={{ display: 'flex', justifyContent: 'flex-start', marginLeft: '-5%' }}>
                                            <Typography className={classes.typ2}>
                                                Trainings
                                        </Typography>
                                        </Button>
                                    )} />

                                    <Route render={({ history }) => (
                                        <Button onClick={() => { history.push('./trainingsDetails') }} style={{ display: 'flex', justifyContent: 'flex-start', marginLeft: '-5%' }}>
                                            <Typography className={classes.typ2}>
                                                TrainingDetails
                                        </Typography>
                                        </Button>
                                    )} />

                                    <Route render={({ history }) => (
                                        <Button onClick={() => { history.push('./location') }} style={{ display: 'flex', justifyContent: 'flex-start', marginLeft: '-5%' }}>
                                            <Typography className={classes.typ2}>
                                                Location
                                        </Typography>
                                        </Button>
                                    )} />

                                    <Route render={({ history }) => (
                                        <Button onClick={() => { history.push('./reperatory') }} style={{ display: 'flex', justifyContent: 'flex-start', marginLeft: '-5%' }}>
                                            <Typography className={classes.typ2}>
                                                Reperatory
                                        </Typography>
                                        </Button>
                                    )} />

                                    <Route render={({ history }) => (
                                        <Button onClick={() => { history.push('./payment') }} style={{ display: 'flex', justifyContent: 'flex-start', marginLeft: '-5%' }}>
                                            <Typography className={classes.typ2}>
                                                Payment
                                            </Typography>
                                        </Button>
                                    )} />

                                    <Route render={({ history }) => (
                                        <Button onClick={() => { history.push('./joinUs') }} style={{ display: 'flex', justifyContent: 'flex-start', marginLeft: '-5%' }}>
                                            <Typography className={classes.typ2}>
                                                JoinUs
                                        </Typography>
                                        </Button>
                                    )} />

                                </ButtonGroup>
                            </Typography>

                        </div>
                    </div>

                    <div className="row" className={classes.col4}>
                        <div className="col">
                            <Typography align="left">
                                <ButtonGroup
                                    orientation="vertical"
                                    variant="tranparent">

                                    <Typography className={classes.typ1}>
                                        Links
                                    </Typography>

                                    <Route render={({ history }) => (
                                        <Button onClick={() => { history.push('./nosEntreprenuers') }} style={{ display: 'flex', justifyContent: 'flex-start', marginLeft: '-5%' }}>
                                            <Typography className={classes.typ2}>
                                                NosEntreprenuers
                                        </Typography>
                                        </Button>
                                    )} />

                                    <Route render={({ history }) => (
                                        <Button onClick={() => { history.push('./lesInstitutiionnels') }} style={{ display: 'flex', justifyContent: 'flex-start', marginLeft: '-5%' }}>
                                            <Typography className={classes.typ2}>
                                                LesInstitutiionnels
                                        </Typography>
                                        </Button>
                                    )} />

                                    <Route render={({ history }) => (
                                        <Button onClick={() => { history.push('./feed') }} style={{ display: 'flex', justifyContent: 'flex-start', marginLeft: '-5%' }}>
                                            <Typography className={classes.typ2}>
                                                Feed
                                        </Typography>
                                        </Button>
                                    )} />

                                    <Route render={({ history }) => (
                                        <Button onClick={() => { history.push('./blog') }} style={{ display: 'flex', justifyContent: 'flex-start', marginLeft: '-5%' }}>
                                            <Typography className={classes.typ2}>
                                                BLOG
                                        </Typography>
                                        </Button>
                                    )} />

                                    <Route render={({ history }) => (
                                        <Button onClick={() => { history.push('./contact') }} style={{ display: 'flex', justifyContent: 'flex-start', marginLeft: '-5%' }}>
                                            <Typography className={classes.typ2}>
                                                Contact
                                        </Typography>
                                        </Button>
                                    )} />

                                </ButtonGroup>
                            </Typography>

                        </div>
                    </div>
                </div>
            </div>

            <hr />

            <div className={classes.root2} >
                <div className={classes.div3}>
                    <Link href="#" onClick={preventDefault} color="inherit">
                        <Typography className={classes.typ2}>
                            Terms
                            </Typography>
                    </Link>
                </div>

                <div className={classes.div3}>
                    <Link href="#" onClick={preventDefault} color="inherit">
                        <Typography className={classes.typ2}>
                            Privacy
                            </Typography>
                    </Link>
                </div>

                <div className={classes.div3}>
                    <Link href="#" onClick={preventDefault} color="inherit">
                        <Typography className={classes.typ2}>
                            Linsence
                            </Typography>
                    </Link>
                </div>

                <div className={classes.div2}>
                    <IconButton><TwitterIcon className={classes.icons} /></IconButton>
                    <IconButton><FacebookIcon className={classes.icons} /></IconButton>
                    <IconButton><LinkedInIcon className={classes.icons} /></IconButton>
                </div>

            </div>




        </div >
    );
}

export default Footer;