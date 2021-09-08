import HomeHeading from "./homeHeading"
import HomeThisYear from "./homeThisYear"
import Navbar from "./navbar"
export default function Home() {
    return (
        <div className="bg-gray-100 h-screen flex">
            <div className="flex flex-col w-64">
                <Navbar />
            </div>
            <div className="flex-grow overflow-y-scroll">
                <HomeHeading />
                <hr className="border-b-2 w-8/12 border-yellow-600 mx-auto my-16" />
                <HomeThisYear />
            </div>
        </div>
    )
}
