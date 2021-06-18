import React from 'react'

const World = props => {
    
    const { themeChoice } = props
    let t = `light`
    let cloud = `#006d73`
    let gradient = {
        top: `#fafafa`,
        bottom: `#fafafa`,
    }
    if (themeChoice) t = themeChoice

    if (t ==='dark'){
        gradient = {
            top: `#126a71`,
            bottom: `#126a71`,
        }
        cloud = `#fff`
    }


    return (
        <React.Fragment>
            <svg viewBox="0 0 938 275" >
                <defs>
                    <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="linearGradient-1">
                        <stop stopColor={gradient.top} offset="0%"></stop>
                        <stop stopColor={gradient.bottom} offset="100%"></stop>
                    </linearGradient>
                </defs>

                <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                    <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                        <g fill="url(#linearGradient-1)">
                            <rect x="0" y="0" width="938" height="275"></rect>
                        </g>
                    </g>
                </g>
            <path d="M684.226341,223 C678.427679,223 673.726552,218.280522 673.726552,212.459223 C673.726552,212.262669 673.733037,212.067355 673.743537,211.87359 C671.571316,212.55161 669.261672,212.917128 666.867411,212.917128 C665.134019,212.917128 663.447877,212.719642 661.823498,212.356916 C651.479352,210.045386 643.743478,200.784074 643.743478,189.703237 C643.743478,176.882553 654.09627,166.489037 666.867411,166.489037 C667.221624,166.489037 667.573675,166.500508 667.924184,166.516009 C666.299805,166.152972 664.613661,165.955798 662.88027,165.955798 C650.109439,165.955798 639.756647,176.349003 639.756647,189.169688 C639.756647,194.09161 641.286837,198.652046 643.889549,202.407973 C641.148487,204.064425 637.938948,205.018675 634.506752,205.018675 C629.440604,205.018675 624.858681,202.940903 621.556189,199.590485 C618.865155,202.182276 615.214934,203.778584 611.191045,203.778584 C602.919064,203.778584 596.213405,197.046438 596.213405,188.742476 C596.213405,185.734325 597.096622,182.935128 598.612297,180.584845 C593.511253,178.06343 590,172.795211 590,166.701713 C590,159.191409 595.332658,152.933598 602.40303,151.529815 C600.813239,149.192553 599.882154,146.367935 599.882154,143.32413 C599.882154,135.276557 606.380597,128.753057 614.396568,128.753057 C616.743889,128.753057 618.959344,129.315748 620.92157,130.309062 C621.987916,126.08624 625.798412,122.96152 630.336792,122.96152 C632.529086,122.96152 634.551222,123.691314 636.177145,124.921175 C636.128969,125.442943 636.101176,125.970292 636.101176,126.504771 C636.101176,130.221015 637.292593,133.656068 639.307935,136.453714 L639.292803,136.492467 L639.354258,136.518509 C640.052494,137.47865 640.847389,138.362835 641.726593,139.155563 C640.405163,136.734285 639.652884,133.95555 639.652884,131.000102 C639.652884,121.611061 647.23435,114 656.586882,114 C660.933795,114 664.896847,115.646221 667.895463,118.34931 C669.823719,120.087608 671.349276,122.264279 672.323286,124.72214 C674.872573,121.485191 678.815553,119.405558 683.245229,119.405558 C688.867556,119.405558 693.699312,122.759075 695.89593,127.57621 C697.949256,123.179776 702.384491,120.128221 707.541122,120.128221 C713.814437,120.128221 719.032832,124.636884 720.171442,130.601723 C722.295487,128.65881 725.110666,127.463982 728.210883,127.463982 C734.812471,127.463982 740.164275,132.836678 740.164275,139.464346 C740.164275,140.410536 740.044145,141.326653 739.837546,142.209908 C738.682879,142.001573 737.496093,141.886864 736.281515,141.886864 C732.090246,141.886864 728.201928,143.184 724.988375,145.397563 C720.550052,137.307207 711.977283,131.823833 702.126937,131.823833 C687.720609,131.823833 676.042682,143.547657 676.042682,158.009912 C676.042682,158.781249 676.08252,159.542975 676.14768,160.297261 C677.572872,147.187325 688.6344,136.983853 702.072585,136.983853 C710.488475,136.983853 717.96803,140.988728 722.737405,147.198796 C718.775896,150.866056 716.292078,156.118153 716.292078,161.954643 C716.292078,162.801935 716.350445,163.634967 716.452046,164.454667 C717.678977,154.552227 726.085911,146.887223 736.281515,146.887223 C746.477737,146.887223 754.884979,154.552227 756.111602,164.454667 C756.213203,163.634967 756.271569,162.801935 756.271569,161.954643 C756.271569,160.070324 756.007222,158.24956 755.523614,156.520563 C758.189016,154.697318 761.408437,153.63022 764.877073,153.63022 C771.968444,153.63022 778.01972,158.088038 780.41151,164.3629 C779.048699,166.312014 778.241759,168.682138 778.241759,171.244477 C778.241759,171.407549 778.259671,171.566901 778.266156,171.728733 C779.69351,166.704813 784.289947,163.022362 789.752616,163.022362 C796.192385,163.022362 801.426838,168.137118 801.683156,174.53847 C801.979621,173.490593 802.14947,172.388151 802.14947,171.244477 C802.14947,164.616809 796.797666,159.244113 790.195151,159.244113 C786.67309,159.244113 783.516977,160.782756 781.329316,163.216126 C780.52392,157.70671 777.039225,153.074039 772.245763,150.691203 C774.17093,149.359965 776.500956,148.576847 779.015656,148.576847 C783.473434,148.576847 787.353724,151.031608 789.408594,154.663216 C790.744846,153.601697 792.427901,152.96305 794.265364,152.96305 C798.588806,152.96305 802.096971,156.48305 802.096971,160.82554 C802.096971,161.672832 801.958003,162.487262 801.71095,163.252088 C802.461376,163.103897 803.236508,163.022362 804.030168,163.022362 C809.369619,163.022362 813.890705,166.538331 815.422439,171.388948 C816.463153,170.907482 817.615042,170.630942 818.837958,170.630942 C823.346692,170.630942 827,174.300372 827,178.826706 C827,183.353349 823.346692,187.022779 818.837958,187.022779 C817.747833,187.022779 816.713295,186.805454 815.765226,186.416685 C815.74052,189.845228 812.967341,192.617762 809.545645,192.617762 C807.584655,192.617762 805.83675,191.705364 804.697213,190.28298 C803.946787,195.321781 799.620256,199.186836 794.391979,199.186836 C790.232827,199.186836 786.644061,196.741375 784.971816,193.205565 C783.299879,196.741375 779.711112,199.186836 775.553197,199.186836 C772.900147,199.186836 770.480254,198.189802 768.640321,196.551022 C769.033754,195.241485 769.247764,193.853513 769.247764,192.415007 C769.247764,184.512525 762.866054,178.106213 754.99461,178.106213 C754.198478,178.106213 753.418406,178.175038 752.657789,178.300907 C760.058287,178.821125 765.902037,185.008561 765.902037,192.570329 C765.902037,199.672951 760.745097,205.564315 753.985703,206.684118 C753.225086,206.809987 752.445014,206.878502 751.648883,206.878502 C747.043181,206.878502 742.950425,204.68354 740.344625,201.28073 C743.179259,197.290736 743.89973,191.943772 741.770434,187.142758 C741.446793,186.412345 741.067257,185.724714 740.642942,185.078316 C743.179568,192.077082 739.925559,199.953212 733.044492,203.028329 C731.161942,203.869421 729.195084,204.2678 727.259726,204.2678 C723.944263,204.2678 720.720828,203.099324 718.170923,200.988068 C718.051719,201.361956 717.918619,201.729333 717.776563,202.092369 C715.159337,208.766542 708.685908,213.49253 701.108457,213.49253 C699.76572,213.49253 698.459731,213.339688 697.201301,213.058188 C689.189035,211.268116 683.197053,204.094187 683.197053,195.511205 C683.197053,185.580553 691.216113,177.52988 701.108457,177.52988 C701.382996,177.52988 701.655373,177.538251 701.927132,177.550652 C700.669011,177.269461 699.362713,177.11662 698.020284,177.11662 C688.127939,177.11662 680.108879,185.166983 680.108879,195.097944 C680.108879,203.895773 686.404429,211.212622 694.718101,212.769246 C694.554736,218.446695 689.92155,223 684.226341,223" id="cloud2" fill={cloud}></path>
            <path d="M135.106218,188 C130.114964,188 126.068425,183.929992 126.068425,178.909789 C126.068425,178.740283 126.074007,178.571847 126.083045,178.404748 C124.213284,178.989462 122.225236,179.304679 120.164353,179.304679 C118.67232,179.304679 117.220957,179.13437 115.822757,178.82156 C106.918936,176.828131 100.260209,168.841311 100.260209,159.285361 C100.260209,148.22899 109.171473,139.265775 120.164353,139.265775 C120.469246,139.265775 120.772278,139.275667 121.073981,139.289035 C119.675781,138.975958 118.224417,138.805917 116.732384,138.805917 C105.73977,138.805917 96.8285063,147.768865 96.8285063,158.825236 C96.8285063,163.069829 98.1456315,167.002682 100.385941,170.241738 C98.0265455,171.670238 95.2639049,172.493169 92.3096094,172.493169 C87.9488746,172.493169 84.0049409,170.701329 81.1622896,167.811978 C78.8459561,170.0471 75.7039941,171.423733 72.2403928,171.423733 C65.1202069,171.423733 59.3482469,165.618029 59.3482469,158.456814 C59.3482469,155.862629 60.1084848,153.448643 61.4131168,151.421793 C57.0223443,149.247361 54,144.704127 54,139.449183 C54,132.972408 58.5901356,127.575764 64.6760259,126.365161 C63.3075977,124.349541 62.5061581,121.913632 62.5061581,119.2887 C62.5061581,112.348591 68.0997544,106.72282 74.9995777,106.72282 C77.0200563,106.72282 78.9270306,107.208077 80.6160346,108.064695 C81.5339025,104.422996 84.8138234,101.728284 88.7202766,101.728284 C90.6073144,101.728284 92.3478876,102.357647 93.7474163,103.418261 C93.7059483,103.868226 93.6820248,104.323004 93.6820248,104.783931 C93.6820248,107.988765 94.7075486,110.951105 96.4422734,113.363754 L96.4292483,113.397173 L96.4821458,113.419632 C97.0831592,114.247643 97.7673731,115.010151 98.5241558,115.693788 C97.3867227,113.605714 96.7391914,111.209374 96.7391914,108.660639 C96.7391914,100.563667 103.26501,94 111.315291,94 C115.056937,94 118.468172,95.4196771 121.04926,97.7507814 C122.709024,99.2498642 124.022162,101.126993 124.86055,103.246616 C127.054873,100.455119 130.44883,98.6616741 134.261716,98.6616741 C139.101188,98.6616741 143.260168,101.553698 145.150927,105.707924 C146.918347,101.916504 150.736017,99.2848883 155.174637,99.2848883 C160.574452,99.2848883 165.066235,103.173092 166.046305,108.317082 C167.874597,106.641542 170.297789,105.61114 172.96633,105.61114 C178.648709,105.61114 183.255325,110.244474 183.255325,115.960078 C183.255325,116.776058 183.151922,117.566105 182.974091,118.327811 C181.980199,118.148145 180.958663,118.049223 179.913203,118.049223 C176.305529,118.049223 172.958621,119.167853 170.192525,121.076798 C166.372197,114.099793 158.993105,109.371012 150.514325,109.371012 C138.113942,109.371012 128.062055,119.481466 128.062055,131.953502 C128.062055,132.618692 128.096346,133.275593 128.152433,133.926078 C129.379181,122.620262 138.900496,113.820938 150.467541,113.820938 C157.711598,113.820938 164.149697,117.274683 168.254982,122.630154 C164.845075,125.792745 162.707105,130.322077 162.707105,135.35538 C162.707105,136.086073 162.757345,136.804467 162.844799,137.511364 C163.900892,128.971646 171.13724,122.361458 179.913203,122.361458 C188.689698,122.361458 195.926311,128.971646 196.982138,137.511364 C197.069592,136.804467 197.119832,136.086073 197.119832,135.35538 C197.119832,133.730371 196.892292,132.160171 196.476022,130.669109 C198.770292,129.09677 201.541439,128.17652 204.527101,128.17652 C210.631066,128.17652 215.839759,132.020877 217.898515,137.432226 C216.725463,139.113113 216.030882,141.157073 216.030882,143.366797 C216.030882,143.507428 216.046299,143.64485 216.051881,143.784412 C217.28049,139.451857 221.236916,136.276165 225.938961,136.276165 C231.482053,136.276165 235.987658,140.687056 236.208287,146.207488 C236.463471,145.303814 236.609671,144.353085 236.609671,143.366797 C236.609671,137.651193 232.003054,133.017859 226.319877,133.017859 C223.28823,133.017859 220.571575,134.344762 218.688525,136.443264 C217.995273,131.692025 214.995788,127.696877 210.869771,125.641955 C212.526876,124.493915 214.532469,123.818566 216.69702,123.818566 C220.534095,123.818566 223.874091,125.935515 225.642841,129.06736 C226.793032,128.151923 228.241737,127.601163 229.823352,127.601163 C233.544795,127.601163 236.564482,130.636758 236.564482,134.381658 C236.564482,135.112351 236.444864,135.814703 236.23221,136.474278 C236.878146,136.34648 237.545348,136.276165 238.228499,136.276165 C242.824482,136.276165 246.71605,139.308285 248.034504,143.491386 C248.930309,143.076177 249.921808,142.837693 250.974445,142.837693 C254.85538,142.837693 258,146.002156 258,149.905599 C258,153.80931 254.85538,156.973773 250.974445,156.973773 C250.036109,156.973773 249.145621,156.786355 248.329562,156.451086 C248.308296,159.407811 245.921255,161.798803 242.975998,161.798803 C241.288058,161.798803 239.783531,161.011965 238.802665,159.785322 C238.156728,164.13071 234.432626,167.463877 229.932336,167.463877 C226.352307,167.463877 223.263242,165.354947 221.823841,162.305717 C220.384706,165.354947 217.295641,167.463877 213.716675,167.463877 C211.433038,167.463877 209.350092,166.60405 207.766352,165.190789 C208.105003,164.061464 208.289215,162.864497 208.289215,161.623951 C208.289215,154.808966 202.796098,149.284257 196.020677,149.284257 C195.335399,149.284257 194.663944,149.343611 194.009236,149.452158 C200.379285,149.900787 205.409348,155.236741 205.409348,161.757898 C205.409348,167.883096 200.970463,172.963721 195.152251,173.929423 C194.497543,174.037971 193.826088,174.097057 193.14081,174.097057 C189.176409,174.097057 185.653531,172.204154 183.410563,169.26962 C185.850501,165.828708 186.470653,161.217565 184.637842,157.077241 C184.359265,156.447343 184.032576,155.85434 183.667343,155.296897 C185.850767,161.33253 183.049848,168.124789 177.126904,170.776724 C175.506481,171.502069 173.81349,171.845626 172.147612,171.845626 C169.293796,171.845626 166.519194,170.837949 164.324339,169.017233 C164.221733,169.339668 164.107166,169.656489 163.98489,169.969566 C161.732087,175.725275 156.160022,179.800897 149.637659,179.800897 C148.481885,179.800897 147.357743,179.669089 146.274537,179.426327 C139.377904,177.882595 134.220248,171.695905 134.220248,164.294067 C134.220248,155.730018 141.12273,148.787236 149.637659,148.787236 C149.873971,148.787236 150.108422,148.794455 150.342342,148.805149 C149.259402,148.562654 148.134994,148.430846 146.979485,148.430846 C138.464555,148.430846 131.562073,155.373361 131.562073,163.937677 C131.562073,171.524795 136.981028,177.834738 144.137099,179.177148 C143.996482,184.073296 140.008423,188 135.106218,188" id="cloud1" fill={cloud}></path>
            </svg>
        </React.Fragment>
    )
}

export default World