import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { IconButton, OutlinedInput, Paper, TextField } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { withStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import InfoIcon from '@material-ui/icons/Info';
import Checkbox from '@material-ui/core/Checkbox';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { green, grey } from '@material-ui/core/colors';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import Header from './Header';
import Footer from './Footer';

const GreenRadio = withStyles({
    root: {
        color: green[400],
        '&$checked': {
            color: green[600],
        },
    },
    checked: {},
})(props => <Radio color="default" {...props} />);

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
        fontSize: '1.2vw',
    },
    typ11: {
        fontSize: '15px',
    },
    typ2: {
        fontSize: '1vw',
    },
    typ22: {
        fontSize: '10px',
    },
    typ4: {
        fontSize: '3vw',
        '@media (min-width:600px)': {
            fontSize: '1vw',
        },
        [theme.breakpoints.up('md')]: {
            fontSize: '1vw',
        },
    },
    typ44: {
        fontSize: '3vw',
        marginTop: '-3vw',
        marginRight: '2%',
        '@media (min-width:600px)': {
            fontSize: '1vw',
            marginTop: '-4%',
        },
        [theme.breakpoints.up('md')]: {
            fontSize: '1vw',
            marginTop: '-4%',
        },
    },
    typ444: {
        fontSize: '3vw',
        position: 'relative',
        left: '60%',
        top: '50%',
        transform: 'translate(-50%, -50%)',
        '@media (min-width:600px)': {
            fontSize: '1.6vw',
            position: 'relative',
            left: '50%',
            top: '50%',
            transform: 'translate(-50%, -50%)',
        },
        [theme.breakpoints.up('md')]: {
            position: 'relative',
            fontSize: '1.2vw',
            left: '35%',
            top: '50%',
            transform: 'translate(-50%, -50%)'
        },
    },
    typ9: {
        marginTop: '3%',
        fontSize: '90%',
        '@media (min-width:600px)': {
            fontSize: '1.6vw',
            marginBottom: '5%',
        },
        [theme.breakpoints.up('md')]: {
            fontSize: '1.6vw',
            marginBottom: '0%',
        },
    },
    typ10: {
        fontSize: '70%',
        marginTop: '5%',
        marginBottom: '5%',
        '@media (min-width:600px)': {
            fontSize: '1.4vw',
        },
        [theme.breakpoints.up('md')]: {
            fontSize: '1.4vw',
        },
    },
    typ100: {
        fontWeight: 'bold',
        fontSize: '25px',
        marginTop: theme.spacing(2),
        marginBottom: theme.spacing(2),
        '@media (min-width:600px)': {
            fontSize: '2.5vw',
            marginTop: theme.spacing(4),
            marginBottom: theme.spacing(4),
        },
        [theme.breakpoints.up('md')]: {
            fontSize: '2.5vw',
            marginTop: theme.spacing(4),
            marginBottom: theme.spacing(3),
        },
    },
    typ12: {
        marginLeft: '3%',
        marginTop: '5%',
        fontSize: '16px',
        '@media (min-width:600px)': {
            fontSize: '1.4vw',
            marginTop: '7%',
        },
        [theme.breakpoints.up('md')]: {
            fontSize: '1.4vw',
            marginTop: '5%',
        },
    },
    div1: {
        width: '90%',
        marginLeft: '5%',
        marginRight: '5%',
        '@media (min-width:600px)': {
            width: '55%',
            marginLeft: '4%',
            marginRight: '0%',
        },
        [theme.breakpoints.up('md')]: {
            width: '55%',
            marginLeft: '4%',
            marginRight: '0%',
        },
    },
    div11: {
        width: '100%',
        marginTop: '4%',
        backgroundColor:'white',
        '@media (min-width:600px)': {
            width: '100%',
            marginRight: '0%',
            marginTop: '4%',
        },
        [theme.breakpoints.up('md')]: {
            width: '100%',
            marginRight: '0%',
            marginTop: '4%',
        },
    },
    div2: {
        width: '10%',
    },
    div3: {
        width: '55%',
        marginLeft: '5%',
        marginTop:'1%',
    },
    div4: {
        width: '35%',
        marginRight: '3%',
        marginTop: '0%',
        '@media (min-width:600px)': {
            width: '35%',
            marginRight: '3%',
            marginTop: '0%',
        },
        [theme.breakpoints.up('md')]: {
            width: '35%',
            marginRight: '3%',
            marginTop: '0%',
        },
    },
    div5: {
        width: '100%',
        '@media (min-width:600px)': {
            width: '40%',
        },
        [theme.breakpoints.up('md')]: {
            width: '35%',
        },
    },
    div55: {
        width: '100%',
        marginTop: '7.7%',
        '@media (min-width:600px)': {
            width: '40%',
        },
        [theme.breakpoints.up('md')]: {
            width: '35%',
        },
    },
    div6: {
        maxWidth: '90%',
        marginLeft:'5%',
        marginRight:'5%',
        marginTop: '8%',
        '@media (min-width:600px)': {
            maxWidth: 410,
            marginLeft:'7%',
            marginRight:'7%',
            marginTop: '3%',
        },
        [theme.breakpoints.up('md')]: {
            maxWidth: 410,
            marginLeft:'7%',
            marginRight:'7%',
            marginTop: '3%',
        },
    },
    divcvv: {
        width: '100%',
        marginLeft: '0%',
        marginTop: '5%',
        '@media (min-width:600px)': {
            width: '35%',
            marginLeft: '10%',
            marginTop: '0%',
        },
        [theme.breakpoints.up('md')]: {
            width: '35%',
            marginLeft: '20%',
            marginTop: '0%',
        },
    },
    divinfo: {
        width: '100%',
        marginLeft: '3%',
        marginRight: '3%',
        marginTop: '5%',
        '@media (min-width:600px)': {
            width: '65%',
            marginLeft: '0%',
            marginTop: '5%',
        },
        [theme.breakpoints.up('md')]: {
            width: '65%',
            marginLeft: '0%',
            marginTop: '10%',
        },
    },
    divw: {
        width: '100%',
        '@media (min-width:600px)': {
            width: '50%',
        },
        [theme.breakpoints.up('md')]: {
            width: '50%',
        },
    },
    textField1: {
        width: '100%',
        height: '7vw',
        '@media (min-width:600px)': {
            width: '100%',
            height: '3.5vw',
        },
        [theme.breakpoints.up('md')]: {
            width: '100%',
            height: '3.5vw',
        },
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
    btn5: {
        padding: "1vw 4vw",
        marginBottom: '6%',
        marginTop: '5%',
        '@media (min-width:600px)': {
            padding: "1vw 4vw",
            marginTop: '1%',
        },
        [theme.breakpoints.up('md')]: {
            padding: "8px 2vw",
            marginBottom: '0%',
        },
    },
    radio: {
        marginLeft: '0%',
        marginRight: '20%',
        '@media (min-width:600px)': {
            marginLeft: '0%',
            marginRight: '20%',
        },
        [theme.breakpoints.up('md')]: {
            marginLeft: '20%',
            marginRight: '20%',
        },
    },
    select: {
        padding: '1.2vw 4vw',
        '@media (min-width:600px)': {
            padding: '0.8vw 15vw',
        },
        [theme.breakpoints.up('md')]: {
            padding: '1.2vw 15vw',
        },
    },
    logo: {
        position: 'absolute',
        marginTop: '0.5vw',
        width: "10%",
        marginLeft: '-7.5vw',
        '@media (min-width:600px)': {
            position: 'absolute',
            marginTop: '-0.1vw',
            width: "10%",
            marginLeft: '-4.5vw',
        },
        [theme.breakpoints.up('md')]: {
            position: 'absolute',
            marginTop: '-0.1vw',
            width: "10%",
            marginLeft: '-4.5vw',
        },
    },

    icons: {

        '@media (min-width:600px)': {
            fontSize: '2vw',
        },
        [theme.breakpoints.up('md')]: {
            fontSize: '1.5vw',
        },
    },
    icon: {
            marginTop: '5.8%',
    },
    paper: {
        padding: theme.spacing(2),
        backgroundColor: "#e3f2fd",
        '@media (min-width:600px)': {
            padding: theme.spacing(3),
            backgroundColor: "#e3f2fd",
        },
        [theme.breakpoints.up('md')]: {
            padding: theme.spacing(3),
            backgroundColor: "#e3f2fd",
        },
    },
}));


