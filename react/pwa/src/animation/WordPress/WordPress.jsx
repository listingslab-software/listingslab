import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import cn from 'classnames';
import {
    Avatar,
    Button,
    Card,
    CardHeader,
    CardContent,
    CardActions,
    CssBaseline,
    IconButton,
    Tooltip,
    Typography,
} from '@material-ui/core/';
import IconCardHeader from '@material-ui/icons/Link';
import avatarSrc from './icons/WordPress/WordPress.png';

const styles = theme => ({
    stage: {
        height: '100vh',
        backgroundImage: 'radial-gradient(#fff, #ccc)',
        padding: theme.spacing(),
    },
    btn: {
        margin: theme.spacing(0.5),
    },
    card: {
        padding: theme.spacing(),
    },
});

class WordPress extends Component {

    state = {
        siteUrl: null,
    }

    loadIndex = (e) => {
        console.log('loadIndex');
        const { siteUrl } = this.state;
        fetch(siteUrl, {
            method: "GET",
            headers: {
                "Accept": "application/json, text/plain, */*",
                "Content-Type": "application/json charset=utf-8"
            }
        })
            .then((response) => {
                return response;
            })
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                console.log('data', data);
            })
            .catch((error) => {
                console.log('error', error);
            });
    }

    render() {
        const { classes } = this.props;
        const { siteUrl } = this.state;
        let cardTitle = `Get Started`;
        let cardSubheader = `Enter WordPress URL`;
        let showLoad = false;
        return (
            <div className={cn(classes.stage)}>
                <CssBaseline />
                <Card className={cn(classes.card)}>
                    <CardHeader
                        title={cardTitle}
                        subheader={cardSubheader}
                        avatar={<Avatar src={avatarSrc} />}
                        action={
                            <Tooltip title="View siteUrl" aria-label="add">
                                <IconButton
                                    onClick={(e) => {
                                        e.preventDefault();
                                        window.open(siteUrl, '_blank')
                                    }}>
                                    <IconCardHeader color={`primary`} />
                                </IconButton>
                            </Tooltip>
                        }
                    />

                    <CardContent>
                        <Typography variant={`body1`}>
                            Enter the URL of any WordPress site with the wp-json plugin
                            running and CORS access allowed. (That bit is up to you)
                        </Typography>
                    </CardContent>

                    <CardActions>
                        {showLoad ?
                            <Button
                                className={cn(classes.btn)}
                                variant={`contained`}
                                color={`primary`}
                                onClick={(e) => {
                                    e.preventDefault();
                                    this.loadIndex();
                                }}>
                                Load
                        </Button>
                            : null}


                    </CardActions>
                </Card>

            </div >
        );
    }
}

export default withStyles(styles, { withTheme: true })(WordPress);
