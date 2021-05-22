import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import cn from 'classnames';
import {
    CssBaseline,
} from '@material-ui/core/';
import ReactMapboxGl from "react-mapbox-gl";

const styles = theme => ({
    markdown: {
        height: '100vh',
        backgroundImage: 'radial-gradient(#fff, #ccc)',
        padding: theme.spacing(),
    },
    map: {
        height: '100%',
    },
    btn: {
        margin: theme.spacing(0.5),
    },
});

const Map = ReactMapboxGl({
    accessToken: process.env.REACT_APP_MAPBOX
});

class Mapbox extends Component {

    render() {
        const {
            classes,
        } = this.props;
        // console.log(mapboxAccessToken)
        return (
            <div className={cn(classes.markdown)}>
                <CssBaseline />
                <Map className={cn(classes.map)} style={{ style: "mapbox://styles/mapbox/streets-v8" }} />
            </div>
        );
    }
}

export default withStyles(styles, { withTheme: true })(Mapbox);
