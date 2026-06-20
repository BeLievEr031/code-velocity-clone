
function Stat() {
    return (
        <div>
            <div
                className="transform-gpu will-change-transform "
                style={{
                    opacity: 1,
                    visibility: "inherit",
                    transform: "translate(0px, 0px)",
                    transition:
                        "opacity 0.6s ease-out, visibility 0.6s ease-out, transform 0.6s ease-out"
                }}
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 lg:mb-16">
                    <dl className="grid grid-cols-2 lg:grid-cols-4 overflow-hidden rounded-lg border border-white/10">
                        <div className="px-4 py-6 text-center border-r border-white/10 border-b border-white/10 lg:border-b-0 lg:border-r lg:border-white/10">
                            <dt className="font-geist-circle text-2xl lg:text-3xl text-brand-primary">
                                100B+
                            </dt>
                            <dd className="mt-1 text-sm text-landing-secondary">tokens / day</dd>
                        </div>
                        <div className="px-4 py-6 text-center  border-b border-white/10 lg:border-b-0 lg:border-r lg:border-white/10">
                            <dt className="font-geist-circle text-2xl lg:text-3xl text-brand-primary">
                                Top 25
                            </dt>
                            <dd className="mt-1 text-sm text-landing-secondary">
                                provider on OpenRouter
                            </dd>
                        </div>
                        <div className="px-4 py-6 text-center border-r border-white/10  lg:border-b-0 lg:border-r lg:border-white/10">
                            <dt className="font-geist-circle text-2xl lg:text-3xl text-brand-primary">
                                400+
                            </dt>
                            <dd className="mt-1 text-sm text-landing-secondary">
                                production agents
                            </dd>
                        </div>
                        <div className="px-4 py-6 text-center   lg:border-b-0 ">
                            <dt className="font-geist-circle text-2xl lg:text-3xl text-brand-primary">
                                #1
                            </dt>
                            <dd className="mt-1 text-sm text-landing-secondary">
                                on SWE-Bench Pro
                            </dd>
                        </div>
                    </dl>
                </div>
            </div>

        </div>
    )
}

export default Stat