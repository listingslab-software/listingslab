import React from "react";
const IconDiamond = props => {
    if (!props.c) {
        return null;
    }
    const { c } = props;
    const { suitColour } = c;
    return (
        <svg {...props} viewBox="0 0 37 43">
            <g id="DiamondIcon" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                <g transform="translate(-276.000000, -26.000000)" fill={suitColour}>
                    <g transform="translate(275.976000, 26.134000)">
                        <path d="M17.741,3.55271368e-15 C22.21,8.675 28.106,15.769 35.433,21.283 C28.106,26.8 22.21,33.878 17.741,42.52 C13.239,33.878 7.325,26.8 0,21.283 C7.325,15.769 13.239,8.675 17.741,3.55271368e-15"></path>
                    </g>
                </g>
            </g>
        </svg >
    )
};
export default IconDiamond;
