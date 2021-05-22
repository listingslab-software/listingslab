import {
    // CardBack,
    CardFront,
    // FaceJack,
    // FaceQueen,
    // FaceKing,
    // IconClub,
    // IconDiamond,
    IconHeart,
    // IconSpade,
    // Rank2,
    // Rank3,
    // Rank4,
    // Rank5,
    // Rank6,
    // Rank7,
    // Rank8,
    // Rank9,
    RankA,
    // RankJ,
    // RankK,
    // RankQ,
    // RankT,
} from './cardElements'
import {
    Card,
    Typography
} from '@material-ui/core/';
import React, { Component } from 'react';
import playingCard from '../../../the-hood/data/playingCard';
import cn from 'classnames';
import { withStyles } from '@material-ui/styles';

const styles = (theme) => ({
    singleCardWrap: {
        margin: 'auto',
        // border: '1px solid yellow',
        width: 100,
    },
    singleCard: {
        position: 'relative',
        textAlign: 'center',
    },
    cardFront: {
        // height: 'calc(100vh - 100px)',
        // maxWidth: 'calc(100vw - 32px)',
    },
    rankIcon: {
        position: 'absolute',
        width: '25%',
        left: '17%',
        top: '8%',
    },
    suitIcon: {
        position: 'absolute',
        width: '35%',
        left: '52%',
        top: '8%',
    },
    lowerCard: {
        position: 'absolute',
        width: '90%',
        left: '5%',
        bottom: '4%',
    },
    faceCard: {
        width: '90%',
        height: '50%',
        overflow: 'hidden',
    },
    advertImage: {
        width: '100%'
    },
    card: {
        padding: '8px',
    }
});

class PlayingCard extends Component {

    state = {
        cardObj: this.props.cardObj || playingCard,
    }

    componentDidUpdate(prevProps) {
        if (this.props.cardObj !== prevProps.cardObj) {
            this.setState({
                cardObj: this.props.cardObj
            })
        }
    }

    render() {
        const { classes } = this.props;
        const { cardObj } = this.state;
        return (
            <div className={cn(classes.singleCardWrap)}>
                <div className={cn(classes.singleCard)}>
                    <CardFront cardObj={cardObj} className={cn(classes.cardFront)} />
                    <RankA className={cn(classes.rankIcon)} />
                    <IconHeart className={cn(classes.suitIcon)} />
                </div>
            </div>
        );
    }
}

export default withStyles(styles)(PlayingCard);
