import { useRouter } from "next/router";
import { InformationCircleIcon, HomeIcon, SearchIcon, UsersIcon } from '@heroicons/react/outline'

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}
export default function NavbarList() {
    const router = useRouter();
    const navigation = [
        { name: 'Home', icon: HomeIcon, href: '/', id: 0 },
        { name: 'Laureates', icon: UsersIcon, href: '#', id: 1 },
        { name: 'Advanced Search', icon: SearchIcon, href: '#', id: 2 },
        { name: 'About', icon: InformationCircleIcon, href: '/about', id: 3 },
    ]
    return (
        <>
            {navigation.map((item) => (
                <a
                    key={item.name}
                    href={item.href}
                    className={classNames(
                        (router.pathname == item.href) ? 'bg-gray-100 text-gray-900' : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900',
                        'group flex items-center px-2 py-2 text-sm font-medium rounded-md'
                    )}
                >
                    <item.icon
                        className={classNames(
                            (router.pathname == item.href) ? 'text-yellow-600' : 'text-gray-500 group-hover:text-gray-600',
                            'mr-3 flex-shrink-0 h-6 w-6'
                        )}
                        aria-hidden="true"
                    />
                    {item.name}
                </a>
            ))}
        </>
    )
}