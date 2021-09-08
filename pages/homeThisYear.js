import { FolderIcon } from "@heroicons/react/outline";
import axios from "axios"
import { useState, useEffect } from "react"
export default function HomeThisYear() {
    const [nobelPrizes, setNobelPrizes] = useState([])
    useEffect(() => {
        axios.get("https://api.nobelprize.org/2.1/nobelPrizes?nobelPrizeYear=2020").then((response) => {
            setNobelPrizes(response.data.nobelPrizes);
        });
    }, [])
    return (
        <div className="flex flex-col mx-8">
            <h2 className="text-center text-3xl font-black text-yellow-600 tracking-tight sm:text-4xl uppercase mb-8">
                this year's winners
            </h2>
            {
                nobelPrizes.map((prize) => (
                    <div className="my-6">
                        <h3 className="text-lg text-yellow-600 font-medium mb-4 flex items-center"><FolderIcon className="h-6 w-6 mr-2" /> <span>{prize.category.en}</span></h3>
                        <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-2">
                            {prize.laureates.map((person) => (
                                <li key={person.id} className="col-span-1 bg-white rounded-lg shadow divide-y divide-gray-200">
                                    <div className="w-full flex items-center justify-between p-6 space-x-6">
                                        <div className="flex-1">
                                            <div className="flex items-center space-x-3">
                                                <h3 className="text-gray-900 text-sm font-medium">{person?.knownName?.en ?? person.orgName.en}</h3>
                                                <span className="flex-shrink-0 inline-block px-2 py-0.5 text-white text-xs font-medium bg-yellow-600 rounded-full">
                                                    {person.id}
                                                </span>
                                            </div>
                                            <p className="mt-1 text-gray-500 text-sm">{person.motivation.en}</p>
                                        </div>

                                    </div>
                                    <div>
                                        <div className="-mt-px flex divide-x divide-gray-200">
                                            <div className="w-0 flex-1 flex">
                                                <a
                                                    href={`/laureate/${person.id}`}
                                                    className="relative -mr-px w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-gray-700 font-medium border border-transparent rounded-bl-lg hover:text-gray-500"
                                                >
                                                    <span className="">Read more</span>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>

                ))
            }

        </div>
    )
}