import Footer from "../Footer/Footer";

import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";

import "./SavedMovies.css";

function SavedMovies() {
  return (
    <>
      <section className="saved-movies">
        <SearchForm />
        <MoviesCardList isSavedLocation={true} />
      </section>
      <Footer />
    </>
  );
}

export default SavedMovies;
