export default function Experience() { // Heavy utilization of: DaisyUI, Flowbite both for Tailwind CSS React Apps.
    return (
        <div className="tabs mt-10 justify-center tabs-border">
            <input type="radio" name="exp_tabs" className="tab font-semibold text-2xl text-cyan-300" aria-label="Work" defaultChecked />
            <div className="tab-content p-6">
                <div className="relative lg:row-span-2 justify-center">
                    <div className="absolute inset-px rounded-lg bg-slate-900 lg:rounded-[2rem] border-4 border-cyan-300 justify-center"></div>
                    <div className="relative flex flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] lg:rounded-[calc(2rem+1px)]">
                        <div className="px-8 pt-8 pb-3 sm:px-10 sm:pt-10 sm:pb-0">
                            <ol className="relative border-l border-gray-200 dark:border-cyan-200">
                                <li className="mb-10 ms-6">
                                    <span className="absolute flex items-center justify-center w-10 h-10 bg-blue-100 rounded-full -start-5 ring-8 ring-white dark:ring-gray-900 dark:bg-cyan-300">
                                        <img className="rounded-full w-9 h-9 text-blue-800 dark:text-blue-300" aria-hidden="true" fill="currentColor" src="https://cdn.brandfetch.io/id-leti34J/w/240/h/240/theme/dark/icon.jpeg?c=1dxbfHSJFAPEGdCLU4o5B" />
                                    </span>
                                    <h3 className="ml-3 flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">SaskPower</h3>
                                    <time className="block ml-3 mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">September 2024 - December 2024</time>
                                    <ul className="list-disc ml-5 mb-4">
                                        <li className="ml-3 mb-1 text-base font-normal text-gray-500 dark:text-gray-400">Developed Power Apps and Power Automate solutions using Agile methodologies for business needs via
                                            SharePoint</li>
                                        <li className="ml-3 mb-1 text-base font-normal text-gray-500 dark:text-gray-400">Created a procurement card requesting app for web/mobile that was roughly 70% faster than the previous
                                            iteration, still used across the organization</li>
                                        <li className="ml-3 mb-1 text-base font-normal text-gray-500 dark:text-gray-400">Achieved such efficiencies by auto-filling application fields with database-queried information as well as
                                            automating the notifications sent to managers</li>
                                        <li className="ml-3 mb-1 text-base font-normal text-gray-500 dark:text-gray-400">Facilitated user acceptance testing, pair programming, and unit tests with the business
                                        </li>
                                        <li className="ml-3 mb-1 text-base font-normal text-gray-500 dark:text-gray-400">Tweaked multiple .NET codebases to squash various bugs
                                        </li>
                                    </ul>

                                </li>

                                <li className="mb-10 ms-6">
                                    <span className="absolute flex items-center justify-center w-10 h-10 bg-blue-100 rounded-full -start-5 ring-8 ring-white dark:ring-gray-900 dark:bg-cyan-300">
                                        <img className="rounded-full w-9 h-9 text-blue-800 dark:text-blue-300" aria-hidden="true" fill="currentColor" src="https://cdn.brandfetch.io/idvQfM_HC6/w/400/h/400/theme/dark/icon.jpeg?c=1dxbfHSJFAPEGdCLU4o5B" />
                                    </span>
                                    <h3 className="mb-1 ml-3 text-lg font-semibold text-gray-900 dark:text-white">SaskTel</h3>
                                    <time className="block ml-3 mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">May 2024 - August 2024</time>
                                    <ul className="list-disc ml-5 mb-4">
                                        <li className="ml-3 mb-1 text-base font-normal text-gray-500 dark:text-gray-400">Developed a search engine web app that queries 1000+ cell towers to help engineers find specific schematics
                                            46% faster via a Python script running on GitLab CI/CD Pipelines, still used across the organization</li>
                                        <li className="ml-3 mb-1 text-base font-normal text-gray-500 dark:text-gray-400">Used Jinja2 templating to generate cell tower Excel Workbooks via relational database queries
                                        </li>
                                        <li className="ml-3 mb-1 text-base font-normal text-gray-500 dark:text-gray-400">Removed hundreds of superfluous folders by compiling all the engineer’s documentation onto one markdown
                                            webpage</li>
                                    </ul>
                                </li>

                                <li className="mb-10 ms-6">
                                    <span className="absolute flex items-center justify-center w-10 h-10 bg-cyan-300 rounded-full -start-5 ring-8 ring-white dark:ring-gray-900 dark:bg-cyan-300">
                                        <img className="rounded-full w-9 h-9 text-blue-800 dark:text-blue-300" aria-hidden="true" fill="currentColor" src="https://cdn.brandfetch.io/idIu-Ji9Le/w/320/h/320/theme/dark/icon.jpeg?c=1dxbfHSJFAPEGdCLU4o5B" />
                                    </span>
                                    <h3 className="mb-1 ml-3 text-lg font-semibold text-gray-900 dark:text-white">Deloitte</h3>
                                    <time className="block ml-3 mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">May 2023 - August 2023</time>
                                    <ul className="list-disc ml-5 mb-4">
                                        <li className="ml-3 mb-1 text-base font-normal text-gray-500 dark:text-gray-400">Explored generative AI solutions and their applicability to various business models as research
                                        </li>
                                        <li className="ml-3 mb-1 text-base font-normal text-gray-500 dark:text-gray-400">Consulted Purolator on IT architecture</li>
                                    </ul>
                                </li>

                                <li className="mb-10 ms-6">
                                    <span className="absolute flex items-center justify-center w-10 h-10 bg-blue-100 rounded-full -start-5 ring-8 ring-white dark:ring-gray-900 dark:bg-cyan-300">
                                        <img className="rounded-full w-9 h-9 text-blue-800 dark:text-blue-300" aria-hidden="true" fill="currentColor" src="https://cdn.brandfetch.io/idIu-Ji9Le/w/320/h/320/theme/dark/icon.jpeg?c=1dxbfHSJFAPEGdCLU4o5B" />
                                    </span>
                                    <h3 className="mb-1 ml-3 text-lg font-semibold text-gray-900 dark:text-white">Deloitte</h3>
                                    <time className="block ml-3 mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">May 2022 - August 2022</time>
                                    <ul className="list-disc ml-5 mb-4">
                                        <li className="ml-3 mb-1 text-base font-normal text-gray-500 dark:text-gray-400">Consulted Honda on IT solutions, attending multiple workshops with vendors spanning a week</li>
                                        <li className="ml-3 mb-1 text-base font-normal text-gray-500 dark:text-gray-400">Completed IT audits for Viterra</li>
                                        <li className="ml-3 mb-1 text-base font-normal text-gray-500 dark:text-gray-400">Competed in the Cultivator 24-Hour hackathon with the company, developed a prototype project with
                                            Angular.js, Node.js, Bootstrap CSS, HTML, and JavaScript that won the People’s Choice Award</li>
                                    </ul>
                                </li>
                            </ol>
                        </div>
                    </div>
                </div>
            </div>

            <input type="radio" name="exp_tabs" className="tab font-semibold text-2xl text-cyan-300" aria-label="Education" />
            <div className="tab-content p-6">
                <div className="relative lg:row-span-2">
                    <div className="absolute inset-px rounded-lg bg-slate-900 lg:rounded-[2rem] border-4 border-cyan-300"></div>
                    <div className="relative flex flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] lg:rounded-[calc(2rem+1px)]">
                        <div className="px-8 pt-8 pb-3 sm:px-10 sm:pt-10 sm:pb-0">
                            <ol className="relative border-l border-gray-200 dark:border-cyan-200">
                                <li className="mb-10 ms-6">
                                    <span className="absolute flex items-center justify-center w-10 h-10 bg-blue-100 rounded-full -start-5 ring-8 ring-white dark:ring-gray-900 dark:bg-cyan-300">
                                        <img className="rounded-full w-9 h-9 text-blue-800 dark:text-blue-300" aria-hidden="true" fill="currentColor" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvJ7egags1IMlMlCNN8By9QFbuKZgXygGMfA&s" />
                                    </span>
                                    <h3 className="ml-3 flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">Campion College - University of Regina</h3>
                                    <time className="block ml-3 mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">September 2020 - April 2025</time>
                                    <ul className="list-disc ml-5 mb-4">
                                        <li className="ml-3 mb-1 text-base font-normal text-gray-500 dark:text-gray-400">GPA of 87.71</li>
                                        <li className="ml-3 mb-1 text-base font-normal text-gray-500 dark:text-gray-400">Campion College Student Union President (1 year)</li>
                                        <li className="ml-3 mb-1 text-base font-normal text-gray-500 dark:text-gray-400">Campion Director at University of Regina Students' Union (2 years)</li>
                                        <li className="ml-3 mb-1 text-base font-normal text-gray-500 dark:text-gray-400">Vice President of Computer Science Students Society (2 years)</li>
                                        <li className="ml-3 mb-1 text-base font-normal text-gray-500 dark:text-gray-400">Member of Alpha Sigma Nu Scholastic Honour Society (3 years)</li>
                                    </ul>
                                </li>

                                <li className="mb-10 ms-6">
                                    <span className="absolute flex items-center justify-center w-10 h-10 bg-blue-100 rounded-full -start-5 ring-8 ring-white dark:ring-gray-900 dark:bg-cyan-300">
                                        <img className="rounded-full w-9 h-9 text-blue-800 dark:text-blue-300" aria-hidden="true" fill="currentColor" src="https://static.hudl.com/users/prod/9835599_b0d96c5976f34bd089c9691905243265.jpg" />
                                    </span>
                                    <h3 className="mb-1 ml-3 text-lg font-semibold text-gray-900 dark:text-white">Miller Comprehensive Catholic Highschool</h3>
                                    <time className="block ml-3 mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">September 2016 - June 2020</time>
                                    <ul className="list-disc ml-5 mb-4">
                                        <li className="ml-3 mb-1 text-base font-normal text-gray-500 dark:text-gray-400">GPA of 99.41</li>
                                        <li className="ml-3 mb-1 text-base font-normal text-gray-500 dark:text-gray-400">Awarded the Governor General's Academic Medal (Bronze)</li>
                                        <li className="ml-3 mb-1 text-base font-normal text-gray-500 dark:text-gray-400">AP Scholar with Honor Award (Average of 3.25 on AP Exams and scored this on 4+ exams)</li>
                                    </ul>
                                </li>
                            </ol>
                        </div>
                    </div>
                </div>
            </div>

        </div>

    );
}