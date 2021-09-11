import { FolderIcon } from "@heroicons/react/outline";
import axios from "axios"
import { useState, useEffect } from "react"
import LaureateCard from "../components/laureateCard";
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
                this year&apos;s winners
            </h2>
            {
                nobelPrizes.map((prize, index) => (
                    <div className="my-6" key={index}>
                        <h3 className="text-lg text-yellow-600 font-medium mb-4 flex items-center"><FolderIcon className="h-6 w-6 mr-2" /> <span>{prize.category.en}</span></h3>
                        <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-2">
                            {prize.laureates.map((person, index) => (
                                <LaureateCard title={person?.knownName?.en ?? person.orgName.en} id={person.id} description={person.motivation.en} key={index} />
                            ))}
                        </ul>
                    </div>

                ))
            }

        </div>
    )
}