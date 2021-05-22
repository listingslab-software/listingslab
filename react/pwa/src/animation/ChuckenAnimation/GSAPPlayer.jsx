import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import cn from 'classnames';
import {
    // Button,
    Card,
    CssBaseline,
    Typography,
} from '@material-ui/core/';

const styles = theme => ({
    stage: {
        margin: theme.spacing(),

    },
    container: {
        padding: theme.spacing(),
    }
});

class GSAPPlayer extends Component {

    render() {
        const {
            classes,
        } = this.props;
        return (
            <div className={cn(classes.stage)}>
                <CssBaseline />
                <Card className={cn(classes.container)}>
                    <Typography variant={`h6`}>
                        GSAP Player
                    </Typography>
                </Card>
            </div>
        );
    }
}

export default withStyles(styles, { withTheme: true })(GSAPPlayer);
