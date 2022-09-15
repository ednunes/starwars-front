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
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
