import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import cn from 'classnames';
import {
    CssBaseline,
} from '@material-ui/core/';
import bgImage from './graphics/brisvegas.jpg';
import GSAPPlayer from './GSAPPlayer';
import CurlyBrace from './graphics/jsx/CurlyBrace';

// import { animate } from './animation';
// const offsets = {
//     left: 0,
//     top: 0
// };

const image = {
    src: bgImage,
    alt: 'Brisvegas',
};

const styles = theme => ({
    stage: {
        position: 'relative',
        height: '100vh',
        background: 'black',
    },
    graphics: {
        position: 'absolute',
    },
    image: {
        width: '100vw',
        height: 'calc(100vh - 5px)',
    }
});

class ChuckenAnimation extends Component {

    componentDidMount() {
        const { baseDuration } = this.props.animation;
        this.setAnimationSpeed(baseDuration);
        // setTimeout(() => { animate(`curly-brace`, `start`, this.curlyBraceComplete) }, 1000);
    }

    componentDidUpdate() {
        const { baseDuration } = this.props.animation;
        this.setAnimationSpeed(baseDuration);
    }

    setAnimationSpeed = (baseDuration) => {
        console.log('setAnimationSpeed', baseDuration);
    }

    curlyBraceComplete = (e) => {
        console.log('curlyBraceComplete')
    }

    render() {
        const {
            classes,
        } = this.props;


        return (
            <React.Fragment>
                <CssBaseline />
                <div className={cn(classes.stage)}>
                    <div className={cn(classes.graphics)}>
                        <img className={classes.image}
                            src={image.src}
                            alt={image.alt} />
                    </div>

                    <div className={cn(classes.graphics)}>
                        <GSAPPlayer />
                    </div>

                    <CurlyBrace
                        id={`curly-brace`}
                        style={{
                            position: `absolute`,
                            height: 86,
                            opacity: '0',
                        }} />
                </div>
            </React.Fragment>
        );
    }
}

export default withStyles(styles, { withTheme: true })(ChuckenAnimation);
