import { all } from "redux-saga/effects";
import { PopularMoviesSaga } from "../../features/MoviesBrowser/MovieList/popularMoviesSaga";
import { genresSaga } from "../../features/MoviesBrowser/Genres/genresSaga"
import { popularPeopleSaga } from "../../features/PeopleBrowser/PeopleList/popularPeopleSaga";
import { movieDetailsSaga } from "../../features/MoviesBrowser/MovieDetails/movieDetailsSaga";
import { personDetailsSaga } from "../../features/PeopleBrowser/PersonPage/PersonSaga"

export default function* rootSaga() {
  yield all([
    PopularMoviesSaga(), 
    genresSaga(),
    popularPeopleSaga(),
    movieDetailsSaga(),
    personDetailsSaga(),
  ]);
}