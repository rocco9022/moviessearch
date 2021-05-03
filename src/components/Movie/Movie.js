import React from 'react';
import { connect } from 'react-redux';
import { getMovieDetail } from '../../actions/index';


import './Movie.css';

class Movie extends React.Component {


    componentDidMount() {
        const movieId= this.props.match.params.id;
        this.props.getMovie(movieId)
    }

    render() {
        return (
            <div className="movie-detail">
                <h1 className= 'movies'>{this.props.movie.Title}</h1>
                <h4 className= 'movies'>{this.props.movie.Year}</h4>
                <p className= 'movies'> {this.props.movie.Plot}</p>
                {<img className="card" src={this.props.movie.Poster} alt="" />}
            </div>
        );
    }
}


const mapStateToProps = state =>{
    return{
        movie: state.movieDetail
    }
}

const mapDispatchToProps = dispatch =>{
    return{
        getMovie: id => dispatch(getMovieDetail(id))
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Movie);