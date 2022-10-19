import { PlanetLink, CharacterLink, SpecieLink, StarshipLink, VehicleLink } from '~/utils/types';

export interface Movie {
  url: string;
  title: string;
  edited: string;
  created: string;
  director: string;
  producer: string;
  episode_id: string;
  release_date: string;
  opening_crawl: string;

  species: SpecieLink[];
  planets: PlanetLink[];
  starships: StarshipLink[];
  vehicles: VehicleLink[];
  characters: CharacterLink[];
}

export interface MovieRequest {
  url: string;
  title: string;
  edited: string;
  created: string;
  director: string;
  producer: string;
  episode_id: string;
  release_date: string;
  opening_crawl: string;

  species: SpecieLink[];
  planets: PlanetLink[];
  starships: StarshipLink[];
  vehicles: VehicleLink[];
  characters: CharacterLink[];
}
