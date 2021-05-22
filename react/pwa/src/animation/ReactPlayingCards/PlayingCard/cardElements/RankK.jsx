import React from "react";
const RankK = props => {
    if (!props.c) {
        return null;
    }
    const { c } = props;
    const { suitColour } = c;
    return (
        <svg {...props} viewBox="0 0 15 25">
            <g id="RankK" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                <g fill={suitColour}>
                    <polyline id="Fill-877" points="8.299 10.464 12.419 2.318 14.172 2.318 14.174 1.42108547e-14 8.182 0.004 8.18 2.318 10.179 2.318 4.193 14.152 4.177 2.318 5.993 2.318 5.994 1.42108547e-14 0.002 0.004 -8.8817842e-16 2.318 2.338 2.318 2.364 21.778 0.002 21.779 -8.8817842e-16 24.095 5.993 24.095 5.994 21.776 4.204 21.777 4.199 18.569 7.125 12.783 10.351 21.778 8.182 21.779 8.18 24.095 14.172 24.095 14.174 21.776 12.356 21.777 8.299 10.464"></polyline>
                </g>
            </g>
        </svg>
    )
};
export default RankK;
