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

export interface FilmLink {
  name: string;
  url: string;
}

export interface HomeworldLink {
  name: string;
  url: string;
}

export interface CharacterCard {
  name: string;
  url: string;
  birth_year: string;
  height: string;
  homeworld: HomeworldLink;
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

export interface Character {
  name: string;
  url: string;
  edited: string;
  created: string;
  homeworld: HomeworldLink;
  films: Array<FilmLink>;
  starships: Array<StarshipLink>;
  vehicles: Array<VehicleLink>;
}
