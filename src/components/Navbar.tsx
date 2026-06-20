
function Navbar() {
    return (
        <div className="fixed top-0 left-0 right-0 z-[100]">
            <header className="relative mt-0 sm:mt-4 transition-all duration-300 rounded-full md:rounded-full mx-auto max-w-6xl font-instrument-sans bg-zinc-900/90 shadow-lg overflow-visible ">
                <div className="max-w-6xl mx-auto px-2.5 overflow-visible">
                    <div className="flex items-center h-12 px-4 sm:px-2">
                        <a className="flex items-center gap-2 mr-8" href="/">
                            <span className="font-morph font-semibold text-lg text-white">
                                Code Velocity
                            </span>
                        </a>
                        <nav className="hidden md:flex items-center space-x-8 flex-1 text-amber-100">
                            <div className="relative">
                                <span className="flex items-center text-sm transition-colors cursor-default text-landing-secondary hover:text-landing-secondary-hover ">
                                    Models
                                </span>
                            </div>
                            <a
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-sm text-landing-secondary hover:text-landing-secondary-hover transition-colors"
                                href="https://docs.morphllm.com/quickstart"
                            >
                                Docs
                            </a>
                            <a
                                className="text-sm text-landing-secondary hover:text-landing-secondary-hover transition-colors"
                                href="/pricing"
                            >
                                Pricing
                            </a>
                            <a
                                className="text-sm text-landing-secondary hover:text-landing-secondary-hover transition-colors"
                                href="/setup"
                            >
                                MCP
                            </a>
                            <div className="relative">
                                <span className="flex items-center text-sm transition-colors cursor-default text-landing-secondary hover:text-landing-secondary-hover">
                                    Resources
                                </span>
                            </div>
                        </nav>
                        <div className="hidden md:flex items-center space-x-3">
                            <a
                                target="_blank"
                                rel="noopener noreferrer"
                                href="https://calendar.app.google/xN2RcfSYtfQERQYG8"
                            >
                                <button
                                    className="group/3b777358 flex h-8 cursor-pointer items-center justify-center gap-2 rounded-md px-3 disabled:cursor-default disabled:bg-neutral-200 hover:disabled:cursor-default  active:disabled:cursor-default active:disabled:bg-neutral-200 border border-solid border-neutral-border bg-default-background border-lime-200"
                                    type="button"
                                >
                                    <div className="hidden h-4 w-4 flex-none items-center justify-center gap-2">
                                        <div className="text-caption font-caption group-disabled/3b777358:text-neutral-400 text-neutral-700 loader-module_root__-0Kak" />
                                    </div>
                                    <span className="whitespace-nowrap text-body-bold font-body-bold group-disabled/3b777358:text-neutral-400 text-neutral-700">
                                        <span className="text-brand-primary text-lime-300">Book a Call</span>
                                    </span>
                                </button>
                            </a>
                            <div className="flex gap-3">
                                <a href="/sign-up">
                                    <button
                                        className="group/3b777358 flex h-8 cursor-pointer items-center justify-center gap-2 rounded-md border-none bg-brand-600 px-3 hover:bg-brand-500 active:bg-brand-600 disabled:cursor-default disabled:bg-neutral-200 hover:disabled:cursor-default hover:disabled:bg-neutral-200 active:disabled:cursor-default active:disabled:bg-neutral-200"
                                        type="button"
                                    >
                                        <div className="hidden h-4 w-4 flex-none items-center justify-center gap-2">
                                            <div className="text-caption font-caption text-black group-disabled/3b777358:text-neutral-400 loader-module_root__-0Kak" />
                                        </div>
                                        <span className="whitespace-nowrap text-body-bold font-body-bold text-black group-disabled/3b777358:text-neutral-400 bg-[#99D52A] px-2 py-1 rounded-[8px]">
                                            Sign Up / Log In
                                        </span>
                                    </button>
                                </a>
                            </div>
                        </div>
                        <div className="flex-grow md:hidden" />
                        <button
                            className="group/a4ee726a flex cursor-pointer items-center gap-1 border-none bg-transparent ml-3 md:hidden"
                            type="button"
                            aria-expanded="false"
                            aria-controls="mobile-menu"
                            aria-label="Toggle menu"
                        >
                            <span className="text-body font-body text-neutral-700 group-hover/a4ee726a:text-brand-700 group-disabled/a4ee726a:text-neutral-400 group-hover/a4ee726a:group-disabled/a4ee726a:text-neutral-400 icon-wrapper-module_root__-l6uP">
                                <span className="h-5 w-5 icon-wrapper-module_root__-l6uP">
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
                                        <line x1={4} x2={20} y1={12} y2={12} />
                                        <line x1={4} x2={20} y1={6} y2={6} />
                                        <line x1={4} x2={20} y1={18} y2={18} />
                                    </svg>
                                </span>
                            </span>
                        </button>
                    </div>
                </div>
            </header>
        </div>

    )
}

export default Navbar