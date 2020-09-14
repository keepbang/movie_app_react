import React from 'react'
import PropTypes from 'prop-types';
import './Movie.css'

function Movie({year,title,summary, poster, genres}){
    return <div className="movie">
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
            <p className="movie_summary">{summary.slice(0,300)}...</p>
        </div>
    </div>
}

Movie.propTypes = {
    year: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default Movie;