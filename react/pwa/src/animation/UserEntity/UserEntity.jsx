import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useSelector } from 'react-redux';
import {createFingerprint} from './redux/userEntity/actions'
import {
    Typography,
} from '@material-ui/core/';

const useStyles = makeStyles(theme => ({
    systemTimer: {
        paddingTop: theme.spacing(1.5),
    },
}));

export function UserEntity() {
    const classes = useStyles();
    const { fingerprint } = useSelector(state => state.userEntity);
    if (!fingerprint) {
        createFingerprint()
        return null;
    }
    return (
        <div className={classes.systemTimer}>
            <Typography variant={`button`} className={classes.mutedText}>
                {fingerprint}
            </Typography>
        </div>
    );
}