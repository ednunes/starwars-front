import { MovieLink, CharacterLink } from '~/utils/types';

export interface Planet {
  url: string;
  name: string;
  edited: string;
  climate: string;
  gravity: string;
  terrain: string;
  created: string;
  diameter: string;
  population: string;
  surface_water: string;
  orbital_period: string;
  rotation_period: string;
  films: MovieLink[];
  residents: CharacterLink[];
}

export interface PlanetRequest {
  url: string;
  name: string;
  edited: string;
  climate: string;
  gravity: string;
  terrain: string;
  created: string;
  diameter: number;
  population: string;
  surface_water: string;
  orbital_period: string;
  rotation_period: string;
  films: string[];
  residents: string[];
}
