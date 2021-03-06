export function addMovieFavorite(payload)  {
    return { type: "ADD_MOVIE_FAVORITE", 
    payload 
  }; 

  }
  
  export function getMovies(titulo) {
    return function(dispatch) {
      return fetch(`https://www.omdbapi.com/?apikey=${process.env.REACT_APP_MOVIES_API_KEY}=` + titulo)
        .then(response => response.json())
        .then(json => {
          dispatch({ type: "GET_MOVIES", payload: json });
        });
    };
  }

  export function removeMovieFavorite (payload){
      return { type: "REMOVE_MOVIE_FAVORITE",
      payload
      }
  }

  export function getMovieDetail(id) {
    return function(dispatch) {
      return fetch(`https://www.omdbapi.com/?apikey=${process.env.REACT_APP_MOVIES_API_KEY1}=`+ id)
        .then(response => response.json())
        .then(json => {
          dispatch({ type: "GET_MOVIE_DETAIL", payload: json });
        });
    };
  }

