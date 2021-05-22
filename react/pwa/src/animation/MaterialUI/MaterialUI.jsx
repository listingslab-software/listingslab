import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import cn from 'classnames';
import {
    Button,
    Container,
    CssBaseline,
    Typography,
} from '@material-ui/core/';

const styles = theme => ({
    mui: {
        border: '1px solid #ccc',
        height: '100vh',
        paddingTop: theme.spacing()
    },
    title: {
        padding: theme.spacing()
    },
    btn: {
        margin: theme.spacing()
    }
});

class MaterialUI extends Component {

    render() {
        const {
            classes,
        } = this.props;
        return (
            <React.Fragment>
                <CssBaseline />
                <div className={cn(classes.mui)}>
                    <Container>
                        <Typography variant={`h5`} className={cn(classes.title)}>
                            Material UI. React UI framework.
                        </Typography>

                        <Typography variant={`h6`} className={cn(classes.title)}>
                            Contained buttons
                        </Typography>

                        <Button
                            className={cn(classes.btn)}
                            color={`primary`}
                            variant={`contained`}
                            onClick={(e) => {
                                e.preventDefault();
                                window.open('https://material-ui.com/getting-started/installation/', '_blank')
                            }}>
                            Material UI Docs
                        </Button>
                        <Button
                            className={cn(classes.btn)}
                            color={`secondary`}
                            variant={`contained`}
                            onClick={(e) => {
                                e.preventDefault();
                                window.open('https://material.io/resources/icons/', '_blank')
                            }}>
                            Material Icons
                        </Button>
                        <Button
                            className={cn(classes.btn)}
                            color={`default`}
                            variant={`contained`}
                            onClick={(e) => {
                                e.preventDefault();
                            }}>
                            Default
                        </Button>

                        <Typography variant={`h6`} className={cn(classes.title)}>
                            Outlined buttons
                        </Typography>


                        <Button
                            className={cn(classes.btn)}
                            color={`primary`}
                            variant={`outlined`}
                            onClick={(e) => {
                                e.preventDefault();
                                window.open('https://material-ui.com/getting-started/installation/', '_blank')
                            }}>
                            Primary
                        </Button>
                        <Button
                            className={cn(classes.btn)}
                            color={`secondary`}
                            variant={`outlined`}
                            onClick={(e) => {
                                e.preventDefault();
                            }}>
                            Secondary
                        </Button>
                        <Button
                            className={cn(classes.btn)}
                            color={`default`}
                            variant={`outlined`}
                            onClick={(e) => {
                                e.preventDefault();
                            }}>
                            Default
                        </Button>



                    </Container>
                </div>
            </React.Fragment>
        );
    }
}

export default withStyles(styles, { withTheme: true })(MaterialUI);
