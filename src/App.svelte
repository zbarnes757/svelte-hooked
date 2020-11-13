<script lang="ts">
  import { onMount } from 'svelte';
  import Header from './components/Header.svelte';
  import Movie from './components/Movie.svelte';
  import Search from './components/Search.svelte';
  import { getMovies } from './services/movies';
  import type { Movie as MovieModel } from './services/movies';

  let searchTerm: string;
  let moviePromise: Promise<MovieModel[]> = Promise.resolve([]);

  onMount(async () => {
    moviePromise = getMovies('man');
  });

  function handleSubmit() {
    moviePromise = getMovies(searchTerm);
  }
</script>

<style>
  main {
    text-align: center;
    margin-bottom: 5em;
  }

  .movies {
    display: grid;
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
    }

    .movies {
      grid-template-columns: repeat(4, 1fr);
    }
  }

  .intro {
    font-size: large;
  }

  .errorMessage {
    margin: auto;
    font-weight: bold;
    color: rgb(161, 15, 15);
    grid-column: span 4;
  }
</style>

<main>
  <Header text="HOOKED" />
  <Search bind:search={searchTerm} on:submit={handleSubmit} />

  <p class="intro">Sharing a few of our favourite movies</p>

  <div class="movies">
    {#await moviePromise}
      <span>loading...</span>
    {:then movies}
      {#each movies as movie}
        <Movie {movie} />
      {/each}
    {:catch err}
      <div class="errorMessage">{err.message}</div>
    {/await}
  </div>
</main>
