import "../MovieDetails/MovieDetails.css"
import { useState, useEffect } from "react"
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import Loading from "../Loading/Loading"

const MovieDetails = () => {
    const { id } = useParams()
    const [details, setDetails] = useState([])
    // const [providers, setProviders] = useState([])

    useEffect(() => {
        const getData = () => {
            fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=1f8069ed4f38d7cc4488d811853acf0a`)
            .then(data => data.json())
            .then(data => {
                setDetails(data)
            })
    
            // fetch(`https://api.themoviedb.org/3/movie/${id}/watch/providers?api_key=1f8069ed4f38d7cc4488d811853acf0a`)
            // .then(data => data.json())
            // .then(data => {
            //     console.log(data)
            //     setProviders([data.results])
            // })
        }
        getData()
    }, [])

    return (
        <section>
            <div className="info-back-tab">
                <Link to={`/`}>
                    <p className="info-back-button">BACK</p>
                </Link>
            </div>
            <div className="details-movies-container">
                <img className="cover-image" src={`https://image.tmdb.org/t/p/w400${details.poster_path}`} alt={`${details.title}`}/>
                <div className="info-container-background">
                    <div className="info-container">
                        <p className="info-title">{details.title}</p>

                        <p className="info-tagline font-semibold"> "{details.tagline}" </p>

                        <section className="info-quick-glance">
                            <div className="info-quick-glance-item">
                                <img src="../images/duration-icon.png" alt="duration-icon"/>
                                <p className="info-quick-glance-item-p">{details.runtime}min</p>
                            </div>
                            <div className="info-quick-glance-item">
                                <img src="../images/rating-icon.png" alt="rating-icon"/>
                                <p className="info-quick-glance-item-p">{details.vote_average}</p>
                            </div>
                        </section>

                        <p className="info-overview font-semibold">{details.overview}</p>
                        
                        <section>
                            <p className="info-subheading">FIND IT ON</p>
                            {/* {console.log(providers)}
                            {
                                providers ? 
                                providers.map((provider) => {                
                                    return <p key={provider} className="info-category">{provider.PL.link}</p>
                                })
                                :
                                <Loading/>
                            } */}
                        </section>

                        <section>
                            <p className="info-subheading">CATEGORIES</p>
                            <div className="info-categories">
                                {
                                details.genres ? 
                                details.genres.map((genre) => {                
                                    return <p key={genre.name} className="info-category">{genre.name}</p>
                                })
                                :
                                <Loading/>
                                }
                            </div>
                        </section>

                        <div className="flex justify-between">
                            <p className="info-subheading">RELEASE DATE <span>{details.release_date}</span></p>
                            <p className="info-subheading"> WEBSITE <a className="" href={details.homepage}> <span className=""> 🌐 </span> </a> </p>
                        </div>
                        
                        <div className="flex justify-between">
                            <p className="info-subheading"> BUDGET: <span>{details.budget}</span></p>
                            <p className="info-subheading"> REVENUE: <span>{details.revenue}</span></p>
                        </div>

                        <div className="info-button">
                            <a href="/" className="info-button-link">
                                <p className="info-button-text">WATCH NOW</p>
                            </a>
                        </div>


                        {/* <div>
                            Production companies:
                            {
                                details.production_companies.map((company) => {
                                    return <section>
                                        <p>{company.name}</p>
                                        <img src={`https://image.tmdb.org/t/p/w185${company.logo_path}`}/>
                                    </section>
                                })
                            }
                        </div>
                        <div>
                            Production Countries:
                            {
                                details.production_countries.map((country) => {
                                    return <div>{country.name} ({country.iso_3166_1})</div>
                                })
                            }
                        </div> */}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default MovieDetails