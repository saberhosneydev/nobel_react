import laureates from '../../data/laureates.json';
import { SearchIcon } from '@heroicons/react/outline';
import LaureateCard from '../../components/laureateCard';
export default function Laureate({ people, search }) {

    return (
        <>
            <h3 className="text-lg text-yellow-600 font-medium mb-4 flex items-center m-4"><SearchIcon className="h-6 w-6 mr-2" /> <span>Results found for {search}</span></h3>
            <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-2 mx-4 my-8">
                {people.map((person, index) => (
                    <LaureateCard title={person?.knownName?.en ?? person.orgName.en} id={person.id} description={`Location: ${person?.birth?.place?.locationString.en ?? person?.birthCountry?.en ?? person?.founded?.place?.locationString?.en ?? ''} | Birthdate: ${person?.birth?.date ?? person?.founded?.date ?? 'unknown'}`} key={index} />
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
