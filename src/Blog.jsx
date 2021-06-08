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
import CardActionArea from '@material-ui/core/CardActionArea';
import TextField from '@material-ui/core/TextField';
import { Box, Link } from '@material-ui/core';



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
    root1: {
        display: 'block',
        '@media (min-width:600px)': {
            display: 'flex',
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
    typ1: {
        fontSize: '12px',
    },
    typ2: {
        fontWeight: 'bold',
        fontSize: '25px',
        marginLeft: '4%',
        marginTop: '2%',
        '@media (min-width:600px)': {
            fontSize: '35px',
            marginLeft: '4%',
            marginTop: '2%',
        },
        [theme.breakpoints.up('md')]: {
            fontSize: '30px',
            marginLeft: '4%',
            marginTop: '2%',
        },
    },
    typ3: {
        fontStyle: 'italic',
        fontSize: '15px',
        marginTop: '2%',
        marginLeft: '4%',
    },
    typ4: {
        fontSize: '16px',
        marginTop: '2%',
        marginLeft: '4%',
        '@media (min-width:600px)': {
            fontSize: '19px',
            marginTop: '2%',
            marginLeft: '4%',
        },
        [theme.breakpoints.up('md')]: {
            fontSize: '19px',
            marginTop: '2%',
            marginLeft: '4%',
        },
    },
    typ5: {
        fontWeight: 'bold',
        fontSize: '12px',
        '@media (min-width:600px)': {
            fontWeight: 'bold',
            fontSize: '14px',
        },
        [theme.breakpoints.up('md')]: {
            fontWeight: 'bold',
            fontSize: '18px',
        },
    },
    typ6: {
        fontWeight: 'bold',
        fontSize: '25px',
        marginLeft: '4%',
        '@media (min-width:600px)': {
            fontSize: '35px',
        },
        [theme.breakpoints.up('md')]: {
            fontSize: '45px',
        },
    },
    typ7: {
        fontSize: '16px',
        marginLeft: '4%',
        marginTop: '2%',
        '@media (min-width:600px)': {
            fontSize: '18px',
            marginLeft: '8%',
            marginTop: '2%',
        },
        [theme.breakpoints.up('md')]: {
            fontSize: '18px',
            marginLeft: '8%',
            marginTop: '2%',
        },
    },
    typ8: {
        fontWeight: 'bold',
        fontSize: '16px',
        marginLeft: '4%',
        marginRight: '25%',
        marginTop: '4%',
        '@media (min-width:600px)': {
            fontWeight: 'bold',
            fontSize: '30px',
            marginLeft: '4%',
            marginRight: '25%',
            marginTop: '4%',
        },
        [theme.breakpoints.up('md')]: {
            fontWeight: 'bold',
            fontSize: '30px',
            marginLeft: '4%',
            marginRight: '25%',
            marginTop: '4%',
        },
    },
    typ9: {
        fontStyle: 'italic',
        fontSize: '12px',
        marginTop: '2%',
        marginLeft: '4%',
        '@media (min-width:600px)': {
            fontStyle: 'italic',
            fontSize: '15px',
            marginTop: '2%',
            marginLeft: '4%',
        },
        [theme.breakpoints.up('md')]: {
            fontStyle: 'italic',
            fontSize: '15px',
            marginTop: '2%',
            marginLeft: '4%',
        },
    },
    typ10: {
        fontSize: '12px',
        marginTop: '2%',
        marginLeft: '4%',
        marginRight: '5%',
        '@media (min-width:600px)': {
            fontSize: '19px',
            marginTop: '2%',
            marginLeft: '4%',
            marginRight: '5%',
        },
        [theme.breakpoints.up('md')]: {
            fontSize: '19px',
            marginTop: '2%',
            marginLeft: '4%',
            marginRight: '5%',
        },
    },
    typ11: {
        fontWeight: 'bold',
        fontSize: '18px',
        marginLeft: '10%',
        '@media (min-width:600px)': {
            fontSize: '35px',
        },
        [theme.breakpoints.up('md')]: {
            fontSize: '25px',
        },
    },
    typ12: {
        marginLeft: '10%',
        marginTop: '2%',
    },
    typ13: {
        fontSize: '14px',
        marginLeft: '10%',
        marginTop: '2%',
        '@media (min-width:600px)': {
            fontSize: '18px',
            marginLeft: '10%',
            marginTop: '2%',
        },
        [theme.breakpoints.up('md')]: {
            fontSize: '18px',
            marginLeft: '10%',
            marginTop: '2%',
        },
    },
    typ14: {
        fontWeight: 'bold',
        fontSize: '25px',
        marginLeft: '8%',
        marginTop: '20%',
        '@media (min-width:600px)': {
            fontWeight: 'bold',
            fontSize: '40px',
            marginLeft: '8%',
            marginTop: '20%',
        },
        [theme.breakpoints.up('md')]: {
            fontWeight: 'bold',
            fontSize: '40px',
            marginLeft: '8%',
            marginTop: '20%',
        },
    },
    typ15: {
        fontSize: '20px',
        marginLeft: '8%',
        marginTop: '2%',
        marginRight: '10%',
    },
    typ16: {
        fontSize: '20px',
        marginLeft: '8%',
        marginTop: '8%',
        marginRight: '10%',
    },
    typ17: {
        marginLeft: '2%',
        marginTop: '30%',
        fontSize: '15px',
        '@media (min-width:600px)': {
            marginLeft: '0%',
            marginTop: '30%',
            fontSize: '15px',
        },
        [theme.breakpoints.up('md')]: {
            marginLeft: '0%',
            marginTop: '60%',
            fontSize: '15px',

        },
    },
    typ18: {
        fontWeight: 'bold',
        fontSize: '25px',
        marginLeft: '4%',
        marginTop: '8%',
        '@media (min-width:600px)': {
            fontSize: '35px',
        },
        [theme.breakpoints.up('md')]: {
            fontSize: '45px',
        },
    },
    typ19: {
        display: 'flex',
        justifyContent: 'center',
        marginTop: '4%',
    },
    div1: {
        width: '100%',
        '@media (min-width:600px)': {
            width: '100%',
        },
        [theme.breakpoints.up('md')]: {
            width: '45%',

        },
    },
    div2: {
        width: '100%',
        '@media (min-width:600px)': {
            width: '100%',
        },
        [theme.breakpoints.up('md')]: {
            width: '50%',

        },
    },
    div3: {
        marginTop: '4%',
        width: '100%',
        marginBottom: '2%',
        '@media (min-width:600px)': {
            width: '100%',
        },
        [theme.breakpoints.up('md')]: {
            width: '50%',

        },
    },
    div4: {
        borderRadius: '2%',
        marginTop: '-20%',
        marginBottom: '10%',
        width: '86%',
        height: '200%',
        marginLeft: '6.5%',
        position: 'relative',
        backgroundColor: 'White',
        '@media (min-width:600px)': {
            borderRadius: '2%',
            marginTop: '-20%',
            marginBottom: '10%',
            width: '86%',
            height: '200%',
            marginLeft: '7%',
            position: 'relative',
            backgroundColor: 'White',
        },
        [theme.breakpoints.up('md')]: {
            borderRadius: '2%',
            marginTop: '-20%',
            marginBottom: '10%',
            width: '86%',
            height: '45%',
            marginLeft: '10%',
            position: 'relative',
            backgroundColor: 'White',
        },
    },
    div5: {
        borderRadius: '2%',
        marginTop: '-20%',
        marginBottom: '10%',
        width: '86%',
        height: '200%',
        marginLeft: '6.5%',
        position: 'relative',
        backgroundColor: 'White',
        '@media (min-width:600px)': {
            borderRadius: '2%',
            marginTop: '-20%',
            width: '86%',
            height: '45%',
            marginLeft: '7%',
            position: 'relative',
            backgroundColor: 'White',
        },
        [theme.breakpoints.up('md')]: {
            borderRadius: '2%',
            marginTop: '-20%',
            marginBottom: '10%',
            width: '86%',
            height: '45%',
            marginLeft: '4%',
            position: 'relative',
            backgroundColor: 'White',

        },
    },
    div6: {
        marginTop: '4%',
        width: '100%',
        '@media (min-width:600px)': {
            width: '100%',
        },
        [theme.breakpoints.up('md')]: {
            width: '65%',

        },
    },
    div7: {
        marginTop: '4%',
        width: '100%',
        backgroundColor: '#f0f5f5',
        '@media (min-width:600px)': {
            width: '100%',
        },
        [theme.breakpoints.up('md')]: {
            width: '32%',

        },
    },
    div8: {
        marginTop: '4%',
        width: '100%',
        '@media (min-width:600px)': {
            width: '100%',
        },
        [theme.breakpoints.up('md')]: {
            width: '20%',

        },
    },
    div9: {
        marginTop: '4%',
        width: '100%',
        height: '50%',
        '@media (min-width:600px)': {
            width: '100%',
        },
        [theme.breakpoints.up('md')]: {
            width: '77%',

        },
    },
    img1: {
        marginLeft: '3%',
        width: '95%',
        height: '150px',
        '@media (min-width:600px)': {
            marginLeft: '3%',
            width: '95%',
            height: '400px',
        },
        [theme.breakpoints.up('md')]: {
            marginLeft: '0%',
            width: '100%',
            height: '450px',
        },
    },
    img2: {
        borderRadius: '3%',
        marginLeft: '2%',
        width: '95%',
        height: '150px',
        '@media (min-width:600px)': {
            marginLeft: '3%',
            width: '95%',
            height: '500px',
        },
        [theme.breakpoints.up('md')]: {
            marginLeft: '8%',
            width: '90%',
            height: '500px',
        },
    },
    img3: {
        borderRadius: '3%',
        width: '95%',
        height: '150px',
        marginLeft: '3%',
        '@media (min-width:600px)': {
            marginLeft: '3%',
            width: '95%',
            height: '400px',
        },
        [theme.breakpoints.up('md')]: {
            marginLeft: '2%',
            width: '90%',
            height: '500px',
        },
    },
    img4: {
        borderRadius: '3%',
        marginLeft: '3%',
        width: '100%',
        height: '200px',
        marginTop: '35%',
        '@media (min-width:600px)': {
            marginLeft: '3%',
            width: '100%',
            height: '100%',
            marginTop: '0%',
        },
        [theme.breakpoints.up('md')]: {
            marginLeft: '24%',
            width: '100%',
            height: '200px',
            marginTop: '0%',
        },
    },
    img5: {
        marginTop: '5%',
        width: '45%',
        height: '180px',
        '@media (min-width:600px)': {
            marginTop: '5%',
            width: '45%',
            height: '200px',
        },
        [theme.breakpoints.up('md')]: {
            marginLeft: '0%',
            width: '40%',
            height: '160px',
        },
    },
    img6: {
        marginTop: '5%',
        width: '45%',
        height: '180px',
        '@media (min-width:600px)': {
            marginTop: '5%',
            width: '45%',
            height: '200px',
        },
        [theme.breakpoints.up('md')]: {
            marginLeft: '0%',
            width: '30%',
            height: '350px',
        },
    },
    btn0: {
        padding: '6px 15px',
        marginTop: '2%',
        marginLeft: '4%',
    },
    btn1: {
        padding: '6px 15px',
        marginTop: '2%',
        marginLeft: '2%',
    },
    btn2: {
        padding: '11px 50px',
        marginTop: '2%',
        marginLeft: '4%',
        border: '1px solid lightgreen',
    },
    btn3: {
        padding: '11px 50px',
        border: '1px solid lightgreen',
        marginLeft: '4%',
        marginTop: '3%',
        '@media (min-width:600px)': {
            padding: '11px 50px',
            marginLeft: '45%',
            border: '1px solid lightgreen',
            marginTop: '0%',
        },
        [theme.breakpoints.up('md')]: {
            padding: '11px 50px',
            marginLeft: '65%',
            border: '1px solid lightgreen',
            marginTop: '0%',
        },
    },
    btn4: {
        padding: '6px 15px',
        marginTop: '4%',
        marginLeft: '4.5%',
    },
    btn5: {
        marginLeft: '10%',
        marginTop: '2%',
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
    paper1: {
        padding: theme.spacing(1),
        backgroundColor: "#white",
        '@media (min-width:600px)': {
            padding: theme.spacing(2),
            backgroundColor: "#white",
        },
        [theme.breakpoints.up('md')]: {
            padding: theme.spacing(0),
            backgroundColor: "#white",
        },
    },
    paper2: {
        padding: theme.spacing(1),
        backgroundColor: "#f0f5f5",
        '@media (min-width:600px)': {
            padding: theme.spacing(2),
            backgroundColor: "#f0f5f5",
        },
        [theme.breakpoints.up('md')]: {
            padding: theme.spacing(0),
            backgroundColor: "#f0f5f5",
        },
    },
    paper3: {
        padding: theme.spacing(1),
        backgroundColor: "#f0f5f5",
        '@media (min-width:600px)': {
            padding: theme.spacing(2),
            backgroundColor: "#f0f5f5",
        },
        [theme.breakpoints.up('md')]: {
            padding: theme.spacing(1),
            backgroundColor: "#f0f5f5",
        },
    },
    textField1: {
        marginTop: '2%',
        marginLeft: '8%',
        backgroundColor: 'white',
        width: '80%',
    },
    card: {
        marginLeft: '2.5%',
        width: '95%',
        marginTop:'5%',
        '@media (min-width:600px)': {
            width: '95%',
            marginTop:'5%',
        },
        [theme.breakpoints.up('md')]: {
            marginTop:'0%',
            width: '28%',
            marginLeft: '4%',
        },
    }
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
                        Blog
                    </Typography>
                </div>
                <div className={classes.root} style={{ marginBottom: '8%' }}>

                    <div className={classes.div1}>
                        <img src="https://i.ibb.co/dcVL3zs/image13.png" className={classes.img1} />
                    </div>

                    <div className={classes.div2}>
                        <Button variant="contained" color="primary" className={classes.btn0} >
                            <Typography color="secondary" className={classes.typ1}>vehicle</Typography>
                        </Button>

                        <Button variant="contained" color="primary" className={classes.btn1} >
                            <Typography color="secondary" className={classes.typ1}>vehicle</Typography>
                        </Button>

                        <Typography className={classes.typ2}>
                            A CALIFORNIA COUPLE DESIGN A MASTER BED FROM SCRATCH
                        </Typography>

                        <Typography color="textSecondary" className={classes.typ3}>
                            Rickie Baroch - June 6, 2019
                        </Typography>

                        <Typography color="textSecondary" className={classes.typ4}>
                            Cafe Coworking Has Become the Norm. Lorem ipsum dolor sit amet, consecteur
                            adipiscing elit. Duis nec condimentum quam. Cafe Coworking Has Become the Norm.
                            Lorem ipsum dolor sit amet, consectetur adispiscing elit. Duis nec condimentum
                            quam. Cafe Coworking Has Become the Norm. Lorem ipsum dolor sit amet,
                            consectetur adipiscing elit. Duis nec conimentum quam. Cafe Coworking Has
                            Become the Norm. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        </Typography>

                        <Button variant="contained" color="secondary" className={classes.btn2} >
                            <Typography color="primary" className={classes.typ5}>Read More</Typography>
                        </Button>
                    </div>
                </div>

                <div style={{ backgroundColor: "#f0f5f5" }}>
                    <Paper elevation={0} className={classes.paper} />
                    <Typography className={classes.typ6}>
                        Latest stories
                    </Typography>
                    <div className={classes.root1}>
                        <div style={{ width: '100%' }}>
                            <Typography className={classes.typ7}>
                                Keep track of what's happening with your data, change permissions,
                            </Typography>
                        </div>
                        <div style={{ width: '100%' }}>
                            <Button variant="contained" color="secondary" className={classes.btn3} >
                                <Typography color="primary" className={classes.typ5}>View More</Typography>
                            </Button>
                        </div>
                    </div>

                    <div className={classes.root}>
                        <div className={classes.div3}>
                            <div >
                                <img src="https://s3.amazonaws.com/media.eremedia.com/wp-content/uploads/sites/4/2019/09/25095229/meeting-bored-boring-long-700x467.jpg" className={classes.img2} />
                            </div>
                            <Box boxShadow={3} className={classes.div4}>
                                <div>
                                    <Button variant="contained" color="primary" className={classes.btn4} >
                                        <Typography color="secondary" className={classes.typ1}>vehicle</Typography>
                                    </Button>

                                    <Typography className={classes.typ8}>
                                        One of Saturn's largest rings may be newer than anyone
                                        </Typography>

                                    <Typography color="textSecondary" className={classes.typ9}>
                                        Rickie Baroch - June 6, 2019
                                        </Typography>

                                    <Typography className={classes.typ10}>
                                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                                        accusantium doloremque laudantium, totam rem sed ut perspicuatus
                                        </Typography>
                                    <Paper elevation={0} className={classes.paper1} />
                                </div>
                            </Box>
                        </div>
                        <div className={classes.div3}>
                            <div>
                                <img src="https://www.skipprichard.com/wp-content/uploads/2017/10/bigstock-Businesswoman-presenting-to-co-90004202.jpg" className={classes.img3} />
                            </div>
                            <Box boxShadow={3} className={classes.div5}>
                                <div>
                                    <Button variant="contained" color="primary" className={classes.btn4} >
                                        <Typography color="secondary" className={classes.typ1}>vehicle</Typography>
                                    </Button>

                                    <Typography className={classes.typ8}>
                                        One of Saturn's largest rings may be newer than anyone
                                        </Typography>

                                    <Typography color="textSecondary" className={classes.typ9}>
                                        Rickie Baroch - June 6, 2019
                                        </Typography>

                                    <Typography className={classes.typ10}>
                                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                                        accusantium doloremque laudantium, totam rem sed ut perspicuatus
                                    </Typography>
                                    <Paper elevation={0} className={classes.paper1} />
                                </div>
                            </Box>
                            <Paper elevation={0} className={classes.paper2} />
                        </div>
                    </div>
                </div>

                <div className={classes.root}>
                    <div className={classes.div6}>
                        <Typography className={classes.typ6}>
                            Latest stories
                        </Typography>
                        <div>
                            <div style={{ display: 'flex' }}>

                                <div className={classes.div8}>
                                    <img src="https://www.skipprichard.com/wp-content/uploads/2017/10/bigstock-Businesswoman-presenting-to-co-90004202.jpg" className={classes.img4} />
                                </div>

                                <div className={classes.div9}>
                                    <Typography className={classes.typ11}>
                                        Fast & Tasty Cakes
                                    </Typography>
                                    <Typography className={classes.typ12}>
                                        June 8, 2019 by
                                    <Link href="#"> Allison Fox </Link>
                                    </Typography>
                                    <Typography color="textSecondary" className={classes.typ13}>
                                        Some people get into food blogging jus to share, while others are hopping to turn their passion
                                        into a profession. But while you know your way around the kitchen ...
                                    </Typography>
                                    <Button color="primary" className={classes.btn5}>Read more ➞</Button>
                                </div>
                            </div>
                            <hr style={{ width: '90%', backgroundColor: 'lightgray', marginTop: '2%' }} />
                        </div>

                        <div>
                            <div style={{ display: 'flex' }}>

                                <div className={classes.div8}>
                                    <img src="https://www.skipprichard.com/wp-content/uploads/2017/10/bigstock-Businesswoman-presenting-to-co-90004202.jpg" className={classes.img4} />
                                </div>

                                <div className={classes.div9}>
                                    <Typography className={classes.typ11}>
                                        Fast & Tasty Cakes
                                    </Typography>
                                    <Typography className={classes.typ12}>
                                        June 8, 2019 by
                                    <Link href="#"> Allison Fox </Link>
                                    </Typography>
                                    <Typography color="textSecondary" className={classes.typ13}>
                                        Some people get into food blogging jus to share, while others are hopping to turn their passion
                                        into a profession. But while you know your way around the kitchen ...
                                    </Typography>
                                    <Button color="primary" className={classes.btn5}>Read more ➞</Button>
                                </div>
                            </div>
                            <hr style={{ width: '90%', backgroundColor: 'lightgray', marginTop: '2%' }} />
                        </div>

                        <div>
                            <div style={{ display: 'flex' }}>

                                <div className={classes.div8}>
                                    <img src="https://www.skipprichard.com/wp-content/uploads/2017/10/bigstock-Businesswoman-presenting-to-co-90004202.jpg" className={classes.img4} />
                                </div>

                                <div className={classes.div9}>
                                    <Typography className={classes.typ11}>
                                        Fast & Tasty Cakes
                                    </Typography>
                                    <Typography className={classes.typ12}>
                                        June 8, 2019 by
                                    <Link href="#"> Allison Fox </Link>
                                    </Typography>
                                    <Typography color="textSecondary" className={classes.typ13}>
                                        Some people get into food blogging jus to share, while others are hopping to turn their passion
                                        into a profession. But while you know your way around the kitchen ...
                                    </Typography>
                                    <Button color="primary" className={classes.btn5}>Read more ➞</Button>
                                </div>
                            </div>
                            <hr style={{ width: '90%', backgroundColor: 'lightgray', marginTop: '2%' }} />
                        </div>
                    </div>
                    <div className={classes.div7}>
                        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '8%' }}>
                            <img src="https://www.pngkey.com/png/full/436-4369991_technology-clipart-png-clip-art-picture-of-technology.png" className={classes.img5} />
                        </div>
                        <Typography className={classes.typ14}>
                            Email newsletter
                        </Typography>

                        <Typography className={classes.typ15}>
                            Subscribe my Newsletter for new blog posts,
                            tips & photos
                        </Typography>

                        <Typography className={classes.typ16}>
                            Full  Name
                        </Typography>
                        <TextField id="outlined-basic" className={classes.textField1} variant="outlined" label="Name" />

                        <Typography className={classes.typ16}>
                            Email
                        </Typography>
                        <TextField id="outlined-basic" className={classes.textField1} variant="outlined" label="Email" />

                        <Typography className={classes.typ17} style={{ display: 'flex', justifyContent: 'center' }}>
                            Subscribe my Newsletter for new blog posts,
                            tips & photos
                        </Typography>
                        <Paper elevation={0} className={classes.paper3} />
                    </div>
                </div>

                <div>
                    <Typography className={classes.typ18}>
                        Similar stories
                    </Typography>
                    <div className={classes.root} style={{ marginBottom: '5%', marginTop: '4%' }}>
                        <Card className={classes.card}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    height="330"
                                    image="https://www.spaceist.co.uk/wp-content/uploads/Forty5-white-designer-desk-white-storage.jpg"
                                    title="Contemplative Reptile"
                                />
                                <CardContent>
                                    <Typography variant="h7" color="textSecondary" style={{ display: 'flex', justifyContent: 'center' }}>
                                        CLOTHES
                                </Typography>
                                    <Typography variant="h5" style={{ display: 'flex', justifyContent: 'center', fontWeight: 'bold', marginTop: '4%' }}>
                                        One of Saturn's largest rings may be newer than anyone
                                </Typography>
                                    <Typography className={classes.typ19}>
                                        June 8, 2019 by:
                                    <Link href="#"> Allison Fox </Link>
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>

                        <Card className={classes.card}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    height="330"
                                    image="https://www.spaceist.co.uk/wp-content/uploads/Forty5-white-designer-desk-white-storage.jpg"
                                    title="Contemplative Reptile"
                                />
                                <CardContent>
                                    <Typography variant="h7" color="textSecondary" style={{ display: 'flex', justifyContent: 'center' }}>
                                        CLOTHES
                                </Typography>
                                    <Typography variant="h5" style={{ display: 'flex', justifyContent: 'center', fontWeight: 'bold', marginTop: '4%' }}>
                                        One of Saturn's largest rings may be newer than anyone
                                </Typography>
                                    <Typography className={classes.typ19}>
                                        June 8, 2019 by:
                                    <Link href="#"> Allison Fox </Link>
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>

                        <Card className={classes.card}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    height="330"
                                    image="https://www.spaceist.co.uk/wp-content/uploads/Forty5-white-designer-desk-white-storage.jpg"
                                    title="Contemplative Reptile"
                                />
                                <CardContent>
                                    <Typography variant="h7" color="textSecondary" style={{ display: 'flex', justifyContent: 'center' }}>
                                        CLOTHES
                                </Typography>
                                    <Typography variant="h5" style={{ display: 'flex', justifyContent: 'center', fontWeight: 'bold', marginTop: '4%' }}>
                                        One of Saturn's largest rings may be newer than anyone
                                </Typography>
                                    <Typography className={classes.typ19}>
                                        June 8, 2019 by:
                                    <Link href="#"> Allison Fox </Link>
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </div>

                </div>

            </div>
            <Footer />
        </ThemeProvider>
    );
};

export default Blog;

