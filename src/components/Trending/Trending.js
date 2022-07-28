import "../Trending/Trending.css"
import { useState, useEffect } from "react"
import MovieCard from "../MovieCard/MovieCard"


const Trending = () => {
    const [trending, setTrending] = useState([])

    const getTrending = () => {
        fetch(`https://api.themoviedb.org/3/trending/all/day?api_key=1f8069ed4f38d7cc4488d811853acf0a`)
        .then(data => data.json())
        .then(data => {
            setTrending([...data.results])
        })
    }

    useEffect(() => {
        getTrending()
    }, [])

    return (
        <section>
            <p className="text-3xl font-bold text-white p-2">Most Trending</p>
            <div className="home-movies-container">
                {
                    trending.map((movie) => {
                            console.log(movie)
                            return <MovieCard key={movie.id} id={movie.id} name={movie.original_title} image={movie.poster_path}/>
                    })
                }
            </div>
        </section>
    )
}

export default Trending