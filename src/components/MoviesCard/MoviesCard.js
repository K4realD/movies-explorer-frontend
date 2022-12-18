import "./MoviesCard.css";

function MoviesCard({ name, duration, isSaved, image, isSavedLocation }) {
  return (
    <li className="movie-card">
      <div className="movie-card__container">
        <div className="movie-card__info">
          <h3 className="movie-card__title">{name}</h3>
          <p className="movie-card__time">{duration}</p>
        </div>
        <button
          type="button"
          className={`movie-card__save ${
            isSavedLocation
              ? "movie-card__save_delete"
              : isSaved
              ? "movie-card__save_active"
              : "movie-card__save_inactive"
          }`}
        ></button>
      </div>
      <img className="movie-card__image" src={image} alt={name} />
    </li>
  );
}

export default MoviesCard;
