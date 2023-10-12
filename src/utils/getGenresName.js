import { GENRES } from "../services/tmdb";

const getGenresName = (genreIds) => {
  const genreNames = [];

  genreIds.forEach(id => {
    const genre = GENRES.find(genre => genre.id === id);
    if (genre) {
      genreNames.push(genre.name);
    }
  });

  return genreNames;
};

export default getGenresName;
