import HomeHeading from "./homeHeading"
import HomeThisYear from "./homeThisYear"

export default function Home() {
    return (
        <>
            <HomeHeading />
            <hr className="border-b-2 w-8/12 border-yellow-600 mx-auto my-16" />
            <HomeThisYear />
        </>
    )
}
