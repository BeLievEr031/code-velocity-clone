function AllSection() {
    return (
        <div>
            <section className="py-16 lg:py-32">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                        <div className="text-center lg:text-left">
                            <h2 className="text-display-3 lg:text-display-2 font-geist-circle font-medium mb-6 lg:leading-tight ">
                                Use Code Velocity through{" "}
                                <span className="text-brand-primary">API, SDK, or MCP</span>
                            </h2>
                            <dl className="flex flex-col gap-3 mb-8 text-left max-w-xl mx-auto lg:mx-0">
                                <div className="flex gap-3">
                                    <dt className="text-brand-primary font-semibold w-12 shrink-0">
                                        API
                                    </dt>
                                    <dd className="text-landing-secondary">
                                        Production integration. OpenAI-compatible at api.
                                    </dd>
                                </div>
                                <div className="flex gap-3">
                                    <dt className="text-brand-primary font-semibold w-12 shrink-0">
                                        SDK
                                    </dt>
                                    <dd className="text-landing-secondary">
                                        Fastest developer integration. Anthropic and Vercel AI SDK
                                        support.
                                    </dd>
                                </div>
                                <div className="flex gap-3">
                                    <dt className="text-brand-primary font-semibold w-12 shrink-0">
                                        MCP
                                    </dt>
                                    <dd className="text-landing-secondary">
                                        Easiest way to try inside Claude Code, Cursor, and Codex.
                                    </dd>
                                </div>
                            </dl>
                            <p className="w-full text-landing-secondary text-base flex flex-wrap items-center justify-center lg:justify-start">
                                <span>Also on </span>
                                <a
                                    // // href="/setup"
                                    className="inline-flex items-center gap-1 text-brand-primary mx-2"
                                >
                                    <svg
                                        fill="currentColor"
                                        fillRule="evenodd"
                                        height="1em"
                                        style={{ flex: "none", lineHeight: 1 }}
                                        viewBox="0 0 24 24"
                                        width="1em"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <title>ModelContextProtocol</title>
                                        <path d="M15.688 2.343a2.588 2.588 0 00-3.61 0l-9.626 9.44a.863.863 0 01-1.203 0 .823.823 0 010-1.18l9.626-9.44a4.313 4.313 0 016.016 0 4.116 4.116 0 011.204 3.54 4.3 4.3 0 013.609 1.18l.05.05a4.115 4.115 0 010 5.9l-8.706 8.537a.274.274 0 000 .393l1.788 1.754a.823.823 0 010 1.18.863.863 0 01-1.203 0l-1.788-1.753a1.92 1.92 0 010-2.754l8.706-8.538a2.47 2.47 0 000-3.54l-.05-.049a2.588 2.588 0 00-3.607-.003l-7.172 7.034-.002.002-.098.097a.863.863 0 01-1.204 0 .823.823 0 010-1.18l7.273-7.133a2.47 2.47 0 00-.003-3.537z" />
                                        <path d="M14.485 4.703a.823.823 0 000-1.18.863.863 0 00-1.204 0l-7.119 6.982a4.115 4.115 0 000 5.9 4.314 4.314 0 006.016 0l7.12-6.982a.823.823 0 000-1.18.863.863 0 00-1.204 0l-7.119 6.982a2.588 2.588 0 01-3.61 0 2.47 2.47 0 010-3.54l7.12-6.982z" />
                                    </svg>
                                    MCP
                                </a>
                                <a
                                    // // href="https://ai-sdk.dev/playground/morph:morph-v2"
                                    className="inline-flex items-center gap-1 text-brand-primary mx-2"
                                >
                                    <svg
                                        height={16}
                                        strokeLinejoin="round"
                                        viewBox="0 0 16 16"
                                        width={16}
                                        className="inline-block w-4 h-4 font-medium"
                                    >
                                        <path
                                            d="M2.5 0.5V0H3.5V0.5C3.5 1.60457 4.39543 2.5 5.5 2.5H6V3V3.5H5.5C4.39543 3.5 3.5 4.39543 3.5 5.5V6H3H2.5V5.5C2.5 4.39543 1.60457 3.5 0.5 3.5H0V3V2.5H0.5C1.60457 2.5 2.5 1.60457 2.5 0.5Z"
                                            fill="currentColor"
                                        />
                                        <path
                                            d="M14.5 4.5V5H13.5V4.5C13.5 3.94772 13.0523 3.5 12.5 3.5H12V3V2.5H12.5C13.0523 2.5 13.5 2.05228 13.5 1.5V1H14H14.5V1.5C14.5 2.05228 14.9477 2.5 15.5 2.5H16V3V3.5H15.5C14.9477 3.5 14.5 3.94772 14.5 4.5Z"
                                            fill="currentColor"
                                        />
                                        <path
                                            d="M8.40706 4.92939L8.5 4H9.5L9.59294 4.92939C9.82973 7.29734 11.7027 9.17027 14.0706 9.40706L15 9.5V10.5L14.0706 10.5929C11.7027 10.8297 9.82973 12.7027 9.59294 15.0706L9.5 16H8.5L8.40706 15.0706C8.17027 12.7027 6.29734 10.8297 3.92939 10.5929L3 10.5V9.5L3.92939 9.40706C6.29734 9.17027 8.17027 7.29734 8.40706 4.92939Z"
                                            fill="currentColor"
                                        />
                                    </svg>{" "}
                                    AI SDK
                                </a>
                                <span>and</span>
                                <a
                                    //  // href="https://openrouter.ai/morph/morph-v2"
                                    className="inline-flex items-center gap-1 mx-2"
                                >
                                    <svg
                                        width={1110}
                                        height={169}
                                        viewBox="0 0 1110 169"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-auto text-brand-primary"
                                    >
                                        <g clipPath="url(#clip0_144_4)">
                                            <path
                                                d="M386.4 80.2C386.4 91.4 384.3 101 380.2 109C376.424 116.613 370.569 123.002 363.313 127.426C356.058 131.85 347.697 134.13 339.2 134C330.698 134.154 322.328 131.884 315.067 127.457C307.807 123.03 301.957 116.629 298.2 109C294 101 292 91.3 292 80.2C292 69 294 59.4 298.1 51.4C301.874 43.7635 307.742 37.358 315.019 32.9313C322.297 28.5046 330.683 26.2393 339.2 26.4C347.697 26.2704 356.058 28.5497 363.313 32.9739C370.569 37.3982 376.424 43.7867 380.2 51.4C384.3 59.4 386.4 69 386.4 80.2ZM370.7 80.2C370.7 71.7 369.3 64.5 366.6 58.6C364.204 53.1638 360.278 48.5424 355.3 45.3C350.6 42.3 345.2 40.8 339.2 40.8C333.481 40.7252 327.861 42.2865 323 45.3C318.3 48.3 314.6 52.8 311.8 58.6C309.1 64.5 307.7 71.6 307.7 80.2C307.7 88.7 309.1 95.9 311.8 101.7C314.174 107.12 318.063 111.739 323 115C327.8 118 333.2 119.6 339.2 119.6C345.2 119.6 350.6 118.1 355.3 115C360.1 112 363.8 107.6 366.6 101.7C369.3 95.9 370.7 88.7 370.7 80.2ZM404.7 162V54H419.7V66.7H421C421.9 65.1 423.1 63.2 424.8 61.1C427.033 58.3418 429.899 56.1646 433.156 54.7542C436.412 53.3437 439.961 52.7419 443.5 53C449.592 52.8907 455.578 54.6025 460.691 57.9162C465.804 61.23 469.812 65.9947 472.2 71.6C475.1 77.6 476.5 84.9 476.5 93.4C476.5 101.9 475.1 109.2 472.3 115.2C469.793 120.873 465.738 125.726 460.6 129.2C455.555 132.505 449.63 134.213 443.6 134.1C438.9 134.1 435 133.3 432 131.7C429.271 130.345 426.853 128.438 424.9 126.1C423.2 123.9 421.9 122 420.9 120.3H420.1V162H404.8M419.8 93.3C419.8 98.8 420.5 103.6 422.1 107.8C423.7 112 426.1 115.2 429.1 117.5C432.1 119.9 435.8 121 440.2 121C444.8 121 448.6 119.8 451.7 117.4C454.7 114.9 457.1 111.6 458.7 107.4C460.3 103.2 461.1 98.5 461.1 93.3C461.1 88.1 460.3 83.4 458.7 79.3C457.322 75.4747 454.896 72.1137 451.7 69.6C448.394 67.1144 444.333 65.8431 440.2 66C435.8 66 432.1 67.1 429 69.4C426 71.7 423.7 74.9 422 79C420.37 83.587 419.59 88.4331 419.7 93.3H419.8ZM527.4 134C519.6 134 513 132.4 507.4 129C501.8 125.7 497.5 121 494.5 115C491.5 109 490 101.8 490 93.7C490 85.7 491.5 78.6 494.5 72.4C497.308 66.51 501.707 61.5223 507.2 58C512.003 55.2241 517.349 53.5188 522.872 53.001C528.395 52.4833 533.965 53.1651 539.2 55C543.6 56.5785 547.59 59.1224 550.878 62.4449C554.166 65.7674 556.668 69.784 558.2 74.2C560.2 79.2 561.1 85.2 561.1 92.4V97.8H498.6V86.3H546.1C546.1 82.3 545.3 78.7 543.6 75.6C541.974 72.4757 539.494 69.8772 536.449 68.107C533.405 66.3367 529.92 65.4673 526.4 65.6C522.1 65.6 518.4 66.6 515.2 68.6C512.04 70.6877 509.464 73.546 507.714 76.9052C505.964 80.2644 505.099 84.0138 505.2 87.8V96.8C505.2 102 506.2 106.4 508 110.1C509.9 113.8 512.5 116.6 515.8 118.5C519.373 120.49 523.412 121.491 527.5 121.4C530.5 121.4 533.1 121 535.5 120.1C537.844 119.31 539.98 118.001 541.746 116.269C543.512 114.537 544.864 112.428 545.7 110.1L560.1 112.8C559 117.1 556.9 120.8 553.9 124C550.9 127.2 547.2 129.6 542.7 131.4C537.808 133.216 532.618 134.098 527.4 134ZM593.4 85.8V132.5H578.1V54H593V66.8H594C595.8 62.6 598.6 59.3 602.5 56.8C606.3 54.2 611.2 53 617.1 53C622.5 53 627.1 54.1 631.1 56.3C635.2 58.6 638.3 61.9 640.5 66.3C642.892 71.393 644.056 76.9756 643.9 82.6V132.6H628.6V84.4C628.853 79.5547 627.243 74.7961 624.1 71.1C621.1 67.8 617.1 66.2 611.9 66.2C608.621 66.1425 605.382 66.9348 602.5 68.5C599.716 70.0833 597.456 72.4472 596 75.3C594.318 78.5741 593.492 82.2207 593.6 85.9L593.4 85.8ZM665.4 132.5V27.8H702.7C710.7 27.8 717.5 29.2 722.9 32C728.3 34.8 732.3 38.7 734.9 43.6C737.648 48.8376 739.025 54.6864 738.9 60.6C738.9 67.1 737.6 72.7 734.9 77.6C732.16 82.5131 727.969 86.4597 722.9 88.9C717.5 91.6 710.7 92.9 702.6 92.9H674.4V79.3H701.2C706.3 79.3 710.5 78.6 713.7 77.1C716.9 75.7 719.3 73.5 720.7 70.7C722.282 67.6081 723.072 64.1722 723 60.7C723 56.7 722.3 53.3 720.8 50.4C719.234 47.4467 716.739 45.0919 713.7 43.7C709.69 41.9989 705.352 41.2131 701 41.4H681.1V132.6H665.4M717.1 85.3L742.9 132.6H724.9L699.6 85.3H717.1ZM790.1 134.1C783.477 134.356 776.924 132.676 771.24 129.266C765.557 125.856 760.991 120.864 758.1 114.9C754.919 108.258 753.344 100.962 753.5 93.6C753.5 85.5 755 78.4 758 72.3C760.876 66.3175 765.437 61.3046 771.121 57.8762C776.805 54.4479 783.366 52.7532 790 53C796.634 52.7532 803.195 54.4479 808.879 57.8762C814.563 61.3046 819.124 66.3175 822 72.3C825.29 78.9071 826.904 86.222 826.7 93.6C826.857 100.962 825.281 108.258 822.1 114.9C819.209 120.864 814.643 125.856 808.96 129.266C803.276 132.676 796.723 134.356 790.1 134.1ZM790.1 121.3C794.9 121.3 798.9 120 802 117.5C805.1 115 807.4 111.6 809 107.5C810.521 102.992 811.265 98.2576 811.2 93.5C811.2 88.5 810.5 84 809 79.7C807.635 75.7561 805.214 72.2626 802 69.6C798.606 66.9691 794.391 65.6231 790.1 65.8C785.3 65.8 781.3 67 778.1 69.6C775.1 72.2 772.7 75.6 771.1 79.8C769.573 84.2378 768.828 88.9073 768.9 93.6C768.9 98.6 769.7 103.2 771.2 107.4C772.7 111.6 775 115 778.2 117.5C781.3 120 785.3 121.3 790.2 121.3H790.1ZM893.6 100V54H908.9V132.6H893.9V118.9H893.1C891.137 123.445 887.837 127.285 883.64 129.911C879.443 132.537 874.546 133.823 869.6 133.6C864.908 133.697 860.278 132.522 856.2 130.2C852.27 127.838 849.136 124.356 847.2 120.2C844.834 115.134 843.671 109.59 843.8 104V54H859.1V102.1C858.846 106.777 860.424 111.368 863.5 114.9C866.5 118.1 870.4 119.7 875.1 119.7C878.231 119.656 881.303 118.839 884.042 117.321C886.781 115.803 889.103 113.632 890.8 111C892.7 108.1 893.6 104.4 893.6 100ZM966.1 54V66.3H923.1V54H966.1ZM934.7 35.2H950V109.5C950 112.5 950.4 114.7 951.3 116.2C952.2 117.6 953.3 118.7 954.8 119.2C956.2 119.7 957.8 120 959.4 120C961.204 119.794 963.004 119.561 964.8 119.3L967.5 131.9C964.303 133.089 960.91 133.665 957.5 133.6C953.5 133.6 949.8 132.9 946.3 131.4C942.884 129.925 939.967 127.494 937.9 124.4C935.8 121.4 934.7 117.4 934.7 112.7V35.2ZM1016.8 134.2C1009.1 134.2 1002.4 132.5 996.8 129.2C991.3 125.8 987 121.2 984 115.1C981 109.1 979.4 101.9 979.4 93.8C979.244 86.4377 980.819 79.1416 984 72.5C987 66.4 991.2 61.5 996.6 58.1C1001.4 55.3241 1006.75 53.6188 1012.27 53.1011C1017.8 52.5833 1023.36 53.2651 1028.6 55.1C1033 56.6785 1036.99 59.2224 1040.28 62.5449C1043.57 65.8674 1046.07 69.884 1047.6 74.3C1049.6 79.3 1050.6 85.3 1050.6 92.5V97.9H988V86.4H1035.4C1035.4 82.4 1034.6 78.8 1033 75.7C1031.36 72.5677 1028.86 69.9655 1025.8 68.1955C1022.74 66.4255 1019.23 65.5601 1015.7 65.7C1011.4 65.7 1007.7 66.7 1004.5 68.7C1001.4 70.8387 998.871 73.7101 997.144 77.0593C995.417 80.4085 994.543 84.1322 994.6 87.9V96.9C994.6 102.1 995.5 106.5 997.4 110.2C999.2 113.9 1001.8 116.7 1005.2 118.6C1008.77 120.59 1012.81 121.591 1016.9 121.5C1019.59 121.512 1022.26 121.073 1024.8 120.2C1027.12 119.402 1029.24 118.101 1031.01 116.389C1032.77 114.678 1034.13 112.599 1035 110.3L1049.4 112.9C1048.3 117.092 1046.17 120.942 1043.2 124.1C1040.07 127.381 1036.24 129.911 1032 131.5C1027.11 133.319 1021.92 134.201 1016.7 134.1L1016.8 134.2ZM1067.5 132.6V54H1082.3V66.5H1083.1C1084.6 62.3 1087.1 58.9 1090.7 56.5C1094.4 54 1098.5 52.8 1103.1 52.8C1105.27 52.8294 1107.44 52.9629 1109.6 53.2V67.8C1106.99 67.1297 1104.3 66.7937 1101.6 66.8C1098.25 66.7832 1094.95 67.6085 1092 69.2C1089.2 70.672 1086.86 72.8885 1085.23 75.6056C1083.61 78.3228 1082.77 81.4351 1082.8 84.6V132.6H1067.5Z"
                                                fill="currentColor"
                                            />
                                            <path
                                                d="M1.19922 84.5C7.09922 84.5 29.7992 79.4 41.4992 72.7C53.2992 66.1 53.2992 66.1 77.5992 48.8C108.399 27 130.099 34.3 165.799 34.3"
                                                fill="currentColor"
                                            />
                                            <path
                                                d="M1.19922 84.5C7.09922 84.5 29.7992 79.4 41.4992 72.7C53.2992 66.1 53.2992 66.1 77.5992 48.8C108.399 27 130.099 34.3 165.799 34.3"
                                                stroke="currentColor"
                                                strokeWidth="35.3"
                                            />
                                            <path
                                                d="M200.3 34.5L140 69.3V-0.299988L200.3 34.5Z"
                                                fill="currentColor"
                                                stroke="currentColor"
                                                strokeWidth="0.4"
                                            />
                                            <path
                                                d="M0 84.5C5.9 84.5 28.6 89.5 40.4 96.2C52.1 102.9 52.1 102.9 76.4 120.2C107.2 142 128.9 134.7 164.6 134.7"
                                                fill="currentColor"
                                            />
                                            <path
                                                d="M0 84.5C5.9 84.5 28.6 89.5 40.4 96.2C52.1 102.9 52.1 102.9 76.4 120.2C107.2 142 128.9 134.7 164.6 134.7"
                                                stroke="currentColor"
                                                strokeWidth="35.3"
                                            />
                                            <path
                                                d="M199.101 134.4L138.801 99.7V169.2L199.101 134.4Z"
                                                fill="currentColor"
                                                stroke="currentColor"
                                                strokeWidth="0.4"
                                            />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_144_4">
                                                <rect width={1110} height={169} fill="white" />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </a>
                            </p>
                        </div>
                        <div className="w-full">
                            <div dir="ltr" data-orientation="horizontal" className="w-full">
                                <div className="relative w-full aspect-[1442/1026] rounded-lg overflow-hidden shadow-[0px_100px_191px_rgba(150,255,31,0.08),0px_36px_70px_rgba(150,255,31,0.05),0px_18px_34px_rgba(150,255,31,0.04),0px_9px_17px_rgba(150,255,31,0.03)]">
                                    <svg
                                        viewBox="0 0 1442 1026"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-full h-full"
                                    >
                                        <rect
                                            x={1}
                                            y={1}
                                            width={1440}
                                            height={1024}
                                            rx={8}
                                            fill="#0D0C14"
                                        />
                                        <rect
                                            x="0.5"
                                            y="0.5"
                                            width={1441}
                                            height={1025}
                                            rx="8.5"
                                            stroke="white"
                                            strokeOpacity="0.125"
                                        />
                                        <defs>
                                            <pattern
                                                id="dotPattern"
                                                width={24}
                                                height={24}
                                                patternUnits="userSpaceOnUse"
                                            >
                                                <circle cx={1} cy={1} r={1} fill="white" fillOpacity="0.06" />
                                            </pattern>
                                            <clipPath id="bgClip">
                                                <rect x={1} y={62} width={1440} height={962} />
                                            </clipPath>
                                        </defs>
                                        <g clipPath="url(#bgClip)">
                                            <rect width="100%" height="100%" fill="url(#dotPattern)" />
                                        </g>
                                        <g id="header">
                                            <g transform="translate(25, 20)">
                                                <rect
                                                    width={32}
                                                    height={32}
                                                    rx={6}
                                                    fill="#96FF1F"
                                                    fillOpacity="0.1"
                                                />
                                                <text
                                                    x={16}
                                                    y={22}
                                                    textAnchor="middle"
                                                    fill="#96FF1F"
                                                    fontSize={16}
                                                    fontWeight="bold"
                                                    fontFamily="system-ui"
                                                >
                                                    M
                                                </text>
                                            </g>
                                            <text
                                                x={77}
                                                y={40}
                                                fill="#F7F7F8"
                                                fontSize={16}
                                                fontWeight={500}
                                                fontFamily="system-ui"
                                            >
                                                morph-project
                                            </text>
                                            <path
                                                d="M175 29L179 33L183 29"
                                                stroke="#A1A0AB"
                                                strokeWidth="1.5"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                            <text
                                                x={201}
                                                y={40}
                                                fill="#868593"
                                                fontSize={14}
                                                fontFamily="system-ui"
                                            >
                                                /
                                            </text>
                                            <text
                                                x={220}
                                                y={40}
                                                fill="#F7F7F8"
                                                fontSize={16}
                                                fontWeight={500}
                                                fontFamily="system-ui"
                                            >
                                                production
                                            </text>
                                            <g transform="translate(900, 0)">
                                                <text
                                                    x={0}
                                                    y={40}
                                                    fill="#F7F7F8"
                                                    fontSize={14}
                                                    fontWeight={500}
                                                    fontFamily="system-ui"
                                                >
                                                    Playground
                                                </text>
                                                <text
                                                    x={100}
                                                    y={40}
                                                    fill="#868593"
                                                    fontSize={14}
                                                    fontWeight={500}
                                                    fontFamily="system-ui"
                                                >
                                                    API
                                                </text>
                                                <text
                                                    x={200}
                                                    y={40}
                                                    fill="#868593"
                                                    fontSize={14}
                                                    fontWeight={500}
                                                    fontFamily="system-ui"
                                                >
                                                    Docs
                                                </text>
                                                <text
                                                    x={300}
                                                    y={40}
                                                    fill="#868593"
                                                    fontSize={14}
                                                    fontWeight={500}
                                                    fontFamily="system-ui"
                                                >
                                                    Settings
                                                </text>
                                            </g>
                                            <circle cx={1390} cy={31} r={14} fill="url(#avatarGradient)" />
                                            <defs>
                                                <linearGradient
                                                    id="avatarGradient"
                                                    x1={1376}
                                                    y1={17}
                                                    x2={1404}
                                                    y2={45}
                                                >
                                                    <stop stopColor="#96FF1F" />
                                                    <stop offset={1} stopColor="#5D9E14" />
                                                </linearGradient>
                                            </defs>
                                        </g>
                                        <rect
                                            x={1}
                                            y={61}
                                            width={1440}
                                            height={1}
                                            fill="white"
                                            fillOpacity="0.075"
                                        />
                                        <g opacity="0.8384994178486522">
                                            <g transform="translate(60, 80)">
                                                <rect
                                                    width={1320}
                                                    height={830}
                                                    rx={8}
                                                    fill="#181622"
                                                    stroke="#33323E"
                                                />
                                                <rect width={1320} height={36} rx={8} fill="#1E1C2A" />
                                                <rect y={28} width={1320} height={8} fill="#1E1C2A" />
                                                <circle
                                                    cx={20}
                                                    cy={18}
                                                    r={4}
                                                    fill="#FF5F57"
                                                    fillOpacity="0.6"
                                                />
                                                <circle
                                                    cx={36}
                                                    cy={18}
                                                    r={4}
                                                    fill="#FEBC2E"
                                                    fillOpacity="0.6"
                                                />
                                                <circle
                                                    cx={52}
                                                    cy={18}
                                                    r={4}
                                                    fill="#28C840"
                                                    fillOpacity="0.6"
                                                />
                                                <text
                                                    x={80}
                                                    y={23}
                                                    fill="#F7F7F8"
                                                    fontSize={13}
                                                    fontFamily="monospace"
                                                >
                                                    src/components/DataTable.tsx
                                                </text>
                                                <g transform="translate(16, 52)">
                                                    <g transform="translate(0, 0)" opacity={1}>
                                                        <text
                                                            x={0}
                                                            y={14}
                                                            fill="#535260"
                                                            fontSize={13}
                                                            fontFamily="monospace"
                                                        >
                                                            {" "}
                                                            1
                                                        </text>
                                                        <text x={50} y={14} fontSize={13} fontFamily="monospace">
                                                            <tspan fill="#C586C0">export function </tspan>
                                                            <tspan fill="#DCDCAA">DataTable</tspan>
                                                            <tspan fill="#D4D4D4">
                                                                ({"{"} data, columns {"}"}) {"{"}
                                                            </tspan>
                                                        </text>
                                                    </g>
                                                    <g transform="translate(0, 28)" opacity={1}>
                                                        <text
                                                            x={0}
                                                            y={14}
                                                            fill="#535260"
                                                            fontSize={13}
                                                            fontFamily="monospace"
                                                        >
                                                            {" "}
                                                            2
                                                        </text>
                                                        <text x={50} y={14} fontSize={13} fontFamily="monospace">
                                                            <tspan fill="#C586C0"> const </tspan>
                                                            <tspan fill="#9CDCFE">[page, setPage]</tspan>
                                                            <tspan fill="#D4D4D4"> = useState(1)</tspan>
                                                        </text>
                                                    </g>
                                                    <g transform="translate(0, 56)" opacity={1}>
                                                        <text
                                                            x={0}
                                                            y={14}
                                                            fill="#535260"
                                                            fontSize={13}
                                                            fontFamily="monospace"
                                                        >
                                                            {" "}
                                                            3
                                                        </text>
                                                        <text x={50} y={14} fontSize={13} fontFamily="monospace">
                                                            <tspan fill="#C586C0"> const </tspan>
                                                            <tspan fill="#9CDCFE">[sort, setSort]</tspan>
                                                            <tspan fill="#D4D4D4"> = useState(null)</tspan>
                                                        </text>
                                                    </g>
                                                    <g transform="translate(0, 84)" opacity="0.1">
                                                        <text
                                                            x={0}
                                                            y={14}
                                                            fill="#535260"
                                                            fontSize={13}
                                                            fontFamily="monospace"
                                                        >
                                                            {" "}
                                                            4
                                                        </text>
                                                        <text x={50} y={14} fontSize={13} fontFamily="monospace">
                                                            <tspan fill="#96FF1F"> const </tspan>
                                                            <tspan fill="#96FF1F">
                                                                [search, setSearch] = useState("")
                                                            </tspan>
                                                        </text>
                                                    </g>
                                                    <g transform="translate(0, 112)" opacity={1}>
                                                        <text
                                                            x={0}
                                                            y={14}
                                                            fill="#535260"
                                                            fontSize={13}
                                                            fontFamily="monospace"
                                                        >
                                                            {" "}
                                                            5
                                                        </text>
                                                        <text
                                                            x={50}
                                                            y={14}
                                                            fontSize={13}
                                                            fontFamily="monospace"
                                                        />
                                                    </g>
                                                    <g transform="translate(0, 140)" opacity="0.1">
                                                        <text
                                                            x={0}
                                                            y={14}
                                                            fill="#535260"
                                                            fontSize={13}
                                                            fontFamily="monospace"
                                                        >
                                                            {" "}
                                                            6
                                                        </text>
                                                        <text x={50} y={14} fontSize={13} fontFamily="monospace">
                                                            <tspan fill="#96FF1F">
                                                                {" "}
                                                                const filtered = useMemo(() =&gt; {"{"}
                                                            </tspan>
                                                        </text>
                                                    </g>
                                                    <g transform="translate(0, 168)" opacity="0.1">
                                                        <text
                                                            x={0}
                                                            y={14}
                                                            fill="#535260"
                                                            fontSize={13}
                                                            fontFamily="monospace"
                                                        >
                                                            {" "}
                                                            7
                                                        </text>
                                                        <text x={50} y={14} fontSize={13} fontFamily="monospace">
                                                            <tspan fill="#96FF1F"> if (!search) return data</tspan>
                                                        </text>
                                                    </g>
                                                    <g transform="translate(0, 196)" opacity="0.1">
                                                        <text
                                                            x={0}
                                                            y={14}
                                                            fill="#535260"
                                                            fontSize={13}
                                                            fontFamily="monospace"
                                                        >
                                                            {" "}
                                                            8
                                                        </text>
                                                        <text x={50} y={14} fontSize={13} fontFamily="monospace">
                                                            <tspan fill="#96FF1F">
                                                                {" "}
                                                                return data.filter(row =&gt;
                                                            </tspan>
                                                        </text>
                                                    </g>
                                                    <g transform="translate(0, 224)" opacity="0.1">
                                                        <text
                                                            x={0}
                                                            y={14}
                                                            fill="#535260"
                                                            fontSize={13}
                                                            fontFamily="monospace"
                                                        >
                                                            {" "}
                                                            9
                                                        </text>
                                                        <text x={50} y={14} fontSize={13} fontFamily="monospace">
                                                            <tspan fill="#96FF1F">
                                                                {" "}
                                                                columns.some(c =&gt;
                                                                String(row[c.key]).includes(search))
                                                            </tspan>
                                                        </text>
                                                    </g>
                                                    <g transform="translate(0, 252)" opacity="0.1">
                                                        <text
                                                            x={0}
                                                            y={14}
                                                            fill="#535260"
                                                            fontSize={13}
                                                            fontFamily="monospace"
                                                        >
                                                            10
                                                        </text>
                                                        <text x={50} y={14} fontSize={13} fontFamily="monospace">
                                                            <tspan fill="#96FF1F"> )</tspan>
                                                        </text>
                                                    </g>
                                                    <g transform="translate(0, 280)" opacity="0.1">
                                                        <text
                                                            x={0}
                                                            y={14}
                                                            fill="#535260"
                                                            fontSize={13}
                                                            fontFamily="monospace"
                                                        >
                                                            11
                                                        </text>
                                                        <text x={50} y={14} fontSize={13} fontFamily="monospace">
                                                            <tspan fill="#96FF1F">
                                                                {" "}
                                                                {"}"}, [data, columns, search])
                                                            </tspan>
                                                        </text>
                                                    </g>
                                                    <g transform="translate(0, 308)" opacity={1}>
                                                        <text
                                                            x={0}
                                                            y={14}
                                                            fill="#535260"
                                                            fontSize={13}
                                                            fontFamily="monospace"
                                                        >
                                                            12
                                                        </text>
                                                        <text
                                                            x={50}
                                                            y={14}
                                                            fontSize={13}
                                                            fontFamily="monospace"
                                                        />
                                                    </g>
                                                    <g transform="translate(0, 336)" opacity={1}>
                                                        <text
                                                            x={0}
                                                            y={14}
                                                            fill="#535260"
                                                            fontSize={13}
                                                            fontFamily="monospace"
                                                        >
                                                            13
                                                        </text>
                                                        <text x={50} y={14} fontSize={13} fontFamily="monospace">
                                                            <tspan fill="#C586C0"> const </tspan>
                                                            <tspan fill="#9CDCFE">sortedData</tspan>
                                                            <tspan fill="#D4D4D4"> = useMemo(() =&gt; {"{"}</tspan>
                                                        </text>
                                                    </g>
                                                    <g transform="translate(0, 364)" opacity={1}>
                                                        <text
                                                            x={0}
                                                            y={14}
                                                            fill="#535260"
                                                            fontSize={13}
                                                            fontFamily="monospace"
                                                        >
                                                            14
                                                        </text>
                                                        <text x={50} y={14} fontSize={13} fontFamily="monospace">
                                                            <tspan fill="#6A9955"> // sorting logic...</tspan>
                                                        </text>
                                                    </g>
                                                    <g transform="translate(0, 392)" opacity={1}>
                                                        <text
                                                            x={0}
                                                            y={14}
                                                            fill="#535260"
                                                            fontSize={13}
                                                            fontFamily="monospace"
                                                        >
                                                            15
                                                        </text>
                                                        <text x={50} y={14} fontSize={13} fontFamily="monospace">
                                                            <tspan fill="#D4D4D4"> {"}"}, [filtered, sort])</tspan>
                                                        </text>
                                                    </g>
                                                    <g transform="translate(0, 420)" opacity={1}>
                                                        <text
                                                            x={0}
                                                            y={14}
                                                            fill="#535260"
                                                            fontSize={13}
                                                            fontFamily="monospace"
                                                        >
                                                            16
                                                        </text>
                                                        <text
                                                            x={50}
                                                            y={14}
                                                            fontSize={13}
                                                            fontFamily="monospace"
                                                        />
                                                    </g>
                                                    <g transform="translate(0, 448)" opacity={1}>
                                                        <text
                                                            x={0}
                                                            y={14}
                                                            fill="#535260"
                                                            fontSize={13}
                                                            fontFamily="monospace"
                                                        >
                                                            17
                                                        </text>
                                                        <text x={50} y={14} fontSize={13} fontFamily="monospace">
                                                            <tspan fill="#C586C0"> return (</tspan>
                                                        </text>
                                                    </g>
                                                    <g transform="translate(0, 476)" opacity={1}>
                                                        <text
                                                            x={0}
                                                            y={14}
                                                            fill="#535260"
                                                            fontSize={13}
                                                            fontFamily="monospace"
                                                        >
                                                            18
                                                        </text>
                                                        <text x={50} y={14} fontSize={13} fontFamily="monospace">
                                                            <tspan fill="#D4D4D4"> &lt;</tspan>
                                                            <tspan fill="#4EC9B0">div</tspan>
                                                            <tspan fill="#9CDCFE"> className=</tspan>
                                                            <tspan fill="#CE9178">"p-4"</tspan>
                                                            <tspan fill="#D4D4D4">&gt;</tspan>
                                                        </text>
                                                    </g>
                                                    <g transform="translate(0, 504)" opacity="0.1">
                                                        <text
                                                            x={0}
                                                            y={14}
                                                            fill="#535260"
                                                            fontSize={13}
                                                            fontFamily="monospace"
                                                        >
                                                            19
                                                        </text>
                                                        <text x={50} y={14} fontSize={13} fontFamily="monospace">
                                                            <tspan fill="#96FF1F">
                                                                {" "}
                                                                &lt;input placeholder="Search..." value={"{"}search
                                                                {"}"}
                                                            </tspan>
                                                        </text>
                                                    </g>
                                                    <g transform="translate(0, 532)" opacity="0.1">
                                                        <text
                                                            x={0}
                                                            y={14}
                                                            fill="#535260"
                                                            fontSize={13}
                                                            fontFamily="monospace"
                                                        >
                                                            20
                                                        </text>
                                                        <text x={50} y={14} fontSize={13} fontFamily="monospace">
                                                            <tspan fill="#96FF1F">
                                                                {" "}
                                                                onChange={"{"}e =&gt; setSearch(e.target.value){"}"}{" "}
                                                                /&gt;
                                                            </tspan>
                                                        </text>
                                                    </g>
                                                    <g transform="translate(0, 560)" opacity={1}>
                                                        <text
                                                            x={0}
                                                            y={14}
                                                            fill="#535260"
                                                            fontSize={13}
                                                            fontFamily="monospace"
                                                        >
                                                            21
                                                        </text>
                                                        <text x={50} y={14} fontSize={13} fontFamily="monospace">
                                                            <tspan fill="#D4D4D4"> &lt;</tspan>
                                                            <tspan fill="#4EC9B0">table</tspan>
                                                            <tspan fill="#D4D4D4">&gt;</tspan>
                                                        </text>
                                                    </g>
                                                    <g transform="translate(0, 588)" opacity={1}>
                                                        <text
                                                            x={0}
                                                            y={14}
                                                            fill="#535260"
                                                            fontSize={13}
                                                            fontFamily="monospace"
                                                        >
                                                            22
                                                        </text>
                                                        <text x={50} y={14} fontSize={13} fontFamily="monospace">
                                                            <tspan fill="#6A9955">
                                                                {" "}
                                                                {"{"}/* table content */{"}"}
                                                            </tspan>
                                                        </text>
                                                    </g>
                                                    <g transform="translate(0, 616)" opacity={1}>
                                                        <text
                                                            x={0}
                                                            y={14}
                                                            fill="#535260"
                                                            fontSize={13}
                                                            fontFamily="monospace"
                                                        >
                                                            23
                                                        </text>
                                                        <text x={50} y={14} fontSize={13} fontFamily="monospace">
                                                            <tspan fill="#D4D4D4"> &lt;/</tspan>
                                                            <tspan fill="#4EC9B0">table</tspan>
                                                            <tspan fill="#D4D4D4">&gt;</tspan>
                                                        </text>
                                                    </g>
                                                    <g transform="translate(0, 644)" opacity={1}>
                                                        <text
                                                            x={0}
                                                            y={14}
                                                            fill="#535260"
                                                            fontSize={13}
                                                            fontFamily="monospace"
                                                        >
                                                            24
                                                        </text>
                                                        <text x={50} y={14} fontSize={13} fontFamily="monospace">
                                                            <tspan fill="#D4D4D4"> &lt;</tspan>
                                                            <tspan fill="#4EC9B0">Pagination</tspan>
                                                            <tspan fill="#D4D4D4">
                                                                {" "}
                                                                page={"{"}page{"}"} /&gt;
                                                            </tspan>
                                                        </text>
                                                    </g>
                                                    <g transform="translate(0, 672)" opacity={1}>
                                                        <text
                                                            x={0}
                                                            y={14}
                                                            fill="#535260"
                                                            fontSize={13}
                                                            fontFamily="monospace"
                                                        >
                                                            25
                                                        </text>
                                                        <text x={50} y={14} fontSize={13} fontFamily="monospace">
                                                            <tspan fill="#D4D4D4"> &lt;/</tspan>
                                                            <tspan fill="#4EC9B0">div</tspan>
                                                            <tspan fill="#D4D4D4">&gt;</tspan>
                                                        </text>
                                                    </g>
                                                    <g transform="translate(0, 700)" opacity={1}>
                                                        <text
                                                            x={0}
                                                            y={14}
                                                            fill="#535260"
                                                            fontSize={13}
                                                            fontFamily="monospace"
                                                        >
                                                            26
                                                        </text>
                                                        <text x={50} y={14} fontSize={13} fontFamily="monospace">
                                                            <tspan fill="#D4D4D4"> )</tspan>
                                                        </text>
                                                    </g>
                                                    <g transform="translate(0, 728)" opacity={1}>
                                                        <text
                                                            x={0}
                                                            y={14}
                                                            fill="#535260"
                                                            fontSize={13}
                                                            fontFamily="monospace"
                                                        >
                                                            27
                                                        </text>
                                                        <text x={50} y={14} fontSize={13} fontFamily="monospace">
                                                            <tspan fill="#D4D4D4">{"}"}</tspan>
                                                        </text>
                                                    </g>
                                                </g>
                                            </g>
                                            <g transform="translate(60, 920)">
                                                <text fill="#535260" fontSize={14} fontFamily="monospace">
                                                    <tspan fill="#535260">Ready</tspan>
                                                    <tspan fill="#33323E"> · </tspan>
                                                    <tspan fill="#96FF1F">10,500</tspan>
                                                    <tspan fill="#868593"> tok/s</tspan>
                                                    <tspan fill="#33323E"> · </tspan>
                                                    <tspan fill="#F7F7F8">500ms</tspan>
                                                    <tspan fill="#33323E"> · </tspan>
                                                    <tspan fill="#96FF1F">98%</tspan>
                                                    <tspan fill="#868593"> accuracy</tspan>
                                                </text>
                                            </g>
                                        </g>
                                        <g id="bottom-bar" transform="translate(0, 977)">
                                            <rect
                                                x={1097}
                                                y={0}
                                                width={344}
                                                height={48}
                                                rx={8}
                                                fill="#13111C"
                                            />
                                            <rect
                                                x="1097.5"
                                                y="0.5"
                                                width={343}
                                                height={47}
                                                rx="7.5"
                                                stroke="white"
                                                strokeOpacity="0.075"
                                            />
                                            <path
                                                d="M1139 24H1136L1133.5 31.5L1128.5 16.5L1126 24H1123"
                                                stroke="#868593"
                                                strokeWidth="1.5"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                opacity="0.5"
                                            />
                                            <text
                                                x={1157}
                                                y={28}
                                                fill="#F7F7F8"
                                                fontSize={14}
                                                fontFamily="system-ui"
                                            >
                                                Activity
                                            </text>
                                            <path
                                                d="M1389 26L1385 22L1381 26"
                                                stroke="#868593"
                                                strokeWidth="1.5"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </g>
                                    </svg>
                                </div>
                                <div
                                    role="tablist"
                                    aria-orientation="horizontal"
                                    className="relative mx-auto max-w-full hidden md:flex items-center z-10 justify-center p-1 rounded-lg bg-background border border-white/5 shadow-[0_-12px_127px_0_rgba(150,255,31,0.06),0_-4px_46px_0_rgba(150,255,31,0.04)] gap-0.5 -translate-y-4 flex-wrap"
                                    tabIndex={0}
                                    data-orientation="horizontal"
                                    style={{ outline: "none" }}
                                >
                                    <button
                                        type="button"
                                        role="tab"
                                        aria-selected="true"
                                        aria-controls="radix-_R_4tbt9tb_-content-fast-apply"
                                        data-state="active"
                                        id="radix-_R_4tbt9tb_-trigger-fast-apply"
                                        className="relative overflow-hidden rounded-lg min-w-fit focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary/30 bg-brand-primary/10"
                                        tabIndex={-1}
                                        data-orientation="horizontal"
                                        data-radix-collection-item=""
                                    >
                                        <div className="absolute inset-0 overflow-hidden rounded-lg">
                                            <div
                                                className="h-full transition-transform duration-150 ease-out bg-brand-primary/20"
                                                style={{ transform: "translateX(-91.25%)" }}
                                            />
                                        </div>
                                        <div className="relative z-10 flex items-center justify-center gap-1.5 px-2.5 py-1">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width={24}
                                                height={24}
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth={2}
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                className="lucide lucide-rocket w-3 h-3 text-brand-primary"
                                                aria-hidden="true"
                                            >
                                                <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
                                                <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
                                                <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
                                                <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
                                            </svg>
                                            <span className="font-medium text-xs text-brand-primary">
                                                Fast Apply
                                            </span>
                                        </div>
                                    </button>
                                    <div className="h-4 w-px bg-white/10 hidden sm:block" />
                                    <button
                                        type="button"
                                        role="tab"
                                        aria-selected="false"
                                        aria-controls="radix-_R_4tbt9tb_-content-warpgrep"
                                        data-state="inactive"
                                        id="radix-_R_4tbt9tb_-trigger-warpgrep"
                                        className="relative overflow-hidden rounded-lg min-w-fit focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary/30"
                                        tabIndex={-1}
                                        data-orientation="horizontal"
                                        data-radix-collection-item=""
                                    >
                                        <div className="absolute inset-0 overflow-hidden rounded-lg">
                                            <div
                                                className="h-full transition-transform duration-150 ease-out bg-transparent"
                                                style={{ transform: "translateX(-100%)" }}
                                            />
                                        </div>
                                        <div className="relative z-10 flex items-center justify-center gap-1.5 px-2.5 py-1">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width={24}
                                                height={24}
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth={2}
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                className="lucide lucide-network w-3 h-3 text-gray-400"
                                                aria-hidden="true"
                                            >
                                                <rect x={16} y={16} width={6} height={6} rx={1} />
                                                <rect x={2} y={16} width={6} height={6} rx={1} />
                                                <rect x={9} y={2} width={6} height={6} rx={1} />
                                                <path d="M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3" />
                                                <path d="M12 12V8" />
                                            </svg>
                                            <span className="font-medium text-xs text-gray-500">
                                                WarpGrep
                                            </span>
                                        </div>
                                    </button>
                                    <div className="h-4 w-px bg-white/10 hidden sm:block" />
                                    <button
                                        type="button"
                                        role="tab"
                                        aria-selected="false"
                                        aria-controls="radix-_R_4tbt9tb_-content-accelerated-inference"
                                        data-state="inactive"
                                        id="radix-_R_4tbt9tb_-trigger-accelerated-inference"
                                        className="relative overflow-hidden rounded-lg min-w-fit focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary/30"
                                        tabIndex={-1}
                                        data-orientation="horizontal"
                                        data-radix-collection-item=""
                                    >
                                        <div className="absolute inset-0 overflow-hidden rounded-lg">
                                            <div
                                                className="h-full transition-transform duration-150 ease-out bg-transparent"
                                                style={{ transform: "translateX(-100%)" }}
                                            />
                                        </div>
                                        <div className="relative z-10 flex items-center justify-center gap-1.5 px-2.5 py-1">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width={24}
                                                height={24}
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth={2}
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                className="lucide lucide-gauge w-3 h-3 text-gray-400"
                                                aria-hidden="true"
                                            >
                                                <path d="m12 14 4-4" />
                                                <path d="M3.34 19a10 10 0 1 1 17.32 0" />
                                            </svg>
                                            <span className="font-medium text-xs text-gray-500">
                                                Inference
                                            </span>
                                        </div>
                                    </button>
                                    <div className="h-4 w-px bg-white/10 hidden sm:block" />
                                    <button
                                        type="button"
                                        role="tab"
                                        aria-selected="false"
                                        aria-controls="radix-_R_4tbt9tb_-content-integrate"
                                        data-state="inactive"
                                        id="radix-_R_4tbt9tb_-trigger-integrate"
                                        className="relative overflow-hidden rounded-lg min-w-fit focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary/30"
                                        tabIndex={-1}
                                        data-orientation="horizontal"
                                        data-radix-collection-item=""
                                    >
                                        <div className="absolute inset-0 overflow-hidden rounded-lg">
                                            <div
                                                className="h-full transition-transform duration-150 ease-out bg-transparent"
                                                style={{ transform: "translateX(-100%)" }}
                                            />
                                        </div>
                                        <div className="relative z-10 flex items-center justify-center gap-1.5 px-2.5 py-1">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width={24}
                                                height={24}
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth={2}
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                className="lucide lucide-cloud w-3 h-3 text-gray-400"
                                                aria-hidden="true"
                                            >
                                                <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
                                            </svg>
                                            <span className="font-medium text-xs text-gray-500">
                                                Integrate &amp; Monitor
                                            </span>
                                        </div>
                                    </button>
                                </div>
                                <div className="md:hidden flex justify-center gap-2 -translate-y-3">
                                    <button className="relative h-1 w-12 rounded-full bg-white/10 overflow-hidden">
                                        <div
                                            className="absolute inset-y-0 left-0 bg-brand-primary rounded-full transition-all duration-150"
                                            style={{ width: "8.75%" }}
                                        />
                                    </button>
                                    <button className="relative h-1 w-12 rounded-full bg-white/10 overflow-hidden">
                                        <div
                                            className="absolute inset-y-0 left-0 bg-brand-primary rounded-full transition-all duration-150"
                                            style={{ width: "0%" }}
                                        />
                                    </button>
                                    <button className="relative h-1 w-12 rounded-full bg-white/10 overflow-hidden">
                                        <div
                                            className="absolute inset-y-0 left-0 bg-brand-primary rounded-full transition-all duration-150"
                                            style={{ width: "0%" }}
                                        />
                                    </button>
                                    <button className="relative h-1 w-12 rounded-full bg-white/10 overflow-hidden">
                                        <div
                                            className="absolute inset-y-0 left-0 bg-brand-primary rounded-full transition-all duration-150"
                                            style={{ width: "0%" }}
                                        />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="py-32">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-display-3 lg:text-display-2 font-geist-circle font-medium mb-6 lg:leading-tight">
                            <span className="text-brand-primary">Deploy anywhere. </span>Our cloud
                            or yours.
                        </h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-4 border border-white/10 rounded-lg mb-16">
                        <div className="flex flex-col items-center justify-center text-center gap-2 p-6 border-b md:border-b-0 md:border-r border-white/10">
                            <div className="w-6 h-6 text-white flex items-center justify-center mb-2">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={24}
                                    height={24}
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="lucide lucide-server w-full h-full"
                                    aria-hidden="true"
                                >
                                    <rect width={20} height={8} x={2} y={2} rx={2} ry={2} />
                                    <rect width={20} height={8} x={2} y={14} rx={2} ry={2} />
                                    <line x1={6} x2="6.01" y1={6} y2={6} />
                                    <line x1={6} x2="6.01" y1={18} y2={18} />
                                </svg>
                            </div>
                            <h3 className="text-lg font-semibold text-white font-poly-sans">
                                Self-Host
                            </h3>
                            <p className="text-base text-landing-secondary">
                                Deploy Code Velocityon your own infra - on-prem or cloud.
                            </p>
                        </div>
                        <div className="flex flex-col items-center justify-center text-center gap-2 p-6 border-b md:border-b-0 md:border-r border-white/10">
                            <div className="w-6 h-6 text-white flex items-center justify-center mb-2">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={24}
                                    height={24}
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="lucide lucide-trending-up w-full h-full"
                                    aria-hidden="true"
                                >
                                    <path d="M16 7h6v6" />
                                    <path d="m22 7-8.5 8.5-5-5L2 17" />
                                </svg>
                            </div>
                            <h3 className="text-lg font-semibold text-white font-poly-sans">
                                High Rate Limits
                            </h3>
                            <p className="text-base text-landing-secondary">
                                Flexible, high-capacity rate limits.
                            </p>
                        </div>
                        <div className="flex flex-col items-center justify-center text-center gap-2 p-6 border-b md:border-b-0 md:border-r border-white/10">
                            <div className="w-6 h-6 text-white flex items-center justify-center mb-2">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={24}
                                    height={24}
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="lucide lucide-shield w-full h-full"
                                    aria-hidden="true"
                                >
                                    <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
                                </svg>
                            </div>
                            <h3 className="text-lg font-semibold text-white font-poly-sans">
                                Enterprise Level Reliability
                            </h3>
                            <p className="text-base text-landing-secondary">
                                99.9% uptime SLA with top-tier support .
                            </p>
                        </div>
                        <div className="flex flex-col items-center justify-center text-center gap-2 p-6 border-b md:border-b-0 md:border-r border-white/10">
                            <div className="w-6 h-6 text-white flex items-center justify-center mb-2">
                                <svg
                                    width={123}
                                    height={125}
                                    viewBox="0 0 123 125"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M121.905 62.9802C121.905 96.683 95.1648 123.982 62.2066 123.982C29.2484 123.982 2.50781 96.683 2.50781 62.9802C2.50781 29.2776 29.2484 1.97876 62.2066 1.97876C95.1648 1.97876 121.905 29.2776 121.905 62.9802Z"
                                        fill="#A1AF9E"
                                        stroke="#A1AF9E"
                                        strokeWidth={2}
                                    />
                                    <path
                                        d="M62.4443 15.9019C87.856 15.9019 108.502 36.9546 108.502 62.981C108.502 89.0075 87.8561 110.061 62.4443 110.061C37.0323 110.061 16.3867 89.0074 16.3867 62.981C16.3869 36.9547 37.0325 15.9019 62.4443 15.9019Z"
                                        fill="#121A12"
                                    />
                                    <path
                                        d="M62.4443 15.9019C87.856 15.9019 108.502 36.9546 108.502 62.981C108.502 89.0075 87.8561 110.061 62.4443 110.061C37.0323 110.061 16.3867 89.0074 16.3867 62.981C16.3869 36.9547 37.0325 15.9019 62.4443 15.9019Z"
                                        fill="url(#paint0_linear_77_605)"
                                    />
                                    <path
                                        d="M62.4443 15.9019C87.856 15.9019 108.502 36.9546 108.502 62.981C108.502 89.0075 87.8561 110.061 62.4443 110.061C37.0323 110.061 16.3867 89.0074 16.3867 62.981C16.3869 36.9547 37.0325 15.9019 62.4443 15.9019Z"
                                        stroke="url(#paint1_linear_77_605)"
                                        strokeWidth="2.5"
                                    />
                                    <path
                                        d="M25.1029 103.813C25.2649 103.643 25.3343 103.449 25.3112 103.234C25.2881 103.018 25.1629 102.711 24.936 102.313C24.7087 101.914 24.5734 101.591 24.5302 101.343C24.4674 100.991 24.5515 100.694 24.7816 100.451C25.0051 100.215 25.2815 100.118 25.6113 100.158C25.941 100.199 26.2538 100.365 26.5492 100.658C26.7496 100.856 26.8911 101.073 26.9744 101.308C27.0576 101.544 27.0758 101.776 27.029 102.003C26.9821 102.23 26.8765 102.43 26.7121 102.604L26.4551 102.35C26.6551 102.139 26.7452 101.899 26.7259 101.632C26.7064 101.365 26.5781 101.113 26.3404 100.878C26.1098 100.65 25.8763 100.521 25.6395 100.491C25.403 100.461 25.2045 100.53 25.0437 100.7C24.8949 100.857 24.8351 101.045 24.8641 101.266C24.8932 101.487 25.0073 101.768 25.2064 102.112C25.4053 102.456 25.536 102.737 25.5987 102.956C25.6611 103.176 25.6741 103.376 25.6376 103.559C25.6007 103.742 25.5097 103.91 25.3638 104.064C25.1337 104.306 24.854 104.407 24.525 104.366C24.1959 104.324 23.8761 104.15 23.5654 103.842C23.3525 103.632 23.1943 103.4 23.0904 103.147C22.9865 102.894 22.9551 102.652 22.9956 102.421C23.0361 102.191 23.1421 101.985 23.3133 101.804L23.5682 102.057C23.3621 102.274 23.2791 102.524 23.3188 102.807C23.3586 103.09 23.5103 103.361 23.7741 103.622C24.0088 103.855 24.2475 103.989 24.4902 104.023C24.7327 104.058 24.9371 103.989 25.1029 103.813Z"
                                        fill="#121A12"
                                    />
                                    <path
                                        d="M28.9316 106.057C28.6828 106.36 28.4132 106.581 28.1229 106.722C27.8326 106.863 27.5417 106.913 27.2503 106.873C26.959 106.834 26.689 106.707 26.4402 106.493C26.0649 106.171 25.8745 105.773 25.8692 105.3C25.8641 104.827 26.0534 104.358 26.4369 103.892L26.7153 103.553C26.9617 103.254 27.2317 103.034 27.5255 102.892C27.8191 102.75 28.1121 102.699 28.4041 102.738C28.696 102.777 28.9654 102.903 29.2128 103.115C29.4599 103.328 29.628 103.576 29.7172 103.86C29.8058 104.144 29.8102 104.442 29.7304 104.753C29.65 105.064 29.4916 105.368 29.2546 105.665L28.9316 106.057ZM28.9533 105.468C29.2788 105.072 29.4461 104.687 29.4552 104.313C29.4646 103.939 29.3168 103.62 29.0122 103.359C28.7137 103.102 28.3829 103.01 28.0205 103.083C27.6581 103.155 27.3112 103.393 26.9795 103.796L26.6973 104.139C26.3768 104.528 26.211 104.912 26.2002 105.292C26.1894 105.671 26.3357 105.991 26.6388 106.252C26.9465 106.516 27.2788 106.61 27.6358 106.533C27.9933 106.456 28.3372 106.217 28.6674 105.815L28.9533 105.468Z"
                                        fill="#121A12"
                                    />
                                    <path
                                        d="M31.7697 108.889C31.4717 109.226 31.1453 109.412 30.7906 109.446C30.4357 109.48 30.0774 109.363 29.7158 109.096C29.4632 108.91 29.2857 108.681 29.1825 108.408C29.0799 108.136 29.059 107.843 29.1201 107.528C29.1812 107.213 29.3185 106.903 29.532 106.598L29.8515 106.147C30.0697 105.838 30.3165 105.603 30.5911 105.442C30.8663 105.281 31.1486 105.21 31.4395 105.226C31.7298 105.243 32.0044 105.347 32.2633 105.538C32.6282 105.807 32.8453 106.12 32.9146 106.476C32.984 106.833 32.9102 107.201 32.6934 107.582L32.4034 107.368C32.7495 106.724 32.6442 106.197 32.0878 105.786C31.779 105.559 31.4499 105.495 31.0999 105.596C30.7499 105.697 30.4277 105.955 30.1338 106.371L29.833 106.797C29.5491 107.198 29.4118 107.584 29.4211 107.955C29.4307 108.326 29.5873 108.623 29.8914 108.848C30.1924 109.07 30.4712 109.163 30.7282 109.129C30.9852 109.094 31.2356 108.943 31.4796 108.675L31.7697 108.889Z"
                                        fill="#121A12"
                                    />
                                    <path
                                        d="M33.2676 111.438L34.7361 108.957L34.2942 108.684L34.4406 108.437L34.8823 108.71L35.0779 108.379C35.243 108.1 35.4395 107.929 35.667 107.865C35.8946 107.801 36.1326 107.846 36.3811 108C36.4931 108.069 36.5891 108.148 36.6695 108.236L36.4994 108.472C36.429 108.401 36.3453 108.335 36.2482 108.276C36.085 108.175 35.9276 108.149 35.776 108.196C35.6241 108.244 35.4918 108.363 35.3792 108.554L35.1786 108.893L35.8154 109.286L35.6692 109.533L35.0325 109.14L33.5639 111.621L33.2676 111.438Z"
                                        fill="#121A12"
                                    />
                                    <path
                                        d="M35.4305 110.865C35.5728 110.595 35.7522 110.38 35.9685 110.22C36.185 110.06 36.4184 109.972 36.6688 109.954C36.9192 109.937 37.1633 109.994 37.4002 110.124C37.7659 110.325 37.9929 110.619 38.0818 111.006C38.1704 111.393 38.1008 111.803 37.8729 112.235L37.8388 112.3C37.6954 112.571 37.5155 112.788 37.2986 112.948C37.0818 113.109 36.849 113.197 36.6011 113.212C36.3526 113.227 36.1094 113.169 35.8705 113.038C35.5065 112.837 35.2795 112.544 35.1903 112.157C35.1006 111.769 35.1699 111.359 35.3978 110.927L35.4305 110.865ZM35.6903 111.118C35.5134 111.453 35.4531 111.776 35.5098 112.085C35.5665 112.394 35.7327 112.624 36.0087 112.776C36.283 112.927 36.5617 112.941 36.8454 112.819C37.1291 112.698 37.3641 112.46 37.5501 112.108L37.5815 112.048C37.6946 111.834 37.7593 111.616 37.7752 111.395C37.7912 111.174 37.7549 110.976 37.6657 110.801C37.5766 110.626 37.4417 110.489 37.2604 110.389C36.9899 110.24 36.7114 110.227 36.4261 110.35C36.1405 110.473 35.9055 110.71 35.7203 111.061L35.6903 111.118Z"
                                        fill="#121A12"
                                    />
                                    <path
                                        d="M40.4126 112.057C40.3524 112.012 40.2849 111.972 40.2101 111.936C40.0155 111.841 39.8254 111.817 39.6391 111.862C39.4528 111.908 39.2822 112.022 39.1265 112.205L38.2066 114.183L37.8965 114.033L39.2363 111.153L39.5412 111.301L39.3334 111.761C39.6567 111.5 40.0007 111.459 40.3656 111.636C40.4525 111.678 40.5158 111.723 40.5552 111.77L40.4126 112.057Z"
                                        fill="#121A12"
                                    />
                                    <path
                                        d="M43.8661 115.465C43.9487 115.243 43.938 115.038 43.8337 114.849C43.7291 114.66 43.4958 114.428 43.1331 114.153C42.7704 113.879 42.5217 113.636 42.386 113.426C42.1926 113.128 42.1551 112.821 42.2726 112.505C42.3871 112.198 42.6037 111.997 42.9226 111.901C43.241 111.806 43.5926 111.833 43.977 111.983C44.2376 112.084 44.4514 112.227 44.619 112.409C44.7866 112.592 44.8925 112.798 44.9371 113.025C44.9817 113.253 44.9619 113.48 44.8777 113.706L44.5436 113.575C44.646 113.301 44.6366 113.045 44.5155 112.807C44.3945 112.569 44.1793 112.389 43.8703 112.269C43.5703 112.153 43.3056 112.128 43.0767 112.196C42.8477 112.263 42.692 112.407 42.6097 112.628C42.5335 112.832 42.5514 113.03 42.6634 113.221C42.7751 113.411 42.9886 113.625 43.3042 113.86C43.6196 114.096 43.8485 114.302 43.9905 114.478C44.1328 114.654 44.2222 114.833 44.2588 115.016C44.2957 115.199 44.277 115.39 44.2021 115.59C44.0843 115.906 43.8661 116.111 43.548 116.205C43.2297 116.3 42.8684 116.269 42.4642 116.111C42.1873 116.003 41.9523 115.854 41.7592 115.664C41.566 115.473 41.4436 115.263 41.3921 115.035C41.3404 114.806 41.3583 114.575 41.446 114.34L41.7776 114.469C41.6719 114.752 41.692 115.015 41.8376 115.259C41.9834 115.503 42.2278 115.691 42.5709 115.825C42.8764 115.944 43.1474 115.971 43.3838 115.905C43.6201 115.84 43.7808 115.693 43.8661 115.465Z"
                                        fill="#121A12"
                                    />
                                    <path
                                        d="M45.7733 117.276C45.5199 117.196 45.3102 117.059 45.1443 116.867C44.9783 116.674 44.8735 116.445 44.8292 116.181C44.7849 115.917 44.8058 115.643 44.8922 115.36L44.9291 115.239C45.0182 114.947 45.1539 114.701 45.3366 114.502C45.5193 114.302 45.7301 114.167 45.9692 114.096C46.2083 114.026 46.4436 114.027 46.675 114.1C47.0366 114.215 47.2851 114.433 47.4202 114.752C47.5553 115.072 47.5564 115.45 47.4232 115.888L47.3657 116.076L45.2395 115.4L45.2197 115.464C45.1145 115.81 45.1239 116.128 45.2472 116.419C45.371 116.711 45.5799 116.903 45.8735 116.997C46.0496 117.053 46.2155 117.069 46.3704 117.047C46.5253 117.024 46.68 116.958 46.8341 116.849L46.9917 117.074C46.6401 117.356 46.2339 117.423 45.7733 117.276ZM46.5875 114.387C46.3399 114.308 46.1024 114.335 45.8762 114.467C45.6498 114.598 45.4703 114.815 45.338 115.116L47.1255 115.685L47.1365 115.648C47.2166 115.353 47.2075 115.089 47.1092 114.856C47.011 114.623 46.8371 114.467 46.5875 114.387Z"
                                        fill="#121A12"
                                    />
                                    <path
                                        d="M49.788 115.358C49.7204 115.326 49.6469 115.299 49.5668 115.278C49.3585 115.223 49.167 115.235 48.9925 115.316C48.8181 115.396 48.6714 115.542 48.5525 115.752L48.014 117.871L47.6816 117.783L48.4659 114.697L48.7928 114.783L48.6733 115.276C48.943 114.957 49.2732 114.85 49.6639 114.954C49.7572 114.978 49.8277 115.01 49.8753 115.049L49.788 115.358Z"
                                        fill="#121A12"
                                    />
                                    <path
                                        d="M50.8325 118.051L52.3047 115.606L52.652 115.68L50.8705 118.556L50.5967 118.498L50.0918 115.132L50.4388 115.206L50.8325 118.051Z"
                                        fill="#121A12"
                                    />
                                    <path
                                        d="M53.0502 118.971L52.709 118.912L53.2296 115.768L53.5705 115.827L53.0502 118.971ZM53.3199 114.85C53.3306 114.785 53.3609 114.733 53.4101 114.695C53.4591 114.657 53.5196 114.644 53.5917 114.656C53.6638 114.669 53.7175 114.702 53.7527 114.754C53.7879 114.806 53.8 114.866 53.7893 114.931C53.7786 114.997 53.748 115.048 53.6979 115.085C53.6479 115.121 53.587 115.134 53.515 115.121C53.4429 115.109 53.3895 115.077 53.3554 115.025C53.321 114.974 53.3089 114.916 53.3199 114.85Z"
                                        fill="#121A12"
                                    />
                                    <path
                                        d="M55.2656 119.059C55.5042 119.09 55.7122 119.048 55.8905 118.931C56.0688 118.814 56.178 118.648 56.2185 118.432L56.5476 118.474C56.5143 118.665 56.4334 118.834 56.3049 118.978C56.1764 119.123 56.0165 119.229 55.8253 119.295C55.6338 119.362 55.4348 119.381 55.229 119.355C54.8226 119.302 54.5185 119.116 54.3168 118.797C54.1151 118.478 54.0444 118.074 54.1049 117.587L54.1179 117.482C54.1567 117.17 54.2442 116.901 54.3809 116.676C54.5171 116.449 54.6935 116.284 54.909 116.18C55.1244 116.075 55.3657 116.04 55.6329 116.074C55.9725 116.118 56.2397 116.258 56.4342 116.493C56.629 116.728 56.713 117.015 56.6865 117.354L56.3574 117.312C56.3731 117.062 56.3104 116.851 56.1701 116.678C56.0294 116.506 55.8382 116.404 55.5958 116.372C55.287 116.332 55.0328 116.415 54.8338 116.621C54.6346 116.827 54.51 117.136 54.4591 117.547L54.4461 117.649C54.3961 118.053 54.4426 118.379 54.5851 118.627C54.7279 118.875 54.9546 119.019 55.2656 119.059Z"
                                        fill="#121A12"
                                    />
                                    <path
                                        d="M58.4616 119.669C58.1966 119.65 57.9619 119.567 57.7569 119.419C57.5519 119.27 57.3981 119.073 57.2952 118.826C57.1926 118.58 57.151 118.309 57.1708 118.013L57.1796 117.886C57.2003 117.581 57.2768 117.309 57.4094 117.072C57.542 116.836 57.7165 116.655 57.9333 116.529C58.1499 116.403 58.3791 116.349 58.6207 116.366C58.9985 116.393 59.2896 116.546 59.4935 116.825C59.6969 117.104 59.7835 117.472 59.7527 117.929L59.7395 118.126L57.5181 117.969L57.5134 118.037C57.4892 118.397 57.5701 118.705 57.7561 118.959C57.9424 119.214 58.1889 119.352 58.496 119.373C58.6801 119.386 58.8449 119.363 58.9905 119.305C59.1361 119.246 59.2717 119.145 59.3969 119.002L59.6014 119.185C59.3229 119.542 58.9432 119.703 58.4616 119.669ZM58.6006 116.666C58.3417 116.648 58.1168 116.73 57.9264 116.911C57.7357 117.093 57.6103 117.346 57.5497 117.67L59.4173 117.802L59.4198 117.764C59.431 117.457 59.3625 117.202 59.2139 116.999C59.0662 116.795 58.8614 116.685 58.6006 116.666Z"
                                        fill="#121A12"
                                    />
                                    <path
                                        d="M65.1223 117.771C65.1313 118.166 65.0725 118.514 64.9459 118.816C64.819 119.117 64.6333 119.352 64.3892 119.519C64.1449 119.686 63.8601 119.773 63.5354 119.781C63.045 119.792 62.6449 119.623 62.3348 119.272C62.025 118.92 61.8632 118.44 61.8491 117.831L61.8387 117.389C61.8302 116.999 61.8899 116.651 62.0186 116.346C62.1472 116.042 62.3334 115.805 62.5778 115.637C62.8221 115.469 63.1058 115.381 63.4289 115.374C63.7517 115.366 64.0384 115.439 64.2893 115.592C64.54 115.745 64.7357 115.965 64.8771 116.253C65.0183 116.54 65.0961 116.875 65.1107 117.258L65.1223 117.771ZM64.7568 117.314C64.7453 116.797 64.6217 116.396 64.3862 116.108C64.1506 115.821 63.8342 115.683 63.436 115.692C63.0458 115.701 62.7382 115.855 62.5131 116.154C62.2883 116.454 62.1818 116.866 62.1939 117.393L62.2041 117.841C62.2157 118.349 62.3403 118.75 62.5778 119.042C62.8153 119.334 63.132 119.475 63.5282 119.466C63.9297 119.456 64.2398 119.302 64.4583 119.003C64.6762 118.704 64.7794 118.292 64.7676 117.768L64.7568 117.314Z"
                                        fill="#121A12"
                                    />
                                    <path
                                        d="M67.3417 116.608C67.268 116.6 67.1898 116.6 67.1073 116.607C66.8927 116.624 66.7157 116.7 66.5768 116.834C66.4378 116.969 66.3456 117.155 66.3005 117.393L66.4703 119.576L66.1282 119.604L65.8809 116.425L66.2171 116.398L66.2622 116.903C66.415 116.512 66.6929 116.3 67.0955 116.268C67.1912 116.26 67.268 116.266 67.3255 116.287L67.3417 116.608Z"
                                        fill="#121A12"
                                    />
                                    <path
                                        d="M67.8426 117.833C67.7802 117.338 67.8382 116.932 68.0163 116.615C68.1946 116.297 68.4678 116.114 68.836 116.066C69.2573 116.01 69.5993 116.14 69.8618 116.454L69.8217 115.996L70.142 115.954L70.5319 119.052C70.583 119.459 70.5121 119.796 70.3189 120.063C70.1254 120.33 69.8382 120.489 69.4568 120.539C69.2413 120.567 69.0294 120.545 68.8217 120.472C68.6137 120.399 68.4433 120.289 68.3102 120.14L68.4753 119.904C68.7557 120.176 69.063 120.29 69.3965 120.247C69.6827 120.209 69.8951 120.094 70.0335 119.9C70.1722 119.707 70.2251 119.456 70.1923 119.15L70.1422 118.752C69.962 119.093 69.6621 119.291 69.2427 119.346C68.8842 119.393 68.5776 119.284 68.3236 119.021C68.0694 118.757 67.9109 118.377 67.8484 117.88L67.8426 117.833ZM68.1962 117.849C68.2471 118.252 68.3663 118.56 68.554 118.772C68.7416 118.984 68.9791 119.072 69.2675 119.034C69.689 118.978 69.9631 118.746 70.0899 118.337L69.905 116.867C69.7994 116.675 69.6648 116.536 69.5008 116.449C69.3365 116.363 69.1489 116.334 68.937 116.361C68.6489 116.399 68.4392 116.544 68.3082 116.796C68.177 117.048 68.1398 117.399 68.1962 117.849Z"
                                        fill="#121A12"
                                    />
                                    <path
                                        d="M73.5204 118.567C73.4681 118.475 73.4191 118.334 73.3735 118.142C73.2843 118.324 73.1555 118.476 72.9874 118.597C72.8193 118.719 72.6321 118.8 72.4263 118.84C72.1316 118.898 71.8774 118.86 71.6638 118.728C71.45 118.596 71.3196 118.401 71.2712 118.145C71.2145 117.84 71.2935 117.574 71.5086 117.349C71.7238 117.122 72.0532 116.966 72.4973 116.879L73.112 116.76L73.0454 116.404C73.0036 116.18 72.9035 116.017 72.7441 115.915C72.5851 115.813 72.3762 115.787 72.1176 115.838C71.8812 115.884 71.6977 115.984 71.5656 116.137C71.4338 116.291 71.3843 116.455 71.4167 116.628L71.0761 116.692C71.0296 116.443 71.1025 116.205 71.2954 115.979C71.4877 115.752 71.7494 115.606 72.0799 115.542C72.4216 115.475 72.7075 115.51 72.9376 115.646C73.1676 115.782 73.3148 116.006 73.379 116.318L73.6561 117.799C73.7125 118.103 73.7862 118.323 73.8765 118.461L73.8831 118.496L73.5204 118.567ZM72.4087 118.526C72.6352 118.481 72.8272 118.386 72.9849 118.239C73.1426 118.093 73.2444 117.918 73.2906 117.714L73.1618 117.026L72.5557 117.144C72.218 117.214 71.9654 117.329 71.7976 117.488C71.6297 117.648 71.5661 117.835 71.606 118.049C71.6388 118.225 71.7299 118.358 71.879 118.449C72.0282 118.54 72.2048 118.566 72.4087 118.526Z"
                                        fill="#121A12"
                                    />
                                    <path
                                        d="M74.3892 115.106L74.532 115.631C74.5984 115.411 74.7037 115.229 74.8485 115.085C74.993 114.941 75.1677 114.842 75.3727 114.789C75.6968 114.705 75.9615 114.735 76.1663 114.88C76.3715 115.025 76.5212 115.284 76.6164 115.657L77.1225 117.684L76.7898 117.771L76.2829 115.741C76.2122 115.465 76.1038 115.275 75.9571 115.169C75.8108 115.063 75.6135 115.042 75.3658 115.107C75.1589 115.161 74.9927 115.275 74.8661 115.449C74.7398 115.622 74.6666 115.831 74.646 116.076L75.1743 118.192L74.8419 118.278L74.0703 115.189L74.3892 115.106Z"
                                        fill="#121A12"
                                    />
                                    <path
                                        d="M76.9061 113.455C76.8871 113.391 76.8915 113.332 76.9193 113.275C76.9465 113.219 76.9952 113.18 77.0651 113.158C77.1353 113.137 77.1975 113.141 77.2517 113.173C77.3065 113.204 77.3428 113.251 77.3615 113.314C77.3805 113.378 77.3755 113.438 77.3469 113.493C77.318 113.549 77.2688 113.588 77.1989 113.609C77.1287 113.631 77.0671 113.626 77.014 113.596C76.9608 113.566 76.9248 113.519 76.9061 113.455ZM78.458 117.269L78.1267 117.371L77.2245 114.319L77.556 114.216L78.458 117.269Z"
                                        fill="#121A12"
                                    />
                                    <path
                                        d="M79.5812 116.604L81.4975 115.926L81.5927 116.208L79.273 117.028L79.1899 116.783L80.1384 113.672L78.4049 114.285L78.3066 113.996L80.4518 113.237L80.5366 113.487L79.5812 116.604Z"
                                        fill="#121A12"
                                    />
                                    <path
                                        d="M84.1277 115.157C84.0583 115.078 83.9826 114.949 83.9004 114.771C83.8486 114.967 83.7523 115.142 83.6112 115.296C83.4706 115.45 83.3032 115.568 83.1095 115.649C82.8322 115.766 82.576 115.781 82.3404 115.695C82.1052 115.61 81.939 115.446 81.8416 115.204C81.7257 114.917 81.751 114.641 81.9175 114.375C82.0837 114.11 82.3759 113.889 82.7939 113.713L83.3726 113.47L83.2375 113.135C83.1525 112.924 83.0223 112.785 82.8465 112.718C82.6704 112.651 82.4607 112.668 82.2172 112.771C81.9951 112.864 81.8344 113 81.7353 113.177C81.6366 113.355 81.6198 113.525 81.6861 113.689L81.3647 113.821C81.27 113.587 81.2953 113.339 81.4393 113.077C81.5832 112.816 81.811 112.62 82.1222 112.489C82.4442 112.353 82.7312 112.329 82.983 112.415C83.235 112.501 83.4232 112.69 83.5473 112.982L84.1098 114.377C84.2248 114.662 84.3401 114.863 84.4559 114.98L84.4691 115.013L84.1277 115.157ZM83.0303 115.344C83.2441 115.255 83.4133 115.122 83.5388 114.946C83.6645 114.77 83.73 114.577 83.7355 114.369L83.4736 113.721L82.9029 113.961C82.5862 114.098 82.3613 114.263 82.2282 114.453C82.095 114.644 82.0691 114.841 82.1506 115.042C82.2172 115.208 82.3327 115.319 82.4965 115.378C82.6605 115.436 82.8382 115.425 83.0303 115.344Z"
                                        fill="#121A12"
                                    />
                                    <path
                                        d="M84.1518 110.752L84.4914 111.491L85.0764 111.21L85.1964 111.472L84.6111 111.752L85.4958 113.678C85.5692 113.838 85.6523 113.944 85.7448 113.995C85.8375 114.046 85.9501 114.04 86.0824 113.977C86.1347 113.951 86.2151 113.902 86.3235 113.828L86.4556 114.081C86.3876 114.151 86.2828 114.219 86.1419 114.287C85.9275 114.389 85.7429 114.4 85.5871 114.32C85.4311 114.239 85.2963 114.076 85.1826 113.828L84.2982 111.903L83.7782 112.151L83.6582 111.89L84.178 111.641L83.8387 110.902L84.1518 110.752Z"
                                        fill="#121A12"
                                    />
                                    <path
                                        d="M85.276 110.073C85.2463 110.014 85.2403 109.955 85.2579 109.894C85.2752 109.834 85.3165 109.787 85.3814 109.753C85.4466 109.719 85.5091 109.712 85.5677 109.734C85.6266 109.754 85.6706 109.795 85.7001 109.854C85.7298 109.913 85.735 109.972 85.716 110.032C85.6976 110.093 85.6555 110.139 85.5905 110.173C85.5253 110.207 85.464 110.214 85.4062 110.193C85.3487 110.173 85.3052 110.133 85.276 110.073ZM87.4581 113.551L87.1494 113.71L85.7375 110.867L86.0462 110.707L87.4581 113.551Z"
                                        fill="#121A12"
                                    />
                                    <path
                                        d="M87.4407 111.733C87.2929 111.466 87.2109 111.196 87.1944 110.924C87.1779 110.652 87.2294 110.403 87.3491 110.178C87.4682 109.952 87.6451 109.772 87.8799 109.637C88.2417 109.428 88.6063 109.389 88.9739 109.519C89.3413 109.65 89.6434 109.928 89.8792 110.356L89.9147 110.421C90.063 110.689 90.1456 110.96 90.1624 111.233C90.18 111.506 90.1282 111.754 90.0083 111.976C89.888 112.199 89.71 112.378 89.4739 112.514C89.1137 112.722 88.7494 112.76 88.3809 112.631C88.0125 112.502 87.7104 112.223 87.4745 111.795L87.4407 111.733ZM87.7885 111.644C87.972 111.976 88.2065 112.2 88.4921 112.317C88.778 112.433 89.0579 112.412 89.3305 112.255C89.6019 112.099 89.7634 111.865 89.814 111.556C89.8649 111.245 89.7942 110.916 89.6013 110.567L89.5688 110.508C89.4519 110.296 89.3063 110.124 89.1319 109.992C88.9574 109.86 88.7741 109.786 88.5818 109.769C88.3895 109.752 88.2037 109.795 88.0243 109.899C87.7563 110.053 87.597 110.286 87.5461 110.598C87.4954 110.911 87.5659 111.241 87.7577 111.588L87.7885 111.644Z"
                                        fill="#121A12"
                                    />
                                    <path
                                        d="M89.9811 108.434L90.281 108.885C90.2749 108.655 90.3176 108.448 90.4092 108.264C90.5014 108.081 90.636 107.93 90.8137 107.812C91.0944 107.626 91.3547 107.569 91.5941 107.64C91.8338 107.71 92.0572 107.907 92.2639 108.229L93.3777 109.984L93.0899 110.175L91.9741 108.417C91.8208 108.179 91.6582 108.034 91.4865 107.982C91.3145 107.929 91.1211 107.974 90.9065 108.116C90.7276 108.235 90.6052 108.397 90.5402 108.603C90.4747 108.809 90.4706 109.031 90.5281 109.269L91.691 111.102L91.4026 111.292L89.7051 108.617L89.9811 108.434Z"
                                        fill="#121A12"
                                    />
                                    <path
                                        d="M95.2685 107.588C95.167 107.448 95.0302 107.376 94.858 107.374C94.6854 107.371 94.4705 107.43 94.2127 107.549C93.9549 107.668 93.7419 107.743 93.5735 107.773C93.4053 107.803 93.259 107.795 93.1346 107.75C93.0099 107.704 92.9015 107.617 92.8093 107.489C92.6635 107.287 92.6261 107.057 92.6968 106.8C92.7672 106.544 92.932 106.318 93.191 106.124C93.4711 105.913 93.7474 105.815 94.0187 105.829C94.2906 105.844 94.5082 105.965 94.6722 106.193L94.3932 106.402C94.2853 106.252 94.1337 106.173 93.9389 106.166C93.7435 106.159 93.5526 106.226 93.3652 106.366C93.1822 106.503 93.0652 106.655 93.0143 106.821C92.9634 106.988 92.986 107.138 93.0815 107.27C93.1737 107.399 93.2911 107.463 93.4342 107.464C93.5768 107.466 93.7914 107.404 94.0779 107.279C94.364 107.154 94.5916 107.08 94.7608 107.055C94.9306 107.03 95.0784 107.042 95.2044 107.092C95.3304 107.141 95.4413 107.232 95.5371 107.365C95.6931 107.582 95.7322 107.819 95.6543 108.078C95.5764 108.336 95.3998 108.569 95.124 108.776C94.8313 108.996 94.5415 109.101 94.2553 109.093C93.9689 109.085 93.746 108.97 93.5867 108.749L93.8657 108.539C93.9961 108.698 94.1579 108.775 94.3505 108.773C94.5434 108.771 94.7438 108.692 94.9515 108.536C95.145 108.391 95.2699 108.229 95.3268 108.053C95.3835 107.876 95.364 107.721 95.2685 107.588Z"
                                        fill="#121A12"
                                    />
                                    <path
                                        d="M99.8066 105.84L99.5895 106.038L96.2754 102.242L96.4925 102.044L99.8066 105.84Z"
                                        fill="#121A12"
                                    />
                                    <path
                                        d="M102.905 99.983C102.769 99.8554 102.62 99.8058 102.459 99.8343C102.297 99.8629 102.065 99.9694 101.76 100.153C101.456 100.338 101.191 100.462 100.964 100.526C100.528 100.648 100.168 100.575 99.8827 100.308C99.6334 100.074 99.5211 99.7776 99.5465 99.4186C99.5718 99.0596 99.7333 98.7142 100.031 98.3829C100.229 98.1628 100.445 98.0042 100.679 97.9065C100.913 97.8085 101.148 97.7795 101.383 97.8185C101.618 97.8575 101.824 97.9611 102.003 98.1282L101.511 98.6752C101.35 98.5238 101.177 98.4568 100.992 98.4745C100.808 98.4925 100.629 98.5977 100.457 98.7898C100.295 98.9694 100.208 99.1438 100.194 99.3132C100.179 99.4828 100.24 99.6309 100.374 99.7568C100.488 99.8631 100.63 99.8986 100.802 99.8626C100.974 99.8266 101.207 99.7192 101.499 99.5401C101.792 99.3613 102.051 99.2401 102.276 99.177C102.501 99.1136 102.705 99.1028 102.885 99.1443C103.066 99.1858 103.236 99.2811 103.394 99.4297C103.652 99.6716 103.766 99.965 103.737 100.31C103.708 100.654 103.538 101 103.227 101.345C103.022 101.574 102.791 101.745 102.536 101.859C102.281 101.973 102.032 102.015 101.791 101.984C101.549 101.954 101.331 101.848 101.137 101.666L101.631 101.116C101.807 101.281 101.996 101.349 102.199 101.321C102.402 101.293 102.603 101.168 102.802 100.947C102.974 100.755 103.065 100.576 103.075 100.409C103.086 100.242 103.03 100.1 102.905 99.983Z"
                                        fill="#121A12"
                                    />
                                    <path
                                        d="M105.576 98.5475C105.297 98.9004 104.962 99.0967 104.571 99.1363C104.18 99.1758 103.803 99.0463 103.441 98.7474L103.374 98.6917C103.132 98.4919 102.953 98.2655 102.838 98.0125C102.723 97.7593 102.68 97.5029 102.711 97.2425C102.741 96.9823 102.84 96.7457 103.008 96.5336C103.275 96.196 103.587 96.0221 103.944 96.0119C104.3 96.0022 104.671 96.1564 105.057 96.4747L105.277 96.6565L103.995 98.2766C104.209 98.4252 104.422 98.488 104.633 98.4642C104.845 98.4407 105.022 98.338 105.166 98.1562C105.368 97.901 105.432 97.6098 105.357 97.2826L105.874 97.214C105.941 97.4329 105.949 97.6585 105.897 97.8902C105.846 98.1221 105.739 98.3413 105.576 98.5475ZM103.444 96.8971C103.323 97.0496 103.278 97.2162 103.308 97.3967C103.338 97.5771 103.437 97.7576 103.603 97.9378L104.443 96.8766L104.402 96.8434C104.21 96.705 104.033 96.6405 103.871 96.6507C103.708 96.6604 103.566 96.7426 103.444 96.8971Z"
                                        fill="#121A12"
                                    />
                                    <path
                                        d="M105.682 94.1056C105.615 94.1726 105.553 94.2465 105.495 94.3276C105.306 94.5927 105.278 94.8451 105.411 95.0854L107.136 96.3702L106.723 96.949L104.201 95.0702L104.595 94.5177L104.887 94.7137C104.768 94.4106 104.797 94.1355 104.974 93.8877C105.032 93.8053 105.092 93.7452 105.152 93.7073L105.682 94.1056Z"
                                        fill="#121A12"
                                    />
                                    <path
                                        d="M107.906 93.6476L106.404 91.8299L106.802 91.2122L108.815 93.8881L108.48 94.4076L105.273 93.5848L105.673 92.9648L107.906 93.6476Z"
                                        fill="#121A12"
                                    />
                                    <path
                                        d="M106.311 90.4147C106.219 90.3582 106.16 90.2813 106.134 90.1841C106.108 90.0867 106.128 89.9826 106.193 89.8713C106.259 89.7606 106.34 89.6931 106.436 89.6698C106.533 89.6466 106.627 89.6632 106.72 89.7199C106.81 89.7753 106.868 89.852 106.892 89.9497C106.917 90.0471 106.897 90.1514 106.831 90.2624C106.766 90.3737 106.685 90.441 106.59 90.4637C106.495 90.4869 106.402 90.4703 106.311 90.4147ZM110.066 91.829L109.705 92.443L107.029 90.8027L107.39 90.1888L110.066 91.829Z"
                                        fill="#121A12"
                                    />
                                    <path
                                        d="M110.684 89.6645C110.767 89.5073 110.792 89.3523 110.757 89.1989C110.723 89.0459 110.641 88.9291 110.513 88.8491L110.828 88.2559C110.995 88.3572 111.126 88.5001 111.219 88.6838C111.313 88.8676 111.357 89.0708 111.351 89.2928C111.344 89.515 111.287 89.7273 111.18 89.9291C110.972 90.3213 110.683 90.5632 110.313 90.6554C109.942 90.7473 109.538 90.6723 109.1 90.4295L109.037 90.3944C108.619 90.1633 108.345 89.864 108.215 89.497C108.085 89.13 108.125 88.7497 108.334 88.3558C108.511 88.0226 108.75 87.8037 109.051 87.699C109.353 87.5947 109.661 87.6229 109.976 87.784L109.661 88.3772C109.5 88.2972 109.342 88.2803 109.186 88.3268C109.03 88.3733 108.91 88.476 108.826 88.6348C108.717 88.8388 108.706 89.0359 108.792 89.2266C108.878 89.417 109.067 89.5945 109.36 89.7594L109.46 89.8142C109.757 89.9789 110.008 90.047 110.213 90.0182C110.417 89.9897 110.574 89.8718 110.684 89.6645Z"
                                        fill="#121A12"
                                    />
                                    <path
                                        d="M112.681 86.8816C112.492 87.2929 112.213 87.5652 111.843 87.6997C111.472 87.834 111.077 87.8005 110.655 87.599L110.576 87.5616C110.295 87.4268 110.068 87.2505 109.896 87.0332C109.726 86.8159 109.624 86.5774 109.592 86.3172C109.561 86.057 109.601 85.8032 109.715 85.5557C109.895 85.1627 110.157 84.9175 110.5 84.8203C110.844 84.7232 111.241 84.7818 111.69 84.9966L111.946 85.119L111.082 87.0064C111.325 87.098 111.546 87.1066 111.746 87.0318C111.946 86.9568 112.094 86.814 112.191 86.602C112.327 86.305 112.32 86.0066 112.17 85.7077L112.657 85.5139C112.773 85.7102 112.834 85.9272 112.838 86.1647C112.843 86.4024 112.79 86.6413 112.681 86.8816ZM110.223 85.8018C110.142 85.9798 110.137 86.1528 110.209 86.3205C110.28 86.488 110.418 86.6391 110.622 86.7733L111.188 85.5375L111.141 85.5148C110.922 85.4276 110.735 85.4088 110.579 85.458C110.424 85.5076 110.305 85.6222 110.223 85.8018Z"
                                        fill="#121A12"
                                    />
                                    <path
                                        d="M113.295 79.5802C113.682 79.7205 113.999 79.912 114.244 80.1551C114.49 80.3981 114.647 80.6754 114.715 80.9865C114.783 81.2982 114.76 81.6192 114.645 81.9506C114.532 82.2786 114.352 82.5423 114.106 82.7422C113.861 82.9417 113.569 83.0591 113.23 83.094C112.892 83.1288 112.533 83.0787 112.153 82.9437L111.93 82.8628C111.544 82.7231 111.227 82.5301 110.981 82.2833C110.734 82.0366 110.576 81.7576 110.507 81.4463C110.439 81.1349 110.462 80.8143 110.576 80.4847C110.69 80.155 110.869 79.891 111.112 79.6923C111.355 79.4941 111.647 79.3778 111.985 79.3441C112.325 79.3106 112.688 79.3626 113.074 79.5004L113.295 79.5802ZM112.844 80.2082C112.406 80.0493 112.04 80.0125 111.747 80.0975C111.455 80.1822 111.255 80.3801 111.147 80.6912C111.042 80.9948 111.076 81.2746 111.249 81.5301C111.423 81.7859 111.722 81.9923 112.146 82.1501L112.375 82.2329C112.81 82.3904 113.176 82.4255 113.474 82.3381C113.771 82.2509 113.973 82.0535 114.08 81.7463C114.188 81.4352 114.155 81.154 113.981 80.9024C113.807 80.6505 113.497 80.4443 113.051 80.2829L112.844 80.2082Z"
                                        fill="#121A12"
                                    />
                                    <path
                                        d="M113.468 77.1493C113.428 77.2354 113.394 77.3267 113.366 77.4231C113.278 77.738 113.335 77.9852 113.541 78.1648L115.591 78.771L115.396 79.4588L112.398 78.5723L112.584 77.9155L112.925 77.9977C112.711 77.7546 112.646 77.4859 112.729 77.1917C112.757 77.0937 112.794 77.0159 112.837 76.9597L113.468 77.1493Z"
                                        fill="#121A12"
                                    />
                                    <path
                                        d="M114.417 77.0942C113.945 76.9807 113.595 76.7767 113.365 76.4825C113.136 76.1883 113.064 75.8537 113.151 75.4789C113.232 75.1252 113.417 74.8761 113.705 74.7313L113.406 74.6261L113.551 73.9978L116.496 74.7061C116.895 74.8021 117.18 75.0042 117.352 75.3131C117.524 75.622 117.561 75.9915 117.461 76.4216C117.409 76.6491 117.311 76.8603 117.169 77.0549C117.026 77.2498 116.867 77.3857 116.691 77.4623L116.357 77.0339C116.655 76.8797 116.841 76.6455 116.913 76.3322C116.966 76.1005 116.947 75.9035 116.855 75.7399C116.763 75.5766 116.599 75.4664 116.361 75.4094L116.156 75.3601C116.329 75.6134 116.377 75.9076 116.299 76.2423C116.216 76.6057 116.006 76.8683 115.67 77.0308C115.335 77.1933 114.917 77.2143 114.417 77.0942ZM114.636 76.4141C114.941 76.4878 115.196 76.4817 115.4 76.3967C115.604 76.3115 115.732 76.1562 115.785 75.9306C115.849 75.6494 115.779 75.4127 115.575 75.2204L114.238 74.8987C113.978 74.9754 113.815 75.1542 113.75 75.4354C113.697 75.6649 113.745 75.8644 113.894 76.0344C114.042 76.2043 114.29 76.3308 114.636 76.4141Z"
                                        fill="#121A12"
                                    />
                                    <path
                                        d="M117.08 71.9697C117.016 71.9905 116.915 72.001 116.779 72.001C116.971 72.2656 117.04 72.5607 116.985 72.8856C116.932 73.2017 116.801 73.4439 116.592 73.6124C116.382 73.7813 116.147 73.8427 115.888 73.7976C115.56 73.7403 115.329 73.572 115.195 73.2928C115.061 73.0132 115.033 72.642 115.111 72.1792L115.183 71.7464L114.981 71.7112C114.822 71.6835 114.687 71.7068 114.576 71.7812C114.465 71.8554 114.394 71.9855 114.363 72.1715C114.336 72.3323 114.353 72.4707 114.415 72.587C114.476 72.7035 114.568 72.7721 114.689 72.7934L114.571 73.4992C114.402 73.4696 114.254 73.3849 114.126 73.2452C113.999 73.1054 113.909 72.9299 113.859 72.7187C113.808 72.5078 113.803 72.2811 113.843 72.0389C113.905 71.6711 114.045 71.3935 114.262 71.2063C114.48 71.019 114.753 70.9512 115.082 71.0024L116.469 71.2445C116.746 71.2927 116.973 71.2916 117.152 71.2409L117.2 71.2495L117.08 71.9697ZM116.453 72.6586C116.476 72.5189 116.465 72.3821 116.419 72.2476C116.373 72.1131 116.299 72.0049 116.198 71.9235L115.618 71.8225L115.554 72.2031C115.511 72.4643 115.522 72.6686 115.589 72.8159C115.657 72.9631 115.771 73.0511 115.934 73.0794C116.067 73.1023 116.18 73.076 116.274 72.9996C116.368 72.9232 116.427 72.8095 116.453 72.6586Z"
                                        fill="#121A12"
                                    />
                                    <path
                                        d="M114.272 69.4511L114.633 69.4699C114.381 69.2048 114.274 68.8821 114.315 68.5012C114.385 67.8411 114.79 67.546 115.531 67.616L117.582 67.8427L117.506 68.5543L115.496 68.3324C115.299 68.3105 115.149 68.3382 115.045 68.4143C114.941 68.4907 114.879 68.628 114.858 68.825C114.827 69.1118 114.932 69.3401 115.171 69.5087L117.379 69.7528L117.304 70.4644L114.201 70.1218L114.272 69.4511Z"
                                        fill="#121A12"
                                    />
                                    <path
                                        d="M113.71 66.7395C113.603 66.7326 113.516 66.6919 113.449 66.6177C113.382 66.5435 113.352 66.4417 113.361 66.3124C113.368 66.1832 113.41 66.0852 113.485 66.0193C113.561 65.9532 113.652 65.9235 113.76 65.9307C113.865 65.9374 113.951 65.9781 114.017 66.0534C114.082 66.1286 114.111 66.2308 114.103 66.36C114.095 66.4896 114.054 66.5867 113.98 66.6518C113.906 66.7168 113.816 66.7462 113.71 66.7395ZM117.681 66.2322L117.637 66.9468L114.522 66.747L114.566 66.0326L117.681 66.2322Z"
                                        fill="#121A12"
                                    />
                                    <path
                                        d="M117.188 64.569L117.223 62.8721L117.782 62.884L117.729 65.4705L117.27 65.4609L115.207 63.7985L115.174 65.3864L114.609 65.3745L114.661 62.879L115.104 62.8884L117.188 64.569Z"
                                        fill="#121A12"
                                    />
                                    <path
                                        d="M117.705 60.2715C117.646 60.3049 117.55 60.3362 117.417 60.3645C117.657 60.5837 117.783 60.8582 117.795 61.1882C117.806 61.5081 117.726 61.7727 117.554 61.9812C117.383 62.1899 117.165 62.2992 116.902 62.3089C116.569 62.3208 116.31 62.2042 116.123 61.9582C115.937 61.7127 115.835 61.3553 115.818 60.8859L115.803 60.4469L115.598 60.4547C115.437 60.4605 115.309 60.5114 115.215 60.6072C115.122 60.703 115.078 60.8452 115.085 61.0337C115.09 61.1965 115.135 61.3288 115.219 61.4298C115.302 61.5308 115.405 61.5793 115.528 61.5746L115.553 62.2903C115.382 62.2964 115.22 62.2447 115.067 62.1342C114.914 62.0238 114.792 61.8704 114.7 61.6742C114.609 61.478 114.559 61.2574 114.55 61.0119C114.537 60.639 114.618 60.3382 114.794 60.1098C114.97 59.8809 115.224 59.7577 115.556 59.7397L116.963 59.688C117.243 59.6777 117.466 59.6296 117.63 59.543L117.679 59.541L117.705 60.2715ZM117.228 61.0761C117.223 60.9346 117.185 60.8029 117.113 60.6808C117.042 60.5585 116.948 60.4682 116.832 60.4096L116.244 60.4312L116.258 60.817C116.267 61.0819 116.319 61.2792 116.414 61.4096C116.509 61.54 116.639 61.602 116.805 61.5959C116.939 61.5909 117.045 61.5413 117.121 61.4472C117.198 61.3529 117.233 61.2291 117.228 61.0761Z"
                                        fill="#121A12"
                                    />
                                    <path
                                        d="M113.684 58.2246L114.44 58.1595L114.394 57.5985L114.911 57.5542L114.957 58.115L116.693 57.9655C116.812 57.9552 116.896 57.924 116.944 57.8717C116.993 57.8191 117.013 57.7311 117.002 57.6076C116.996 57.5254 116.979 57.4432 116.953 57.3607L117.493 57.3142C117.551 57.4728 117.586 57.6273 117.598 57.7781C117.644 58.3261 117.37 58.6259 116.778 58.6768L115.016 58.8285L115.059 59.3511L114.542 59.3956L114.499 58.8731L113.743 58.9381L113.684 58.2246Z"
                                        fill="#121A12"
                                    />
                                    <path
                                        d="M113.53 57.1631C113.423 57.1758 113.33 57.152 113.252 57.0911C113.173 57.0302 113.126 56.9355 113.112 56.8068C113.097 56.6781 113.121 56.5743 113.183 56.4955C113.246 56.4168 113.331 56.3712 113.438 56.3584C113.543 56.3454 113.635 56.3703 113.712 56.4321C113.79 56.4941 113.836 56.5893 113.851 56.718C113.865 56.847 113.842 56.9499 113.781 57.0277C113.719 57.1055 113.635 57.1503 113.53 57.1631ZM117.348 55.9399L117.43 56.6513L114.33 57.0225L114.248 56.3117L117.348 55.9399Z"
                                        fill="#121A12"
                                    />
                                    <path
                                        d="M115.694 55.4381C115.392 55.4888 115.111 55.4735 114.849 55.3919C114.588 55.3102 114.374 55.1699 114.209 54.9706C114.043 54.7713 113.937 54.5286 113.891 54.2416C113.823 53.817 113.901 53.45 114.126 53.1405C114.351 52.8311 114.683 52.6285 115.122 52.533L115.284 52.5028C115.587 52.4519 115.868 52.466 116.126 52.5452C116.384 52.624 116.597 52.7638 116.764 52.9637C116.93 53.1638 117.037 53.409 117.084 53.6996C117.155 54.1439 117.068 54.5233 116.821 54.8383C116.575 55.1536 116.21 55.3515 115.728 55.4323L115.694 55.4381ZM115.64 54.7215C115.957 54.6684 116.195 54.5599 116.352 54.3957C116.51 54.2322 116.57 54.0309 116.532 53.7926C116.493 53.554 116.372 53.3835 116.169 53.2817C115.965 53.1793 115.688 53.1577 115.337 53.2164C115.026 53.269 114.79 53.3786 114.63 53.5457C114.47 53.7129 114.408 53.9139 114.446 54.1483C114.483 54.3791 114.602 54.5474 114.804 54.6529C115.005 54.7586 115.284 54.7813 115.64 54.7215Z"
                                        fill="#121A12"
                                    />
                                    <path
                                        d="M113.453 51.5588L113.8 51.4561C113.477 51.2901 113.273 51.0208 113.189 50.6474C113.043 50.0002 113.332 49.5859 114.055 49.404L116.065 48.9321L116.222 49.6299L114.251 50.0927C114.058 50.1378 113.924 50.2139 113.851 50.321C113.778 50.4279 113.762 50.5782 113.806 50.7714C113.869 51.0529 114.041 51.2336 114.321 51.3128L116.485 50.8046L116.643 51.5024L113.601 52.2165L113.453 51.5588Z"
                                        fill="#121A12"
                                    />
                                    <path
                                        d="M114.531 46.5993C114.411 46.6353 114.334 46.7133 114.3 46.8326C114.267 46.9525 114.259 47.1365 114.279 47.3845C114.298 47.6328 114.294 47.8462 114.265 48.0247C114.201 48.4164 114.016 48.6586 113.707 48.7513C113.449 48.8288 113.201 48.7828 112.964 48.6123C112.727 48.4424 112.558 48.1855 112.459 47.8426C112.354 47.477 112.358 47.1551 112.47 46.8763C112.582 46.5982 112.779 46.4163 113.061 46.3314L113.259 47.0183C113.13 47.0571 113.037 47.1385 112.979 47.2622C112.922 47.3859 112.916 47.529 112.963 47.6909C113.006 47.8418 113.076 47.9544 113.172 48.0292C113.267 48.1039 113.372 48.1241 113.487 48.0895C113.59 48.0585 113.657 47.9901 113.689 47.8844C113.721 47.7787 113.727 47.5821 113.707 47.2954C113.688 47.0084 113.696 46.7761 113.732 46.5982C113.768 46.4205 113.832 46.2777 113.923 46.1692C114.013 46.0609 114.139 45.9826 114.3 45.9344C114.569 45.8536 114.821 45.9018 115.053 46.0798C115.286 46.2577 115.455 46.5312 115.562 46.9004C115.634 47.1512 115.654 47.3878 115.622 47.6104C115.59 47.8329 115.512 48.0225 115.388 48.1783C115.265 48.3342 115.114 48.4391 114.935 48.4928L114.743 47.8257C114.898 47.7684 115.003 47.6704 115.056 47.5315C115.109 47.3928 115.109 47.2301 115.056 47.0435C115.004 46.8625 114.93 46.7352 114.836 46.661C114.741 46.5871 114.639 46.5666 114.531 46.5993Z"
                                        fill="#121A12"
                                    />
                                    <path
                                        d="M40.3473 49.3611H31.8039L29.8648 54.7617H28.1973L35.3194 35.5356H36.8318L43.9537 54.7617H42.2991L40.3473 49.3611ZM32.2951 47.9877H39.8435L36.0693 37.5166L32.2951 47.9877Z"
                                        fill="#A1AF9E"
                                    />
                                    <path
                                        d="M48.3924 54.7617H46.8027V35.5356H48.3924V54.7617Z"
                                        fill="#A1AF9E"
                                    />
                                    <path
                                        d="M66.564 48.7655C66.3485 50.7904 65.6397 52.3399 64.4378 53.4135C63.2356 54.4877 61.6349 55.0247 59.6358 55.0247C58.2399 55.0247 57.0055 54.6682 55.9326 53.9552C54.86 53.2419 54.0304 52.2319 53.4446 50.9247C52.8587 49.6174 52.5613 48.1231 52.5527 46.4416V43.9461C52.5527 42.2383 52.8458 40.724 53.4316 39.4035C54.0177 38.0832 54.86 37.0644 55.9585 36.3467C57.0575 35.6295 58.3219 35.2705 59.7522 35.2705C61.7687 35.2705 63.3602 35.8249 64.5283 36.9345C65.6958 38.0436 66.3744 39.5798 66.564 41.5427H64.9611C64.5649 38.277 62.8283 36.6439 59.7522 36.6439C58.0462 36.6439 56.6869 37.2957 55.6742 38.5997C54.6616 39.9036 54.1556 41.7055 54.1556 44.0045V46.3569C54.1556 48.577 54.6487 50.3479 55.6354 51.6692C56.6219 52.9906 57.9557 53.6516 59.6358 53.6516C61.2989 53.6516 62.5526 53.2444 63.3974 52.4301C64.2419 51.6158 64.763 50.3944 64.9611 48.7655H66.564Z"
                                        fill="#A1AF9E"
                                    />
                                    <path
                                        d="M71.7501 46.9315V54.7617H70.1602V35.5356H76.5713C78.5272 35.5356 80.0717 36.0466 81.2046 37.0674C82.338 38.089 82.9046 39.4928 82.9046 41.2798C82.9046 43.0847 82.3594 44.4778 81.2695 45.4592C80.1793 46.4407 78.6004 46.9315 76.5325 46.9315H71.7501ZM71.7501 45.5581H76.5713C78.1136 45.5581 79.2897 45.1836 80.0998 44.434C80.9096 43.6848 81.3149 42.6399 81.3149 41.2997C81.3149 39.9686 80.9121 38.9083 80.1064 38.1192C79.3004 37.3303 78.1565 36.9268 76.6745 36.9091H71.7501V45.5581Z"
                                        fill="#A1AF9E"
                                    />
                                    <path
                                        d="M94.568 49.3611H86.0243L84.0855 54.7617H82.418L89.5399 35.5356H91.0525L98.1744 54.7617H96.5198L94.568 49.3611ZM86.5158 47.9877H94.0642L90.2897 37.5166L86.5158 47.9877Z"
                                        fill="#A1AF9E"
                                    />
                                    <path
                                        d="M51.0886 81.2592C51.0886 80.1944 50.7224 79.3513 49.9902 78.7308C49.2574 78.1102 47.9173 77.5204 45.9702 76.9613C44.0229 76.4024 42.6011 75.7927 41.7049 75.1325C40.4295 74.1992 39.7919 72.9755 39.7919 71.4615C39.7919 69.9912 40.3841 68.7964 41.5692 67.8766C42.7538 66.9566 44.2683 66.4968 46.1125 66.4968C47.3618 66.4968 48.4798 66.7432 49.4665 67.2361C50.453 67.7291 51.218 68.4158 51.7606 69.296C52.3035 70.1764 52.5751 71.1579 52.5751 72.2407H50.9725C50.9725 70.9251 50.5331 69.8675 49.6539 69.0687C48.775 68.2694 47.5946 67.87 46.1125 67.87C44.6734 67.87 43.5273 68.1982 42.6746 68.8553C41.8213 69.5124 41.3948 70.3696 41.3948 71.4275C41.3948 72.4062 41.7781 73.2042 42.545 73.8217C43.3118 74.4389 44.5399 74.9831 46.2286 75.455C47.9173 75.9264 49.1971 76.4154 50.0678 76.9217C50.9378 77.4279 51.5927 78.033 52.0322 78.7371C52.4719 79.4418 52.6915 80.2736 52.6915 81.2329C52.6915 82.7472 52.0991 83.9617 50.9142 84.8773C49.7293 85.7929 48.1677 86.2507 46.2286 86.2507C44.9018 86.2507 43.6844 86.0083 42.5771 85.5245C41.4699 85.0404 40.6298 84.3625 40.0569 83.4909C39.4837 82.6193 39.1973 81.6204 39.1973 80.4936H40.7872C40.7872 81.8493 41.2825 82.9188 42.2736 83.7021C43.2645 84.4857 44.5828 84.8773 46.2286 84.8773C47.6936 84.8773 48.87 84.5474 49.7574 83.887C50.6448 83.2269 51.0886 82.3508 51.0886 81.2592Z"
                                        fill="#A1AF9E"
                                    />
                                    <path
                                        d="M69.7601 77.4166C69.7601 79.1861 69.4608 80.7399 68.862 82.0779C68.2627 83.4162 67.4077 84.4464 66.2963 85.168C65.1847 85.8898 63.9007 86.2507 62.4443 86.2507C60.247 86.2507 58.4717 85.4475 57.1192 83.8408C55.7662 82.2343 55.0898 80.0665 55.0898 77.3374V75.357C55.0898 73.6052 55.3934 72.0536 56.0009 70.7023C56.6085 69.351 57.4681 68.3123 58.5795 67.586C59.6912 66.8597 60.971 66.4968 62.4187 66.4968C63.8663 66.4968 65.1437 66.853 66.2512 67.5663C67.3582 68.279 68.2134 69.2874 68.8166 70.5899C69.4198 71.893 69.7346 73.4024 69.7601 75.1193V77.4166ZM68.1705 75.3304C68.1705 73.0151 67.6576 71.2019 66.6323 69.8899C65.6068 68.5785 64.202 67.9225 62.4187 67.9225C60.6691 67.9225 59.2754 68.581 58.2372 69.8966C57.1987 71.213 56.6795 73.0506 56.6795 75.4096V77.4166C56.6795 79.6967 57.1965 81.5036 58.2306 82.8374C59.2647 84.171 60.6691 84.8378 62.4443 84.8378C64.2452 84.8378 65.65 84.1798 66.6582 82.8637C67.6664 81.5476 68.1705 79.7144 68.1705 77.364V75.3304Z"
                                        fill="#A1AF9E"
                                    />
                                    <path
                                        d="M86.8252 79.9918C86.6097 82.0165 85.9012 83.5656 84.6992 84.6399C83.497 85.7138 81.8964 86.2507 79.8973 86.2507C78.5014 86.2507 77.2672 85.894 76.1943 85.181C75.1215 84.4682 74.2921 83.458 73.7063 82.1507C73.1202 80.8432 72.8227 79.3494 72.8145 77.6676V75.1721C72.8145 73.4643 73.1072 71.9503 73.6933 70.6298C74.2792 69.3092 75.1215 68.2904 76.2202 67.5727C77.319 66.8553 78.5834 66.4968 80.0137 66.4968C82.0301 66.4968 83.6219 67.0512 84.7895 68.1606C85.957 69.2694 86.6359 70.8058 86.8252 72.7688H85.2226C84.8264 69.5027 83.0901 67.87 80.0137 67.87C78.3076 67.87 76.9483 68.5221 75.936 69.8257C74.9233 71.1299 74.417 72.9313 74.417 75.2305V77.5829C74.417 79.803 74.9104 81.5739 75.8972 82.895C76.8836 84.2166 78.2171 84.8773 79.8973 84.8773C81.5601 84.8773 82.8141 84.4702 83.6588 83.6559C84.5033 82.8418 85.0245 81.6204 85.2226 79.9918H86.8252Z"
                                        fill="#A1AF9E"
                                    />
                                    <path
                                        d="M99.346 61.174H27.6128C27.5233 61.174 27.4512 61.0998 27.4512 61.0087C27.4512 60.9174 27.5233 60.8435 27.6128 60.8435H99.346C99.4352 60.8435 99.5075 60.9174 99.5075 61.0087C99.5075 61.0998 99.4352 61.174 99.346 61.174Z"
                                        fill="#A1AF9E"
                                    />
                                    <path
                                        d="M39.3894 97.1206C39.3536 97.0475 39.3244 96.9174 39.3021 96.7301C39.0137 97.0362 38.6692 97.1892 38.2691 97.1892C37.9114 97.1892 37.6178 97.0857 37.3886 96.8793C37.1597 96.6725 37.0449 96.4104 37.0449 96.0926C37.0449 95.7068 37.1888 95.407 37.4758 95.1933C37.7631 94.9797 38.1673 94.8731 38.6882 94.8731H39.2919V94.5816C39.2919 94.3602 39.227 94.1839 39.0974 94.0524C38.9678 93.9212 38.7768 93.8554 38.5242 93.8554C38.3024 93.8554 38.117 93.9127 37.9673 94.027C37.8176 94.1413 37.7425 94.2791 37.7425 94.4413H37.1189C37.1189 94.2564 37.1831 94.0776 37.3118 93.9052C37.4401 93.7327 37.6148 93.5963 37.8347 93.4958C38.0551 93.3951 38.2969 93.345 38.5608 93.345C38.9791 93.345 39.3065 93.4518 39.5437 93.6655C39.7806 93.8792 39.9036 94.1728 39.9124 94.5476V96.254C39.9124 96.5942 39.9548 96.8649 40.0401 97.0658V97.1206H39.3894ZM38.3597 96.6376C38.5542 96.6376 38.7386 96.5861 38.913 96.4834C39.0875 96.3805 39.2138 96.2471 39.2919 96.0824V95.3221H38.8057C38.0454 95.3221 37.6654 95.549 37.6654 96.0038C37.6654 96.2025 37.7304 96.3578 37.86 96.4696C37.9896 96.5817 38.1563 96.6376 38.3597 96.6376Z"
                                        fill="#A1AF9E"
                                    />
                                    <path
                                        d="M40.7207 92.429C40.7207 92.3263 40.7515 92.2394 40.8129 92.1685C40.8745 92.0977 40.9656 92.0625 41.0864 92.0625C41.2072 92.0625 41.2988 92.0977 41.3613 92.1685C41.424 92.2394 41.4551 92.3263 41.4551 92.429C41.4551 92.5317 41.424 92.6175 41.3613 92.6858C41.2988 92.7545 41.2072 92.7888 41.0864 92.7888C40.9656 92.7888 40.8745 92.7545 40.8129 92.6858C40.7515 92.6175 40.7207 92.5317 40.7207 92.429ZM41.3916 97.1194H40.7711V93.4124H41.3916V97.1194Z"
                                        fill="#A1AF9E"
                                    />
                                    <path
                                        d="M43.6654 96.6717C43.8867 96.6717 44.0801 96.6033 44.2455 96.4663C44.4109 96.3293 44.5028 96.1579 44.5207 95.9523H45.1076C45.0963 96.1649 45.0248 96.3669 44.893 96.5587C44.7609 96.7505 44.5848 96.9036 44.3646 97.0176C44.1445 97.132 43.9114 97.1892 43.6654 97.1892C43.171 97.1892 42.7783 97.021 42.4866 96.6838C42.1949 96.347 42.0488 95.8861 42.0488 95.3013V95.1953C42.0488 94.8344 42.1138 94.5133 42.2434 94.2323C42.373 93.9514 42.559 93.7333 42.8017 93.578C43.0444 93.4228 43.3311 93.345 43.6619 93.345C44.0688 93.345 44.407 93.4695 44.6767 93.7184C44.9458 93.9675 45.0897 94.2907 45.1076 94.6882H44.5207C44.5028 94.4482 44.4136 94.2512 44.2537 94.097C44.0942 93.9428 43.8969 93.8656 43.6619 93.8656C43.3468 93.8656 43.1024 93.9816 42.9291 94.2135C42.756 94.4455 42.6693 94.7804 42.6693 95.2191V95.3389C42.6693 95.7663 42.7552 96.0951 42.9274 96.3257C43.0994 96.5565 43.3457 96.6717 43.6654 96.6717Z"
                                        fill="#A1AF9E"
                                    />
                                    <path
                                        d="M48.7001 95.3082C48.7001 95.8723 48.5736 96.3271 48.321 96.6717C48.0683 97.0168 47.7263 97.1892 47.2948 97.1892C46.8543 97.1892 46.5076 97.0464 46.255 96.7611V98.546H45.6348V93.4136H46.2013L46.2316 93.8246C46.4842 93.505 46.8353 93.345 47.2847 93.345C47.7208 93.345 48.0656 93.513 48.3196 93.8484C48.573 94.1842 48.7001 94.6517 48.7001 95.2498V95.3082ZM48.0796 95.2362C48.0796 94.8183 47.9924 94.4881 47.8179 94.2459C47.6435 94.004 47.4041 93.883 47.1003 93.883C46.7247 93.883 46.4429 94.0533 46.255 94.3932V96.1649C46.4407 96.5028 46.7247 96.6717 47.1072 96.6717C47.4041 96.6717 47.6407 96.5513 47.8163 96.3105C47.9919 96.0694 48.0796 95.7112 48.0796 95.2362Z"
                                        fill="#A1AF9E"
                                    />
                                    <path
                                        d="M51.557 97.1206C51.5213 97.0475 51.4921 96.9174 51.4698 96.7301C51.1814 97.0362 50.8372 97.1892 50.4368 97.1892C50.0791 97.1892 49.7858 97.0857 49.5566 96.8793C49.3274 96.6725 49.2129 96.4104 49.2129 96.0926C49.2129 95.7068 49.3565 95.407 49.6438 95.1933C49.9311 94.9797 50.3353 94.8731 50.8562 94.8731H51.4599V94.5816C51.4599 94.3602 51.395 94.1839 51.2654 94.0524C51.1358 93.9212 50.9445 93.8554 50.6919 93.8554C50.4704 93.8554 50.2849 93.9127 50.135 94.027C49.9853 94.1413 49.9104 94.2791 49.9104 94.4413H49.2866C49.2866 94.2564 49.351 94.0776 49.4795 93.9052C49.6078 93.7327 49.7825 93.5963 50.0026 93.4958C50.2228 93.3951 50.4649 93.345 50.7288 93.345C51.1468 93.345 51.4745 93.4518 51.7117 93.6655C51.9486 93.8792 52.0716 94.1728 52.0804 94.5476V96.254C52.0804 96.5942 52.1228 96.8649 52.2078 97.0658V97.1206H51.557ZM50.5276 96.6376C50.7222 96.6376 50.9063 96.5861 51.081 96.4834C51.2552 96.3805 51.3815 96.2471 51.4599 96.0824V95.3221H50.9737C50.2134 95.3221 49.8331 95.549 49.8331 96.0038C49.8331 96.2025 49.8981 96.3578 50.0277 96.4696C50.1575 96.5817 50.324 96.6376 50.5276 96.6376Z"
                                        fill="#A1AF9E"
                                    />
                                    <path
                                        d="M52.8945 96.7877C52.8945 96.6781 52.9265 96.5867 52.99 96.5137C53.0539 96.4406 53.1493 96.4041 53.2767 96.4041C53.4041 96.4041 53.501 96.4406 53.5668 96.5137C53.6328 96.5867 53.6658 96.6781 53.6658 96.7877C53.6658 96.8926 53.6328 96.9806 53.5668 97.0515C53.501 97.1223 53.4041 97.1577 53.2767 97.1577C53.1493 97.1577 53.0539 97.1223 52.99 97.0515C52.9265 96.9806 52.8945 96.8926 52.8945 96.7877Z"
                                        fill="#A1AF9E"
                                    />
                                    <path
                                        d="M54.3496 95.2329C54.3496 94.8698 54.4192 94.5432 54.559 94.2528C54.6988 93.9628 54.8933 93.7388 55.1426 93.5816C55.3917 93.4239 55.6765 93.345 55.9962 93.345C56.4901 93.345 56.89 93.5196 57.1951 93.8692C57.5003 94.2188 57.653 94.6835 57.653 95.2637V95.3082C57.653 95.6691 57.585 95.9927 57.4499 96.2794C57.3145 96.5662 57.1214 96.7896 56.8699 96.9493C56.6181 97.1093 56.3292 97.1892 56.0031 97.1892C55.5111 97.1892 55.1124 97.0146 54.8072 96.665C54.5021 96.3157 54.3496 95.8529 54.3496 95.2772V95.2329ZM54.9731 95.3082C54.9731 95.7195 55.0664 96.0494 55.2533 96.2985C55.4401 96.5474 55.6897 96.6717 56.0031 96.6717C56.3182 96.6717 56.5686 96.5457 56.754 96.2933C56.9398 96.0409 57.0325 95.6874 57.0325 95.2329C57.0325 94.8263 56.9378 94.497 56.7488 94.2442C56.56 93.9921 56.3091 93.8656 55.9962 93.8656C55.6897 93.8656 55.4426 93.9904 55.2549 94.2393C55.0672 94.4881 54.9731 94.8446 54.9731 95.3082Z"
                                        fill="#A1AF9E"
                                    />
                                    <path
                                        d="M60.014 93.9824C59.9201 93.9664 59.818 93.9583 59.7085 93.9583C59.3016 93.9583 59.0256 94.1355 58.8803 94.4895V97.1206H58.2598V93.4136H58.8632L58.8737 93.8418C59.077 93.5105 59.3657 93.345 59.7388 93.345C59.8596 93.345 59.9512 93.361 60.014 93.3929V93.9824Z"
                                        fill="#A1AF9E"
                                    />
                                    <path
                                        d="M60.1973 95.2362C60.1973 94.6583 60.328 94.1988 60.5897 93.8573C60.8511 93.5157 61.1978 93.345 61.6292 93.345C62.0717 93.345 62.4173 93.505 62.6655 93.8246L62.6958 93.4136H63.2624V97.0315C63.2624 97.5111 63.1234 97.8892 62.8449 98.1657C62.5665 98.442 62.1925 98.5801 61.7231 98.5801C61.4617 98.5801 61.2055 98.5231 60.9551 98.4088C60.7047 98.2947 60.5134 98.1383 60.3816 97.9396L60.7036 97.5593C60.9697 97.895 61.2952 98.0628 61.6796 98.0628C61.9812 98.0628 62.2167 97.9762 62.3854 97.8026C62.5544 97.6288 62.6388 97.3844 62.6388 97.0691V96.7505C62.3906 97.0431 62.0519 97.1892 61.6226 97.1892C61.1978 97.1892 60.8538 97.0146 60.5913 96.665C60.3285 96.3157 60.1973 95.8394 60.1973 95.2362ZM60.8208 95.3082C60.8208 95.7262 60.9047 96.0547 61.0726 96.2933C61.2402 96.5319 61.4749 96.6512 61.7767 96.6512C62.168 96.6512 62.4553 96.4696 62.6388 96.1067V94.4139C62.4487 94.0599 62.1636 93.883 61.7833 93.883C61.4818 93.883 61.2457 94.0029 61.0759 94.2426C60.9061 94.4823 60.8208 94.8377 60.8208 95.3082Z"
                                        fill="#A1AF9E"
                                    />
                                    <path
                                        d="M64.1602 97.5466H63.627L65.6662 92.1299H66.1959L64.1602 97.5466Z"
                                        fill="#A1AF9E"
                                    />
                                    <path
                                        d="M68.8029 96.1375C68.8029 95.9661 68.7399 95.833 68.6136 95.7381C68.4873 95.6434 68.2668 95.5617 67.9529 95.4934C67.6386 95.4247 67.3893 95.3425 67.205 95.2465C67.0203 95.1504 66.8838 95.0364 66.7955 94.9038C66.7075 94.7715 66.6634 94.6138 66.6634 94.4311C66.6634 94.1272 66.7889 93.8703 67.0404 93.6602C67.2922 93.4502 67.6133 93.345 68.0049 93.345C68.4163 93.345 68.7498 93.4535 69.0059 93.6705C69.2618 93.8875 69.3901 94.1651 69.3901 94.503H68.766C68.766 94.3295 68.6939 94.1798 68.5497 94.0541C68.4055 93.9284 68.2236 93.8656 68.0049 93.8656C67.779 93.8656 67.6023 93.916 67.4746 94.0165C67.3475 94.1169 67.2837 94.2484 67.2837 94.4106C67.2837 94.5637 67.3431 94.6791 67.4614 94.7566C67.58 94.8344 67.7941 94.9085 68.1037 94.9791C68.4132 95.0502 68.6645 95.1347 68.8568 95.2329C69.0489 95.3312 69.1914 95.4494 69.2841 95.5875C69.3771 95.7256 69.4234 95.8939 69.4234 96.0926C69.4234 96.4239 69.2935 96.6896 69.0343 96.8895C68.7751 97.0893 68.4385 97.1892 68.0247 97.1892C67.7341 97.1892 67.4771 97.1367 67.2534 97.0315C67.03 96.9266 66.855 96.7799 66.7289 96.5914C66.6024 96.4029 66.5391 96.1992 66.5391 95.9797H67.1596C67.1708 96.192 67.2542 96.3606 67.4094 96.4851C67.5649 96.6097 67.7699 96.6717 68.0247 96.6717C68.2597 96.6717 68.4479 96.6235 68.5899 96.5261C68.7319 96.4292 68.8029 96.2997 68.8029 96.1375Z"
                                        fill="#A1AF9E"
                                    />
                                    <path
                                        d="M69.8945 95.2329C69.8945 94.8698 69.9641 94.5432 70.1042 94.2528C70.2437 93.9628 70.4383 93.7388 70.6876 93.5816C70.9369 93.4239 71.2214 93.345 71.5411 93.345C72.0353 93.345 72.4352 93.5196 72.74 93.8692C73.0452 94.2188 73.1979 94.6835 73.1979 95.2637V95.3082C73.1979 95.6691 73.1302 95.9927 72.9951 96.2794C72.8597 96.5662 72.6663 96.7896 72.4148 96.9493C72.163 97.1093 71.8744 97.1892 71.548 97.1892C71.056 97.1892 70.6573 97.0146 70.3524 96.665C70.0472 96.3157 69.8945 95.8529 69.8945 95.2772V95.2329ZM70.5181 95.3082C70.5181 95.7195 70.6116 96.0494 70.7982 96.2985C70.985 96.5474 71.2349 96.6717 71.548 96.6717C71.8631 96.6717 72.1135 96.5457 72.2992 96.2933C72.4847 96.0409 72.5774 95.6874 72.5774 95.2329C72.5774 94.8263 72.483 94.497 72.294 94.2442C72.105 93.9921 71.854 93.8656 71.5411 93.8656C71.2349 93.8656 70.9878 93.9904 70.7998 94.2393C70.6122 94.4881 70.5181 94.8446 70.5181 95.3082Z"
                                        fill="#A1AF9E"
                                    />
                                    <path
                                        d="M75.2589 96.6717C75.4804 96.6717 75.6739 96.6033 75.8392 96.4663C76.0046 96.3293 76.0962 96.1579 76.1144 95.9523H76.7011C76.6898 96.1649 76.6185 96.3669 76.4864 96.5587C76.3546 96.7505 76.1785 96.9036 75.9581 97.0176C75.738 97.132 75.5049 97.1892 75.2589 97.1892C74.7647 97.1892 74.372 97.021 74.0801 96.6838C73.7884 96.347 73.6426 95.8861 73.6426 95.3013V95.1953C73.6426 94.8344 73.7072 94.5133 73.8371 94.2323C73.9667 93.9514 74.1527 93.7333 74.3954 93.578C74.6381 93.4228 74.9249 93.345 75.2556 93.345C75.6626 93.345 76.0008 93.4695 76.2702 93.7184C76.5395 93.9675 76.6832 94.2907 76.7011 94.6882H76.1144C76.0962 94.4482 76.0074 94.2512 75.8475 94.097C75.6876 93.9428 75.4903 93.8656 75.2556 93.8656C74.9403 93.8656 74.6962 93.9816 74.5228 94.2135C74.3495 94.4455 74.2628 94.7804 74.2628 95.2191V95.3389C74.2628 95.7663 74.3489 96.0951 74.5212 96.3257C74.6932 96.5565 74.9394 96.6717 75.2589 96.6717Z"
                                        fill="#A1AF9E"
                                    />
                                    <path
                                        d="M79.7791 95.4433H80.4565V95.9603H79.7791V97.1184H79.1553V95.9603H76.9316V95.5869L79.1184 92.1299H79.7791V95.4433ZM77.6361 95.4433H79.1553V92.9968L79.0815 93.1338L77.6361 95.4433Z"
                                        fill="#A1AF9E"
                                    />
                                    <path
                                        d="M83.0252 96.1375C83.0252 95.9661 82.9622 95.833 82.8359 95.7381C82.7094 95.6434 82.4892 95.5617 82.1755 95.4934C81.8613 95.4247 81.6117 95.3425 81.4274 95.2465C81.2427 95.1504 81.1065 95.0364 81.0182 94.9038C80.9298 94.7715 80.8858 94.6138 80.8858 94.4311C80.8858 94.1272 81.0116 93.8703 81.2631 93.6602C81.5146 93.4502 81.8357 93.345 82.2273 93.345C82.6386 93.345 82.9721 93.4535 83.2283 93.6705C83.4842 93.8875 83.6122 94.1651 83.6122 94.503H82.9884C82.9884 94.3295 82.9166 94.1798 82.7724 94.0541C82.6282 93.9284 82.4463 93.8656 82.2273 93.8656C82.0016 93.8656 81.8247 93.916 81.6973 94.0165C81.5696 94.1169 81.506 94.2484 81.506 94.4106C81.506 94.5637 81.5655 94.6791 81.6841 94.7566C81.8024 94.8344 82.0165 94.9085 82.3263 94.9791C82.6362 95.0502 82.8868 95.1347 83.0792 95.2329C83.2715 95.3312 83.4138 95.4494 83.5068 95.5875C83.5995 95.7256 83.646 95.8939 83.646 96.0926C83.646 96.4239 83.5161 96.6896 83.2569 96.8895C82.9977 97.0893 82.6609 97.1892 82.2471 97.1892C81.9568 97.1892 81.6995 97.1367 81.4758 97.0315C81.2521 96.9266 81.0776 96.7799 80.9513 96.5914C80.825 96.4029 80.7617 96.1992 80.7617 95.9797H81.3819C81.3932 96.192 81.4766 96.3606 81.6318 96.4851C81.7873 96.6097 81.9925 96.6717 82.2471 96.6717C82.4821 96.6717 82.6706 96.6235 82.8125 96.5261C82.9545 96.4292 83.0252 96.2997 83.0252 96.1375Z"
                                        fill="#A1AF9E"
                                    />
                                    <path
                                        d="M84.1172 95.2329C84.1172 94.8698 84.1871 94.5432 84.3269 94.2528C84.4666 93.9628 84.6612 93.7388 84.9102 93.5816C85.1598 93.4239 85.444 93.345 85.7641 93.345C86.2583 93.345 86.6578 93.5196 86.963 93.8692C87.2681 94.2188 87.4206 94.6835 87.4206 95.2637V95.3082C87.4206 95.6691 87.3532 95.9927 87.218 96.2794C87.0824 96.5662 86.8892 96.7896 86.6377 96.9493C86.3859 97.1093 86.0973 97.1892 85.7707 97.1892C85.2787 97.1892 84.8802 97.0146 84.5751 96.665C84.2699 96.3157 84.1172 95.8529 84.1172 95.2772V95.2329ZM84.741 95.3082C84.741 95.7195 84.8346 96.0494 85.0211 96.2985C85.2077 96.5474 85.4575 96.6717 85.7707 96.6717C86.086 96.6717 86.3364 96.5457 86.5219 96.2933C86.7073 96.0409 86.8004 95.6874 86.8004 95.2329C86.8004 94.8263 86.7057 94.497 86.5167 94.2442C86.3282 93.9921 86.0767 93.8656 85.7641 93.8656C85.4575 93.8656 85.2107 93.9904 85.023 94.2393C84.8351 94.4881 84.741 94.8446 84.741 95.3082Z"
                                        fill="#A1AF9E"
                                    />
                                    <defs>
                                        <linearGradient
                                            id="paint0_linear_77_605"
                                            x1="62.4444"
                                            y1="14.6519"
                                            x2="62.4444"
                                            y2="111.311"
                                            gradientUnits="userSpaceOnUse"
                                        >
                                            <stop stopColor="#A1AF9E" stopOpacity={0} />
                                            <stop offset={1} stopColor="#A1AF9E" stopOpacity="0.4" />
                                        </linearGradient>
                                        <linearGradient
                                            id="paint1_linear_77_605"
                                            x1="62.4444"
                                            y1="111.311"
                                            x2="62.4444"
                                            y2="14.6519"
                                            gradientUnits="userSpaceOnUse"
                                        >
                                            <stop stopColor="#A1AF9E" />
                                            <stop offset={1} stopColor="#434942" stopOpacity="0.5" />
                                        </linearGradient>
                                    </defs>
                                </svg>
                            </div>
                            <h3 className="text-lg font-semibold text-white font-poly-sans">
                                SOC2 Certified
                            </h3>
                            <p className="text-base text-landing-secondary">
                                Ready-to-sign agreements for enterprise compliance.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="py-32">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col items-center text-center mb-16">
                        <div className="flex flex-col gap-3 mb-8">
                            <h2 className="text-display-3 lg:text-display-2 font-geist-circle font-medium lg:leading-tight text-white">
                                More about <span className="text-brand-primary">Code Velocity</span>
                            </h2>
                        </div>
                        {/* <div className="flex items-center gap-3">
                            <button
                                className="group/3b777358 flex h-8 cursor-pointer items-center justify-center gap-2 rounded-md border-none px-3 disabled:cursor-default disabled:bg-neutral-200 hover:disabled:cursor-default hover:disabled:bg-neutral-200 active:disabled:cursor-default active:disabled:bg-neutral-200 bg-brand-50 hover:bg-brand-100 active:bg-brand-50"
                                type="button"
                                aria-label="Previous posts"
                                disabled
                            >
                                <span className="text-body font-body group-disabled/3b777358:text-neutral-400 text-brand-700 icon-wrapper-module_root__-l6uP">
                                    <span className="h-4 w-4 icon-wrapper-module_root__-l6uP">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="1em"
                                            height="1em"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth={2}
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        >
                                            <path d="m15 18-6-6 6-6" />
                                        </svg>
                                    </span>
                                </span>
                                <div className="hidden h-4 w-4 flex-none items-center justify-center gap-2">
                                    <div className="text-caption font-caption group-disabled/3b777358:text-neutral-400 text-brand-700 loader-module_root__-0Kak" />
                                </div>
                            </button>
                            <button
                                className="group/3b777358 flex h-8 cursor-pointer items-center justify-center gap-2 rounded-md border-none px-3 disabled:cursor-default disabled:bg-neutral-200 hover:disabled:cursor-default hover:disabled:bg-neutral-200 active:disabled:cursor-default active:disabled:bg-neutral-200 bg-brand-50 hover:bg-brand-100 active:bg-brand-50"
                                type="button"
                                aria-label="Next posts"
                            >
                                <span className="text-body font-body group-disabled/3b777358:text-neutral-400 text-brand-700 icon-wrapper-module_root__-l6uP">
                                    <span className="h-4 w-4 icon-wrapper-module_root__-l6uP">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="1em"
                                            height="1em"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth={2}
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        >
                                            <path d="m9 18 6-6-6-6" />
                                        </svg>
                                    </span>
                                </span>
                                <div className="hidden h-4 w-4 flex-none items-center justify-center gap-2">
                                    <div className="text-caption font-caption group-disabled/3b777358:text-neutral-400 text-brand-700 loader-module_root__-0Kak" />
                                </div>
                            </button>
                        </div> */}
                    </div>
                    <div className="relative">
                        <div className="overflow-hidden">
                            <div
                                className="flex transition-transform duration-500 ease-in-out"
                                style={{ transform: "translateX(-0%)" }}
                            >
                                <div className="w-full flex-shrink-0">
                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                        <a
                                            className="group block h-full "
                                        // // href="/blog/codegen-inference-research"
                                        >
                                            <article className="h-full flex flex-col rounded-xl border border-white/[0.08] bg-gradient-to-b from-white/[0.03] to-white/[0.01] overflow-hidden hover:border-white/[0.15] hover:shadow-[0_0_40px_-15px_rgba(153,213,42,0.1)] transition-all duration-300">
                                                <div className="relative aspect-[16/10] overflow-hidden bg-gradient-to-br from-brand-400/10 via-neutral-800/50 to-neutral-900 flex-shrink-0">
                                                    <img
                                                        alt="Optimizing Models to Be Fast at Codegen"
                                                        loading="lazy"
                                                        decoding="async"
                                                        data-nimg="fill"
                                                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                                                        style={{
                                                            position: "absolute",
                                                            height: "100%",
                                                            width: "100%",
                                                            left: 0,
                                                            top: 0,
                                                            right: 0,
                                                            bottom: 0,
                                                            color: "transparent"
                                                        }}
                                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                                        srcSet="https://www.morphllm.com/_next/image?url=%2Fimages%2Fblog%2Fcodegen-inference-research.png&w=256&q=75 256w, https://www.morphllm.com/_next/image?url=%2Fimages%2Fblog%2Fcodegen-inference-research.png&w=384&q=75 384w, https://www.morphllm.com/_next/image?url=%2Fimages%2Fblog%2Fcodegen-inference-research.png&w=640&q=75 640w, https://www.morphllm.com/_next/image?url=%2Fimages%2Fblog%2Fcodegen-inference-research.png&w=750&q=75 750w, https://www.morphllm.com/_next/image?url=%2Fimages%2Fblog%2Fcodegen-inference-research.png&w=828&q=75 828w, https://www.morphllm.com/_next/image?url=%2Fimages%2Fblog%2Fcodegen-inference-research.png&w=1080&q=75 1080w, https://www.morphllm.com/_next/image?url=%2Fimages%2Fblog%2Fcodegen-inference-research.png&w=1200&q=75 1200w, https://www.morphllm.com/_next/image?url=%2Fimages%2Fblog%2Fcodegen-inference-research.png&w=1920&q=75 1920w, https://www.morphllm.com/_next/image?url=%2Fimages%2Fblog%2Fcodegen-inference-research.png&w=2048&q=75 2048w, https://www.morphllm.com/_next/image?url=%2Fimages%2Fblog%2Fcodegen-inference-research.png&w=3840&q=75 3840w"
                                                        src="https://www.morphllm.com/_next/image?url=%2Fimages%2Fblog%2Fcodegen-inference-research.png&w=3840&q=75"
                                                    />
                                                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                                    <div className="absolute top-3 left-3">
                                                        <span className="inline-flex items-center px-2.5 py-1 rounded-full text-[10px] font-medium uppercase tracking-wider bg-black/60 text-white/90 backdrop-blur-sm border border-white/10">
                                                            Research
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className="p-6 flex flex-col flex-1">
                                                    <h3 className="text-xl font-semibold leading-snug text-white mb-3 line-clamp-2 min-h-[3.5rem] group-hover:text-brand-primary transition-colors duration-300">
                                                        Optimizing Models to Be Fast at Codegen
                                                    </h3>
                                                    <p className="text-sm text-landing-secondary/70 leading-relaxed line-clamp-2 min-h-[2.5rem] mb-4">
                                                        Three places the open inference stack quits, and what we
                                                        build past each. A speculator trained on the model's own
                                                        diffs: a generic draft gets 1.93x, a trained one 3.07x. An
                                                        autoresearch loop for kernels on $7K GPUs: 97 to 162
                                                        tok/s. A prefix cache that crosses NVLink-denied boxes
                                                        over plain TCP.
                                                    </p>
                                                    <div className="flex items-center justify-between mt-auto pt-4 border-t border-white/[0.06]">
                                                        <div className="flex items-center gap-3">
                                                            <div className="w-6 h-6 rounded-full overflow-hidden ring-1 ring-white/10">
                                                                <img
                                                                    alt="Tejas Bhakta"
                                                                    loading="lazy"
                                                                    width={24}
                                                                    height={24}
                                                                    decoding="async"
                                                                    data-nimg={1}
                                                                    className="w-full h-full object-cover"
                                                                    style={{ color: "transparent" }}
                                                                    srcSet="https://www.morphllm.com/_next/image?url=%2Fauthors%2Ftejas-bhakta.jpg&w=32&q=75 1x, https://www.morphllm.com/_next/image?url=%2Fauthors%2Ftejas-bhakta.jpg&w=48&q=75 2x"
                                                                    src="https://www.morphllm.com/_next/image?url=%2Fauthors%2Ftejas-bhakta.jpg&w=48&q=75"
                                                                />
                                                            </div>
                                                            <span className="text-xs text-white/70">
                                                                Tejas Bhakta
                                                            </span>
                                                            <span className="w-1 h-1 rounded-full bg-white/20" />
                                                            <time className="text-xs text-landing-secondary/60">
                                                                Jun 19, 2026
                                                            </time>
                                                        </div>
                                                        <div className="text-brand-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300">
                                                            <span className="h-4 w-4 icon-wrapper-module_root__-l6uP">
                                                                <svg
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    width="1em"
                                                                    height="1em"
                                                                    viewBox="0 0 24 24"
                                                                    fill="none"
                                                                    stroke="currentColor"
                                                                    strokeWidth={2}
                                                                    strokeLinecap="round"
                                                                    strokeLinejoin="round"
                                                                >
                                                                    <path d="M7 7h10v10" />
                                                                    <path d="M7 17 17 7" />
                                                                </svg>
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </article>
                                        </a>
                                        <a
                                            className="group block h-full "
                                        //   // href="/blog/compute-scarcity-kernels"
                                        >
                                            <article className="h-full flex flex-col rounded-xl border border-white/[0.08] bg-gradient-to-b from-white/[0.03] to-white/[0.01] overflow-hidden hover:border-white/[0.15] hover:shadow-[0_0_40px_-15px_rgba(153,213,42,0.1)] transition-all duration-300">
                                                <div className="relative aspect-[16/10] overflow-hidden bg-gradient-to-br from-brand-400/10 via-neutral-800/50 to-neutral-900 flex-shrink-0">
                                                    <img
                                                        alt="Compute Scarcity Is Morphing the Market for Kernels"
                                                        loading="lazy"
                                                        decoding="async"
                                                        data-nimg="fill"
                                                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                                                        style={{
                                                            position: "absolute",
                                                            height: "100%",
                                                            width: "100%",
                                                            left: 0,
                                                            top: 0,
                                                            right: 0,
                                                            bottom: 0,
                                                            color: "transparent"
                                                        }}
                                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                                        srcSet="https://www.morphllm.com/_next/image?url=%2Fimages%2Fblog%2Fcompute-scarcity-kernels.png&w=256&q=75 256w, https://www.morphllm.com/_next/image?url=%2Fimages%2Fblog%2Fcompute-scarcity-kernels.png&w=384&q=75 384w, https://www.morphllm.com/_next/image?url=%2Fimages%2Fblog%2Fcompute-scarcity-kernels.png&w=640&q=75 640w, https://www.morphllm.com/_next/image?url=%2Fimages%2Fblog%2Fcompute-scarcity-kernels.png&w=750&q=75 750w, https://www.morphllm.com/_next/image?url=%2Fimages%2Fblog%2Fcompute-scarcity-kernels.png&w=828&q=75 828w, https://www.morphllm.com/_next/image?url=%2Fimages%2Fblog%2Fcompute-scarcity-kernels.png&w=1080&q=75 1080w, https://www.morphllm.com/_next/image?url=%2Fimages%2Fblog%2Fcompute-scarcity-kernels.png&w=1200&q=75 1200w, https://www.morphllm.com/_next/image?url=%2Fimages%2Fblog%2Fcompute-scarcity-kernels.png&w=1920&q=75 1920w, https://www.morphllm.com/_next/image?url=%2Fimages%2Fblog%2Fcompute-scarcity-kernels.png&w=2048&q=75 2048w, https://www.morphllm.com/_next/image?url=%2Fimages%2Fblog%2Fcompute-scarcity-kernels.png&w=3840&q=75 3840w"
                                                        src="https://www.morphllm.com/_next/image?url=%2Fimages%2Fblog%2Fcompute-scarcity-kernels.png&w=3840&q=75"
                                                    />
                                                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                                    <div className="absolute top-3 left-3">
                                                        <span className="inline-flex items-center px-2.5 py-1 rounded-full text-[10px] font-medium uppercase tracking-wider bg-black/60 text-white/90 backdrop-blur-sm border border-white/10">
                                                            Company
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className="p-6 flex flex-col flex-1">
                                                    <h3 className="text-xl font-semibold leading-snug text-white mb-3 line-clamp-2 min-h-[3.5rem] group-hover:text-brand-primary transition-colors duration-300">
                                                        Compute Scarcity Is Morphing the Market for Kernels
                                                    </h3>
                                                    <p className="text-sm text-landing-secondary/70 leading-relaxed line-clamp-2 min-h-[2.5rem] mb-4">
                                                        When compute is abundant, inefficiency hides in the noise
                                                        and nobody gets paid to find it. When it gets scarce,
                                                        every crack in the stack gets a price. That price signal
                                                        is fragmenting inference into a market of
                                                        workload-specialized kernels.
                                                    </p>
                                                    <div className="flex items-center justify-between mt-auto pt-4 border-t border-white/[0.06]">
                                                        <div className="flex items-center gap-3">
                                                            <div className="w-6 h-6 rounded-full overflow-hidden ring-1 ring-white/10">
                                                                <img
                                                                    alt="Tejas Bhakta"
                                                                    loading="lazy"
                                                                    width={24}
                                                                    height={24}
                                                                    decoding="async"
                                                                    data-nimg={1}
                                                                    className="w-full h-full object-cover"
                                                                    style={{ color: "transparent" }}
                                                                    srcSet="https://www.morphllm.com/_next/image?url=%2Fauthors%2Ftejas-bhakta.jpg&w=32&q=75 1x, https://www.morphllm.com/_next/image?url=%2Fauthors%2Ftejas-bhakta.jpg&w=48&q=75 2x"
                                                                    src="https://www.morphllm.com/_next/image?url=%2Fauthors%2Ftejas-bhakta.jpg&w=48&q=75"
                                                                />
                                                            </div>
                                                            <span className="text-xs text-white/70">
                                                                Tejas Bhakta
                                                            </span>
                                                            <span className="w-1 h-1 rounded-full bg-white/20" />
                                                            <time className="text-xs text-landing-secondary/60">
                                                                Jun 18, 2026
                                                            </time>
                                                        </div>
                                                        <div className="text-brand-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300">
                                                            <span className="h-4 w-4 icon-wrapper-module_root__-l6uP">
                                                                <svg
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    width="1em"
                                                                    height="1em"
                                                                    viewBox="0 0 24 24"
                                                                    fill="none"
                                                                    stroke="currentColor"
                                                                    strokeWidth={2}
                                                                    strokeLinecap="round"
                                                                    strokeLinejoin="round"
                                                                >
                                                                    <path d="M7 7h10v10" />
                                                                    <path d="M7 17 17 7" />
                                                                </svg>
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </article>
                                        </a>
                                        <a
                                            className="group block h-full "
                                        // // href="/blog/multi-agent-systems"
                                        >
                                            <article className="h-full flex flex-col rounded-xl border border-white/[0.08] bg-gradient-to-b from-white/[0.03] to-white/[0.01] overflow-hidden hover:border-white/[0.15] hover:shadow-[0_0_40px_-15px_rgba(153,213,42,0.1)] transition-all duration-300">
                                                <div className="relative aspect-[16/10] overflow-hidden bg-gradient-to-br from-brand-400/10 via-neutral-800/50 to-neutral-900 flex-shrink-0">
                                                    <img
                                                        alt="The Case for Multi-Agent Systems"
                                                        loading="lazy"
                                                        decoding="async"
                                                        data-nimg="fill"
                                                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                                                        style={{
                                                            position: "absolute",
                                                            height: "100%",
                                                            width: "100%",
                                                            left: 0,
                                                            top: 0,
                                                            right: 0,
                                                            bottom: 0,
                                                            color: "transparent"
                                                        }}
                                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                                        srcSet="https://www.morphllm.com/_next/image?url=%2Fimages%2Fmulti-agent-systems.webp&w=256&q=75 256w, https://www.morphllm.com/_next/image?url=%2Fimages%2Fmulti-agent-systems.webp&w=384&q=75 384w, https://www.morphllm.com/_next/image?url=%2Fimages%2Fmulti-agent-systems.webp&w=640&q=75 640w, https://www.morphllm.com/_next/image?url=%2Fimages%2Fmulti-agent-systems.webp&w=750&q=75 750w, https://www.morphllm.com/_next/image?url=%2Fimages%2Fmulti-agent-systems.webp&w=828&q=75 828w, https://www.morphllm.com/_next/image?url=%2Fimages%2Fmulti-agent-systems.webp&w=1080&q=75 1080w, https://www.morphllm.com/_next/image?url=%2Fimages%2Fmulti-agent-systems.webp&w=1200&q=75 1200w, https://www.morphllm.com/_next/image?url=%2Fimages%2Fmulti-agent-systems.webp&w=1920&q=75 1920w, https://www.morphllm.com/_next/image?url=%2Fimages%2Fmulti-agent-systems.webp&w=2048&q=75 2048w, https://www.morphllm.com/_next/image?url=%2Fimages%2Fmulti-agent-systems.webp&w=3840&q=75 3840w"
                                                        src="https://www.morphllm.com/_next/image?url=%2Fimages%2Fmulti-agent-systems.webp&w=3840&q=75"
                                                    />
                                                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                                    <div className="absolute top-3 left-3">
                                                        <span className="inline-flex items-center px-2.5 py-1 rounded-full text-[10px] font-medium uppercase tracking-wider bg-black/60 text-white/90 backdrop-blur-sm border border-white/10">
                                                            Research
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className="p-6 flex flex-col flex-1">
                                                    <h3 className="text-xl font-semibold leading-snug text-white mb-3 line-clamp-2 min-h-[3.5rem] group-hover:text-brand-primary transition-colors duration-300">
                                                        The Case for Multi-Agent Systems
                                                    </h3>
                                                    <p className="text-sm text-landing-secondary/70 leading-relaxed line-clamp-2 min-h-[2.5rem] mb-4">
                                                        Anthropic's multi-agent system outperformed single-agent
                                                        Opus by 90%. The reason isn't better models. It's that
                                                        intelligence degrades when you ask one agent to do
                                                        everything, and improves when you let specialists work in
                                                        isolation.
                                                    </p>
                                                    <div className="flex items-center justify-between mt-auto pt-4 border-t border-white/[0.06]">
                                                        <div className="flex items-center gap-3">
                                                            <div className="w-6 h-6 rounded-full overflow-hidden ring-1 ring-white/10">
                                                                <img
                                                                    alt="Tejas Bhakta"
                                                                    loading="lazy"
                                                                    width={24}
                                                                    height={24}
                                                                    decoding="async"
                                                                    data-nimg={1}
                                                                    className="w-full h-full object-cover"
                                                                    style={{ color: "transparent" }}
                                                                    srcSet="https://www.morphllm.com/_next/image?url=%2Fauthors%2Ftejas-bhakta.jpg&w=32&q=75 1x, https://www.morphllm.com/_next/image?url=%2Fauthors%2Ftejas-bhakta.jpg&w=48&q=75 2x"
                                                                    src="https://www.morphllm.com/_next/image?url=%2Fauthors%2Ftejas-bhakta.jpg&w=48&q=75"
                                                                />
                                                            </div>
                                                            <span className="text-xs text-white/70">
                                                                Tejas Bhakta
                                                            </span>
                                                            <span className="w-1 h-1 rounded-full bg-white/20" />
                                                            <time className="text-xs text-landing-secondary/60">
                                                                Apr 5, 2026
                                                            </time>
                                                        </div>
                                                        <div className="text-brand-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300">
                                                            <span className="h-4 w-4 icon-wrapper-module_root__-l6uP">
                                                                <svg
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    width="1em"
                                                                    height="1em"
                                                                    viewBox="0 0 24 24"
                                                                    fill="none"
                                                                    stroke="currentColor"
                                                                    strokeWidth={2}
                                                                    strokeLinecap="round"
                                                                    strokeLinejoin="round"
                                                                >
                                                                    <path d="M7 7h10v10" />
                                                                    <path d="M7 17 17 7" />
                                                                </svg>
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </article>
                                        </a>
                                    </div>
                                </div>
                                <div className="w-full flex-shrink-0">
                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                        <a
                                            className="group block h-full "
                                        // // href="/blog/all-agents-coding-agents"
                                        >
                                            <article className="h-full flex flex-col rounded-xl border border-white/[0.08] bg-gradient-to-b from-white/[0.03] to-white/[0.01] overflow-hidden hover:border-white/[0.15] hover:shadow-[0_0_40px_-15px_rgba(153,213,42,0.1)] transition-all duration-300">
                                                <div className="relative aspect-[16/10] overflow-hidden bg-gradient-to-br from-brand-400/10 via-neutral-800/50 to-neutral-900 flex-shrink-0">
                                                    <img
                                                        alt="Everyone is Building the Same Thing: All Agents Will Be Coding Agents"
                                                        loading="lazy"
                                                        decoding="async"
                                                        data-nimg="fill"
                                                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                                                        style={{
                                                            position: "absolute",
                                                            height: "100%",
                                                            width: "100%",
                                                            left: 0,
                                                            top: 0,
                                                            right: 0,
                                                            bottom: 0,
                                                            color: "transparent"
                                                        }}
                                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                                        srcSet="https://www.morphllm.com/_next/image?url=%2Fimages%2Fall-agents-coding.webp&w=256&q=75 256w, https://www.morphllm.com/_next/image?url=%2Fimages%2Fall-agents-coding.webp&w=384&q=75 384w, https://www.morphllm.com/_next/image?url=%2Fimages%2Fall-agents-coding.webp&w=640&q=75 640w, https://www.morphllm.com/_next/image?url=%2Fimages%2Fall-agents-coding.webp&w=750&q=75 750w, https://www.morphllm.com/_next/image?url=%2Fimages%2Fall-agents-coding.webp&w=828&q=75 828w, https://www.morphllm.com/_next/image?url=%2Fimages%2Fall-agents-coding.webp&w=1080&q=75 1080w, https://www.morphllm.com/_next/image?url=%2Fimages%2Fall-agents-coding.webp&w=1200&q=75 1200w, https://www.morphllm.com/_next/image?url=%2Fimages%2Fall-agents-coding.webp&w=1920&q=75 1920w, https://www.morphllm.com/_next/image?url=%2Fimages%2Fall-agents-coding.webp&w=2048&q=75 2048w, https://www.morphllm.com/_next/image?url=%2Fimages%2Fall-agents-coding.webp&w=3840&q=75 3840w"
                                                        src="https://www.morphllm.com/_next/image?url=%2Fimages%2Fall-agents-coding.webp&w=3840&q=75"
                                                    />
                                                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                                    <div className="absolute top-3 left-3">
                                                        <span className="inline-flex items-center px-2.5 py-1 rounded-full text-[10px] font-medium uppercase tracking-wider bg-black/60 text-white/90 backdrop-blur-sm border border-white/10">
                                                            Research
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className="p-6 flex flex-col flex-1">
                                                    <h3 className="text-xl font-semibold leading-snug text-white mb-3 line-clamp-2 min-h-[3.5rem] group-hover:text-brand-primary transition-colors duration-300">
                                                        Everyone is Building the Same Thing: All Agents Will Be
                                                        Coding Agents
                                                    </h3>
                                                    <p className="text-sm text-landing-secondary/70 leading-relaxed line-clamp-2 min-h-[2.5rem] mb-4">
                                                        Lovable and Cursor are obvious coding agents. What's less
                                                        obvious: Linear, Posthog, customer support agents,
                                                        marketing agents, and hardware telemetry platforms are all
                                                        becoming coding agents too. Code is the substrate that
                                                        lets you build the feature that builds all features.
                                                    </p>
                                                    <div className="flex items-center justify-between mt-auto pt-4 border-t border-white/[0.06]">
                                                        <div className="flex items-center gap-3">
                                                            <div className="w-6 h-6 rounded-full overflow-hidden ring-1 ring-white/10">
                                                                <img
                                                                    alt="Tejas Bhakta"
                                                                    loading="lazy"
                                                                    width={24}
                                                                    height={24}
                                                                    decoding="async"
                                                                    data-nimg={1}
                                                                    className="w-full h-full object-cover"
                                                                    style={{ color: "transparent" }}
                                                                    srcSet="https://www.morphllm.com/_next/image?url=%2Fauthors%2Ftejas-bhakta.jpg&w=32&q=75 1x, https://www.morphllm.com/_next/image?url=%2Fauthors%2Ftejas-bhakta.jpg&w=48&q=75 2x"
                                                                    src="https://www.morphllm.com/_next/image?url=%2Fauthors%2Ftejas-bhakta.jpg&w=48&q=75"
                                                                />
                                                            </div>
                                                            <span className="text-xs text-white/70">
                                                                Tejas Bhakta
                                                            </span>
                                                            <span className="w-1 h-1 rounded-full bg-white/20" />
                                                            <time className="text-xs text-landing-secondary/60">
                                                                Mar 18, 2026
                                                            </time>
                                                        </div>
                                                        <div className="text-brand-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300">
                                                            <span className="h-4 w-4 icon-wrapper-module_root__-l6uP">
                                                                <svg
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    width="1em"
                                                                    height="1em"
                                                                    viewBox="0 0 24 24"
                                                                    fill="none"
                                                                    stroke="currentColor"
                                                                    strokeWidth={2}
                                                                    strokeLinecap="round"
                                                                    strokeLinejoin="round"
                                                                >
                                                                    <path d="M7 7h10v10" />
                                                                    <path d="M7 17 17 7" />
                                                                </svg>
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </article>
                                        </a>
                                        <a className="group block h-full "
                                        // // href="/blog/bitter-lesson"
                                        >
                                            <article className="h-full flex flex-col rounded-xl border border-white/[0.08] bg-gradient-to-b from-white/[0.03] to-white/[0.01] overflow-hidden hover:border-white/[0.15] hover:shadow-[0_0_40px_-15px_rgba(153,213,42,0.1)] transition-all duration-300">
                                                <div className="relative aspect-[16/10] overflow-hidden bg-gradient-to-br from-brand-400/10 via-neutral-800/50 to-neutral-900 flex-shrink-0">
                                                    <img
                                                        alt="The Bitter Lesson Applied: Why Coding Agents Need More Compute, Not More Cleverness"
                                                        loading="lazy"
                                                        decoding="async"
                                                        data-nimg="fill"
                                                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                                                        style={{
                                                            position: "absolute",
                                                            height: "100%",
                                                            width: "100%",
                                                            left: 0,
                                                            top: 0,
                                                            right: 0,
                                                            bottom: 0,
                                                            color: "transparent"
                                                        }}
                                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                                        srcSet="https://www.morphllm.com/_next/image?url=%2Fimages%2Fbitter-lesson.webp&w=256&q=75 256w, https://www.morphllm.com/_next/image?url=%2Fimages%2Fbitter-lesson.webp&w=384&q=75 384w, https://www.morphllm.com/_next/image?url=%2Fimages%2Fbitter-lesson.webp&w=640&q=75 640w, https://www.morphllm.com/_next/image?url=%2Fimages%2Fbitter-lesson.webp&w=750&q=75 750w, https://www.morphllm.com/_next/image?url=%2Fimages%2Fbitter-lesson.webp&w=828&q=75 828w, https://www.morphllm.com/_next/image?url=%2Fimages%2Fbitter-lesson.webp&w=1080&q=75 1080w, https://www.morphllm.com/_next/image?url=%2Fimages%2Fbitter-lesson.webp&w=1200&q=75 1200w, https://www.morphllm.com/_next/image?url=%2Fimages%2Fbitter-lesson.webp&w=1920&q=75 1920w, https://www.morphllm.com/_next/image?url=%2Fimages%2Fbitter-lesson.webp&w=2048&q=75 2048w, https://www.morphllm.com/_next/image?url=%2Fimages%2Fbitter-lesson.webp&w=3840&q=75 3840w"
                                                        src="https://www.morphllm.com/_next/image?url=%2Fimages%2Fbitter-lesson.webp&w=3840&q=75"
                                                    />
                                                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                                    <div className="absolute top-3 left-3">
                                                        <span className="inline-flex items-center px-2.5 py-1 rounded-full text-[10px] font-medium uppercase tracking-wider bg-black/60 text-white/90 backdrop-blur-sm border border-white/10">
                                                            Research
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className="p-6 flex flex-col flex-1">
                                                    <h3 className="text-xl font-semibold leading-snug text-white mb-3 line-clamp-2 min-h-[3.5rem] group-hover:text-brand-primary transition-colors duration-300">
                                                        The Bitter Lesson Applied: Why Coding Agents Need More
                                                        Compute, Not More Cleverness
                                                    </h3>
                                                    <p className="text-sm text-landing-secondary/70 leading-relaxed line-clamp-2 min-h-[2.5rem] mb-4">
                                                        Rich Sutton's bitter lesson predicted that scaling compute
                                                        beats hand-engineering. Seven years later, coding agents
                                                        are proving him right. The fix isn't smarter models. It's
                                                        specialized infrastructure.
                                                    </p>
                                                    <div className="flex items-center justify-between mt-auto pt-4 border-t border-white/[0.06]">
                                                        <div className="flex items-center gap-3">
                                                            <div className="w-6 h-6 rounded-full overflow-hidden ring-1 ring-white/10">
                                                                <img
                                                                    alt="Tejas Bhakta"
                                                                    loading="lazy"
                                                                    width={24}
                                                                    height={24}
                                                                    decoding="async"
                                                                    data-nimg={1}
                                                                    className="w-full h-full object-cover"
                                                                    style={{ color: "transparent" }}
                                                                    srcSet="https://www.morphllm.com/_next/image?url=%2Fauthors%2Ftejas-bhakta.jpg&w=32&q=75 1x, https://www.morphllm.com/_next/image?url=%2Fauthors%2Ftejas-bhakta.jpg&w=48&q=75 2x"
                                                                    src="https://www.morphllm.com/_next/image?url=%2Fauthors%2Ftejas-bhakta.jpg&w=48&q=75"
                                                                />
                                                            </div>
                                                            <span className="text-xs text-white/70">
                                                                Tejas Bhakta
                                                            </span>
                                                            <span className="w-1 h-1 rounded-full bg-white/20" />
                                                            <time className="text-xs text-landing-secondary/60">
                                                                Mar 16, 2026
                                                            </time>
                                                        </div>
                                                        <div className="text-brand-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300">
                                                            <span className="h-4 w-4 icon-wrapper-module_root__-l6uP">
                                                                <svg
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    width="1em"
                                                                    height="1em"
                                                                    viewBox="0 0 24 24"
                                                                    fill="none"
                                                                    stroke="currentColor"
                                                                    strokeWidth={2}
                                                                    strokeLinecap="round"
                                                                    strokeLinejoin="round"
                                                                >
                                                                    <path d="M7 7h10v10" />
                                                                    <path d="M7 17 17 7" />
                                                                </svg>
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </article>
                                        </a>
                                        <a
                                            className="group block h-full "
                                        // // href="/blog/coding-agent-harness-lessons"
                                        >
                                            <article className="h-full flex flex-col rounded-xl border border-white/[0.08] bg-gradient-to-b from-white/[0.03] to-white/[0.01] overflow-hidden hover:border-white/[0.15] hover:shadow-[0_0_40px_-15px_rgba(153,213,42,0.1)] transition-all duration-300">
                                                <div className="relative aspect-[16/10] overflow-hidden bg-gradient-to-br from-brand-400/10 via-neutral-800/50 to-neutral-900 flex-shrink-0">
                                                    <img
                                                        alt="Lessons from 40+ Coding Agent Harnesses: Context Is the Entire Game"
                                                        loading="lazy"
                                                        decoding="async"
                                                        data-nimg="fill"
                                                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                                                        style={{
                                                            position: "absolute",
                                                            height: "100%",
                                                            width: "100%",
                                                            left: 0,
                                                            top: 0,
                                                            right: 0,
                                                            bottom: 0,
                                                            color: "transparent"
                                                        }}
                                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                                        srcSet="https://www.morphllm.com/_next/image?url=%2Fimages%2Fagent-engineering.webp&w=256&q=75 256w, https://www.morphllm.com/_next/image?url=%2Fimages%2Fagent-engineering.webp&w=384&q=75 384w, https://www.morphllm.com/_next/image?url=%2Fimages%2Fagent-engineering.webp&w=640&q=75 640w, https://www.morphllm.com/_next/image?url=%2Fimages%2Fagent-engineering.webp&w=750&q=75 750w, https://www.morphllm.com/_next/image?url=%2Fimages%2Fagent-engineering.webp&w=828&q=75 828w, https://www.morphllm.com/_next/image?url=%2Fimages%2Fagent-engineering.webp&w=1080&q=75 1080w, https://www.morphllm.com/_next/image?url=%2Fimages%2Fagent-engineering.webp&w=1200&q=75 1200w, https://www.morphllm.com/_next/image?url=%2Fimages%2Fagent-engineering.webp&w=1920&q=75 1920w, https://www.morphllm.com/_next/image?url=%2Fimages%2Fagent-engineering.webp&w=2048&q=75 2048w, https://www.morphllm.com/_next/image?url=%2Fimages%2Fagent-engineering.webp&w=3840&q=75 3840w"
                                                        src="https://www.morphllm.com/_next/image?url=%2Fimages%2Fagent-engineering.webp&w=3840&q=75"
                                                    />
                                                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                                    <div className="absolute top-3 left-3">
                                                        <span className="inline-flex items-center px-2.5 py-1 rounded-full text-[10px] font-medium uppercase tracking-wider bg-black/60 text-white/90 backdrop-blur-sm border border-white/10">
                                                            Engineering
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className="p-6 flex flex-col flex-1">
                                                    <h3 className="text-xl font-semibold leading-snug text-white mb-3 line-clamp-2 min-h-[3.5rem] group-hover:text-brand-primary transition-colors duration-300">
                                                        Lessons from 40+ Coding Agent Harnesses: Context Is the
                                                        Entire Game
                                                    </h3>
                                                    <p className="text-sm text-landing-secondary/70 leading-relaxed line-clamp-2 min-h-[2.5rem] mb-4">
                                                        After studying every major coding agent harness, one
                                                        pattern dominates: context pollution determines task
                                                        failure. Search wastes 60% of agent time. Edit retries
                                                        inject redundant file reads. The agents that win are the
                                                        ones that keep their context clean.
                                                    </p>
                                                    <div className="flex items-center justify-between mt-auto pt-4 border-t border-white/[0.06]">
                                                        <div className="flex items-center gap-3">
                                                            <div className="w-6 h-6 rounded-full overflow-hidden ring-1 ring-white/10">
                                                                <img
                                                                    alt="Tejas Bhakta"
                                                                    loading="lazy"
                                                                    width={24}
                                                                    height={24}
                                                                    decoding="async"
                                                                    data-nimg={1}
                                                                    className="w-full h-full object-cover"
                                                                    style={{ color: "transparent" }}
                                                                    srcSet="https://www.morphllm.com/_next/image?url=%2Fauthors%2Ftejas-bhakta.jpg&w=32&q=75 1x, https://www.morphllm.com/_next/image?url=%2Fauthors%2Ftejas-bhakta.jpg&w=48&q=75 2x"
                                                                    src="https://www.morphllm.com/_next/image?url=%2Fauthors%2Ftejas-bhakta.jpg&w=48&q=75"
                                                                />
                                                            </div>
                                                            <span className="text-xs text-white/70">
                                                                Tejas Bhakta
                                                            </span>
                                                            <span className="w-1 h-1 rounded-full bg-white/20" />
                                                            <time className="text-xs text-landing-secondary/60">
                                                                Mar 16, 2026
                                                            </time>
                                                        </div>
                                                        <div className="text-brand-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300">
                                                            <span className="h-4 w-4 icon-wrapper-module_root__-l6uP">
                                                                <svg
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    width="1em"
                                                                    height="1em"
                                                                    viewBox="0 0 24 24"
                                                                    fill="none"
                                                                    stroke="currentColor"
                                                                    strokeWidth={2}
                                                                    strokeLinecap="round"
                                                                    strokeLinejoin="round"
                                                                >
                                                                    <path d="M7 7h10v10" />
                                                                    <path d="M7 17 17 7" />
                                                                </svg>
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </article>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex gap-2 w-full justify-center mt-12">
                        <button
                            className="h-2 w-2 rounded-full transition-colors duration-200 bg-brand-primary"
                            aria-label="Go to page 1"
                        />
                        <button
                            className="h-2 w-2 rounded-full transition-colors duration-200 bg-white/20 hover:bg-white/40"
                            aria-label="Go to page 2"
                        />
                    </div>
                </div>
            </section>
            <section className="jsx-e4c0ee4aadd7f829 py-24 lg:py-32">
                <div className="jsx-e4c0ee4aadd7f829 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
                    <div className="jsx-e4c0ee4aadd7f829 flex items-end justify-between mb-12">
                        <div className="jsx-e4c0ee4aadd7f829 max-w-2xl">
                            <h2 className="jsx-e4c0ee4aadd7f829 text-4xl lg:text-5xl font-geist-circle font-medium mb-3 tracking-tight">
                                Explore{" "}
                                <span className="jsx-e4c0ee4aadd7f829 text-brand-primary">
                                    Codegen
                                </span>
                            </h2>
                            <p className="jsx-e4c0ee4aadd7f829 text-base lg:text-lg text-landing-secondary/80">
                                Critical takes on the latest in codegen.
                            </p>
                        </div>
                        <div className="jsx-e4c0ee4aadd7f829 hidden md:flex gap-2">
                            <button
                                disabled
                                className="jsx-e4c0ee4aadd7f829 w-10 h-10 rounded-lg border border-white/[0.08] bg-white/[0.02] hover:bg-white/[0.06] hover:border-white/[0.15] transition-all duration-200 flex items-center justify-center disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:bg-white/[0.02] disabled:hover:border-white/[0.08]"
                            >
                                <svg
                                    width={15}
                                    height={15}
                                    viewBox="0 0 15 15"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5 text-white"
                                >
                                    <path
                                        d="M8.84182 3.13514C9.04327 3.32401 9.05348 3.64042 8.86462 3.84188L5.43521 7.49991L8.86462 11.1579C9.05348 11.3594 9.04327 11.6758 8.84182 11.8647C8.64036 12.0535 8.32394 12.0433 8.13508 11.8419L4.38508 7.84188C4.20477 7.64955 4.20477 7.35027 4.38508 7.15794L8.13508 3.15794C8.32394 2.95648 8.64036 2.94628 8.84182 3.13514Z"
                                        fill="currentColor"
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </button>
                            <button className="jsx-e4c0ee4aadd7f829 w-10 h-10 rounded-lg border border-white/[0.08] bg-white/[0.02] hover:bg-white/[0.06] hover:border-white/[0.15] transition-all duration-200 flex items-center justify-center disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:bg-white/[0.02] disabled:hover:border-white/[0.08]">
                                <svg
                                    width={15}
                                    height={15}
                                    viewBox="0 0 15 15"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5 text-white"
                                >
                                    <path
                                        d="M6.1584 3.13508C6.35985 2.94621 6.67627 2.95642 6.86514 3.15788L10.6151 7.15788C10.7954 7.3502 10.7954 7.64949 10.6151 7.84182L6.86514 11.8418C6.67627 12.0433 6.35985 12.0535 6.1584 11.8646C5.95694 11.6757 5.94673 11.3593 6.1356 11.1579L9.565 7.49985L6.1356 3.84182C5.94673 3.64036 5.95694 3.32394 6.1584 3.13508Z"
                                        fill="currentColor"
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </button>
                        </div>
                    </div>
                    <div
                        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
                        className="jsx-e4c0ee4aadd7f829 flex gap-5 overflow-x-auto scrollbar-hide pb-2 -mx-6 px-6 sm:-mx-8 sm:px-8 lg:-mx-12 lg:px-12"
                    >
                        <a
                            className="group min-w-[300px] md:min-w-[360px] bg-white/[0.02] rounded-xl border border-white/[0.08] overflow-hidden hover:bg-white/[0.04] hover:border-white/[0.15] transition-all duration-300 flex flex-col"
                            // href="/swe-bench-pro"
                        >
                            <div className="jsx-e4c0ee4aadd7f829 relative h-44 md:h-48 overflow-hidden bg-gradient-to-br from-white/5 to-white/[0.02]">
                                <img
                                    alt="What is SWE-Bench Pro?"
                                    loading="lazy"
                                    decoding="async"
                                    data-nimg="fill"
                                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                                    style={{
                                        position: "absolute",
                                        height: "100%",
                                        width: "100%",
                                        left: 0,
                                        top: 0,
                                        right: 0,
                                        bottom: 0,
                                        color: "transparent"
                                    }}
                                    sizes="(max-width: 768px) 300px, 360px"
                                    srcSet="https://www.morphllm.com/_next/image?url=%2Fimages%2Fswe-bench-pro.jpg&w=32&q=75 32w, https://www.morphllm.com/_next/image?url=%2Fimages%2Fswe-bench-pro.jpg&w=48&q=75 48w, https://www.morphllm.com/_next/image?url=%2Fimages%2Fswe-bench-pro.jpg&w=64&q=75 64w, https://www.morphllm.com/_next/image?url=%2Fimages%2Fswe-bench-pro.jpg&w=96&q=75 96w, https://www.morphllm.com/_next/image?url=%2Fimages%2Fswe-bench-pro.jpg&w=128&q=75 128w, https://www.morphllm.com/_next/image?url=%2Fimages%2Fswe-bench-pro.jpg&w=256&q=75 256w, https://www.morphllm.com/_next/image?url=%2Fimages%2Fswe-bench-pro.jpg&w=384&q=75 384w, https://www.morphllm.com/_next/image?url=%2Fimages%2Fswe-bench-pro.jpg&w=640&q=75 640w, https://www.morphllm.com/_next/image?url=%2Fimages%2Fswe-bench-pro.jpg&w=750&q=75 750w, https://www.morphllm.com/_next/image?url=%2Fimages%2Fswe-bench-pro.jpg&w=828&q=75 828w, https://www.morphllm.com/_next/image?url=%2Fimages%2Fswe-bench-pro.jpg&w=1080&q=75 1080w, https://www.morphllm.com/_next/image?url=%2Fimages%2Fswe-bench-pro.jpg&w=1200&q=75 1200w, https://www.morphllm.com/_next/image?url=%2Fimages%2Fswe-bench-pro.jpg&w=1920&q=75 1920w, https://www.morphllm.com/_next/image?url=%2Fimages%2Fswe-bench-pro.jpg&w=2048&q=75 2048w, https://www.morphllm.com/_next/image?url=%2Fimages%2Fswe-bench-pro.jpg&w=3840&q=75 3840w"
                                    src="https://www.morphllm.com/_next/image?url=%2Fimages%2Fswe-bench-pro.jpg&w=3840&q=75"
                                />
                                <div className="jsx-e4c0ee4aadd7f829 absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                            </div>
                            <div className="jsx-e4c0ee4aadd7f829 p-5 flex flex-col flex-1">
                                <h3 className="jsx-e4c0ee4aadd7f829 text-lg font-semibold mb-2 text-white group-hover:text-brand-primary transition-colors leading-tight">
                                    What is SWE-Bench Pro?
                                </h3>
                                <p className="jsx-e4c0ee4aadd7f829 text-landing-secondary/70 text-sm leading-relaxed flex-1 line-clamp-2">
                                    Scale AI's benchmark for coding agents: 1,865 tasks across 41 repos.
                                    Leaderboard, scores, and why WarpGrep v2 lifts every model to #1.
                                </p>
                                <div className="jsx-e4c0ee4aadd7f829 flex items-center mt-4 text-brand-primary/80 group-hover:text-brand-primary text-xs font-medium uppercase tracking-wider transition-colors">
                                    <span className="jsx-e4c0ee4aadd7f829">Learn more</span>
                                    <svg
                                        width={15}
                                        height={15}
                                        viewBox="0 0 15 15"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="ml-0.5 h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5"
                                    >
                                        <path
                                            d="M6.1584 3.13508C6.35985 2.94621 6.67627 2.95642 6.86514 3.15788L10.6151 7.15788C10.7954 7.3502 10.7954 7.64949 10.6151 7.84182L6.86514 11.8418C6.67627 12.0433 6.35985 12.0535 6.1584 11.8646C5.95694 11.6757 5.94673 11.3593 6.1356 11.1579L9.565 7.49985L6.1356 3.84182C5.94673 3.64036 5.95694 3.32394 6.1584 3.13508Z"
                                            fill="currentColor"
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                </div>
                            </div>
                        </a>
                        <a
                            className="group min-w-[300px] md:min-w-[360px] bg-white/[0.02] rounded-xl border border-white/[0.08] overflow-hidden hover:bg-white/[0.04] hover:border-white/[0.15] transition-all duration-300 flex flex-col"
                            // href="/comparisons/codex-vs-claude-code"
                        >
                            <div className="jsx-e4c0ee4aadd7f829 relative h-44 md:h-48 overflow-hidden bg-gradient-to-br from-white/5 to-white/[0.02]">
                                <img
                                    alt="Codex vs Claude Code: Real Data, Not Vibes"
                                    loading="lazy"
                                    decoding="async"
                                    data-nimg="fill"
                                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                                    style={{
                                        position: "absolute",
                                        height: "100%",
                                        width: "100%",
                                        left: 0,
                                        top: 0,
                                        right: 0,
                                        bottom: 0,
                                        color: "transparent"
                                    }}
                                    sizes="(max-width: 768px) 300px, 360px"
                                    srcSet="https://www.morphllm.com/_next/image?url=%2Fimages%2Fcodex-vs-claude-code-comparison.png&w=32&q=75 32w, https://www.morphllm.com/_next/image?url=%2Fimages%2Fcodex-vs-claude-code-comparison.png&w=48&q=75 48w, https://www.morphllm.com/_next/image?url=%2Fimages%2Fcodex-vs-claude-code-comparison.png&w=64&q=75 64w, https://www.morphllm.com/_next/image?url=%2Fimages%2Fcodex-vs-claude-code-comparison.png&w=96&q=75 96w, https://www.morphllm.com/_next/image?url=%2Fimages%2Fcodex-vs-claude-code-comparison.png&w=128&q=75 128w, https://www.morphllm.com/_next/image?url=%2Fimages%2Fcodex-vs-claude-code-comparison.png&w=256&q=75 256w, https://www.morphllm.com/_next/image?url=%2Fimages%2Fcodex-vs-claude-code-comparison.png&w=384&q=75 384w, https://www.morphllm.com/_next/image?url=%2Fimages%2Fcodex-vs-claude-code-comparison.png&w=640&q=75 640w, https://www.morphllm.com/_next/image?url=%2Fimages%2Fcodex-vs-claude-code-comparison.png&w=750&q=75 750w, https://www.morphllm.com/_next/image?url=%2Fimages%2Fcodex-vs-claude-code-comparison.png&w=828&q=75 828w, https://www.morphllm.com/_next/image?url=%2Fimages%2Fcodex-vs-claude-code-comparison.png&w=1080&q=75 1080w, https://www.morphllm.com/_next/image?url=%2Fimages%2Fcodex-vs-claude-code-comparison.png&w=1200&q=75 1200w, https://www.morphllm.com/_next/image?url=%2Fimages%2Fcodex-vs-claude-code-comparison.png&w=1920&q=75 1920w, https://www.morphllm.com/_next/image?url=%2Fimages%2Fcodex-vs-claude-code-comparison.png&w=2048&q=75 2048w, https://www.morphllm.com/_next/image?url=%2Fimages%2Fcodex-vs-claude-code-comparison.png&w=3840&q=75 3840w"
                                    src="https://www.morphllm.com/_next/image?url=%2Fimages%2Fcodex-vs-claude-code-comparison.png&w=3840&q=75"
                                />
                                <div className="jsx-e4c0ee4aadd7f829 absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                            </div>
                            <div className="jsx-e4c0ee4aadd7f829 p-5 flex flex-col flex-1">
                                <h3 className="jsx-e4c0ee4aadd7f829 text-lg font-semibold mb-2 text-white group-hover:text-brand-primary transition-colors leading-tight">
                                    Codex vs Claude Code: Real Data, Not Vibes
                                </h3>
                                <p className="jsx-e4c0ee4aadd7f829 text-landing-secondary/70 text-sm leading-relaxed flex-1 line-clamp-2">
                                    Real data on when Codex destroys Claude Code and when it doesn't.
                                    Token economics, failure modes, and which $20/month actually
                                    delivers.
                                </p>
                                <div className="jsx-e4c0ee4aadd7f829 flex items-center mt-4 text-brand-primary/80 group-hover:text-brand-primary text-xs font-medium uppercase tracking-wider transition-colors">
                                    <span className="jsx-e4c0ee4aadd7f829">Learn more</span>
                                    <svg
                                        width={15}
                                        height={15}
                                        viewBox="0 0 15 15"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="ml-0.5 h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5"
                                    >
                                        <path
                                            d="M6.1584 3.13508C6.35985 2.94621 6.67627 2.95642 6.86514 3.15788L10.6151 7.15788C10.7954 7.3502 10.7954 7.64949 10.6151 7.84182L6.86514 11.8418C6.67627 12.0433 6.35985 12.0535 6.1584 11.8646C5.95694 11.6757 5.94673 11.3593 6.1356 11.1579L9.565 7.49985L6.1356 3.84182C5.94673 3.64036 5.95694 3.32394 6.1584 3.13508Z"
                                            fill="currentColor"
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                </div>
                            </div>
                        </a>
                        <a
                            className="group min-w-[300px] md:min-w-[360px] bg-white/[0.02] rounded-xl border border-white/[0.08] overflow-hidden hover:bg-white/[0.04] hover:border-white/[0.15] transition-all duration-300 flex flex-col"
                            // href="/comparisons/cursor-alternatives"
                        >
                            <div className="jsx-e4c0ee4aadd7f829 relative h-44 md:h-48 overflow-hidden bg-gradient-to-br from-white/5 to-white/[0.02]">
                                <img
                                    alt="Cursor Alternatives: 8 Tools Tested (2026)"
                                    loading="lazy"
                                    decoding="async"
                                    data-nimg="fill"
                                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                                    style={{
                                        position: "absolute",
                                        height: "100%",
                                        width: "100%",
                                        left: 0,
                                        top: 0,
                                        right: 0,
                                        bottom: 0,
                                        color: "transparent"
                                    }}
                                    sizes="(max-width: 768px) 300px, 360px"
                                    srcSet="https://www.morphllm.com/_next/image?url=%2Fimages%2Fcomparisons%2Fcursor-alternatives.png&w=32&q=75 32w, https://www.morphllm.com/_next/image?url=%2Fimages%2Fcomparisons%2Fcursor-alternatives.png&w=48&q=75 48w, https://www.morphllm.com/_next/image?url=%2Fimages%2Fcomparisons%2Fcursor-alternatives.png&w=64&q=75 64w, https://www.morphllm.com/_next/image?url=%2Fimages%2Fcomparisons%2Fcursor-alternatives.png&w=96&q=75 96w, https://www.morphllm.com/_next/image?url=%2Fimages%2Fcomparisons%2Fcursor-alternatives.png&w=128&q=75 128w, https://www.morphllm.com/_next/image?url=%2Fimages%2Fcomparisons%2Fcursor-alternatives.png&w=256&q=75 256w, https://www.morphllm.com/_next/image?url=%2Fimages%2Fcomparisons%2Fcursor-alternatives.png&w=384&q=75 384w, https://www.morphllm.com/_next/image?url=%2Fimages%2Fcomparisons%2Fcursor-alternatives.png&w=640&q=75 640w, https://www.morphllm.com/_next/image?url=%2Fimages%2Fcomparisons%2Fcursor-alternatives.png&w=750&q=75 750w, https://www.morphllm.com/_next/image?url=%2Fimages%2Fcomparisons%2Fcursor-alternatives.png&w=828&q=75 828w, https://www.morphllm.com/_next/image?url=%2Fimages%2Fcomparisons%2Fcursor-alternatives.png&w=1080&q=75 1080w, https://www.morphllm.com/_next/image?url=%2Fimages%2Fcomparisons%2Fcursor-alternatives.png&w=1200&q=75 1200w, https://www.morphllm.com/_next/image?url=%2Fimages%2Fcomparisons%2Fcursor-alternatives.png&w=1920&q=75 1920w, https://www.morphllm.com/_next/image?url=%2Fimages%2Fcomparisons%2Fcursor-alternatives.png&w=2048&q=75 2048w, https://www.morphllm.com/_next/image?url=%2Fimages%2Fcomparisons%2Fcursor-alternatives.png&w=3840&q=75 3840w"
                                    src="https://www.morphllm.com/_next/image?url=%2Fimages%2Fcomparisons%2Fcursor-alternatives.png&w=3840&q=75"
                                />
                                <div className="jsx-e4c0ee4aadd7f829 absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                            </div>
                            <div className="jsx-e4c0ee4aadd7f829 p-5 flex flex-col flex-1">
                                <h3 className="jsx-e4c0ee4aadd7f829 text-lg font-semibold mb-2 text-white group-hover:text-brand-primary transition-colors leading-tight">
                                    Cursor Alternatives: 8 Tools Tested (2026)
                                </h3>
                                <p className="jsx-e4c0ee4aadd7f829 text-landing-secondary/70 text-sm leading-relaxed flex-1 line-clamp-2">
                                    Every serious Cursor alternative benchmarked: Claude Code, Windsurf,
                                    Cline, Copilot, Aider, Codex, and OpenCode.
                                </p>
                                <div className="jsx-e4c0ee4aadd7f829 flex items-center mt-4 text-brand-primary/80 group-hover:text-brand-primary text-xs font-medium uppercase tracking-wider transition-colors">
                                    <span className="jsx-e4c0ee4aadd7f829">Learn more</span>
                                    <svg
                                        width={15}
                                        height={15}
                                        viewBox="0 0 15 15"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="ml-0.5 h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5"
                                    >
                                        <path
                                            d="M6.1584 3.13508C6.35985 2.94621 6.67627 2.95642 6.86514 3.15788L10.6151 7.15788C10.7954 7.3502 10.7954 7.64949 10.6151 7.84182L6.86514 11.8418C6.67627 12.0433 6.35985 12.0535 6.1584 11.8646C5.95694 11.6757 5.94673 11.3593 6.1356 11.1579L9.565 7.49985L6.1356 3.84182C5.94673 3.64036 5.95694 3.32394 6.1584 3.13508Z"
                                            fill="currentColor"
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                </div>
                            </div>
                        </a>
                        <a
                            className="group min-w-[300px] md:min-w-[360px] bg-white/[0.02] rounded-xl border border-white/[0.08] overflow-hidden hover:bg-white/[0.04] hover:border-white/[0.15] transition-all duration-300 flex flex-col"
                            // href="/best-ai-model-for-coding"
                        >
                            <div className="jsx-e4c0ee4aadd7f829 relative h-44 md:h-48 overflow-hidden bg-gradient-to-br from-white/5 to-white/[0.02]">
                                <img
                                    alt="Best AI Model for Coding 2026"
                                    loading="lazy"
                                    decoding="async"
                                    data-nimg="fill"
                                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                                    style={{
                                        position: "absolute",
                                        height: "100%",
                                        width: "100%",
                                        left: 0,
                                        top: 0,
                                        right: 0,
                                        bottom: 0,
                                        color: "transparent"
                                    }}
                                    sizes="(max-width: 768px) 300px, 360px"
                                    srcSet="https://www.morphllm.com/_next/image?url=%2Fimages%2Fbest-ai-model-for-coding.png&w=32&q=75 32w, https://www.morphllm.com/_next/image?url=%2Fimages%2Fbest-ai-model-for-coding.png&w=48&q=75 48w, https://www.morphllm.com/_next/image?url=%2Fimages%2Fbest-ai-model-for-coding.png&w=64&q=75 64w, https://www.morphllm.com/_next/image?url=%2Fimages%2Fbest-ai-model-for-coding.png&w=96&q=75 96w, https://www.morphllm.com/_next/image?url=%2Fimages%2Fbest-ai-model-for-coding.png&w=128&q=75 128w, https://www.morphllm.com/_next/image?url=%2Fimages%2Fbest-ai-model-for-coding.png&w=256&q=75 256w, https://www.morphllm.com/_next/image?url=%2Fimages%2Fbest-ai-model-for-coding.png&w=384&q=75 384w, https://www.morphllm.com/_next/image?url=%2Fimages%2Fbest-ai-model-for-coding.png&w=640&q=75 640w, https://www.morphllm.com/_next/image?url=%2Fimages%2Fbest-ai-model-for-coding.png&w=750&q=75 750w, https://www.morphllm.com/_next/image?url=%2Fimages%2Fbest-ai-model-for-coding.png&w=828&q=75 828w, https://www.morphllm.com/_next/image?url=%2Fimages%2Fbest-ai-model-for-coding.png&w=1080&q=75 1080w, https://www.morphllm.com/_next/image?url=%2Fimages%2Fbest-ai-model-for-coding.png&w=1200&q=75 1200w, https://www.morphllm.com/_next/image?url=%2Fimages%2Fbest-ai-model-for-coding.png&w=1920&q=75 1920w, https://www.morphllm.com/_next/image?url=%2Fimages%2Fbest-ai-model-for-coding.png&w=2048&q=75 2048w, https://www.morphllm.com/_next/image?url=%2Fimages%2Fbest-ai-model-for-coding.png&w=3840&q=75 3840w"
                                    src="https://www.morphllm.com/_next/image?url=%2Fimages%2Fbest-ai-model-for-coding.png&w=3840&q=75"
                                />
                                <div className="jsx-e4c0ee4aadd7f829 absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                            </div>
                            <div className="jsx-e4c0ee4aadd7f829 p-5 flex flex-col flex-1">
                                <h3 className="jsx-e4c0ee4aadd7f829 text-lg font-semibold mb-2 text-white group-hover:text-brand-primary transition-colors leading-tight">
                                    Best AI Model for Coding 2026
                                </h3>
                                <p className="jsx-e4c0ee4aadd7f829 text-landing-secondary/70 text-sm leading-relaxed flex-1 line-clamp-2">
                                    Claude Opus 4.5 leads SWE-bench at 80.9%. Grok 4 hits 81%. Scores,
                                    API pricing, speed, and why the harness matters more than the model.
                                </p>
                                <div className="jsx-e4c0ee4aadd7f829 flex items-center mt-4 text-brand-primary/80 group-hover:text-brand-primary text-xs font-medium uppercase tracking-wider transition-colors">
                                    <span className="jsx-e4c0ee4aadd7f829">Learn more</span>
                                    <svg
                                        width={15}
                                        height={15}
                                        viewBox="0 0 15 15"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="ml-0.5 h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5"
                                    >
                                        <path
                                            d="M6.1584 3.13508C6.35985 2.94621 6.67627 2.95642 6.86514 3.15788L10.6151 7.15788C10.7954 7.3502 10.7954 7.64949 10.6151 7.84182L6.86514 11.8418C6.67627 12.0433 6.35985 12.0535 6.1584 11.8646C5.95694 11.6757 5.94673 11.3593 6.1356 11.1579L9.565 7.49985L6.1356 3.84182C5.94673 3.64036 5.95694 3.32394 6.1584 3.13508Z"
                                            fill="currentColor"
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                </div>
                            </div>
                        </a>
                        <a
                            className="group min-w-[300px] md:min-w-[360px] bg-white/[0.02] rounded-xl border border-white/[0.08] overflow-hidden hover:bg-white/[0.04] hover:border-white/[0.15] transition-all duration-300 flex flex-col"
                            // href="/ai-coding-agent"
                        >
                            <div className="jsx-e4c0ee4aadd7f829 relative h-44 md:h-48 overflow-hidden bg-gradient-to-br from-white/5 to-white/[0.02]">
                                <img
                                    alt="AI Coding Agents: The 2026 Landscape"
                                    loading="lazy"
                                    decoding="async"
                                    data-nimg="fill"
                                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                                    style={{
                                        position: "absolute",
                                        height: "100%",
                                        width: "100%",
                                        left: 0,
                                        top: 0,
                                        right: 0,
                                        bottom: 0,
                                        color: "transparent"
                                    }}
                                    sizes="(max-width: 768px) 300px, 360px"
                                    srcSet="https://www.morphllm.com/_next/image?url=%2Fimages%2Fagentic-search.jpg&w=32&q=75 32w, https://www.morphllm.com/_next/image?url=%2Fimages%2Fagentic-search.jpg&w=48&q=75 48w, https://www.morphllm.com/_next/image?url=%2Fimages%2Fagentic-search.jpg&w=64&q=75 64w, https://www.morphllm.com/_next/image?url=%2Fimages%2Fagentic-search.jpg&w=96&q=75 96w, https://www.morphllm.com/_next/image?url=%2Fimages%2Fagentic-search.jpg&w=128&q=75 128w, https://www.morphllm.com/_next/image?url=%2Fimages%2Fagentic-search.jpg&w=256&q=75 256w, https://www.morphllm.com/_next/image?url=%2Fimages%2Fagentic-search.jpg&w=384&q=75 384w, https://www.morphllm.com/_next/image?url=%2Fimages%2Fagentic-search.jpg&w=640&q=75 640w, https://www.morphllm.com/_next/image?url=%2Fimages%2Fagentic-search.jpg&w=750&q=75 750w, https://www.morphllm.com/_next/image?url=%2Fimages%2Fagentic-search.jpg&w=828&q=75 828w, https://www.morphllm.com/_next/image?url=%2Fimages%2Fagentic-search.jpg&w=1080&q=75 1080w, https://www.morphllm.com/_next/image?url=%2Fimages%2Fagentic-search.jpg&w=1200&q=75 1200w, https://www.morphllm.com/_next/image?url=%2Fimages%2Fagentic-search.jpg&w=1920&q=75 1920w, https://www.morphllm.com/_next/image?url=%2Fimages%2Fagentic-search.jpg&w=2048&q=75 2048w, https://www.morphllm.com/_next/image?url=%2Fimages%2Fagentic-search.jpg&w=3840&q=75 3840w"
                                    src="https://www.morphllm.com/_next/image?url=%2Fimages%2Fagentic-search.jpg&w=3840&q=75"
                                />
                                <div className="jsx-e4c0ee4aadd7f829 absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                            </div>
                            <div className="jsx-e4c0ee4aadd7f829 p-5 flex flex-col flex-1">
                                <h3 className="jsx-e4c0ee4aadd7f829 text-lg font-semibold mb-2 text-white group-hover:text-brand-primary transition-colors leading-tight">
                                    AI Coding Agents: The 2026 Landscape
                                </h3>
                                <p className="jsx-e4c0ee4aadd7f829 text-landing-secondary/70 text-sm leading-relaxed flex-1 line-clamp-2">
                                    How coding agents actually work, what separates harnesses from
                                    models, and where the field is headed.
                                </p>
                                <div className="jsx-e4c0ee4aadd7f829 flex items-center mt-4 text-brand-primary/80 group-hover:text-brand-primary text-xs font-medium uppercase tracking-wider transition-colors">
                                    <span className="jsx-e4c0ee4aadd7f829">Learn more</span>
                                    <svg
                                        width={15}
                                        height={15}
                                        viewBox="0 0 15 15"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="ml-0.5 h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5"
                                    >
                                        <path
                                            d="M6.1584 3.13508C6.35985 2.94621 6.67627 2.95642 6.86514 3.15788L10.6151 7.15788C10.7954 7.3502 10.7954 7.64949 10.6151 7.84182L6.86514 11.8418C6.67627 12.0433 6.35985 12.0535 6.1584 11.8646C5.95694 11.6757 5.94673 11.3593 6.1356 11.1579L9.565 7.49985L6.1356 3.84182C5.94673 3.64036 5.95694 3.32394 6.1584 3.13508Z"
                                            fill="currentColor"
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                </div>
                            </div>
                        </a>
                        <a
                            className="group min-w-[300px] md:min-w-[360px] bg-white/[0.02] rounded-xl border border-white/[0.08] overflow-hidden hover:bg-white/[0.04] hover:border-white/[0.15] transition-all duration-300 flex flex-col"
                            // href="/playwright-mcp"
                        >
                            <div className="jsx-e4c0ee4aadd7f829 relative h-44 md:h-48 overflow-hidden bg-gradient-to-br from-white/5 to-white/[0.02]">
                                <img
                                    alt="Playwright MCP: Browser Testing for AI Agents"
                                    loading="lazy"
                                    decoding="async"
                                    data-nimg="fill"
                                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                                    style={{
                                        position: "absolute",
                                        height: "100%",
                                        width: "100%",
                                        left: 0,
                                        top: 0,
                                        right: 0,
                                        bottom: 0,
                                        color: "transparent"
                                    }}
                                    sizes="(max-width: 768px) 300px, 360px"
                                    srcSet="https://www.morphllm.com/_next/image?url=%2Fimages%2Fplaywright-mcp.png&w=32&q=75 32w, https://www.morphllm.com/_next/image?url=%2Fimages%2Fplaywright-mcp.png&w=48&q=75 48w, https://www.morphllm.com/_next/image?url=%2Fimages%2Fplaywright-mcp.png&w=64&q=75 64w, https://www.morphllm.com/_next/image?url=%2Fimages%2Fplaywright-mcp.png&w=96&q=75 96w, https://www.morphllm.com/_next/image?url=%2Fimages%2Fplaywright-mcp.png&w=128&q=75 128w, https://www.morphllm.com/_next/image?url=%2Fimages%2Fplaywright-mcp.png&w=256&q=75 256w, https://www.morphllm.com/_next/image?url=%2Fimages%2Fplaywright-mcp.png&w=384&q=75 384w, https://www.morphllm.com/_next/image?url=%2Fimages%2Fplaywright-mcp.png&w=640&q=75 640w, https://www.morphllm.com/_next/image?url=%2Fimages%2Fplaywright-mcp.png&w=750&q=75 750w, https://www.morphllm.com/_next/image?url=%2Fimages%2Fplaywright-mcp.png&w=828&q=75 828w, https://www.morphllm.com/_next/image?url=%2Fimages%2Fplaywright-mcp.png&w=1080&q=75 1080w, https://www.morphllm.com/_next/image?url=%2Fimages%2Fplaywright-mcp.png&w=1200&q=75 1200w, https://www.morphllm.com/_next/image?url=%2Fimages%2Fplaywright-mcp.png&w=1920&q=75 1920w, https://www.morphllm.com/_next/image?url=%2Fimages%2Fplaywright-mcp.png&w=2048&q=75 2048w, https://www.morphllm.com/_next/image?url=%2Fimages%2Fplaywright-mcp.png&w=3840&q=75 3840w"
                                    src="https://www.morphllm.com/_next/image?url=%2Fimages%2Fplaywright-mcp.png&w=3840&q=75"
                                />
                                <div className="jsx-e4c0ee4aadd7f829 absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                            </div>
                            <div className="jsx-e4c0ee4aadd7f829 p-5 flex flex-col flex-1">
                                <h3 className="jsx-e4c0ee4aadd7f829 text-lg font-semibold mb-2 text-white group-hover:text-brand-primary transition-colors leading-tight">
                                    Playwright MCP: Browser Testing for AI Agents
                                </h3>
                                <p className="jsx-e4c0ee4aadd7f829 text-landing-secondary/70 text-sm leading-relaxed flex-1 line-clamp-2">
                                    Set up Playwright MCP in Claude Code, Cursor, or Codex. MCP vs CLI
                                    token costs and Stagehand comparison.
                                </p>
                                <div className="jsx-e4c0ee4aadd7f829 flex items-center mt-4 text-brand-primary/80 group-hover:text-brand-primary text-xs font-medium uppercase tracking-wider transition-colors">
                                    <span className="jsx-e4c0ee4aadd7f829">Learn more</span>
                                    <svg
                                        width={15}
                                        height={15}
                                        viewBox="0 0 15 15"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="ml-0.5 h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5"
                                    >
                                        <path
                                            d="M6.1584 3.13508C6.35985 2.94621 6.67627 2.95642 6.86514 3.15788L10.6151 7.15788C10.7954 7.3502 10.7954 7.64949 10.6151 7.84182L6.86514 11.8418C6.67627 12.0433 6.35985 12.0535 6.1584 11.8646C5.95694 11.6757 5.94673 11.3593 6.1356 11.1579L9.565 7.49985L6.1356 3.84182C5.94673 3.64036 5.95694 3.32394 6.1584 3.13508Z"
                                            fill="currentColor"
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                </div>
                            </div>
                        </a>
                        <a
                            className="group min-w-[300px] md:min-w-[360px] bg-white/[0.02] rounded-xl border border-white/[0.08] overflow-hidden hover:bg-white/[0.04] hover:border-white/[0.15] transition-all duration-300 flex flex-col"
                            // href="/install-claude-code"
                        >
                            <div className="jsx-e4c0ee4aadd7f829 relative h-44 md:h-48 overflow-hidden bg-gradient-to-br from-white/5 to-white/[0.02]">
                                <img
                                    alt="Install Claude Code: Complete Setup Guide"
                                    loading="lazy"
                                    decoding="async"
                                    data-nimg="fill"
                                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                                    style={{
                                        position: "absolute",
                                        height: "100%",
                                        width: "100%",
                                        left: 0,
                                        top: 0,
                                        right: 0,
                                        bottom: 0,
                                        color: "transparent"
                                    }}
                                    sizes="(max-width: 768px) 300px, 360px"
                                    srcSet="https://www.morphllm.com/_next/image?url=%2Fimages%2Finstall-claude-code.png&w=32&q=75 32w, https://www.morphllm.com/_next/image?url=%2Fimages%2Finstall-claude-code.png&w=48&q=75 48w, https://www.morphllm.com/_next/image?url=%2Fimages%2Finstall-claude-code.png&w=64&q=75 64w, https://www.morphllm.com/_next/image?url=%2Fimages%2Finstall-claude-code.png&w=96&q=75 96w, https://www.morphllm.com/_next/image?url=%2Fimages%2Finstall-claude-code.png&w=128&q=75 128w, https://www.morphllm.com/_next/image?url=%2Fimages%2Finstall-claude-code.png&w=256&q=75 256w, https://www.morphllm.com/_next/image?url=%2Fimages%2Finstall-claude-code.png&w=384&q=75 384w, https://www.morphllm.com/_next/image?url=%2Fimages%2Finstall-claude-code.png&w=640&q=75 640w, https://www.morphllm.com/_next/image?url=%2Fimages%2Finstall-claude-code.png&w=750&q=75 750w, https://www.morphllm.com/_next/image?url=%2Fimages%2Finstall-claude-code.png&w=828&q=75 828w, https://www.morphllm.com/_next/image?url=%2Fimages%2Finstall-claude-code.png&w=1080&q=75 1080w, https://www.morphllm.com/_next/image?url=%2Fimages%2Finstall-claude-code.png&w=1200&q=75 1200w, https://www.morphllm.com/_next/image?url=%2Fimages%2Finstall-claude-code.png&w=1920&q=75 1920w, https://www.morphllm.com/_next/image?url=%2Fimages%2Finstall-claude-code.png&w=2048&q=75 2048w, https://www.morphllm.com/_next/image?url=%2Fimages%2Finstall-claude-code.png&w=3840&q=75 3840w"
                                    src="https://www.morphllm.com/_next/image?url=%2Fimages%2Finstall-claude-code.png&w=3840&q=75"
                                />
                                <div className="jsx-e4c0ee4aadd7f829 absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                            </div>
                            <div className="jsx-e4c0ee4aadd7f829 p-5 flex flex-col flex-1">
                                <h3 className="jsx-e4c0ee4aadd7f829 text-lg font-semibold mb-2 text-white group-hover:text-brand-primary transition-colors leading-tight">
                                    Install Claude Code: Complete Setup Guide
                                </h3>
                                <p className="jsx-e4c0ee4aadd7f829 text-landing-secondary/70 text-sm leading-relaxed flex-1 line-clamp-2">
                                    Native install, Homebrew, npm. Auth, CLAUDE.md, MCP setup, and
                                    troubleshooting.
                                </p>
                                <div className="jsx-e4c0ee4aadd7f829 flex items-center mt-4 text-brand-primary/80 group-hover:text-brand-primary text-xs font-medium uppercase tracking-wider transition-colors">
                                    <span className="jsx-e4c0ee4aadd7f829">Learn more</span>
                                    <svg
                                        width={15}
                                        height={15}
                                        viewBox="0 0 15 15"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="ml-0.5 h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5"
                                    >
                                        <path
                                            d="M6.1584 3.13508C6.35985 2.94621 6.67627 2.95642 6.86514 3.15788L10.6151 7.15788C10.7954 7.3502 10.7954 7.64949 10.6151 7.84182L6.86514 11.8418C6.67627 12.0433 6.35985 12.0535 6.1584 11.8646C5.95694 11.6757 5.94673 11.3593 6.1356 11.1579L9.565 7.49985L6.1356 3.84182C5.94673 3.64036 5.95694 3.32394 6.1584 3.13508Z"
                                            fill="currentColor"
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                </div>
                            </div>
                        </a>
                        <a
                            className="group min-w-[300px] md:min-w-[360px] bg-white/[0.02] rounded-xl border border-white/[0.08] overflow-hidden hover:bg-white/[0.04] hover:border-white/[0.15] transition-all duration-300 flex flex-col"
                            // href="/context-rot"
                        >
                            <div className="jsx-e4c0ee4aadd7f829 relative h-44 md:h-48 overflow-hidden bg-gradient-to-br from-white/5 to-white/[0.02]">
                                <img
                                    alt="What Is Context Rot?"
                                    loading="lazy"
                                    decoding="async"
                                    data-nimg="fill"
                                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                                    style={{
                                        position: "absolute",
                                        height: "100%",
                                        width: "100%",
                                        left: 0,
                                        top: 0,
                                        right: 0,
                                        bottom: 0,
                                        color: "transparent"
                                    }}
                                    sizes="(max-width: 768px) 300px, 360px"
                                    srcSet="https://www.morphllm.com/_next/image?url=%2Fimages%2Fcontext-rot.jpg&w=32&q=75 32w, https://www.morphllm.com/_next/image?url=%2Fimages%2Fcontext-rot.jpg&w=48&q=75 48w, https://www.morphllm.com/_next/image?url=%2Fimages%2Fcontext-rot.jpg&w=64&q=75 64w, https://www.morphllm.com/_next/image?url=%2Fimages%2Fcontext-rot.jpg&w=96&q=75 96w, https://www.morphllm.com/_next/image?url=%2Fimages%2Fcontext-rot.jpg&w=128&q=75 128w, https://www.morphllm.com/_next/image?url=%2Fimages%2Fcontext-rot.jpg&w=256&q=75 256w, https://www.morphllm.com/_next/image?url=%2Fimages%2Fcontext-rot.jpg&w=384&q=75 384w, https://www.morphllm.com/_next/image?url=%2Fimages%2Fcontext-rot.jpg&w=640&q=75 640w, https://www.morphllm.com/_next/image?url=%2Fimages%2Fcontext-rot.jpg&w=750&q=75 750w, https://www.morphllm.com/_next/image?url=%2Fimages%2Fcontext-rot.jpg&w=828&q=75 828w, https://www.morphllm.com/_next/image?url=%2Fimages%2Fcontext-rot.jpg&w=1080&q=75 1080w, https://www.morphllm.com/_next/image?url=%2Fimages%2Fcontext-rot.jpg&w=1200&q=75 1200w, https://www.morphllm.com/_next/image?url=%2Fimages%2Fcontext-rot.jpg&w=1920&q=75 1920w, https://www.morphllm.com/_next/image?url=%2Fimages%2Fcontext-rot.jpg&w=2048&q=75 2048w, https://www.morphllm.com/_next/image?url=%2Fimages%2Fcontext-rot.jpg&w=3840&q=75 3840w"
                                    src="https://www.morphllm.com/_next/image?url=%2Fimages%2Fcontext-rot.jpg&w=3840&q=75"
                                />
                                <div className="jsx-e4c0ee4aadd7f829 absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                            </div>
                            <div className="jsx-e4c0ee4aadd7f829 p-5 flex flex-col flex-1">
                                <h3 className="jsx-e4c0ee4aadd7f829 text-lg font-semibold mb-2 text-white group-hover:text-brand-primary transition-colors leading-tight">
                                    What Is Context Rot?
                                </h3>
                                <p className="jsx-e4c0ee4aadd7f829 text-landing-secondary/70 text-sm leading-relaxed flex-1 line-clamp-2">
                                    Why LLMs degrade as context grows. 30%+ performance drop from
                                    lost-in-the-middle, and how subagent isolation reduces context rot
                                    by 70%.
                                </p>
                                <div className="jsx-e4c0ee4aadd7f829 flex items-center mt-4 text-brand-primary/80 group-hover:text-brand-primary text-xs font-medium uppercase tracking-wider transition-colors">
                                    <span className="jsx-e4c0ee4aadd7f829">Learn more</span>
                                    <svg
                                        width={15}
                                        height={15}
                                        viewBox="0 0 15 15"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="ml-0.5 h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5"
                                    >
                                        <path
                                            d="M6.1584 3.13508C6.35985 2.94621 6.67627 2.95642 6.86514 3.15788L10.6151 7.15788C10.7954 7.3502 10.7954 7.64949 10.6151 7.84182L6.86514 11.8418C6.67627 12.0433 6.35985 12.0535 6.1584 11.8646C5.95694 11.6757 5.94673 11.3593 6.1356 11.1579L9.565 7.49985L6.1356 3.84182C5.94673 3.64036 5.95694 3.32394 6.1584 3.13508Z"
                                            fill="currentColor"
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                </div>
                            </div>
                        </a>
                        <a
                            className="group min-w-[300px] md:min-w-[360px] bg-white/[0.02] rounded-xl border border-white/[0.08] overflow-hidden hover:bg-white/[0.04] hover:border-white/[0.15] transition-all duration-300 flex flex-col"
                            // href="/context-engineering"
                        >
                            <div className="jsx-e4c0ee4aadd7f829 relative h-44 md:h-48 overflow-hidden bg-gradient-to-br from-white/5 to-white/[0.02]">
                                <img
                                    alt="Context Engineering for AI Agents"
                                    loading="lazy"
                                    decoding="async"
                                    data-nimg="fill"
                                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                                    style={{
                                        position: "absolute",
                                        height: "100%",
                                        width: "100%",
                                        left: 0,
                                        top: 0,
                                        right: 0,
                                        bottom: 0,
                                        color: "transparent"
                                    }}
                                    sizes="(max-width: 768px) 300px, 360px"
                                    srcSet="https://www.morphllm.com/_next/image?url=%2Fimages%2Fcontext-rot.jpg&w=32&q=75 32w, https://www.morphllm.com/_next/image?url=%2Fimages%2Fcontext-rot.jpg&w=48&q=75 48w, https://www.morphllm.com/_next/image?url=%2Fimages%2Fcontext-rot.jpg&w=64&q=75 64w, https://www.morphllm.com/_next/image?url=%2Fimages%2Fcontext-rot.jpg&w=96&q=75 96w, https://www.morphllm.com/_next/image?url=%2Fimages%2Fcontext-rot.jpg&w=128&q=75 128w, https://www.morphllm.com/_next/image?url=%2Fimages%2Fcontext-rot.jpg&w=256&q=75 256w, https://www.morphllm.com/_next/image?url=%2Fimages%2Fcontext-rot.jpg&w=384&q=75 384w, https://www.morphllm.com/_next/image?url=%2Fimages%2Fcontext-rot.jpg&w=640&q=75 640w, https://www.morphllm.com/_next/image?url=%2Fimages%2Fcontext-rot.jpg&w=750&q=75 750w, https://www.morphllm.com/_next/image?url=%2Fimages%2Fcontext-rot.jpg&w=828&q=75 828w, https://www.morphllm.com/_next/image?url=%2Fimages%2Fcontext-rot.jpg&w=1080&q=75 1080w, https://www.morphllm.com/_next/image?url=%2Fimages%2Fcontext-rot.jpg&w=1200&q=75 1200w, https://www.morphllm.com/_next/image?url=%2Fimages%2Fcontext-rot.jpg&w=1920&q=75 1920w, https://www.morphllm.com/_next/image?url=%2Fimages%2Fcontext-rot.jpg&w=2048&q=75 2048w, https://www.morphllm.com/_next/image?url=%2Fimages%2Fcontext-rot.jpg&w=3840&q=75 3840w"
                                    src="https://www.morphllm.com/_next/image?url=%2Fimages%2Fcontext-rot.jpg&w=3840&q=75"
                                />
                                <div className="jsx-e4c0ee4aadd7f829 absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                            </div>
                            <div className="jsx-e4c0ee4aadd7f829 p-5 flex flex-col flex-1">
                                <h3 className="jsx-e4c0ee4aadd7f829 text-lg font-semibold mb-2 text-white group-hover:text-brand-primary transition-colors leading-tight">
                                    Context Engineering for AI Agents
                                </h3>
                                <p className="jsx-e4c0ee4aadd7f829 text-landing-secondary/70 text-sm leading-relaxed flex-1 line-clamp-2">
                                    The difference between a prompt and an agent that works. How to
                                    structure context so coding agents stay coherent across long
                                    sessions.
                                </p>
                                <div className="jsx-e4c0ee4aadd7f829 flex items-center mt-4 text-brand-primary/80 group-hover:text-brand-primary text-xs font-medium uppercase tracking-wider transition-colors">
                                    <span className="jsx-e4c0ee4aadd7f829">Learn more</span>
                                    <svg
                                        width={15}
                                        height={15}
                                        viewBox="0 0 15 15"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="ml-0.5 h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5"
                                    >
                                        <path
                                            d="M6.1584 3.13508C6.35985 2.94621 6.67627 2.95642 6.86514 3.15788L10.6151 7.15788C10.7954 7.3502 10.7954 7.64949 10.6151 7.84182L6.86514 11.8418C6.67627 12.0433 6.35985 12.0535 6.1584 11.8646C5.95694 11.6757 5.94673 11.3593 6.1356 11.1579L9.565 7.49985L6.1356 3.84182C5.94673 3.64036 5.95694 3.32394 6.1584 3.13508Z"
                                            fill="currentColor"
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                </div>
                            </div>
                        </a>
                        <a
                            className="group min-w-[300px] md:min-w-[360px] bg-white/[0.02] rounded-xl border border-white/[0.08] overflow-hidden hover:bg-white/[0.04] hover:border-white/[0.15] transition-all duration-300 flex flex-col"
                            // href="/comparisons/opencode-vs-codex"
                        >
                            <div className="jsx-e4c0ee4aadd7f829 relative h-44 md:h-48 overflow-hidden bg-gradient-to-br from-white/5 to-white/[0.02]">
                                <img
                                    alt="OpenCode vs Codex: Go vs Rust Harness Deep Dive"
                                    loading="lazy"
                                    decoding="async"
                                    data-nimg="fill"
                                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                                    style={{
                                        position: "absolute",
                                        height: "100%",
                                        width: "100%",
                                        left: 0,
                                        top: 0,
                                        right: 0,
                                        bottom: 0,
                                        color: "transparent"
                                    }}
                                    sizes="(max-width: 768px) 300px, 360px"
                                    srcSet="https://www.morphllm.com/_next/image?url=%2Fimages%2Fopencode-vs-codex-comparison.png&w=32&q=75 32w, https://www.morphllm.com/_next/image?url=%2Fimages%2Fopencode-vs-codex-comparison.png&w=48&q=75 48w, https://www.morphllm.com/_next/image?url=%2Fimages%2Fopencode-vs-codex-comparison.png&w=64&q=75 64w, https://www.morphllm.com/_next/image?url=%2Fimages%2Fopencode-vs-codex-comparison.png&w=96&q=75 96w, https://www.morphllm.com/_next/image?url=%2Fimages%2Fopencode-vs-codex-comparison.png&w=128&q=75 128w, https://www.morphllm.com/_next/image?url=%2Fimages%2Fopencode-vs-codex-comparison.png&w=256&q=75 256w, https://www.morphllm.com/_next/image?url=%2Fimages%2Fopencode-vs-codex-comparison.png&w=384&q=75 384w, https://www.morphllm.com/_next/image?url=%2Fimages%2Fopencode-vs-codex-comparison.png&w=640&q=75 640w, https://www.morphllm.com/_next/image?url=%2Fimages%2Fopencode-vs-codex-comparison.png&w=750&q=75 750w, https://www.morphllm.com/_next/image?url=%2Fimages%2Fopencode-vs-codex-comparison.png&w=828&q=75 828w, https://www.morphllm.com/_next/image?url=%2Fimages%2Fopencode-vs-codex-comparison.png&w=1080&q=75 1080w, https://www.morphllm.com/_next/image?url=%2Fimages%2Fopencode-vs-codex-comparison.png&w=1200&q=75 1200w, https://www.morphllm.com/_next/image?url=%2Fimages%2Fopencode-vs-codex-comparison.png&w=1920&q=75 1920w, https://www.morphllm.com/_next/image?url=%2Fimages%2Fopencode-vs-codex-comparison.png&w=2048&q=75 2048w, https://www.morphllm.com/_next/image?url=%2Fimages%2Fopencode-vs-codex-comparison.png&w=3840&q=75 3840w"
                                    src="https://www.morphllm.com/_next/image?url=%2Fimages%2Fopencode-vs-codex-comparison.png&w=3840&q=75"
                                />
                                <div className="jsx-e4c0ee4aadd7f829 absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                            </div>
                            <div className="jsx-e4c0ee4aadd7f829 p-5 flex flex-col flex-1">
                                <h3 className="jsx-e4c0ee4aadd7f829 text-lg font-semibold mb-2 text-white group-hover:text-brand-primary transition-colors leading-tight">
                                    OpenCode vs Codex: Go vs Rust Harness Deep Dive
                                </h3>
                                <p className="jsx-e4c0ee4aadd7f829 text-landing-secondary/70 text-sm leading-relaxed flex-1 line-clamp-2">
                                    Technical analysis of AI coding agent harness architectures.
                                    Go-based OpenCode (75+ providers) vs Rust-based Codex (GPT-5).
                                </p>
                                <div className="jsx-e4c0ee4aadd7f829 flex items-center mt-4 text-brand-primary/80 group-hover:text-brand-primary text-xs font-medium uppercase tracking-wider transition-colors">
                                    <span className="jsx-e4c0ee4aadd7f829">Learn more</span>
                                    <svg
                                        width={15}
                                        height={15}
                                        viewBox="0 0 15 15"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="ml-0.5 h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5"
                                    >
                                        <path
                                            d="M6.1584 3.13508C6.35985 2.94621 6.67627 2.95642 6.86514 3.15788L10.6151 7.15788C10.7954 7.3502 10.7954 7.64949 10.6151 7.84182L6.86514 11.8418C6.67627 12.0433 6.35985 12.0535 6.1584 11.8646C5.95694 11.6757 5.94673 11.3593 6.1356 11.1579L9.565 7.49985L6.1356 3.84182C5.94673 3.64036 5.95694 3.32394 6.1584 3.13508Z"
                                            fill="currentColor"
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                </div>
                            </div>
                        </a>
                        <a
                            className="group min-w-[300px] md:min-w-[360px] bg-white/[0.02] rounded-xl border border-white/[0.08] overflow-hidden hover:bg-white/[0.04] hover:border-white/[0.15] transition-all duration-300 flex flex-col"
                            // href="/comparisons"
                        >
                            <div className="jsx-e4c0ee4aadd7f829 relative h-44 md:h-48 overflow-hidden bg-gradient-to-br from-white/5 to-white/[0.02]">
                                <img
                                    alt="AI Code Tool Comparisons 2026"
                                    loading="lazy"
                                    decoding="async"
                                    data-nimg="fill"
                                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                                    style={{
                                        position: "absolute",
                                        height: "100%",
                                        width: "100%",
                                        left: 0,
                                        top: 0,
                                        right: 0,
                                        bottom: 0,
                                        color: "transparent"
                                    }}
                                    sizes="(max-width: 768px) 300px, 360px"
                                    srcSet="https://www.morphllm.com/_next/image?url=%2Fimages%2Fai-code-tools-comparison-2025.png&w=32&q=75 32w, https://www.morphllm.com/_next/image?url=%2Fimages%2Fai-code-tools-comparison-2025.png&w=48&q=75 48w, https://www.morphllm.com/_next/image?url=%2Fimages%2Fai-code-tools-comparison-2025.png&w=64&q=75 64w, https://www.morphllm.com/_next/image?url=%2Fimages%2Fai-code-tools-comparison-2025.png&w=96&q=75 96w, https://www.morphllm.com/_next/image?url=%2Fimages%2Fai-code-tools-comparison-2025.png&w=128&q=75 128w, https://www.morphllm.com/_next/image?url=%2Fimages%2Fai-code-tools-comparison-2025.png&w=256&q=75 256w, https://www.morphllm.com/_next/image?url=%2Fimages%2Fai-code-tools-comparison-2025.png&w=384&q=75 384w, https://www.morphllm.com/_next/image?url=%2Fimages%2Fai-code-tools-comparison-2025.png&w=640&q=75 640w, https://www.morphllm.com/_next/image?url=%2Fimages%2Fai-code-tools-comparison-2025.png&w=750&q=75 750w, https://www.morphllm.com/_next/image?url=%2Fimages%2Fai-code-tools-comparison-2025.png&w=828&q=75 828w, https://www.morphllm.com/_next/image?url=%2Fimages%2Fai-code-tools-comparison-2025.png&w=1080&q=75 1080w, https://www.morphllm.com/_next/image?url=%2Fimages%2Fai-code-tools-comparison-2025.png&w=1200&q=75 1200w, https://www.morphllm.com/_next/image?url=%2Fimages%2Fai-code-tools-comparison-2025.png&w=1920&q=75 1920w, https://www.morphllm.com/_next/image?url=%2Fimages%2Fai-code-tools-comparison-2025.png&w=2048&q=75 2048w, https://www.morphllm.com/_next/image?url=%2Fimages%2Fai-code-tools-comparison-2025.png&w=3840&q=75 3840w"
                                    src="https://www.morphllm.com/_next/image?url=%2Fimages%2Fai-code-tools-comparison-2025.png&w=3840&q=75"
                                />
                                <div className="jsx-e4c0ee4aadd7f829 absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                            </div>
                            <div className="jsx-e4c0ee4aadd7f829 p-5 flex flex-col flex-1">
                                <h3 className="jsx-e4c0ee4aadd7f829 text-lg font-semibold mb-2 text-white group-hover:text-brand-primary transition-colors leading-tight">
                                    AI Code Tool Comparisons 2026
                                </h3>
                                <p className="jsx-e4c0ee4aadd7f829 text-landing-secondary/70 text-sm leading-relaxed flex-1 line-clamp-2">
                                    Every head-to-head comparison in one place. Cursor, Claude Code,
                                    Copilot, Windsurf, Codex, Aider, Cline, and more.
                                </p>
                                <div className="jsx-e4c0ee4aadd7f829 flex items-center mt-4 text-brand-primary/80 group-hover:text-brand-primary text-xs font-medium uppercase tracking-wider transition-colors">
                                    <span className="jsx-e4c0ee4aadd7f829">Learn more</span>
                                    <svg
                                        width={15}
                                        height={15}
                                        viewBox="0 0 15 15"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="ml-0.5 h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5"
                                    >
                                        <path
                                            d="M6.1584 3.13508C6.35985 2.94621 6.67627 2.95642 6.86514 3.15788L10.6151 7.15788C10.7954 7.3502 10.7954 7.64949 10.6151 7.84182L6.86514 11.8418C6.67627 12.0433 6.35985 12.0535 6.1584 11.8646C5.95694 11.6757 5.94673 11.3593 6.1356 11.1579L9.565 7.49985L6.1356 3.84182C5.94673 3.64036 5.95694 3.32394 6.1584 3.13508Z"
                                            fill="currentColor"
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                </div>
                            </div>
                        </a>
                        <a
                            className="group min-w-[300px] md:min-w-[360px] bg-white/[0.02] rounded-xl border border-white/[0.08] overflow-hidden hover:bg-white/[0.04] hover:border-white/[0.15] transition-all duration-300 flex flex-col"
                            // href="/edit-formats/diff-format-explained"
                        >
                            <div className="jsx-e4c0ee4aadd7f829 relative h-44 md:h-48 overflow-hidden bg-gradient-to-br from-white/5 to-white/[0.02]">
                                <img
                                    alt="Diff Format Explained"
                                    loading="lazy"
                                    decoding="async"
                                    data-nimg="fill"
                                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                                    style={{
                                        position: "absolute",
                                        height: "100%",
                                        width: "100%",
                                        left: 0,
                                        top: 0,
                                        right: 0,
                                        bottom: 0,
                                        color: "transparent"
                                    }}
                                    sizes="(max-width: 768px) 300px, 360px"
                                    srcSet="https://www.morphllm.com/_next/image?url=%2Fimages%2Fdiff-format-explained.png&w=32&q=75 32w, https://www.morphllm.com/_next/image?url=%2Fimages%2Fdiff-format-explained.png&w=48&q=75 48w, https://www.morphllm.com/_next/image?url=%2Fimages%2Fdiff-format-explained.png&w=64&q=75 64w, https://www.morphllm.com/_next/image?url=%2Fimages%2Fdiff-format-explained.png&w=96&q=75 96w, https://www.morphllm.com/_next/image?url=%2Fimages%2Fdiff-format-explained.png&w=128&q=75 128w, https://www.morphllm.com/_next/image?url=%2Fimages%2Fdiff-format-explained.png&w=256&q=75 256w, https://www.morphllm.com/_next/image?url=%2Fimages%2Fdiff-format-explained.png&w=384&q=75 384w, https://www.morphllm.com/_next/image?url=%2Fimages%2Fdiff-format-explained.png&w=640&q=75 640w, https://www.morphllm.com/_next/image?url=%2Fimages%2Fdiff-format-explained.png&w=750&q=75 750w, https://www.morphllm.com/_next/image?url=%2Fimages%2Fdiff-format-explained.png&w=828&q=75 828w, https://www.morphllm.com/_next/image?url=%2Fimages%2Fdiff-format-explained.png&w=1080&q=75 1080w, https://www.morphllm.com/_next/image?url=%2Fimages%2Fdiff-format-explained.png&w=1200&q=75 1200w, https://www.morphllm.com/_next/image?url=%2Fimages%2Fdiff-format-explained.png&w=1920&q=75 1920w, https://www.morphllm.com/_next/image?url=%2Fimages%2Fdiff-format-explained.png&w=2048&q=75 2048w, https://www.morphllm.com/_next/image?url=%2Fimages%2Fdiff-format-explained.png&w=3840&q=75 3840w"
                                    src="https://www.morphllm.com/_next/image?url=%2Fimages%2Fdiff-format-explained.png&w=3840&q=75"
                                />
                                <div className="jsx-e4c0ee4aadd7f829 absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                            </div>
                            <div className="jsx-e4c0ee4aadd7f829 p-5 flex flex-col flex-1">
                                <h3 className="jsx-e4c0ee4aadd7f829 text-lg font-semibold mb-2 text-white group-hover:text-brand-primary transition-colors leading-tight">
                                    Diff Format Explained
                                </h3>
                                <p className="jsx-e4c0ee4aadd7f829 text-landing-secondary/70 text-sm leading-relaxed flex-1 line-clamp-2">
                                    Search-replace blocks with git merge syntax: limitations, accuracy
                                    issues, and why semantic editing achieves 98% vs 70% success rates.
                                </p>
                                <div className="jsx-e4c0ee4aadd7f829 flex items-center mt-4 text-brand-primary/80 group-hover:text-brand-primary text-xs font-medium uppercase tracking-wider transition-colors">
                                    <span className="jsx-e4c0ee4aadd7f829">Learn more</span>
                                    <svg
                                        width={15}
                                        height={15}
                                        viewBox="0 0 15 15"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="ml-0.5 h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5"
                                    >
                                        <path
                                            d="M6.1584 3.13508C6.35985 2.94621 6.67627 2.95642 6.86514 3.15788L10.6151 7.15788C10.7954 7.3502 10.7954 7.64949 10.6151 7.84182L6.86514 11.8418C6.67627 12.0433 6.35985 12.0535 6.1584 11.8646C5.95694 11.6757 5.94673 11.3593 6.1356 11.1579L9.565 7.49985L6.1356 3.84182C5.94673 3.64036 5.95694 3.32394 6.1584 3.13508Z"
                                            fill="currentColor"
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                </div>
                            </div>
                        </a>
                        <a
                            className="group min-w-[300px] md:min-w-[360px] bg-white/[0.02] rounded-xl border border-white/[0.08] overflow-hidden hover:bg-white/[0.04] hover:border-white/[0.15] transition-all duration-300 flex flex-col"
                            // href="/browserbase-mcp"
                        >
                            <div className="jsx-e4c0ee4aadd7f829 relative h-44 md:h-48 overflow-hidden bg-gradient-to-br from-white/5 to-white/[0.02]">
                                <img
                                    alt="Browserbase MCP: Hosted Browsers for Agents"
                                    loading="lazy"
                                    decoding="async"
                                    data-nimg="fill"
                                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                                    style={{
                                        position: "absolute",
                                        height: "100%",
                                        width: "100%",
                                        left: 0,
                                        top: 0,
                                        right: 0,
                                        bottom: 0,
                                        color: "transparent"
                                    }}
                                    sizes="(max-width: 768px) 300px, 360px"
                                    srcSet="https://www.morphllm.com/_next/image?url=%2Fimages%2Fseo%2Fbrowserbase-mcp-og.png&w=32&q=75 32w, https://www.morphllm.com/_next/image?url=%2Fimages%2Fseo%2Fbrowserbase-mcp-og.png&w=48&q=75 48w, https://www.morphllm.com/_next/image?url=%2Fimages%2Fseo%2Fbrowserbase-mcp-og.png&w=64&q=75 64w, https://www.morphllm.com/_next/image?url=%2Fimages%2Fseo%2Fbrowserbase-mcp-og.png&w=96&q=75 96w, https://www.morphllm.com/_next/image?url=%2Fimages%2Fseo%2Fbrowserbase-mcp-og.png&w=128&q=75 128w, https://www.morphllm.com/_next/image?url=%2Fimages%2Fseo%2Fbrowserbase-mcp-og.png&w=256&q=75 256w, https://www.morphllm.com/_next/image?url=%2Fimages%2Fseo%2Fbrowserbase-mcp-og.png&w=384&q=75 384w, https://www.morphllm.com/_next/image?url=%2Fimages%2Fseo%2Fbrowserbase-mcp-og.png&w=640&q=75 640w, https://www.morphllm.com/_next/image?url=%2Fimages%2Fseo%2Fbrowserbase-mcp-og.png&w=750&q=75 750w, https://www.morphllm.com/_next/image?url=%2Fimages%2Fseo%2Fbrowserbase-mcp-og.png&w=828&q=75 828w, https://www.morphllm.com/_next/image?url=%2Fimages%2Fseo%2Fbrowserbase-mcp-og.png&w=1080&q=75 1080w, https://www.morphllm.com/_next/image?url=%2Fimages%2Fseo%2Fbrowserbase-mcp-og.png&w=1200&q=75 1200w, https://www.morphllm.com/_next/image?url=%2Fimages%2Fseo%2Fbrowserbase-mcp-og.png&w=1920&q=75 1920w, https://www.morphllm.com/_next/image?url=%2Fimages%2Fseo%2Fbrowserbase-mcp-og.png&w=2048&q=75 2048w, https://www.morphllm.com/_next/image?url=%2Fimages%2Fseo%2Fbrowserbase-mcp-og.png&w=3840&q=75 3840w"
                                    src="https://www.morphllm.com/_next/image?url=%2Fimages%2Fseo%2Fbrowserbase-mcp-og.png&w=3840&q=75"
                                />
                                <div className="jsx-e4c0ee4aadd7f829 absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                            </div>
                            <div className="jsx-e4c0ee4aadd7f829 p-5 flex flex-col flex-1">
                                <h3 className="jsx-e4c0ee4aadd7f829 text-lg font-semibold mb-2 text-white group-hover:text-brand-primary transition-colors leading-tight">
                                    Browserbase MCP: Hosted Browsers for Agents
                                </h3>
                                <p className="jsx-e4c0ee4aadd7f829 text-landing-secondary/70 text-sm leading-relaxed flex-1 line-clamp-2">
                                    Browserbase MCP gives coding agents hosted browser sessions, MCP
                                    tools, and a cleaner path from local browser loops to production
                                    browser infrastructure.
                                </p>
                                <div className="jsx-e4c0ee4aadd7f829 flex items-center mt-4 text-brand-primary/80 group-hover:text-brand-primary text-xs font-medium uppercase tracking-wider transition-colors">
                                    <span className="jsx-e4c0ee4aadd7f829">Learn more</span>
                                    <svg
                                        width={15}
                                        height={15}
                                        viewBox="0 0 15 15"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="ml-0.5 h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5"
                                    >
                                        <path
                                            d="M6.1584 3.13508C6.35985 2.94621 6.67627 2.95642 6.86514 3.15788L10.6151 7.15788C10.7954 7.3502 10.7954 7.64949 10.6151 7.84182L6.86514 11.8418C6.67627 12.0433 6.35985 12.0535 6.1584 11.8646C5.95694 11.6757 5.94673 11.3593 6.1356 11.1579L9.565 7.49985L6.1356 3.84182C5.94673 3.64036 5.95694 3.32394 6.1584 3.13508Z"
                                            fill="currentColor"
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                </div>
                            </div>
                        </a>
                        <a
                            className="group min-w-[300px] md:min-w-[360px] bg-white/[0.02] rounded-xl border border-white/[0.08] overflow-hidden hover:bg-white/[0.04] hover:border-white/[0.15] transition-all duration-300 flex flex-col"
                            // href="/stagehand-mcp"
                        >
                            <div className="jsx-e4c0ee4aadd7f829 relative h-44 md:h-48 overflow-hidden bg-gradient-to-br from-white/5 to-white/[0.02]">
                                <img
                                    alt="Stagehand MCP: Framework Layer for AI Browser Automation"
                                    loading="lazy"
                                    decoding="async"
                                    data-nimg="fill"
                                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                                    style={{
                                        position: "absolute",
                                        height: "100%",
                                        width: "100%",
                                        left: 0,
                                        top: 0,
                                        right: 0,
                                        bottom: 0,
                                        color: "transparent"
                                    }}
                                    sizes="(max-width: 768px) 300px, 360px"
                                    srcSet="https://www.morphllm.com/_next/image?url=%2Fimages%2Fseo%2Fstagehand-mcp-og.png&w=32&q=75 32w, https://www.morphllm.com/_next/image?url=%2Fimages%2Fseo%2Fstagehand-mcp-og.png&w=48&q=75 48w, https://www.morphllm.com/_next/image?url=%2Fimages%2Fseo%2Fstagehand-mcp-og.png&w=64&q=75 64w, https://www.morphllm.com/_next/image?url=%2Fimages%2Fseo%2Fstagehand-mcp-og.png&w=96&q=75 96w, https://www.morphllm.com/_next/image?url=%2Fimages%2Fseo%2Fstagehand-mcp-og.png&w=128&q=75 128w, https://www.morphllm.com/_next/image?url=%2Fimages%2Fseo%2Fstagehand-mcp-og.png&w=256&q=75 256w, https://www.morphllm.com/_next/image?url=%2Fimages%2Fseo%2Fstagehand-mcp-og.png&w=384&q=75 384w, https://www.morphllm.com/_next/image?url=%2Fimages%2Fseo%2Fstagehand-mcp-og.png&w=640&q=75 640w, https://www.morphllm.com/_next/image?url=%2Fimages%2Fseo%2Fstagehand-mcp-og.png&w=750&q=75 750w, https://www.morphllm.com/_next/image?url=%2Fimages%2Fseo%2Fstagehand-mcp-og.png&w=828&q=75 828w, https://www.morphllm.com/_next/image?url=%2Fimages%2Fseo%2Fstagehand-mcp-og.png&w=1080&q=75 1080w, https://www.morphllm.com/_next/image?url=%2Fimages%2Fseo%2Fstagehand-mcp-og.png&w=1200&q=75 1200w, https://www.morphllm.com/_next/image?url=%2Fimages%2Fseo%2Fstagehand-mcp-og.png&w=1920&q=75 1920w, https://www.morphllm.com/_next/image?url=%2Fimages%2Fseo%2Fstagehand-mcp-og.png&w=2048&q=75 2048w, https://www.morphllm.com/_next/image?url=%2Fimages%2Fseo%2Fstagehand-mcp-og.png&w=3840&q=75 3840w"
                                    src="https://www.morphllm.com/_next/image?url=%2Fimages%2Fseo%2Fstagehand-mcp-og.png&w=3840&q=75"
                                />
                                <div className="jsx-e4c0ee4aadd7f829 absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                            </div>
                            <div className="jsx-e4c0ee4aadd7f829 p-5 flex flex-col flex-1">
                                <h3 className="jsx-e4c0ee4aadd7f829 text-lg font-semibold mb-2 text-white group-hover:text-brand-primary transition-colors leading-tight">
                                    Stagehand MCP: Framework Layer for AI Browser Automation
                                </h3>
                                <p className="jsx-e4c0ee4aadd7f829 text-landing-secondary/70 text-sm leading-relaxed flex-1 line-clamp-2">
                                    Where Stagehand fits next to Browserbase MCP, Playwright MCP, and
                                    Browser Use. Framework primitives, reliability, and when to use it.
                                </p>
                                <div className="jsx-e4c0ee4aadd7f829 flex items-center mt-4 text-brand-primary/80 group-hover:text-brand-primary text-xs font-medium uppercase tracking-wider transition-colors">
                                    <span className="jsx-e4c0ee4aadd7f829">Learn more</span>
                                    <svg
                                        width={15}
                                        height={15}
                                        viewBox="0 0 15 15"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="ml-0.5 h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5"
                                    >
                                        <path
                                            d="M6.1584 3.13508C6.35985 2.94621 6.67627 2.95642 6.86514 3.15788L10.6151 7.15788C10.7954 7.3502 10.7954 7.64949 10.6151 7.84182L6.86514 11.8418C6.67627 12.0433 6.35985 12.0535 6.1584 11.8646C5.95694 11.6757 5.94673 11.3593 6.1356 11.1579L9.565 7.49985L6.1356 3.84182C5.94673 3.64036 5.95694 3.32394 6.1584 3.13508Z"
                                            fill="currentColor"
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                </div>
                            </div>
                        </a>
                        <a
                            className="group min-w-[300px] md:min-w-[360px] bg-white/[0.02] rounded-xl border border-white/[0.08] overflow-hidden hover:bg-white/[0.04] hover:border-white/[0.15] transition-all duration-300 flex flex-col"
                            // href="/browserless-api"
                        >
                            <div className="jsx-e4c0ee4aadd7f829 relative h-44 md:h-48 overflow-hidden bg-gradient-to-br from-white/5 to-white/[0.02]">
                                <img
                                    alt="Browserless API: REST and CDP for Hosted Browsers"
                                    loading="lazy"
                                    decoding="async"
                                    data-nimg="fill"
                                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                                    style={{
                                        position: "absolute",
                                        height: "100%",
                                        width: "100%",
                                        left: 0,
                                        top: 0,
                                        right: 0,
                                        bottom: 0,
                                        color: "transparent"
                                    }}
                                    sizes="(max-width: 768px) 300px, 360px"
                                    srcSet="https://www.morphllm.com/_next/image?url=%2Fimages%2Fseo%2Fbrowserless-api-og.png&w=32&q=75 32w, https://www.morphllm.com/_next/image?url=%2Fimages%2Fseo%2Fbrowserless-api-og.png&w=48&q=75 48w, https://www.morphllm.com/_next/image?url=%2Fimages%2Fseo%2Fbrowserless-api-og.png&w=64&q=75 64w, https://www.morphllm.com/_next/image?url=%2Fimages%2Fseo%2Fbrowserless-api-og.png&w=96&q=75 96w, https://www.morphllm.com/_next/image?url=%2Fimages%2Fseo%2Fbrowserless-api-og.png&w=128&q=75 128w, https://www.morphllm.com/_next/image?url=%2Fimages%2Fseo%2Fbrowserless-api-og.png&w=256&q=75 256w, https://www.morphllm.com/_next/image?url=%2Fimages%2Fseo%2Fbrowserless-api-og.png&w=384&q=75 384w, https://www.morphllm.com/_next/image?url=%2Fimages%2Fseo%2Fbrowserless-api-og.png&w=640&q=75 640w, https://www.morphllm.com/_next/image?url=%2Fimages%2Fseo%2Fbrowserless-api-og.png&w=750&q=75 750w, https://www.morphllm.com/_next/image?url=%2Fimages%2Fseo%2Fbrowserless-api-og.png&w=828&q=75 828w, https://www.morphllm.com/_next/image?url=%2Fimages%2Fseo%2Fbrowserless-api-og.png&w=1080&q=75 1080w, https://www.morphllm.com/_next/image?url=%2Fimages%2Fseo%2Fbrowserless-api-og.png&w=1200&q=75 1200w, https://www.morphllm.com/_next/image?url=%2Fimages%2Fseo%2Fbrowserless-api-og.png&w=1920&q=75 1920w, https://www.morphllm.com/_next/image?url=%2Fimages%2Fseo%2Fbrowserless-api-og.png&w=2048&q=75 2048w, https://www.morphllm.com/_next/image?url=%2Fimages%2Fseo%2Fbrowserless-api-og.png&w=3840&q=75 3840w"
                                    src="https://www.morphllm.com/_next/image?url=%2Fimages%2Fseo%2Fbrowserless-api-og.png&w=3840&q=75"
                                />
                                <div className="jsx-e4c0ee4aadd7f829 absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                            </div>
                            <div className="jsx-e4c0ee4aadd7f829 p-5 flex flex-col flex-1">
                                <h3 className="jsx-e4c0ee4aadd7f829 text-lg font-semibold mb-2 text-white group-hover:text-brand-primary transition-colors leading-tight">
                                    Browserless API: REST and CDP for Hosted Browsers
                                </h3>
                                <p className="jsx-e4c0ee4aadd7f829 text-landing-secondary/70 text-sm leading-relaxed flex-1 line-clamp-2">
                                    Browserless API supports REST endpoints for task-shaped browser jobs
                                    and CDP WebSockets for Playwright or Puppeteer. Setup, tradeoffs,
                                    and self-hosting.
                                </p>
                                <div className="jsx-e4c0ee4aadd7f829 flex items-center mt-4 text-brand-primary/80 group-hover:text-brand-primary text-xs font-medium uppercase tracking-wider transition-colors">
                                    <span className="jsx-e4c0ee4aadd7f829">Learn more</span>
                                    <svg
                                        width={15}
                                        height={15}
                                        viewBox="0 0 15 15"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="ml-0.5 h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5"
                                    >
                                        <path
                                            d="M6.1584 3.13508C6.35985 2.94621 6.67627 2.95642 6.86514 3.15788L10.6151 7.15788C10.7954 7.3502 10.7954 7.64949 10.6151 7.84182L6.86514 11.8418C6.67627 12.0433 6.35985 12.0535 6.1584 11.8646C5.95694 11.6757 5.94673 11.3593 6.1356 11.1579L9.565 7.49985L6.1356 3.84182C5.94673 3.64036 5.95694 3.32394 6.1584 3.13508Z"
                                            fill="currentColor"
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                </div>
                            </div>
                        </a>
                        <a
                            className="group min-w-[300px] md:min-w-[360px] bg-white/[0.02] rounded-xl border border-white/[0.08] overflow-hidden hover:bg-white/[0.04] hover:border-white/[0.15] transition-all duration-300 flex flex-col"
                            // href="/browserless-docker"
                        >
                            <div className="jsx-e4c0ee4aadd7f829 relative h-44 md:h-48 overflow-hidden bg-gradient-to-br from-white/5 to-white/[0.02]">
                                <img
                                    alt="Browserless Docker: Self-Hosted Browser Infrastructure"
                                    loading="lazy"
                                    decoding="async"
                                    data-nimg="fill"
                                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                                    style={{
                                        position: "absolute",
                                        height: "100%",
                                        width: "100%",
                                        left: 0,
                                        top: 0,
                                        right: 0,
                                        bottom: 0,
                                        color: "transparent"
                                    }}
                                    sizes="(max-width: 768px) 300px, 360px"
                                    srcSet="https://www.morphllm.com/_next/image?url=%2Fimages%2Fseo%2Fbrowserless-docker-og.png&w=32&q=75 32w, https://www.morphllm.com/_next/image?url=%2Fimages%2Fseo%2Fbrowserless-docker-og.png&w=48&q=75 48w, https://www.morphllm.com/_next/image?url=%2Fimages%2Fseo%2Fbrowserless-docker-og.png&w=64&q=75 64w, https://www.morphllm.com/_next/image?url=%2Fimages%2Fseo%2Fbrowserless-docker-og.png&w=96&q=75 96w, https://www.morphllm.com/_next/image?url=%2Fimages%2Fseo%2Fbrowserless-docker-og.png&w=128&q=75 128w, https://www.morphllm.com/_next/image?url=%2Fimages%2Fseo%2Fbrowserless-docker-og.png&w=256&q=75 256w, https://www.morphllm.com/_next/image?url=%2Fimages%2Fseo%2Fbrowserless-docker-og.png&w=384&q=75 384w, https://www.morphllm.com/_next/image?url=%2Fimages%2Fseo%2Fbrowserless-docker-og.png&w=640&q=75 640w, https://www.morphllm.com/_next/image?url=%2Fimages%2Fseo%2Fbrowserless-docker-og.png&w=750&q=75 750w, https://www.morphllm.com/_next/image?url=%2Fimages%2Fseo%2Fbrowserless-docker-og.png&w=828&q=75 828w, https://www.morphllm.com/_next/image?url=%2Fimages%2Fseo%2Fbrowserless-docker-og.png&w=1080&q=75 1080w, https://www.morphllm.com/_next/image?url=%2Fimages%2Fseo%2Fbrowserless-docker-og.png&w=1200&q=75 1200w, https://www.morphllm.com/_next/image?url=%2Fimages%2Fseo%2Fbrowserless-docker-og.png&w=1920&q=75 1920w, https://www.morphllm.com/_next/image?url=%2Fimages%2Fseo%2Fbrowserless-docker-og.png&w=2048&q=75 2048w, https://www.morphllm.com/_next/image?url=%2Fimages%2Fseo%2Fbrowserless-docker-og.png&w=3840&q=75 3840w"
                                    src="https://www.morphllm.com/_next/image?url=%2Fimages%2Fseo%2Fbrowserless-docker-og.png&w=3840&q=75"
                                />
                                <div className="jsx-e4c0ee4aadd7f829 absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                            </div>
                            <div className="jsx-e4c0ee4aadd7f829 p-5 flex flex-col flex-1">
                                <h3 className="jsx-e4c0ee4aadd7f829 text-lg font-semibold mb-2 text-white group-hover:text-brand-primary transition-colors leading-tight">
                                    Browserless Docker: Self-Hosted Browser Infrastructure
                                </h3>
                                <p className="jsx-e4c0ee4aadd7f829 text-landing-secondary/70 text-sm leading-relaxed flex-1 line-clamp-2">
                                    Run Browserless in your own environment with Docker, queue browser
                                    workloads, and expose Playwright/Puppeteer-compatible endpoints with
                                    better operational controls.
                                </p>
                                <div className="jsx-e4c0ee4aadd7f829 flex items-center mt-4 text-brand-primary/80 group-hover:text-brand-primary text-xs font-medium uppercase tracking-wider transition-colors">
                                    <span className="jsx-e4c0ee4aadd7f829">Learn more</span>
                                    <svg
                                        width={15}
                                        height={15}
                                        viewBox="0 0 15 15"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="ml-0.5 h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5"
                                    >
                                        <path
                                            d="M6.1584 3.13508C6.35985 2.94621 6.67627 2.95642 6.86514 3.15788L10.6151 7.15788C10.7954 7.3502 10.7954 7.64949 10.6151 7.84182L6.86514 11.8418C6.67627 12.0433 6.35985 12.0535 6.1584 11.8646C5.95694 11.6757 5.94673 11.3593 6.1356 11.1579L9.565 7.49985L6.1356 3.84182C5.94673 3.64036 5.95694 3.32394 6.1584 3.13508Z"
                                            fill="currentColor"
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                </div>
                            </div>
                        </a>
                        <a
                            className="group min-w-[300px] md:min-w-[360px] bg-white/[0.02] rounded-xl border border-white/[0.08] overflow-hidden hover:bg-white/[0.04] hover:border-white/[0.15] transition-all duration-300 flex flex-col"
                            // href="/claude-code-litellm"
                        >
                            <div className="jsx-e4c0ee4aadd7f829 relative h-44 md:h-48 overflow-hidden bg-gradient-to-br from-white/5 to-white/[0.02]">
                                <img
                                    alt="Claude Code LiteLLM: Minimal Setup, Unified Endpoint, and Real Tradeoffs"
                                    loading="lazy"
                                    decoding="async"
                                    data-nimg="fill"
                                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                                    style={{
                                        position: "absolute",
                                        height: "100%",
                                        width: "100%",
                                        left: 0,
                                        top: 0,
                                        right: 0,
                                        bottom: 0,
                                        color: "transparent"
                                    }}
                                    sizes="(max-width: 768px) 300px, 360px"
                                    srcSet="https://www.morphllm.com/_next/image?url=%2Fimages%2Fseo%2Fclaude-code-litellm-og.png&w=32&q=75 32w, https://www.morphllm.com/_next/image?url=%2Fimages%2Fseo%2Fclaude-code-litellm-og.png&w=48&q=75 48w, https://www.morphllm.com/_next/image?url=%2Fimages%2Fseo%2Fclaude-code-litellm-og.png&w=64&q=75 64w, https://www.morphllm.com/_next/image?url=%2Fimages%2Fseo%2Fclaude-code-litellm-og.png&w=96&q=75 96w, https://www.morphllm.com/_next/image?url=%2Fimages%2Fseo%2Fclaude-code-litellm-og.png&w=128&q=75 128w, https://www.morphllm.com/_next/image?url=%2Fimages%2Fseo%2Fclaude-code-litellm-og.png&w=256&q=75 256w, https://www.morphllm.com/_next/image?url=%2Fimages%2Fseo%2Fclaude-code-litellm-og.png&w=384&q=75 384w, https://www.morphllm.com/_next/image?url=%2Fimages%2Fseo%2Fclaude-code-litellm-og.png&w=640&q=75 640w, https://www.morphllm.com/_next/image?url=%2Fimages%2Fseo%2Fclaude-code-litellm-og.png&w=750&q=75 750w, https://www.morphllm.com/_next/image?url=%2Fimages%2Fseo%2Fclaude-code-litellm-og.png&w=828&q=75 828w, https://www.morphllm.com/_next/image?url=%2Fimages%2Fseo%2Fclaude-code-litellm-og.png&w=1080&q=75 1080w, https://www.morphllm.com/_next/image?url=%2Fimages%2Fseo%2Fclaude-code-litellm-og.png&w=1200&q=75 1200w, https://www.morphllm.com/_next/image?url=%2Fimages%2Fseo%2Fclaude-code-litellm-og.png&w=1920&q=75 1920w, https://www.morphllm.com/_next/image?url=%2Fimages%2Fseo%2Fclaude-code-litellm-og.png&w=2048&q=75 2048w, https://www.morphllm.com/_next/image?url=%2Fimages%2Fseo%2Fclaude-code-litellm-og.png&w=3840&q=75 3840w"
                                    src="https://www.morphllm.com/_next/image?url=%2Fimages%2Fseo%2Fclaude-code-litellm-og.png&w=3840&q=75"
                                />
                                <div className="jsx-e4c0ee4aadd7f829 absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                            </div>
                            <div className="jsx-e4c0ee4aadd7f829 p-5 flex flex-col flex-1">
                                <h3 className="jsx-e4c0ee4aadd7f829 text-lg font-semibold mb-2 text-white group-hover:text-brand-primary transition-colors leading-tight">
                                    Claude Code LiteLLM: Minimal Setup, Unified Endpoint, and Real
                                    Tradeoffs
                                </h3>
                                <p className="jsx-e4c0ee4aadd7f829 text-landing-secondary/70 text-sm leading-relaxed flex-1 line-clamp-2">
                                    Set up Claude Code with LiteLLM as a unified endpoint. Learn when
                                    LiteLLM helps, how the proxy works, and the practical tradeoffs.
                                </p>
                                <div className="jsx-e4c0ee4aadd7f829 flex items-center mt-4 text-brand-primary/80 group-hover:text-brand-primary text-xs font-medium uppercase tracking-wider transition-colors">
                                    <span className="jsx-e4c0ee4aadd7f829">Learn more</span>
                                    <svg
                                        width={15}
                                        height={15}
                                        viewBox="0 0 15 15"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="ml-0.5 h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5"
                                    >
                                        <path
                                            d="M6.1584 3.13508C6.35985 2.94621 6.67627 2.95642 6.86514 3.15788L10.6151 7.15788C10.7954 7.3502 10.7954 7.64949 10.6151 7.84182L6.86514 11.8418C6.67627 12.0433 6.35985 12.0535 6.1584 11.8646C5.95694 11.6757 5.94673 11.3593 6.1356 11.1579L9.565 7.49985L6.1356 3.84182C5.94673 3.64036 5.95694 3.32394 6.1584 3.13508Z"
                                            fill="currentColor"
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                </div>
                            </div>
                        </a>
                        <a
                            className="group min-w-[300px] md:min-w-[360px] bg-white/[0.02] rounded-xl border border-white/[0.08] overflow-hidden hover:bg-white/[0.04] hover:border-white/[0.15] transition-all duration-300 flex flex-col"
                            // href="/comparisons/claude-vs-copilot"
                        >
                            <div className="jsx-e4c0ee4aadd7f829 relative h-44 md:h-48 overflow-hidden bg-gradient-to-br from-white/5 to-white/[0.02]">
                                <img
                                    alt="Claude vs Copilot (2026): Pricing, Features, and Which One Wins"
                                    loading="lazy"
                                    decoding="async"
                                    data-nimg="fill"
                                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                                    style={{
                                        position: "absolute",
                                        height: "100%",
                                        width: "100%",
                                        left: 0,
                                        top: 0,
                                        right: 0,
                                        bottom: 0,
                                        color: "transparent"
                                    }}
                                    sizes="(max-width: 768px) 300px, 360px"
                                    srcSet="https://www.morphllm.com/_next/image?url=%2Fimages%2Fseo%2Fclaude-vs-copilot-og.png&w=32&q=75 32w, https://www.morphllm.com/_next/image?url=%2Fimages%2Fseo%2Fclaude-vs-copilot-og.png&w=48&q=75 48w, https://www.morphllm.com/_next/image?url=%2Fimages%2Fseo%2Fclaude-vs-copilot-og.png&w=64&q=75 64w, https://www.morphllm.com/_next/image?url=%2Fimages%2Fseo%2Fclaude-vs-copilot-og.png&w=96&q=75 96w, https://www.morphllm.com/_next/image?url=%2Fimages%2Fseo%2Fclaude-vs-copilot-og.png&w=128&q=75 128w, https://www.morphllm.com/_next/image?url=%2Fimages%2Fseo%2Fclaude-vs-copilot-og.png&w=256&q=75 256w, https://www.morphllm.com/_next/image?url=%2Fimages%2Fseo%2Fclaude-vs-copilot-og.png&w=384&q=75 384w, https://www.morphllm.com/_next/image?url=%2Fimages%2Fseo%2Fclaude-vs-copilot-og.png&w=640&q=75 640w, https://www.morphllm.com/_next/image?url=%2Fimages%2Fseo%2Fclaude-vs-copilot-og.png&w=750&q=75 750w, https://www.morphllm.com/_next/image?url=%2Fimages%2Fseo%2Fclaude-vs-copilot-og.png&w=828&q=75 828w, https://www.morphllm.com/_next/image?url=%2Fimages%2Fseo%2Fclaude-vs-copilot-og.png&w=1080&q=75 1080w, https://www.morphllm.com/_next/image?url=%2Fimages%2Fseo%2Fclaude-vs-copilot-og.png&w=1200&q=75 1200w, https://www.morphllm.com/_next/image?url=%2Fimages%2Fseo%2Fclaude-vs-copilot-og.png&w=1920&q=75 1920w, https://www.morphllm.com/_next/image?url=%2Fimages%2Fseo%2Fclaude-vs-copilot-og.png&w=2048&q=75 2048w, https://www.morphllm.com/_next/image?url=%2Fimages%2Fseo%2Fclaude-vs-copilot-og.png&w=3840&q=75 3840w"
                                    src="https://www.morphllm.com/_next/image?url=%2Fimages%2Fseo%2Fclaude-vs-copilot-og.png&w=3840&q=75"
                                />
                                <div className="jsx-e4c0ee4aadd7f829 absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                            </div>
                            <div className="jsx-e4c0ee4aadd7f829 p-5 flex flex-col flex-1">
                                <h3 className="jsx-e4c0ee4aadd7f829 text-lg font-semibold mb-2 text-white group-hover:text-brand-primary transition-colors leading-tight">
                                    Claude vs Copilot (2026): Pricing, Features, and Which One Wins
                                </h3>
                                <p className="jsx-e4c0ee4aadd7f829 text-landing-secondary/70 text-sm leading-relaxed flex-1 line-clamp-2">
                                    Claude is the broader Anthropic assistant stack. GitHub Copilot is
                                    the broader GitHub coding stack. Pricing, product scope, and
                                    workflow fit compared.
                                </p>
                                <div className="jsx-e4c0ee4aadd7f829 flex items-center mt-4 text-brand-primary/80 group-hover:text-brand-primary text-xs font-medium uppercase tracking-wider transition-colors">
                                    <span className="jsx-e4c0ee4aadd7f829">Learn more</span>
                                    <svg
                                        width={15}
                                        height={15}
                                        viewBox="0 0 15 15"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="ml-0.5 h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5"
                                    >
                                        <path
                                            d="M6.1584 3.13508C6.35985 2.94621 6.67627 2.95642 6.86514 3.15788L10.6151 7.15788C10.7954 7.3502 10.7954 7.64949 10.6151 7.84182L6.86514 11.8418C6.67627 12.0433 6.35985 12.0535 6.1584 11.8646C5.95694 11.6757 5.94673 11.3593 6.1356 11.1579L9.565 7.49985L6.1356 3.84182C5.94673 3.64036 5.95694 3.32394 6.1584 3.13508Z"
                                            fill="currentColor"
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                </div>
                            </div>
                        </a>
                        <a
                            className="group min-w-[300px] md:min-w-[360px] bg-white/[0.02] rounded-xl border border-white/[0.08] overflow-hidden hover:bg-white/[0.04] hover:border-white/[0.15] transition-all duration-300 flex flex-col"
                            // href="/kiro-pricing"
                        >
                            <div className="jsx-e4c0ee4aadd7f829 relative h-44 md:h-48 overflow-hidden bg-gradient-to-br from-white/5 to-white/[0.02]">
                                <img
                                    alt="Kiro Pricing (2026): Plans, Credits, Overage, and What the Meter Actually Means"
                                    loading="lazy"
                                    decoding="async"
                                    data-nimg="fill"
                                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                                    style={{
                                        position: "absolute",
                                        height: "100%",
                                        width: "100%",
                                        left: 0,
                                        top: 0,
                                        right: 0,
                                        bottom: 0,
                                        color: "transparent"
                                    }}
                                    sizes="(max-width: 768px) 300px, 360px"
                                    srcSet="https://www.morphllm.com/_next/image?url=%2Fimages%2Fseo%2Fkiro-pricing-og.png&w=32&q=75 32w, https://www.morphllm.com/_next/image?url=%2Fimages%2Fseo%2Fkiro-pricing-og.png&w=48&q=75 48w, https://www.morphllm.com/_next/image?url=%2Fimages%2Fseo%2Fkiro-pricing-og.png&w=64&q=75 64w, https://www.morphllm.com/_next/image?url=%2Fimages%2Fseo%2Fkiro-pricing-og.png&w=96&q=75 96w, https://www.morphllm.com/_next/image?url=%2Fimages%2Fseo%2Fkiro-pricing-og.png&w=128&q=75 128w, https://www.morphllm.com/_next/image?url=%2Fimages%2Fseo%2Fkiro-pricing-og.png&w=256&q=75 256w, https://www.morphllm.com/_next/image?url=%2Fimages%2Fseo%2Fkiro-pricing-og.png&w=384&q=75 384w, https://www.morphllm.com/_next/image?url=%2Fimages%2Fseo%2Fkiro-pricing-og.png&w=640&q=75 640w, https://www.morphllm.com/_next/image?url=%2Fimages%2Fseo%2Fkiro-pricing-og.png&w=750&q=75 750w, https://www.morphllm.com/_next/image?url=%2Fimages%2Fseo%2Fkiro-pricing-og.png&w=828&q=75 828w, https://www.morphllm.com/_next/image?url=%2Fimages%2Fseo%2Fkiro-pricing-og.png&w=1080&q=75 1080w, https://www.morphllm.com/_next/image?url=%2Fimages%2Fseo%2Fkiro-pricing-og.png&w=1200&q=75 1200w, https://www.morphllm.com/_next/image?url=%2Fimages%2Fseo%2Fkiro-pricing-og.png&w=1920&q=75 1920w, https://www.morphllm.com/_next/image?url=%2Fimages%2Fseo%2Fkiro-pricing-og.png&w=2048&q=75 2048w, https://www.morphllm.com/_next/image?url=%2Fimages%2Fseo%2Fkiro-pricing-og.png&w=3840&q=75 3840w"
                                    src="https://www.morphllm.com/_next/image?url=%2Fimages%2Fseo%2Fkiro-pricing-og.png&w=3840&q=75"
                                />
                                <div className="jsx-e4c0ee4aadd7f829 absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                            </div>
                            <div className="jsx-e4c0ee4aadd7f829 p-5 flex flex-col flex-1">
                                <h3 className="jsx-e4c0ee4aadd7f829 text-lg font-semibold mb-2 text-white group-hover:text-brand-primary transition-colors leading-tight">
                                    Kiro Pricing (2026): Plans, Credits, Overage, and What the Meter
                                    Actually Means
                                </h3>
                                <p className="jsx-e4c0ee4aadd7f829 text-landing-secondary/70 text-sm leading-relaxed flex-1 line-clamp-2">
                                    Kiro pricing is simple on paper: plans, credits, and overage. This
                                    guide breaks down the actual credit math, trial rules, and
                                    tradeoffs.
                                </p>
                                <div className="jsx-e4c0ee4aadd7f829 flex items-center mt-4 text-brand-primary/80 group-hover:text-brand-primary text-xs font-medium uppercase tracking-wider transition-colors">
                                    <span className="jsx-e4c0ee4aadd7f829">Learn more</span>
                                    <svg
                                        width={15}
                                        height={15}
                                        viewBox="0 0 15 15"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="ml-0.5 h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5"
                                    >
                                        <path
                                            d="M6.1584 3.13508C6.35985 2.94621 6.67627 2.95642 6.86514 3.15788L10.6151 7.15788C10.7954 7.3502 10.7954 7.64949 10.6151 7.84182L6.86514 11.8418C6.67627 12.0433 6.35985 12.0535 6.1584 11.8646C5.95694 11.6757 5.94673 11.3593 6.1356 11.1579L9.565 7.49985L6.1356 3.84182C5.94673 3.64036 5.95694 3.32394 6.1584 3.13508Z"
                                            fill="currentColor"
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                </div>
                            </div>
                        </a>
                        <a
                            className="group min-w-[300px] md:min-w-[360px] bg-white/[0.02] rounded-xl border border-white/[0.08] overflow-hidden hover:bg-white/[0.04] hover:border-white/[0.15] transition-all duration-300 flex flex-col"
                            // href="/llm-router"
                        >
                            <div className="jsx-e4c0ee4aadd7f829 relative h-44 md:h-48 overflow-hidden bg-gradient-to-br from-white/5 to-white/[0.02]">
                                <img
                                    alt="What Is an LLM Router? Automatic Model Routing for Cost and Quality"
                                    loading="lazy"
                                    decoding="async"
                                    data-nimg="fill"
                                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                                    style={{
                                        position: "absolute",
                                        height: "100%",
                                        width: "100%",
                                        left: 0,
                                        top: 0,
                                        right: 0,
                                        bottom: 0,
                                        color: "transparent"
                                    }}
                                    sizes="(max-width: 768px) 300px, 360px"
                                    srcSet="https://www.morphllm.com/_next/image?url=%2Fimages%2Fseo%2Fllm-router-og.png&w=32&q=75 32w, https://www.morphllm.com/_next/image?url=%2Fimages%2Fseo%2Fllm-router-og.png&w=48&q=75 48w, https://www.morphllm.com/_next/image?url=%2Fimages%2Fseo%2Fllm-router-og.png&w=64&q=75 64w, https://www.morphllm.com/_next/image?url=%2Fimages%2Fseo%2Fllm-router-og.png&w=96&q=75 96w, https://www.morphllm.com/_next/image?url=%2Fimages%2Fseo%2Fllm-router-og.png&w=128&q=75 128w, https://www.morphllm.com/_next/image?url=%2Fimages%2Fseo%2Fllm-router-og.png&w=256&q=75 256w, https://www.morphllm.com/_next/image?url=%2Fimages%2Fseo%2Fllm-router-og.png&w=384&q=75 384w, https://www.morphllm.com/_next/image?url=%2Fimages%2Fseo%2Fllm-router-og.png&w=640&q=75 640w, https://www.morphllm.com/_next/image?url=%2Fimages%2Fseo%2Fllm-router-og.png&w=750&q=75 750w, https://www.morphllm.com/_next/image?url=%2Fimages%2Fseo%2Fllm-router-og.png&w=828&q=75 828w, https://www.morphllm.com/_next/image?url=%2Fimages%2Fseo%2Fllm-router-og.png&w=1080&q=75 1080w, https://www.morphllm.com/_next/image?url=%2Fimages%2Fseo%2Fllm-router-og.png&w=1200&q=75 1200w, https://www.morphllm.com/_next/image?url=%2Fimages%2Fseo%2Fllm-router-og.png&w=1920&q=75 1920w, https://www.morphllm.com/_next/image?url=%2Fimages%2Fseo%2Fllm-router-og.png&w=2048&q=75 2048w, https://www.morphllm.com/_next/image?url=%2Fimages%2Fseo%2Fllm-router-og.png&w=3840&q=75 3840w"
                                    src="https://www.morphllm.com/_next/image?url=%2Fimages%2Fseo%2Fllm-router-og.png&w=3840&q=75"
                                />
                                <div className="jsx-e4c0ee4aadd7f829 absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                            </div>
                            <div className="jsx-e4c0ee4aadd7f829 p-5 flex flex-col flex-1">
                                <h3 className="jsx-e4c0ee4aadd7f829 text-lg font-semibold mb-2 text-white group-hover:text-brand-primary transition-colors leading-tight">
                                    What Is an LLM Router? Automatic Model Routing for Cost and Quality
                                </h3>
                                <p className="jsx-e4c0ee4aadd7f829 text-landing-secondary/70 text-sm leading-relaxed flex-1 line-clamp-2">
                                    An LLM router classifies prompt difficulty in ~430ms and routes to
                                    the right model tier. 40-70% API cost savings with under 2% quality
                                    loss on hard tasks.
                                </p>
                                <div className="jsx-e4c0ee4aadd7f829 flex items-center mt-4 text-brand-primary/80 group-hover:text-brand-primary text-xs font-medium uppercase tracking-wider transition-colors">
                                    <span className="jsx-e4c0ee4aadd7f829">Learn more</span>
                                    <svg
                                        width={15}
                                        height={15}
                                        viewBox="0 0 15 15"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="ml-0.5 h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5"
                                    >
                                        <path
                                            d="M6.1584 3.13508C6.35985 2.94621 6.67627 2.95642 6.86514 3.15788L10.6151 7.15788C10.7954 7.3502 10.7954 7.64949 10.6151 7.84182L6.86514 11.8418C6.67627 12.0433 6.35985 12.0535 6.1584 11.8646C5.95694 11.6757 5.94673 11.3593 6.1356 11.1579L9.565 7.49985L6.1356 3.84182C5.94673 3.64036 5.95694 3.32394 6.1584 3.13508Z"
                                            fill="currentColor"
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                </div>
                            </div>
                        </a>
                        <a
                            className="group min-w-[300px] md:min-w-[360px] bg-white/[0.02] rounded-xl border border-white/[0.08] overflow-hidden hover:bg-white/[0.04] hover:border-white/[0.15] transition-all duration-300 flex flex-col"
                            // href="/sonnet-vs-haiku"
                        >
                            <div className="jsx-e4c0ee4aadd7f829 relative h-44 md:h-48 overflow-hidden bg-gradient-to-br from-white/5 to-white/[0.02]">
                                <img
                                    alt="Sonnet vs Haiku: Which Claude Model to Use"
                                    loading="lazy"
                                    decoding="async"
                                    data-nimg="fill"
                                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                                    style={{
                                        position: "absolute",
                                        height: "100%",
                                        width: "100%",
                                        left: 0,
                                        top: 0,
                                        right: 0,
                                        bottom: 0,
                                        color: "transparent"
                                    }}
                                    sizes="(max-width: 768px) 300px, 360px"
                                    srcSet="https://www.morphllm.com/_next/image?url=%2Fimages%2Fseo%2Fsonnet-vs-haiku-og.png&w=32&q=75 32w, https://www.morphllm.com/_next/image?url=%2Fimages%2Fseo%2Fsonnet-vs-haiku-og.png&w=48&q=75 48w, https://www.morphllm.com/_next/image?url=%2Fimages%2Fseo%2Fsonnet-vs-haiku-og.png&w=64&q=75 64w, https://www.morphllm.com/_next/image?url=%2Fimages%2Fseo%2Fsonnet-vs-haiku-og.png&w=96&q=75 96w, https://www.morphllm.com/_next/image?url=%2Fimages%2Fseo%2Fsonnet-vs-haiku-og.png&w=128&q=75 128w, https://www.morphllm.com/_next/image?url=%2Fimages%2Fseo%2Fsonnet-vs-haiku-og.png&w=256&q=75 256w, https://www.morphllm.com/_next/image?url=%2Fimages%2Fseo%2Fsonnet-vs-haiku-og.png&w=384&q=75 384w, https://www.morphllm.com/_next/image?url=%2Fimages%2Fseo%2Fsonnet-vs-haiku-og.png&w=640&q=75 640w, https://www.morphllm.com/_next/image?url=%2Fimages%2Fseo%2Fsonnet-vs-haiku-og.png&w=750&q=75 750w, https://www.morphllm.com/_next/image?url=%2Fimages%2Fseo%2Fsonnet-vs-haiku-og.png&w=828&q=75 828w, https://www.morphllm.com/_next/image?url=%2Fimages%2Fseo%2Fsonnet-vs-haiku-og.png&w=1080&q=75 1080w, https://www.morphllm.com/_next/image?url=%2Fimages%2Fseo%2Fsonnet-vs-haiku-og.png&w=1200&q=75 1200w, https://www.morphllm.com/_next/image?url=%2Fimages%2Fseo%2Fsonnet-vs-haiku-og.png&w=1920&q=75 1920w, https://www.morphllm.com/_next/image?url=%2Fimages%2Fseo%2Fsonnet-vs-haiku-og.png&w=2048&q=75 2048w, https://www.morphllm.com/_next/image?url=%2Fimages%2Fseo%2Fsonnet-vs-haiku-og.png&w=3840&q=75 3840w"
                                    src="https://www.morphllm.com/_next/image?url=%2Fimages%2Fseo%2Fsonnet-vs-haiku-og.png&w=3840&q=75"
                                />
                                <div className="jsx-e4c0ee4aadd7f829 absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                            </div>
                            <div className="jsx-e4c0ee4aadd7f829 p-5 flex flex-col flex-1">
                                <h3 className="jsx-e4c0ee4aadd7f829 text-lg font-semibold mb-2 text-white group-hover:text-brand-primary transition-colors leading-tight">
                                    Sonnet vs Haiku: Which Claude Model to Use
                                </h3>
                                <p className="jsx-e4c0ee4aadd7f829 text-landing-secondary/70 text-sm leading-relaxed flex-1 line-clamp-2">
                                    Claude Sonnet 4.5 costs 3.75x more than Haiku 4.5. Pricing, speed,
                                    quality tradeoffs, and how automatic model routing cuts costs
                                    40-60%.
                                </p>
                                <div className="jsx-e4c0ee4aadd7f829 flex items-center mt-4 text-brand-primary/80 group-hover:text-brand-primary text-xs font-medium uppercase tracking-wider transition-colors">
                                    <span className="jsx-e4c0ee4aadd7f829">Learn more</span>
                                    <svg
                                        width={15}
                                        height={15}
                                        viewBox="0 0 15 15"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="ml-0.5 h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5"
                                    >
                                        <path
                                            d="M6.1584 3.13508C6.35985 2.94621 6.67627 2.95642 6.86514 3.15788L10.6151 7.15788C10.7954 7.3502 10.7954 7.64949 10.6151 7.84182L6.86514 11.8418C6.67627 12.0433 6.35985 12.0535 6.1584 11.8646C5.95694 11.6757 5.94673 11.3593 6.1356 11.1579L9.565 7.49985L6.1356 3.84182C5.94673 3.64036 5.95694 3.32394 6.1584 3.13508Z"
                                            fill="currentColor"
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                </div>
                            </div>
                        </a>
                        <a
                            className="group min-w-[300px] md:min-w-[360px] bg-white/[0.02] rounded-xl border border-white/[0.08] overflow-hidden hover:bg-white/[0.04] hover:border-white/[0.15] transition-all duration-300 flex flex-col"
                            // href="/llm-gateway"
                        >
                            <div className="jsx-e4c0ee4aadd7f829 relative h-44 md:h-48 overflow-hidden bg-gradient-to-br from-white/5 to-white/[0.02]">
                                <img
                                    alt="LLM Gateway: Unified API Layer for Multi-Provider AI Apps"
                                    loading="lazy"
                                    decoding="async"
                                    data-nimg="fill"
                                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                                    style={{
                                        position: "absolute",
                                        height: "100%",
                                        width: "100%",
                                        left: 0,
                                        top: 0,
                                        right: 0,
                                        bottom: 0,
                                        color: "transparent"
                                    }}
                                    sizes="(max-width: 768px) 300px, 360px"
                                    srcSet="https://www.morphllm.com/_next/image?url=%2Fimages%2Fseo%2Fllm-gateway-og.png&w=32&q=75 32w, https://www.morphllm.com/_next/image?url=%2Fimages%2Fseo%2Fllm-gateway-og.png&w=48&q=75 48w, https://www.morphllm.com/_next/image?url=%2Fimages%2Fseo%2Fllm-gateway-og.png&w=64&q=75 64w, https://www.morphllm.com/_next/image?url=%2Fimages%2Fseo%2Fllm-gateway-og.png&w=96&q=75 96w, https://www.morphllm.com/_next/image?url=%2Fimages%2Fseo%2Fllm-gateway-og.png&w=128&q=75 128w, https://www.morphllm.com/_next/image?url=%2Fimages%2Fseo%2Fllm-gateway-og.png&w=256&q=75 256w, https://www.morphllm.com/_next/image?url=%2Fimages%2Fseo%2Fllm-gateway-og.png&w=384&q=75 384w, https://www.morphllm.com/_next/image?url=%2Fimages%2Fseo%2Fllm-gateway-og.png&w=640&q=75 640w, https://www.morphllm.com/_next/image?url=%2Fimages%2Fseo%2Fllm-gateway-og.png&w=750&q=75 750w, https://www.morphllm.com/_next/image?url=%2Fimages%2Fseo%2Fllm-gateway-og.png&w=828&q=75 828w, https://www.morphllm.com/_next/image?url=%2Fimages%2Fseo%2Fllm-gateway-og.png&w=1080&q=75 1080w, https://www.morphllm.com/_next/image?url=%2Fimages%2Fseo%2Fllm-gateway-og.png&w=1200&q=75 1200w, https://www.morphllm.com/_next/image?url=%2Fimages%2Fseo%2Fllm-gateway-og.png&w=1920&q=75 1920w, https://www.morphllm.com/_next/image?url=%2Fimages%2Fseo%2Fllm-gateway-og.png&w=2048&q=75 2048w, https://www.morphllm.com/_next/image?url=%2Fimages%2Fseo%2Fllm-gateway-og.png&w=3840&q=75 3840w"
                                    src="https://www.morphllm.com/_next/image?url=%2Fimages%2Fseo%2Fllm-gateway-og.png&w=3840&q=75"
                                />
                                <div className="jsx-e4c0ee4aadd7f829 absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                            </div>
                            <div className="jsx-e4c0ee4aadd7f829 p-5 flex flex-col flex-1">
                                <h3 className="jsx-e4c0ee4aadd7f829 text-lg font-semibold mb-2 text-white group-hover:text-brand-primary transition-colors leading-tight">
                                    LLM Gateway: Unified API Layer for Multi-Provider AI Apps
                                </h3>
                                <p className="jsx-e4c0ee4aadd7f829 text-landing-secondary/70 text-sm leading-relaxed flex-1 line-clamp-2">
                                    What an LLM gateway does, how it differs from a proxy and a router,
                                    key capabilities, open source options, and where intelligent routing
                                    fits in.
                                </p>
                                <div className="jsx-e4c0ee4aadd7f829 flex items-center mt-4 text-brand-primary/80 group-hover:text-brand-primary text-xs font-medium uppercase tracking-wider transition-colors">
                                    <span className="jsx-e4c0ee4aadd7f829">Learn more</span>
                                    <svg
                                        width={15}
                                        height={15}
                                        viewBox="0 0 15 15"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="ml-0.5 h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5"
                                    >
                                        <path
                                            d="M6.1584 3.13508C6.35985 2.94621 6.67627 2.95642 6.86514 3.15788L10.6151 7.15788C10.7954 7.3502 10.7954 7.64949 10.6151 7.84182L6.86514 11.8418C6.67627 12.0433 6.35985 12.0535 6.1584 11.8646C5.95694 11.6757 5.94673 11.3593 6.1356 11.1579L9.565 7.49985L6.1356 3.84182C5.94673 3.64036 5.95694 3.32394 6.1584 3.13508Z"
                                            fill="currentColor"
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                </div>
                            </div>
                        </a>
                        <a
                            className="group min-w-[300px] md:min-w-[360px] bg-white/[0.02] rounded-xl border border-white/[0.08] overflow-hidden hover:bg-white/[0.04] hover:border-white/[0.15] transition-all duration-300 flex flex-col"
                            // href="/openrouter-alternative"
                        >
                            <div className="jsx-e4c0ee4aadd7f829 relative h-44 md:h-48 overflow-hidden bg-gradient-to-br from-white/5 to-white/[0.02]">
                                <img
                                    alt="OpenRouter Alternative: When a Proxy Isn't Enough"
                                    loading="lazy"
                                    decoding="async"
                                    data-nimg="fill"
                                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                                    style={{
                                        position: "absolute",
                                        height: "100%",
                                        width: "100%",
                                        left: 0,
                                        top: 0,
                                        right: 0,
                                        bottom: 0,
                                        color: "transparent"
                                    }}
                                    sizes="(max-width: 768px) 300px, 360px"
                                    srcSet="https://www.morphllm.com/_next/image?url=%2Fimages%2Fseo%2Fopenrouter-alternative-og.png&w=32&q=75 32w, https://www.morphllm.com/_next/image?url=%2Fimages%2Fseo%2Fopenrouter-alternative-og.png&w=48&q=75 48w, https://www.morphllm.com/_next/image?url=%2Fimages%2Fseo%2Fopenrouter-alternative-og.png&w=64&q=75 64w, https://www.morphllm.com/_next/image?url=%2Fimages%2Fseo%2Fopenrouter-alternative-og.png&w=96&q=75 96w, https://www.morphllm.com/_next/image?url=%2Fimages%2Fseo%2Fopenrouter-alternative-og.png&w=128&q=75 128w, https://www.morphllm.com/_next/image?url=%2Fimages%2Fseo%2Fopenrouter-alternative-og.png&w=256&q=75 256w, https://www.morphllm.com/_next/image?url=%2Fimages%2Fseo%2Fopenrouter-alternative-og.png&w=384&q=75 384w, https://www.morphllm.com/_next/image?url=%2Fimages%2Fseo%2Fopenrouter-alternative-og.png&w=640&q=75 640w, https://www.morphllm.com/_next/image?url=%2Fimages%2Fseo%2Fopenrouter-alternative-og.png&w=750&q=75 750w, https://www.morphllm.com/_next/image?url=%2Fimages%2Fseo%2Fopenrouter-alternative-og.png&w=828&q=75 828w, https://www.morphllm.com/_next/image?url=%2Fimages%2Fseo%2Fopenrouter-alternative-og.png&w=1080&q=75 1080w, https://www.morphllm.com/_next/image?url=%2Fimages%2Fseo%2Fopenrouter-alternative-og.png&w=1200&q=75 1200w, https://www.morphllm.com/_next/image?url=%2Fimages%2Fseo%2Fopenrouter-alternative-og.png&w=1920&q=75 1920w, https://www.morphllm.com/_next/image?url=%2Fimages%2Fseo%2Fopenrouter-alternative-og.png&w=2048&q=75 2048w, https://www.morphllm.com/_next/image?url=%2Fimages%2Fseo%2Fopenrouter-alternative-og.png&w=3840&q=75 3840w"
                                    src="https://www.morphllm.com/_next/image?url=%2Fimages%2Fseo%2Fopenrouter-alternative-og.png&w=3840&q=75"
                                />
                                <div className="jsx-e4c0ee4aadd7f829 absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                            </div>
                            <div className="jsx-e4c0ee4aadd7f829 p-5 flex flex-col flex-1">
                                <h3 className="jsx-e4c0ee4aadd7f829 text-lg font-semibold mb-2 text-white group-hover:text-brand-primary transition-colors leading-tight">
                                    OpenRouter Alternative: When a Proxy Isn't Enough
                                </h3>
                                <p className="jsx-e4c0ee4aadd7f829 text-landing-secondary/70 text-sm leading-relaxed flex-1 line-clamp-2">
                                    OpenRouter and LiteLLM solve provider access. Neither solves model
                                    selection. Comparison of routing logic, cost optimization, latency,
                                    and how intelligent routing fills the gap.
                                </p>
                                <div className="jsx-e4c0ee4aadd7f829 flex items-center mt-4 text-brand-primary/80 group-hover:text-brand-primary text-xs font-medium uppercase tracking-wider transition-colors">
                                    <span className="jsx-e4c0ee4aadd7f829">Learn more</span>
                                    <svg
                                        width={15}
                                        height={15}
                                        viewBox="0 0 15 15"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="ml-0.5 h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5"
                                    >
                                        <path
                                            d="M6.1584 3.13508C6.35985 2.94621 6.67627 2.95642 6.86514 3.15788L10.6151 7.15788C10.7954 7.3502 10.7954 7.64949 10.6151 7.84182L6.86514 11.8418C6.67627 12.0433 6.35985 12.0535 6.1584 11.8646C5.95694 11.6757 5.94673 11.3593 6.1356 11.1579L9.565 7.49985L6.1356 3.84182C5.94673 3.64036 5.95694 3.32394 6.1584 3.13508Z"
                                            fill="currentColor"
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                </div>
                            </div>
                        </a>
                        <a
                            className="group min-w-[300px] md:min-w-[360px] bg-white/[0.02] rounded-xl border border-white/[0.08] overflow-hidden hover:bg-white/[0.04] hover:border-white/[0.15] transition-all duration-300 flex flex-col"
                            // href="/llm-cost-optimization"
                        >
                            <div className="jsx-e4c0ee4aadd7f829 relative h-44 md:h-48 overflow-hidden bg-gradient-to-br from-white/5 to-white/[0.02]">
                                <img
                                    alt="LLM Cost Optimization: 5 Levers That Cut API Spend 70-85%"
                                    loading="lazy"
                                    decoding="async"
                                    data-nimg="fill"
                                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                                    style={{
                                        position: "absolute",
                                        height: "100%",
                                        width: "100%",
                                        left: 0,
                                        top: 0,
                                        right: 0,
                                        bottom: 0,
                                        color: "transparent"
                                    }}
                                    sizes="(max-width: 768px) 300px, 360px"
                                    srcSet="https://www.morphllm.com/_next/image?url=%2Fimages%2Fseo%2Fllm-cost-optimization-og.png&w=32&q=75 32w, https://www.morphllm.com/_next/image?url=%2Fimages%2Fseo%2Fllm-cost-optimization-og.png&w=48&q=75 48w, https://www.morphllm.com/_next/image?url=%2Fimages%2Fseo%2Fllm-cost-optimization-og.png&w=64&q=75 64w, https://www.morphllm.com/_next/image?url=%2Fimages%2Fseo%2Fllm-cost-optimization-og.png&w=96&q=75 96w, https://www.morphllm.com/_next/image?url=%2Fimages%2Fseo%2Fllm-cost-optimization-og.png&w=128&q=75 128w, https://www.morphllm.com/_next/image?url=%2Fimages%2Fseo%2Fllm-cost-optimization-og.png&w=256&q=75 256w, https://www.morphllm.com/_next/image?url=%2Fimages%2Fseo%2Fllm-cost-optimization-og.png&w=384&q=75 384w, https://www.morphllm.com/_next/image?url=%2Fimages%2Fseo%2Fllm-cost-optimization-og.png&w=640&q=75 640w, https://www.morphllm.com/_next/image?url=%2Fimages%2Fseo%2Fllm-cost-optimization-og.png&w=750&q=75 750w, https://www.morphllm.com/_next/image?url=%2Fimages%2Fseo%2Fllm-cost-optimization-og.png&w=828&q=75 828w, https://www.morphllm.com/_next/image?url=%2Fimages%2Fseo%2Fllm-cost-optimization-og.png&w=1080&q=75 1080w, https://www.morphllm.com/_next/image?url=%2Fimages%2Fseo%2Fllm-cost-optimization-og.png&w=1200&q=75 1200w, https://www.morphllm.com/_next/image?url=%2Fimages%2Fseo%2Fllm-cost-optimization-og.png&w=1920&q=75 1920w, https://www.morphllm.com/_next/image?url=%2Fimages%2Fseo%2Fllm-cost-optimization-og.png&w=2048&q=75 2048w, https://www.morphllm.com/_next/image?url=%2Fimages%2Fseo%2Fllm-cost-optimization-og.png&w=3840&q=75 3840w"
                                    src="https://www.morphllm.com/_next/image?url=%2Fimages%2Fseo%2Fllm-cost-optimization-og.png&w=3840&q=75"
                                />
                                <div className="jsx-e4c0ee4aadd7f829 absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                            </div>
                            <div className="jsx-e4c0ee4aadd7f829 p-5 flex flex-col flex-1">
                                <h3 className="jsx-e4c0ee4aadd7f829 text-lg font-semibold mb-2 text-white group-hover:text-brand-primary transition-colors leading-tight">
                                    LLM Cost Optimization: 5 Levers That Cut API Spend 70-85%
                                </h3>
                                <p className="jsx-e4c0ee4aadd7f829 text-landing-secondary/70 text-sm leading-relaxed flex-1 line-clamp-2">
                                    A practical guide to reducing LLM API costs. Five levers: model
                                    routing (40-70% savings), context compaction (50-70% token
                                    reduction), prompt optimization, caching (90% on cache hits), and
                                    batching (50% discount).
                                </p>
                                <div className="jsx-e4c0ee4aadd7f829 flex items-center mt-4 text-brand-primary/80 group-hover:text-brand-primary text-xs font-medium uppercase tracking-wider transition-colors">
                                    <span className="jsx-e4c0ee4aadd7f829">Learn more</span>
                                    <svg
                                        width={15}
                                        height={15}
                                        viewBox="0 0 15 15"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="ml-0.5 h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5"
                                    >
                                        <path
                                            d="M6.1584 3.13508C6.35985 2.94621 6.67627 2.95642 6.86514 3.15788L10.6151 7.15788C10.7954 7.3502 10.7954 7.64949 10.6151 7.84182L6.86514 11.8418C6.67627 12.0433 6.35985 12.0535 6.1584 11.8646C5.95694 11.6757 5.94673 11.3593 6.1356 11.1579L9.565 7.49985L6.1356 3.84182C5.94673 3.64036 5.95694 3.32394 6.1584 3.13508Z"
                                            fill="currentColor"
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                </div>
                            </div>
                        </a>
                        <a
                            className="group min-w-[300px] md:min-w-[360px] bg-white/[0.02] rounded-xl border border-white/[0.08] overflow-hidden hover:bg-white/[0.04] hover:border-white/[0.15] transition-all duration-300 flex flex-col"
                            // href="/is-ai-overhyped"
                        >
                            <div className="jsx-e4c0ee4aadd7f829 relative h-44 md:h-48 overflow-hidden bg-gradient-to-br from-white/5 to-white/[0.02]">
                                <img
                                    alt="Is AI Overhyped? An AI Company's Honest Assessment"
                                    loading="lazy"
                                    decoding="async"
                                    data-nimg="fill"
                                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                                    style={{
                                        position: "absolute",
                                        height: "100%",
                                        width: "100%",
                                        left: 0,
                                        top: 0,
                                        right: 0,
                                        bottom: 0,
                                        color: "transparent"
                                    }}
                                    sizes="(max-width: 768px) 300px, 360px"
                                    srcSet="https://www.morphllm.com/_next/image?url=%2Fimages%2Fseo%2Fis-ai-overhyped-og.png&w=32&q=75 32w, https://www.morphllm.com/_next/image?url=%2Fimages%2Fseo%2Fis-ai-overhyped-og.png&w=48&q=75 48w, https://www.morphllm.com/_next/image?url=%2Fimages%2Fseo%2Fis-ai-overhyped-og.png&w=64&q=75 64w, https://www.morphllm.com/_next/image?url=%2Fimages%2Fseo%2Fis-ai-overhyped-og.png&w=96&q=75 96w, https://www.morphllm.com/_next/image?url=%2Fimages%2Fseo%2Fis-ai-overhyped-og.png&w=128&q=75 128w, https://www.morphllm.com/_next/image?url=%2Fimages%2Fseo%2Fis-ai-overhyped-og.png&w=256&q=75 256w, https://www.morphllm.com/_next/image?url=%2Fimages%2Fseo%2Fis-ai-overhyped-og.png&w=384&q=75 384w, https://www.morphllm.com/_next/image?url=%2Fimages%2Fseo%2Fis-ai-overhyped-og.png&w=640&q=75 640w, https://www.morphllm.com/_next/image?url=%2Fimages%2Fseo%2Fis-ai-overhyped-og.png&w=750&q=75 750w, https://www.morphllm.com/_next/image?url=%2Fimages%2Fseo%2Fis-ai-overhyped-og.png&w=828&q=75 828w, https://www.morphllm.com/_next/image?url=%2Fimages%2Fseo%2Fis-ai-overhyped-og.png&w=1080&q=75 1080w, https://www.morphllm.com/_next/image?url=%2Fimages%2Fseo%2Fis-ai-overhyped-og.png&w=1200&q=75 1200w, https://www.morphllm.com/_next/image?url=%2Fimages%2Fseo%2Fis-ai-overhyped-og.png&w=1920&q=75 1920w, https://www.morphllm.com/_next/image?url=%2Fimages%2Fseo%2Fis-ai-overhyped-og.png&w=2048&q=75 2048w, https://www.morphllm.com/_next/image?url=%2Fimages%2Fseo%2Fis-ai-overhyped-og.png&w=3840&q=75 3840w"
                                    src="https://www.morphllm.com/_next/image?url=%2Fimages%2Fseo%2Fis-ai-overhyped-og.png&w=3840&q=75"
                                />
                                <div className="jsx-e4c0ee4aadd7f829 absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                            </div>
                            <div className="jsx-e4c0ee4aadd7f829 p-5 flex flex-col flex-1">
                                <h3 className="jsx-e4c0ee4aadd7f829 text-lg font-semibold mb-2 text-white group-hover:text-brand-primary transition-colors leading-tight">
                                    Is AI Overhyped? An AI Company's Honest Assessment
                                </h3>
                                <p className="jsx-e4c0ee4aadd7f829 text-landing-secondary/70 text-sm leading-relaxed flex-1 line-clamp-2">
                                    An AI infrastructure company writing honestly about the AI bubble.
                                    Bain found 10-15% productivity gains, METR showed devs 19% slower
                                    with AI, CodeRabbit measured 1.7x more bugs. What the data says, and
                                    what survives the correction.
                                </p>
                                <div className="jsx-e4c0ee4aadd7f829 flex items-center mt-4 text-brand-primary/80 group-hover:text-brand-primary text-xs font-medium uppercase tracking-wider transition-colors">
                                    <span className="jsx-e4c0ee4aadd7f829">Learn more</span>
                                    <svg
                                        width={15}
                                        height={15}
                                        viewBox="0 0 15 15"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="ml-0.5 h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5"
                                    >
                                        <path
                                            d="M6.1584 3.13508C6.35985 2.94621 6.67627 2.95642 6.86514 3.15788L10.6151 7.15788C10.7954 7.3502 10.7954 7.64949 10.6151 7.84182L6.86514 11.8418C6.67627 12.0433 6.35985 12.0535 6.1584 11.8646C5.95694 11.6757 5.94673 11.3593 6.1356 11.1579L9.565 7.49985L6.1356 3.84182C5.94673 3.64036 5.95694 3.32394 6.1584 3.13508Z"
                                            fill="currentColor"
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                </div>
                            </div>
                        </a>
                        <a
                            className="group min-w-[300px] md:min-w-[360px] bg-white/[0.02] rounded-xl border border-white/[0.08] overflow-hidden hover:bg-white/[0.04] hover:border-white/[0.15] transition-all duration-300 flex flex-col"
                            // href="/ai-coding-costs"
                        >
                            <div className="jsx-e4c0ee4aadd7f829 relative h-44 md:h-48 overflow-hidden bg-gradient-to-br from-white/5 to-white/[0.02]">
                                <img
                                    alt="The Real Cost of AI Coding in 2026"
                                    loading="lazy"
                                    decoding="async"
                                    data-nimg="fill"
                                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                                    style={{
                                        position: "absolute",
                                        height: "100%",
                                        width: "100%",
                                        left: 0,
                                        top: 0,
                                        right: 0,
                                        bottom: 0,
                                        color: "transparent"
                                    }}
                                    sizes="(max-width: 768px) 300px, 360px"
                                    srcSet="https://www.morphllm.com/_next/image?url=%2Fimages%2Fseo%2Fai-coding-costs-og.png&w=32&q=75 32w, https://www.morphllm.com/_next/image?url=%2Fimages%2Fseo%2Fai-coding-costs-og.png&w=48&q=75 48w, https://www.morphllm.com/_next/image?url=%2Fimages%2Fseo%2Fai-coding-costs-og.png&w=64&q=75 64w, https://www.morphllm.com/_next/image?url=%2Fimages%2Fseo%2Fai-coding-costs-og.png&w=96&q=75 96w, https://www.morphllm.com/_next/image?url=%2Fimages%2Fseo%2Fai-coding-costs-og.png&w=128&q=75 128w, https://www.morphllm.com/_next/image?url=%2Fimages%2Fseo%2Fai-coding-costs-og.png&w=256&q=75 256w, https://www.morphllm.com/_next/image?url=%2Fimages%2Fseo%2Fai-coding-costs-og.png&w=384&q=75 384w, https://www.morphllm.com/_next/image?url=%2Fimages%2Fseo%2Fai-coding-costs-og.png&w=640&q=75 640w, https://www.morphllm.com/_next/image?url=%2Fimages%2Fseo%2Fai-coding-costs-og.png&w=750&q=75 750w, https://www.morphllm.com/_next/image?url=%2Fimages%2Fseo%2Fai-coding-costs-og.png&w=828&q=75 828w, https://www.morphllm.com/_next/image?url=%2Fimages%2Fseo%2Fai-coding-costs-og.png&w=1080&q=75 1080w, https://www.morphllm.com/_next/image?url=%2Fimages%2Fseo%2Fai-coding-costs-og.png&w=1200&q=75 1200w, https://www.morphllm.com/_next/image?url=%2Fimages%2Fseo%2Fai-coding-costs-og.png&w=1920&q=75 1920w, https://www.morphllm.com/_next/image?url=%2Fimages%2Fseo%2Fai-coding-costs-og.png&w=2048&q=75 2048w, https://www.morphllm.com/_next/image?url=%2Fimages%2Fseo%2Fai-coding-costs-og.png&w=3840&q=75 3840w"
                                    src="https://www.morphllm.com/_next/image?url=%2Fimages%2Fseo%2Fai-coding-costs-og.png&w=3840&q=75"
                                />
                                <div className="jsx-e4c0ee4aadd7f829 absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                            </div>
                            <div className="jsx-e4c0ee4aadd7f829 p-5 flex flex-col flex-1">
                                <h3 className="jsx-e4c0ee4aadd7f829 text-lg font-semibold mb-2 text-white group-hover:text-brand-primary transition-colors leading-tight">
                                    The Real Cost of AI Coding in 2026
                                </h3>
                                <p className="jsx-e4c0ee4aadd7f829 text-landing-secondary/70 text-sm leading-relaxed flex-1 line-clamp-2">
                                    What AI coding actually costs: token waste, agent loops, context
                                    bloat, subscription stacking. Real pricing data for Claude, GPT-5,
                                    Gemini, and how to cut spend 40-70%.
                                </p>
                                <div className="jsx-e4c0ee4aadd7f829 flex items-center mt-4 text-brand-primary/80 group-hover:text-brand-primary text-xs font-medium uppercase tracking-wider transition-colors">
                                    <span className="jsx-e4c0ee4aadd7f829">Learn more</span>
                                    <svg
                                        width={15}
                                        height={15}
                                        viewBox="0 0 15 15"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="ml-0.5 h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5"
                                    >
                                        <path
                                            d="M6.1584 3.13508C6.35985 2.94621 6.67627 2.95642 6.86514 3.15788L10.6151 7.15788C10.7954 7.3502 10.7954 7.64949 10.6151 7.84182L6.86514 11.8418C6.67627 12.0433 6.35985 12.0535 6.1584 11.8646C5.95694 11.6757 5.94673 11.3593 6.1356 11.1579L9.565 7.49985L6.1356 3.84182C5.94673 3.64036 5.95694 3.32394 6.1584 3.13508Z"
                                            fill="currentColor"
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                </div>
                            </div>
                        </a>
                        <a
                            className="group min-w-[300px] md:min-w-[360px] bg-white/[0.02] rounded-xl border border-white/[0.08] overflow-hidden hover:bg-white/[0.04] hover:border-white/[0.15] transition-all duration-300 flex flex-col"
                            // href="/ai-hallucination-examples"
                        >
                            <div className="jsx-e4c0ee4aadd7f829 relative h-44 md:h-48 overflow-hidden bg-gradient-to-br from-white/5 to-white/[0.02]">
                                <img
                                    alt="AI Hallucination Examples: A Catalog of What Goes Wrong and Why"
                                    loading="lazy"
                                    decoding="async"
                                    data-nimg="fill"
                                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                                    style={{
                                        position: "absolute",
                                        height: "100%",
                                        width: "100%",
                                        left: 0,
                                        top: 0,
                                        right: 0,
                                        bottom: 0,
                                        color: "transparent"
                                    }}
                                    sizes="(max-width: 768px) 300px, 360px"
                                    srcSet="https://www.morphllm.com/_next/image?url=%2Fimages%2Fseo%2Fai-hallucination-examples-og.png&w=32&q=75 32w, https://www.morphllm.com/_next/image?url=%2Fimages%2Fseo%2Fai-hallucination-examples-og.png&w=48&q=75 48w, https://www.morphllm.com/_next/image?url=%2Fimages%2Fseo%2Fai-hallucination-examples-og.png&w=64&q=75 64w, https://www.morphllm.com/_next/image?url=%2Fimages%2Fseo%2Fai-hallucination-examples-og.png&w=96&q=75 96w, https://www.morphllm.com/_next/image?url=%2Fimages%2Fseo%2Fai-hallucination-examples-og.png&w=128&q=75 128w, https://www.morphllm.com/_next/image?url=%2Fimages%2Fseo%2Fai-hallucination-examples-og.png&w=256&q=75 256w, https://www.morphllm.com/_next/image?url=%2Fimages%2Fseo%2Fai-hallucination-examples-og.png&w=384&q=75 384w, https://www.morphllm.com/_next/image?url=%2Fimages%2Fseo%2Fai-hallucination-examples-og.png&w=640&q=75 640w, https://www.morphllm.com/_next/image?url=%2Fimages%2Fseo%2Fai-hallucination-examples-og.png&w=750&q=75 750w, https://www.morphllm.com/_next/image?url=%2Fimages%2Fseo%2Fai-hallucination-examples-og.png&w=828&q=75 828w, https://www.morphllm.com/_next/image?url=%2Fimages%2Fseo%2Fai-hallucination-examples-og.png&w=1080&q=75 1080w, https://www.morphllm.com/_next/image?url=%2Fimages%2Fseo%2Fai-hallucination-examples-og.png&w=1200&q=75 1200w, https://www.morphllm.com/_next/image?url=%2Fimages%2Fseo%2Fai-hallucination-examples-og.png&w=1920&q=75 1920w, https://www.morphllm.com/_next/image?url=%2Fimages%2Fseo%2Fai-hallucination-examples-og.png&w=2048&q=75 2048w, https://www.morphllm.com/_next/image?url=%2Fimages%2Fseo%2Fai-hallucination-examples-og.png&w=3840&q=75 3840w"
                                    src="https://www.morphllm.com/_next/image?url=%2Fimages%2Fseo%2Fai-hallucination-examples-og.png&w=3840&q=75"
                                />
                                <div className="jsx-e4c0ee4aadd7f829 absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                            </div>
                            <div className="jsx-e4c0ee4aadd7f829 p-5 flex flex-col flex-1">
                                <h3 className="jsx-e4c0ee4aadd7f829 text-lg font-semibold mb-2 text-white group-hover:text-brand-primary transition-colors leading-tight">
                                    AI Hallucination Examples: A Catalog of What Goes Wrong and Why
                                </h3>
                                <p className="jsx-e4c0ee4aadd7f829 text-landing-secondary/70 text-sm leading-relaxed flex-1 line-clamp-2">
                                    Real AI hallucination examples across legal, medical, and coding
                                    domains. Measured hallucination rates from 0.7% to 29.9%, why token
                                    prediction makes hallucination inevitable, and architectural
                                    strategies that reduce it.
                                </p>
                                <div className="jsx-e4c0ee4aadd7f829 flex items-center mt-4 text-brand-primary/80 group-hover:text-brand-primary text-xs font-medium uppercase tracking-wider transition-colors">
                                    <span className="jsx-e4c0ee4aadd7f829">Learn more</span>
                                    <svg
                                        width={15}
                                        height={15}
                                        viewBox="0 0 15 15"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="ml-0.5 h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5"
                                    >
                                        <path
                                            d="M6.1584 3.13508C6.35985 2.94621 6.67627 2.95642 6.86514 3.15788L10.6151 7.15788C10.7954 7.3502 10.7954 7.64949 10.6151 7.84182L6.86514 11.8418C6.67627 12.0433 6.35985 12.0535 6.1584 11.8646C5.95694 11.6757 5.94673 11.3593 6.1356 11.1579L9.565 7.49985L6.1356 3.84182C5.94673 3.64036 5.95694 3.32394 6.1584 3.13508Z"
                                            fill="currentColor"
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                </div>
                            </div>
                        </a>
                        <a
                            className="group min-w-[300px] md:min-w-[360px] bg-white/[0.02] rounded-xl border border-white/[0.08] overflow-hidden hover:bg-white/[0.04] hover:border-white/[0.15] transition-all duration-300 flex flex-col"
                            // href="/claude-vs-chatgpt"
                        >
                            <div className="jsx-e4c0ee4aadd7f829 relative h-44 md:h-48 overflow-hidden bg-gradient-to-br from-white/5 to-white/[0.02]">
                                <img
                                    alt="Claude vs ChatGPT (2026): Honest Comparison, Real Pricing"
                                    loading="lazy"
                                    decoding="async"
                                    data-nimg="fill"
                                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                                    style={{
                                        position: "absolute",
                                        height: "100%",
                                        width: "100%",
                                        left: 0,
                                        top: 0,
                                        right: 0,
                                        bottom: 0,
                                        color: "transparent"
                                    }}
                                    sizes="(max-width: 768px) 300px, 360px"
                                    srcSet="https://www.morphllm.com/_next/image?url=%2Fimages%2Fseo%2Fclaude-vs-chatgpt-og.png&w=32&q=75 32w, https://www.morphllm.com/_next/image?url=%2Fimages%2Fseo%2Fclaude-vs-chatgpt-og.png&w=48&q=75 48w, https://www.morphllm.com/_next/image?url=%2Fimages%2Fseo%2Fclaude-vs-chatgpt-og.png&w=64&q=75 64w, https://www.morphllm.com/_next/image?url=%2Fimages%2Fseo%2Fclaude-vs-chatgpt-og.png&w=96&q=75 96w, https://www.morphllm.com/_next/image?url=%2Fimages%2Fseo%2Fclaude-vs-chatgpt-og.png&w=128&q=75 128w, https://www.morphllm.com/_next/image?url=%2Fimages%2Fseo%2Fclaude-vs-chatgpt-og.png&w=256&q=75 256w, https://www.morphllm.com/_next/image?url=%2Fimages%2Fseo%2Fclaude-vs-chatgpt-og.png&w=384&q=75 384w, https://www.morphllm.com/_next/image?url=%2Fimages%2Fseo%2Fclaude-vs-chatgpt-og.png&w=640&q=75 640w, https://www.morphllm.com/_next/image?url=%2Fimages%2Fseo%2Fclaude-vs-chatgpt-og.png&w=750&q=75 750w, https://www.morphllm.com/_next/image?url=%2Fimages%2Fseo%2Fclaude-vs-chatgpt-og.png&w=828&q=75 828w, https://www.morphllm.com/_next/image?url=%2Fimages%2Fseo%2Fclaude-vs-chatgpt-og.png&w=1080&q=75 1080w, https://www.morphllm.com/_next/image?url=%2Fimages%2Fseo%2Fclaude-vs-chatgpt-og.png&w=1200&q=75 1200w, https://www.morphllm.com/_next/image?url=%2Fimages%2Fseo%2Fclaude-vs-chatgpt-og.png&w=1920&q=75 1920w, https://www.morphllm.com/_next/image?url=%2Fimages%2Fseo%2Fclaude-vs-chatgpt-og.png&w=2048&q=75 2048w, https://www.morphllm.com/_next/image?url=%2Fimages%2Fseo%2Fclaude-vs-chatgpt-og.png&w=3840&q=75 3840w"
                                    src="https://www.morphllm.com/_next/image?url=%2Fimages%2Fseo%2Fclaude-vs-chatgpt-og.png&w=3840&q=75"
                                />
                                <div className="jsx-e4c0ee4aadd7f829 absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                            </div>
                            <div className="jsx-e4c0ee4aadd7f829 p-5 flex flex-col flex-1">
                                <h3 className="jsx-e4c0ee4aadd7f829 text-lg font-semibold mb-2 text-white group-hover:text-brand-primary transition-colors leading-tight">
                                    Claude vs ChatGPT (2026): Honest Comparison, Real Pricing
                                </h3>
                                <p className="jsx-e4c0ee4aadd7f829 text-landing-secondary/70 text-sm leading-relaxed flex-1 line-clamp-2">
                                    An honest Claude vs ChatGPT comparison from a team that routes
                                    production traffic to both. Pricing, benchmarks, strengths,
                                    weaknesses, and why model routing beats picking one.
                                </p>
                                <div className="jsx-e4c0ee4aadd7f829 flex items-center mt-4 text-brand-primary/80 group-hover:text-brand-primary text-xs font-medium uppercase tracking-wider transition-colors">
                                    <span className="jsx-e4c0ee4aadd7f829">Learn more</span>
                                    <svg
                                        width={15}
                                        height={15}
                                        viewBox="0 0 15 15"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="ml-0.5 h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5"
                                    >
                                        <path
                                            d="M6.1584 3.13508C6.35985 2.94621 6.67627 2.95642 6.86514 3.15788L10.6151 7.15788C10.7954 7.3502 10.7954 7.64949 10.6151 7.84182L6.86514 11.8418C6.67627 12.0433 6.35985 12.0535 6.1584 11.8646C5.95694 11.6757 5.94673 11.3593 6.1356 11.1579L9.565 7.49985L6.1356 3.84182C5.94673 3.64036 5.95694 3.32394 6.1584 3.13508Z"
                                            fill="currentColor"
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                </div>
                            </div>
                        </a>
                        <a
                            className="group min-w-[300px] md:min-w-[360px] bg-white/[0.02] rounded-xl border border-white/[0.08] overflow-hidden hover:bg-white/[0.04] hover:border-white/[0.15] transition-all duration-300 flex flex-col"
                            // href="/ai-washing"
                        >
                            <div className="jsx-e4c0ee4aadd7f829 relative h-44 md:h-48 overflow-hidden bg-gradient-to-br from-white/5 to-white/[0.02]">
                                <img
                                    alt="AI Washing: A B2B Buyer's Guide to Spotting Fake AI Claims"
                                    loading="lazy"
                                    decoding="async"
                                    data-nimg="fill"
                                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                                    style={{
                                        position: "absolute",
                                        height: "100%",
                                        width: "100%",
                                        left: 0,
                                        top: 0,
                                        right: 0,
                                        bottom: 0,
                                        color: "transparent"
                                    }}
                                    sizes="(max-width: 768px) 300px, 360px"
                                    srcSet="https://www.morphllm.com/_next/image?url=%2Fimages%2Fseo%2Fai-washing-og.png&w=32&q=75 32w, https://www.morphllm.com/_next/image?url=%2Fimages%2Fseo%2Fai-washing-og.png&w=48&q=75 48w, https://www.morphllm.com/_next/image?url=%2Fimages%2Fseo%2Fai-washing-og.png&w=64&q=75 64w, https://www.morphllm.com/_next/image?url=%2Fimages%2Fseo%2Fai-washing-og.png&w=96&q=75 96w, https://www.morphllm.com/_next/image?url=%2Fimages%2Fseo%2Fai-washing-og.png&w=128&q=75 128w, https://www.morphllm.com/_next/image?url=%2Fimages%2Fseo%2Fai-washing-og.png&w=256&q=75 256w, https://www.morphllm.com/_next/image?url=%2Fimages%2Fseo%2Fai-washing-og.png&w=384&q=75 384w, https://www.morphllm.com/_next/image?url=%2Fimages%2Fseo%2Fai-washing-og.png&w=640&q=75 640w, https://www.morphllm.com/_next/image?url=%2Fimages%2Fseo%2Fai-washing-og.png&w=750&q=75 750w, https://www.morphllm.com/_next/image?url=%2Fimages%2Fseo%2Fai-washing-og.png&w=828&q=75 828w, https://www.morphllm.com/_next/image?url=%2Fimages%2Fseo%2Fai-washing-og.png&w=1080&q=75 1080w, https://www.morphllm.com/_next/image?url=%2Fimages%2Fseo%2Fai-washing-og.png&w=1200&q=75 1200w, https://www.morphllm.com/_next/image?url=%2Fimages%2Fseo%2Fai-washing-og.png&w=1920&q=75 1920w, https://www.morphllm.com/_next/image?url=%2Fimages%2Fseo%2Fai-washing-og.png&w=2048&q=75 2048w, https://www.morphllm.com/_next/image?url=%2Fimages%2Fseo%2Fai-washing-og.png&w=3840&q=75 3840w"
                                    src="https://www.morphllm.com/_next/image?url=%2Fimages%2Fseo%2Fai-washing-og.png&w=3840&q=75"
                                />
                                <div className="jsx-e4c0ee4aadd7f829 absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                            </div>
                            <div className="jsx-e4c0ee4aadd7f829 p-5 flex flex-col flex-1">
                                <h3 className="jsx-e4c0ee4aadd7f829 text-lg font-semibold mb-2 text-white group-hover:text-brand-primary transition-colors leading-tight">
                                    AI Washing: A B2B Buyer's Guide to Spotting Fake AI Claims
                                </h3>
                                <p className="jsx-e4c0ee4aadd7f829 text-landing-secondary/70 text-sm leading-relaxed flex-1 line-clamp-2">
                                    AI washing is adding 'AI-powered' to a product that uses no AI, or
                                    wrapping a ChatGPT API call and calling it proprietary technology.
                                    Documented SEC and FTC enforcement actions, the API wrapper problem,
                                    and a checklist for evaluating whether a vendor's AI claims are
                                    real.
                                </p>
                                <div className="jsx-e4c0ee4aadd7f829 flex items-center mt-4 text-brand-primary/80 group-hover:text-brand-primary text-xs font-medium uppercase tracking-wider transition-colors">
                                    <span className="jsx-e4c0ee4aadd7f829">Learn more</span>
                                    <svg
                                        width={15}
                                        height={15}
                                        viewBox="0 0 15 15"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="ml-0.5 h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5"
                                    >
                                        <path
                                            d="M6.1584 3.13508C6.35985 2.94621 6.67627 2.95642 6.86514 3.15788L10.6151 7.15788C10.7954 7.3502 10.7954 7.64949 10.6151 7.84182L6.86514 11.8418C6.67627 12.0433 6.35985 12.0535 6.1584 11.8646C5.95694 11.6757 5.94673 11.3593 6.1356 11.1579L9.565 7.49985L6.1356 3.84182C5.94673 3.64036 5.95694 3.32394 6.1584 3.13508Z"
                                            fill="currentColor"
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                </div>
                            </div>
                        </a>
                        <a
                            className="group min-w-[300px] md:min-w-[360px] bg-white/[0.02] rounded-xl border border-white/[0.08] overflow-hidden hover:bg-white/[0.04] hover:border-white/[0.15] transition-all duration-300 flex flex-col"
                            // href="/will-ai-replace-developers"
                        >
                            <div className="jsx-e4c0ee4aadd7f829 relative h-44 md:h-48 overflow-hidden bg-gradient-to-br from-white/5 to-white/[0.02]">
                                <img
                                    alt="Will AI Replace Developers? What the Research Actually Says"
                                    loading="lazy"
                                    decoding="async"
                                    data-nimg="fill"
                                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                                    style={{
                                        position: "absolute",
                                        height: "100%",
                                        width: "100%",
                                        left: 0,
                                        top: 0,
                                        right: 0,
                                        bottom: 0,
                                        color: "transparent"
                                    }}
                                    sizes="(max-width: 768px) 300px, 360px"
                                    srcSet="https://www.morphllm.com/_next/image?url=%2Fimages%2Fseo%2Fwill-ai-replace-developers-og.png&w=32&q=75 32w, https://www.morphllm.com/_next/image?url=%2Fimages%2Fseo%2Fwill-ai-replace-developers-og.png&w=48&q=75 48w, https://www.morphllm.com/_next/image?url=%2Fimages%2Fseo%2Fwill-ai-replace-developers-og.png&w=64&q=75 64w, https://www.morphllm.com/_next/image?url=%2Fimages%2Fseo%2Fwill-ai-replace-developers-og.png&w=96&q=75 96w, https://www.morphllm.com/_next/image?url=%2Fimages%2Fseo%2Fwill-ai-replace-developers-og.png&w=128&q=75 128w, https://www.morphllm.com/_next/image?url=%2Fimages%2Fseo%2Fwill-ai-replace-developers-og.png&w=256&q=75 256w, https://www.morphllm.com/_next/image?url=%2Fimages%2Fseo%2Fwill-ai-replace-developers-og.png&w=384&q=75 384w, https://www.morphllm.com/_next/image?url=%2Fimages%2Fseo%2Fwill-ai-replace-developers-og.png&w=640&q=75 640w, https://www.morphllm.com/_next/image?url=%2Fimages%2Fseo%2Fwill-ai-replace-developers-og.png&w=750&q=75 750w, https://www.morphllm.com/_next/image?url=%2Fimages%2Fseo%2Fwill-ai-replace-developers-og.png&w=828&q=75 828w, https://www.morphllm.com/_next/image?url=%2Fimages%2Fseo%2Fwill-ai-replace-developers-og.png&w=1080&q=75 1080w, https://www.morphllm.com/_next/image?url=%2Fimages%2Fseo%2Fwill-ai-replace-developers-og.png&w=1200&q=75 1200w, https://www.morphllm.com/_next/image?url=%2Fimages%2Fseo%2Fwill-ai-replace-developers-og.png&w=1920&q=75 1920w, https://www.morphllm.com/_next/image?url=%2Fimages%2Fseo%2Fwill-ai-replace-developers-og.png&w=2048&q=75 2048w, https://www.morphllm.com/_next/image?url=%2Fimages%2Fseo%2Fwill-ai-replace-developers-og.png&w=3840&q=75 3840w"
                                    src="https://www.morphllm.com/_next/image?url=%2Fimages%2Fseo%2Fwill-ai-replace-developers-og.png&w=3840&q=75"
                                />
                                <div className="jsx-e4c0ee4aadd7f829 absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                            </div>
                            <div className="jsx-e4c0ee4aadd7f829 p-5 flex flex-col flex-1">
                                <h3 className="jsx-e4c0ee4aadd7f829 text-lg font-semibold mb-2 text-white group-hover:text-brand-primary transition-colors leading-tight">
                                    Will AI Replace Developers? What the Research Actually Says
                                </h3>
                                <p className="jsx-e4c0ee4aadd7f829 text-landing-secondary/70 text-sm leading-relaxed flex-1 line-clamp-2">
                                    An AI infrastructure company's honest assessment. METR found AI made
                                    experienced devs 19% slower. Bain measured 10-15% gains. CodeRabbit
                                    found 1.7x more bugs. Junior dev postings dropped 60%. The job is
                                    changing, not disappearing.
                                </p>
                                <div className="jsx-e4c0ee4aadd7f829 flex items-center mt-4 text-brand-primary/80 group-hover:text-brand-primary text-xs font-medium uppercase tracking-wider transition-colors">
                                    <span className="jsx-e4c0ee4aadd7f829">Learn more</span>
                                    <svg
                                        width={15}
                                        height={15}
                                        viewBox="0 0 15 15"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="ml-0.5 h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5"
                                    >
                                        <path
                                            d="M6.1584 3.13508C6.35985 2.94621 6.67627 2.95642 6.86514 3.15788L10.6151 7.15788C10.7954 7.3502 10.7954 7.64949 10.6151 7.84182L6.86514 11.8418C6.67627 12.0433 6.35985 12.0535 6.1584 11.8646C5.95694 11.6757 5.94673 11.3593 6.1356 11.1579L9.565 7.49985L6.1356 3.84182C5.94673 3.64036 5.95694 3.32394 6.1584 3.13508Z"
                                            fill="currentColor"
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className="jsx-e4c0ee4aadd7f829 flex justify-center mt-10 gap-1.5">
                        <div className="jsx-e4c0ee4aadd7f829 h-1.5 rounded-full transition-all duration-300 w-6 bg-brand-primary/60" />
                        <div className="jsx-e4c0ee4aadd7f829 h-1.5 rounded-full transition-all duration-300 w-1.5 bg-white/20" />
                        <div className="jsx-e4c0ee4aadd7f829 h-1.5 rounded-full transition-all duration-300 w-1.5 bg-white/20" />
                        <div className="jsx-e4c0ee4aadd7f829 h-1.5 rounded-full transition-all duration-300 w-1.5 bg-white/20" />
                        <div className="jsx-e4c0ee4aadd7f829 h-1.5 rounded-full transition-all duration-300 w-1.5 bg-white/20" />
                        <div className="jsx-e4c0ee4aadd7f829 h-1.5 rounded-full transition-all duration-300 w-1.5 bg-white/20" />
                        <div className="jsx-e4c0ee4aadd7f829 h-1.5 rounded-full transition-all duration-300 w-1.5 bg-white/20" />
                        <div className="jsx-e4c0ee4aadd7f829 h-1.5 rounded-full transition-all duration-300 w-1.5 bg-white/20" />
                        <div className="jsx-e4c0ee4aadd7f829 h-1.5 rounded-full transition-all duration-300 w-1.5 bg-white/20" />
                        <div className="jsx-e4c0ee4aadd7f829 h-1.5 rounded-full transition-all duration-300 w-1.5 bg-white/20" />
                    </div>
                </div>
            </section>
            <section className="py-16 lg:py-32 relative">
                <div className="absolute inset-0 -z-10 overflow-hidden">
                    <div className="max-w-7xl mx-auto h-full relative">
                        <div
                            className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-brand-primary/30 to-transparent"
                            style={{ transform: "translateY(78.7%)" }}
                        />
                        <div
                            className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-brand-primary/30 to-transparent"
                            style={{ transform: "translateY(77.04%)" }}
                        />
                        <div
                            className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-brand-primary/30 to-transparent"
                            style={{ transform: "translateX(-39.1333%)" }}
                        />
                        <div
                            className="absolute bottom-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-brand-primary/30 to-transparent"
                            style={{ transform: "translateX(76.4%)" }}
                        />
                    </div>
                </div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center relative z-10">
                        <h2 className="text-display-3 lg:text-display-2 font-geist-circle font-medium mb-6 leading-tight lg:leading-tight text-white">
                            Build faster coding agents with{" "}
                            <span className="text-brand-primary">Code Velocity</span>
                        </h2>
                        <h3 className="text-display-4 text-landing-secondary mb-8">
                            General coding models and specialized agent models, through one API.
                            Start free.
                        </h3>
                        <div className="flex flex-wrap gap-4 justify-center">
                            <a
                                // href="/sign-up"
                            >
                                <div className="inline-flex justify-center items-center gap-2 cursor-pointer px-6 py-2.5 rounded-md bg-brand-primary hover:!bg-brand-primary/80 active:!bg-brand-primary/60 transition-all duration-150  relative">
                                    <div className="justify-start text-black text-base font-semibold">
                                        Get API Key
                                    </div>
                                </div>
                            </a>
                            <a
                                // href="https://calendar.app.google/xN2RcfSYtfQERQYG8"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <div className="inline-flex justify-center items-center gap-2 cursor-pointer px-6 py-2.5 rounded-md outline outline-1 outline-offset-[-1px] outline-neutral-400/40 text-brand-primary hover:bg-white/10 active:!bg-white/20 transition-all duration-150  relative">
                                    <div className="justify-start text-base font-semibold">
                                        Book Enterprise Demo
                                    </div>
                                </div>
                            </a>
                        </div>
                        <p className="mt-6 text-sm text-landing-secondary">
                            <a 
                            // href="/pricing" 
                            className="text-brand-primary hover:underline">
                                View pricing
                            </a>{" "}
                            {/* */}or{/* */}{" "}
                            <a 
                            // href="/contact" 
                            className="text-brand-primary hover:underline">
                                talk to the team
                            </a>
                        </p>
                    </div>
                </div>
            </section>
            <footer className="w-full font-instrument-sans mt-12 antialiased py-12 px-4 sm:px-6 lg:px-8 border-t border-white/10 bg-zinc-950">
                <div className="mx-auto max-w-6xl">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center md:text-left">
                        <div className="col-span-1 md:col-span-2 flex flex-col justify-between">
                            <div className="flex flex-col gap-2">
                                <div className="flex items-center justify-center md:justify-start gap-2">

                                    <span className="font-morph text-lg font-semibold text-white">
                                        Code Velocity
                                    </span>
                                </div>
                                <div className="flex flex-col gap-3 max-w-md mx-auto md:mx-0 mb-4">
                                    <p className="text-sm text-landing-secondary leading-relaxed">
                                        Applied research building for the future of codegen.
                                    </p>
                                    <p className="text-sm text-landing-secondary leading-relaxed">
                                        © 2026 AutoInfra, Inc. All rights reserved.
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-center justify-center md:justify-start gap-2 mb-1">
                                <div className="flex items-center gap-4">
                                    <a
                                        // href="https://x.com/morphllm"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-landing-secondary hover:text-landing-secondary-hover transition-colors"
                                        aria-label="Follow us on X"
                                    >
                                        <svg
                                            className="h-4 w-4"
                                            viewBox="0 0 1200 1227"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M714.163 519.284L1160.89 0H1055.03L667.137 450.887L357.328 0H0L468.492 681.821L0 1226.37H105.866L515.491 750.218L842.672 1226.37H1200L714.137 519.284H714.163ZM569.165 687.828L521.697 619.934L144.011 79.6944H306.615L611.412 515.685L658.88 583.579L1055.08 1150.3H892.476L569.165 687.854V687.828Z"
                                                fill="currentColor"
                                            />
                                        </svg>
                                    </a>
                                    <a
                                        // href="https://discord.com/invite/AdXta4yxEK"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-landing-secondary hover:text-landing-secondary-hover transition-colors"
                                        aria-label="Join our Discord"
                                    >
                                        <svg
                                            className="h-5 w-5"
                                            viewBox="0 0 18 14"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M15.2477 1.17248C14.0825 0.624743 12.8367 0.22665 11.5342 0C11.3742 0.290577 11.1873 0.681402 11.0585 0.992319C9.67387 0.783107 8.30197 0.783107 6.94286 0.992319C6.81404 0.681402 6.62288 0.290577 6.46153 0C5.1576 0.22665 3.91031 0.626196 2.74515 1.17539C0.394983 4.74368 -0.242108 8.22336 0.0764375 11.6536C1.63519 12.8232 3.1458 13.5336 4.63093 13.9985C4.99762 13.4915 5.32466 12.9525 5.6064 12.3844C5.06982 12.1795 4.5559 11.9268 4.07029 11.6332C4.19913 11.5374 4.32513 11.4371 4.44689 11.334C7.40868 12.7258 10.6267 12.7258 13.5531 11.334C13.6762 11.4371 13.8022 11.5374 13.9296 11.6332C13.4426 11.9282 12.9273 12.181 12.3907 12.3859C12.6725 12.9525 12.9981 13.493 13.3662 14C14.8527 13.5351 16.3647 12.8246 17.9235 11.6536C18.2973 7.67707 17.285 4.22935 15.2477 1.17248ZM6.00988 9.54403C5.12079 9.54403 4.39167 8.71004 4.39167 7.69451C4.39167 6.67893 5.10521 5.84353 6.00988 5.84353C6.91456 5.84353 7.64365 6.67747 7.62808 7.69451C7.62954 8.71004 6.91456 9.54403 6.00988 9.54403ZM11.9901 9.54403C11.101 9.54403 10.3718 8.71004 10.3718 7.69451C10.3718 6.67893 11.0854 5.84353 11.9901 5.84353C12.8947 5.84353 13.6238 6.67747 13.6083 7.69451C13.6083 8.71004 12.8947 9.54403 11.9901 9.54403Z"
                                                fill="currentColor"
                                            />
                                        </svg>
                                    </a>
                                    <a
                                        // href="https://www.linkedin.com/company/morphllm"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-landing-secondary hover:text-landing-secondary-hover transition-colors"
                                        aria-label="Follow us on LinkedIn"
                                    >
                                        <svg
                                            className="h-5 w-5"
                                            viewBox="0 0 382 382"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M347.445,0H34.555C15.471,0,0,15.471,0,34.555v312.889C0,366.529,15.471,382,34.555,382h312.889 C366.529,382,382,366.529,382,347.444V34.555C382,15.471,366.529,0,347.445,0z M118.207,329.844c0,5.554-4.502,10.056-10.056,10.056 H65.345c-5.554,0-10.056-4.502-10.056-10.056V150.403c0-5.554,4.502-10.056,10.056-10.056h42.806 c5.554,0,10.056,4.502,10.056,10.056V329.844z M86.748,123.432c-22.459,0-40.666-18.207-40.666-40.666S64.289,42.1,86.748,42.1 s40.666,18.207,40.666,40.666S109.208,123.432,86.748,123.432z M341.91,330.654c0,5.106-4.14,9.246-9.246,9.246H286.73 c-5.106,0-9.246-4.14-9.246-9.246v-84.168c0-12.556,3.683-55.021-32.813-55.021c-28.309,0-34.051,29.066-35.204,42.11v97.079 c0,5.106-4.139,9.246-9.246,9.246h-44.426c-5.106,0-9.246-4.14-9.246-9.246V149.593c0-5.106,4.14-9.246,9.246-9.246h44.426 c5.106,0,9.246,4.14,9.246,9.246v15.655c10.497-15.753,26.097-27.912,59.312-27.912c73.552,0,73.131,68.716,73.131,106.472 L341.91,330.654L341.91,330.654z"
                                                fill="currentColor"
                                            />
                                        </svg>
                                    </a>
                                    <a
                                        // href="mailto:info@morphllm.com"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-landing-secondary hover:text-landing-secondary-hover transition-colors"
                                        aria-label="Follow us on LinkedIn"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width={24}
                                            height={24}
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth={2}
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="lucide lucide-mail h-5 w-5"
                                            aria-hidden="true"
                                        >
                                            <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7" />
                                            <rect x={2} y={4} width={20} height={16} rx={2} />
                                        </svg>
                                    </a>
                                </div>

                            </div>
                        </div>
                        <div>
                            <ul className="space-y-3">
                                <li>
                                    <a
                                        // href="https://docs.morphllm.com"
                                        className="text-sm text-landing-secondary hover:text-landing-secondary-hover transition-colors"
                                    >
                                        Documentation
                                    </a>
                                </li>
                                <li>
                                    <a
                                        className="text-sm text-landing-secondary hover:text-landing-secondary-hover transition-colors"
                                        // href="/blog"
                                    >
                                        Blog
                                    </a>
                                </li>
                                <li>
                                    <a
                                        // href="https://trust.delve.co/morph"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-sm text-landing-secondary hover:text-landing-secondary-hover transition-colors"
                                    >
                                        Trust Center
                                    </a>
                                </li>
                                <li>
                                    <a
                                        // href="https://www.ycombinator.com/companies/morph/jobs"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-sm flex items-center justify-center md:justify-start gap-2 text-landing-secondary hover:text-landing-secondary-hover transition-colors"
                                    >
                                        Careers
                                        <span className="text-xs px-2 py-1 font-medium border rounded-full ml-3 text-brand-primary bg-brand-primary/10 border-brand-primary/20">
                                            We're Hiring!
                                        </span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <ul className="space-y-3">
                                <li>
                                    <a
                                        className="text-sm text-landing-secondary hover:text-landing-secondary-hover transition-colors"
                                        // href="/privacy"
                                    >
                                        Privacy Policy
                                    </a>
                                </li>
                                <li>
                                    <a
                                        // href="/privacy/tos"
                                        className="text-sm text-landing-secondary hover:text-landing-secondary-hover transition-colors"
                                    >
                                        Terms of Service
                                    </a>
                                </li>
                                <li>
                                    <a
                                        className="text-sm text-landing-secondary hover:text-landing-secondary-hover transition-colors"
                                        // href="/eula"
                                    >
                                        EULA
                                    </a>
                                </li>
                                <li>
                                    <a
                                        // href="https://morphllm.betteruptime.com/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-sm flex items-center justify-center md:justify-start gap-2 text-landing-secondary hover:text-landing-secondary-hover transition-colors"
                                    >
                                        Service Status
                                        <div className="w-2.5 h-2.5 bg-brand-600 rounded-full" />
                                    </a>
                                </li>
                                <li>
                                    <a
                                        // href="https://calendar.app.google/xN2RcfSYtfQERQYG8"
                                        className="text-sm text-landing-secondary hover:text-landing-secondary-hover transition-colors"
                                    >
                                        Book a Call
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>

        </div>
    )
}

export default AllSection