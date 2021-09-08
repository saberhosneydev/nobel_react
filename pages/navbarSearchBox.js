export default function NavbarSearchBox() {
    return (
        <div className="pl-2">
            <label htmlFor="search" className=" block text-sm font-medium text-gray-700">
                Quick search
            </label>
            <div className="mt-1 relative flex items-center">
                <input
                    type="text"
                    name="search"
                    id="search"
                    className="shadow-sm focus:ring-yellow-600 focus:border-yellow-600 block w-full pr-12 sm:text-sm border-gray-300 rounded-md"
                    placeholder="Laureate name"
                />
                <div className="absolute inset-y-0 right-0 flex py-1.5 pr-1.5">
                    <kbd className="inline-flex items-center border border-gray-200 rounded px-2 text-sm font-sans font-medium text-yellow-600">
                        ENTER
                    </kbd>
                </div>
            </div>
        </div>
    )
}