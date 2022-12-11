import MoviesCard from "../MoviesCard/MoviesCard";

import { defaultMovies } from "../../utils/constants";

import "./MoviesCardList.css";

function MoviesCardList({ isSavedLocation }) {
  return (
    <ul className="movies__list">
      {defaultMovies.map((movie) => {
        return !isSavedLocation ? (
          <MoviesCard
            key={movie.id}
            name={movie.title}
            duration={movie.duration}
            image={movie.image}
            isSaved={movie.saved}
            isSavedLocation={isSavedLocation}
          />
        ) : (
          movie.saved === true && 
          <MoviesCard
            key={movie.id}
            name={movie.title}
            duration={movie.duration}
            image={movie.image}
            isSavedLocation={isSavedLocation}
          />
        );
      })}
    </ul>
  );
}

export default MoviesCardList;
