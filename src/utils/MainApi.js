import { MAIN_API_URL } from "./constants";

const checkResponse = (res) => {
  if (res.ok) {
    return res.json();
  } else {
    return Promise.reject(`Ошибка: ${res.status}`);
  }
};

export const register = (name, email, password) => {
  return fetch(`${MAIN_API_URL}/signup`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    credentials: "include",
    body: JSON.stringify({ name, email, password }),
  }).then((res) => checkResponse(res));
};

export const login = (email, password) => {
  return fetch(`${MAIN_API_URL}/signin`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
    body: JSON.stringify({ email, password }),
  }).then((res) => {
    checkResponse(res);
  });
};

export const signOut = () => {
  return fetch(`${MAIN_API_URL}/signout`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
  }).then((res) => {
    checkResponse(res);
  });
};

export const getUserInfo = () => {
  return fetch(`${MAIN_API_URL}/users/me`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
  }).then((res) => checkResponse(res));
};

export const setUserInfo = (data) => {
  return fetch(`${MAIN_API_URL}/users/me`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
    body: JSON.stringify({
      name: data.name,
      email: data.email,
    }),
  }).then((res) => checkResponse(res));
};

export const getMovies = () => {
  return fetch(`${MAIN_API_URL}/movies`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    credentials: "include",
  }).then((res) => checkResponse(res));
};

export const postMovie = (data) => {
  return fetch(`${MAIN_API_URL}/movies`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
    body: JSON.stringify({
      country: data.country,
      director: data.director,
      duration: data.duration,
      year: data.year,
      description: data.description,
      image: "https://api.nomoreparties.co" + data.image.url,
      trailerLink: data.trailerLink,
      thumbnail:
        "https://api.nomoreparties.co" + data.image.formats.thumbnail.url,
      movieId: data.id,
      nameRU: data.nameRU,
      nameEN: data.nameEN,
    }),
  }).then((res) => checkResponse(res));
};

export const deleteMovie = (movieId) => {
  return fetch(`${MAIN_API_URL}/movies/${movieId}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
  }).then((res) => checkResponse(res));
};
