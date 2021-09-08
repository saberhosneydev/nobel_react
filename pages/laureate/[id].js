import axios from "axios";

export default function Laureate({ person }) {

    return (
        <>
            {person.id ? <div className="sm:rounded-lg">
                <div className="px-4 py-5 sm:px-6">
                    <h3 className="text-xl leading-6 font-medium text-yellow-600">Laureate Information</h3>
                    <p className="mt-1 max-w-2xl text-base text-gray-500">Personal details and nobel prizes.</p>
                </div>
                <div className="border-t border-gray-200 px-4 py-5 sm:px-6">
                    <dl className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
                        <div className="sm:col-span-1">
                            <dt className="text-base font-medium text-yellow-600">Full name</dt>
                            <dd className="mt-1 text-base text-gray-900">{person?.fullName?.en ?? person.orgName?.en}</dd>
                        </div>
                        <div className="sm:col-span-1">
                            <dt className="text-base font-medium text-yellow-600">{person?.birth?.date ? 'Birthdate' : "Founded"}</dt>
                            <dd className="mt-1 text-base text-gray-900">{person?.birth?.date ?? person?.founded?.date}</dd>
                        </div>
                        <div className="sm:col-span-1">
                            <dt className="text-base font-medium text-yellow-600">{person?.birth?.date ? 'Birth' : ""} Location</dt>
                            <dd className="mt-1 text-base text-gray-900">{person?.birth?.place?.locationString.en ?? person?.founded?.place?.locationString.en}</dd>
                        </div>
                        <div className="sm:col-span-1">
                            <dt className="text-base font-medium text-yellow-600">Nobel Prizes</dt>
                            <dd className="mt-1 text-base text-gray-900">{person.nobelPrizes.length}</dd>
                        </div>
                        <div className="sm:col-span-1">
                            <dt className="text-base font-medium text-yellow-600">Wikipedia</dt>
                            <dd className="mt-1 text-base text-blue-600 underline"><a target="_blank" href={person.wikipedia.english}>{person.wikipedia.slug}</a></dd>
                        </div>
                        <div className="sm:col-span-1">
                            <dt className="text-base font-medium text-yellow-600">Wikidata</dt>
                            <dd className="mt-1 text-base text-blue-600 underline"><a target="_blank" href={person.wikidata.url}>{person.wikidata.id}</a></dd>
                        </div>
                        <div className="sm:col-span-2">
                            <dt className="text-xl font-medium text-yellow-600">Prize details</dt>
                            <dd className="mt-1 text-gray-900 ml-4">
                                {person.nobelPrizes.map((prize) => (
                                    <>
                                        <dl className="grid grid-cols-3 gap-x-4 gap-y-8 text-sm">
                                            <div className="sm:col-span-1">
                                                <dt className="text-base font-medium text-yellow-600">Awarding year</dt>
                                                <dd className="mt-1 text-base text-gray-900">{prize.awardYear}</dd>
                                            </div>
                                            <div className="sm:col-span-1">
                                                <dt className="text-base font-medium text-yellow-600">Awarding date</dt>
                                                <dd className="mt-1 text-base text-gray-900">{prize?.dateAwarded ?? 'unknown'}</dd>
                                            </div>
                                            <div className="sm:col-span-1">
                                                <dt className="text-base font-medium text-yellow-600">Category</dt>
                                                <dd className="mt-1 text-base text-gray-900">{prize.category.en}</dd>
                                            </div>
                                            <div className="sm:col-span-1">
                                                <dt className="text-base font-medium text-yellow-600">Motivation</dt>
                                                <dd className="mt-1 text-base text-gray-900 pr-2">{prize.motivation.en}</dd>
                                            </div>
                                            <div className="sm:col-span-1">
                                                <dt className="text-base font-medium text-yellow-600">Prize amount</dt>
                                                <dd className="mt-1 text-base text-gray-900">{Number(prize.prizeAmount).toLocaleString()}</dd>
                                            </div>
                                            {prize.affiliations && <div className="sm:col-span-3">
                                                <dt className="text-base font-medium text-yellow-600">Affiliations</dt>
                                                <dd className="mt-1 text-base text-gray-900">
                                                    <ol>
                                                        {prize.affiliations.map((affiliate) => (
                                                            <h1>{affiliate.name.en} | {affiliate.locationString.en}</h1>
                                                        ))}
                                                    </ol>
                                                </dd>
                                            </div>}

                                        </dl>
                                        {person.nobelPrizes.length > 1 ? <hr className="w-full border-b-2 border-yellow-600 mx-auto" /> : ''}
                                    </>
                                ))}
                            </dd>
                        </div>
                    </dl>
                </div>
            </div> : <div className="flex flex-col items-center h-screen justify-center">
                <h1 className="text-yellow-600 text-2xl font-black uppercase">This laureate id does not exist</h1>
                <p>
                    you could use the search from the left panel or go <a href="/" className="underline text-blue-600">Home</a>
                </p>
            </div>}
        </>
    )
}


export async function getServerSideProps(context) {
    let url = "https://api.nobelprize.org/2.1/laureate/" + context.params.id;
    const response = await axios.get(url);
    let person = response.data[0];

    // Pass data to the page via props
    return { props: { person } }
}
