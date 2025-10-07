export default function Projects() {
    return (
        <div>
            <h1 className="text-center text-3xl mt-14 font-semibold text-cyan-300 underline">Projects</h1>
            <div className="mt-2 grid gap-4 sm:mt-7 lg:grid-cols-2 lg:grid-rows-1">
                <div className="relative lg:row-span-1">
                    <div className="relative inset-px rounded-lg bg-slate-900 border-4 border-cyan-300">

                        <div className="card bg-slate-900">
                            <figure>
                                <img className="aspect-[calc(4*1)/2.5] object-cover"
                                    src="https://electricalindustry.ca/wp-content/uploads/2023/05/Untitled-1-5.jpg"
                                    alt="Procurement Card Requester Thumbnail" />
                                <figcaption className="absolute px-2 text-xs text-white top-2">* No image available as to not breach company confidentiality policy *</figcaption>
                            </figure>

                            <div className="card-body">
                                <h2 className="card-title text-cyan-200">
                                    <div className="badge mr-1 bg-orange-600">SaskPower</div>
                                    Procurement Card App
                                </h2>
                                <p className="mt-4 text-cyan-100">A procurement card requesting app that automatically sends acceptance notifications to higher-ups whenever an employee requests for a new business credit card. Information is auto-filled so the user only has to fill out 3 fields typically.</p>
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
                    <div className="card bg-slate-900">

                        <img className="aspect-[calc(4*1)/2.5] object-cover"
                            src="https://i.gyazo.com/4b4619f6c09e671ebf29f04f6d962c0b.png"
                            alt="Cell Tower Searcher Thumbnail" />

                        <div className="card-body">
                            <h2 className="card-title text-cyan-200">
                                <div className="badge mr-1 bg-pink-500">SaskTel</div>
                                Cell Tower Search Engine App
                            </h2>
                            <p className="mt-4 text-cyan-100">A search engine web app where engineers can search for cell towers within Saskatchewan and pull up all the schematic details. Complete with Google Maps coordinate integration as well as the ability to generate and download an Excel copy.</p>
                            <div className="card-actions justify-end mt-4">
                                <div className="badge badge-outline">Python</div>
                                <div className="badge badge-outline">MKDocs</div>
                                <div className="badge badge-outline">SQL Server</div>
                            </div>
                        </div>
                    </div>
                </div>

               <div className="relative inset-px rounded-lg bg-slate-900 border-4 border-cyan-300">
                    <div className="card bg-slate-900">

                        <img className="aspect-[calc(4*1)/2.5] object-cover"
                            src="https://sasktelinternational.com/wp-content/uploads/2021/06/New-Optius-Suite-Graphics-V2-1.jpg"
                            alt="Optius Thumbnail" />

                        <div className="card-body">
                            <h2 className="card-title text-cyan-200">
                                <div className="badge mr-1 bg-cyan-600">SaskTel International</div>
                                Optius OSS Suite
                            </h2>
                            <p className="mt-4 text-cyan-100">A telecommunications application that aids internet service providers in service operations. Aids multiple ISP and telecom. juggernauts internationally (hence the name ;) ). More information publically available here: https://sasktelinternational.com/optius-portfolio-oss-bss/</p>
                            <div className="card-actions justify-end mt-4">
                                <div className="badge badge-outline">Java</div>
                                <div className="badge badge-outline">Oracle SQL Server</div>
                                <div className="badge badge-outline">JavaServer Faces</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="relative inset-px rounded-lg bg-slate-900 border-4 border-cyan-300">
                    <div className="card bg-slate-900">

                        <img className="aspect-[calc(4*1)/2.5] object-cover"
                            src="https://i.gyazo.com/15ef3d34d1063b89b563e6ba26ded6eb.png"
                            alt="Film Finder Thumbnail" />

                        <div className="card-body">
                            <h2 className="card-title text-cyan-200">
                                <div className="badge mr-1 bg-lime-600">Personal</div>
                                Film Finder
                            </h2>
                            <p className="mt-4 text-cyan-100">A full-stack movie recommendation web-app that utilizes machine learning and language processing models to recommend users of the app new movies to watch. Users have the ability to use the app without logging in to just generate reccomendations, or can log-in to rate movies they have watched, and comment on their friends ratings.</p>
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