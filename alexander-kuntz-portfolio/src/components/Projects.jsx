export default function Projects() {
    return (
        <div>
            <div className="mt-10 grid gap-4 sm:mt-16 lg:grid-cols-3 lg:grid-rows-2">
                <div className="relative lg:row-span-1">
                    <div className="relative inset-px rounded-lg bg-slate-900 border-4 border-cyan-300">

                        <div className="card bg-slate-900 w-90">

                            <img
                                src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                                alt="Shoes" />

                            <div className="card-body">
                                <h2 className="card-title text-cyan-200">
                                    <div className="badge mr-1 bg-orange-600">SaskPower</div>
                                    Procurement Card App
                                </h2>
                                <p className="mt-4 text-cyan-100">A card component has a figure, a body part, and inside body there are title and actions parts</p>
                                <div className="card-actions justify-end mt-4">
                                    <div className="badge badge-outline">Power Apps</div>
                                    <div className="badge badge-outline">Power Automate</div>
                                    <div className="badge badge-outline">SQL Server</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="pointer-events-none absolute inset-px rounded-lg ring-1 shadow-sm ring-black/5 lg:rounded-l-[2rem]"></div>
                </div>

                <div className="relative inset-px rounded-lg bg-slate-900 border-4 border-cyan-300">
                    <div className="card bg-slate-900 w-90">

                        <img
                            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                            alt="Shoes" />

                        <div className="card-body">
                            <h2 className="card-title text-cyan-200">
                                <div className="badge mr-1 bg-pink-500">SaskTel</div>
                                Cell Tower Search Engine App
                            </h2>
                            <p className="mt-4 text-cyan-100">A card component has a figure, a body part, and inside body there are title and actions parts</p>
                            <div className="card-actions justify-end mt-4">
                                <div className="badge badge-outline">Python</div>
                                <div className="badge badge-outline">MKDocs</div>
                                <div className="badge badge-outline">SQL Server</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="relative inset-px rounded-lg bg-slate-900 border-4 border-cyan-300">
                    <div className="card bg-slate-900 w-90">

                        <img
                            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                            alt="Shoes" />

                        <div className="card-body">
                            <h2 className="card-title text-cyan-200">
                                <div className="badge mr-1 bg-lime-600">Deloitte</div>
                                Carbon Credit Trading App
                            </h2>
                            <p className="mt-4 text-cyan-100">A card component has a figure, a body part, and inside body there are title and actions parts</p>
                            <div className="card-actions justify-end mt-4">
                                <div className="badge badge-outline">Angular</div>
                                <div className="badge badge-outline">Node.js</div>
                                <div className="badge badge-outline">JavaScript</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="relative inset-px rounded-lg bg-slate-900 border-4 border-cyan-300">
                    <div className="card bg-slate-900 w-90">

                        <img
                            src="https://i.gyazo.com/3ad0cb19147ef56dbc0c8be36fc9016d.png"
                            alt="Shoes" />

                        <div className="card-body">
                            <h2 className="card-title text-cyan-200">
                                <div className="badge mr-1 bg-cyan-600">Personal</div>
                                Film Finder (Collab. Project)
                            </h2>
                            <p className="mt-4 text-cyan-100">Worked on a full-stack movie recommendation web-app that utilizes machine learning and language processing models to recommend users of the app new movies to watch.</p>
                            <div className="card-actions justify-end mt-4">
                                <div className="badge badge-outline">Next.js</div>
                                <div className="badge badge-outline">React</div>
                                <div className="badge badge-outline">MongoDB</div>
                                <div className="badge badge-outline">JavaScript</div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}