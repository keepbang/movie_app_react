import React,{useState, useEffect} from "react";
import axios from 'axios';
import Movie from "../components/Movie";
import "./Home.css";
import loading from '../img/loading.gif'


function Home(props){

  const [isLoading,setIsLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  

  const onPrevPage = () =>{
    if(page > 1){
      setIsLoading(true);
      setPage(page - 1);
    }
    console.log(page);
  }

  const onNextPage = () =>{
    setIsLoading(true);
    setPage(page + 1);
    console.log(page);
  }

  const getMovies = async () => {
    const {data:{ data : {movies}}} = await axios.get('https://yts-proxy.now.sh/list_movies.json?sort_by=rating&page='+page);
    setMovies(movies);
    setIsLoading(false);
  }

  useEffect(() => {
    getMovies();
  }, [page])

    return (
    <section className="container">
      {isLoading 
        ? <div className="loader">
            <img src={loading} alt="loading"/>
          </div>
        : (
          <div className="movies">
            {
              movies.map(movie => {
                return (
                  <Movie
                    key={movie.id}
                    id={movie.id}
                    year={movie.year}
                    title={movie.title}
                    summary={movie.summary}
                    poster={movie.medium_cover_image}
                    genres={movie.genres}
                    />
                )
              })
            }
          </div>
        )
    }
      <div className="btn_area">
            <div onClick={onPrevPage} className="page_btn">Prev</div>
            <div onClick={onNextPage} className="page_btn">Next</div>
      </div>
    </section>
    )
}

export default Home;
