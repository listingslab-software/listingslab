import React from "react";
const Rank7 = props => {
    if (!props.c) {
        return null;
    }
    const { c } = props;
    const { suitColour } = c;
    return (
        <svg {...props} viewBox="0 0 15 25">
            <g id="Rank7" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                <g fill={suitColour}>
                    <path d="M0.002,-2.66453526e-14 L0.002,1.441 L8.8817842e-16,1.441 L8.8817842e-16,3.894 L2.227,3.893 L2.225,2.406 L11.57,2.406 C10.121,5.062 6.217,13.033 4.805,24.094 L7.043,24.093 C7.873,17.57 9.296,12.467 10.922,8.682 C11.735,6.791 12.494,5.31 13.047,4.309 C13.323,3.807 13.548,3.425 13.702,3.172 C13.864,2.906 14.134,2.467 14.173,2.406 L14.173,-2.66453526e-14 L0.002,-2.66453526e-14" id="Fill-86"></path>
                </g>
            </g>
        </svg >
    )
};
export default Rank7;
