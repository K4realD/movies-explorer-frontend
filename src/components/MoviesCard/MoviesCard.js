import Link from "../UI/Link/Link";

import "./MoviesCard.css";

function MoviesCard({
  isSaved,
  isSavedLocation,
  movie,
  handleMovieLike,
  handleMovieDelete,
  savedMovies,
}) {
  const durationRecount = (duration) => {
    const hours = Math.floor(duration / 60);
    const minutes = duration % 60;
    return `${hours}ч${minutes}м`;
  };

  const toggleMovieLike = () => {
    if (isSaved) {
      handleMovieDelete(
        savedMovies.filter((item) => item.movieId === movie.id)[0]
      );
    } else {
      handleMovieLike(movie);
    }
  };

  const deleteMovie = () => {
    handleMovieDelete(movie);
  };

  return (
    <li className="movie-card">
      <div className="movie-card__container">
        <div className="movie-card__info">
          <h3 className="movie-card__title">{movie.nameRU}</h3>
          <p className="movie-card__time">{durationRecount(movie.duration)}</p>
        </div>
        {isSavedLocation ? (
          <button
            type="button"
            className="movie-card__save movie-card__save_delete"
            onClick={deleteMovie}
          ></button>
        ) : (
          <button
            type="button"
            className={`movie-card__save ${
              isSaved ? "movie-card__save_active" : "movie-card__save_inactive"
            }`}
            onClick={toggleMovieLike}
          ></button>
        )}
      </div>
      <Link isRouterLink={false} to={movie.trailerLink}>
        <img
          className="movie-card__image"
          src={
            isSavedLocation
              ? movie.image
              : `https://api.nomoreparties.co/${movie.image.url}`
          }
          alt={movie.name}
        />
      </Link>
    </li>
  );
}

export default MoviesCard;
