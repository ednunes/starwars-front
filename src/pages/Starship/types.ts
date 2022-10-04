import { MovieLink, CharacterLink } from '~/utils/types';

export interface Starship {
  url: string;
  name: string;
  edited: string;
  created: string;
  MGLT: string;
  model: string;
  consumables: string;
  cost_in_credits: string;
  max_atmosphering_speed: string;
  crew: string;
  passengers: string;
  manufacturer: string;
  hyperdrive_rating: string;
  length: string;
  cargo_capacity: string;
  films: MovieLink[];
  pilots: CharacterLink[];
}

export interface StarshipRequest {
  url: string;
  name: string;
  edited: string;
  created: string;
  MGLT: string;
  model: string;
  consumables: string;
  cost_in_credits: string;
  max_atmosphering_speed: string;
  crew: string;
  passengers: string;
  manufacturer: string;
  hyperdrive_rating: string;
  length: string;
  cargo_capacity: string;
  films: string;
  pilots: string;
}
