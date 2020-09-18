import React from "react";
import "./Detail.scss";


class MovieDetail extends React.Component{
    componentDidMount() {
        const {location, history } = this.props;
        console.log(location.state);
        if (location.state === undefined) {
            history.push("/");
        }
    }
    com
    render(){
        const {location} = this.props;      
        
        if (location.state) {
            const {
                location: {
                    state: {
                        genres, 
                        poster,
                        summary,
                        title,
                        year
                    }}} = this.props;

            return (
                <div className="movieDetail__container">
                    <div className="movie__poster">
                        <img src={poster} alt={title} />
                    </div>
                    <div className="movie__data">
                        <h3 className="movie__title">{title}</h3>
                        <h5 className="movie__year">{year}</h5>
                        <ul className="movie__genres">
                            {genres.map((genre, idx) => (<li key={idx} className="genres__li">{genre}</li>))}
                        </ul>
                        <p className="movie__summary">{summary}</p>
                    </div>
                </div>
                )
        }
        else{
            return null;
        }
    }
}


export default MovieDetail;