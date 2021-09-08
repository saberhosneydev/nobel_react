export default function NavbarList({ navigation, handleNavigation, classNames }) {

    return (
        <>
            {navigation.map((item) => (
                <a
                    key={item.name}
                    href={item.href}
                    className={classNames(
                        item.current ? 'bg-gray-100 text-gray-900' : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900',
                        'group flex items-center px-2 py-2 text-sm font-medium rounded-md'
                    )}
                    onClick={() => {
                        handleNavigation(item.id);
                    }}
                >
                    <item.icon
                        className={classNames(
                            item.current ? 'text-yellow-600' : 'text-gray-500 group-hover:text-gray-600',
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