import React, { Component } from "react";
import { removeMovieFavorite } from "../../actions";
import { connect } from "react-redux";
//import { removeMovieFavorite } from "../../actions/index";
import { Link } from 'react-router-dom';
import './Favorites.css';

export class ConnectedList extends Component {

  render() {
    return (
      <div>
        <h2 className= 'favoritas'>Películas Favoritas</h2>
        <ul>
          {
          this.props.movies && this.props.movies.map(el => (
            <div>
            <h4 className= 'title'> {el.title} </h4>
            <button onClick={() => this.props.removeMovie({title: el.title, id: el.imbdID})} className= 'buttonclose'> X</button>
            </div>
          ))
          }
        </ul>
      </div>
    );
  }
} 

function mapStateToProps (state){
  return{
    movies: state.movies
  }
}

function  mapDispatchToProps (dispatch){
  return{
    removeMovie: movie => dispatch (removeMovieFavorite(movie))
  }
}


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ConnectedList);
