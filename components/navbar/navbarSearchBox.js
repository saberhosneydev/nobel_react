import axios from 'axios';
import { useRouter } from 'next/router'
export default function NavbarSearchBox({ addToLocalStorage }) {
    const router = useRouter();
    return (
        <div className="pl-2">
            <label htmlFor="search" className=" block text-sm font-medium text-gray-700 mb-3">
                Quick search
            </label>
            <div className="mt-1 relative flex items-center">
                <form action="#" method="post" onSubmit={(e) => {
                    let element = document.querySelector('#search');
                    e.preventDefault();
                    addToLocalStorage(element.value);
                    router.push(`/search/${element.value}`);
                    element.value = "";
                }}>
                    <input
                        type="text"
                        name="search"
                        id="search"
                        className="shadow-sm focus:ring-yellow-600 focus:border-yellow-600 block w-full pr-16 sm:text-sm border-gray-300 rounded-md"
                        placeholder="Laureate name"
                    />
                </form>
                <div className="absolute inset-y-0 right-0 flex py-1.5 pr-2">
                    <kbd className="inline-flex items-center border border-gray-200 rounded px-2 text-sm font-sans font-medium text-yellow-600">
                        ENTER
                    </kbd>
                </div>
            </div>
        </div>
    )
}