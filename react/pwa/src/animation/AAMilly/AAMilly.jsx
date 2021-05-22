import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import cn from 'classnames';
import {
    CssBaseline,
} from '@material-ui/core/';
import CurlyBrace from './graphics/jsx/CurlyBrace';
import { animate } from './animation';
import Vimeo from '@u-wave/react-vimeo';

const styles = theme => ({
    stage: {
        position: 'relative',
        height: '100vh',
        background: 'black',
        overflow: 'hidden',
    },
    logo: {
        position: 'absolute',
        width: 370,
        height: 86,
        left: 'calc(50vw - 375px)',
        top: 'calc(50vh + 100px)',
    },
    image: {
        width: '100%',
    }
});


class AAMilly extends Component {

    componentDidMount() {
        animate(`start`, 0.25, this.callBack);
    }

    componentDidUpdate() {
        animate(`reanimate`);
    }

    callBack = (completionEvent) => {
        // console.log('completionEvent', completionEvent);
        setTimeout(() => {
            animate(`fade`, 0.5);
        }, 2000)
    }

    render() {
        const {
            classes,
        } = this.props;

        return (
            <React.Fragment>
                <CssBaseline />
                <div className={cn(classes.stage)}>
                    <div className={cn(classes.logo)} >
                        <CurlyBrace
                            id={`curly-brace`}
                            colors={
                                { fill: '#EFEFEF' }
                            }
                            style={{
                                zIndex: 540,
                                position: `absolute`,
                                left: 335,
                                height: 86,
                                opacity: '0',
                            }} />

                        <CurlyBrace
                            id={`cursor`}
                            colors={
                                { fill: '#EFEFEF' }
                            }
                            style={{
                                zIndex: 1,
                                position: `absolute`,
                                height: 86,
                                opacity: '0',
                            }} />

                    </div>
                    <Vimeo
                        video="382250308"
                        width={`854`}
                        height={`480`}
                    />
                </div>
            </React.Fragment>
        );
    }
}

export default withStyles(styles, { withTheme: true })(AAMilly);
