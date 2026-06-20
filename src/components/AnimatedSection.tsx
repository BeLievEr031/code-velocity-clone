// import React from 'react'

function AnimatedSection() {
    return (
        <div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <section
                    className="mb-16 mt-16 lg:mb-32 lg:mt-32 grid w-full grid-cols-1 sm:mt-26 lg:my-40 lg:grid-cols-[16.66%_1fr] lg:gap-12"
                >
                    <div className="relative col-span-1 row-start-2 hidden lg:block">
                        <div className="sticky top-32 flex flex-col gap-4">
                            <div className="flex items-start gap-4">
                                <div
                                    className="mt-[3px] h-2 w-2 flex-shrink-0 transition-colors duration-300 bg-brand-primary"
                                ></div>
                                <div
                                    className="text-xs uppercase leading-snug tracking-[1.2px] transition-colors duration-300 text-brand-primary"
                                >
                                    Accelerated Open Models
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div
                                    className="mt-[3px] h-2 w-2 flex-shrink-0 transition-colors duration-300 bg-brand-primary/30"
                                ></div>
                                <div
                                    className="text-xs uppercase leading-snug tracking-[1.2px] transition-colors duration-300 text-brand-primary/30"
                                >
                                    WarpGrep
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div
                                    className="mt-[3px] h-2 w-2 flex-shrink-0 transition-colors duration-300 bg-brand-primary/30"
                                ></div>
                                <div
                                    className="text-xs uppercase leading-snug tracking-[1.2px] transition-colors duration-300 text-brand-primary/30"
                                >
                                    Fast Apply
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div
                                    className="mt-[3px] h-2 w-2 flex-shrink-0 transition-colors duration-300 bg-brand-primary/30"
                                ></div>
                                <div
                                    className="text-xs uppercase leading-snug tracking-[1.2px] transition-colors duration-300 text-brand-primary/30"
                                >
                                    Flash Compact
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-1 row-start-1 lg:col-start-2">
                        <div className="mb-5 text-xs uppercase tracking-[1.2px]">The loop</div>
                        <h2
                            className="bg-black pb-8 text-5xl font-medium md:text-6xl lg:pb-0 font-geist-pixel text-brand-primary"
                        >
                            <span
                            >Built for AI agents to<br />ship better code
                                <span className="text-brand-primary">faster.</span></span>
                        </h2>
                    </div>
                    <div className="col-span-1 row-start-2 min-w-0 lg:col-start-2">
                        <div className="relative">
                            <section
                                className="w-full border-t border-[#1a3a1a] bg-black text-white lg:sticky lg:flex lg:gap-12"
                                style={{ top: "128px", height: "520px", zIndex: 10 }}
                            >
                                <div
                                    className="flex flex-col items-start gap-4 py-8 lg:gap-4 lg:pt-4 lg:w-[35%] lg:pr-8"
                                >
                                    <h3
                                        className="font-geist-pixel font-medium text-2xl text-white xl:min-w-[300px]"
                                    >
                                        Run the agent
                                    </h3>
                                    <p className="leading-[1.5] text-landing-secondary">
                                        Fast general models for the primary agent loop — chat, code
                                        generation, and reasoning. Qwen 3.5 397B, MiniMax M2.7, and more
                                        through one OpenAI-compatible API.
                                    </p>
                                    <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-1">
                                        <a
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-sm text-white/60 transition-colors hover:text-brand-primary"
                                            href="https://docs.morphllm.com/sdk/components/fast-models"
                                        >Docs <span aria-hidden="true">→</span></a>
                                        <a
                                            className="text-sm text-white/60 transition-colors hover:text-brand-primary"
                                            href="https://openrouter.ai/provider/morph"
                                        >OpenRouter
                                            <span aria-hidden="true">→</span></a>
                                    </div>
                                </div>
                                <div
                                    className="relative flex w-full flex-1 items-center justify-center overflow-hidden border border-[#1a3a1a] bg-cover bg-center lg:border-l-0 lg:border-t-0"
                                    style={{
                                        "--bg-gradient-img-url": "url(https://modal-cdn.com/marketing-website-assets/benefit_card_gradient_03.jpg)",
                                        backgroundImage: "linear-gradient(135deg, rgba(30, 60, 30, 0.4) 0%, rgba(50, 100, 50, 0.2) 50%, rgba(80, 150, 80, 0.3) 100%)"
                                    } as React.CSSProperties}
                                >
                                    <div
                                        className="flex h-full w-full items-center justify-center p-6 lg:p-10"
                                    >
                                        <div className="w-full max-w-[640px] mx-auto">
                                            <div
                                                className="rounded-md border p-2.5 bg-white/[0.02] border-white/[0.08]"
                                            >
                                                <div style={{ opacity: 1, transform: "none" }}>
                                                    <div className="flex items-center gap-1.5 mb-1">
                                                        <div className="w-1.5 h-1.5 rounded-full bg-white/20"></div>
                                                        <span
                                                            className="text-[12px] text-white/70 font-mono"
                                                            style={{
                                                                fontFamily: '"JetBrains Mono", monospace'
                                                            }}
                                                        >User</span>
                                                    </div>
                                                    <p
                                                        className="text-[11px] text-white/45 font-mono leading-tight"
                                                        style={{ fontFamily: '"JetBrains Mono", monospace' }}
                                                    >
                                                        Implement a Redis cache middleware for Express with TTL
                                                        support and cache invalidation.
                                                    </p>
                                                </div>
                                                <div className="mt-2">
                                                    <div
                                                        className="rounded border p-2 bg-white/[0.03] border-white/[0.06]"
                                                        style={{ borderColor: "rgba(255, 255, 255, 0.06)" }}
                                                    >
                                                        <div className="flex items-center gap-1.5 mb-1.5">
                                                            <div
                                                                className="w-1.5 h-1.5 rounded-full bg-blue-400/40"
                                                            ></div>
                                                            <span
                                                                className="text-[11px] text-white/60 font-mono"
                                                                style={{
                                                                    fontFamily: '"JetBrains Mono", monospace'
                                                                }}
                                                            >Response</span>
                                                            <span
                                                                className="text-[9px] text-white/20 font-mono px-1 py-0.5 rounded-sm bg-white/[0.03] border border-white/[0.06]"
                                                                style={{
                                                                    fontFamily: '"JetBrains Mono", monospace'
                                                                }}
                                                            >qwen-3.5-coder-397b</span>
                                                        </div>

                                                        <div
                                                            className="mt-2 flex items-center gap-3.5"
                                                            style={{ opacity: 1, transform: "none" }}
                                                        >
                                                            <div className="flex items-baseline gap-1">
                                                                <span
                                                                    className="text-[16px] text-emerald-400 tabular-nums"
                                                                    style={{
                                                                        fontFamily: '"JetBrains Mono", monospace'
                                                                    }}
                                                                >127</span>
                                                                <span
                                                                    className="text-[9px] text-white/30"
                                                                    style={{
                                                                        fontFamily: '"JetBrains Mono", monospace'
                                                                    }}
                                                                >tok/s</span>
                                                            </div>
                                                            <div className="w-px h-3 bg-white/[0.08]"></div>
                                                            <div className="flex items-baseline gap-1">
                                                                <span
                                                                    className="text-[11px] text-white/50 tabular-nums"
                                                                    style={{
                                                                        fontFamily: '"JetBrains Mono", monospace'
                                                                    }}
                                                                >22</span>
                                                                <span
                                                                    className="text-[9px] text-white/30"
                                                                    style={{
                                                                        fontFamily: '"JetBrains Mono", monospace'
                                                                    }}
                                                                >lines</span>
                                                            </div>
                                                            <div className="w-px h-3 bg-white/[0.08]"></div>
                                                            <div className="flex items-baseline gap-1">
                                                                <span
                                                                    className="text-[11px] text-white/50 tabular-nums"
                                                                    style={{
                                                                        fontFamily: '"JetBrains Mono", monospace'
                                                                    }}
                                                                >~480ms</span>
                                                                <span
                                                                    className="text-[9px] text-white/30"
                                                                    style={{
                                                                        fontFamily: '"JetBrains Mono", monospace'
                                                                    }}
                                                                >TTFT</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="flex items-center justify-center gap-1 mt-3">
                                                <div
                                                    className="h-0.5 rounded-full transition-all duration-300 bg-white/[0.08] w-1"
                                                ></div>
                                                <div
                                                    className="h-0.5 rounded-full transition-all duration-300 bg-white/[0.08] w-1"
                                                ></div>
                                                <div
                                                    className="h-0.5 rounded-full transition-all duration-300 bg-white/[0.08] w-1"
                                                ></div>
                                                <div
                                                    className="h-0.5 rounded-full transition-all duration-300 bg-white/40 w-3"
                                                ></div>
                                                <div
                                                    className="h-0.5 rounded-full transition-all duration-300 bg-white/[0.08] w-1"
                                                ></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                            <section
                                className="w-full border-t border-[#1a3a1a] bg-black text-white lg:sticky lg:flex lg:gap-12"
                                style={{ top: "188px", height: "640px", zIndex: 11 }}
                            >
                                <div
                                    className="flex flex-col items-start gap-4 py-8 lg:gap-4 lg:pt-4 lg:w-[35%] lg:pr-8"
                                >
                                    <h3
                                        className="font-geist-pixel font-medium text-2xl text-white xl:min-w-[300px]"
                                    >
                                        Find the code
                                    </h3>
                                    <p className="leading-[1.5] text-landing-secondary">
                                        #1 on SWE-Bench Pro. WarpGrep searches the repo in a separate
                                        context and returns the right files in under 6 seconds. 15.8%
                                        cheaper, 22% faster than in-context search.
                                    </p>
                                    <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-1">
                                        <a
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-sm text-white/60 transition-colors hover:text-brand-primary"
                                            href="https://docs.morphllm.com/sdk/components/warp-grep/tool"
                                        >Docs <span aria-hidden="true">→</span></a>
                                        <a
                                            className="text-sm text-white/60 transition-colors hover:text-brand-primary"
                                            href="/playground/na/warpgrep"
                                        >Try in Playground
                                            <span aria-hidden="true">→</span></a>
                                    </div>
                                </div>
                                <div
                                    className="relative flex w-full flex-1 items-center justify-center overflow-hidden border border-[#1a3a1a] bg-cover bg-center lg:border-l-0 lg:border-t-0"
                                    style={{
                                        "--bg-gradient-img-url": "url(https://modal-cdn.com/marketing-website-assets/benefit_card_gradient_03.jpg)",
                                        backgroundImage: "linear-gradient(135deg, rgba(30, 60, 30, 0.4) 0%, rgba(50, 100, 50, 0.2) 50%, rgba(80, 150, 80, 0.3) 100%)"
                                    } as React.CSSProperties}
                                >
                                    <div
                                        className="flex h-full w-full items-center justify-center p-6 lg:p-10"
                                    >
                                        <div className="w-full max-w-[640px] mx-auto">
                                            <div
                                                className="rounded-md border p-2.5 bg-white/[0.02] border-white/[0.08]"
                                            >
                                                <div className="flex items-start justify-between gap-3">
                                                    <div className="flex-1 min-w-0">
                                                        <div className="flex items-center gap-1.5">
                                                            <div className="w-1.5 h-1.5 rounded-full bg-white/20"></div>
                                                            <span className="text-[12px] text-white/70 font-mono"
                                                            >Main Agent</span>
                                                            <span className="text-[10px] text-white/20 font-mono"
                                                            >Claude</span>
                                                        </div>
                                                        <div className="mt-1.5" style={{ opacity: 1, transform: "none" }}>
                                                            <span
                                                                className="text-[9px] uppercase tracking-[0.15em] text-white/25 mb-0.5 block"
                                                            >Task</span>
                                                            <p
                                                                className="text-[11px] text-white/45 font-mono leading-tight"
                                                            >
                                                                Fix the auth bug in the login flow
                                                            </p>
                                                        </div>
                                                        <div
                                                            className="mt-1.5"
                                                            style={{ opacity: 1, height: "auto", transform: "none" }}
                                                        >
                                                            <div
                                                                className="rounded border p-2 bg-white/[0.03] border-emerald-500/40"
                                                                style={{ borderColor: "rgba(16, 185, 129, 0.392)" }}
                                                            >
                                                                <div className="flex items-start justify-between gap-2.5">
                                                                    <div className="flex-1 min-w-0">
                                                                        <div className="flex items-center gap-1.5">
                                                                            <div
                                                                                className="w-1.5 h-1.5 rounded-full bg-blue-400/40"
                                                                            ></div>
                                                                            <span
                                                                                className="text-[11px] text-white/60 font-mono"
                                                                            >WarpGrep</span>
                                                                            <span
                                                                                className="text-[9px] text-white/20 font-mono"
                                                                            >isolated context</span>
                                                                        </div>
                                                                        <div
                                                                            className="mt-1 mb-1.5"
                                                                            style={{ opacity: 1, transform: "none" }}
                                                                        >
                                                                            <div
                                                                                className="text-[10px] text-blue-300/50 font-mono px-1.5 py-0.5 rounded-sm bg-blue-500/[0.06] border border-blue-500/10 inline-block"
                                                                            >
                                                                                Find where JWT tokens are validated
                                                                            </div>
                                                                        </div>
                                                                        <div
                                                                            className="mt-1"
                                                                            style={{ opacity: 1, transform: "none" }}
                                                                        >
                                                                            <div
                                                                                className="rounded-sm border p-1.5 bg-white/[0.04] border-white/[0.05]"
                                                                            >
                                                                                <span
                                                                                    className="text-[9px] uppercase tracking-[0.15em] text-white/25 mb-0.5 block"
                                                                                >Turn 1 / 2</span>
                                                                                <div className="grid grid-cols-2 gap-1 mt-0.5">
                                                                                    <div
                                                                                        className="flex items-center gap-1 px-1.5 py-0.5 rounded-sm border text-[10px] font-mono bg-emerald-500/10 border-emerald-500/30 text-emerald-400/90 transition-colors duration-500"
                                                                                        style={{
                                                                                            opacity: 1,
                                                                                            transform: "none",
                                                                                            transformOrigin: "50% 50% 0px"
                                                                                        }}
                                                                                    >
                                                                                        <span className="truncate"
                                                                                        >grep: "jwt|JWT"</span>
                                                                                    </div>
                                                                                    <div
                                                                                        className="flex items-center gap-1 px-1.5 py-0.5 rounded-sm border text-[10px] font-mono bg-emerald-500/10 border-emerald-500/30 text-emerald-400/90 transition-colors duration-500"
                                                                                        style={{
                                                                                            opacity: 1,
                                                                                            transform: "none",
                                                                                            transformOrigin: "50% 50% 0px"
                                                                                        }}
                                                                                    >
                                                                                        <span className="truncate"
                                                                                        >grep: "verify.*token"</span>
                                                                                    </div>
                                                                                    <div
                                                                                        className="flex items-center gap-1 px-1.5 py-0.5 rounded-sm border text-[10px] font-mono bg-emerald-500/10 border-emerald-500/30 text-emerald-400/90 transition-colors duration-500"
                                                                                        style={{
                                                                                            opacity: 1,
                                                                                            transform: "none",
                                                                                            transformOrigin: "50% 50% 0px"
                                                                                        }}
                                                                                    >
                                                                                        <span className="truncate"
                                                                                        >grep: "authenticate"</span>
                                                                                    </div>
                                                                                    <div
                                                                                        className="flex items-center gap-1 px-1.5 py-0.5 rounded-sm border text-[10px] font-mono bg-emerald-500/10 border-emerald-500/30 text-emerald-400/90 transition-colors duration-500"
                                                                                        style={{
                                                                                            opacity: 1,
                                                                                            transform: "none",
                                                                                            transformOrigin: "50% 50% 0px"
                                                                                        }}
                                                                                    >
                                                                                        <span className="truncate"
                                                                                        >grep: "authorization"</span>
                                                                                    </div>
                                                                                    <div
                                                                                        className="flex items-center gap-1 px-1.5 py-0.5 rounded-sm border text-[10px] font-mono bg-emerald-500/10 border-emerald-500/30 text-emerald-400/90 transition-colors duration-500"
                                                                                        style={{
                                                                                            opacity: 1,
                                                                                            transform: "none",
                                                                                            transformOrigin: "50% 50% 0px"
                                                                                        }}
                                                                                    >
                                                                                        <span className="truncate"
                                                                                        >read: auth/index.ts</span>
                                                                                    </div>
                                                                                    <div
                                                                                        className="flex items-center gap-1 px-1.5 py-0.5 rounded-sm border text-[10px] font-mono bg-emerald-500/10 border-emerald-500/30 text-emerald-400/90 transition-colors duration-500"
                                                                                        style={{
                                                                                            opacity: 1,
                                                                                            transform: "none",
                                                                                            transformOrigin: "50% 50% 0px"
                                                                                        }}
                                                                                    >
                                                                                        <span className="truncate"
                                                                                        >list: src/auth/</span>
                                                                                    </div>
                                                                                    <div
                                                                                        className="flex items-center gap-1 px-1.5 py-0.5 rounded-sm border text-[10px] font-mono bg-emerald-500/10 border-emerald-500/30 text-emerald-400/90 transition-colors duration-500"
                                                                                        style={{
                                                                                            opacity: 1,
                                                                                            transform: "none",
                                                                                            transformOrigin: "50% 50% 0px"
                                                                                        }}
                                                                                    >
                                                                                        <span className="truncate"
                                                                                        >grep: "token.*valid"</span>
                                                                                    </div>
                                                                                    <div
                                                                                        className="flex items-center gap-1 px-1.5 py-0.5 rounded-sm border text-[10px] font-mono bg-emerald-500/10 border-emerald-500/30 text-emerald-400/90 transition-colors duration-500"
                                                                                        style={{
                                                                                            opacity: 1,
                                                                                            transform: "none",
                                                                                            transformOrigin: "50% 50% 0px"
                                                                                        }}
                                                                                    >
                                                                                        <span className="truncate"
                                                                                        >list: src/middleware/</span>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div
                                                                            className="mt-1"
                                                                            style={{ opacity: 1, transform: "none" }}
                                                                        >
                                                                            <div
                                                                                className="rounded-sm border p-1.5 bg-white/[0.04] border-white/[0.05]"
                                                                            >
                                                                                <span
                                                                                    className="text-[9px] uppercase tracking-[0.15em] text-white/25 mb-0.5 block"
                                                                                >Turn 2 / 2</span>
                                                                                <div className="grid grid-cols-3 gap-1 mt-0.5">
                                                                                    <div
                                                                                        className="flex items-center gap-1 px-1.5 py-0.5 rounded-sm border text-[10px] font-mono bg-emerald-500/10 border-emerald-500/30 text-emerald-400/90 transition-colors duration-500"
                                                                                        style={{
                                                                                            opacity: 1,
                                                                                            transform: "none",
                                                                                            transformOrigin: "50% 50% 0px"
                                                                                        }}
                                                                                    >
                                                                                        <span className="truncate"
                                                                                        >read: auth/jwt.ts:40-70</span>
                                                                                    </div>
                                                                                    <div
                                                                                        className="flex items-center gap-1 px-1.5 py-0.5 rounded-sm border text-[10px] font-mono bg-emerald-500/10 border-emerald-500/30 text-emerald-400/90 transition-colors duration-500"
                                                                                        style={{
                                                                                            opacity: 1,
                                                                                            transform: "none",
                                                                                            transformOrigin: "50% 50% 0px"
                                                                                        }}
                                                                                    >
                                                                                        <span className="truncate"
                                                                                        >read: middleware/auth.ts</span>
                                                                                    </div>
                                                                                    <div
                                                                                        className="flex items-center gap-1 px-1.5 py-0.5 rounded-sm border text-[10px] font-mono bg-emerald-500/10 border-emerald-500/30 text-emerald-400/90 transition-colors duration-500"
                                                                                        style={{
                                                                                            opacity: 1,
                                                                                            transform: "none",
                                                                                            transformOrigin: "50% 50% 0px"
                                                                                        }}
                                                                                    >
                                                                                        <span className="truncate"
                                                                                        >grep: "SECRET" in auth/</span>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="flex-shrink-0">
                                                                        <div className="flex flex-col items-center gap-1">
                                                                            <span
                                                                                className="text-[9px] tracking-widest uppercase text-white/25"
                                                                                style={{
                                                                                    fontFamily: '"JetBrains Mono", monospace'
                                                                                }}
                                                                            >ctx</span>
                                                                            <div
                                                                                className="w-1 h-16 rounded-full bg-white/[0.06] overflow-hidden relative"
                                                                            >
                                                                                <div
                                                                                    className="absolute bottom-0 left-0 right-0 rounded-full"
                                                                                    style={{
                                                                                        backgroundColor: "rgb(239, 68, 68)",
                                                                                        height: "65%"
                                                                                    }}
                                                                                ></div>
                                                                            </div>
                                                                            <span
                                                                                className="text-[9px] tabular-nums text-white/35"
                                                                                style={{
                                                                                    fontFamily: '"JetBrains Mono", monospace'
                                                                                }}
                                                                            >65%</span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="mt-1.5" style={{ opacity: 1, transform: "none" }}>
                                                            <span
                                                                className="text-[9px] uppercase tracking-[0.15em] text-white/25 mb-0.5 block"
                                                            >Context returned to the main agent</span>
                                                            <div
                                                                className="mt-1 rounded-sm border border-emerald-500/15 bg-emerald-500/[0.03] p-2"
                                                                style={{ opacity: 1, transform: "none" }}
                                                            >
                                                                <div className="flex flex-wrap gap-1.5">
                                                                    <div
                                                                        className="text-[10px] text-emerald-300/90 px-1.5 py-0.5 rounded-sm bg-emerald-500/[0.08] border border-emerald-500/20 whitespace-nowrap"
                                                                        style={{
                                                                            fontFamily: '"JetBrains Mono", monospace',
                                                                            opacity: 1,
                                                                            transform: "none"
                                                                        }}
                                                                    >
                                                                        src/auth/jwt.ts:1-60
                                                                    </div>
                                                                    <div
                                                                        className="text-[10px] text-emerald-300/90 px-1.5 py-0.5 rounded-sm bg-emerald-500/[0.08] border border-emerald-500/20 whitespace-nowrap"
                                                                        style={{
                                                                            fontFamily: '"JetBrains Mono", monospace',
                                                                            opacity: 1,
                                                                            transform: "none"
                                                                        }}
                                                                    >
                                                                        src/middleware/auth.ts:1-40
                                                                    </div>
                                                                </div>
                                                                <div className="h-px bg-white/[0.05] my-1.5"></div>
                                                                <div
                                                                    className="flex items-center gap-3.5"
                                                                    style={{ opacity: 1 }}
                                                                >
                                                                    <div className="flex items-baseline gap-1">
                                                                        <span
                                                                            className="text-[16px] text-emerald-400 tabular-nums"
                                                                            style={{
                                                                                fontFamily: '"JetBrains Mono", monospace',
                                                                                opacity: 1,
                                                                                transform: "none"
                                                                            }}
                                                                        >12,847</span>
                                                                        <span
                                                                            className="text-[9px] text-white/30"
                                                                            style={{
                                                                                fontFamily: '"JetBrains Mono", monospace'
                                                                            }}
                                                                        >tokens saved</span>
                                                                    </div>
                                                                    <div className="w-px h-3 bg-white/[0.08]"></div>
                                                                    <div className="flex items-baseline gap-1">
                                                                        <span
                                                                            className="text-[11px] text-white/50 tabular-nums"
                                                                            style={{
                                                                                fontFamily: '"JetBrains Mono", monospace'
                                                                            }}
                                                                        >100</span>
                                                                        <span
                                                                            className="text-[9px] text-white/30"
                                                                            style={{
                                                                                fontFamily: '"JetBrains Mono", monospace'
                                                                            }}
                                                                        >lines</span>
                                                                    </div>
                                                                    <div className="w-px h-3 bg-white/[0.08]"></div>
                                                                    <div className="flex items-baseline gap-1">
                                                                        <span
                                                                            className="text-[11px] text-white/50 tabular-nums"
                                                                            style={{
                                                                                fontFamily: '"JetBrains Mono", monospace'
                                                                            }}
                                                                        >2</span>
                                                                        <span
                                                                            className="text-[9px] text-white/30"
                                                                            style={{
                                                                                fontFamily: '"JetBrains Mono", monospace'
                                                                            }}
                                                                        >files</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <p
                                                                className="text-[10px] text-white/15 mt-1"
                                                                style={{
                                                                    fontFamily: '"JetBrains Mono", monospace',
                                                                    opacity: 1
                                                                }}
                                                            >
                                                                Context stays clean. Agent continues.
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <div className="pt-3 flex-shrink-0">
                                                        <div className="flex flex-col items-center gap-1">
                                                            <span
                                                                className="text-[9px] tracking-widest uppercase text-white/25"
                                                                style={{
                                                                    fontFamily: '"JetBrains Mono", monospace'
                                                                }}
                                                            >ctx</span>
                                                            <div
                                                                className="w-1 h-16 rounded-full bg-white/[0.06] overflow-hidden relative"
                                                            >
                                                                <div
                                                                    className="absolute bottom-0 left-0 right-0 rounded-full"
                                                                    style={{
                                                                        backgroundColor: "rgb(59, 130, 246)",
                                                                        height: "15%"
                                                                    }}
                                                                ></div>
                                                            </div>
                                                            <span
                                                                className="text-[9px] tabular-nums text-white/35"
                                                                style={{
                                                                    fontFamily: '"JetBrains Mono", monospace'
                                                                }}
                                                            >15%</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="flex items-center justify-center gap-1 mt-3">
                                                <div
                                                    className="h-0.5 rounded-full transition-all duration-300 bg-white/[0.08] w-1"
                                                ></div>
                                                <div
                                                    className="h-0.5 rounded-full transition-all duration-300 bg-white/[0.08] w-1"
                                                ></div>
                                                <div
                                                    className="h-0.5 rounded-full transition-all duration-300 bg-white/[0.08] w-1"
                                                ></div>
                                                <div
                                                    className="h-0.5 rounded-full transition-all duration-300 bg-white/[0.08] w-1"
                                                ></div>
                                                <div
                                                    className="h-0.5 rounded-full transition-all duration-300 bg-white/40 w-3"
                                                ></div>
                                                <div
                                                    className="h-0.5 rounded-full transition-all duration-300 bg-white/[0.08] w-1"
                                                ></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                            <section
                                className="w-full border-t border-[#1a3a1a] bg-black text-white lg:sticky lg:flex lg:gap-12"
                                style={{ top: "248px", height: "520px", zIndex: 12 }}
                            >
                                <div
                                    className="flex flex-col items-start gap-4 py-8 lg:gap-4 lg:pt-4 lg:w-[35%] lg:pr-8"
                                >
                                    <h3
                                        className="font-geist-pixel font-medium text-2xl text-white xl:min-w-[300px]"
                                    >
                                        Apply the edit
                                    </h3>
                                    <p className="leading-[1.5] text-landing-secondary">
                                        Fast Apply merges model-generated edits into files at 10,500+
                                        tokens per second. No re-reads, no broken search-and-replace.
                                    </p>
                                    <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-1">
                                        <a
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-sm text-white/60 transition-colors hover:text-brand-primary"
                                            href="https://docs.morphllm.com/sdk/components/fast-apply"
                                        >Docs <span aria-hidden="true">→</span></a>
                                        <a
                                            className="text-sm text-white/60 transition-colors hover:text-brand-primary"
                                            href="/dashboard/playground/query-apply"
                                        >Try in Playground
                                            <span aria-hidden="true">→</span></a>
                                    </div>
                                </div>
                                <div
                                    className="relative flex w-full flex-1 items-center justify-center overflow-hidden border border-[#1a3a1a] bg-cover bg-center lg:border-l-0 lg:border-t-0"
                                    style={{
                                        "--bg-gradient-img-url": "url(https://modal-cdn.com/marketing-website-assets/benefit_card_gradient_03.jpg)",
                                        backgroundImage: "linear-gradient(135deg, rgba(30, 60, 30, 0.4) 0%, rgba(50, 100, 50, 0.2) 50%, rgba(80, 150, 80, 0.3) 100%)"
                                    } as React.CSSProperties}
                                >
                                    <div
                                        className="flex h-full w-full items-center justify-center p-6 lg:p-10"
                                    >
                                        <div className="flex items-center justify-center w-full">
                                            <svg
                                                width="740"
                                                height="700"
                                                viewBox="0 0 740 700"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="w-full h-auto max-w-[740px] mb-8 md:mb-12"
                                                style={{ aspectRatio: "740 / 700" }}
                                            >
                                                <rect width="740" height="700" fill="none"></rect>
                                                <g
                                                    id="viz-updated-code-layer"
                                                    opacity="1"
                                                    style={{
                                                        transform: "none",
                                                        transformOrigin: "50% 50%",
                                                        transformBox: "fill-box"
                                                    }}
                                                >
                                                    <g clipPath="url(#clip0_221_266)">
                                                        <foreignObject
                                                            width="520"
                                                            height="300"
                                                            transform="matrix(0.948683 0.316228 -0.8 0.6 240 320)"
                                                        ><div
                                                            style={{
                                                                backdropFilter: "blur(20px)",
                                                                height: "100%",
                                                                width: "100%"
                                                            }}
                                                        ></div
                                                            ></foreignObject>
                                                        <rect
                                                            width="520"
                                                            height="300"
                                                            transform="matrix(0.948683 0.316228 -0.8 0.6 240 320)"
                                                            fill="#3F513E"
                                                            fillOpacity="0.08"
                                                        ></rect>
                                                        <line
                                                            x1="0"
                                                            y1="-1"
                                                            x2="520"
                                                            y2="-1"
                                                            transform="matrix(0.948683 0.316228 -0.8 0.6 50.039 466.43)"
                                                            stroke="white"
                                                            strokeOpacity="0.1"
                                                            strokeWidth="2"
                                                        ></line>
                                                        <line
                                                            x1="0"
                                                            y1="-1"
                                                            x2="58"
                                                            y2="-1"
                                                            transform="matrix(-0.8 0.6 -0.948683 -0.316228 400.957 580.817)"
                                                            stroke="white"
                                                            strokeOpacity="0.1"
                                                            strokeWidth="2"
                                                        ></line>
                                                        <rect
                                                            width="191px"
                                                            height="3"
                                                            rx="1.5"
                                                            transform="matrix(0.948683 0.316228 -0.8 0.6 318.527 394.7096)"
                                                            fill="#3F513E"
                                                        ></rect>
                                                        <rect
                                                            width="147px"
                                                            height="3"
                                                            rx="1.5"
                                                            transform="matrix(0.948683 0.316228 -0.8 0.6 306.527 403.7096)"
                                                            fill="#96FF1F"
                                                        ></rect>
                                                        <rect
                                                            width="110px"
                                                            height="3"
                                                            rx="1.5"
                                                            transform="matrix(0.948683 0.316228 -0.8 0.6 449.777 451.46)"
                                                            fill="#96FF1F"
                                                        ></rect>
                                                        <rect
                                                            width="215px"
                                                            height="3"
                                                            rx="1.5"
                                                            transform="matrix(0.948683 0.316228 -0.8 0.6 294.527 412.7096)"
                                                            fill="#3F513E"
                                                        ></rect>
                                                        <rect
                                                            width="172px"
                                                            height="3"
                                                            rx="1.5"
                                                            transform="matrix(0.948683 0.316228 -0.8 0.6 282.527 421.71)"
                                                            fill="#3F513E"
                                                        ></rect>
                                                        <g opacity="1">
                                                            <rect
                                                                width="161"
                                                                height="3"
                                                                rx="1.5"
                                                                transform="matrix(0.948683 0.316228 -0.8 0.6 270.527 430.71)"
                                                                fill="#96FF1F"
                                                            ></rect>
                                                            <rect
                                                                width="91"
                                                                height="3"
                                                                rx="1.5"
                                                                transform="matrix(0.948683 0.316228 -0.8 0.6 428.957 483.52)"
                                                                fill="#96FF1F"
                                                            ></rect>
                                                        </g>
                                                        <rect
                                                            width="187px"
                                                            height="3"
                                                            rx="1.5"
                                                            transform="matrix(0.948683 0.316228 -0.8 0.6 258.527 439.71)"
                                                            fill="#3F513E"
                                                        ></rect>
                                                        <rect
                                                            width="191px"
                                                            height="3"
                                                            rx="1.5"
                                                            transform="matrix(0.948683 0.316228 -0.8 0.6 246.527 448.71)"
                                                            fill="#96FF1F"
                                                        ></rect>
                                                        <g opacity="1">
                                                            <rect
                                                                width="147px"
                                                                height="3"
                                                                rx="1.5"
                                                                transform="matrix(0.948683 0.316228 -0.8 0.6 234.527 457.71)"
                                                                fill="#3F513E"
                                                            ></rect>
                                                            <rect
                                                                width="110px"
                                                                height="3"
                                                                rx="1.5"
                                                                transform="matrix(0.948683 0.316228 -0.8 0.6 377.777 505.46)"
                                                                fill="#3F513E"
                                                            ></rect>
                                                        </g>
                                                        <rect
                                                            width="215px"
                                                            height="3"
                                                            rx="1.5"
                                                            transform="matrix(0.948683 0.316228 -0.8 0.6 222.527 466.71)"
                                                            fill="#3F513E"
                                                        ></rect>
                                                        <rect
                                                            width="172px"
                                                            height="3"
                                                            rx="1.5"
                                                            transform="matrix(0.948683 0.316228 -0.8 0.6 210.527 475.71)"
                                                            fill="#96FF1F"
                                                        ></rect>
                                                        <g opacity="1">
                                                            <rect
                                                                width="161px"
                                                                height="3"
                                                                rx="1.5"
                                                                transform="matrix(0.948683 0.316228 -0.8 0.6 198.527 484.71)"
                                                                fill="#96FF1F"
                                                            ></rect>
                                                            <rect
                                                                width="91px"
                                                                height="3"
                                                                rx="1.5"
                                                                transform="matrix(0.948683 0.316228 -0.8 0.6 356.957 537.52)"
                                                                fill="#96FF1F"
                                                            ></rect>
                                                        </g>
                                                        <rect
                                                            width="187px"
                                                            height="3"
                                                            rx="1.5"
                                                            transform="matrix(0.948683 0.316228 -0.8 0.6 186.527 493.71)"
                                                            fill="#3F513E"
                                                        ></rect>
                                                        <g
                                                            opacity="1"
                                                            style={{
                                                                transformOrigin: "50% 50%",
                                                                transformBox: "fill-box",
                                                                transform: "none"
                                                            }}
                                                        >
                                                            <g id="tests-check-group">
                                                                <path
                                                                    d="M44.807 491.319L45.1416 493.38L54.3222 491.891"
                                                                    stroke="#96FF1F"
                                                                    strokeWidth="2"
                                                                    strokeLinecap="round"
                                                                    strokeLinejoin="round"
                                                                ></path>
                                                                <path
                                                                    d="M41.7631 497.455C46.4786 499.026 53.5248 497.883 57.5013 494.901C61.4778 491.918 60.8786 488.226 56.1631 486.655C51.4477 485.083 44.4015 486.226 40.425 489.209C36.4485 492.191 37.0477 495.883 41.7631 497.455Z"
                                                                    stroke="#96FF1F"
                                                                    strokeWidth="2"
                                                                    strokeLinecap="round"
                                                                    strokeLinejoin="round"
                                                                ></path>
                                                                <foreignObject
                                                                    x="75"
                                                                    y="505"
                                                                    width="200"
                                                                    height="30"
                                                                    style={{ overflow: "visible" }}
                                                                ><div
                                                                    className="font-instrument-sans text-lg font-medium pointer-events-none text-center"
                                                                    style={{
                                                                        transform: "matrix(0.948683, 0.316228, -0.8, 0.6, -20, 8)",
                                                                        color: "rgb(150, 255, 31)",
                                                                        letterSpacing: "0.05em"
                                                                    }}
                                                                >
                                                                        50/50 TESTS PASS
                                                                    </div></foreignObject
                                                                >
                                                            </g>
                                                        </g>
                                                    </g>
                                                    <g opacity="1">
                                                        <rect
                                                            x="0.148683"
                                                            y="0.916228"
                                                            width="518"
                                                            height="298"
                                                            transform="matrix(0.948683 0.316228 -0.8 0.6 240.741 320.319473)"
                                                            stroke="#96FF1F"
                                                            strokeWidth="3"
                                                            fill="none"
                                                        ></rect>
                                                        <rect
                                                            x="0.199881"
                                                            y="0.901607"
                                                            width="519"
                                                            height="296"
                                                            transform="matrix(0.948683 0.316228 -0.8 0.6 240.741 320.319473)"
                                                            stroke="white"
                                                            strokeOpacity="0.1"
                                                            strokeWidth="2"
                                                            fill="none"
                                                        ></rect>
                                                        <foreignObject
                                                            x="560"
                                                            y="466"
                                                            width="200"
                                                            height="30"
                                                            style={{ overflow: "visible" }}
                                                        ><div
                                                            className="font-instrument-sans text-base font-medium pointer-events-none text-center"
                                                            style={{
                                                                transform: "matrix(0.948683, 0.316228, -0.8, 0.6, 0, 0)",
                                                                letterSpacing: "0.05em",
                                                                color: "rgb(150, 255, 31)"
                                                            }}
                                                        >
                                                                UPDATED
                                                            </div></foreignObject
                                                        >
                                                    </g>
                                                    <g
                                                        opacity="1"
                                                        style={{
                                                            transformOrigin: "50% 50%",
                                                            transformBox: "fill-box",
                                                            transform: "none"
                                                        }}
                                                    >
                                                        <foreignObject
                                                            x="366"
                                                            y="610"
                                                            width="160"
                                                            height="30"
                                                            style={{ overflow: "visible" }}
                                                        ><div
                                                            className="font-instrument-sans text-lg font-medium pointer-events-none text-center"
                                                            style={{
                                                                transform: "matrix(0.948683, 0.316228, -0.8, 0.6, 0, 0)",
                                                                color: "rgb(150, 255, 31)",
                                                                letterSpacing: "0.05em"
                                                            }}
                                                        >
                                                                10500 Tok/s
                                                            </div></foreignObject
                                                        >
                                                    </g>
                                                </g>
                                                <g
                                                    id="viz-arrow"
                                                    opacity="1"
                                                    style={{
                                                        transform: "translateX(63px) translateY(25px)",
                                                        transformOrigin: "50% 50%",
                                                        transformBox: "fill-box"
                                                    }}
                                                >
                                                    <foreignObject
                                                        x="234.328"
                                                        y="339.348"
                                                        width="191.535"
                                                        height="174.77"
                                                        id="arrow-backdrop-blur"
                                                    ><div
                                                        style={{
                                                            backdropFilter: "blur(12px)",
                                                            clipPath: 'url("#bgblur_0_221_299_clip_path")',
                                                            height: "100%",
                                                            width: "100%"
                                                        }}
                                                    ></div
                                                        ></foreignObject>
                                                    <path
                                                        className="arrow"
                                                        data-figma-bg-blur-radius="8"
                                                        d="M369.5 369.972L287.5 348L287.5 428.16L244 416.504L333 505.504L416.5 461.594L369.5 449L369.5 369.972Z"
                                                        fill="url(#paint0_linear_221_299)"
                                                        fillOpacity="0.4"
                                                        stroke="#96FF1F"
                                                        strokeOpacity="0.2"
                                                    ></path>
                                                </g>
                                                <g
                                                    id="viz-ai-edit-layer"
                                                    opacity="1"
                                                    style={{
                                                        transform: "none",
                                                        transformOrigin: "50% 50%",
                                                        transformBox: "fill-box"
                                                    }}
                                                >
                                                    <g transform="translate(0, 120)">
                                                        <foreignObject
                                                            x="0"
                                                            y="0"
                                                            width="520"
                                                            height="300"
                                                            transform="matrix(0.948683 0.316228 -0.8 0.6 240 0)"
                                                        ><div
                                                            style={{
                                                                backdropFilter: "blur(20px)",
                                                                height: "100%",
                                                                width: "100%"
                                                            }}
                                                        >
                                                            </div>
                                                        </foreignObject>
                                                        <rect
                                                            width="520"
                                                            height="300"
                                                            transform="matrix(0.948683 0.316228 -0.8 0.6 240 0)"
                                                            fill="#141814"
                                                            fillOpacity="0.6"
                                                        ></rect>
                                                        <rect
                                                            width="191px"
                                                            height="3"
                                                            rx="1.5"
                                                            transform="matrix(0.948683 0.316228 -0.8 0.6 271.328 110.11)"
                                                            fill="#96FF1F"
                                                        ></rect>
                                                        <rect
                                                            width="147px"
                                                            height="3"
                                                            rx="1.5"
                                                            transform="matrix(0.948683 0.316228 -0.8 0.6 259.328 119.11)"
                                                            fill="#96FF1F"
                                                        ></rect>
                                                        <rect
                                                            width="110px"
                                                            height="3"
                                                            rx="1.5"
                                                            transform="matrix(0.948683 0.316228 -0.8 0.6 402.578 166.86)"
                                                            fill="#96FF1F"
                                                        ></rect>
                                                        <rect
                                                            width="215px"
                                                            height="3"
                                                            rx="1.5"
                                                            transform="matrix(0.948683 0.316228 -0.8 0.6 247.328 128.11)"
                                                            fill="#96FF1F"
                                                        ></rect>
                                                        <rect
                                                            width="172px"
                                                            height="3"
                                                            rx="1.5"
                                                            transform="matrix(0.948683 0.316228 -0.8 0.6 235.328 137.11)"
                                                            fill="#96FF1F"
                                                        ></rect>
                                                        <rect
                                                            width="161px"
                                                            height="3"
                                                            rx="1.5"
                                                            transform="matrix(0.948683 0.316228 -0.8 0.6 223.328 146.11)"
                                                            fill="#96FF1F"
                                                        ></rect>
                                                        <rect
                                                            width="91px"
                                                            height="3"
                                                            rx="1.5"
                                                            transform="matrix(0.948683 0.316228 -0.8 0.6 381.758 198.92)"
                                                            fill="#96FF1F"
                                                        ></rect>
                                                        <rect
                                                            width="187px"
                                                            height="3"
                                                            rx="1.5"
                                                            transform="matrix(0.948683 0.316228 -0.8 0.6 211.328 155.11)"
                                                            fill="#96FF1F"
                                                        ></rect>
                                                        <path
                                                            d="M632.871 159.556L647.867 153.322L649.438 153.846L634.647 160.148L632.871 159.556ZM642.382 162.726L648.328 153.476L649.984 154.028L644.261 163.352L642.382 162.726ZM639.343 157.236L645.935 159.433L644.667 160.384L638.076 158.186L639.343 157.236ZM646.078 163.958L656.446 156.182L658.257 156.786L647.889 164.562L646.078 163.958ZM653.783 166.526L664.151 158.75L665.961 159.354L655.593 167.13L653.783 166.526ZM654.671 166.822L655.924 165.883L663.574 168.433L662.321 169.372L654.671 166.822ZM659.408 163.269L660.661 162.33L667.697 164.675L666.444 165.614L659.408 163.269ZM663.786 159.986L665.039 159.046L672.535 161.545L671.282 162.485L663.786 159.986ZM665.698 170.498L666.966 169.548L670.193 170.624C671.172 170.95 672.177 171.103 673.207 171.082C674.249 171.066 675.255 170.897 676.226 170.576C677.197 170.254 678.076 169.799 678.863 169.208C679.641 168.625 680.13 168.055 680.33 167.498C680.542 166.944 680.453 166.431 680.064 165.958C679.696 165.482 679.017 165.079 678.027 164.749L674.816 163.678L676.084 162.728L679.294 163.798C680.614 164.238 681.553 164.78 682.11 165.423C682.666 166.066 682.823 166.769 682.581 167.53C682.359 168.288 681.725 169.06 680.679 169.845C679.632 170.629 678.442 171.226 677.109 171.634C675.785 172.035 674.417 172.235 673.006 172.232C671.607 172.234 670.252 172.016 668.943 171.58L665.698 170.498ZM664.606 170.134L674.974 162.358L676.784 162.961L666.416 170.737L664.606 170.134ZM677.463 174.42L687.831 166.644L689.641 167.247L679.273 175.023L677.463 174.42ZM685.231 177.009L694.346 170.173L690.197 168.79L691.449 167.85L701.559 171.22L700.306 172.159L696.156 170.776L687.041 177.612L685.231 177.009Z"
                                                            fill="#96FF1F"
                                                        ></path>
                                                    </g>
                                                    <rect
                                                        x="0.148683"
                                                        y="0.916228"
                                                        width="518"
                                                        height="298"
                                                        transform="matrix(0.948683 0.316228 -0.8 0.6 240.741 120.319)"
                                                        stroke="white"
                                                        strokeOpacity="0.2"
                                                        strokeWidth="2"
                                                    ></rect>
                                                </g>
                                                <g
                                                    id="viz-original-layer"
                                                    opacity="1"
                                                    style={{
                                                        transform: "none",
                                                        transformOrigin: "50% 50%",
                                                        transformBox: "fill-box"
                                                    }}
                                                >
                                                    <g clipPath="url(#clip0_221_230)">
                                                        <foreignObject
                                                            x="0"
                                                            y="0"
                                                            width="520"
                                                            height="300"
                                                            transform="matrix(0.948683 0.316228 -0.8 0.6 240 0)"
                                                        ><div
                                                            style={{
                                                                backdropFilter: "blur(20px)",
                                                                height: "100%",
                                                                width: "100%"
                                                            }}
                                                        ></div
                                                            ></foreignObject>
                                                        <rect
                                                            width="520"
                                                            height="300"
                                                            transform="matrix(0.948683 0.316228 -0.8 0.6 240 0)"
                                                            fill="#141814"
                                                            fillOpacity="0.6"
                                                        ></rect>
                                                        <rect
                                                            width="191"
                                                            height="3"
                                                            rx="1.5"
                                                            transform="matrix(0.948683 0.316228 -0.8 0.6 318.527 74.7096)"
                                                            fill="#3F513E"
                                                        ></rect>
                                                        <path
                                                            d="M444.561 129.721C445.347 129.983 445.447 130.598 444.784 131.095C444.121 131.592 442.947 131.783 442.161 131.521L305.55 85.9839C304.764 85.722 304.665 85.1067 305.327 84.6096C305.99 84.1125 307.164 83.922 307.95 84.1839L444.561 129.721ZM552.71 165.77C553.496 166.032 553.595 166.648 552.933 167.145C552.27 167.642 551.096 167.832 550.31 167.57L448.801 133.734C448.015 133.472 447.915 132.857 448.578 132.36C449.24 131.863 450.415 131.672 451.201 131.934L552.71 165.77Z"
                                                            fill="#3F513E"
                                                        ></path>
                                                        <rect
                                                            width="215"
                                                            height="3"
                                                            rx="1.5"
                                                            transform="matrix(0.948683 0.316228 -0.8 0.6 294.527 92.7096)"
                                                            fill="#3F513E"
                                                        ></rect>
                                                        <rect
                                                            width="172"
                                                            height="3"
                                                            rx="1.5"
                                                            transform="matrix(0.948683 0.316228 -0.8 0.6 282.527 101.71)"
                                                            fill="#3F513E"
                                                        ></rect>
                                                        <rect
                                                            width="161"
                                                            height="3"
                                                            rx="1.5"
                                                            transform="matrix(0.948683 0.316228 -0.8 0.6 270.527 110.71)"
                                                            fill="#3F513E"
                                                        ></rect>
                                                        <rect
                                                            width="91"
                                                            height="3"
                                                            rx="1.5"
                                                            transform="matrix(0.948683 0.316228 -0.8 0.6 428.957 163.52)"
                                                            fill="#3F513E"
                                                        ></rect>
                                                        <path
                                                            d="M426.303 188.635C427.089 188.897 427.189 189.512 426.526 190.009C425.863 190.506 424.689 190.697 423.903 190.435L245.55 130.984C244.764 130.722 244.665 130.107 245.327 129.61C245.99 129.113 247.164 128.922 247.95 129.184L426.303 188.635ZM434.508 178.37C435.294 178.632 435.394 179.247 434.731 179.744C434.068 180.241 432.894 180.432 432.108 180.17L257.55 121.984C256.764 121.722 256.665 121.107 257.327 120.61C257.99 120.113 259.164 119.922 259.95 120.184L434.508 178.37Z"
                                                            fill="#3F513E"
                                                        ></path>
                                                        <rect
                                                            width="147"
                                                            height="3"
                                                            rx="1.5"
                                                            transform="matrix(0.948683 0.316228 -0.8 0.6 234.527 137.71)"
                                                            fill="#3F513E"
                                                        ></rect>
                                                        <rect
                                                            width="110"
                                                            height="3"
                                                            rx="1.5"
                                                            transform="matrix(0.948683 0.316228 -0.8 0.6 377.777 185.46)"
                                                            fill="#3F513E"
                                                        ></rect>
                                                        <path
                                                            d="M372.278 209.626C373.064 209.888 373.164 210.504 372.501 211.001C371.838 211.498 370.664 211.688 369.878 211.426L209.55 157.984C208.764 157.722 208.665 157.107 209.327 156.61C209.99 156.113 211.164 155.922 211.95 156.184L372.278 209.626ZM425.071 214.224C425.857 214.486 425.957 215.102 425.294 215.599C424.632 216.096 423.457 216.286 422.671 216.024L221.55 148.984C220.764 148.722 220.665 148.107 221.327 147.61C221.99 147.113 223.164 146.922 223.95 147.184L425.071 214.224Z"
                                                            fill="#3F513E"
                                                        ></path>
                                                        <rect
                                                            width="161"
                                                            height="3"
                                                            rx="1.5"
                                                            transform="matrix(0.948683 0.316228 -0.8 0.6 198.527 164.71)"
                                                            fill="#3F513E"
                                                        ></rect>
                                                        <rect
                                                            width="91"
                                                            height="3"
                                                            rx="1.5"
                                                            transform="matrix(0.948683 0.316228 -0.8 0.6 356.957 217.52)"
                                                            fill="#3F513E"
                                                        ></rect>
                                                        <rect
                                                            width="187"
                                                            height="3"
                                                            rx="1.5"
                                                            transform="matrix(0.948683 0.316228 -0.8 0.6 186.527 173.71)"
                                                            fill="#3F513E"
                                                        ></rect>
                                                        <path
                                                            d="M616.833 154.363C615.956 154.071 615.283 153.706 614.814 153.269C614.354 152.824 614.097 152.333 614.042 151.795C613.987 151.256 614.132 150.691 614.477 150.099C614.834 149.511 615.406 148.921 616.193 148.331C617.23 147.553 618.403 146.951 619.712 146.524C621.021 146.097 622.346 145.868 623.687 145.837C625.049 145.802 626.311 145.978 627.472 146.365C628.656 146.76 629.472 147.276 629.92 147.915C630.378 148.545 630.465 149.245 630.18 150.014C629.907 150.786 629.247 151.564 628.201 152.349C627.423 152.932 626.549 153.421 625.58 153.815C624.631 154.206 623.649 154.493 622.634 154.674C621.628 154.849 620.621 154.913 619.613 154.868C618.625 154.82 617.698 154.651 616.833 154.363ZM618.112 153.385C618.932 153.658 619.827 153.77 620.799 153.719C621.78 153.662 622.755 153.461 623.722 153.118C624.701 152.779 625.588 152.31 626.385 151.713C627.172 151.122 627.687 150.545 627.93 149.981C628.181 149.41 628.157 148.897 627.858 148.444C627.568 147.983 627.007 147.614 626.176 147.337C625.345 147.06 624.448 146.943 623.486 146.987C622.545 147.027 621.6 147.211 620.652 147.54C619.716 147.872 618.849 148.337 618.052 148.935C617.246 149.54 616.712 150.131 616.45 150.71C616.189 151.288 616.193 151.809 616.462 152.274C616.742 152.741 617.292 153.112 618.112 153.385ZM624.969 156.919L635.337 149.143L640.187 150.76C641.075 151.056 641.707 151.402 642.084 151.797C642.47 152.186 642.613 152.603 642.513 153.048C642.422 153.486 642.08 153.928 641.484 154.374C640.889 154.821 640.2 155.153 639.417 155.37C638.634 155.587 637.804 155.685 636.929 155.664C636.053 155.642 635.171 155.484 634.283 155.188L630.8 154.026L632.038 153.098L635.47 154.242C636.29 154.515 637.059 154.61 637.778 154.527C638.518 154.441 639.156 154.196 639.694 153.793C640.232 153.39 640.439 153.007 640.315 152.643C640.191 152.279 639.714 151.959 638.883 151.682L635.895 150.686L626.78 157.522L624.969 156.919ZM632.073 159.287L631.307 153.369L633.509 154.103L634.669 160.152L632.073 159.287ZM636.26 160.682L646.628 152.906L648.438 153.51L638.07 161.286L636.26 160.682ZM646.172 164.143C644.885 163.714 643.992 163.182 643.49 162.547C642.998 161.904 642.89 161.202 643.165 160.441C643.451 159.684 644.127 158.906 645.192 158.106C646.248 157.314 647.43 156.7 648.737 156.262C650.066 155.82 651.405 155.581 652.756 155.542C654.116 155.496 655.382 155.669 656.555 156.059C657.488 156.371 658.182 156.763 658.636 157.237C659.11 157.707 659.328 158.216 659.287 158.764C659.258 159.316 658.949 159.863 658.358 160.405L656.548 159.801C657.097 159.267 657.256 158.753 657.025 158.26C656.804 157.76 656.232 157.356 655.31 157.049C654.467 156.768 653.565 156.649 652.603 156.692C651.641 156.736 650.681 156.925 649.723 157.261C648.777 157.601 647.891 158.08 647.065 158.7C646.23 159.326 645.687 159.925 645.435 160.496C645.192 161.06 645.244 161.576 645.589 162.045C645.955 162.51 646.617 162.902 647.573 163.221C648.256 163.449 648.941 163.589 649.628 163.641C650.315 163.693 651.01 163.665 651.714 163.556L652.911 164.564C651.717 164.769 650.56 164.841 649.441 164.78C648.332 164.712 647.242 164.499 646.172 164.143ZM651.101 163.96L654.284 161.574L654.367 162.085L650.695 160.861L651.962 159.911L656.914 161.561L652.911 164.564L651.101 163.96ZM653.636 166.475L664.004 158.699L665.814 159.302L655.446 167.078L653.636 166.475ZM657.972 167.92L668.34 160.144L670.44 160.844L668.093 169.671L667.611 169.589L676.553 162.882L678.295 163.462L667.927 171.238L665.827 170.538L668.174 161.711L668.656 161.794L659.714 168.5L657.972 167.92ZM669.745 171.844L684.741 165.611L686.312 166.134L671.521 172.436L669.745 171.844ZM679.256 175.015L685.202 165.764L686.858 166.317L681.135 175.641L679.256 175.015ZM676.217 169.524L682.809 171.722L681.541 172.672L674.95 170.475L676.217 169.524ZM682.953 176.247L693.321 168.471L695.131 169.074L684.763 176.85L682.953 176.247ZM683.841 176.543L685.093 175.603L692.197 177.971L690.944 178.911L683.841 176.543Z"
                                                            fill="white"
                                                            fillOpacity="0.5"
                                                        ></path>
                                                    </g>
                                                    <rect
                                                        x="0.148683"
                                                        y="0.916228"
                                                        width="518"
                                                        height="298"
                                                        transform="matrix(0.948683 0.316228 -0.8 0.6 240.741 0.319473)"
                                                        stroke="white"
                                                        strokeOpacity="0.2"
                                                        strokeWidth="2"
                                                    ></rect>
                                                </g>
                                                <defs>
                                                    <clipPath
                                                        id="bgblur_1_104_4137_clip_path"
                                                        transform="translate(-234.328 -339.348)"
                                                    >
                                                        <path
                                                            d="M369.5 369.972L287.5 348L287.5 428.16L244 416.504L333 505.504L416.5 461.594L369.5 449L369.5 369.972Z"
                                                        ></path>
                                                    </clipPath>
                                                    <linearGradient
                                                        id="paint0_linear_104_4137"
                                                        x1="330.25"
                                                        y1="348"
                                                        x2="330.25"
                                                        y2="505.504"
                                                        gradientUnits="userSpaceOnUse"
                                                    >
                                                        <stop stopColor="#141814"></stop>
                                                        <stop offset="1" stopColor="#80EE64"></stop>
                                                    </linearGradient>
                                                    <clipPath
                                                        id="bgblur_0_113_4260_clip_path"
                                                        transform="translate(19.6719 20)"
                                                    >
                                                        <path
                                                            d="M228.324 0L730.994 134.69L503 326L0.329916 191.31L228.324 0Z"
                                                        ></path>
                                                    </clipPath>
                                                    <clipPath id="clip0_221_230">
                                                        <rect
                                                            width="520"
                                                            height="300"
                                                            transform="matrix(0.948683 0.316228 -0.8 0.6 240 0)"
                                                            fill="white"
                                                        ></rect>
                                                    </clipPath>
                                                    <clipPath
                                                        id="bgblur_0_221_299_clip_path"
                                                        transform="translate(-234.328 -339.348)"
                                                    >
                                                        <path
                                                            d="M369.5 369.972L287.5 348L287.5 428.16L244 416.504L333 505.504L416.5 461.594L369.5 449L369.5 369.972Z"
                                                        ></path>
                                                    </clipPath>
                                                    <linearGradient
                                                        id="paint0_linear_221_299"
                                                        x1="330.25"
                                                        y1="348"
                                                        x2="330.25"
                                                        y2="505.504"
                                                        gradientUnits="userSpaceOnUse"
                                                    >
                                                        <stop stopColor="#141814"></stop>
                                                        <stop offset="1" stopColor="#80EE64"></stop>
                                                    </linearGradient>
                                                    <clipPath id="clip0_221_266">
                                                        <rect
                                                            width="520"
                                                            height="400"
                                                            transform="matrix(0.948683 0.316228 -0.8 0.6 240 320)"
                                                            fill="white"
                                                        ></rect>
                                                    </clipPath>
                                                    <clipPath id="clip1_221_266">
                                                        <rect
                                                            width="24"
                                                            height="24"
                                                            fill="white"
                                                            transform="matrix(0.948683 0.316228 -0.8 0.6 47.1797 161.06)"
                                                        ></rect>
                                                    </clipPath>
                                                </defs>
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            <div className="hidden h-[60vh] lg:block"></div>
                        </div>
                    </div>
                </section>
            </div>

        </div>
    )
}

export default AnimatedSection