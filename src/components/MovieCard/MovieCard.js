import "../MovieCard/MovieCard.css"
import { Link } from 'react-router-dom'

const MovieCard = ({id, name, image}) => {
    return (
        <section>
            <Link to={`/details/${id}`}>
                <div className="card-container">
                    <img src={`https://image.tmdb.org/t/p/w185${image}`} alt={`${name} image`}/>
                </div>
            </Link>
        </section>
    )
}

export default MovieCard