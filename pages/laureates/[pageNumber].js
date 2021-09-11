/* This example requires Tailwind CSS v2.0+ */
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/solid'
import { InformationCircleIcon } from '@heroicons/react/outline';
import laureates from '../../data/laureates.json';
import LaureateCard from '../../components/laureateCard'
import Link from 'next/link'
export default function Laureates({ people, cursorStart, cursorEnd, totalCount, pageRange, pageNumber, totalPages }) {
    // const [people, setPeople] = useState([])
    // useEffect(() => {
    //     setPeople(laureates.laureates);
    // })
    return (
        <>
            <h3 className="text-lg text-yellow-600 font-medium mb-4 flex items-center m-4"><InformationCircleIcon className="h-6 w-6 mr-2" /> <span>A collection of nobel prize laureates sorted alphabetically</span></h3>
            <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-2 mx-4 my-8">
                {people.map((person, index) => (
                    <LaureateCard title={person?.knownName?.en ?? person.orgName.en} id={person.id} description={`Location: ${person?.birth?.place?.locationString.en ?? person?.birthCountry?.en ?? person?.founded?.place?.locationString?.en ?? ''} | Birthdate: ${person?.birth?.date ?? person?.founded?.date ?? 'unknown'}`} key={index} />
                ))}
            </ul>
            <div className="bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6">
                <div className="flex-1 flex justify-between sm:hidden">
                    <a
                        href="#"
                        className="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
                    >
                        Previous
                    </a>
                    <a
                        href="#"
                        className="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
                    >
                        Next
                    </a>
                </div>
                <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
                    <div>
                        <p className="text-sm text-gray-700">
                            Showing <span className="font-medium text-yellow-600">{cursorStart}</span> to <span className="font-medium text-yellow-600">{cursorEnd}</span> of{' '}
                            <span className="font-medium text-yellow-600">{totalCount}</span> results
                        </p>
                    </div>
                    <div>
                        <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
                            <Link href={(0 == Number(pageNumber)) ? '#' : `/laureates/${Number(pageNumber) - 1}`}>
                                <a
                                    className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                                >
                                    <span className="sr-only">Previous</span>
                                    <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
                                </a>
                            </Link>
                            {/* Current: "z-10 bg-indigo-50 border-indigo-500 text-indigo-600", Default: "bg-white border-gray-300 text-gray-500 hover:bg-gray-50" */}
                            {
                                pageRange.map((pageRangeN) => (
                                    <Link href={`/laureates/${pageRangeN}`} key={pageRangeN}>
                                        <a
                                            aria-current="page"
                                            className={`relative inline-flex items-center px-4 py-2 border text-sm font-medium ${(pageRangeN == pageNumber) ? 'z-10 bg-yellow-50 border-yellow-600 text-yellow-600' : 'bg-white border-gray-300 text-gray-500 hover:bg-gray-50'}`}
                                        >
                                            {pageRangeN}
                                        </a>
                                    </Link>
                                ))
                            }
                            <Link href={(totalPages - 1 == Number(pageNumber)) ? '#' : `/laureates/${Number(pageNumber) + 1}`}>
                                <a
                                    className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                                >
                                    <span className="sr-only">Next</span>
                                    <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
                                </a>
                            </Link>

                        </nav>
                    </div>
                </div>
            </div>

        </>

    )
}

let pageLimit = 26;
let totalCount = laureates.laureates.length;
let totalPages = Math.ceil(totalCount / pageLimit);
let displayedPageCount = 5;
// This function gets called at build time
export async function getStaticPaths() {
    // Get the paths we want to pre-render based on posts
    let paths = [];
    for (let i = 0; i < Math.ceil(totalCount / pageLimit); i++) {
        paths.push({ params: { pageNumber: `${i}` } })
    }
    // We'll pre-render only these paths at build time.
    // { fallback: false } means other routes should 404.
    return { paths, fallback: false }
}

// This also gets called at build time
export async function getStaticProps({ params }) {
    let people = [];
    let cursorStart = params.pageNumber * pageLimit;
    let cursorEnd = (Number(params.pageNumber) + 1) * pageLimit;
    if (params.pageNumber == 0) {
        cursorStart = 0;
        cursorEnd = pageLimit;
        people = laureates.laureates.slice(0, pageLimit);
    } else if (params.pageNumber == totalPages - 1) {
        cursorEnd = totalCount;
        people = laureates.laureates.slice(cursorStart, cursorEnd);
    } else {
        people = laureates.laureates.slice(cursorStart, cursorEnd);
    }
    let pageRange = [];
    let pageStart = 0;
    let pageEnd = pageStart + displayedPageCount;
    if (Number(params.pageNumber) > 2) {
        pageStart = Number(params.pageNumber) - 2;
        pageEnd = Number(params.pageNumber) + 3;
    }
    console.log(pageStart, pageEnd)
    for (let i = pageStart; i < pageEnd; i++) {
        if (i <= totalPages - 1) {
            pageRange.push(i);
        }
    }
    let pageNumber = params.pageNumber;
    // Pass post data to the page via props
    return { props: { people, cursorStart, cursorEnd, totalCount, pageRange, pageNumber, totalPages } }
}
