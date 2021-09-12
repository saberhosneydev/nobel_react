import HomeHeading from "./homeHeading"
import RecentWinners from "./recentWinners"
import nobelPrizes from '../data/nobelPrizes.json'
export default function Home({ prizes }) {
    return (
        <>
            <HomeHeading />
            <hr className="border-b-2 w-8/12 border-yellow-600 mx-auto my-16" />
            <RecentWinners nobelPrizes={prizes} />
        </>
    )
}

export async function getStaticProps() {
    let data = nobelPrizes.nobelPrizes;
    return {
        props: { prizes: data },
    }
}