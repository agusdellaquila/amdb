import "../Home/Home.css"
import Trending from "../Trending/Trending"
import Search from "../Search/Search"
import Popular from "../Popular/Popular"
import Upcoming from "../Upcoming/Upcoming"
import TopRated from "../TopRated/TopRated"

const Home = () => {
    return (
        <div>
            <div className="flex justify-around align-center mt-4 mb-4 mr-10">
                <Search/>
                <a href="/">
                    <img className="logo" src="/amdb-logo.png" />
                </a>
            </div>
            <div className="ml-2">
                {/* <Search/> */}
                <Trending/>
                <Popular/>
                <Upcoming/>
                <TopRated/>
            </div>
        </div>
    )
}

export default Home