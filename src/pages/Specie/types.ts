import { MovieLink, CharacterLink, HomeworldLink } from '~/utils/types';

export interface Specie {
  url: string;
  name: string;
  edited: string;
  created: string;
  classification: string;
  designation: string;
  average_height: string;
  skin_colors: string;
  hair_colors: string;
  eye_colors: string;
  average_lifespan: string;
  language: string;
  homeworld: HomeworldLink;
  films: MovieLink[];
  people: CharacterLink[];
}

export interface SpecieRequest {
  url: string;
  name: string;
  edited: string;
  created: string;
  classification: string;
  designation: string;
  average_height: string;
  skin_colors: string;
  hair_colors: string;
  eye_colors: string;
  average_lifespan: string;
  language: string;
  homeworld: string;
  films: string[];
  people: string[];
}
