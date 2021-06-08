import * as React from "react";
import { useGoogleMaps } from "react-hook-google-maps";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  map: {
    marginTop: '5%',
    width: '96%',
    height: '400px',
    '@media (min-width:600px)': {
      marginTop: '5%',
      width: '97%',
      height: '600px',
    },
    [theme.breakpoints.up('md')]: {
      marginTop: '0%',
      width: '100%',
      height: '100%',
    },
  },
}));

const App = () => {
  const { ref, map, google } = useGoogleMaps(
    // Use your own API key, you can get one from Google (https://console.cloud.google.com/google/maps-apis/overview)
    "AIzaSyC4Z5Qz97EWcoCczNn2IcYvaYG0L9pe6Rk",
    // NOTE: even if you change options later
    {
      center: { lat: 0, lng: 0 },
      zoom: 3,
    },
  );
  const classes = useStyles();
  console.log(map); // instance of created Map object (https://developers.google.com/maps/documentation/javascript/reference/map)
  console.log(google); // google API object (easily get google.maps.LatLng or google.maps.Marker or any other Google Maps class)
  return <div ref={ref} className={classes.map} />;
};

export default App;