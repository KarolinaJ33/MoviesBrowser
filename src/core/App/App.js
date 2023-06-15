import { HashRouter, Redirect, Route } from 'react-router-dom/cjs/react-router-dom';
import Navigation from '../../common/Navigation';
import { Switch } from 'react-router-dom/cjs/react-router-dom.min';
import { toMovies, toPeople } from './routes';
import MovieList from '../../features/MoviesBrowser/MovieList';
import PeopleList from '../../features/PeopleBrowser/PeopleList';

export const App = () => (
  <HashRouter>
    <Navigation />
    <Switch>
      <Route path={toMovies()}>
        <MovieList />
      </Route>
      <Route path={toPeople()}>
        <PeopleList />
      </Route>
      <Route>
        <Redirect to={toMovies()} />
      </Route>
    </Switch>
  </HashRouter>
);

