import Link from 'next/link'
export default function NavbarRecentSearch({ recentSearchItems }) {
    return (
        <>
            {recentSearchItems.length > 0 ? recentSearchItems.map((item, index) => (
                <Link key={index}
                    href={`/search/${item}`} >
                    <a

                        className="group flex items-center px-3 py-2 text-sm font-medium text-gray-600 rounded-md hover:text-gray-900 hover:bg-gray-50"
                    >
                        <span className="truncate">{item}</span>
                    </a>
                </Link>
            )) : <p className="px-3 py-2 text-sm italic text-gray-600">None</p>}
        </>
    )
}