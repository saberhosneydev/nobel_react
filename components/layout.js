import Navbar from "./navbar/navbar"

export default function Layout({ children }) {
    return (
        <div className="bg-gray-100 h-screen flex">
            <div className="flex flex-col">
                <Navbar />
            </div>
            <div className="flex-grow overflow-y-scroll">
                {children}
            </div>
        </div>
    )
}