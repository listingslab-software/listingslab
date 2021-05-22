import React from "react";
const Rank4 = props => {
    if (!props.c) {
        return null;
    }
    const { c } = props;
    const { suitColour } = c;
    return (
        <svg {...props} viewBox="0 0 15 25">
            <g id="Rank4" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                <g fill={suitColour}>
                    <path d="M14.173,17.958 L14.173,15.566 L11.195,15.566 L11.188,0 L8.954,0 L8.954,0.001 L8.877,0 L8.8817842e-16,15.566 L8.8817842e-16,17.958 L8.961,17.958 L8.963,21.697 L7.466,21.703 L7.473,24.094 L12.71,24.075 L12.702,21.683 L11.198,21.689 L11.196,17.958 L14.173,17.958 Z M2.619,15.566 L8.956,4.432 L8.96,15.566 L2.619,15.566 L2.619,15.566 Z" id="Fill-35"></path>
                </g>
            </g>
        </svg >
    )
};
export default Rank4;
