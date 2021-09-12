import Head from 'next/head'
export default function About() {
    return (
        <div className="mt-8 mb-16 mx-auto text-gray-700 max-w-4xl space-y-6 text-lg">
            <div>
                <h1 className="font-bold text-3xl text-yellow-600">The Nobel Prize</h1>
                <div className="relative">
                    <div className="absolute inset-0 flex items-center" aria-hidden="true">
                        <div className="w-full border-t border-gray-300" />
                    </div>
                </div>
                <p className="ml-1 my-2">This project was originally made for educational purposes of learning React while maintaining a quality-content rather than the traditional outdated Blog/E-commerce examples flooding the internet.
                    It aims to serve as a beautiful interface to honor those men and women who didn't show less than their best to the service of humanity.</p>
            </div>
            <div>
                <h2 className="font-bold text-xl text-yellow-600">Authors</h2>
                <div className="relative">
                    <div className="absolute inset-0 flex items-center" aria-hidden="true">
                        <div className="w-full border-t border-gray-300" />
                    </div>
                </div>
                <ul className="list-disc list-inside ml-1 my-2">
                    <li><a className="text-blue-600 underline" href="https://www.github.com/saberhosneydev" target="_blank" rel="noopener external">@saberhosneydev</a></li>
                </ul>
            </div>
            <div>
                <h2 className="font-bold text-xl text-yellow-600">Tech Stack</h2>
                <div className="relative">
                    <div className="absolute inset-0 flex items-center" aria-hidden="true">
                        <div className="w-full border-t border-gray-300" />
                    </div>
                </div>
                <p className="my-2 ml-1">
                    The tech stack uses a state of the art techniques and tools for optimal performance as the following<br />
                    <span className="font-bold">Client: </span> <span className="italic text-base">React, TailwindCSS, Heroicons</span><br>
                    </br>
                    <span className="font-bold">Server: </span> <span className="italic text-base">Node, NextJs</span>
                </p>
            </div>
            <div>
                <h2 className="font-bold text-xl text-yellow-600">Data</h2>
                <div className="relative">
                    <div className="absolute inset-0 flex items-center" aria-hidden="true">
                        <div className="w-full border-t border-gray-300" />
                    </div>
                </div>
                <p className="my-2 ml-1">
                    Due to the nature of the nobel prize data that changes biannually/yearly. this project uses a snapshot of the data provided by <a className="text-blue-600 underline" href="https://www.nobelprize.org/about/developer-zone-2/" rel="noopener" target="_blank">NobelPrize API</a>{' '}
                    <blockquote className="border-l-4 border-yellow-600 italic text-base p-2 text-yellow-700">The snapshot is fetched from the API and processed without any kind of modification</blockquote>
                    The snapshot will be updated quarterly to refelect any important changes e.g. the data update that follows the yearly winners announcement that occurs at the last quarter of the year.
                </p>
            </div>
            <div>
                <h2 className="font-bold text-xl text-yellow-600">Disclaimer</h2>
                <div className="relative">
                    <div className="absolute inset-0 flex items-center" aria-hidden="true">
                        <div className="w-full border-t border-gray-300" />
                    </div>
                </div>
                <p className="my-2 ml-1">
                    this website may contains copyrighted work, all the copyright to the materials shown here is due to it's original copyright holder <a className="text-blue-600 underline" href="https://www.nobelprize.org/" rel="noopener" target="_blank">NobelPrize</a>
                </p>
            </div>
            <div>
                <h2 className="font-bold text-xl text-yellow-600">Contributions</h2>
                <div className="relative">
                    <div className="absolute inset-0 flex items-center" aria-hidden="true">
                        <div className="w-full border-t border-gray-300" />
                    </div>
                </div>
                <p className="my-2 ml-1">
                    All feedback and issues are encouraged and can be submitted as <a className="text-blue-600 underline" href="https://github.com/saberhosneydev/nobel_react/issues" target="_blank" rel="noopener external">github issue</a><br>
                    </br>Contributions are also welcomed feel free to submit a PR!
                </p>
            </div>
        </div>
    )
}