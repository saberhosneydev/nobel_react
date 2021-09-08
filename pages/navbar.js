/* This example requires Tailwind CSS v2.0+ */
import { InformationCircleIcon, HomeIcon, SearchIcon, UserIcon } from '@heroicons/react/outline'
import { useState } from 'react'
import NavbarList from './navbarList';
import NavbarRecentSearch from './navbarRecentSearch';
import NavbarSearchBox from './navbarSearchBox';
export default function Navbar() {
    const [navigation, setNavigation] = useState([
        { name: 'Home', icon: HomeIcon, href: '/', id: 0, current: true },
        { name: 'Laureates', icon: UserIcon, href: '#', id: 1, current: false },
        { name: 'Advanced Search', icon: SearchIcon, href: '#', id: 2, current: false },
        { name: 'About', icon: InformationCircleIcon, href: '#', id: 3, current: false },
    ])
    const [recentSearchItems, setRecentSearchItems] = useState([])
    function handleNavigation(id) {
        let newNavigation = navigation.map(nav => {
            if (nav.id == id) {
                nav.current = true;
            } else {
                nav.current = false;
            }
            return nav;
        });
        setNavigation(newNavigation);
    }
    function classNames(...classes) {
        return classes.filter(Boolean).join(' ')
    }
    return (
        <div className="flex flex-col flex-grow border-r border-gray-200 pt-5 pb-4 bg-white overflow-y-auto w-64 h-screen">
            <div className="flex items-center flex-shrink-0 px-4">
                <h1 className="font-black text-yellow-600 capitalize text-xl">The nobel prize</h1>
            </div>
            <div className="mt-5 flex-grow flex flex-col">
                <nav className="flex-1 px-2 space-y-8 bg-white" aria-label="Sidebar">
                    <div className="space-y-1">
                        <NavbarList navigation={navigation} handleNavigation={handleNavigation} classNames={classNames} />
                    </div>
                    <NavbarSearchBox />
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