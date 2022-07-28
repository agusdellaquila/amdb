import "./Upcoming.css"
import { useState, useEffect } from "react"
import MovieCard from "../MovieCard/MovieCard"


const Upcoming = () => {
    const [upcoming, setUpcoming] = useState([])

    const getUpcoming = () => {
        fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=1f8069ed4f38d7cc4488d811853acf0a`)
        .then(data => data.json())
        .then(data => {
            setUpcoming([...data.results])
        })
    }

    useEffect(() => {
        getUpcoming()
    }, [])

    return (
        <section>
            <p className="text-3xl font-bold text-white p-2">Upcoming</p>
            <div className="home-movies-container">
                {upcoming.map((movie) => {
                    return <MovieCard key={movie.id} id={movie.id} name={movie.original_title} image={movie.poster_path}/>
                })}
            </div>
        </section>
    )
}

export default Upcoming