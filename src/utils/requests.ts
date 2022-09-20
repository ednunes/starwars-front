import axios from 'axios';

export function expandList(list, attributes_list = []) {
  const promises = list.map((resource) => {
    const promise = axios.get(resource).then((response) => {
      let expanded_data = response.data.name;
      if (attributes_list.length) {
        expanded_data = attributes_list.reduce((acc, item) => {
          return { ...acc, [item]: response.data[item] };
        }, {});
      }
      return expanded_data;
    });
    return promise;
  });
  return promises;
}

export async function expandLink(resource) {
  return axios.get(resource).then((response) => response.data.name);
}

export async function getCharacterList(characters) {
  const expanded_results_promise = characters.results.map(async (character) => {
    const new_character = {
      url: character.url,
      name: character.name,
      height: character.height,
      birth_year: character.birth_year,
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

export async function getMovieList(movies) {
  const expanded_results_promise = movies.results.map((movie) => {
    const new_movie = {
      url: movie.url,
      title: movie.title,
      director: movie.director,
      episode_id: movie.episode_id,
      release_date: movie.release_date,
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

export async function getMovie(movie) {
  const attributes_list = ['name', 'url'];

  const expanded_movie_promise = {
    url: movie.url,
    title: movie.title,
    edited: movie.edited,
    created: movie.created,
    director: movie.director,
    producer: movie.producer,
    episode_id: movie.episode_id,
    release_date: movie.release_date,
    opening_crawl: movie.opening_crawl,
    species: await Promise.all(expandList(movie.species, attributes_list)),
    planets: await Promise.all(expandList(movie.planets, attributes_list)),
    vehicles: await Promise.all(expandList(movie.vehicles, attributes_list)),
    starships: await Promise.all(expandList(movie.starships, attributes_list)),
    characters: await Promise.all(expandList(movie.characters, attributes_list)),
  };

  return expanded_movie_promise;
}

export async function getCharacter(character) {
  const attributes_list = ['name', 'url'];

  const expanded_character_promise = {
    url: character.url,
    name: character.name,
    mass: character.mass,
    edited: character.edited,
    height: character.height,
    gender: character.gender,
    created: character.created,
    eye_color: character.eye_color,
    hair_color: character.hair_color,
    skin_color: character.skin_color,
    birth_year: character.birth_year,
    homeworld: await expandLink(character.homeworld),
    species: await Promise.all(expandList(character.species, attributes_list)),
    vehicles: await Promise.all(expandList(character.vehicles, attributes_list)),
    starships: await Promise.all(expandList(character.starships, attributes_list)),
  };

  return expanded_character_promise;
}
