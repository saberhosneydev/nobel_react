import laureates from '../../data/laureates.json';
import { SearchIcon } from '@heroicons/react/outline'
export default function Laureate({ people, search }) {

    return (
        <>
            <h3 className="text-lg text-yellow-600 font-medium mb-4 flex items-center m-4"><SearchIcon className="h-6 w-6 mr-2" /> <span>Results found for {search}</span></h3>
            <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-2 mx-4 my-8">
                {people.map((person) => (
                    <li key={person.id} className="col-span-1 bg-white rounded-lg shadow divide-y divide-gray-200">
                        <div className="w-full flex items-center justify-between p-6 space-x-6">
                            <div className="flex-1">
                                <div className="flex items-center space-x-3">
                                    <h3 className="text-gray-900 text-sm font-medium">{person?.knownName?.en ?? person.orgName.en}</h3>
                                    <span className="flex-shrink-0 inline-block px-2 py-0.5 text-white text-xs font-medium bg-yellow-600 rounded-full">
                                        {person.id}
                                    </span>
                                </div>
                                <p className="mt-1 text-gray-500 text-sm">Location: {person?.birth?.place?.locationString.en ?? person?.birthCountry?.en ?? person?.founded?.place?.locationString?.en ?? ''} | Birthdate: {person?.birth?.date ?? person?.founded?.date ?? 'unknown'}</p>
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
        </>
    )
}


export async function getServerSideProps(context) {
    let result = laureates.laureates.filter((laureate) => {
        if (laureate.hasOwnProperty('fullName')) {
            return laureate.fullName.en.toLowerCase().includes(context.params.search.toLowerCase());
        } else if (laureate.hasOwnProperty('founded')) {
            return laureate.orgName.en.toLowerCase().includes(context.params.search.toLowerCase());
        }
    });
    // Pass data to the page via props
    return {
        props: {
            people: result,
            search: context.params.search
        }
    }
}
