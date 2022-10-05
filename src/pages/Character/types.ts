import { HomeworldLink, MovieLink, SpecieLink, StarshipLink, VehicleLink } from '~/utils/types';

export interface Character {
  name: string;
  url: string;
  edited: string;
  created: string;
  mass: string;
  gender: string;
  eye_color: string;
  hair_color: string;
  skin_color: string;
  birth_year: string;
  height: string;
  species: SpecieLink[];
  films: MovieLink[];
  homeworld: HomeworldLink;
  starships: StarshipLink[];
  vehicles: VehicleLink[];
}

export interface CharacterRequest {
  name: string;
  url: string;
  edited: string;
  created: string;
  mass: string;
  gender: string;
  eye_color: string;
  hair_color: string;
  skin_color: string;
  birth_year: string;
  height: string;
  homeworld: string;
  films: string[];
  species: string[];
  vehicles: string[];
  starships: string[];
}
