import { useState, useEffect } from 'react'
import NavbarList from './navbarList';
import NavbarRecentSearch from './navbarRecentSearch';
import NavbarSearchBox from './navbarSearchBox';
import Link from 'next/link'
export default function Navbar() {
    const [recentSearchItems, setRecentSearchItems] = useState([])
    function addItemToRecentSearch(item) {
        if (localStorage.getItem('recentSearchItems')) {
            let current = localStorage.getItem('recentSearchItems').split(",");
            if (current.length < 5) {
                current.push(item);
                localStorage.setItem('recentSearchItems', current);
                setRecentSearchItems(current);
            } else {
                current.shift();
                current.push(item);
                localStorage.setItem('recentSearchItems', current);
                setRecentSearchItems(current);
            }
        } else {
            let current = [];
            current.push(item);
            localStorage.setItem('recentSearchItems', current);
            setRecentSearchItems(current);
        }
    }
    useEffect(() => {
        setRecentSearchItems(localStorage.getItem('recentSearchItems').split(","));
    }, [])
    return (
        <div className="flex flex-col flex-grow border-r border-gray-200 pt-5 pb-4 bg-white overflow-y-auto w-64 h-screen">
            <div className="flex items-center flex-shrink-0 px-4">
                <Link href="/"><a className="font-black text-yellow-600 capitalize text-xl">The nobel prize</a></Link>
            </div>
            <div className="mt-5 flex-grow flex flex-col">
                <nav className="flex-1 px-2 space-y-8 bg-white" aria-label="Sidebar">
                    <div className="space-y-1">
                        <NavbarList />
                    </div>
                    <NavbarSearchBox addToLocalStorage={addItemToRecentSearch} />
                    <div className="space-y-1">
                        <h3 className="px-3 text-xs font-semibold text-gray-500 uppercase tracking-wider" id="projects-headline">
                            Recent search
                        </h3>
                        <div className="space-y-1" role="group" aria-labelledby="projects-headline">
                            <NavbarRecentSearch recentSearchItems={recentSearchItems} />
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    )
}