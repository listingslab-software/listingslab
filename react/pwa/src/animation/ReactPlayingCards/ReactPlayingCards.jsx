import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import cn from 'classnames';
import {
    CssBaseline,
} from '@material-ui/core/';
import { CardFront } from './PlayingCard/cardElements';

const styles = theme => ({
    pokerCards: {
        // border: '1px solid black',
        backgroundImage: 'linear-gradient(#ddd, #eee)',
        height: '100vh',
        position: 'relative',
    },
});

const colors = {
    border: `#333333`,
    face: `#f5f5f5`,
    back: `#3C779B`,
    blackSuit: `#1c1c19`,
    redSuit: `#d43943`,
}

class ReactPlayingCards extends Component {

    render() {
        // const { cardObj } = this.props;
        const {
            classes,
        } = this.props;
        return (
            <div className={cn(classes.pokerCards)}>
                <CssBaseline />
                <CardFront
                    id={`thecard`}
                    style={{
                        position: 'absolute',
                        left: 'calc(50vw - 150px)',
                        top: 25,
                        width: 300
                    }}
                    colors={colors}
                />
            </div>
        );
    }
}

export default withStyles(styles, { withTheme: true })(ReactPlayingCards);
