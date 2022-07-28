import "../Popular/Popular.css"
import { useState, useEffect } from "react"
import MovieCard from "../MovieCard/MovieCard"


const Popular = () => {
    const [popular, setPopular] = useState([])

    const getPopular = () => {
        fetch(`https://api.themoviedb.org/3/movie/popular?api_key=1f8069ed4f38d7cc4488d811853acf0a`)
        .then(data => data.json())
        .then(data => {
            setPopular([...data.results])
        })
    }

    useEffect(() => {
        getPopular()
    }, [])

    return (
        <section>
            <p className="text-3xl font-bold text-white p-2">Popular Movies</p>
            <div className="popular-movies-container">
                {popular.map((movie) => {
                    return <MovieCard key={movie.id} id={movie.id} name={movie.original_title} image={movie.poster_path}/>
                })}
            </div>
        </section>
    )
}

export default Popular