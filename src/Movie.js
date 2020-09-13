import React from 'react'
import PropTypes from 'prop-types';
import './Movie.css'

function Movie({year,title,summary, poster}){
    return <div className="movie">
        <div className="movie_data">
            <img src={poster} alt={title} title={title}/>
            <h3 className="movie_title">{title}</h3>
            <h5 className="movie_year">{year}</h5>
            <p className="movie_summary">{summary}</p>
        </div>
    </div>
}

Movie.propTypes = {
    year: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired
}

export default Movie;