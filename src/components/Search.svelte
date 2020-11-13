<script lang="ts">
  import { createEventDispatcher } from 'svelte';

  export let search: string = '';

  const dispatch = createEventDispatcher();

  const submit = () => dispatch('submit');
</script>

<style>
  form {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    margin-top: 10px;
  }
</style>

<form>
  <input type="text" bind:value={search} />

  <button type="submit" on:click|preventDefault={submit}>Search</button>
</form>
