import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import cn from 'classnames';
import {
    Button,
    Checkbox,
    CssBaseline,
    FormGroup,
    FormControlLabel,
    TextField
} from '@material-ui/core/';

const styles = theme => ({
    contact: {
        height: '100vh',
        backgroundImage: 'radial-gradient(#fff, #ccc)',
        padding: theme.spacing(),
    },
});

class Contact extends Component {

    state = {
        emailNotifications: false,
    }

    toggleEmailNotifications = (e) => {
        console.log(e);
    }

    render() {
        const {
            classes,
        } = this.props;
        const emailNotifications = false;
        return (
            <div className={cn(classes.contact)}>
                <CssBaseline />
                <FormGroup row>
                    <FormControlLabel
                        label="Email notifications?"
                        control={
                            <Checkbox
                                checked={emailNotifications}
                                onChange={(e) => {
                                    // contactToggleEmail(!emailNotifications)
                                }}
                            />
                        }
                    />
                </FormGroup>
                <FormGroup row>
                    <TextField
                        fullWidth
                        id={`email`}
                        label={`Email`}
                        margin={`normal`}
                        variant={`filled`}
                    />
                </FormGroup>

                <FormGroup row>
                    <TextField
                        fullWidth
                        id={`message`}
                        label={`Message`}
                        multiline
                        rows={4}
                        margin={`normal`}
                        variant={`filled`}
                    />
                </FormGroup>

                <FormGroup row>
                    <Button
                        fullWidth
                        variant={`contained`}
                        color={`secondary`}
                        onClick={(e) => {
                            e.preventDefault();
                        }}>
                        Push to send
                    </Button>
                </FormGroup>
            </div>
        );
    }
}

export default withStyles(styles, { withTheme: true })(Contact);
