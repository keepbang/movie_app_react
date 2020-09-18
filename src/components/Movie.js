import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import './Movie.css'

function Movie({id,year,title,summary, poster, genres}){
    return (
        <Link to={{
            pathname:`/movie/${id}`,
            state: {
                year,
                title,
                summary,
                poster,
                genres
            }
        }}>
            <div className="movie">
                <img src={poster} alt={title} title={title}/>
                <div className="movie_data">
                    <h3 className="movie_title">{title}</h3>
                    <h5 className="movie_year">(Since : {year})</h5>
                    <div className="movie_genres">
                        {genres.map((genre,i) => {
                            return <span key={i} className="genres_text">{genre}
                                {genres.length-1 > i?" / ":""}</span>
                        })}
                    </div>
                    <p className="movie_summary">{summary.slice(0,200)}...</p>
                </div>
            </div>
        </Link>
    )
}

Movie.propTypes = {
    year: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default Movie;