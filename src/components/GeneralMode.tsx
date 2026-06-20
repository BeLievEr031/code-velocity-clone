
function GeneralMode() {
    return (
        <div>
            <section className="py-16 lg:py-32">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center lg:text-left mb-8 lg:mb-16">
                        <h2 className="text-display-3 lg:text-display-2 font-geist-circle font-medium mb-6 lg:leading-tight text-white">
                            General coding models + specialized models
                        </h2>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
                        <div className="rounded-lg border border-white/10 bg-white/[0.08] p-8 h-full">
                            <div className="">
                                <div className="flex flex-col items-center lg:flex-row lg:items-start gap-4">
                                    <div className="w-6 h-6 flex items-center justify-center flex-shrink-0">
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
                                            className="lucide lucide-zap w-full h-full"
                                            aria-hidden="true"
                                        >
                                            <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z" />
                                        </svg>
                                    </div>
                                    <div className="flex flex-col gap-3 w-full">
                                        <h3 className="font-geist-circle text-xl font-medium text-white text-center lg:text-left">
                                            Fast General Models
                                        </h3>
                                        <p className="text-lg text-landing-secondary text-center lg:text-left">
                                            Open-weight frontier models, codegen-optimized inference
                                        </p>
                                    </div>
                                </div>
                                <div className="w-full h-full">
                                    <svg
                                        viewBox="0 0 800 420"
                                        className="w-full h-auto"
                                        preserveAspectRatio="xMidYMid meet"
                                    >
                                        <rect width={800} height={420} fill="none" />
                                        <line
                                            x1={20}
                                            y1={330}
                                            x2={780}
                                            y2={330}
                                            stroke="white"
                                            strokeOpacity="0.2"
                                        />
                                        <g>
                                            <path
                                                d="M 50.4 330 L 50.4 56 Q 50.4 50 56.4 50 L 135.6 50 Q 141.6 50 141.6 56 L 141.6 330 Z"
                                                fill="url(#generalGradient)"
                                            />
                                            <text
                                                x={96}
                                                y={38}
                                                textAnchor="middle"
                                                fill="#80EE64"
                                                fontSize={18}
                                                fontWeight={600}
                                                className="font-mono"
                                            >
                                                200
                                            </text>
                                            <text
                                                x={96}
                                                y={354}
                                                textAnchor="middle"
                                                fill="white"
                                                fillOpacity="0.7"
                                                fontSize={15}
                                                className="font-instrument-sans"
                                            >
                                                Qwen 3.5
                                            </text>
                                            <text
                                                x={96}
                                                y={372}
                                                textAnchor="middle"
                                                fill="white"
                                                fillOpacity="0.7"
                                                fontSize={15}
                                                className="font-instrument-sans"
                                            >
                                                397B
                                            </text>
                                        </g>
                                        <g>
                                            <path
                                                d="M 202.4 330 L 202.4 126 Q 202.4 120 208.4 120 L 287.6 120 Q 293.6 120 293.6 126 L 293.6 330 Z"
                                                fill="url(#generalGradient)"
                                            />
                                            <text
                                                x={248}
                                                y={108}
                                                textAnchor="middle"
                                                fill="#80EE64"
                                                fontSize={18}
                                                fontWeight={600}
                                                className="font-mono"
                                            >
                                                150
                                            </text>
                                            <text
                                                x={248}
                                                y={354}
                                                textAnchor="middle"
                                                fill="white"
                                                fillOpacity="0.7"
                                                fontSize={15}
                                                className="font-instrument-sans"
                                            >
                                                DSV4 Flash
                                            </text>
                                        </g>
                                        <g>
                                            <path
                                                d="M 354.4 330 L 354.4 196 Q 354.4 190 360.4 190 L 439.59999999999997 190 Q 445.59999999999997 190 445.59999999999997 196 L 445.59999999999997 330 Z"
                                                fill="url(#generalGradient)"
                                            />
                                            <text
                                                x={400}
                                                y={178}
                                                textAnchor="middle"
                                                fill="#80EE64"
                                                fontSize={18}
                                                fontWeight={600}
                                                className="font-mono"
                                            >
                                                100
                                            </text>
                                            <text
                                                x={400}
                                                y={354}
                                                textAnchor="middle"
                                                fill="white"
                                                fillOpacity="0.7"
                                                fontSize={15}
                                                className="font-instrument-sans"
                                            >
                                                Qwen 3.6 27B
                                            </text>
                                        </g>
                                        <g>
                                            <path
                                                d="M 506.4 330 L 506.4 210 Q 506.4 204 512.4 204 L 591.6 204 Q 597.6 204 597.6 210 L 597.6 330 Z"
                                                fill="url(#generalGradient)"
                                            />
                                            <text
                                                x={552}
                                                y={192}
                                                textAnchor="middle"
                                                fill="#80EE64"
                                                fontSize={18}
                                                fontWeight={600}
                                                className="font-mono"
                                            >
                                                90
                                            </text>
                                            <text
                                                x={552}
                                                y={354}
                                                textAnchor="middle"
                                                fill="white"
                                                fillOpacity="0.7"
                                                fontSize={15}
                                                className="font-instrument-sans"
                                            >
                                                MiniMax M2.7
                                            </text>
                                        </g>
                                        <a href="/contact" style={{ cursor: "pointer" }}>
                                            <g>
                                                <path
                                                    d="M 658.4 330 L 658.4 126 Q 658.4 120 664.4 120 L 743.6 120 Q 749.6 120 749.6 126 L 749.6 330 Z"
                                                    fill="url(#generalGradient)"
                                                    fillOpacity="0.15"
                                                    stroke="#80EE64"
                                                    strokeWidth="1.5"
                                                    strokeDasharray="6 4"
                                                />
                                                <line
                                                    x1="658.4"
                                                    y1={330}
                                                    x2="749.6"
                                                    y2={330}
                                                    stroke="#80EE64"
                                                    strokeWidth="1.5"
                                                />
                                                <text
                                                    x={704}
                                                    y={108}
                                                    textAnchor="middle"
                                                    fill="#80EE64"
                                                    fontSize={18}
                                                    fontWeight={600}
                                                    className="font-mono"
                                                >
                                                    150
                                                </text>
                                                <text
                                                    x={704}
                                                    y={354}
                                                    textAnchor="middle"
                                                    fill="white"
                                                    fillOpacity="0.7"
                                                    fontSize={15}
                                                    className="font-instrument-sans"
                                                >
                                                    DSV4 Pro
                                                </text>
                                                <text
                                                    x={704}
                                                    y={374}
                                                    textAnchor="middle"
                                                    fill="#80EE64"
                                                    fontSize={13}
                                                    fontWeight={500}
                                                    className="font-instrument-sans"
                                                    style={{ cursor: "pointer" }}
                                                >
                                                    Contact us →
                                                </text>
                                            </g>
                                        </a>
                                        <defs>
                                            <linearGradient
                                                id="generalGradient"
                                                x1="0%"
                                                y1="0%"
                                                x2="0%"
                                                y2="100%"
                                            >
                                                <stop offset="0%" stopColor="#80EE64" stopOpacity="0.8" />
                                                <stop offset="100%" stopColor="#80EE64" stopOpacity="0.25" />
                                            </linearGradient>
                                        </defs>
                                    </svg>
                                    <p className="text-sm text-landing-secondary text-center mt-2">
                                        Output Speed (tok/s)
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="rounded-lg border border-white/10 bg-white/[0.08] p-8 h-full">
                            <div className="">
                                <div className="flex flex-col items-center lg:flex-row lg:items-start gap-4">
                                    <div className="w-6 h-6 flex items-center justify-center flex-shrink-0">
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
                                            className="lucide lucide-layers w-full h-full"
                                            aria-hidden="true"
                                        >
                                            <path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z" />
                                            <path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12" />
                                            <path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17" />
                                        </svg>
                                    </div>
                                    <div className="flex flex-col gap-3 w-full">
                                        <h3 className="font-geist-circle text-xl font-medium text-white text-center lg:text-left">
                                            Specialized Models
                                        </h3>
                                        <p className="text-lg text-landing-secondary text-center lg:text-left">
                                            Purpose-built models for coding agent tasks
                                        </p>
                                    </div>
                                </div>
                                <div className="w-full h-full">
                                    <div className="w-full">
                                        <div className="divide-y divide-white/10">
                                            <a
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center gap-5 py-5 px-2 group transition-colors hover:bg-white/[0.04] first:pt-2"
                                                href="https://docs.morphllm.com/sdk/components/fast-apply"
                                            >
                                                <div className="flex-shrink-0 text-[#80EE64]/50 group-hover:text-[#80EE64] transition-colors">
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
                                                        className="lucide lucide-zap w-5 h-5"
                                                        aria-hidden="true"
                                                    >
                                                        <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z" />
                                                    </svg>
                                                </div>
                                                <div className="flex-1 min-w-0">
                                                    <div className="font-geist-circle text-[15px] text-white">
                                                        Fast Apply
                                                    </div>
                                                    <div className="text-sm text-white/50">
                                                        Code edit merging
                                                    </div>
                                                </div>
                                                <div className="text-right flex-shrink-0">
                                                    <div className="font-mono text-lg text-[#80EE64] leading-tight">
                                                        10,500+
                                                    </div>
                                                    <div className="text-xs text-white/40">tok/s</div>
                                                </div>
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
                                                    className="lucide lucide-arrow-up-right w-4 h-4 text-white/20 group-hover:text-[#80EE64] transition-colors flex-shrink-0"
                                                    aria-hidden="true"
                                                >
                                                    <path d="M7 7h10v10" />
                                                    <path d="M7 17 17 7" />
                                                </svg>
                                            </a>
                                            <a
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center gap-5 py-5 px-2 group transition-colors hover:bg-white/[0.04] first:pt-2"
                                                href="https://docs.morphllm.com/sdk/components/warp-grep/tool"
                                            >
                                                <div className="flex-shrink-0 text-[#80EE64]/50 group-hover:text-[#80EE64] transition-colors">
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
                                                        className="lucide lucide-search w-5 h-5"
                                                        aria-hidden="true"
                                                    >
                                                        <path d="m21 21-4.34-4.34" />
                                                        <circle cx={11} cy={11} r={8} />
                                                    </svg>
                                                </div>
                                                <div className="flex-1 min-w-0">
                                                    <div className="font-geist-circle text-[15px] text-white">
                                                        WarpGrep
                                                    </div>
                                                    <div className="text-sm text-white/50">
                                                        Parallel code search
                                                    </div>
                                                </div>
                                                <div className="text-right flex-shrink-0">
                                                    <div className="font-mono text-lg text-[#80EE64] leading-tight">
                                                        #1
                                                    </div>
                                                    <div className="text-xs text-white/40">SWE-Bench Pro</div>
                                                </div>
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
                                                    className="lucide lucide-arrow-up-right w-4 h-4 text-white/20 group-hover:text-[#80EE64] transition-colors flex-shrink-0"
                                                    aria-hidden="true"
                                                >
                                                    <path d="M7 7h10v10" />
                                                    <path d="M7 17 17 7" />
                                                </svg>
                                            </a>
                                            <a
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center gap-5 py-5 px-2 group transition-colors hover:bg-white/[0.04] first:pt-2"
                                                href="https://docs.morphllm.com/sdk/components/compact"
                                            >
                                                <div className="flex-shrink-0 text-[#80EE64]/50 group-hover:text-[#80EE64] transition-colors">
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
                                                        className="lucide lucide-minimize2 lucide-minimize-2 w-5 h-5"
                                                        aria-hidden="true"
                                                    >
                                                        <path d="m14 10 7-7" />
                                                        <path d="M20 10h-6V4" />
                                                        <path d="m3 21 7-7" />
                                                        <path d="M4 14h6v6" />
                                                    </svg>
                                                </div>
                                                <div className="flex-1 min-w-0">
                                                    <div className="font-geist-circle text-[15px] text-white">
                                                        FlashCompact
                                                    </div>
                                                    <div className="text-sm text-white/50">
                                                        Context compaction
                                                    </div>
                                                </div>
                                                <div className="text-right flex-shrink-0">
                                                    <div className="font-mono text-lg text-[#80EE64] leading-tight">
                                                        33,000
                                                    </div>
                                                    <div className="text-xs text-white/40">tok/s</div>
                                                </div>
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
                                                    className="lucide lucide-arrow-up-right w-4 h-4 text-white/20 group-hover:text-[#80EE64] transition-colors flex-shrink-0"
                                                    aria-hidden="true"
                                                >
                                                    <path d="M7 7h10v10" />
                                                    <path d="M7 17 17 7" />
                                                </svg>
                                            </a>
                                            <a
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center gap-5 py-5 px-2 group transition-colors hover:bg-white/[0.04] first:pt-2"
                                                href="https://www.morphllm.com/products/reflex"
                                            >
                                                <div className="flex-shrink-0 text-[#80EE64]/50 group-hover:text-[#80EE64] transition-colors">
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
                                                        className="lucide lucide-activity w-5 h-5"
                                                        aria-hidden="true"
                                                    >
                                                        <path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2" />
                                                    </svg>
                                                </div>
                                                <div className="flex-1 min-w-0">
                                                    <div className="font-geist-circle text-[15px] text-white">
                                                        Reflexes
                                                    </div>
                                                    <div className="text-sm text-white/50">
                                                        Semantic trace classifiers
                                                    </div>
                                                </div>
                                                <div className="text-right flex-shrink-0">
                                                    <div className="font-mono text-lg text-[#80EE64] leading-tight">
                                                        &lt;90
                                                    </div>
                                                    <div className="text-xs text-white/40">ms / event</div>
                                                </div>
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
                                                    className="lucide lucide-arrow-up-right w-4 h-4 text-white/20 group-hover:text-[#80EE64] transition-colors flex-shrink-0"
                                                    aria-hidden="true"
                                                >
                                                    <path d="M7 7h10v10" />
                                                    <path d="M7 17 17 7" />
                                                </svg>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default GeneralMode