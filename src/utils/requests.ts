import axios from 'axios';
import {
  convertToKm,
  formatHeight,
  formatNumber,
  getFormattedDate,
  getFormattedDateTime,
} from './utils';

export function expandList(list: any, attributes_list: any = []) {
  const promises = list.map((resource: string) => {
    const promise = axios.get(resource).then((response) => {
      let expanded_data = response.data.name;
      if (attributes_list.length) {
        expanded_data = attributes_list.reduce((acc: any, item: any) => {
          return { ...acc, [item]: response.data[item] };
        }, {});
      }
      return expanded_data;
    });
    return promise;
  });
  return promises;
}

export async function expandLink(resource: string) {
  return axios
    .get(resource)
    .then((response) => ({ name: response.data.name, url: response.data.url }));
}

export async function getCharacterList(characters: any) {
  const expanded_results_promise = characters.results.map(async (character: any) => {
    const new_character = {
      url: character.url,
      name: character.name,
      birth_year: character.birth_year,
      height: formatHeight(character.height),
      homeworld: await expandLink(character.homeworld),
      species: await Promise.all(expandList(character.species)),
      vehicles: await Promise.all(expandList(character.vehicles)),
    };
    return new_character;
  });

  const character_list = {
    count: characters.count,
    next: characters.next,
    previous: characters.previous,
    results: await Promise.all(expanded_results_promise),
  };

  return character_list;
}

export async function getMovieList(movies: any) {
  const expanded_results_promise = movies.results.map((movie: any) => {
    const new_movie = {
      url: movie.url,
      title: movie.title,
      director: movie.director,
      episode_id: movie.episode_id,
      release_date: getFormattedDate(movie.release_date),
    };
    return new_movie;
  });

  const movie_list = {
    count: movies.count,
    next: movies.next,
    previous: movies.previous,
    results: expanded_results_promise,
  };

  return movie_list;
}

export async function getPlanetList(planets: any) {
  const expanded_results_promise = planets.results.map((planet: any) => {
    const new_planet = {
      url: planet.url,
      name: planet.name,
      rotation_period: planet.rotation_period,
      orbital_period: planet.orbital_period,
      diameter: convertToKm(planet.diameter),
      population: formatNumber(planet.population),
    };
    return new_planet;
  });

  const planet_list = {
    count: planets.count,
    next: planets.next,
    previous: planets.previous,
    results: expanded_results_promise,
  };

  return planet_list;
}

export async function getSpecieList(species: any) {
  const expanded_results_promise = species.results.map((specie: any) => {
    const new_specie = {
      url: specie.url,
      name: specie.name,
      language: specie.language,
      designation: specie.designation,
      average_height: formatHeight(specie.average_height),
      classification: specie.classification,
    };
    return new_specie;
  });

  const specie_list = {
    count: species.count,
    next: species.next,
    previous: species.previous,
    results: expanded_results_promise,
  };

  return specie_list;
}

export async function getStarshipList(starships: any) {
  const expanded_results_promise = starships.results.map((starship: any) => {
    const new_starship = {
      url: starship.url,
      name: starship.name,
      model: starship.model,
      cost_in_credits: formatNumber(starship.cost_in_credits),
      hyperdrive_rating: starship.hyperdrive_rating,
      length: `${formatNumber(starship.length)} m`,
    };
    return new_starship;
  });

  const starship_list = {
    count: starships.count,
    next: starships.next,
    previous: starships.previous,
    results: expanded_results_promise,
  };

  return starship_list;
}

export async function getVehicleList(vehicles: any) {
  const expanded_results_promise = vehicles.results.map((vehicle) => {
    const length = formatNumber(vehicle.length);
    const new_vehicle = {
      url: vehicle.url,
      name: vehicle.name,
      model: vehicle.model,
      length: `${length} m`,
      cost_in_credits: formatNumber(vehicle.cost_in_credits),
    };
    return new_vehicle;
  });

  const vehicle_list = {
    count: vehicles.count,
    next: vehicles.next,
    previous: vehicles.previous,
    results: expanded_results_promise,
  };

  return vehicle_list;
}

export async function getMovie(movie: any) {
  const attributes_list = ['name', 'url'];

  const expanded_movie_promise = {
    url: movie.url,
    title: movie.title,
    director: movie.director,
    producer: movie.producer,
    episode_id: movie.episode_id,
    opening_crawl: movie.opening_crawl,
    edited: getFormattedDateTime(movie.edited),
    created: getFormattedDateTime(movie.created),
    release_date: getFormattedDate(movie.release_date),
    species: await Promise.all(expandList(movie.species, attributes_list)),
    planets: await Promise.all(expandList(movie.planets, attributes_list)),
    vehicles: await Promise.all(expandList(movie.vehicles, attributes_list)),
    starships: await Promise.all(expandList(movie.starships, attributes_list)),
    characters: await Promise.all(expandList(movie.characters, attributes_list)),
  };

  return expanded_movie_promise;
}

