import "../TopRated/TopRated.css"
import { useState, useEffect } from "react"
import MovieCard from "../MovieCard/MovieCard"


const TopRated = () => {
    const [topRated, setTopRated] = useState([])

    const getTopRated = () => {
        fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=1f8069ed4f38d7cc4488d811853acf0a`)
        .then(data => data.json())
        .then(data => {
            setTopRated([...data.results])
        })
    }

    useEffect(() => {
        getTopRated()
    }, [])

    return (
        <section>
            <p className="text-3xl font-bold text-white p-2">TopRated</p>
            <div className="topRated-movies-container">
                {topRated.map((movie) => {
                    return <MovieCard key={movie.id} id={movie.id} name={movie.title} image={movie.poster_path}/>
                })}
            </div>
        </section>
    )
}

export default TopRated