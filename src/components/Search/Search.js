import "./Search.css"
import { useState } from "react"
import { Link } from "react-router-dom"
// import MovieCard from "../MovieCard/MovieCard"

const Search = () => {
    const [query, setQuery] = useState('')
    const [searchValue, setSearchValue] = useState('')

    const search = () => {
        setQuery(document.getElementById('search').value)
        // console.log(query)
        fetchSearch()
    }

    const fetchSearch = () => {
        fetch(`https://api.themoviedb.org/3/search/multi?api_key=1f8069ed4f38d7cc4488d811853acf0a&language=en-US&query=${query}&page=1&include_adult=false`)
        .then(data => data.json())
        .then(data => {
            setSearchValue(data)
        })
    }

    // useEffect(() => {
    //     fetchSearch()
    // }, []);

    return (
        <div className="m-auto">
            <input className="search-input" id="search" onChange={() => search()} placeholder=" Search"></input>
            <div className={query !== '' ? 'search-dropdown' : 'hidden'}>
                {
                    searchValue.results ? 
                    searchValue.results.map((result) => {  
                        if (result.media_type === "person") {
                            return (
                                <Link to={`/details/${result.id}`}>
                                    <div key={result.id} className="flex mt-4">
                                        <img src="https://img.icons8.com/pastel-glyph/344/person-male--v3.png" width="30px" alt="person-icon"/>
                                        <p className="search-result">{result.name}</p>    
                                    </div>
                                </Link>
                            )
                        } else if (result.media_type === "movie") {  
                            return (
                                    <Link to={`/details/${result.id}`}>
                                        <div key={result.id} className="flex mt-4">
                                            <img src="https://img.icons8.com/ios-glyphs/344/movie--v1.png" width="30px" alt="film-icon"/>
                                            <p className="search-result">{result.title}</p>
                                        </div>
                                    </Link>
                                )
                        } else {
                            return (
                                <Link to={`/details/${result.id}`}>
                                    <div key={result.id} className="flex mt-4">
                                        <img src="https://img.icons8.com/ios-filled/344/retro-tv.png" width="30px" alt="film-icon"/>
                                        <p className="search-result">{result.name}</p>
                                    </div>
                                </Link>
                            )
                        }
                        
                        //return <MovieCard key={result.id} id={result.id} name={result.original_title} image={result.poster_path}/>
                    })
                    :
                    <div className="hidden"></div>
                }
            </div>
        </div>
    )
}

export default Search