export interface SpecieLink {
  name: string;
  url: string;
}

export interface VehicleLink {
  name: string;
  url: string;
}

export interface StarshipLink {
  name: string;
  url: string;
}

export interface VehicleLink {
  name: string;
  url: string;
}

export interface MovieLink {
  title: string;
  url: string;
}

export interface PlanetLink {
  name: string;
  url: string;
}

export interface CharacterLink {
  name: string;
  url: string;
}

export interface CharacterCard {
  name: string;
  url: string;
  birth_year: string;
  height: string;
  homeworld: PlanetLink;
  species: Array<SpecieLink>;
  vehicles: Array<VehicleLink>;
}

export interface MovieCard {
  title: string;
  url: string;
  director: string;
  release_date: string;
  episode_id: string;
}

export interface PlanetCard {
  name: string;
  url: string;
  rotation_period: string;
  orbital_period: string;
  diameter: string;
  population: string;
}

export interface VehicleCard {
  name: string;
  url: string;
  model: string;
  length: string;
  cost_in_credits: string;
}

export interface SpecieCard {
  name: string;
  url: string;
  language: string;
  designation: string;
  average_height: string;
  classification: string;
}

export interface StarshipCard {
  name: string;
  url: string;
  model: string;
  length: string;
  cost_in_credits: string;
  hyperdrive_rating: string;
}
