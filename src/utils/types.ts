export interface SpecieLink {
  name: string;
  url: string;
}

export interface VehicleLink {
  name: string;
  url: string;
}

export interface HomeworldLink {
  name: string;
  url: string;
}

export interface Character {
  name: string;
  url: string;
  birth_year: string;
  height: string;
  homeworld: HomeworldLink;
  species: Array<SpecieLink>;
  vehicles: Array<VehicleLink>;
}
