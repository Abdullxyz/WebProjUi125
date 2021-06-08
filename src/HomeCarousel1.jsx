import React from 'react';
import Carousel from 'react-material-ui-carousel'
import { makeStyles } from '@material-ui/core/styles';
import { createMuiTheme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    img1: {
        width: '100%',
        height: 200,
        '@media (min-width:600px)': {
            width: '100%',
            height: 450,
        },
        [theme.breakpoints.up('md')]: {
            width: '100%',
            height: 700,
        },
    },

}));




function HomeCarousel1(props) {
    var items = [
        {
            imageUrl: "https://i.ibb.co/T0LjLvp/image5.jpg",
        },
        {
            imageUrl: "https://i.ibb.co/T0LjLvp/image5.jpg",
        }
    ]

    const theme = createMuiTheme({

    })

    return (
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

            navButtonsWrapperProps={{
                style: {
                    top: '16.5%',
                }
            }}

            NextIcon={
                < img src="https://cdn2.iconfinder.com/data/icons/linicons-arrows/1560/next_arrow_right-256.png" width="28px" hight="28px" />
            }

            PrevIcon={
                < img src="https://cdn2.iconfinder.com/data/icons/linicons-arrows/1560/previous_arrow_left-256.png" width="28px" hight="28px" />
            }
        >
            {
                items.map((item, i) => <Item key={i} item={item} />)
            }
        </Carousel >
    )
}

function Item(props) {
    const classes = useStyles();
    return (
        <div >
            <img
                src={props.item.imageUrl}
                className={classes.img1}
            />
        </div>
    )
}

export default HomeCarousel1;