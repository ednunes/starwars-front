import { MovieLink, CharacterLink } from '~/utils/types';

export interface Vehicle {
  url: string;
  name: string;
  edited: string;
  vehicle_class: string;
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

export interface VehicleRequest {
  url: string;
  name: string;
  edited: string;
  created: string;
  vehicle_class: string;
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
