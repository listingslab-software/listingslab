import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import cn from 'classnames';
import {
    Button,
    CssBaseline,
    Typography,
} from '@material-ui/core/';

const styles = theme => ({
    stage: {
        height: '100vh',
        backgroundImage: 'radial-gradient(#fff, #ccc)',
    },
    btn: {
        margin: theme.spacing()
    }
});

class NewClass extends Component {

    render() {
        const {
            classes,
        } = this.props;
        return (
            <div className={cn(classes.stage)}>
                <CssBaseline />
                <Typography variant={`h4`}>
                    NewClass
                </Typography>
                <Button
                    className={cn(classes.btn)}
                    variant={`contained`}
                    color={`primary`}
                    onClick={(e) => {
                        e.preventDefault();
                        window.open(`https://material-ui.com`, '_blank')
                    }}>
                    Material UI
                </Button>

            </div>
        );
    }
}

export default withStyles(styles, { withTheme: true })(NewClass);