export async function getCharacter(character: any) {
  const attributes_list = ['name', 'url'];

  const expanded_character_promise = {
    url: character.url,
    name: character.name,
    mass: `${character.mass} Kg`,
    gender: character.gender,
    eye_color: character.eye_color,
    hair_color: character.hair_color,
    skin_color: character.skin_color,
    birth_year: character.birth_year,
    height: formatHeight(character.height),
    edited: getFormattedDateTime(character.edited),
    created: getFormattedDateTime(character.created),
    homeworld: await expandLink(character.homeworld),
    films: await Promise.all(expandList(character.films, ['title', 'url'])),
    species: await Promise.all(expandList(character.species, attributes_list)),
    vehicles: await Promise.all(expandList(character.vehicles, attributes_list)),
    starships: await Promise.all(expandList(character.starships, attributes_list)),
  };

  return expanded_character_promise;
}

export async function getPlanet(planet: any) {
  const attributes_list = ['name', 'url'];
  const expanded_planet_promise = {
    url: planet.url,
    name: planet.name,
    climate: planet.climate,
    gravity: planet.gravity,
    terrain: planet.terrain,
    surface_water: planet.surface_water,
    orbital_period: planet.orbital_period,
    rotation_period: planet.rotation_period,
    diameter: convertToKm(planet.diameter),
    population: formatNumber(planet.population),
    edited: getFormattedDateTime(planet.edited),
    created: getFormattedDateTime(planet.created),
    films: await Promise.all(expandList(planet.films, ['title', 'url'])),
    residents: await Promise.all(expandList(planet.residents, attributes_list)),
  };

  return expanded_planet_promise;
}

export async function getStarship(starship: any) {
  const attributes_list = ['name', 'url'];
  const expanded_starship_promise = {
    url: starship.url,
    name: starship.name,
    MGLT: starship.MGLT,
    model: starship.model,
    consumables: starship.consumables,
    cost_in_credits: formatNumber(starship.cost_in_credits),
    crew: starship.crew,
    passengers: formatNumber(starship.passengers),
    manufacturer: starship.manufacturer,
    hyperdrive_rating: starship.hyperdrive_rating,
    length: `${formatNumber(starship.length)} m`,
    cargo_capacity: formatNumber(starship.cargo_capacity),
    edited: getFormattedDateTime(starship.edited),
    created: getFormattedDateTime(starship.created),
    films: await Promise.all(expandList(starship.films, ['title', 'url'])),
    pilots: await Promise.all(expandList(starship.pilots, attributes_list)),
  };

  return expanded_starship_promise;
}

export async function getVehicle(vehicle: any) {
  const attributes_list = ['name', 'url'];
  const expanded_vehicle_promise = {
    url: vehicle.url,
    name: vehicle.name,
    crew: vehicle.crew,
    model: vehicle.model,
    consumables: vehicle.consumables,
    manufacturer: vehicle.manufacturer,
    vehicle_class: vehicle.vehicle_class,
    length: `${formatNumber(vehicle.length)} m`,
    passengers: formatNumber(vehicle.passengers),
    edited: getFormattedDateTime(vehicle.edited),
    created: getFormattedDateTime(vehicle.created),
    cargo_capacity: formatNumber(vehicle.cargo_capacity),
    cost_in_credits: formatNumber(vehicle.cost_in_credits),
    max_atmosphering_speed: vehicle.max_atmosphering_speed,
    films: await Promise.all(expandList(vehicle.films, ['title', 'url'])),
    pilots: await Promise.all(expandList(vehicle.pilots, attributes_list)),
  };

  return expanded_vehicle_promise;
}

export async function getSpecie(specie: any) {
  const attributes_list = ['name', 'url'];

  const expanded_specie_promise = {
    url: specie.url,
    name: specie.name,
    classification: specie.classification,
    designation: specie.designation,
    average_height: formatHeight(specie.average_height),
    skin_colors: specie.skin_colors,
    hair_colors: specie.hair_colors,
    eye_colors: specie.eye_colors,
    average_lifespan: specie.average_lifespan,
    language: specie.language,
    edited: getFormattedDateTime(specie.edited),
    created: getFormattedDateTime(specie.created),
    homeworld: await expandLink(specie.homeworld),
    films: await Promise.all(expandList(specie.films, ['title', 'url'])),
    people: await Promise.all(expandList(specie.people, attributes_list)),
  };

  return expanded_specie_promise;
}
