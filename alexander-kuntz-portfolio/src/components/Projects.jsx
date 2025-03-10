export default function Projects() {
    return (
        <div>
            <div className="mt-10 grid gap-4 sm:mt-16 lg:grid-cols-3 lg:grid-rows-2">
                <div className="relative lg:row-span-2">
                    <div className="absolute inset-px rounded-lg bg-slate-900 lg:rounded-l-[2rem] border-4 border-cyan-300"></div>
                    <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] lg:rounded-l-[calc(2rem+1px)]">
                        <div className="px-8 pt-8 pb-3 sm:px-10 sm:pt-10 sm:pb-0">
                            <p className="mt-2 text-lg font-medium tracking-tight text-cyan-200 max-lg:text-center">
                                Professional Projects
                            </p>
                            <p className="mt-2 max-w-lg text-sm/6 text-cyan-100  max-lg:text-center">
                                Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.
                            </p>
                        </div>
                        <div className="@container relative min-h-[30rem] w-full grow max-lg:mx-auto max-lg:max-w-sm">
                            <div className="absolute inset-x-10 top-10 bottom-10 rounded-t-[12cqw]   border-gray-700 bg-gray-900 ">
                                <img
                                    className="size-80 object-cover object-top"
                                    src="https://tailwindui.com/plus-assets/img/component-images/bento-03-mobile-friendly.png"
                                    alt=""
                                />
                            </div>
                        </div>
                    </div>
                    <div className="pointer-events-none absolute inset-px rounded-lg ring-1 shadow-sm ring-black/5 lg:rounded-l-[2rem]"></div>
                </div>
                <div className="relative max-lg:row-start-1">
                    <div className="absolute inset-px rounded-lg bg-slate-900 max-lg:rounded-t-[2rem] border-4 border-cyan-300"></div>
                    <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] max-lg:rounded-t-[calc(2rem+1px)]">
                        <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                            <p className="mt-2 text-lg font-medium tracking-tight text-cyan-200 max-lg:text-center">
                                Personal Projects
                            </p>
                            <p className="mt-2 max-w-lg text-sm/6 text-cyan-100 max-lg:text-center">
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit maiores impedit.
                            </p>
                        </div>
                        <div className="flex flex-1 items-center justify-center px-8 max-lg:pt-10 max-lg:pb-12 sm:px-10 lg:pb-2">
                            <img
                                className="w-full max-lg:max-w-xs"
                                src="https://tailwindui.com/plus-assets/img/component-images/bento-03-performance.png"
                                alt=""
                            />
                        </div>
                    </div>
                    <div className="pointer-events-none absolute inset-px rounded-lg ring-1 shadow-sm ring-black/5 max-lg:rounded-t-[2rem] border-4 border-cyan-300"></div>
                </div>
                <div className="relative max-lg:row-start-3 lg:col-start-2 lg:row-start-2">
                    <div className="absolute inset-px rounded-lg bg-slate-900 border-4 border-cyan-300"></div>
                    <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)]">
                        <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                            <p className="mt-2 text-lg font-medium tracking-tight text-cyan-200 max-lg:text-center">Security</p>
                            <p className="mt-2 max-w-lg text-sm/6 text-cyan-100 max-lg:text-center">
                                Morbi viverra dui mi arcu sed. Tellus semper adipiscing suspendisse semper morbi.
                            </p>
                        </div>
                        <div className="@container flex flex-1 items-center max-lg:py-6 lg:pb-2">
                            <img
                                className="h-[min(152px,40cqw)] object-cover"
                                src="https://tailwindui.com/plus-assets/img/component-images/bento-03-security.png"
                                alt=""
                            />
                        </div>
                    </div>
                    <div className="pointer-events-none absolute inset-px rounded-lg ring-1 shadow-sm ring-black/5"></div>
                </div>
                <div className="relative lg:row-span-2">
                    <div className="absolute inset-px rounded-lg bg-slate-900 max-lg:rounded-b-[2rem] lg:rounded-r-[2rem] border-4 border-cyan-300"></div>
                    <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] max-lg:rounded-b-[calc(2rem+1px)] lg:rounded-r-[calc(2rem+1px)]">
                        <div className="px-8 pt-8 pb-3 sm:px-10 sm:pt-10 sm:pb-0">
                            <p className="mt-2 text-lg font-medium tracking-tight text-cyan-200 max-lg:text-center">
                                Collaborative Projects
                            </p>
                            <p className="mt-2 max-w-lg text-sm/6 text-cyan-100 max-lg:text-center">
                                Sit quis amet rutrum tellus ullamcorper ultricies libero dolor eget sem sodales gravida.
                            </p>
                        </div>

                    </div>
                    <div className="pointer-events-none absolute inset-px rounded-lg ring-1 shadow-sm ring-black/5 max-lg:rounded-b-[2rem] lg:rounded-r-[2rem]"></div>
                </div>
            </div>
        </div>
    );
}