import React from "react";
import { Card } from "@material-ui/core";
import styles from "./favoriteMovie.module.css";
import { Link } from "react-router-dom";
import CONSTANTS from "../../utils/globalConstants";
import API from "../../utils/dataHelper";
import { connect } from "react-redux";

class FavoriteMovie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: {},
      posterPath: "",
      movieId: props.movieId,
      language:props.language
    };
  }
  componentDidMount() {
    API.getMovieById(this.state.movieId).then((data) => {
      this.setState({
         movie: data,
         posterPath: data.poster_path === null ? CONSTANTS.DEFAULT_IMAGE_URL : CONSTANTS.IMAGE_URL + data.poster_path
        });
    });
  }
  componentDidUpdate(){
    if(this.state.language !== this.props.language){
      API.getMovieById(this.state.movieId).then((data) => {
        this.setState({
           movie: data,
           posterPath: data.poster_path === null ? CONSTANTS.DEFAULT_IMAGE_URL : CONSTANTS.IMAGE_URL + data.poster_path,
           language: this.props.language, 
          });
      });
    }
    else{
    }
  }
  render() {
    return (
      <Link to={`/movies/${this.state.movie.id}`}>
        <Card className={styles["favorite-movie"]}>
          <img
            src={this.state.posterPath}
            alt="movie"
            width="250"
            height="300"
          ></img>
        </Card>
      </Link>
    );
  }
}


const mapStateToProps = (state) => {
  return {
    language:state.language
  };
};


export default connect(mapStateToProps)(FavoriteMovie);
