import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ErrorPage404 from './pages/ErrorPage404';
import CharactersPage from './pages/Characters';
import MoviesPage from './pages/Movies';
import PlanetsPage from './pages/Planets';
import StarshipsPage from './pages/Starships';
import SpeciesPage from './pages/Species';
import VehiclesPage from './pages/Vehicles';
import MoviePage from './pages/Movie';
import CharacterPage from './pages/Character';
import PlanetPage from './pages/Planet';
import StarshipPage from './pages/Starship';
import SpeciePage from './pages/Specie';
import VehiclePage from './pages/Vehicle';
import Loading from './components/Loading';
import './i18n';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage404 />,
    children: [
      {
        element: <MoviesPage />,
        path: 'movies/',
      },
      {
        element: <PlanetsPage />,
        path: 'planets/',
      },
      {
        element: <StarshipsPage />,
        path: 'starships/',
      },
      {
        element: <SpeciesPage />,
        path: 'species/',
      },
      {
        element: <CharactersPage />,
        path: 'characters/',
      },
      {
        element: <VehiclesPage />,
        path: 'vehicles/',
      },
      {
        element: <MoviePage />,
        path: 'movies/:movieId',
      },
      {
        element: <CharacterPage />,
        path: 'characters/:characterId',
      },
      {
        element: <PlanetPage />,
        path: 'planets/:planetId',
      },
      {
        element: <StarshipPage />,
        path: 'starships/:starshipId',
      },
      {
        element: <SpeciePage />,
        path: 'species/:specieId',
      },
      {
        element: <VehiclePage />,
        path: 'vehicles/:vehicleId',
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <React.Suspense fallback={<Loading />}>
      <RouterProvider router={router} />
    </React.Suspense>
  </React.StrictMode>,
);
