import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import {addMovieFavorite, getMovies, getMovieDetail} from '../../actions/index'
import './Buscador.css';



 class Buscador extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: ""
    };
  }
  handleChange(event) {
    this.setState({ title: event.target.value });
  }
  handleSubmit(event) {
    event.preventDefault();
    this.props.getMovies(this.state.title)
  }

  render() {
    const { title } = this.state;
    return (
      <div className= 'div'>
        <h2 className= 'title'>Buscador</h2>
        <form className="form-container" onSubmit={(e) => this.handleSubmit(e)}>
          <div>
            <label className="label" htmlFor="title">Película: </label>
            <input
              type="text"
              id="title"
              autoComplete="off"
              value={title}
              onChange={(e) => this.handleChange(e)}
            />
          </div>
          <button type="submit" className= 'button'>BUSCAR</button>
        </form>
        <ul>
         {
         this.props.movies && this.props.movies.map(el=>(
           <div>
             <Link to={`/movie/${el.imdbID}`}className= 'linkk' >{el.Title}</Link>
             <button  onClick =  {()   =>  this.props.addMovieFavorite({title: el.Title, id: el.imdbID })}  className= 'buttons'>Fav</button>
             
           </div>
         ))
         }
        </ul>
      </div>
    )
  }
}


function mapStateToProps(state) {

  return {
    movies: state.moviesLoaded
  };
}

function mapDispatchToProps(dispatch) {
  
  return {
    
    addMovieFavorite: movie => dispatch(addMovieFavorite(movie)), 
    getMovies: title => dispatch(getMovies(title))
    
  };
}


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Buscador);

