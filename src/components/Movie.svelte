<script lang="ts">
  import type { Movie } from '../services/movies';
  export let movie: Movie;

  const DEFAULT_PLACEHOLDER_IMAGE =
    'https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_SX300.jpg';

  let poster =
    movie.Poster === 'N/A' ? DEFAULT_PLACEHOLDER_IMAGE : movie.Poster;
</script>

<style>
  .movie {
    padding: 5px 25px 10px 25px;
  }
</style>

<div class="movie">
  <h2>{movie.Title}</h2>
  <div>
    <img src={poster} alt={`The movie titled: ${movie.Title}`} width="200" />
  </div>
  <p>{movie.Year}</p>
</div>
