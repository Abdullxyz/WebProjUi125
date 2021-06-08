import React from 'react';
import Carousel from 'react-elastic-carousel'
import { Paper, Button, Card, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import { BorderAllOutlined } from '@material-ui/icons';
import Avatar from '@material-ui/core/Avatar';


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        display: 'flex',
    },
    large: {
        width: theme.spacing(15),
        height: theme.spacing(15),
    },
    typ1: {
        fontWeight: "bold",
        marginLeft: theme.spacing(3),
        marginTop: theme.spacing(2),
    },
    typ2: {
        marginLeft: theme.spacing(3),
    },
}));

function HomeCarousel2(props) {
    const classes = useStyles();
    

    const breakPoints = [
        { width: 333, itemsToShow: 1 },
        { width: 666, itemsToShow: 2 },
        { width: 1000, itemsToShow: 3 },

    ]
    return (
        <Carousel
            breakPoints={breakPoints}
            enableAutoPlay autoPlaySpeed={4000}
            showArrows={false}
            >
            <div className={classes.root}>
                <Avatar className={classes.large}/>
                <div>
                    <Typography className={classes.typ1}>Mollie Jennings</Typography>
                    <Typography className={classes.typ2}>program area energize optism redical shared <br /> value policy maker milestones.</Typography>
                </div>
            </div>

            <div className={classes.root}>
                <Avatar className={classes.large} />
                <div>
                    <Typography className={classes.typ1}>Mollie Jennings</Typography>
                    <Typography className={classes.typ2}>program area energize optism redical shared <br /> value policy maker milestones.</Typography>
                </div>
            </div>

            <div className={classes.root}>
                <Avatar className={classes.large} />
                <div>
                    <Typography className={classes.typ1}>Mollie Jennings</Typography>
                    <Typography className={classes.typ2}>program area energize optism redical shared <br /> value policy maker milestones.</Typography>
                </div>
            </div>

            <div className={classes.root}>
                <Avatar className={classes.large} />
                <div>
                    <Typography className={classes.typ1}>Mollie Jennings</Typography>
                    <Typography className={classes.typ2}>program area energize optism redical shared <br /> value policy maker milestones.</Typography>
                </div>
            </div>

            <div className={classes.root}>
                <Avatar className={classes.large} />
                <div>
                    <Typography className={classes.typ1}>Mollie Jennings</Typography>
                    <Typography className={classes.typ2}>program area energize optism redical shared <br /> value policy maker milestones.</Typography>
                </div>
            </div>

            <div className={classes.root}>
                <Avatar className={classes.large} />
                <div>
                    <Typography className={classes.typ1}>Mollie Jennings</Typography>
                    <Typography className={classes.typ2}>program area energize optism redical shared <br /> value policy maker milestones.</Typography>
                </div>
            </div>

            <div className={classes.root}>
                <Avatar className={classes.large} />
                <div>
                    <Typography className={classes.typ1}>Mollie Jennings</Typography>
                    <Typography className={classes.typ2}>program area energize optism redical shared <br /> value policy maker milestones.</Typography>
                </div>
            </div>

            <div className={classes.root}>
                <Avatar className={classes.large} />
                <div>
                    <Typography className={classes.typ1}>Mollie Jennings</Typography>
                    <Typography className={classes.typ2}>program area energize optism redical shared <br /> value policy maker milestones.</Typography>
                </div>
            </div>

            <div className={classes.root}>
                <Avatar className={classes.large} />
                <div>
                    <Typography className={classes.typ1}>Mollie Jennings</Typography>
                    <Typography className={classes.typ2}>program area energize optism redical shared <br /> value policy maker milestones.</Typography>
                </div>
            </div>
            
        </Carousel>
    )
}




export default HomeCarousel2;