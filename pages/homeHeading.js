import { useRouter } from 'next/router'
export default function homeHeading() {
    const router = useRouter();
    function addItemToRecentSearch(item) {
        if (localStorage.getItem('recentSearchItems')) {
            let current = localStorage.getItem('recentSearchItems').split(",");
            if (current.length < 5) {
                current.push(item);
                localStorage.setItem('recentSearchItems', current);
            } else {
                current.shift();
                current.push(item);
                localStorage.setItem('recentSearchItems', current);
            }
        } else {
            let current = [];
            current.push(item);
            localStorage.setItem('recentSearchItems', current);
        }
    }
    return (
        <div className="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8 mt-16">
            <div className="relative">
                <div className="sm:text-center">
                    <h2 className="text-3xl font-extrabold text-yellow-600 tracking-tight sm:text-4xl">
                        FOR THE GREATEST BENEFIT TO HUMANKIND
                    </h2>
                    <p className="mt-6 mx-auto max-w-2xl text-lg text-gray-700">
                        Search for the greatest humans in history!
                    </p>
                </div>
                <form action="#" className="mt-12 sm:mx-auto sm:max-w-lg sm:flex" onSubmit={(e) => {
                    let element = document.querySelector('#mainSearch');
                    e.preventDefault();
                    addItemToRecentSearch(element.value);
                    router.push(`/search/${element.value}`);
                    element.value = "";
                }}>
                    <div className="min-w-0 flex-1">
                        <label htmlFor="mainSearch" className="sr-only">
                            Search
                        </label>
                        <input
                            id="mainSearch"
                            type="text"
                            className="block w-full border border-transparent rounded-md px-5 py-3 text-base text-yellow-600 placeholder-gray-500 shadow-sm focus:outline-none focus:border-transparent focus:ring-0 focus:ring-yellow-600 focus:ring-offset-2 focus:ring-offset-yellow-600"
                            placeholder="Search Laureate"
                        />
                    </div>
                    <div className="mt-4 sm:mt-0 sm:ml-3">
                        <button
                            type="submit"
                            className="block w-full rounded-md border border-transparent px-5 py-3 bg-yellow-600 text-base font-medium text-white shadow hover:bg-yellow-700 transition-all duration-150 focus:outline-none focus:ring-2  focus:ring-offset-2 focus:ring-offset-yellow-600 sm:px-10"
                        >
                            Search
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}