# Movie App React

React JS Movie App Project

## Used Tech 💻
- React(react-router-dom)
- sass
- axios

## Page 🎇
- [https://keepbang.github.io/movie_app_react/](https://keepbang.github.io/movie_app_react/)

# Preview

## Screenshots 📸

### Home
![Image](https://user-images.githubusercontent.com/38740455/96079487-db0d8100-0eef-11eb-854f-2012887104b9.png)

### About
![Image](https://user-images.githubusercontent.com/38740455/96079587-13ad5a80-0ef0-11eb-810a-07a93d7298fc.png)

### Change page code
[Home.js](https://github.com/keepbang/movie_app_react/blob/master/src/routes/Home.js)
```
   .....
   const [page, setPage] = useState(1);
  

  const onPrevPage = () =>{
    if(page > 1){
      setIsLoading(true);
      setPage(page - 1);
    }
  }

  const onNextPage = () =>{
    setIsLoading(true);
    setPage(page + 1);
  }

  const getMovies = async () => {
    const {data:{ data : {movies}}} = await axios.get('https://yts-proxy.now.sh/list_movies.json?sort_by=rating&page='+page);
    setMovies(movies);
    setIsLoading(false);
  }

  useEffect(() => {
    getMovies();
  }, [page])
  .....
```