const Payment = () => {
    const classes = useStyles();
    const [state, setState] = React.useState({
        age: '',
        name: 'hai',
    });
    const [selectedValue, setSelectedValue] = React.useState('a');

    const handleChange = event => {
        setSelectedValue(event.target.value);
    };
    const handleChange1 = (event) => {
        const name = event.target.name;
        setState({
            ...state,
            [name]: event.target.value,
        });
    };
    const [checked, setChecked] = React.useState(true);
    const handleChange2 = (event) => {
        setChecked(event.target.checked);
    };
    return (
        <ThemeProvider theme={theme}>
            <Header /> 

            <div>
                <Typography className={classes.typ0}>
                    Payment
                </Typography>
            </div>

            <Paper elevation={0} className={classes.paper} />

            <div style={{ backgroundColor: '#e3f2fd'}}>
                <div className={classes.root} >
                    <div className={classes.div1}>
                        <div>
                            <div style={{ border: '1px solid black' }}>
                                <div style={{ display: 'flex', width: '100%' }}>
                                    <div style={{ display: 'flex', width: '100%', marginTop: '2%', marginBottom: '1%' }}>
                                        <div className={classes.div2}>
                                            <Radio
                                                checked={selectedValue === 'a'}
                                                onChange={handleChange}
                                                value="a"
                                                name="radio-button-demo"
                                                inputProps={{ 'aria-label': 'A' }}
                                                color="green"
                                                className={classes.radio}
                                            />
                                        </div>
                                        <div className={classes.div3}>
                                            <Typography className={classes.typ11}>Credit & Debit card</Typography>
                                            <Typography color="textSecondary" className={classes.typ22}>Transection fee may apply</Typography>
                                        </div>
                                        <div className={classes.div4}>
                                            <img src="https://i.ibb.co/smJWVqv/2.png" width='100%'/>
                                        </div>
                                    </div>
                                </div>
                                <hr style={{marginBottom:'0%'}}/>
                                <div style={{ display: 'flex', justifyContent: 'center', backgroundColor:'white' }}>
                                    <div style={{ width: '70%', marginTop: '3%' }}>
                                        <div>
                                            <Typography className={classes.typ4}>Cardholder Name</Typography>
                                            <TextField id="outlined-basic" InputProps={{ className: classes.textField1 }} className={classes.textField1} className={classes.textField1} variant="outlined" />
                                        </div>
                                        <div style={{ marginTop: '5%' }}>
                                            <Typography className={classes.typ4}>Card Number</Typography>
                                            <div style={{ position: 'relative' }}>
                                                <TextField id="outlined-basic" InputProps={{ className: classes.textField1 }} className={classes.textField1} variant="outlined" style={{ border: 'none' }} />
                                                <img src="https://media-eng.dhakatribune.com/uploads/2021/02/visa-credit-card-logo-512-1613502609560.png" className={classes.logo} />
                                            </div>
                                        </div>
                                        <div className={classes.root} style={{ marginTop: '5%' }}>
                                            <div style={{ display: 'flex' }} className={classes.divw}>
                                                <div className={classes.div5}>
                                                    <Typography className={classes.typ4}>End Date</Typography>
                                                    <FormControl variant="outlined" style={{ width: '100%' }}>
                                                        <InputLabel htmlFor="outlined-age-native-simple" className={classes.typ44}>mm</InputLabel>
                                                        <Select
                                                            native
                                                            value={state.month}
                                                            onChange={handleChange}
                                                            inputProps={{
                                                                name: 'age',
                                                                id: 'outlined-age-native-simple',
                                                            }}
                                                            input={<OutlinedInput label="asa" classes={{ input: classes.select }} />}
                                                        >
                                                            <option aria-label="None" value="" />
                                                            <option value={10}>Ten</option>
                                                            <option value={20}>Twenty</option>
                                                            <option value={30}>Thirty</option>
                                                        </Select>
                                                    </FormControl>
                                                </div>
                                                <div className={classes.div55} style={{ marginLeft: '3%' }}>
                                                    <FormControl variant="outlined" style={{ width: '100%' }}>
                                                        <InputLabel htmlFor="outlined-age-native-simple" className={classes.typ44}>yyyy</InputLabel>
                                                        <Select
                                                            native
                                                            value={state.month}
                                                            onChange={handleChange}
                                                            inputProps={{
                                                                name: 'age',
                                                                id: 'outlined-age-native-simple',
                                                            }}
                                                            input={<OutlinedInput label="asa" classes={{ input: classes.select }} />}
                                                        >
                                                            <option aria-label="None" value="" />
                                                            <option value={10}>Ten</option>
                                                            <option value={20}>Twenty</option>
                                                            <option value={30}>Thirty</option>
                                                        </Select>
                                                    </FormControl>
                                                </div>
                                            </div>
                                            <div style={{ display: 'flex' }} className={classes.divw}>
                                                <div className={classes.divcvv}>
                                                    <Typography className={classes.typ4}>Cvv</Typography>
                                                    <TextField id="outlined-basic" variant="outlined" InputProps={{ className: classes.textField1 }} className={classes.textField1} />
                                                </div>
                                                <div className={classes.divinfo} style={{ display: 'flex' }}>
                                                    <div style={{ width: '40%' }}>
                                                        <IconButton className={classes.infobtn}><InfoIcon className={classes.icons} /></IconButton>
                                                    </div >
                                                    <div style={{ width: '60%' }}>
                                                        <Typography className={classes.typ444}>3 digits</Typography>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div>
                                            <div style={{ display: 'flex', marginTop: '5%' }}>
                                                <Checkbox className={classes.check} inputProps={{ 'aria-label': 'uncontrolled-checkbox', }} color="primary" />
                                                <Typography className={classes.typ4} style={{ marginLeft: '3%', marginTop: '2%' }}>I have read and accept the terms of use, rules of flight and privacy policy</Typography>
                                            </div>
                                            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '3%', marginBottom: '3%' }}>
                                                <Button variant="contained" color="primary" className={classes.btn5} >
                                                    <Typography color="secondary" className={classes.typ5} >Pay now</Typography>
                                                </Button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className={classes.div11}>
                            <div style={{ border: '1px solid black' }}>
                                <div style={{ display: 'flex', width: '100%' }}>
                                    <div style={{ display: 'flex', width: '100%', marginTop: '2%', marginBottom: '1%' }}>
                                        <div className={classes.div2}>
                                            <Radio
                                                checked={selectedValue === 'b'}
                                                onChange={handleChange}
                                                value="b"
                                                name="radio-button-demo"
                                                inputProps={{ 'aria-label': 'B' }}
                                                color="green"
                                                className={classes.radio}
                                            />
                                        </div>
                                        <div className={classes.div3}>
                                            <Typography className={classes.typ11}>Pay with PayPal</Typography>
                                            <Typography color="textSecondary" className={classes.typ22}>Transection fee may apply</Typography>
                                        </div>
                                        <div className={classes.div4}>
                                            <img src="https://i.ibb.co/fMyK9DY/1.png" width='60%' style={{ marginLeft: '40%'}} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={classes.div6}>
                        <Card style={{ borderRadius: '3%' }}>
                            <CardContent>
                                <div style={{ borderBottom: '1px solid lightgrey' }}>
                                    <Typography gutterBottom variant="h7" component="h2" className={classes.typ9}>
                                        Standard
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p" className={classes.typ10}>
                                        Works perfect for small teams and companies
                                    </Typography>
                                </div>

                                <div style={{ display: 'flex' }}>
                                    <Typography className={classes.typ100}>
                                        $89
                                    </Typography>
                                    <Typography color="textSecondary" className={classes.typ100}>
                                        /mo
                                    </Typography>
                                </div>
                                <div style={{ display: 'flex' }}>
                                    <CheckCircleOutlineIcon fontSize="medium" color="primary" className={classes.icon} />
                                    <Typography className={classes.typ12}>
                                        Rich, responsive landing page
                                    </Typography>
                                </div>
                                <div style={{ display: 'flex' }}>
                                    <CheckCircleOutlineIcon fontSize="medium" color="primary" className={classes.icon} />
                                    <Typography className={classes.typ12}>
                                        100+ styled components
                                    </Typography>
                                </div>
                                <div style={{ display: 'flex' }}>
                                    <CheckCircleOutlineIcon fontSize="medium" color="primary" className={classes.icon} />
                                    <Typography className={classes.typ12}>
                                        Flexible, simple license
                                    </Typography>
                                </div>
                                <div style={{ display: 'flex' }}>
                                    <CheckCircleOutlineIcon fontSize="medium" color="primary" className={classes.icon} />
                                    <Typography className={classes.typ12}>
                                        Speedy build toolin
                                    </Typography>
                                </div>
                                <div style={{ display: 'flex', marginBottom:'3%' }}>
                                    <CheckCircleOutlineIcon fontSize="medium" color="primary" className={classes.icon} />
                                    <Typography className={classes.typ12}>
                                        6 month free support
                                    </Typography>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>

            <Paper elevation={0} className={classes.paper} />

            <Footer />

        </ThemeProvider>
    )
};

export default Payment;
