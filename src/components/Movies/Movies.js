import Footer from "../Footer/Footer";

import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";

import "./Movies.css";

function Movies() {
  return (
    <>
      <section className="movies">
        <SearchForm />
        <MoviesCardList isSavedLocation={false}/>
        <div className="movies__more">
          <button type="button" className="movies__more-btn">
            Ещё
          </button>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Movies;
