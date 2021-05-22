import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
    CssBaseline,
    Button,
} from '@material-ui/core/';
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import bgImage from './table.png';

const useStyles = makeStyles(theme => ({
    stage: {
        background: 'black',
        height: '100vh',
    },
    rel: {
        position: 'relative',
    },
    controls: {
        position: 'absolute',
        zIndex: 12345,
    },
    controlBtn: {
        margin: theme.spacing()
    },
    image: {
        position: 'absolute',
    },
    white: {
        color: 'white',
    }
}));

export default function PiJS(props) {
    const classes = useStyles();
    const c = {
        title: `react-zoom-pan-pinch`,
    }
    const { storybook } = props;
    if (storybook) {
        if (storybook.title) c.title = storybook.title;
        if (storybook.backgroundColor) c.backgroundColor = storybook.backgroundColor;
    }
    return (
        <React.Fragment>
            <CssBaseline />
            <div className={classes.stage}>                
                <TransformWrapper
                    defaultScale={1}
                    defaultPositionX={0}
                    defaultPositionY={0}
                >
                    {({ zoomIn, zoomOut, resetTransform, ...rest }) => (
                        <React.Fragment>
                            <div className={classes.rel}>
                                <div className={classes.controls}>
                                    <Button
                                        className={classes.controlBtn}
                                        variant={`contained`}
                                        color={`primary`}
                                        onClick={zoomIn}
                                    >Zoom In</Button>

                                    <Button
                                        className={classes.controlBtn}
                                        variant={`contained`}
                                        color={`primary`}
                                        onClick={zoomOut}
                                    >Zoom Out</Button>

                                    <Button
                                        className={classes.controlBtn}
                                        variant={`contained`}
                                        color={`secondary`}
                                        onClick={resetTransform}
                                    >Reset</Button>

                                </div>

                                <div className={classes.image}>
                                    <TransformComponent >
                                        <img
                                            style={{ width: '100%' }}
                                            src={bgImage}
                                            alt="test" />
                                    </TransformComponent>
                                </div>
                            </div>
                        </React.Fragment>
                    )}
                </TransformWrapper>


            </div>
        </React.Fragment>
    );
}
