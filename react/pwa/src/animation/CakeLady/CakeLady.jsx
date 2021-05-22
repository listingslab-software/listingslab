import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
    CssBaseline,
    Typography,
} from '@material-ui/core/';
import Mumma from './Mumma';

const useStyles = makeStyles({
    cakeLady: {
        background: 'black',
        height: '100vh',
        border: '1px solid rgba(255,255,255,0.25)',
        textAlign: `center`,
    },
    mumma: {
        height: '80%',
    },
    white: {
        color: 'white',
    }
});

export default function CakeLady(props) {
    const classes = useStyles();
    const c = {
        title: `Cake Lady`,
    }
    const { storybook } = props;
    if (storybook) {
        if (storybook.title) c.title = storybook.title;
        if (storybook.backgroundColor) c.backgroundColor = storybook.backgroundColor;
    }
    return (
        <React.Fragment>
            <CssBaseline />
            <div className={classes.cakeLady}>
                <Typography className={classes.white}>
                    Cake Lady, October 2019
                </Typography>
                <Mumma className={classes.mumma} />
            </div>
        </React.Fragment>
    );
}
