import Link from 'next/link'
export default function LaureateCard({ title, id, description }) {
    return (
        <li className="col-span-1 bg-white rounded-lg shadow divide-y divide-gray-200">
            <div className="w-full flex items-center justify-between p-6 space-x-6">
                <div className="flex-1">
                    <div className="flex items-center space-x-3">
                        <h3 className="text-gray-900 text-sm font-medium">{title}</h3>
                        <span className="flex-shrink-0 inline-block px-2 py-0.5 text-white text-xs font-medium bg-yellow-600 rounded-full">
                            {id}
                        </span>
                    </div>
                    <p className="mt-1 text-gray-500 text-sm">{description}</p>
                </div>

            </div>
            <div>
                <div className="-mt-px flex divide-x divide-gray-200">
                    <div className="w-0 flex-1 flex">
                        <Link href={`/laureate/${id}`}>
                            <a
                                className="relative -mr-px w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-gray-700 font-medium border border-transparent rounded-bl-lg hover:text-gray-500"
                            >
                                <span className="">Read more</span>
                            </a>
                        </Link>
                    </div>
                </div>
            </div>
        </li>
    )
}